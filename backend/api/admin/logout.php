<?php
/**
 * Admin Session Revocation & Secure Logout API Endpoint
 * Revokes session token in MySQL database
 * Share Market Expert Backend
 */

declare(strict_types=1);

require_once __DIR__ . '/../../config/db.php';
require_once __DIR__ . '/../../config/security.php';

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    sendJsonResponse(405, ['success' => false, 'error' => 'Method Not Allowed']);
}

$db = requireDatabase($pdo);
$token = getBearerToken();

if (!empty($token)) {
    try {
        $stmt = $db->prepare("DELETE FROM `admin_sessions` WHERE `token` = :token");
        $stmt->execute([':token' => $token]);
    } catch (PDOException $e) {
        error_log("Session Revocation Error: " . $e->getMessage());
    }
}

sendJsonResponse(200, [
    'success' => true,
    'message' => 'Session successfully revoked and logged out.'
]);
