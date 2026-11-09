# FocusFlow Landing Page

A production-ready, professional landing page for the fictional **FocusFlow** mobile productivity application. Built with React 19, TypeScript, Vite, and Tailwind CSS.

## Technology Stack

- **React 19** — Modern React with hooks and concurrent features
- **TypeScript** — Full type safety across the codebase
- **Vite** — Fast development server and optimized production builds
- **Tailwind CSS v4** — Utility-first styling with custom design tokens
- **Lucide React** — Clean, consistent icon system
- **React Router DOM v7** — Client-side routing for multi-page support

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm 9+ (or pnpm/yarn)

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd focusflow-landing

# Install dependencies
npm install
```

## Development

```bash
# Start development server (http://localhost:5173)
npm run dev

# Type-check without emitting files
npm run typecheck

# Run linter (Oxlint)
npm run lint
```

## Production Build

```bash
# Build for production (outputs to /dist)
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
focusflow-landing/
├── public/
│   ├── favicon.svg           # FocusFlow branded favicon
│   ├── robots.txt            # Search engine directives
│   └── sitemap.xml           # Site map for SEO
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── Header.tsx        # Sticky navigation with mobile drawer
│   │   ├── Hero.tsx          # Hero section with app mockup
│   │   ├── Features.tsx      # 4-column feature cards
│   │   ├── HowItWorks.tsx    # 3-step process walkthrough
│   │   ├── AppPreview.tsx    # Interactive app preview tabs
│   │   ├── DownloadSection.tsx # Conversion CTA with store links
│   │   ├── FAQ.tsx           # Accessible accordion component
│   │   ├── Support.tsx       # Support categories & mailto links
│   │   ├── Contact.tsx       # Company contact & social links
│   │   ├── Footer.tsx        # Comprehensive footer
│   │   ├── PlaceholderBadge.tsx # Fictional link indicator
│   │   └── SEO.tsx           # Dynamic meta tag management
│   ├── data/                 # Centralized configuration
│   │   ├── appConfig.ts      # App metadata, URLs, contacts
│   │   ├── features.ts       # Feature definitions with icons
│   │   ├── faq.ts            # FAQ questions & answers
│   │   └── support.ts        # Support categories (if created)
│   ├── pages/                # Route-level page components
│   │   ├── Home.tsx          # Main landing page
│   │   ├── Privacy.tsx       # Privacy policy (placeholder)
│   │   └── Terms.tsx         # Terms of service (placeholder)
│   ├── styles/
│   │   └── index.css         # Tailwind imports & global styles
│   ├── App.tsx               # Router configuration
│   └── main.tsx              # Application entry point
├── index.html                # HTML template with SEO meta
├── vite.config.ts            # Vite + Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json
```

## Configuration

### Updating App Information

Edit `src/data/appConfig.ts` to change:

- **App name, tagline, description** — `APP_NAME`, `APP_TAGLINE`, `APP_DESCRIPTION`
- **Version & category** — `APP_VERSION`, `APP_CATEGORY`
- **Developer name** — `DEVELOPER`
- **Store URLs** — `GOOGLE_PLAY_URL`, `APP_STORE_URL`
- **Contact emails** — `SUPPORT_EMAIL`, `BUSINESS_EMAIL`
- **Website URL** — `WEBSITE_URL`
- **Legal page URLs** — `PRIVACY_POLICY_URL`, `TERMS_OF_SERVICE_URL`
- **Social media links** — `SOCIAL` object
- **SEO metadata** — `SEO` object

### Updating Features

Edit `src/data/features.ts` to modify the four feature cards:
- Change `title`, `description`
- Swap Lucide icons (import from `lucide-react`)

### Updating FAQ

Edit `src/data/faq.ts` to add, remove, or modify FAQ entries.

### Replacing App Screenshots

The Hero and AppPreview sections use **inline SVG mockups** built with Tailwind classes (no external image files needed). To replace with real screenshots:

1. Add your PNG/JPG/WebP files to `public/screenshots/`
2. In `Hero.tsx` and `AppPreview.tsx`, replace the mockup markup with:
   ```tsx
   <img src="/screenshots/your-image.png" alt="FocusFlow app screenshot" className="w-full rounded-xl" />
   ```

All images are referenced from `/public`, so paths start with `/screenshots/...`.

## Design System

### Color Palette (Tailwind CSS Variables)

```css
--color-primary: #6C5CE7;    /* Primary brand purple */
--color-secondary: #A29BFE;  /* Lighter purple accent */
--color-background: #FFFFFF;  /* Page background */
--color-surface: #F8F9FC;    /* Card surfaces */
--color-text: #1F2937;       /* Primary text */
--color-muted: #6B7280;      /* Secondary text */
```

### Typography

- **Font**: Inter (via system-ui fallback stack)
- **Scale**: Tailwind's default type scale
- **Responsive**: Fluid scaling via viewport-based utilities

### Spacing & Layout

- **Container**: `max-w-7xl` (1280px) with responsive padding
- **Section padding**: `py-20` (desktop), reduced on mobile
- **Card radius**: `rounded-2xl` to `rounded-3xl`
- **Shadows**: Subtle layered shadows (`shadow-sm` → `shadow-xl`)

## Accessibility

- Semantic HTML5 throughout (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`)
- Keyboard-accessible navigation with visible focus states
- ARIA attributes on accordion (FAQ) and tabbed interface (AppPreview)
- `prefers-reduced-motion` support
- Color contrast ratios meeting WCAG AA
- `alt` text on all meaningful images

