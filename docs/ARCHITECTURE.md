# Architecture Specification — Uzair Ahmad Portfolio

## 1. Architectural Philosophy
The core philosophy of this project is **HTML-first, performance-first, and technical-SEO-driven engineering**. 

Every layer is built with intentional separation of concerns:
- **Presentation**: Astro components with scoped styling and accessible semantic markup.
- **Data & Content**: Strongly-typed TypeScript data models separating domain information from rendering.
- **SEO & Metadata**: Centralized metadata builders generating canonical tags, Open Graph cards, Twitter cards, and Schema.org JSON-LD structured data.
- **Client Behavior**: Isolated TypeScript scripts executing only where browser APIs (Three.js WebGL, IntersectionObserver, PointerEvents) are genuinely required.

---

## 2. Rendering Strategy
- **Static Site Generation (SSG)**: Complete static generation at build time via Astro.
- **Zero Client-Side Framework Runtime**: No React/Vue/Angular client bundle overhead.
- **Edge Deployment**: Output is a static directory (`dist/`) optimized for zero-cold-start global CDN caching on Vercel.

---

## 3. Data & Content Architecture
Data flows unidirectionally from domain entities into presentational layouts:

```
[src/types/ (*.ts)] ───────► [src/data/ (*.ts)]
                                  │
                                  ▼
[src/lib/seo/] ────────────► [src/components/seo/SEO.astro]
                                  │
                                  ▼
                             [src/layouts/BaseLayout.astro]
                                  │
                                  ▼
                             [src/pages/*.astro]
```

All data records (projects, capabilities, research themes, skills, social channels) are strictly typed. Missing fields remain `undefined` or optional rather than filled with fabricated placeholders.

---

## 4. Component Hierarchy
1. **Layouts (`src/layouts/`)**:
   - `BaseLayout.astro`: Document root, `<head>`, SEO, skip links, global background canvas, header, footer, floating actions.
   - `PageLayout.astro`: Standard subpage template for future deep-dive sections.
   - `ProjectLayout.astro`: Case study layout for future project deep-dives with breadcrumbs and meta.
2. **Sections (`src/components/sections/`)**:
   - Single-responsibility section containers (`Hero`, `Ticker`, `Systems`, `TechStack`, `Work`, `ResearchLab`, `ArchitectureSection`, `About`, `Timeline`, `Contact`).
3. **Cards (`src/components/cards/`)**:
   - Atomic interactive cards (`FeaturedProjectCard`, `ProjectCard`, `CapabilityCard`, `LabCard`).
4. **Common & SEO (`src/components/common/`, `src/components/seo/`)**:
   - Reusable utilities (`BackgroundEffects`, `WhatsAppFloat`, `SEO`, `SchemaOrg`).

---

## 5. SEO Architecture
- Single source of truth in `src/data/site.ts` and `src/lib/seo/metadata.ts`.
- Canonical domain: `https://uzairahmad.vercel.app` (configurable via `PUBLIC_SITE_URL`).
- Automatic XML sitemap generation via `@astrojs/sitemap`.
- Production-safe `robots.txt` allowing full asset and page discovery.
- Structured data via Schema.org (`Person`, `WebSite`, `ProfilePage`).

---

## 6. CSS & Styling Architecture
- **Vanilla CSS** with CSS Custom Properties (`src/styles/variables.css`).
- Zero reliance on external CSS utility runtime libraries.
- Modularized global styles, keyframe animations, accessibility `prefers-reduced-motion` fallbacks, and component-scoped styles.

---

## 7. Performance & Web Vitals
- Asynchronous font pre-connecting to Google Fonts.
- Pure CSS keyframe animations offloaded to the GPU (`transform`, `opacity`).
- Three.js WebGL canvas running in an isolated module with `prefers-reduced-motion` kill-switch and capped pixel ratio.
