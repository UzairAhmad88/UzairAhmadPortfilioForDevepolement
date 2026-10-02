# Changelog

All notable changes to the Uzair Ahmad Personal Professional Platform codebase are documented in this file.

---

## [1.1.0] — 2026-10-03 — Phase 11: Real GitHub + Vercel Project System & Sync Engine

### Added
- **GitHub Integration Layer (`src/lib/github/`)**:
  - `types.ts`: Strongly typed schemas for GitHub API entities, classifications, and sync reports.
  - `normalizer.ts`: Technology dictionary normalization, classification heuristics, and URL validator.
  - `matcher.ts`: Known project mapping registry and update-freshness detection.
  - `client.ts`: Resilient GitHub HTTP client with rate-limit header handling and baseline fallbacks.
  - `sync.ts`: In-memory diffing engine, markdown report generator, and draft scaffold generator.
- **Vercel Integration Layer (`src/lib/vercel/`)**:
  - `index.ts`: Verified Vercel deployment registry and project matcher.
- **CLI Synchronization Tooling**:
  - `scripts/sync-projects.mjs`: CLI script for `--dry-run` and active repository synchronization (`npm run projects:sync`).
  - Added npm scripts `"projects:sync"` and `"sync:github"`.
- **Enriched Project Metadata**:
  - Extended `Project` interface with `source`, `githubRepo`, `vercelUrl`, `liveUrl`, `repositoryStatus`, `deploymentStatus`, `repositoryUpdatedAt`, `isLatest`, and `publishedAt`.
  - Added `getFeaturedProjects()`, `getLatestProjects()`, and `getProjectBySlug()` helpers in `src/data/projects.ts`.
- **UI Enhancements**:
  - Updated `ProjectCard.astro` to display verified `Live Demo ↗` links when available.
- **Unit Testing**:
  - Added `tests/unit/github-sync.test.ts` bringing total unit tests to 37 (100% passing).
- **Phase 11 Documentation**:
  - `docs/GITHUB-INTEGRATION.md`, `docs/VERCEL-INTEGRATION.md`, `docs/PROJECT-SYNC.md`, `docs/PROJECT-SOURCE-MAPPING.md`, `docs/PROJECT-PUBLISHING-WORKFLOW.md`, `docs/PROJECT-SOURCE-HEALTH.md`, `docs/PHASE-11-IMPLEMENTATION.md`, `docs/PHASE-11-REPORT.md`.

---

## [1.0.0] — 2026-10-02 — Phase 10: Final Product Polish + Production Launch

### Added
- **Production Polish Documentation**:
  - `docs/PHASE-10-AUDIT.md`: End-to-end cognitive walkthrough across 6 user journeys (A–F).
  - `docs/USER-JOURNEY-FINAL-AUDIT.md`: Multi-persona evaluation covering Recruiters, Potential Clients, Technical Collaborators, Researchers, and Web Developers.
  - `docs/PRODUCTION-SMOKE-TEST.md`: 14-point production release smoke test protocol.
  - `docs/FINAL-URL-INVENTORY.md`: Comprehensive route inventory covering all 17 public routes.
  - `docs/FINAL-CONTENT-INVENTORY.md`: Verification matrix for all 6 projects, 3 research inquiries, and 3 service models.
  - `docs/DEVELOPER-ONBOARDING.md`: 12-step onboarding manual for developers and maintainers.
  - `docs/CONTENT-AUTHORING.md`: Step-by-step authoring guide for projects and research notes.
  - `docs/MAINTENANCE-PLAN.md`: Weekly, monthly, quarterly, and annual maintenance plans.
  - `docs/POST-LAUNCH-ROADMAP.md`: Pragmatic NOW, NEXT, and LATER engineering roadmap.
  - `docs/RELEASE-NOTES-V1.md`: Official V1.0.0 release notes.
  - `docs/LAUNCH-CHECKLIST.md`: Pre-launch gate checklist across 9 quality dimensions.
  - `docs/README.md`: Master documentation hub index linking all 90+ specifications.
  - `docs/PHASE-10-REPORT.md`: Comprehensive Phase 10 executive report.
- **UI & Component Consistency**:
  - Updated `ProjectCard.astro` with dedicated `.status-academic` styling and badge rendering.
  - Cleaned unused imports and variables in `src/pages/about.astro` and `src/pages/research/[slug].astro`.

### Improved
- Master repository `README.md` updated with technical stack, commands, architecture layout, and documentation links.
- Confirmed zero Astro/TypeScript diagnostics (0 errors, 0 warnings, 0 hints across 77 codebase files).

---

## [0.9.0] — Phase 09: Observability, Performance, Security & Testing
- Added production HTTP security headers in `vercel.json` (HSTS, `nosniff`, `DENY` frames, `Permissions-Policy`).
- Implemented privacy-first analytics event dispatcher in `src/lib/analytics/events.ts`.
- Created unit test suite for analytics and data privacy (`tests/unit/production.test.ts`), bringing total unit tests to 31.
- Updated `.github/workflows/ci.yml` with multi-stage test, type check, and build validation.
- Created production audit, baseline, budgets, security audit, incident response, and third-party service specifications.

---

## [0.8.0] — Phase 08: Technical SEO & Structured Data
- Implemented complete Schema.org JSON-LD generation (`Person`, `WebSite`, `ProfilePage`, `TechArticle`, `SoftwareApplication`, `BreadcrumbList`).
- Dynamic sitemap index generation via `@astrojs/sitemap`.
- Automated Open Graph and Twitter Card generation with canonical URL enforcement.

---

## [0.7.0] — Phase 07: Services, Collaboration & Lead System
- Built `/services` page with transparent collaboration models (Quantitative Systems, AI Agents, Full-Stack Engineering).
- Implemented `/contact` form with honeypot spam protection, CRLF injection defense, and `/contact/success` confirmation.

---

## [0.6.0] — Phase 06: Research Lab & Knowledge Graph
- Created `/research` index and dynamic `/research/[slug]` inquiry detail pages.
- Embedded LaTeX/mathematical formulas, empirical methodology, findings, and authentic DOI literature citations.
- Established bidirectional knowledge graph linking research inquiries to engineering projects.

---

## [0.5.0] — Phase 05: Projects & Deep Case Studies
- Created dynamic `/work/[slug]` route for in-depth engineering case studies.
- Added 4-layer system architecture diagrams, trade-off analyses, and direct GitHub source code links.

---

## [0.4.0] — Phase 04: Production Website UI
- Implemented interactive SVG system visualization in Hero section.
- Built responsive card components and mobile navigation drawer with focus management.

---

## [0.3.0] — Phase 03: Page Architecture & Wireframes
- Defined textual blueprints, section flows, and component mappings across all public routes.

---

## [0.2.0] — Phase 02: Brand & UX Strategy
- Formulated positioning narrative, core audience pillars, and progressive disclosure UX strategy.

---

## [0.1.0] — Phase 01: Engineering Foundation
- Migrated prototype to Astro 5 with TypeScript, modular design tokens, and CI foundation.
