<?php
declare(strict_types=1);

require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../config/security.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendJsonResponse(405, ['success' => false, 'error' => 'Method Not Allowed']);
}

// Rate limit: 5 requests per minute
if (!checkRateLimit('lead_popup', 5, 60)) {
    sendJsonResponse(429, [
        'success' => false,
        'error' => 'Too many requests. Please wait a minute.'
    ]);
}

$input = json_decode(file_get_contents('php://input'), true) ?? $_POST;

$fullName = sanitizeInput($input['full_name'] ?? '');
$mobileNumber = sanitizeInput($input['mobile_number'] ?? '');
$state = sanitizeInput($input['state'] ?? '');
$segment = sanitizeInput($input['segment'] ?? '');
$capitalRange = sanitizeInput($input['capital_range'] ?? '');
$sourcePage = sanitizeInput($input['source_page'] ?? '/');
$ipAddress = $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';
$userAgent = substr($_SERVER['HTTP_USER_AGENT'] ?? '', 0, 250);

if (empty($fullName)) {
    sendJsonResponse(400, ['success' => false, 'error' => 'Full Name is required.']);
}

if (!isValidIndianMobile($mobileNumber)) {
    sendJsonResponse(400, ['success' => false, 'error' => 'A valid 10-digit mobile number is required.']);
}

if ($pdo) {
    try {
        $stmt = $pdo->prepare("
            INSERT INTO `leads` (`full_name`, `mobile_number`, `state`, `segment`, `capital_range`, `source_page`, `ip_address`, `user_agent`, `status`)
            VALUES (:name, :mobile, :state, :segment, :cap, :src, :ip, :ua, 'new')
        ");
        $stmt->execute([
            ':name'    => $fullName,
            ':mobile'  => $mobileNumber,
            ':state'   => !empty($state) ? $state : null,
            ':segment' => !empty($segment) ? $segment : null,
            ':cap'     => !empty($capitalRange) ? $capitalRange : null,
            ':src'     => $sourcePage,
            ':ip'      => $ipAddress,
            ':ua'      => $userAgent
        ]);

        sendJsonResponse(200, [
            'success' => true,
            'message' => 'Your educational inquiry has been registered. Our counselor will contact you shortly.'
        ]);
    } catch (PDOException $e) {
        error_log("Lead Insert Error: " . $e->getMessage());
        sendJsonResponse(500, ['success' => false, 'error' => 'Unable to save enquiry. Please try again.']);
    }
} else {
    // Fallback response for unconfigured local database
    sendJsonResponse(200, [
        'success' => true,
        'message' => 'Inquiry registered successfully. (Demo/Fallback Mode)'
    ]);
}
