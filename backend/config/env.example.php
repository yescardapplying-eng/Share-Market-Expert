<?php
/**
 * Hostinger Production Database Configuration Template
 * 
 * INSTRUCTIONS:
 * 1. Copy this file to `env.php` inside the same directory (`backend/config/env.php`).
 * 2. Replace the placeholder values with your actual Hostinger MySQL details from hPanel:
 *    - Hostinger hPanel > Databases > Management > Database Name, Username, Password.
 * 3. `env.php` is strictly git-ignored and protected by .htaccess against web access.
 */

return [
    'DB_HOST' => 'localhost',          // In Hostinger, MySQL host is usually 'localhost' or an IP provided in hPanel
    'DB_NAME' => 'u123456789_sme',     // Your Hostinger MySQL Database Name (e.g. u123456789_smedb)
    'DB_USER' => 'u123456789_smeuser', // Your Hostinger MySQL Database Username
    'DB_PASS' => 'YOUR_STRONG_DATABASE_PASSWORD', // Your Hostinger MySQL Database User Password
    'DB_PORT' => '3306',
];
