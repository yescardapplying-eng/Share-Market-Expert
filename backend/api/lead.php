<?php
/**
 * Lead Registration API Endpoint
 * Handles popup enquiry modal submissions
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
if (!checkRateLimit('lead_popup', 5, 60)) {
    sendJsonResponse(429, [
        'success' => false,
        'error' => 'Too many requests. Please wait a minute before submitting again.'
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
$segment = sanitizeInput($input['segment'] ?? 'Option (Call-Put)');
$capitalRange = sanitizeInput($input['capital_range'] ?? 'Below Rs 50,000');
$sourcePage = sanitizeInput($input['source_page'] ?? '/');
$ipAddress = $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';
$userAgent = substr($_SERVER['HTTP_USER_AGENT'] ?? '', 0, 250);

// Server-side validation
if (empty($fullName)) {
    sendJsonResponse(400, ['success' => false, 'error' => 'Full Name is required.']);
}

if (!isValidIndianMobile($mobileNumber)) {
    sendJsonResponse(400, ['success' => false, 'error' => 'Please provide a valid 10-digit Indian mobile number.']);
}

try {
    $stmt = $db->prepare("
        INSERT INTO `leads` (`full_name`, `mobile_number`, `state`, `segment`, `capital_range`, `source_page`, `ip_address`, `user_agent`, `status`)
        VALUES (:name, :mobile, :state, :segment, :cap, :src, :ip, :ua, 'new')
    ");

    $stmt->execute([
        ':name'    => $fullName,
        ':mobile'  => preg_replace('/\D/', '', $mobileNumber),
        ':state'   => !empty($state) ? $state : null,
        ':segment' => !empty($segment) ? $segment : null,
        ':cap'     => !empty($capitalRange) ? $capitalRange : null,
        ':src'     => $sourcePage,
        ':ip'      => $ipAddress,
        ':ua'      => $userAgent
    ]);

    $insertedId = (int)$db->lastInsertId();

    sendJsonResponse(200, [
        'success' => true,
        'lead_id' => $insertedId,
        'message' => 'Your educational inquiry has been registered. Our academic counselor will contact you shortly.'
    ]);
} catch (PDOException $e) {
    error_log("Database Lead Insert Error: " . $e->getMessage());
    sendJsonResponse(500, [
        'success' => false,
        'error' => 'Unable to save enquiry into the database. Please try again or contact our helpline.'
    ]);
}
