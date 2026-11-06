<?php
declare(strict_types=1);

require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../config/security.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    sendJsonResponse(405, ['success' => false, 'error' => 'Method Not Allowed']);
}

if ($pdo) {
    try {
        $stmt = $pdo->query("SELECT * FROM `packages` WHERE `is_active` = 1 ORDER BY `display_order` ASC");
        $packages = $stmt->fetchAll();
        foreach ($packages as &$pkg) {
            $pkg['features'] = json_decode($pkg['features_json'] ?? '[]', true);
            unset($pkg['features_json']);
        }
        sendJsonResponse(200, ['success' => true, 'data' => $packages]);
    } catch (PDOException $e) {
        error_log("Packages Fetch Error: " . $e->getMessage());
    }
}

// Fallback hardcoded confirmed packages
sendJsonResponse(200, [
    'success' => true,
    'data' => [
        [
            'id' => 1,
            'slug' => 'silver-plan',
            'name' => 'SILVER PLAN',
            'price_inr' => 24999,
            'duration_text' => 'Quarterly — 3 Months',
            'is_popular' => 0,
            'short_description' => 'Beginner-friendly structured modules in equity cash and charting.',
            'features' => [
                'Beginner-friendly structured modules',
                'Weekly live online sessions',
                'Recorded lecture access',
                'Study notes and PDFs',
                'Group doubt support',
                'Educational completion certificate'
            ]
        ],
        [
            'id' => 2,
            'slug' => 'gold-plan',
            'name' => 'GOLD PLAN',
            'price_inr' => 42999,
            'duration_text' => 'Six Months',
            'is_popular' => 1,
            'short_description' => 'Advanced technical analysis and derivatives concept training.',
            'features' => [
                'All Silver and foundation features',
                'Advanced modules',
                'Two live educational sessions per week',
                'Practical case studies',
                'Assignments and practice tests',
                'One monthly one-on-one doubt session',
                'Monthly learning progress review',
                'Advanced educational completion certificate'
            ]
        ],
        [
            'id' => 3,
            'slug' => 'platinum-plan',
            'name' => 'PLATINUM PLAN',
            'price_inr' => 79999,
            'duration_text' => 'Yearly — 12 Months',
            'is_popular' => 0,
            'short_description' => 'Comprehensive year-long mentorship with 1-on-1 personalized doubt clearing.',
            'features' => [
                'All Gold and advanced features',
                'Expert-level educational modules',
                'One-on-one educational mentorship',
                'Personalized learning roadmap',
                'Weekly doubt-clearing calls',
                'Priority educational support',
                'Private learning community access',
                'Educational completion certificate'
            ]
        ]
    ]
]);

