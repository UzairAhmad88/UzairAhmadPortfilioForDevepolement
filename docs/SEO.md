# Technical SEO & Metadata Architecture

## 1. Technical SEO Overview
Technical SEO is implemented at the core architectural level. The goal is to maximize indexing velocity, crawl efficiency, and rich snippet presentation without relying on client-side JavaScript hydration.

---

## 2. Implemented Features in Phase 01

| Feature | Implementation | File Reference |
|---|---|---|
| **Title Tags** | Configurable via `buildMetadata` helper, defaulting to official brand title | `src/lib/seo/metadata.ts` |
| **Meta Description** | Accurate summary of quantitative, AI, and software capabilities | `src/data/site.ts` |
| **Canonical URL** | Automatically computes full absolute canonical URLs | `src/lib/seo/metadata.ts` |
| **Robots Directives** | Supports fine-grained `index/follow` and `noindex/nofollow` flags | `src/components/seo/SEO.astro` |
| **Open Graph Protocol** | Full `og:title`, `og:description`, `og:image`, `og:type`, `og:url` | `src/components/seo/SEO.astro` |
| **Twitter Cards** | Large image summary cards (`twitter:card`, `twitter:image`) | `src/components/seo/SEO.astro` |
| **XML Sitemap** | Generated dynamically at build time via `@astrojs/sitemap` | `astro.config.mjs` |
| **Robots.txt** | Clean crawl permissions referencing the XML sitemap index | `public/robots.txt` |
| **Schema.org Structured Data** | JSON-LD schema for `Person`, `WebSite`, and `ProfilePage` | `src/lib/seo/jsonld.ts` |
| **Semantic HTML** | One `<h1>` per page, hierarchical `<h2>`/`<h3>` tags, semantic `<nav>`, `<article>`, `<section>` | Throughout all components |

---

## 3. Structured Data (Schema.org JSON-LD)

### Person Schema
Accurately maps real identity, title, sameAs social links (GitHub, LinkedIn, WhatsApp, Vercel), and technical specialties.

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Uzair Ahmad",
  "jobTitle": "Quantitative AI & Product Engineer",
  "url": "https://uzairahmad.vercel.app",
  "sameAs": [
    "https://github.com/UzairAhmad88",
    "https://www.linkedin.com/in/uzair-ahmad-58007a266/",
    "https://wa.me/923103148117",
    "https://vercel.com/imuzairahmad8-6603s-projects"
  ]
}
```

---

## 4. Canonical URL & Domain Strategy
- **Production Domain**: `https://uzairahmad.vercel.app` (configurable via `PUBLIC_SITE_URL` in `.env`).
- **HTTPS**: Enforced automatically on Vercel edge deployment.
- **Trailing Slash**: Standardized without trailing slash redirects.

---

## 5. Future Advanced SEO (Phase 06 Roadmap)
- `Article` Schema for blog posts.
- `SoftwareApplication` / `CreativeWork` Schema for individual project case studies.
- `BreadcrumbList` Schema on multi-tier pages.
- Google Search Console verification tag integration.
