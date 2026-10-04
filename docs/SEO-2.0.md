# SEO 2.0 Specification & Search Integrity Architecture

## 1. Primary Objective
SEO 2.0 establishes an authoritative, search-engine-accessible, crawlable, and truthful indexation architecture for the Personal Engineering & Research Platform. It ensures search engines accurately perceive and rank the verified engineering projects, quantitative research inquiries, laboratory prototypes, and technical notes without keyword stuffing, doorway pages, or fabricated claims.

---

## 2. Core SEO Philosophy: Search Integrity
1. **Content-First Integrity:** Search metadata strictly reflects the verified technical substance of each page.
2. **Zero Keyword Stuffing:** No repetitive phrases ("best AI engineer", "top quant developer"). Headings and descriptions use natural editorial prose.
3. **Zero Fabricated Schemas:** JSON-LD structured data is applied only where the underlying entity genuinely matches schema definitions (`Person`, `WebSite`, `ProfilePage`, `BreadcrumbList`, `TechArticle`, `SoftwareApplication`). No fake star ratings, reviews, or bogus client testimonials.
4. **Canonical Uniformity:** Every indexable route enforces a single canonical URL without trailing slashes.
5. **Static Crawlability:** Built via Astro SSG; all semantic content and links exist in rendered HTML before client JavaScript executes.

---

## 3. SEO System Architecture

```text
┌──────────────────────────────────────────────────────────────────┐
│                     src/lib/seo/metadata.ts                      │
│            buildMetadata() & getCanonicalUrl() Engine            │
└────────────────────────────────┬─────────────────────────────────┘
                                 │
                 ┌───────────────┴───────────────┐
                 ▼                               ▼
  ┌─────────────────────────────┐  ┌─────────────────────────────┐
  │  src/components/seo/        │  │  src/lib/seo/schema/        │
  │  SEO.astro                  │  │  JSON-LD Generators         │
  │  - Primary Title & Meta     │  │  - Person (About)           │
  │  - Canonical <link>         │  │  - WebSite (Global)         │
  │  - Robots Directives        │  │  - ProfilePage (Bio)        │
  │  - Open Graph / Facebook    │  │  - TechArticle (Notes/Res)  │
  │  - Twitter/X Summary Cards  │  │  - SoftwareApplication      │
  │  - Web Manifest & Favicon   │  │  - BreadcrumbList (Routes)  │
  └─────────────────────────────┘  └─────────────────────────────┘
```
