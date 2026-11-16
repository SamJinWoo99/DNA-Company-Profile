-- ============================================================
--  DNA Komunika - MySQL Database Schema
--  Compatible with: Laravel 10+, WordPress, PHP 8.1+
-- ============================================================

CREATE DATABASE IF NOT EXISTS `dna_komunika`
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE `dna_komunika`;

-- ─── 1. SETTINGS / SITE CONFIG ───────────────────────────────
CREATE TABLE `settings` (
  `id`         BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `key`        VARCHAR(100)    NOT NULL UNIQUE,
  `value`      LONGTEXT,
  `type`       ENUM('text','json','boolean','integer') DEFAULT 'text',
  `created_at` TIMESTAMP       DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP       DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ─── 2. NAVIGATION / MENUS ───────────────────────────────────
CREATE TABLE `menus` (
  `id`         BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `label`      VARCHAR(100)    NOT NULL,
  `href`       VARCHAR(255)    NOT NULL,
  `icon`       VARCHAR(100),
  `sort_order` SMALLINT        DEFAULT 0,
  `is_active`  TINYINT(1)      DEFAULT 1,
  `opens_new`  TINYINT(1)      DEFAULT 0,
  `created_at` TIMESTAMP       DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP       DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `menus` (`label`, `href`, `sort_order`, `opens_new`) VALUES
  ('Home',     '#home',    1, 0),
  ('About',    '#about',   2, 0),
  ('Work',     '#work',    3, 0),
  ('Award',    '#award',   4, 0),
  ('Contact',  '#contact', 5, 0),
  ('WhatsApp', 'https://api.whatsapp.com/send?phone=6287774443847&text=Hello%20DNA%20Komunika!', 7, 1);

-- ─── 3. LANGUAGES ────────────────────────────────────────────
CREATE TABLE `languages` (
  `id`         BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `code`       VARCHAR(10)     NOT NULL UNIQUE,
  `label`      VARCHAR(30)     NOT NULL,
  `flag_emoji` VARCHAR(10),
  `is_default` TINYINT(1)      DEFAULT 0,
  `is_active`  TINYINT(1)      DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `languages` (`code`, `label`, `flag_emoji`, `is_default`) VALUES
  ('en', 'English',   NULL, 0),
  ('id', 'Indonesia', NULL, 1);

-- ─── 4. HERO SLIDES ──────────────────────────────────────────
CREATE TABLE `hero_slides` (
  `id`           BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `tag`          VARCHAR(100),
  `headline`     VARCHAR(255)    NOT NULL,
  `subheadline`  TEXT,
  `cta_label`    VARCHAR(80),
  `cta_href`     VARCHAR(255),
  `bg_color`     VARCHAR(20)     DEFAULT '#1a3a5c',
  `accent_color` VARCHAR(20)     DEFAULT '#2fa4e7',
  `image_path`   VARCHAR(500),
  `sort_order`   SMALLINT        DEFAULT 0,
  `is_active`    TINYINT(1)      DEFAULT 1,
  `created_at`   TIMESTAMP       DEFAULT CURRENT_TIMESTAMP,
  `updated_at`   TIMESTAMP       DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `hero_slides` (`tag`, `headline`, `subheadline`, `cta_label`, `cta_href`, `bg_color`, `accent_color`, `sort_order`) VALUES
  ('Annual Report',     'Design with the power to inspire and deliver results', 'We turn corporate stories into powerful visual identity', 'Our Work', '#work', '#1a3a5c', '#2fa4e7', 1),
  ('Corporate Branding','We craft visual stories that define your brand',        'Strategic design that speaks to your audience',           'Our Work', '#work', '#0f2744', '#f59e0b', 2),
  ('Publication Design','Premium publications that speak to your audience',      'Crafted with precision and creative excellence',          'Our Work', '#work', '#1a1a2e', '#8b5cf6', 3);

-- ─── 5. ABOUT ────────────────────────────────────────────────
CREATE TABLE `about` (
  `id`          BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `lang_code`   VARCHAR(10)     DEFAULT 'id',
  `title`       VARCHAR(255),
  `body`        LONGTEXT,
  `vision`      TEXT,
  `mission`     TEXT,
  `image_path`  VARCHAR(500),
  `created_at`  TIMESTAMP       DEFAULT CURRENT_TIMESTAMP,
  `updated_at`  TIMESTAMP       DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ─── 6. STATS / COUNTERS ─────────────────────────────────────
CREATE TABLE `stats` (
  `id`         BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `number`     VARCHAR(20)     NOT NULL,
  `label`      VARCHAR(100)    NOT NULL,
  `sort_order` SMALLINT        DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `stats` (`number`, `label`, `sort_order`) VALUES
  ('12+',  'Years Experience',   1),
  ('200+', 'Projects Completed', 2),
  ('80+',  'Happy Clients',      3),
  ('30+',  'Awards Won',         4);

-- ─── 7. SERVICES ─────────────────────────────────────────────
CREATE TABLE `services` (
  `id`          BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name`        VARCHAR(150)    NOT NULL,
  `slug`        VARCHAR(150)    NOT NULL UNIQUE,
  `description` TEXT,
  `icon`        VARCHAR(100),
  `sort_order`  SMALLINT        DEFAULT 0,
  `is_active`   TINYINT(1)      DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `services` (`name`, `slug`, `description`, `sort_order`) VALUES
  ('Annual Report Design', 'annual-report',  'Desain laporan tahunan yang menarik dan informatif',        1),
  ('Corporate Branding',   'branding',       'Identitas merek korporat yang kuat dan konsisten',          2),
  ('Publication Design',   'publication',    'Majalah, brosur, dan materi cetak premium',                 3),
  ('Digital Campaign',     'digital',        'Kampanye digital terintegrasi untuk brand awareness',       4),
  ('Motion Graphics',      'motion',         'Animasi dan video kreatif untuk komunikasi visual dinamis', 5);

-- ─── 8. CLIENTS ──────────────────────────────────────────────
CREATE TABLE `clients` (
  `id`          BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name`        VARCHAR(150)    NOT NULL,
  `slug`        VARCHAR(150)    NOT NULL UNIQUE,
  `logo_path`   VARCHAR(500),
  `website`     VARCHAR(255),
  `is_featured` TINYINT(1)      DEFAULT 0,
  `sort_order`  SMALLINT        DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `clients` (`name`, `slug`, `is_featured`, `sort_order`) VALUES
  ('PGN LNG',          'pgn-lng',         1, 1),
  ('Pertamina',        'pertamina',        1, 2),
  ('Bank BRI',         'bank-bri',         1, 3),
  ('Telkom Indonesia', 'telkom-indonesia', 1, 4),
  ('Garuda Indonesia', 'garuda-indonesia', 1, 5),
  ('PLN',              'pln',              1, 6),
  ('Bank Mandiri',     'bank-mandiri',     1, 7),
  ('Grab Indonesia',   'grab-indonesia',   1, 8);

-- ─── 9. PROJECTS (WORK) ──────────────────────────────────────
CREATE TABLE `projects` (
  `id`           BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `client_id`    BIGINT UNSIGNED,
  `service_id`   BIGINT UNSIGNED,
  `title`        VARCHAR(255)    NOT NULL,
  `slug`         VARCHAR(255)    NOT NULL UNIQUE,
  `description`  TEXT,
  `body`         LONGTEXT,
  `cover_image`  VARCHAR(500),
  `gallery`      JSON,
  `color`        VARCHAR(20)     DEFAULT '#1a8cc7',
  `accent_color` VARCHAR(20)     DEFAULT '#2fa4e7',
  `year`         SMALLINT,
  `is_featured`  TINYINT(1)      DEFAULT 0,
  `is_published` TINYINT(1)      DEFAULT 1,
  `sort_order`   SMALLINT        DEFAULT 0,
  `created_at`   TIMESTAMP       DEFAULT CURRENT_TIMESTAMP,
  `updated_at`   TIMESTAMP       DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`client_id`)  REFERENCES `clients`(`id`)  ON DELETE SET NULL,
  FOREIGN KEY (`service_id`) REFERENCES `services`(`id`) ON DELETE SET NULL,
  INDEX `idx_projects_slug`     (`slug`),
  INDEX `idx_projects_featured` (`is_featured`, `is_published`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `projects` (`client_id`, `service_id`, `title`, `slug`, `description`, `color`, `accent_color`, `year`, `is_featured`, `sort_order`) VALUES
  (1, 1, 'PGN LNG Annual Report 2024',        'pgn-lng-annual-report-2024',    'Laporan tahunan komprehensif dengan tema Driving Progress, Powering Success', '#1a8cc7', '#2fa4e7', 2024, 1, 1),
  (2, 2, 'Pertamina Brand Identity',          'pertamina-brand-identity',      'Redesign identitas merek nasional dengan pendekatan modern',                  '#dc2626', '#ef4444', 2023, 1, 2),
  (3, 1, 'Bank BRI Sustainability Report',    'bri-sustainability-report-2023','Laporan keberlanjutan yang menggambarkan komitmen BRI',                       '#16a34a', '#22c55e', 2023, 0, 3),
  (4, 3, 'Telkom Indonesia Digital Magazine', 'telkom-digital-magazine-2024',  'Majalah digital premium dengan visual interaktif',                            '#7c3aed', '#8b5cf6', 2024, 1, 4),
  (5, 2, 'Garuda Indonesia Brand Guidelines', 'garuda-brand-guidelines',       'Panduan merek komprehensif untuk konsistensi identitas visual',               '#b45309', '#f59e0b', 2022, 0, 5),
  (6, 4, 'PLN Smart Energy Campaign',         'pln-smart-energy-2024',         'Kampanye digital terintegrasi untuk program energi cerdas',                   '#0891b2', '#06b6d4', 2024, 1, 6);

-- ─── 10. AWARDS ──────────────────────────────────────────────
CREATE TABLE `awards` (
  `id`           BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `project_id`   BIGINT UNSIGNED,
  `title`        VARCHAR(255)    NOT NULL,
  `organization` VARCHAR(255)    NOT NULL,
  `category`     VARCHAR(150),
  `year`         SMALLINT        NOT NULL,
  `icon`         VARCHAR(20)     DEFAULT '?',
  `color`        VARCHAR(20)     DEFAULT '#f59e0b',
  `is_featured`  TINYINT(1)      DEFAULT 0,
  `created_at`   TIMESTAMP       DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`project_id`) REFERENCES `projects`(`id`) ON DELETE SET NULL,
  INDEX `idx_awards_year` (`year`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `awards` (`title`, `organization`, `category`, `year`, `color`, `is_featured`) VALUES
  ('Best Annual Report Design',             'Indonesian Design Awards',     'Publication Design', 2024, '#f59e0b', 1),
  ('Excellence in Corporate Communication', 'Asia Pacific PR Awards',       'Corporate Comm',     2024, '#1a8cc7', 0),
  ('Gold Award - Sustainability Report',    'LACP Vision Awards',           'Sustainability',      2023, '#16a34a', 1),
  ('Best Creative Agency of the Year',      'Marketing Magazine Indonesia', 'Agency Award',       2023, '#7c3aed', 0),
  ('Platinum - Annual Report Design',       'Muse Creative Awards',         'Print Design',       2022, '#0891b2', 0),
  ('Best Branding Campaign',                'Clio Awards',                  'Branding',           2022, '#dc2626', 1);

-- ─── 11. CONTACT MESSAGES ────────────────────────────────────
CREATE TABLE `contact_messages` (
  `id`         BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name`       VARCHAR(150)    NOT NULL,
  `email`      VARCHAR(255)    NOT NULL,
  `company`    VARCHAR(150),
  `service`    VARCHAR(100),
  `message`    TEXT            NOT NULL,
  `ip_address` VARCHAR(45),
  `user_agent` VARCHAR(500),
  `is_read`    TINYINT(1)      DEFAULT 0,
  `created_at` TIMESTAMP       DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_messages_read`    (`is_read`),
  INDEX `idx_messages_created` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ─── 12. ARTICLES / BLOG ─────────────────────────────────────
CREATE TABLE `articles` (
  `id`           BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `lang_code`    VARCHAR(10)     DEFAULT 'id',
  `title`        VARCHAR(255)    NOT NULL,
  `slug`         VARCHAR(255)    NOT NULL UNIQUE,
  `excerpt`      TEXT,
  `body`         LONGTEXT,
  `cover_image`  VARCHAR(500),
  `author`       VARCHAR(150)    DEFAULT 'DNA Komunika Team',
  `category`     VARCHAR(100)    DEFAULT 'Insight',
  `tags`         JSON,
  `is_published` TINYINT(1)      DEFAULT 1,
  `published_at` TIMESTAMP       NULL,
  `created_at`   TIMESTAMP       DEFAULT CURRENT_TIMESTAMP,
  `updated_at`   TIMESTAMP       DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FULLTEXT KEY `ft_articles_search` (`title`, `excerpt`, `body`),
  INDEX `idx_articles_slug`      (`slug`),
  INDEX `idx_articles_published` (`is_published`, `published_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ─── 13. USERS (Admin CMS) ───────────────────────────────────
CREATE TABLE `users` (
  `id`                BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name`              VARCHAR(150)    NOT NULL,
  `email`             VARCHAR(255)    NOT NULL UNIQUE,
  `email_verified_at` TIMESTAMP       NULL,
  `password`          VARCHAR(255)    NOT NULL,
  `role`              ENUM('admin','editor','viewer') DEFAULT 'editor',
  `avatar`            VARCHAR(500),
  `remember_token`    VARCHAR(100),
  `created_at`        TIMESTAMP       DEFAULT CURRENT_TIMESTAMP,
  `updated_at`        TIMESTAMP       DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ─── 14. LARAVEL STANDARD TABLES ─────────────────────────────
CREATE TABLE `password_reset_tokens` (
  `email`      VARCHAR(255) NOT NULL,
  `token`      VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP    NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `sessions` (
  `id`            VARCHAR(255)    NOT NULL,
  `user_id`       BIGINT UNSIGNED NULL,
  `ip_address`    VARCHAR(45)     NULL,
  `user_agent`    TEXT            NULL,
  `payload`       LONGTEXT        NOT NULL,
  `last_activity` INT             NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `sessions_user_id_index`       (`user_id`),
  INDEX `sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `cache` (
  `key`        VARCHAR(255) NOT NULL,
  `value`      MEDIUMTEXT   NOT NULL,
  `expiration` INT          NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `jobs` (
  `id`           BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `queue`        VARCHAR(255)    NOT NULL,
  `payload`      LONGTEXT        NOT NULL,
  `attempts`     TINYINT UNSIGNED NOT NULL DEFAULT 0,
  `reserved_at`  INT UNSIGNED    NULL,
  `available_at` INT UNSIGNED    NOT NULL,
  `created_at`   INT UNSIGNED    NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `jobs_queue_index` (`queue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ─── SEED: Default Settings ───────────────────────────────────
INSERT INTO `settings` (`key`, `value`, `type`) VALUES
  ('site_name',       'DNA Komunika',                                                                    'text'),
  ('site_tagline',    'We Turn Corporate Stories Into Powerful Visual Identity',                         'text'),
  ('site_email',      'hello@dnakomunika.com',                                                           'text'),
  ('whatsapp_number', '6287774443847',                                                                   'text'),
  ('whatsapp_url',    'https://api.whatsapp.com/send?phone=6287774443847&text=Hello%20DNA%20Komunika!', 'text'),
  ('office_address',  'Jakarta Selatan, DKI Jakarta, Indonesia',                                         'text'),
  ('instagram_url',   '',                                                                                'text'),
  ('linkedin_url',    '',                                                                                'text'),
  ('behance_url',     '',                                                                                'text'),
  ('default_lang',    'id',                                                                              'text'),
  ('hero_headline',   'We turn corporate stories into powerful visual identity',                         'text'),
  ('about_headline',  'We are a creative studio that turns ideas into impact',                           'text');
