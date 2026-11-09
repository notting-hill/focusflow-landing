// Centralized application configuration.
// All app metadata, URLs, and contact information live here so branding
// changes require editing a single file.

export const APP_NAME = 'FocusFlow';
export const APP_TAGLINE = 'Make Every Day More Productive.';
export const APP_DESCRIPTION =
  'Organize your tasks, build better habits, and focus on what matters most.';
export const APP_VERSION = '1.2.0';
export const APP_CATEGORY = 'Productivity';

export const DEVELOPER = 'FocusFlow Studio';

export const PLATFORMS = ['Android', 'iOS'] as const;
export const LANGUAGES = ['English', 'Thai'] as const;

// Store links. These are fictional placeholders and must be replaced with
// real app-store URLs before the site is published.
export const GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.example.focusflow';
export const APP_STORE_URL =
  'https://apps.apple.com/app/id0000000000';

// Contact emails
export const SUPPORT_EMAIL = 'support@focusflow.example';
export const BUSINESS_EMAIL = 'hello@focusflow.example';

// Official website
export const WEBSITE_URL = 'https://focusflow.example';

// Legal pages
export const PRIVACY_POLICY_URL = 'https://focusflow.example/privacy';
export const TERMS_OF_SERVICE_URL = 'https://focusflow.example/terms';

// Social media
export const SOCIAL = {
  facebook: 'https://facebook.com/',
  instagram: 'https://instagram.com/',
  x: 'https://x.com/',
} as const;

// SEO metadata
export const SEO = {
  title: 'FocusFlow - Smart Productivity & Task Management',
  description:
    'FocusFlow is a productivity app that helps you organize tasks, build better habits, and focus on what matters most. Available on Google Play and the App Store.',
  canonical: 'https://focusflow.example',
  ogImage: '/og-image.svg',
} as const;

// Support response time sample content (not a guarantee)
export const SUPPORT_RESPONSE_TIME = 'Usually within 1–2 business days';