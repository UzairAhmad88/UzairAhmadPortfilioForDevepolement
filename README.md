# Uzair Ahmad — Quantitative AI & Product Engineer Platform

> Production-quality personal developer and research platform built with Astro, strict TypeScript, and zero-runtime framework overhead.

---

## Overview

This repository houses the personal professional website, engineering case studies, and research lab index of **Uzair Ahmad**, a Quantitative AI & Product Engineer building systems where finance, intelligence, and software meet.

- **Production URL**: [https://uzairahmad.vercel.app](https://uzairahmad.vercel.app)
- **GitHub Repository**: [github.com/UzairAhmad88/UzairAhmadPortfilioForDevepolement](https://github.com/UzairAhmad88/UzairAhmadPortfilioForDevepolement)
- **Version**: `v1.0.0` (All 10 Engineering Phases Completed)

---

## Technical Stack

- **Core Framework**: [Astro 5](https://astro.build/) (Pure Static Site Generation — Zero client-side JS bloat)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode across 100% of files)
- **Styling**: Vanilla CSS Design Tokens with CSS Custom Properties and Scoped Styles
- **SEO & Structured Data**: `@astrojs/sitemap`, Open Graph, Twitter Cards, Schema.org JSON-LD (`Person`, `WebSite`, `ProfilePage`, `TechArticle`, `SoftwareApplication`, `BreadcrumbList`)
- **Testing & QA**: Node.js native test runner (`node:test`) with 31 unit tests across 6 suites
- **DevOps & CI/CD**: GitHub Actions CI (`.github/workflows/ci.yml`), Vercel Edge Hosting with strict security headers (`vercel.json`)

---

## Architecture & Codebase Layout

```text
portfolio/
├── .github/workflows/ci.yml       # Automated CI pipeline (Test -> Check -> Build)
├── docs/                          # Comprehensive documentation index (docs/README.md)
├── public/                        # Static assets, sitemaps, robots.txt, icons
├── src/
│   ├── components/                # Modular UI components (cards, sections, layout, SEO)
│   ├── data/                      # Strongly-typed static content and site data
│   ├── layouts/                   # Base and page layouts (BaseLayout.astro)
│   ├── lib/                       # Analytics, contact helpers, and Schema.org builders
│   ├── pages/                     # 17 Astro file-based static routes
│   ├── styles/                    # Global design tokens and typography
│   └── types/                     # TypeScript domain models and interfaces
├── tests/unit/                    # 31 unit tests (SEO, projects, research, contact, analytics)
├── astro.config.mjs               # Astro static build configuration
├── tsconfig.json                  # Strict TypeScript configuration
├── package.json                   # Scripts and project dependencies
├── vercel.json                    # HTTP security headers and caching configuration
└── README.md
```

---

## Local Development & Quickstart

```bash
# 1. Clone repository
git clone https://github.com/UzairAhmad88/UzairAhmadPortfilioForDevepolement.git
cd UzairAhmadPortfilioForDevepolement

# 2. Install dependencies
npm install

# 3. Setup environment variables
cp .env.example .env

# 4. Start local development server
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

---

## Available Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start local development server on port 4321. |
| `npm test` | Run all 31 unit tests across 6 suites via `node:test`. |
| `npm run check` | Run Astro and TypeScript diagnostic type checks across all 77 files. |
| `npm run build` | Build static production assets and XML sitemaps into `dist/`. |
| `npm run preview` | Preview the generated production build locally. |
| `npm run lint` | Run ESLint across `.astro`, `.ts`, and `.js` files. |
| `npm run format` | Format codebase using Prettier. |

---

## Content Collections & Authoring

To add or update projects, research inquiries, services, or contact info:
- Edit `src/data/projects.ts` for project case studies.
- Edit `src/data/research.ts` for research inquiries and mathematical formulas.
- Edit `src/data/site.ts` for profile info, biography, and social links.
- Edit `src/data/opportunities.ts` for services and collaboration offerings.

Detailed authoring guides are available at [docs/CONTENT-AUTHORING.md](file:///d:/web/protfolio/docs/CONTENT-AUTHORING.md).

---

## Documentation Suite

The project includes an extensive engineering and product documentation suite under `docs/`:
- [docs/README.md](file:///d:/web/protfolio/docs/README.md) — Master Documentation Index
- [docs/RELEASE-NOTES-V1.md](file:///d:/web/protfolio/docs/RELEASE-NOTES-V1.md) — Release Notes v1.0.0
- [docs/DEVELOPER-ONBOARDING.md](file:///d:/web/protfolio/docs/DEVELOPER-ONBOARDING.md) — Developer Onboarding Guide
- [docs/MAINTENANCE-PLAN.md](file:///d:/web/protfolio/docs/MAINTENANCE-PLAN.md) — Long-Term Maintenance Plan
- [docs/LAUNCH-CHECKLIST.md](file:///d:/web/protfolio/docs/LAUNCH-CHECKLIST.md) — Launch Verification Checklist
- [docs/PRODUCTION-SMOKE-TEST.md](file:///d:/web/protfolio/docs/PRODUCTION-SMOKE-TEST.md) — 14-Point Smoke Test Protocol
- [docs/SECURITY-AUDIT.md](file:///d:/web/protfolio/docs/SECURITY-AUDIT.md) — Security & Privacy Audit

---

## Deployment & Edge Hosting

- **Platform**: Vercel Edge Hosting
- **Build Output**: Static HTML (`dist/`)
- **Security Headers**: HSTS, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Permissions-Policy`, immutable asset caching
- **Domain**: `https://uzairahmad.vercel.app`
