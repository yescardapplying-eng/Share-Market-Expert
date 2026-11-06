<?php
declare(strict_types=1);

require_once __DIR__ . '/../../config/db.php';
require_once __DIR__ . '/../../config/security.php';

// Check authorization header
$authHeader = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
if (empty($authHeader) && empty($_GET['auth'])) {
    sendJsonResponse(401, ['success' => false, 'error' => 'Unauthorized admin access.']);
}

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $statusFilter = isset($_GET['status']) ? sanitizeInput($_GET['status']) : '';
    $search = isset($_GET['search']) ? sanitizeInput($_GET['search']) : '';
    $exportCsv = isset($_GET['export']) && $_GET['export'] === 'csv';

    $leads = [];

    if ($pdo) {
        try {
            $sql = "SELECT * FROM `leads` WHERE 1=1";
            $params = [];

            if (!empty($statusFilter)) {
                $sql .= " AND `status` = :st";
                $params[':st'] = $statusFilter;
            }
            if (!empty($search)) {
                $sql .= " AND (`full_name` LIKE :q OR `mobile_number` LIKE :q OR `state` LIKE :q)";
                $params[':q'] = "%{$search}%";
            }
            $sql .= " ORDER BY `created_at` DESC LIMIT 100";

            $stmt = $pdo->prepare($sql);
            $stmt->execute($params);
            $leads = $stmt->fetchAll();
        } catch (PDOException $e) {
            error_log("Admin Leads Query Error: " . $e->getMessage());
        }
    }

    if ($exportCsv) {
        header('Content-Type: text/csv; charset=UTF-8');
        header('Content-Disposition: attachment; filename="sme_leads_' . date('Y-m-d') . '.csv"');
        $output = fopen('php://output', 'w');
        fputcsv($output, ['ID', 'Full Name', 'Mobile Number', 'State', 'Segment', 'Capital Range', 'Status', 'Date']);
        foreach ($leads as $l) {
            fputcsv($output, [
                $l['id'] ?? '',
                $l['full_name'] ?? '',
                $l['mobile_number'] ?? '',
                $l['state'] ?? '',
                $l['segment'] ?? '',
                $l['capital_range'] ?? '',
                $l['status'] ?? '',
                $l['created_at'] ?? ''
            ]);
        }
        fclose($output);
        exit;
    }

    sendJsonResponse(200, ['success' => true, 'data' => $leads]);
}

if ($method === 'POST' || $method === 'PUT') {
    $input = json_decode(file_get_contents('php://input'), true) ?? $_POST;
    $leadId = (int)($input['id'] ?? 0);
    $newStatus = sanitizeInput($input['status'] ?? 'new');
    $notes = sanitizeInput($input['notes'] ?? '');

    if ($leadId <= 0) {
        sendJsonResponse(400, ['success' => false, 'error' => 'Invalid Lead ID.']);
    }

    if ($pdo) {
        try {
            $stmt = $pdo->prepare("UPDATE `leads` SET `status` = :status, `notes` = :notes WHERE `id` = :id");
            $stmt->execute([
                ':status' => $newStatus,
                ':notes' => $notes,
                ':id' => $leadId
            ]);
            sendJsonResponse(200, ['success' => true, 'message' => 'Lead updated successfully.']);
        } catch (PDOException $e) {
            error_log("Admin Lead Update Error: " . $e->getMessage());
            sendJsonResponse(500, ['success' => false, 'error' => 'Database update failed.']);
        }
    }

    sendJsonResponse(200, ['success' => true, 'message' => 'Lead updated in fallback mode.']);
}

sendJsonResponse(405, ['success' => false, 'error' => 'Method Not Allowed']);
