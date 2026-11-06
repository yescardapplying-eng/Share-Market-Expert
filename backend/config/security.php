<?php
/**
 * Security & Rate Limiting Module
 * Share Market Expert Backend
 */

declare(strict_types=1);

if (!defined('SME_BACKEND_INIT')) {
    define('SME_BACKEND_INIT', true);
}

// CORS Policy Configuration
$allowedOrigins = [
    'https://sharemarketexpert.in',
    'https://www.sharemarketexpert.in',
    'http://localhost:3000',
    'http://localhost:3001'
];

$httpOrigin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($httpOrigin, $allowedOrigins, true)) {
    header("Access-Control-Allow-Origin: {$httpOrigin}");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

/**
 * Basic IP Rate Limiting to prevent brute-force and form spam
 */
function checkRateLimit(string $action = 'submit', int $maxRequests = 10, int $windowSeconds = 60): bool {
    $clientIp = $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';
    $rateLimitFile = sys_get_temp_dir() . "/sme_rate_" . md5($clientIp . '_' . $action) . ".json";
    
    $now = time();
    $data = ['count' => 0, 'start' => $now];

    if (file_exists($rateLimitFile)) {
        $content = file_get_contents($rateLimitFile);
        $decoded = json_decode($content, true);
        if (is_array($decoded) && isset($decoded['count'], $decoded['start'])) {
            if ($now - $decoded['start'] < $windowSeconds) {
                $data = $decoded;
            }
        }
    }

    if ($data['count'] >= $maxRequests) {
        return false; // Rate limit exceeded
    }

    $data['count']++;
    file_put_contents($rateLimitFile, json_encode($data), LOCK_EX);
    return true;
}

/**
 * Validate Indian 10-digit mobile number format
 */
function isValidIndianMobile(string $mobile): bool {
    $clean = preg_replace('/\D/', '', $mobile);
    return (bool) preg_match('/^[6-9]\d{9}$/', $clean);
}
