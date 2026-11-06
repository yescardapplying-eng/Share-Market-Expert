<?php
/**
 * Admin Leads Management API Endpoint
 * Protected by real server-side Bearer token authentication
 * Share Market Expert Backend
 */

declare(strict_types=1);

require_once __DIR__ . '/../../config/db.php';
require_once __DIR__ . '/../../config/security.php';

// Strict requirement: database must be available
$db = requireDatabase($pdo);

// Strict requirement: validate server-side session token
$currentAdmin = requireAdminAuth($db);

$method = $_SERVER['REQUEST_METHOD'];

// -------------------------------------------------------------
// GET: Fetch Leads with Filters, Search, Stats & CSV Export
// -------------------------------------------------------------
if ($method === 'GET') {
    $statusFilter = isset($_GET['status']) ? sanitizeInput($_GET['status']) : '';
    $segmentFilter = isset($_GET['segment']) ? sanitizeInput($_GET['segment']) : '';
    $search = isset($_GET['search']) ? sanitizeInput($_GET['search']) : '';
    $exportCsv = isset($_GET['export']) && $_GET['export'] === 'csv';

    try {
        // Query Overall Statistics for Dashboard Cards
        $statsStmt = $db->query("
            SELECT
                COUNT(*) as total,
                SUM(CASE WHEN `status` = 'new' THEN 1 ELSE 0 END) as new_count,
                SUM(CASE WHEN `status` = 'contacted' THEN 1 ELSE 0 END) as contacted_count,
                SUM(CASE WHEN `status` = 'enrolled' THEN 1 ELSE 0 END) as enrolled_count
            FROM `leads`
        ");
        $stats = $statsStmt->fetch() ?: ['total' => 0, 'new_count' => 0, 'contacted_count' => 0, 'enrolled_count' => 0];

        // Build dynamic query
        $sql = "SELECT `id`, `full_name`, `mobile_number`, `state`, `segment`, `capital_range`, `source_page`, `status`, `notes`, `created_at` FROM `leads` WHERE 1=1";
        $params = [];

        if (!empty($statusFilter) && $statusFilter !== 'all') {
            $sql .= " AND `status` = :st";
            $params[':st'] = $statusFilter;
        }

        if (!empty($segmentFilter) && $segmentFilter !== 'all') {
            $sql .= " AND `segment` = :seg";
            $params[':seg'] = $segmentFilter;
        }

        if (!empty($search)) {
            $sql .= " AND (`full_name` LIKE :q OR `mobile_number` LIKE :q OR `state` LIKE :q)";
            $params[':q'] = "%{$search}%";
        }

        $sql .= " ORDER BY `created_at` DESC";

        if (!$exportCsv) {
            $sql .= " LIMIT 200";
        }

        $stmt = $db->prepare($sql);
        $stmt->execute($params);
        $leads = $stmt->fetchAll();

        // Handle CSV Download
        if ($exportCsv) {
            header('Content-Type: text/csv; charset=UTF-8');
            header('Content-Disposition: attachment; filename="sme_leads_' . date('Y-m-d_His') . '.csv"');
            $output = fopen('php://output', 'w');
            
            // UTF-8 BOM for Microsoft Excel compatibility
            fprintf($output, chr(0xEF).chr(0xBB).chr(0xBF));
            
            fputcsv($output, ['ID', 'Full Name', 'Mobile Number', 'State', 'Segment', 'Capital Range', 'Status', 'Notes', 'Submission Date']);
            foreach ($leads as $l) {
                fputcsv($output, [
                    $l['id'] ?? '',
                    $l['full_name'] ?? '',
                    $l['mobile_number'] ?? '',
                    $l['state'] ?? 'N/A',
                    $l['segment'] ?? 'N/A',
                    $l['capital_range'] ?? 'N/A',
                    $l['status'] ?? 'new',
                    $l['notes'] ?? '',
                    $l['created_at'] ?? ''
                ]);
            }
            fclose($output);
            exit;
        }

        sendJsonResponse(200, [
            'success' => true,
            'stats' => [
                'total' => (int)($stats['total'] ?? 0),
                'new' => (int)($stats['new_count'] ?? 0),
                'contacted' => (int)($stats['contacted_count'] ?? 0),
                'enrolled' => (int)($stats['enrolled_count'] ?? 0),
            ],
            'data' => $leads
        ]);
    } catch (PDOException $e) {
        error_log("Admin Leads Query Error: " . $e->getMessage());
        sendJsonResponse(500, ['success' => false, 'error' => 'Database query failed.']);
    }
}

// -------------------------------------------------------------
// POST / PUT / PATCH: Update Lead Status & Notes
// -------------------------------------------------------------
if ($method === 'POST' || $method === 'PUT' || $method === 'PATCH') {
    $rawInput = file_get_contents('php://input');
    $input = !empty($rawInput) ? json_decode($rawInput, true) : $_POST;

    $leadId = (int)($input['id'] ?? 0);
    $newStatus = sanitizeInput($input['status'] ?? '');
    $notes = isset($input['notes']) ? sanitizeInput($input['notes']) : null;

    $allowedStatuses = ['new', 'contacted', 'enrolled', 'not_interested', 'invalid'];

    if ($leadId <= 0) {
        sendJsonResponse(400, ['success' => false, 'error' => 'Valid Lead ID is required.']);
    }

    if (!empty($newStatus) && !in_array($newStatus, $allowedStatuses, true)) {
        sendJsonResponse(400, ['success' => false, 'error' => 'Invalid status value.']);
    }

    try {
        $updateFields = [];
        $params = [':id' => $leadId];

        if (!empty($newStatus)) {
            $updateFields[] = "`status` = :st";
            $params[':st'] = $newStatus;
        }

        if ($notes !== null) {
            $updateFields[] = "`notes` = :notes";
            $params[':notes'] = $notes;
        }

        if (empty($updateFields)) {
            sendJsonResponse(400, ['success' => false, 'error' => 'No fields to update provided.']);
        }

        $updateSql = "UPDATE `leads` SET " . implode(', ', $updateFields) . " WHERE `id` = :id";
        $stmt = $db->prepare($updateSql);
        $stmt->execute($params);

        sendJsonResponse(200, [
            'success' => true,
            'message' => 'Lead updated successfully in database.'
        ]);
    } catch (PDOException $e) {
        error_log("Admin Lead Update Error: " . $e->getMessage());
        sendJsonResponse(500, ['success' => false, 'error' => 'Database update error.']);
    }
}

// -------------------------------------------------------------
// DELETE: Delete a lead (Super Admin only)
// -------------------------------------------------------------
if ($method === 'DELETE') {
    if ($currentAdmin['role'] !== 'super_admin') {
        sendJsonResponse(403, ['success' => false, 'error' => 'Only super_admin role can delete records.']);
    }

    $leadId = isset($_GET['id']) ? (int)$_GET['id'] : 0;
    if ($leadId <= 0) {
        sendJsonResponse(400, ['success' => false, 'error' => 'Valid Lead ID required.']);
    }

    try {
        $stmt = $db->prepare("DELETE FROM `leads` WHERE `id` = :id");
        $stmt->execute([':id' => $leadId]);
        sendJsonResponse(200, ['success' => true, 'message' => 'Record deleted.']);
    } catch (PDOException $e) {
        error_log("Admin Lead Delete Error: " . $e->getMessage());
        sendJsonResponse(500, ['success' => false, 'error' => 'Failed to delete record.']);
    }
}

sendJsonResponse(405, ['success' => false, 'error' => 'Method Not Allowed']);
