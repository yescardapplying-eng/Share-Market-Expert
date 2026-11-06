<?php
/**
 * Admin Contact Inquiries Management API Endpoint
 * Protected by real server-side Bearer token authentication
 * Share Market Expert Backend
 */

declare(strict_types=1);

require_once __DIR__ . '/../../config/db.php';
require_once __DIR__ . '/../../config/security.php';

$db = requireDatabase($pdo);
$currentAdmin = requireAdminAuth($db);

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    try {
        $stmt = $db->query("
            SELECT `id`, `full_name`, `mobile_number`, `state`, `message`, `status`, `created_at`
            FROM `contacts`
            ORDER BY `created_at` DESC
            LIMIT 200
        ");
        $contacts = $stmt->fetchAll();

        sendJsonResponse(200, [
            'success' => true,
            'data' => $contacts
        ]);
    } catch (PDOException $e) {
        error_log("Admin Contacts Query Error: " . $e->getMessage());
        sendJsonResponse(500, ['success' => false, 'error' => 'Database query failed.']);
    }
}

if ($method === 'POST' || $method === 'PUT' || $method === 'PATCH') {
    $rawInput = file_get_contents('php://input');
    $input = !empty($rawInput) ? json_decode($rawInput, true) : $_POST;

    $contactId = (int)($input['id'] ?? 0);
    $status = sanitizeInput($input['status'] ?? 'unread');

    if ($contactId <= 0) {
        sendJsonResponse(400, ['success' => false, 'error' => 'Valid Contact ID required.']);
    }

    try {
        $stmt = $db->prepare("UPDATE `contacts` SET `status` = :st WHERE `id` = :id");
        $stmt->execute([':st' => $status, ':id' => $contactId]);

        sendJsonResponse(200, ['success' => true, 'message' => 'Contact status updated.']);
    } catch (PDOException $e) {
        error_log("Admin Contact Update Error: " . $e->getMessage());
        sendJsonResponse(500, ['success' => false, 'error' => 'Database update failed.']);
    }
}

sendJsonResponse(405, ['success' => false, 'error' => 'Method Not Allowed']);

