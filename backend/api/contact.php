<?php
declare(strict_types=1);

require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../config/security.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendJsonResponse(405, ['success' => false, 'error' => 'Method Not Allowed']);
}

// Check Rate Limit (max 5 submissions per 60 seconds)
if (!checkRateLimit('contact_form', 5, 60)) {
    sendJsonResponse(429, [
        'success' => false,
        'error' => 'Too many submissions. Please wait a minute before trying again.'
    ]);
}

$input = json_decode(file_get_contents('php://input'), true) ?? $_POST;

$fullName = sanitizeInput($input['full_name'] ?? '');
$mobileNumber = sanitizeInput($input['mobile_number'] ?? '');
$state = sanitizeInput($input['state'] ?? '');
$message = sanitizeInput($input['message'] ?? '');
$ipAddress = $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';

// Validation
if (empty($fullName)) {
    sendJsonResponse(400, ['success' => false, 'error' => 'Full Name is required.']);
}

if (!isValidIndianMobile($mobileNumber)) {
    sendJsonResponse(400, ['success' => false, 'error' => 'Please provide a valid 10-digit Indian mobile number.']);
}

if ($pdo) {
    try {
        $stmt = $pdo->prepare("
            INSERT INTO `contacts` (`full_name`, `mobile_number`, `state`, `message`, `ip_address`, `status`)
            VALUES (:name, :mobile, :state, :message, :ip, 'unread')
        ");
        $stmt->execute([
            ':name'    => $fullName,
            ':mobile'  => $mobileNumber,
            ':state'   => !empty($state) ? $state : null,
            ':message' => !empty($message) ? $message : null,
            ':ip'      => $ipAddress,
        ]);

        sendJsonResponse(200, [
            'success' => true,
            'message' => 'Thank you. Your message has been received by our academic desk.'
        ]);
    } catch (PDOException $e) {
        error_log("Contact Insert Error: " . $e->getMessage());
        sendJsonResponse(500, ['success' => false, 'error' => 'Database storage error. Please try again later.']);
    }
} else {
    // Fallback response if MySQL is not yet configured on this hosting instance
    sendJsonResponse(200, [
        'success' => true,
        'message' => 'Enquiry recorded successfully. (Demo/Fallback Mode)'
    ]);
}
