<?php
/**
 * Security, CORS & Server-Side Token Authentication Module
 * Share Market Expert Backend
 */

declare(strict_types=1);

if (!defined('SME_BACKEND_INIT')) {
    define('SME_BACKEND_INIT', true);
}

// -------------------------------------------------------------
// Production CORS Policy Configuration
// -------------------------------------------------------------
$allowedOrigins = [
    'https://sharemarketexpert.in',
    'https://www.sharemarketexpert.in',
    'https://api.sharemarketexpert.in',
    'http://localhost:3000',
    'http://localhost:3001'
];

$httpOrigin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (!empty($httpOrigin) && in_array($httpOrigin, $allowedOrigins, true)) {
    header("Access-Control-Allow-Origin: {$httpOrigin}");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With, Accept");
}

// Handle preflight OPTIONS request
if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
    http_response_code(204);
    exit;
}

/**
 * IP-based Rate Limiting to prevent brute-force attacks and spam
 */
function checkRateLimit(string $action = 'submit', int $maxRequests = 10, int $windowSeconds = 60): bool {
    $clientIp = $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';
    $rateLimitFile = sys_get_temp_dir() . "/sme_rate_" . md5($clientIp . '_' . $action) . ".json";
    
    $now = time();
    $data = ['count' => 0, 'start' => $now];

    if (file_exists($rateLimitFile)) {
        $content = @file_get_contents($rateLimitFile);
        if ($content) {
            $decoded = json_decode($content, true);
            if (is_array($decoded) && isset($decoded['count'], $decoded['start'])) {
                if ($now - $decoded['start'] < $windowSeconds) {
                    $data = $decoded;
                }
            }
        }
    }

    if ($data['count'] >= $maxRequests) {
        return false; // Limit exceeded
    }

    $data['count']++;
    @file_put_contents($rateLimitFile, json_encode($data), LOCK_EX);
    return true;
}

/**
 * Validate Indian 10-digit mobile number format
 */
function isValidIndianMobile(string $mobile): bool {
    $clean = preg_replace('/\D/', '', $mobile);
    return (bool) preg_match('/^[6-9]\d{9}$/', $clean);
}

/**
 * Extract Authorization Bearer token from request headers
 */
function getBearerToken(): ?string {
    $authHeader = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
    
    // Check apache_request_headers if available
    if (empty($authHeader) && function_exists('apache_request_headers')) {
        $headers = apache_request_headers();
        $authHeader = $headers['Authorization'] ?? ($headers['authorization'] ?? '');
    }

    if (!empty($authHeader) && preg_match('/Bearer\s+(\S+)/i', $authHeader, $matches)) {
        return $matches[1];
    }

    return null;
}

/**
 * Real Server-Side Admin Authentication Validator:
 * Validates token against the `admin_sessions` table in MySQL.
 * Returns the admin record on success, or terminates with HTTP 401 on failure.
 */
function requireAdminAuth(PDO $pdo): array {
    $token = getBearerToken();

    if (empty($token)) {
        sendJsonResponse(401, [
            'success' => false,
            'error' => 'Missing or invalid Authorization header. Access denied.'
        ]);
    }

    try {
        $stmt = $pdo->prepare("
            SELECT s.`id` as `session_id`, s.`expires_at`, a.`id`, a.`username`, a.`email`, a.`role`, a.`is_active`
            FROM `admin_sessions` s
            JOIN `admins` a ON s.`admin_id` = a.`id`
            WHERE s.`token` = :token AND s.`expires_at` > NOW() AND a.`is_active` = 1
            LIMIT 1
        ");
        $stmt->execute([':token' => $token]);
        $session = $stmt->fetch();

        if (!$session) {
            sendJsonResponse(401, [
                'success' => false,
                'error' => 'Session expired or invalid token. Please log in again.'
            ]);
        }

        return $session;
    } catch (PDOException $e) {
        error_log("Admin Auth Verification Error: " . $e->getMessage());
        sendJsonResponse(500, [
            'success' => false,
            'error' => 'Unable to verify administrative authorization.'
        ]);
    }

    exit;
}
