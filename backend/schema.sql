-- ==============================================================
-- SHARE MARKET EXPERT — COMPLETE DATABASE ARCHITECTURE
-- Production MySQL Schema
-- Version: 1.0.0
-- ==============================================================

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- -------------------------------------------------------------
-- 1. Table: admins (Platform Administrative Users)
-- -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `admins` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(60) NOT NULL UNIQUE,
  `email` VARCHAR(120) NOT NULL UNIQUE,
  `password_hash` VARCHAR(255) NOT NULL,
  `role` ENUM('super_admin', 'counselor', 'editor') NOT NULL DEFAULT 'editor',
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `failed_login_attempts` INT UNSIGNED NOT NULL DEFAULT 0,
  `locked_until` DATETIME NULL,
  `last_login` DATETIME NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_admin_login` (`username`, `is_active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -------------------------------------------------------------
-- 2. Table: leads (Inquiry Popup Form Submissions)
-- -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `leads` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `full_name` VARCHAR(100) NOT NULL,
  `mobile_number` VARCHAR(20) NOT NULL,
  `state` VARCHAR(60) NULL,
  `segment` VARCHAR(60) NULL,
  `capital_range` VARCHAR(60) NULL,
  `source_page` VARCHAR(255) DEFAULT '/',
  `ip_address` VARCHAR(45) NULL,
  `user_agent` VARCHAR(255) NULL,
  `status` ENUM('new', 'contacted', 'enrolled', 'not_interested', 'invalid') NOT NULL DEFAULT 'new',
  `notes` TEXT NULL,
  `assigned_to` INT UNSIGNED NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_lead_status` (`status`),
  INDEX `idx_lead_created` (`created_at`),
  INDEX `idx_lead_mobile` (`mobile_number`),
  CONSTRAINT `fk_lead_admin` FOREIGN KEY (`assigned_to`) REFERENCES `admins` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -------------------------------------------------------------
-- 3. Table: contacts (General Contact Us Desk Submissions)
-- -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `contacts` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `full_name` VARCHAR(100) NOT NULL,
  `mobile_number` VARCHAR(20) NOT NULL,
  `state` VARCHAR(60) NULL,
  `message` TEXT NULL,
  `ip_address` VARCHAR(45) NULL,
  `status` ENUM('unread', 'replied', 'closed') NOT NULL DEFAULT 'unread',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX `idx_contact_status` (`status`),
  INDEX `idx_contact_created` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -------------------------------------------------------------
-- 4. Table: packages (Educational Plans & Pricing)
-- -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `packages` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `slug` VARCHAR(60) NOT NULL UNIQUE,
  `name` VARCHAR(100) NOT NULL,
  `price_inr` INT UNSIGNED NOT NULL,
  `duration_text` VARCHAR(60) NOT NULL,
  `is_popular` TINYINT(1) NOT NULL DEFAULT 0,
  `short_description` VARCHAR(255) NOT NULL,
  `features_json` JSON NOT NULL,
  `display_order` INT NOT NULL DEFAULT 0,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -------------------------------------------------------------
-- 5. Table: courses (Educational Services & Modules)
-- -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `courses` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `slug` VARCHAR(80) NOT NULL UNIQUE,
  `name` VARCHAR(150) NOT NULL,
  `audience` VARCHAR(255) NOT NULL,
  `duration` VARCHAR(80) NOT NULL,
  `format` VARCHAR(100) NOT NULL,
  `language` VARCHAR(100) NOT NULL,
  `pricing_label` VARCHAR(100) NOT NULL,
  `topics_json` JSON NOT NULL,
  `display_order` INT NOT NULL DEFAULT 0,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -------------------------------------------------------------
-- 6. Table: blog_posts (Research-Based Articles)
-- -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `blog_posts` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `slug` VARCHAR(150) NOT NULL UNIQUE,
  `title` VARCHAR(255) NOT NULL,
  `category` VARCHAR(80) NOT NULL,
  `excerpt` TEXT NOT NULL,
  `content` MEDIUMTEXT NOT NULL,
  `sources_json` JSON NOT NULL,
  `read_time` VARCHAR(30) DEFAULT '10 min read',
  `cover_image` VARCHAR(255) DEFAULT '/images/brand/share-market-expert-icon.png',
  `publish_date` DATE NOT NULL,
  `last_updated` DATE NOT NULL,
  `is_published` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_blog_category` (`category`),
  INDEX `idx_blog_publish` (`publish_date`, `is_published`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -------------------------------------------------------------
-- 7. Table: faqs (Frequently Asked Questions)
-- -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `faqs` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `page_slug` VARCHAR(80) NOT NULL DEFAULT 'home',
  `question` VARCHAR(255) NOT NULL,
  `answer` TEXT NOT NULL,
  `display_order` INT NOT NULL DEFAULT 0,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX `idx_faq_page` (`page_slug`, `is_active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -------------------------------------------------------------
-- 8. Table: settings (Platform Configuration & Popup Controls)
-- -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `settings` (
  `setting_key` VARCHAR(60) PRIMARY KEY,
  `setting_value` TEXT NOT NULL,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ==============================================================
-- INITIAL SEED DATA
-- ==============================================================

-- Seed Initial Super Admin (Password: 'SMEAdmin2026!#' - Hashed with BCRYPT)
INSERT INTO `admins` (`username`, `email`, `password_hash`, `role`, `is_active`)
VALUES (
  'admin_sme',
  'admin@sharemarketexpert.in',
  '$2y$12$NqLz7nQ90X4eW.7H7b0Vv.G97gS61z0gZz73QO8hY7fS8e4C91d2W',
  'super_admin',
  1
) ON DUPLICATE KEY UPDATE `id` = `id`;

-- Seed Confirmed Packages (Silver: 24,999, Gold: 42,999, Platinum: 79,999)
INSERT INTO `packages` (`slug`, `name`, `price_inr`, `duration_text`, `is_popular`, `short_description`, `features_json`, `display_order`) VALUES
('silver-plan', 'SILVER PLAN', 24999, 'Quarterly — 3 Months', 0, 'Beginner-friendly foundation modules in equity cash and charting.', '["Beginner-friendly structured modules", "Weekly live online sessions", "Recorded lecture access", "Study notes and PDFs", "Group doubt support", "Educational completion certificate"]', 1),
('gold-plan', 'GOLD PLAN', 42999, 'Six Months', 1, 'Advanced technical analysis and derivatives concept training.', '["All Silver and foundation features", "Advanced modules", "Two live educational sessions per week", "Practical case studies", "Assignments and practice tests", "One monthly one-on-one doubt session", "Monthly learning progress review", "Advanced educational completion certificate"]', 2),
('platinum-plan', 'PLATINUM PLAN', 79999, 'Yearly — 12 Months', 0, 'Comprehensive year-long mentorship with 1-on-1 personalized doubt clearing.', '["All Gold and advanced features", "Expert-level educational modules", "One-on-one educational mentorship", "Personalized learning roadmap", "Weekly doubt-clearing calls", "Priority educational support", "Private learning community access", "Educational completion certificate"]', 3)
ON DUPLICATE KEY UPDATE `price_inr` = VALUES(`price_inr`);

-- Seed Default Platform Settings & Popup Configurations
INSERT INTO `settings` (`setting_key`, `setting_value`) VALUES
('brand_name', 'Share Market Expert'),
('brand_location', 'Vashi, Navi Mumbai, Maharashtra, India'),
('contact_phone', '+91 12345 67890'),
('contact_email', 'info@sharemarketexpert.in'),
('popup_enabled', '1'),
('popup_delay_seconds', '3'),
('popup_frequency_hours', '24'),
('popup_heading', 'Begin Your Market Education'),
('popup_subtitle', 'Connect with our educational counselors to choose the right learning module for your experience level.'),
('disclaimer_text', 'Share Market Expert is an educational platform and is NOT registered with SEBI as a Research Analyst or Investment Adviser. Nothing here is investment advice or a recommendation. Securities trading involves substantial risk of loss. Consult a SEBI-registered adviser before investing.'),
('noorweb_link', 'http://noorweb.in/')
ON DUPLICATE KEY UPDATE `setting_value` = VALUES(`setting_value`);

SET FOREIGN_KEY_CHECKS = 1;
