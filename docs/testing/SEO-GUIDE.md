# SEO & Structured Data Guide

## 1. Metadata Architecture

The platform dynamically generates complete, search-engine-optimized metadata on every page via `src/components/seo/SEO.astro`.

---

## 2. Invariants & Implementation

1. **Canonical URLs**: Every page emits a self-referential canonical `<link rel="canonical" href="...">` without trailing slashes.
2. **OpenGraph & Twitter Cards**: Dynamic preview tags with fallback to `/og-default.png`.
3. **Structured Data (JSON-LD)**:
   - `Person` & `WebSite` on homepage.
   - `ProfilePage` on `/about`.
   - `SoftwareApplication` on project case studies.
   - `TechArticle` on research inquiries and engineering notes.
   - `BreadcrumbList` on all detail and hub pages.
4. **Sitemap**: Automated XML sitemap generation at `/sitemap-index.xml` via `@astrojs/sitemap`.
