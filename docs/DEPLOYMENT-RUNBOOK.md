# Production Deployment Runbook & Edge Architecture

**Project:** Personal Developer Portfolio / Personal Engineering & Research Platform  
**Phase:** 34 — Final Engineering Documentation & Maintainability System  
**Hosting Target:** Vercel Edge Network (Global Static CDN)  
**Live Production URL:** [https://uzair-ahmad-portfilio-for-devepolem.vercel.app/](https://uzair-ahmad-portfilio-for-devepolem.vercel.app/)  

---

## 1. Deployment Architecture

The platform compiles to 100% pure static HTML and immutable asset bundles. It is hosted globally on Vercel's Edge Network, achieving sub-100ms TTFB across worldwide edge locations with zero serverless cold-start penalties.

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                       PRODUCTION DEPLOYMENT PIPELINE                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  [Git Push to 'main'] ────────► [Vercel CI/CD Build Hook]                   │
│                                           │                                 │
│                                           ▼                                 │
│                              npm run build (astro build)                    │
│                                           │                                 │
│                                           ▼                                 │
│                           60 Static HTML Pages + _astro/                    │
│                                           │                                 │
│                                           ▼                                 │
│                      [Vercel Global Edge Distribution Network]              │
│                                           │                                 │
│                  ┌────────────────────────┴────────────────────────┐        │
│                  ▼                                                 ▼        │
│        HTML Pages & Sitemaps                          Immutable Bundles     │
│       (s-maxage=0, revalidate)                     (max-age=31536000, imm)  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Pre-Deployment Verification Gate

Before deploying to production, execute the 3-step validation pipeline locally:

```bash
# 1. Verify TypeScript & Astro types (0 errors)
npm run check

# 2. Run all 244 automated unit test assertions (0 failures)
npm test

# 3. Clean production build verification (60 pages generated)
npm run build
```

---

## 3. Vercel Configuration & HTTP Security Directives (`vercel.json`)

- **Output Directory:** `dist/`
- **Clean URLs:** `true` (Strips `.html` extensions automatically)
- **Trailing Slash Policy:** `false` (Canonical normalization without trailing slash)
- **Security Headers Enforced on All Routes (`/(.*)`):**
  - `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `X-XSS-Protection: 1; mode=block`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()`
- **Asset Caching:**
  - `/_astro/(.*)` -> `Cache-Control: public, max-age=31536000, immutable`
  - `/images/(.*)` -> `Cache-Control: public, max-age=86400, stale-while-revalidate=604800`

---

## 4. Post-Deployment Smoke Test & Verification

Immediately following a production deployment, verify:
1. Production root responds with HTTP 200: `https://uzair-ahmad-portfilio-for-devepolem.vercel.app/`.
2. XML Sitemap is reachable: `https://uzair-ahmad-portfilio-for-devepolem.vercel.app/sitemap-index.xml`.
3. 404 handler responds properly: `https://uzair-ahmad-portfilio-for-devepolem.vercel.app/non-existent-page`.
4. Browser console shows 0 uncaught exceptions or failed chunk downloads.

---

## 5. Rollback Procedure

If a critical production regression is identified post-deploy:
1. Open the Vercel Project Dashboard -> **Deployments**.
2. Locate the previous healthy deployment commit (e.g. `f9cab09`).
3. Click the **•••** menu and select **Instant Rollback**.
4. Traffic will instantly route to the previous immutable static deployment artifact without requiring a rebuild.
