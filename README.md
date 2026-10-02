# Uzair Ahmad — Quantitative AI & Product Engineer Portfolio

> Production-quality personal developer and systems portfolio built with Astro, TypeScript, and zero-runtime framework overhead.

---

## Overview

This repository houses the personal portfolio, engineering showcase, and research lab index of **Uzair Ahmad**, a Quantitative AI & Product Engineer building systems where finance, intelligence, and software meet.

---

## Purpose

1. Showcase technical capability across **Quantitative Finance**, **HFT / Algorithmic Trading**, **AI / ML / DL**, **Agentic Systems**, **Full Stack Software**, and **Product Engineering**.
2. Provide a scalable, type-safe, and search-engine-optimized web architecture capable of hosting deep-dive case studies, research papers, and technical articles.
3. Establish a baseline for web performance, accessibility, and clean code architecture.

---

## Tech Stack

- **Core Framework**: [Astro](https://astro.build/) (Static Site Generation / Zero-JS by default)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: Modular Vanilla CSS with CSS Custom Properties and Scoped Styles
- **3D & Graphics**: [Three.js](https://threejs.org/) (Isolated client WebGL canvas)
- **SEO & Sitemaps**: `@astrojs/sitemap`, Open Graph, Twitter Cards, Schema.org JSON-LD
- **CI / DevOps**: GitHub Actions CI, Vercel Edge Hosting

---

## Architecture

The project adheres to strict separation of presentation and domain data:
- **Presentation**: Modular Astro components in `src/components/` and `src/layouts/`.
- **Domain Data**: Strongly typed static data in `src/data/` adhering to schemas in `src/types/`.
- **SEO**: Reusable metadata builder in `src/lib/seo/` generating canonical tags, structured data, and robots directives.

For a full breakdown, see [docs/ARCHITECTURE.md](file:///d:/web/protfolio/docs/ARCHITECTURE.md).

---

## Project Structure

```
portfolio/
├── .github/workflows/ci.yml       # GitHub Actions CI pipeline
├── docs/                          # Comprehensive engineering documentation & ADRs
├── public/                        # Static assets, sitemaps, robots.txt, manifest
├── src/
│   ├── components/                # Modular UI components (cards, sections, layout, SEO)
│   ├── data/                      # Strongly-typed static content and site data
│   ├── layouts/                   # Base, Page, and Project layouts
│   ├── lib/                       # SEO, constants, and utilities
│   ├── pages/                     # File-based routes (/, /404)
│   ├── styles/                    # Global, variable, and utility stylesheets
│   └── types/                     # TypeScript domain models
├── tests/unit/                    # SEO and metadata unit tests
├── astro.config.mjs               # Astro configuration with sitemap integration
├── tsconfig.json                  # Strict TypeScript configuration
├── package.json                   # Dependencies and npm scripts
└── README.md
```

For detailed directory descriptions, see [docs/PROJECT-STRUCTURE.md](file:///d:/web/protfolio/docs/PROJECT-STRUCTURE.md).

---

## Local Development

### Installation
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
Open `http://localhost:4321` in your browser.

---

## Available Commands

| Command | Description |
|---|---|
| `npm run dev` | Start local development server on port 4321. |
| `npm run build` | Build static production assets into `dist/`. |
| `npm run preview` | Preview the local production build. |
| `npm run check` | Run Astro and TypeScript diagnostic type checks. |
| `npm test` | Run Node.js unit tests. |
| `npm run lint` | Run ESLint across `.astro`, `.ts`, and `.js` files. |
| `npm run format` | Format files using Prettier. |

---

## Content Management

To add or update projects, capabilities, research themes, or contact info, simply edit the corresponding file in `src/data/` without modifying component markup. See [docs/CONTENT-MANAGEMENT.md](file:///d:/web/protfolio/docs/CONTENT-MANAGEMENT.md).

---

## Technical SEO & Structured Data

The site automatically provides:
- Clean XML sitemaps at `/sitemap-index.xml`.
- Canonical URLs matching the production domain `https://uzairahmad.vercel.app`.
- Full Open Graph and Twitter Card social metadata.
- Schema.org JSON-LD structured data for `Person`, `WebSite`, and `ProfilePage`.

See [docs/SEO.md](file:///d:/web/protfolio/docs/SEO.md).

---

## Deployment

Deployments are automated via Vercel on push to `main` branch.
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: `20.x` or higher

See [docs/DEPLOYMENT.md](file:///d:/web/protfolio/docs/DEPLOYMENT.md).

---

## Roadmap

This codebase represents **Phase 01: Architecture & Engineering Foundation**. For upcoming phases (Design System, Case Studies, Technical Blog, Lead Gen), see [docs/ROADMAP.md](file:///d:/web/protfolio/docs/ROADMAP.md).
