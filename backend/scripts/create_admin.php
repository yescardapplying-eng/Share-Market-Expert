<?php
/**
 * Secure Admin Account Creation Script
 * Share Market Expert Backend
 * 
 * Usage via CLI:
 *   php create_admin.php <username> <email> <password>
 * Example:
 *   php create_admin.php admin_sme admin@sharemarketexpert.in "YourStrongPassword123#!"
 */

declare(strict_types=1);

require_once __DIR__ . '/../config/db.php';

// Security check: Only allow CLI execution to prevent unauthenticated web execution
if (php_sapi_name() !== 'cli') {
    http_response_code(403);
    echo json_encode(['error' => 'This script can only be executed via CLI terminal.']);
    exit(1);
}

$db = requireDatabase($pdo);

$username = $argv[1] ?? null;
$email = $argv[2] ?? null;
$password = $argv[3] ?? null;

if (empty($username) || empty($email) || empty($password)) {
    echo "Usage: php create_admin.php <username> <email> <password>\n";
    echo "Example: php create_admin.php admin_sme admin@sharemarketexpert.in 'YourStrongPassword123#!'\n";
    exit(1);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Error: Invalid email format.\n";
    exit(1);
}

if (strlen($password) < 8) {
    echo "Error: Password must be at least 8 characters long.\n";
    exit(1);
}

$passwordHash = password_hash($password, PASSWORD_BCRYPT, ['cost' => 12]);

try {
    // Check if user exists
    $checkStmt = $db->prepare("SELECT `id` FROM `admins` WHERE `username` = :u OR `email` = :e LIMIT 1");
    $checkStmt->execute([':u' => $username, ':e' => $email]);
    $existing = $checkStmt->fetch();

    if ($existing) {
        $updateStmt = $db->prepare("
            UPDATE `admins`
            SET `password_hash` = :hash, `role` = 'super_admin', `is_active` = 1, `updated_at` = NOW()
            WHERE `id` = :id
        ");
        $updateStmt->execute([':hash' => $passwordHash, ':id' => $existing['id']]);
        echo "Success: Existing admin '{$username}' password has been updated securely.\n";
    } else {
        $insertStmt = $db->prepare("
            INSERT INTO `admins` (`username`, `email`, `password_hash`, `role`, `is_active`)
            VALUES (:u, :e, :hash, 'super_admin', 1)
        ");
        $insertStmt->execute([':u' => $username, ':e' => $email, ':hash' => $passwordHash]);
        echo "Success: New super_admin '{$username}' created successfully.\n";
    }
} catch (PDOException $e) {
    echo "Database Error: " . $e->getMessage() . "\n";
    exit(1);
}

