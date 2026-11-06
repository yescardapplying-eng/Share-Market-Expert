<?php
declare(strict_types=1);

require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../config/security.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    sendJsonResponse(405, ['success' => false, 'error' => 'Method Not Allowed']);
}

// Default settings adhering to max 1-second delay and every-page visit requirement
$settings = [
    'brand_name' => 'Share Market Expert',
    'brand_location' => 'Vashi, Navi Mumbai, Maharashtra, India',
    'contact_phone' => '+91 70396 54680',
    'contact_email' => 'info@sharemarketexpert.in',
    'popup_enabled' => true,
    'popup_delay_ms' => 1000,
    'popup_delay_seconds' => 1.0,
    'popup_frequency_behaviour' => 'every_page',
    'popup_heading' => 'Share Market Expert',
    'popup_subtitle' => '',
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
            } elseif (is_numeric($val) && strpos((string)$val, '.') === false) {
                $val = (int)$val;
            } elseif (is_numeric($val)) {
                $val = (float)$val;
            }
            $settings[$key] = $val;
        }

        // Strictly enforce maximum 1000ms / 1.0s delay rule
        if (isset($settings['popup_delay_ms'])) {
            $settings['popup_delay_ms'] = max(0, min(1000, (int)$settings['popup_delay_ms']));
            $settings['popup_delay_seconds'] = round($settings['popup_delay_ms'] / 1000, 2);
        } elseif (isset($settings['popup_delay_seconds'])) {
            $delaySec = max(0.0, min(1.0, (float)$settings['popup_delay_seconds']));
            $settings['popup_delay_seconds'] = $delaySec;
            $settings['popup_delay_ms'] = (int)round($delaySec * 1000);
        }

        // Always enforce every_page behavior
        $settings['popup_frequency_behaviour'] = 'every_page';
        $settings['popup_frequency_hours'] = 0;
    } catch (PDOException $e) {
        error_log("Settings Fetch Error: " . $e->getMessage());
    }
}

sendJsonResponse(200, ['success' => true, 'data' => $settings]);

