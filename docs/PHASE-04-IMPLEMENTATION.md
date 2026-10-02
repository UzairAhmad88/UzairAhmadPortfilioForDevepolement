# Phase 04 Implementation Specification

This document details the exact UI components, multi-page routing templates, responsive layouts, accessibility behaviors, SEO configurations, and performance metrics implemented in Phase 04.

---

## 1. Multi-Page Routes Implemented

| Route | Page File | Purpose | Key Components Integrated |
|---|---|---|---|
| `/` | `src/pages/index.astro` | Homepage gateway, flagship showcase, domain disciplines, philosophy. | `Hero`, `Systems`, `TechStack`, `Work`, `ResearchLab`, `ArchitectureSection`, `About`, `Timeline`, `Contact` |
| `/about` | `src/pages/about.astro` | Personal background, 3 core engineering values, technical toolkit matrix. | `Breadcrumbs`, `SectionHeader`, `ContactCallout` |
| `/work` | `src/pages/work/index.astro` | Searchable & filterable catalog of verified projects and systems. | `Breadcrumbs`, `SectionHeader`, `FeaturedProjectCard`, `ProjectCard`, `ContactCallout` |
| `/work/[slug]` | `src/pages/work/[slug].astro` | Dynamic static case studies with architecture diagrams, decisions, and outcomes. | `Breadcrumbs`, `ProjectMetaBar`, `ArchitectureDiagram`, `ProjectCard`, `ContactCallout` |
| `/research` | `src/pages/research.astro` | Hypothesis-driven technical inquiry cards and methodology standards. | `Breadcrumbs`, `SectionHeader`, `ResearchInquiryCard`, `ContactCallout` |
| `/services` | `src/pages/services.astro` | Honest technical collaboration capabilities (Full-Stack, AI/ML, Quant pipelines). | `Breadcrumbs`, `SectionHeader`, `ContactCallout` |
| `/contact` | `src/pages/contact.astro` | Direct channels (Email, LinkedIn, GitHub, WhatsApp) and response commitment. | `Breadcrumbs`, `SectionHeader`, `DirectChannelCard` |
| `/404` | `src/pages/404.astro` | Accessible error recovery page with direct navigation links. | `BaseLayout`, Error Recovery Card |

---

## 2. Reusable Component Systems Implemented

### A. Navigation & Layout
- **`SiteHeader.astro`**: Sticky blur navbar with brand monogram, desktop navigation links, active route highlight, and accessible mobile drawer trigger button.
- **`MobileNavDrawer.astro`**: Slide-in mobile overlay with keyboard focus trapping, `Escape` key dismissal, backdrop dismiss, and body scroll lock.
- **`SiteFooter.astro`**: High-density semantic footer with positioning statement, status indicator (`Available for select opportunities`), structured link columns, and direct contact options.
- **`Breadcrumbs.astro`**: Accessible breadcrumb trail with automated Schema.org JSON-LD `BreadcrumbList` generation.

### B. Cards & Content
- **`FeaturedProjectCard.astro`**: Prominent flagship showcase for *Deep Learning Stock Return Prediction* with role, status, tech pill list, and dual CTAs.
- **`ProjectCard.astro`**: Standard grid card with category data attributes, dynamic status badges, and direct links to case studies and public repositories.
- **`ResearchInquiryCard.astro`**: Status-badged inquiry cards (`Exploring`, `Experimenting`, `Building`) with core question, methodology tags, and GitHub notebook links.
- **`DirectChannelCard.astro`**: Direct contact action cards for Email, LinkedIn, GitHub, and WhatsApp.
- **`ContactCallout.astro`**: Bottom-of-page conversion banner guiding visitors to start a conversation.

---

## 3. SEO & Structured Data Implementation

1. **Unique Page Metadata**: Every page provides distinct `<title>`, `<meta name="description">`, canonical URLs, and OpenGraph tags via `BaseLayout` and `SeoHead`.
2. **Schema.org JSON-LD**:
   - `WebSite` & `Person` on `/` and `/about`.
   - `BreadcrumbList` on all subpages.
   - `SoftwareSourceCode` on case study pages (`/work/[slug]`).
3. **Automated XML Sitemap**: Generated statically to `/sitemap-index.xml` via `@astrojs/sitemap`.

---

## 4. Accessibility & Performance Verification

- **Keyboard Navigation**: All interactive elements (drawer buttons, filter pills, case study links, external anchors) possess high-contrast `:focus-visible` rings.
- **Semantic Structure**: Single `<h1>` per page, hierarchical `<h2>`/`<h3>` headings, semantic `<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, and `<footer>` landmarks.
- **Zero-JS Baseline**: All pages, case studies, and content render completely as static HTML/CSS. Client-side JavaScript is reserved solely for non-critical enhancements (mobile drawer, category filter).
- **Reduced Motion**: Full `@media (prefers-reduced-motion: reduce)` support instantly disabling transitions.
