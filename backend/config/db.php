<?php
/**
 * Database Connection & Environment Configuration
 * Share Market Expert Backend Architecture (Hostinger Production Ready)
 */

declare(strict_types=1);

if (!defined('SME_BACKEND_INIT')) {
    define('SME_BACKEND_INIT', true);
}

// Basic security headers for all API endpoints
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: SAMEORIGIN');
header('X-XSS-Protection: 1; mode=block');
header('Content-Type: application/json; charset=UTF-8');

// 1. Check for dedicated local env file (Hostinger hPanel friendly)
$localEnvFile = __DIR__ . '/env.php';
$localConfig = [];
if (file_exists($localEnvFile)) {
    $loaded = include $localEnvFile;
    if (is_array($loaded)) {
        $localConfig = $loaded;
    }
}

// 2. Resolve credentials in priority order: env.php > getenv() > $_ENV > $_SERVER
$dbHost = $localConfig['DB_HOST'] ?? getenv('DB_HOST') ?: ($_ENV['DB_HOST'] ?? ($_SERVER['DB_HOST'] ?? 'localhost'));
$dbName = $localConfig['DB_NAME'] ?? getenv('DB_NAME') ?: ($_ENV['DB_NAME'] ?? ($_SERVER['DB_NAME'] ?? ''));
$dbUser = $localConfig['DB_USER'] ?? getenv('DB_USER') ?: ($_ENV['DB_USER'] ?? ($_SERVER['DB_USER'] ?? ''));
$dbPass = $localConfig['DB_PASS'] ?? (getenv('DB_PASS') !== false ? getenv('DB_PASS') : ($_ENV['DB_PASS'] ?? ($_SERVER['DB_PASS'] ?? '')));
$dbPort = $localConfig['DB_PORT'] ?? getenv('DB_PORT') ?: ($_ENV['DB_PORT'] ?? ($_SERVER['DB_PORT'] ?? '3306'));

$pdo = null;

if (!empty($dbName) && !empty($dbUser)) {
    try {
        $dsn = "mysql:host={$dbHost};port={$dbPort};dbname={$dbName};charset=utf8mb4";
        $options = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
            PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8mb4 COLLATE utf8mb4_unicode_ci"
        ];
        $pdo = new PDO($dsn, (string)$dbUser, (string)$dbPass, $options);
    } catch (PDOException $e) {
        // Log database connection error securely without leaking passwords to response
        error_log("Hostinger Database Connection Error: " . $e->getMessage());
        $pdo = null;
    }
} else {
    error_log("Database configuration missing: DB_NAME or DB_USER not set.");
}

/**
 * Strict database requirement checker:
 * Returns HTTP 503 Service Unavailable if database is down or not configured.
 */
function requireDatabase(?PDO $pdo): PDO {
    if ($pdo === null) {
        sendJsonResponse(503, [
            'success' => false,
            'error' => 'Database service temporarily unavailable. Please try again shortly or contact support.'
        ]);
    }
    return $pdo;
}

/**
 * Helper to safely return standard JSON responses and terminate execution
 */
function sendJsonResponse(int $statusCode, array $data): void {
    http_response_code($statusCode);
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

/**
 * Helper to sanitize plain string inputs
 */
function sanitizeInput(?string $input): string {
    if ($input === null) return '';
    return htmlspecialchars(trim($input), ENT_QUOTES, 'UTF-8');
}