## Performance

- Zero runtime dependencies beyond React ecosystem
- No third-party analytics/tracking scripts
- Lazy-loading ready for images (add `loading="lazy"` to `<img>`)
- Tree-shaken production build
- Static HTML generation compatible

## SEO Features

- Dynamic page titles & meta descriptions per route
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card tags (summary_large_image)
- Canonical URLs
- `robots.txt` and `sitemap.xml` in `/public`
- Semantic heading hierarchy (h1 → h2 → h3)
- Structured data ready (add JSON-LD in `SEO.tsx` if needed)

## Vercel Deployment

### Automatic Deployment (Recommended)

1. Push this repository to GitHub/GitLab/Bitbucket
2. Import the project in [Vercel Dashboard](https://vercel.com/dashboard)
3. Vercel auto-detects Vite settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Framework Preset**: Vite
4. Deploy — no additional configuration needed

### Manual Deployment

```bash
# Build production bundle
npm run build

# Install Vercel CLI
npm i -g vercel

# Deploy from dist folder
vercel deploy --prod dist
```

### Environment Variables

No environment variables required for the static landing page. All configuration is in `src/data/appConfig.ts`.

If you later add a backend (forms, newsletter, etc.), add variables in Vercel Project Settings → Environment Variables.

## Pre-Launch Checklist

Before going live, verify:

- [ ] Replace all **fictional store URLs** (`GOOGLE_PLAY_URL`, `APP_STORE_URL`) with real app store links
- [ ] Replace **placeholder emails** (`support@focusflow.example`, `hello@focusflow.example`) with real addresses
- [ ] Update **social media URLs** in `appConfig.ts`
- [ ] Replace **legal page content** in `Privacy.tsx` and `Terms.tsx` with attorney-reviewed policies
- [ ] Add real **app screenshots** to replace SVG mockups
- [ ] Update **SEO metadata** (`canonical`, `ogImage`, `description`)
- [ ] Verify **favicon** and add Apple touch icons if needed
- [ ] Test **all internal links** (anchor scrolls, `/privacy`, `/terms`)
- [ ] Test **all external links** (store links, social, mailto)
- [ ] Run `npm run build` — zero TypeScript/lint errors
- [ ] Run Lighthouse audit — target 90+ Performance, Accessibility, SEO
- [ ] Test on real devices: iPhone (Safari), Android (Chrome), Desktop (Chrome/Firefox/Safari)

## License

This project is a template for educational and commercial use. The FocusFlow brand, assets, and content are fictional. Replace all placeholder content before commercial deployment.

---

Built with care using React, TypeScript, Vite, and Tailwind CSS.