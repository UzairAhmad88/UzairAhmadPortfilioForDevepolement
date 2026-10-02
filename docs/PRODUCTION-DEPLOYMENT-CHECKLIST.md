# Production Deployment Checklist

Use this verification checklist prior to tagging a release or deploying to production.

## 1. Pre-Deployment Verification Checklist

- [ ] **Code Quality & Type Safety**
  - [ ] `npm run check` passes with 0 type errors.
  - [ ] `npm test` passes with 100% test success across all 31+ unit tests.
  - [ ] `npm run lint` passes without blocking syntax errors.

- [ ] **Build & Static Artifacts**
  - [ ] `npm run build` succeeds generating all 17 static pages in `dist/`.
  - [ ] `sitemap-index.xml` and `sitemap-0.xml` present in build output.
  - [ ] Favicon, webmanifest, and robots.txt present in root.

- [ ] **Security & Headers**
  - [ ] No `.env` or secret credentials committed to Git repository.
  - [ ] `vercel.json` contains complete security headers (`X-Frame-Options`, `nosniff`, `HSTS`, `Referrer-Policy`, `Permissions-Policy`).
  - [ ] Form honeypot (`_gotcha`) active on contact form.

- [ ] **SEO & Metadata**
  - [ ] Unique meta title and meta description on all 15 indexable routes.
  - [ ] Canonical URLs point to absolute `https://uzairahmad.vercel.app` without trailing slashes.
  - [ ] Structured data schemas (`Person`, `WebSite`, `ProfilePage`, `TechArticle`, `SoftwareApplication`) validated.

- [ ] **Accessibility & Responsiveness**
  - [ ] Complete keyboard tab navigation without focus traps.
  - [ ] High-contrast focus rings visible on all interactive elements.
  - [ ] Zero horizontal overflow tested across 320px, 375px, 768px, 1280px viewports.
  - [ ] `prefers-reduced-motion` supported for users with motion sensitivity.
