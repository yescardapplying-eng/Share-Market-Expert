<?php
/**
 * Admin Secure Authentication API Endpoint
 * Verifies credentials against MySQL with BCRYPT and issues server-side session tokens
 * Share Market Expert Backend
 */

declare(strict_types=1);

require_once __DIR__ . '/../../config/db.php';
require_once __DIR__ . '/../../config/security.php';

// Only allow POST
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    sendJsonResponse(405, ['success' => false, 'error' => 'Method Not Allowed']);
}

// Rate limit: 5 login attempts per 5 minutes per IP
if (!checkRateLimit('admin_login', 5, 300)) {
    sendJsonResponse(429, [
        'success' => false,
        'error' => 'Too many login attempts from this IP. Please wait 5 minutes before trying again.'
    ]);
}

// Require real database connection
$db = requireDatabase($pdo);

$rawInput = file_get_contents('php://input');
$input = !empty($rawInput) ? json_decode($rawInput, true) : $_POST;

$username = trim((string)($input['username'] ?? ''));
$password = (string)($input['password'] ?? '');

if (empty($username) || empty($password)) {
    sendJsonResponse(400, ['success' => false, 'error' => 'Username and password are required.']);
}

try {
    $stmt = $db->prepare("
        SELECT `id`, `username`, `email`, `password_hash`, `role`, `is_active`, `failed_login_attempts`, `locked_until`
        FROM `admins`
        WHERE (`username` = :u OR `email` = :u)
        LIMIT 1
    ");
    $stmt->execute([':u' => $username]);
    $admin = $stmt->fetch();

    // Check if account exists
    if (!$admin) {
        sendJsonResponse(401, ['success' => false, 'error' => 'Invalid username or password credentials.']);
    }

    // Check if account is active
    if ((int)$admin['is_active'] !== 1) {
        sendJsonResponse(403, ['success' => false, 'error' => 'This administrative account is disabled. Contact system administrator.']);
    }

    // Check account lockout
    if (!empty($admin['locked_until']) && strtotime($admin['locked_until']) > time()) {
        sendJsonResponse(403, [
            'success' => false,
            'error' => 'Account is temporarily locked due to multiple failed login attempts. Please try again later.'
        ]);
    }

    // Verify password with BCRYPT
    if (!password_verify($password, $admin['password_hash'])) {
        $failedAttempts = (int)$admin['failed_login_attempts'] + 1;
        $lockSql = "";
        $params = [':id' => $admin['id'], ':failed' => $failedAttempts];

        if ($failedAttempts >= 5) {
            $lockSql = ", `locked_until` = DATE_ADD(NOW(), INTERVAL 15 MINUTE)";
        }

        $db->prepare("UPDATE `admins` SET `failed_login_attempts` = :failed {$lockSql} WHERE `id` = :id")
           ->execute($params);

        sendJsonResponse(401, ['success' => false, 'error' => 'Invalid username or password credentials.']);
    }

    // Successful Login: reset failed attempts, update last login
    $db->prepare("
        UPDATE `admins`
        SET `last_login` = NOW(),
            `failed_login_attempts` = 0,
            `locked_until` = NULL
        WHERE `id` = :id
    ")->execute([':id' => $admin['id']]);

    // Generate cryptographic 64-hex-char token
    $sessionToken = bin2hex(random_bytes(32));
    $ipAddress = $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';
    $userAgent = substr($_SERVER['HTTP_USER_AGENT'] ?? '', 0, 250);

    // Save session in database (valid for 7 days)
    $stmtSession = $db->prepare("
        INSERT INTO `admin_sessions` (`admin_id`, `token`, `ip_address`, `user_agent`, `expires_at`)
        VALUES (:aid, :token, :ip, :ua, DATE_ADD(NOW(), INTERVAL 7 DAY))
    ");
    $stmtSession->execute([
        ':aid'   => $admin['id'],
        ':token' => $sessionToken,
        ':ip'    => $ipAddress,
        ':ua'    => $userAgent
    ]);

    sendJsonResponse(200, [
        'success' => true,
        'token' => $sessionToken,
        'admin' => [
            'id' => (int)$admin['id'],
            'username' => $admin['username'],
            'email' => $admin['email'],
            'role' => $admin['role']
        ],
        'message' => 'Authenticated successfully.'
    ]);
} catch (PDOException $e) {
    error_log("Admin Login PDO Error: " . $e->getMessage());
    sendJsonResponse(500, ['success' => false, 'error' => 'Authentication service error. Please try again.']);
}
