# Current State Audit — Engineering Baseline

**System:** Uzair Ahmad — Personal Engineering & Research Platform  
**Audit Stage:** Phase 01 Foundation Baseline  
**Environment:** Astro v4.16.18, TypeScript 5.7.3, Node.js v20+, Vercel Edge  
**Live Canonical:** [https://uzair-ahmad-portfilio-for-devepolem.vercel.app/](https://uzair-ahmad-portfilio-for-devepolem.vercel.app/)

---

## 1. Framework & Architecture
- **Core Framework:** Astro v4.16.18 configured for static site generation (`output: "static"`).
- **Runtime Model:** Pure multi-page HTML architecture (MPA) with zero mandatory client-side framework runtime (React/Vue are absent from the runtime bundle, keeping client JS to 1.7 kB).
- **TypeScript Integration:** Strict mode enabled via `astro/tsconfigs/strict` with `noImplicitAny: true`, `strictNullChecks: true`, and custom path aliases (`@/*`, `@components/*`, `@layouts/*`, `@data/*`, `@types/*`, `@lib/*`, `@styles/*`).

## 2. Build System
- **Compiler/Bundler:** Vite (integrated in Astro).
- **HTML Minification:** Enabled (`compressHTML: true`).
- **Sitemap Generation:** Automated via `@astrojs/sitemap`.
- **Build Output:** Static distribution in `dist/` comprising 17 pre-rendered HTML documents, optimized assets in `_astro/`, and XML sitemaps.

## 3. Deployment & Hosting
- **Hosting Provider:** Vercel Global Edge Network.
- **Configuration:** `vercel.json` with clean URLs (`cleanUrls: true`), strict trailing slash policy (`trailingSlash: false`), and security headers (HSTS, CSP-ready headers, X-Content-Type-Options, X-Frame-Options DENY, X-XSS-Protection, Referrer-Policy).
- **Caching Strategy:**
  - `/_astro/*`: `public, max-age=31536000, immutable` (fingerprinted assets).
  - `/images/*`: `public, max-age=86400, stale-while-revalidate=604800`.

## 4. Routing Topology (17 Static Endpoints)
1. `/` (`src/pages/index.astro`) — Platform Homepage & Systems Overview.
2. `/work` (`src/pages/work/index.astro`) — Verified Projects & Systems Catalog.
3. `/work/deep-learning-stock-return-prediction` — Flagship Quantitative Case Study.
4. `/work/multi-agent-prospect-intelligence` — Final Year Project (FYP) & Agentic AI Case Study.
5. `/work/curasphere-hms` — Healthcare SaaS Full-Stack Case Study.
6. `/work/market-regime-engine` — Quantitative Market Intelligence Case Study.
7. `/work/restaurant-pos` — Operations & POS Software Case Study.
8. `/work/hayatabad-gym` — Brand & Web Experience Case Study.
9. `/research` (`src/pages/research.astro`) — Hypothesis-Driven Technical Inquiries.
10. `/research/signal-research` — Time-Series Predictive Feature Extraction Inquiry.
11. `/research/market-regimes` — Unsupervised Volatility Regime Clustering Inquiry.
12. `/research/agentic-systems` — Deterministic LLM State Machine Guardrails Inquiry.
13. `/services` (`src/pages/services.astro`) — Technical Capabilities & Collaboration Models.
14. `/about` (`src/pages/about.astro`) — Background, Values, Philosophy & Technical Stack.
15. `/contact` (`src/pages/contact.astro`) — Structured Direct Inbound Channel.
16. `/contact/success` (`src/pages/contact/success.astro`) — Inbound Confirmation & SLA.
17. `/404` (`src/pages/404.astro`) — System Route Recovery Page.

## 5. Component Architecture
Components are structured by domain responsibility in `src/components/`:
- `layout/`: `Header.astro`, `Footer.astro`.
- `navigation/`: `Nav.astro`, `MobileNavDrawer.astro`.
- `sections/`: `Hero.astro`, `Ticker.astro`, `Systems.astro`, `TechStack.astro`, `Work.astro`, `ResearchLab.astro`, `ArchitectureSection.astro`, `About.astro`, `Timeline.astro`, `Contact.astro`, `ContactCallout.astro`.
- `cards/`: `FeaturedProjectCard.astro`, `ProjectCard.astro`, `CapabilityCard.astro`, `LabCard.astro`, `ResearchInquiryCard.astro`, `DirectChannelCard.astro`.
- `common/`: `BackgroundEffects.astro`, `Breadcrumbs.astro`, `SectionHeader.astro`, `WhatsAppFloat.astro`.
- `seo/`: `SEO.astro`.

## 6. Styling & Design Tokens
- **Methodology:** Scoped Vanilla CSS coupled with global design token variables in `src/styles/variables.css`.
- **Design Tokens:**
  - Canvas: `#07110f` (Deep Emerald Dark)
  - Surface: `#101a17` / `rgba(16, 26, 23, 0.75)`
  - Accents: Mint/Teal `#7ed8c4`, Clay `#d2a071`, Lavender `#bda6ff`, Rose `#e0aaa7`
  - Typography: Ink `#f6f1e8` (Primary), Muted `#a9b8b1` & `#83968e` (Secondary)
- **Responsive Approach:** Fluid CSS scaling via `clamp()`, CSS Grid, Flexbox, and safe area insets. Zero arbitrary utility framework dependency.

## 7. Data Architecture
Data is strictly isolated from presentation in `src/data/`:
- `projects.ts` (6 verified project records with comprehensive 12-section technical case studies)
- `research.ts` (3 active hypothesis-driven research inquiries)
- `architecturePipeline.ts` (5-stage engineering lifecycle)
- `timeline.ts` (Active workbench status items)
- `capabilities.ts`, `skills.ts`, `navigation.ts`, `site.ts`, `contact.ts`, `opportunities.ts`

## 8. Asset Structure
- Images stored in `public/images/` categorized by `branding/`, `og/`, `projects/`, `research/`, and `profile/`.
- Typography loaded via Google Fonts (`Inter` for body/headings, `JetBrains Mono` for code/annotations).
- Icons implemented as inline, optimized SVG vectors for zero HTTP request overhead.

## 9. External Integrations
- **GitHub:** Repositories linked under `github.com/UzairAhmad88`. Build-time synchronization script in `scripts/sync-projects.mjs`.
- **Vercel:** Production hosting on Edge network with auto-deploy on `main`.
- **Form Handling:** Client-side sanitization, honeypot protection, serverless-ready payload formatting.

## 10. Quality Tooling & Verification
- **Testing:** Node.js native test runner (`node --test`) executing 37 automated unit tests across 6 suites in `tests/unit/`.
- **Type Checking:** Astro diagnostic compiler (`astro check`) executing over 84 files with 0 errors.
- **Formatting/Linting:** ESLint (`eslint-plugin-astro`, `@typescript-eslint`) and Prettier (`prettier-plugin-astro`).
