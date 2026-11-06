<?php
/**
 * Contact Us Inquiry API Endpoint
 * Handles submissions from the Contact Desk
 * Share Market Expert Backend
 */

declare(strict_types=1);

require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../config/security.php';

// Only allow POST
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    sendJsonResponse(405, ['success' => false, 'error' => 'Method Not Allowed']);
}

// IP Rate limit: max 5 submissions per 60 seconds
if (!checkRateLimit('contact_form', 5, 60)) {
    sendJsonResponse(429, [
        'success' => false,
        'error' => 'Too many submissions. Please wait a minute before trying again.'
    ]);
}

// Strict requirement: database must be available, else returns HTTP 503
$db = requireDatabase($pdo);

// Parse JSON or form POST body
$rawInput = file_get_contents('php://input');
$input = !empty($rawInput) ? json_decode($rawInput, true) : $_POST;

if (!is_array($input)) {
    sendJsonResponse(400, ['success' => false, 'error' => 'Invalid JSON input payload.']);
}

$fullName = sanitizeInput($input['full_name'] ?? '');
$mobileNumber = sanitizeInput($input['mobile_number'] ?? '');
$state = sanitizeInput($input['state'] ?? '');
$message = sanitizeInput($input['message'] ?? '');
$ipAddress = $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';

// Server-side validation
if (empty($fullName)) {
    sendJsonResponse(400, ['success' => false, 'error' => 'Full Name is required.']);
}

if (!isValidIndianMobile($mobileNumber)) {
    sendJsonResponse(400, ['success' => false, 'error' => 'Please provide a valid 10-digit Indian mobile number.']);
}

// Server-side validation of mandatory privacy and educational consent
$consentGiven = !empty($input['consent']) && ($input['consent'] === true || $input['consent'] === '1' || $input['consent'] === 1);
if (!$consentGiven) {
    sendJsonResponse(400, ['success' => false, 'error' => 'You must accept the privacy consent declaration to submit your message.']);
}

try {
    $stmt = $db->prepare("
        INSERT INTO `contacts` (`full_name`, `mobile_number`, `state`, `message`, `ip_address`, `status`)
        VALUES (:name, :mobile, :state, :message, :ip, 'unread')
    ");

    $stmt->execute([
        ':name'    => $fullName,
        ':mobile'  => preg_replace('/\D/', '', $mobileNumber),
        ':state'   => !empty($state) ? $state : null,
        ':message' => !empty($message) ? $message : null,
        ':ip'      => $ipAddress,
    ]);

    $insertedId = (int)$db->lastInsertId();

    sendJsonResponse(200, [
        'success' => true,
        'contact_id' => $insertedId,
        'message' => 'Thank you. Your message has been received by our academic desk in Vashi. We will respond within 2 to 4 business hours.'
    ]);
} catch (PDOException $e) {
    error_log("Database Contact Insert Error: " . $e->getMessage());
    sendJsonResponse(500, [
        'success' => false,
        'error' => 'Unable to record your message in the database. Please try again or reach us at +91 70396 54680.'
    ]);
}
