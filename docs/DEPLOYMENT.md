# Deployment Pipeline & Vercel Guide

## 1. Deployment Architecture Overview
```
Local Work / Git Commit
         │
         ▼
GitHub Repository (main branch)
         │
         ├───► GitHub Actions CI (Typecheck & Build Validation)
         │
         ▼
Vercel Build & Edge Deployment
         │
         ├── Build Command: npm run build
         ├── Output Directory: dist/
         │
         ▼
Global CDN Edge Distribution (https://uzairahmad.vercel.app)
```

---

## 2. Vercel Configuration Settings

- **Framework Preset**: Astro
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Node.js Version**: `20.x` or `22.x`

---

## 3. Pre-Deployment Verification Checklist
Before pushing to production:
1. Run `npm run check` to verify TypeScript types.
2. Run `npm run build` to ensure static generation compiles without error.
3. Verify that `dist/` contains:
   - `index.html`
   - `404.html`
   - `sitemap-index.xml` & `sitemap-0.xml`
   - `robots.txt`
   - `site.webmanifest`
   - `favicon.svg`

---

## 4. Post-Deployment Verification
- Check live URL in browser.
- Verify that `https://uzairahmad.vercel.app/robots.txt` and `https://uzairahmad.vercel.app/sitemap-index.xml` resolve with HTTP 200.
- Verify WhatsApp float button opens correctly.
- Test responsive layout on mobile viewport.
