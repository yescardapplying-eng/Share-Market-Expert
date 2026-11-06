<?php
declare(strict_types=1);

require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../config/security.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    sendJsonResponse(405, ['success' => false, 'error' => 'Method Not Allowed']);
}

$settings = [
    'brand_name' => 'Share Market Expert',
    'brand_location' => 'Vashi, Navi Mumbai, Maharashtra, India',
    'contact_phone' => '+91 12345 67890',
    'contact_email' => 'info@sharemarketexpert.in',
    'popup_enabled' => true,
    'popup_delay_seconds' => 3,
    'popup_frequency_hours' => 24,
    'noorweb_link' => 'http://noorweb.in/'
];

if ($pdo) {
    try {
        $stmt = $pdo->query("SELECT setting_key, setting_value FROM `settings`");
        $rows = $stmt->fetchAll();
        foreach ($rows as $row) {
            $key = $row['setting_key'];
            $val = $row['setting_value'];
            if ($val === '1' || $val === '0') {
                $val = (bool)(int)$val;
            } elseif (is_numeric($val)) {
                $val = (int)$val;
            }
            $settings[$key] = $val;
        }
    } catch (PDOException $e) {
        error_log("Settings Fetch Error: " . $e->getMessage());
    }
}

sendJsonResponse(200, ['success' => true, 'data' => $settings]);
