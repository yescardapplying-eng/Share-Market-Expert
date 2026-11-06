<?php
declare(strict_types=1);

require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../config/security.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    sendJsonResponse(405, ['success' => false, 'error' => 'Method Not Allowed']);
}

$slug = isset($_GET['slug']) ? sanitizeInput($_GET['slug']) : null;
$category = isset($_GET['category']) ? sanitizeInput($_GET['category']) : null;

if ($pdo) {
    try {
        if ($slug) {
            $stmt = $pdo->prepare("SELECT * FROM `blog_posts` WHERE `slug` = :slug AND `is_published` = 1 LIMIT 1");
            $stmt->execute([':slug' => $slug]);
            $post = $stmt->fetch();
            if ($post) {
                $post['sources'] = json_decode($post['sources_json'] ?? '[]', true);
                unset($post['sources_json']);
                sendJsonResponse(200, ['success' => true, 'data' => $post]);
            }
            sendJsonResponse(404, ['success' => false, 'error' => 'Article not found']);
        }

        $sql = "SELECT id, slug, title, category, excerpt, read_time, cover_image, publish_date, last_updated, sources_json FROM `blog_posts` WHERE `is_published` = 1";
        $params = [];
        if ($category) {
            $sql .= " AND `category` = :cat";
            $params[':cat'] = $category;
        }
        $sql .= " ORDER BY `publish_date` DESC";
        $stmt = $pdo->prepare($sql);
        $stmt->execute($params);
        $posts = $stmt->fetchAll();
        foreach ($posts as &$p) {
            $p['sources'] = json_decode($p['sources_json'] ?? '[]', true);
            unset($p['sources_json']);
        }
        sendJsonResponse(200, ['success' => true, 'data' => $posts]);
    } catch (PDOException $e) {
        error_log("Blog Fetch Error: " . $e->getMessage());
    }
}

// Fallback to static articles
sendJsonResponse(200, [
    'success' => true,
    'data' => [
        [
            'slug' => 'how-the-indian-stock-market-works',
            'title' => 'How the Indian Stock Market Works: Market Structure, Exchanges & Settlement',
            'category' => 'Market Basics',
            'publish_date' => '2026-01-15',
            'last_updated' => '2026-02-10',
            'read_time' => '8 min read',
            'excerpt' => 'A structured breakdown of the Indian equity infrastructure: how stock exchanges (NSE and BSE), clearing corporations, depositories, and brokers interact in the modern T+1 rolling settlement cycle.'
        ],
        [
            'slug' => 'understanding-candlestick-charts',
            'title' => 'Understanding Candlestick Charts: Anatomy, Price Psychology & Pattern Confirmation',
            'category' => 'Technical Analysis',
            'publish_date' => '2026-01-20',
            'last_updated' => '2026-02-14',
            'read_time' => '10 min read',
            'excerpt' => 'Learn how Japanese candlesticks reveal supply and demand struggles between buyers and sellers. Explore candle anatomy, wick rejections, and how to avoid false breakout traps.'
        ],
        [
            'slug' => 'introduction-to-the-option-chain',
            'title' => 'Introduction to the Option Chain: Decoding Strikes, Open Interest & Implied Volatility',
            'category' => 'Derivatives Education',
            'publish_date' => '2026-02-01',
            'last_updated' => '2026-02-18',
            'read_time' => '11 min read',
            'excerpt' => 'A practical educational guide to reading the NSE option chain. Master calls, puts, strike prices, in-the-money status, open interest accumulation, and volume interpretation.'
        ],
        [
            'slug' => 'understanding-risk-in-futures-and-options',
            'title' => 'Understanding Risk in Futures & Options: Leverage, Time Decay & SEBI Study Findings',
            'category' => 'Risk Management',
            'publish_date' => '2026-02-05',
            'last_updated' => '2026-02-22',
            'read_time' => '9 min read',
            'excerpt' => 'Why derivatives are double-edged swords. Review official SEBI research revealing that 9 out of 10 individual traders incur losses in F&O, and learn why leverage and theta decay punish uneducated speculation.'
        ]
    ]
]);
