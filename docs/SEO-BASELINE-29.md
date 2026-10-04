# SEO Baseline 29 (Pre-Optimization & Technical Inventory)

## 1. Search Technical Inventory
- **Site URL:** `https://uzairahmad.vercel.app`
- **Sitemap Generator:** `@astrojs/sitemap` (Astro Integration)
- **Sitemap Files Generated:** `sitemap-index.xml`, `sitemap-0.xml` (58 indexable routes listed)
- **Robots Directives:** `public/robots.txt` allowing all crawlers with sitemap references
- **Canonical Structure:** Clean lowercase URLs without trailing slashes
- **Structured Data Engine:** `@lib/seo/schema/*` exporting JSON-LD schemas
- **Language Declaration:** `<html lang="en">` in `BaseLayout.astro`

---

## 2. Route Classification & Indexation Baseline

| Route Classification | Route Examples | Indexation Decision | Robots Directive |
| :--- | :--- | :--- | :--- |
| **Core Home & Brand** | `/`, `/about`, `/collaborate`, `/how-i-build` | **Indexable** | `index, follow` |
| **Work & Projects** | `/work`, `/work/deep-learning-stock-return-prediction`, `/work/curasphere-hms`, ... | **Indexable** | `index, follow` |
| **Research Inquiries** | `/research`, `/research/signal-research`, `/research/market-regimes`, ... | **Indexable** | `index, follow` |
| **Engineering Notes** | `/notes`, `/notes/async-sqlalchemy-session-lifecycle`, ... | **Indexable** | `index, follow` |
| **Lab Workbench** | `/lab`, `/lab/fractional-diff-cli`, `/lab/streaming-orderbook-sse`, ... | **Indexable** | `index, follow` |
| **Technology Ecosystem** | `/technology`, `/technology/python`, `/technology/fastapi`, ... | **Indexable** | `index, follow` |
| **Discovery & Search** | `/discover` | **Indexable (Static Base)** | `index, follow` (Query params canonicalized) |
| **System Timeline & Archive** | `/timeline`, `/archive` | **Indexable** | `index, follow` |
| **Contact Inquiries** | `/contact` | **Indexable** | `index, follow` |
| **Contact Success State** | `/contact/success` | **Non-Indexable** | `noindex, nofollow` |
| **Error Route** | `/404` | **Non-Indexable** | `noindex, nofollow` |
