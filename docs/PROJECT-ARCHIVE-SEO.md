# Project Archive System — SEO Architecture Specification

## 1. Indexing Strategy & Canonicals

The Project Archive System follows a rigorous search engine optimization strategy:
1. **Canonical URLs:** The dedicated catalog lives at `https://uzairahmad.vercel.app/archive`. Individual case studies retain their permanent, canonical locations at `https://uzairahmad.vercel.app/work/[slug]`.
2. **Substantive Content Indexing:** All public historical projects contain comprehensive case studies (Problem, Architecture, Implementation, Decisions, Lessons Learned, GitHub evidence) and are fully indexed (`index, follow`).
3. **Exclusion Protection:** Internal drafts (`unpublished`) and private records (`excluded`) are excluded from build artifacts, sitemaps, and public HTML routes.

---

## 2. Meta Tags & Structured Data

### 2.1 `/archive` Page Metadata
- **Title:** `Engineering Archive & Historical Systems | Uzair Ahmad`
- **Description:** `A curated historical archive of legacy projects, superseded systems, and technical explorations documenting software architecture progression.`
- **Canonical:** `https://uzairahmad.vercel.app/archive`
- **OpenGraph Type:** `website`

### 2.2 Archived Project Detail Pages (`/work/[slug]`)
- **Title:** `[Project Name] (Historical Archive) | Uzair Ahmad`
- **Schema.org Structured Data:**
  - `CreativeWork` / `SoftwareSourceCode`
  - `dateCreated` and `dateModified`
  - `isPartOf`: Links to Portfolio & Archive catalog
  - `citation`: Links to successor/predecessor projects

---

## 3. Sitemap Integration

- `/archive` is registered in `public/sitemap.xml` with priority `0.8` and `changefreq: monthly`.
- All public projects (including `legacy`, `superseded`, and `archived`) are indexed in the sitemap.
- No duplicate `/archive/[slug]` routes exist, preventing crawl cannibalization.
