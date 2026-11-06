/**
 * Centralized API Configuration & Endpoints
 * Share Market Expert — Production Architecture
 */

export const API_BASE_URL =
  (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_API_URL
    ? process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, '')
    : 'https://api.sharemarketexpert.in');

export const API_ENDPOINTS = {
  LEAD: `${API_BASE_URL}/api/lead.php`,
  CONTACT: `${API_BASE_URL}/api/contact.php`,
  ADMIN_LOGIN: `${API_BASE_URL}/api/admin/login.php`,
  ADMIN_LEADS: `${API_BASE_URL}/api/admin/leads.php`,
  ADMIN_CONTACTS: `${API_BASE_URL}/api/admin/contacts.php`,
  SETTINGS: `${API_BASE_URL}/api/settings.php`,
  PACKAGES: `${API_BASE_URL}/api/packages.php`,
  BLOG: `${API_BASE_URL}/api/blog.php`,
} as const;
