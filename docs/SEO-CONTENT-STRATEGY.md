# Technical SEO Content Strategy & Indexing Plan

## 1. Organic Search Strategy
The SEO strategy focuses on high-intent technical authority rather than spammy keyword stuffing.

### Search Query Clusters:

```
┌───────────────────────────────┬─────────────────────────────────────────────────────────────┐
│ Query Cluster                 │ Target Intent / Representative Queries                      │
├───────────────────────────────┼─────────────────────────────────────────────────────────────┤
│ 1. Brand Queries              │ "Uzair Ahmad", "Uzair Ahmad developer", "Uzair Ahmad GitHub"│
│ 2. Quantitative / HFT Systems │ "Deep Learning Stock Return Prediction Quantitative Trading",│
│                               │ "Market Regime Engine Python", "Quantitative AI Engineer"   │
│ 3. Full-Stack / Product SaaS  │ "CuraSphere Hospital Management System", "Restaurant POS"   │
│ 4. Engineering Capabilities   │ "Python Quant Developer", "Agentic AI Developer Portfolio"  │
└───────────────────────────────┴─────────────────────────────────────────────────────────────┘
```

---

## 2. On-Page Heading & Content Architecture Rules
1. **Single `<h1>`**: Exactly one `<h1>` per page reflecting the primary entity or title.
2. **Descriptive `<h2>` Headings**: Instead of generic headings like "Section 1", use descriptive technical titles:
   - *Four connected disciplines define how I approach technical problems.*
   - *Python connects my quantitative, AI, and product work.*
   - *Projects framed as systems, not just repositories.*
   - *Active themes across markets, intelligence, and systems.*
3. **Keyword Integration**: Naturally integrated into project problem statements, capability tags, and system descriptions without unnatural repetition.

---

## 3. Crawl Budget & Indexing Hygiene
- **Indexable Pages**: `/`, `/work`, `/research`, `/about`, `/contact`, and individual verified project case studies `/work/[slug]`.
- **Non-Indexable Utility Routes**: `/404` marked with `<meta name="robots" content="noindex, nofollow" />` and filtered from `sitemap-0.xml`.
- **Asset Directives**: `public/robots.txt` explicitly allows crawlers to access CSS, JS chunks, and images needed for mobile-friendly rendering.
- **Canonicalization**: Every page declares a single authoritative canonical URL matching `https://uzairahmad.vercel.app` (configurable via `PUBLIC_SITE_URL`).
