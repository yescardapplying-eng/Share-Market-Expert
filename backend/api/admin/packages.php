<?php
/**
 * Admin Package Management API Endpoint
 * Allows authenticated administrators to view and update official package pricing
 * Share Market Expert Backend
 */

declare(strict_types=1);

require_once __DIR__ . '/../../config/db.php';
require_once __DIR__ . '/../../config/security.php';

$db = requireDatabase($pdo);
$currentAdmin = requireAdminAuth($db);

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

if ($method === 'GET') {
    try {
        $stmt = $db->query("SELECT `id`, `slug`, `name`, `price_inr`, `duration_text`, `is_popular`, `is_active` FROM `packages` ORDER BY `display_order` ASC");
        $packages = $stmt->fetchAll();
        sendJsonResponse(200, ['success' => true, 'data' => $packages]);
    } catch (PDOException $e) {
        error_log("Admin Packages Query Error: " . $e->getMessage());
        sendJsonResponse(500, ['success' => false, 'error' => 'Database error loading packages.']);
    }
}

if ($method === 'POST' || $method === 'PUT') {
    $rawInput = file_get_contents('php://input');
    $input = !empty($rawInput) ? json_decode($rawInput, true) : $_POST;

    // Supports updating individual package or pricing map
    // e.g. { "silver": 24999, "gold": 42999, "platinum": 79999 }
    // or { "slug": "silver-plan", "price_inr": 24999 }
    try {
        if (isset($input['slug'], $input['price_inr'])) {
            $stmt = $db->prepare("UPDATE `packages` SET `price_inr` = :price WHERE `slug` = :slug");
            $stmt->execute([
                ':price' => max(0, (int)$input['price_inr']),
                ':slug'  => sanitizeInput($input['slug'])
            ]);
        } elseif (isset($input['silver']) || isset($input['gold']) || isset($input['platinum'])) {
            if (isset($input['silver'])) {
                $db->prepare("UPDATE `packages` SET `price_inr` = :p WHERE `slug` = 'silver-plan'")
                   ->execute([':p' => max(0, (int)$input['silver'])]);
            }
            if (isset($input['gold'])) {
                $db->prepare("UPDATE `packages` SET `price_inr` = :p WHERE `slug` = 'gold-plan'")
                   ->execute([':p' => max(0, (int)$input['gold'])]);
            }
            if (isset($input['platinum'])) {
                $db->prepare("UPDATE `packages` SET `price_inr` = :p WHERE `slug` = 'platinum-plan'")
                   ->execute([':p' => max(0, (int)$input['platinum'])]);
            }
        } else {
            sendJsonResponse(400, ['success' => false, 'error' => 'No valid package pricing data provided.']);
        }

        sendJsonResponse(200, [
            'success' => true,
            'message' => 'Package pricing updated successfully in MySQL database.'
        ]);
    } catch (PDOException $e) {
        error_log("Admin Packages Update Error: " . $e->getMessage());
        sendJsonResponse(500, ['success' => false, 'error' => 'Failed to update package pricing in database.']);
    }
}

sendJsonResponse(405, ['success' => false, 'error' => 'Method Not Allowed']);
