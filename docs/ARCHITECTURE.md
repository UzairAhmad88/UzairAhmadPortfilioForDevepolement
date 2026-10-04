# System Architecture Specification

**Project:** Personal Developer Portfolio / Personal Engineering & Research Platform  
**Phase:** 34 — Final Engineering Documentation & Maintainability System  
**Framework:** Astro 4.16.18 (Static Site Generation / Pure HTML Edge Output)  
**Language:** TypeScript 5.7.3 (Strict Mode)  
**Live Target:** [https://uzair-ahmad-portfilio-for-devepolem.vercel.app/](https://uzair-ahmad-portfilio-for-devepolem.vercel.app/)  

---

## 1. Architectural Overview & System Model

The platform is designed as a **high-performance, content-driven, static engineering intelligence system**. It couples the instant loading speeds of zero-runtime Static Site Generation (SSG) with an interconnected knowledge graph, multi-facet discovery engine, and empirical telemetry pipelines.

```text
┌───────────────────────────────────────────────────────────────────────────────┐
│                           5-LAYER SYSTEM ARCHITECTURE                         │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  1. PRESENTATION LAYER                                                        │
│     ├── Design Tokens (variables.css) & Scoped Component Styles               │
│     ├── Theme 2.0 Engine (Zero-FOUC Dark/Light Modes via localStorage)        │
│     ├── Fluid Responsive System (CSS clamp, 320px to 3840px Ultrawide)        │
│     ├── Motion 2.0 (prefers-reduced-motion safe micro-interactions)           │
│     └── Signature Lens Navigator (6 Modular Engineering Perspectives)        │
│                                                                               │
│  2. APPLICATION LAYER                                                         │
│     ├── Astro SSG Compiler (Pure HTML compilation, Zero JS hydration)         │
│     ├── 60 Static Routes (Core, Work, Research, Notes, Lab, Tech, 404)        │
│     ├── Component Hierarchy (Layouts -> Sections -> Cards -> Micro-UI)        │
│     └── Technical SEO & Schema.org JSON-LD Generators                         │
│                                                                               │
│  3. KNOWLEDGE & DISCOVERY LAYER                                               │
│     ├── Personal Knowledge Engine (Multi-entity contextual recommendations)   │
│     ├── Discovery Search Engine (Instant client-side token search & facets)   │
│     ├── Interactive Knowledge Graph (2D/3D Force Graph + Table Fallback)      │
│     └── Engineering Timeline Engine (Chronological descending event graph)   │
│                                                                               │
│  4. DATA & DOMAIN LAYER                                                       │
│     ├── Canonical TypeScript Registries (src/data/*.ts)                       │
│     ├── Bi-directional Entity Relationships (Projects <-> Tech <-> Research)  │
│     ├── Factual Truth Audit Enforcers (Zero fabricated scores or claims)      │
│     └── Project DNA & Visualization Topologies                                │
│                                                                               │
│  5. INTEGRATION & DELIVERY LAYER                                              │
│     ├── GitHub Intelligence (Repo discovery, commit lineage, sync engine)    │
│     ├── Vercel Intelligence (Deployment evidence, domain validation)          │
│     ├── Project Sync Engine (Tri-directional matching & dry-run validation)   │
│     ├── Form Security & Honeypot Protection (Zero secret leakage)            │
│     └── Vercel Edge Static Delivery (Immutable caching & HTTP headers)        │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Layer 1: Presentation Layer

### Design Token Architecture (`src/styles/variables.css`)
- **Color System:** Semantic HSL tokens for primary background, surfaces, borders, text, accents, and status indicators.
- **Typography Scale:** Fluid font sizing calculated via `clamp()` equations mapped to Inter (system sans) and JetBrains Mono (monospace code).
- **Spacing Matrix:** Fluid padding and margin variables (`--space-xs` through `--space-3xl`) adapting seamlessly between mobile and desktop.

### Theme 2.0 Engine
- Evaluates `localStorage.getItem('theme')` or system `prefers-color-scheme` via an inline synchronous script in `<head>` before DOM render, completely eliminating Flash of Unstyled Content (FOUC).
- Dispatches theme toggle events updating the `data-theme="light"` attribute on `document.documentElement`.

### Signature Interaction: Engineering Lens Navigator
- Provides 6 orthogonal perspectives on every project: **Overview**, **Architecture**, **Constraints**, **Stack**, **Evidence**, and **Retrospective**.
- Renders rich modal dialogs with zero layout shift, maintaining strict keyboard focus traps and escape key handlers.

---

## 3. Layer 2: Application Layer

### Astro SSG Compilation Pipeline
- Astro compiles all `.astro` templates at build time into pure HTML in `dist/`.
- Dynamic route parameters (`[slug].astro`) use `export async function getStaticPaths()` to extract slugs from canonical data registries.
- **Client Script Budget:** Only 9 tiny vanilla TypeScript chunks (16.34 KB raw / 7.15 KB gzip total) are shipped for client interactivity (theme, search, modals, timeline filtering).

### Layout & Component Structure
- `BaseLayout.astro`: Shell providing HTML document envelope, `<head>`, metadata, skip-to-content accessibility link, header, and footer.
- `src/components/layout/`: `Header.astro`, `Footer.astro`, `Navigation.astro`.
- `src/components/sections/`: Modular page sections (`Hero.astro`, `Currently.astro`, `Work.astro`, `Contact.astro`, etc.).
- `src/components/cards/`: Atomic display units (`ProjectCard.astro`, `ResearchCard.astro`, `LabCard.astro`, `NoteCard.astro`, `TechCard.astro`).

---

## 4. Layer 3: Knowledge & Discovery Layer

### Personal Knowledge Engine (`src/lib/knowledge/`)
- Aggregates all cross-entity connections across Projects, Research, Lab Workbenches, Engineering Notes, and Technologies.
- Computes contextual similarity, entity pathways, and domain clusters without requiring external server calls.

### Discovery Search Engine (`src/lib/discovery/`)
- Client-side tokenized search index built during static compilation.
- Supports instant multi-facet queries across content type, primary technology, and research topic.
- Implements HTML sanitization and regex escaping for search query highlighting.

### Knowledge Graph
- Visualizes entity connections via canvas/WebGL rendering with physics-based node positioning.
- Features a full semantic HTML table fallback for complete screen-reader and accessibility compliance.

---

## 5. Layer 4: Data & Domain Layer

### Canonical Registries (`src/data/`)
- `projects.ts`: 8 featured and production software engineering case studies.
- `research.ts`: 3 quantitative and agentic research inquiry dossiers.
- `notes.ts`: 6 technical engineering notes on systems, databases, and mathematics.
- `lab.ts`: 6 interactive and CLI lab workbench experiments.
- `technologies.ts`: 19 canonical technology entity definitions.
- `timeline.ts`: Chronological event sequence generator.
- `archive.ts`: Historical and paused project repository data.
- `site.ts`: Site metadata, author identity, and contact configuration.

### Truth Invariants
- Zero fabricated proficiency bars, zero fake star ratings, zero fictitious client numbers.
- Explicit documentation of project limitations, challenges, and unverified areas.

---

## 6. Layer 5: Integration & Delivery Layer

### GitHub & Vercel Intelligence Pipelines
- Automated scripts in `scripts/` discover, validate, and match public repositories and Vercel deployments against portfolio projects.
- Distinguishes between live evidence, cached baseline evidence, and manually curated records.

### Delivery & CDN Caching (`vercel.json`)
- Static HTML files served from Vercel Edge locations globally.
- Assets in `_astro/*` configured with `Cache-Control: public, max-age=31536000, immutable`.
- Security headers enforced: HSTS, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`.
