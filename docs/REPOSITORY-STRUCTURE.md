# Repository Structure & Directory Map

**Project:** Personal Developer Portfolio / Personal Engineering & Research Platform  
**Phase:** 34 — Final Engineering Documentation & Maintainability System  
**Source Root:** `d:/web/protfolio`  

---

## 1. Top-Level Codebase Layout

```text
/ (Project Root)
├── .github/
│   └── workflows/
│       └── ci.yml                 # Automated CI workflow (Astro check, test, build)
├── docs/                          # Comprehensive 5-Layer Engineering Documentation (40+ docs)
├── public/                        # Static assets (favicons, manifest.webmanifest, robots.txt)
├── scripts/                       # Synchronization & entity validation scripts
│   ├── sync-projects.mjs          # Tri-directional project sync script
│   ├── sync-vercel.mjs            # Vercel deployment evidence sync script
│   └── validate-*.mjs             # Entity-specific validation runners (Timeline, About, Contact, etc.)
├── src/                           # Platform application source code
│   ├── components/                # Astro & UI components organized by domain
│   ├── config/                    # Configuration constants (navigation, routes, site metadata)
│   ├── data/                      # Strongly-typed static content registries (Projects, Research, Notes, Lab, etc.)
│   ├── layouts/                   # Astro base and page layout envelopes
│   ├── lib/                       # Core domain engines (Knowledge, Discovery, SEO, Integrations)
│   ├── pages/                     # File-based static routes (60 static pages generated)
│   ├── styles/                    # Design tokens, variables, typography, and global styles
│   ├── types/                     # TypeScript domain models and interface contracts
│   └── utils/                     # Formatting, date calculations, and string helpers
├── tests/
│   └── unit/                      # 30 Unit test suites (244 tests running via node:test)
├── astro.config.mjs               # Astro static build configuration with sitemap integration
├── package.json                   # Project dependencies and verified CLI scripts
├── tsconfig.json                  # Strict TypeScript compiler options
└── vercel.json                    # Edge headers, caching directives, and clean rewrites
```

---

## 2. Directory Ownership & Purpose

| Directory | Primary Ownership | What Belongs Here | What MUST NOT Be Placed Here |
|:---|:---|:---|:---|
| `src/data/` | Content & Domain Data | Canonical TypeScript data registries (`projects.ts`, `research.ts`, `notes.ts`, `lab.ts`, `technologies.ts`, `timeline.ts`, `archive.ts`, `site.ts`) | HTML markup, CSS styling, or un-typed JSON dumps |
| `src/types/` | Domain Schemas | TypeScript interfaces, type aliases, and enums | Live state, UI logic, or raw data arrays |
| `src/components/` | Presentation UI | Modular `.astro` components categorized into `cards/`, `common/`, `layout/`, `sections/`, `seo/`, `ui/` | Direct database connection code or un-sanitized API scripts |
| `src/lib/` | Domain Engines | Pure TypeScript libraries for Discovery search, Knowledge Graph, GitHub/Vercel normalizers, and SEO builders | UI templates or page layouts |
| `src/pages/` | Routing & Composition | Static Astro route entrypoints (`index.astro`, `[slug].astro`, `404.astro`) | Reusable component markup or domain data definitions |
| `src/styles/` | Design Tokens | `variables.css` (tokens), `global.css` (reset/typography), `utilities.css` (grid/helpers), `animations.css` | Ad-hoc per-component hacks that bypass design tokens |
| `scripts/` | Automation & CI | Node.js scripts for validation and GitHub/Vercel sync operations | Core runtime UI rendering code |
| `tests/unit/` | Verification & QA | Unit test suites testing domain logic, SEO, accessibility invariants, and route existence | Temporary scratch scripts or manual logs |
| `docs/` | Documentation Hub | Layered markdown documentation, runbooks, checklists, and architecture specs | Compiled artifacts or secrets |

---

## 3. "Where to Add" Developer Guide

| Goal / Action | File / Directory Location | Action Required |
|:---|:---|:---|
| **Add a New Project Case Study** | `src/data/projects.ts` & `src/types/project.ts` | Add typed project object with stable `id`, `slug`, 6-lens data, architecture topology, and technologies. |
| **Add a Research Inquiry** | `src/data/research.ts` | Add research object with hypothesis, methodology, empirical findings, and mathematical formulas. |
| **Add an Engineering Note** | `src/data/notes.ts` | Add technical note object with category, problem, solution, and code blocks. |
| **Add a Lab Workbench** | `src/data/lab.ts` | Add experiment object with status (`completed`, `prototype`, `concept`), repo URL, and demo modal config. |
| **Add a Canonical Technology**| `src/data/technologies.ts` | Add technology entity with unique `id`, `name`, `category`, and ecosystem mappings. |
| **Add a UI Component** | `src/components/{cards\|sections\|ui}/` | Create reusable `.astro` component utilizing CSS custom properties from `variables.css`. |
| **Add a New Route** | `src/pages/{new-route}.astro` | Create page file utilizing `BaseLayout.astro` and canonical SEO meta. |
| **Add a Unit Test** | `tests/unit/{feature}.test.ts` | Author unit test using `node:test` and `node:assert/strict`. Register in `package.json`. |
| **Add a Static Asset** | `public/` (or `public/images/`) | Place optimized SVG, PNG, or WOFF2 font files. |
| **Update Global Theme Token** | `src/styles/variables.css` | Define token in `:root` and override in `[data-theme="light"]`. |
