<?php
/**
 * Admin Platform & Popup Settings API Endpoint
 * Allows authenticated administrators to configure modal timing, frequency, and display
 * Share Market Expert Backend
 */

declare(strict_types=1);

require_once __DIR__ . '/../../config/db.php';
require_once __DIR__ . '/../../config/security.php';

$db = requireDatabase($pdo);
$currentAdmin = requireAdminAuth($db);

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

if ($method === 'GET') {
    try {
        $stmt = $db->query("SELECT `setting_key`, `setting_value` FROM `settings`");
        $rows = $stmt->fetchAll();
        $settings = [];
        foreach ($rows as $row) {
            $settings[$row['setting_key']] = $row['setting_value'];
        }
        sendJsonResponse(200, ['success' => true, 'data' => $settings]);
    } catch (PDOException $e) {
        error_log("Admin Settings Query Error: " . $e->getMessage());
        sendJsonResponse(500, ['success' => false, 'error' => 'Database error loading settings.']);
    }
}

if ($method === 'POST' || $method === 'PUT') {
    $rawInput = file_get_contents('php://input');
    $input = !empty($rawInput) ? json_decode($rawInput, true) : $_POST;

    if (!is_array($input)) {
        sendJsonResponse(400, ['success' => false, 'error' => 'Invalid JSON payload.']);
    }

    $allowedSettings = [
        'popup_enabled',
        'popup_delay_seconds',
        'popup_frequency_hours',
        'popup_heading',
        'popup_subtitle',
        'contact_phone',
        'contact_email'
    ];

    try {
        $stmt = $db->prepare("
            INSERT INTO `settings` (`setting_key`, `setting_value`)
            VALUES (:k, :v)
            ON DUPLICATE KEY UPDATE `setting_value` = :v2
        ");

        foreach ($input as $k => $v) {
            if (in_array($k, $allowedSettings, true)) {
                $valStr = is_bool($v) ? ($v ? '1' : '0') : (string)$v;
                $stmt->execute([
                    ':k'  => $k,
                    ':v'  => $valStr,
                    ':v2' => $valStr
                ]);
            }
        }

        sendJsonResponse(200, [
            'success' => true,
            'message' => 'Settings saved successfully in database.'
        ]);
    } catch (PDOException $e) {
        error_log("Admin Settings Update Error: " . $e->getMessage());
        sendJsonResponse(500, ['success' => false, 'error' => 'Failed to save settings in database.']);
    }
}

sendJsonResponse(405, ['success' => false, 'error' => 'Method Not Allowed']);
