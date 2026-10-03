# Project Routing & URL Architecture

**Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
**Phase:** 05 — Project System 2.0  
**Status:** Approved  

---

## 1. Project Routing Schema

All project routes adhere strictly to clean kebab-case URL conventions:

- Primary Archive Index: `https://uzair-ahmad-portfilio-for-devepolem.vercel.app/work`
- Case Study Detail Routes:
  - `/work/deep-learning-stock-return-prediction`
  - `/work/multi-agent-prospect-intelligence`
  - `/work/curasphere-hms`
  - `/work/market-regime-engine`
  - `/work/restaurant-pos`
  - `/work/hayatabad-gym`

---

## 2. Dynamic Route Generation (`src/pages/work/[slug].astro`)

Project detail pages are pre-rendered at build time via Astro's `getStaticPaths()`:

```typescript
export function getStaticPaths() {
  return projects.map((project) => ({
    params: { slug: project.slug },
    props: { project },
  }));
}
```

This ensures 100% static HTML generation with sub-10ms response times and zero server runtime dependencies.

---

## 3. SEO & Structured Data

Each project route outputs:
- Dedicated `<title>`: `[Project Title] — Uzair Ahmad | Technical Case Study`
- OpenGraph & Twitter Cards.
- Schema.org `SoftwareApplication` or `SoftwareSourceCode` JSON-LD.
- BreadcrumbList: `Home → Work → [Project Title]`.
