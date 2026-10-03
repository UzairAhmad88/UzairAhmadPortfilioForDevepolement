# Route Inventory — Canonical URL & Endpoint Catalog

**Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
**Total Static Routes:** 17 Endpoints  
**Audit Date:** Phase 01 Baseline  

---

| Route URL | Page Component | Purpose & Target Content | Content Source | Dynamic / Static | SEO Status | A11y Status | Responsive Status |
|---|---|---|---|---|---|---|---|
| `/` | `src/pages/index.astro` | Platform landing, positioning, 5-stage build lifecycle, featured systems, active workbench status | `src/data/*.ts` | Static | Indexable, Full Schema (Person, WebSite, ProfilePage) | Landmarks, Skip Link, ARIA tabs | Fluid 320px–3840px |
| `/work` | `src/pages/work/index.astro` | Catalog of all verified projects, interactive category filtering | `src/data/projects.ts` | Static | Indexable, Canonical URL, Breadcrumbs | Filter tabs with `aria-pressed`, live counts | 2-col / 1-col grid |
| `/work/deep-learning-stock-return-prediction` | `src/pages/work/[slug].astro` | Flagship case study: non-stationary time-series return forecasting in PyTorch | `src/data/projects.ts` | Static (`getStaticPaths`) | Indexable, SoftwareSourceCode Schema | Semantic headings, code blocks | Responsive sidebar |
| `/work/multi-agent-prospect-intelligence` | `src/pages/work/[slug].astro` | FYP case study: multi-agent prospect enrichment and lead scoring system | `src/data/projects.ts` | Static (`getStaticPaths`) | Indexable, SoftwareSourceCode Schema | Semantic headings, code blocks | Responsive sidebar |
| `/work/curasphere-hms` | `src/pages/work/[slug].astro` | Case study: full-stack clinic & hospital management SaaS platform | `src/data/projects.ts` | Static (`getStaticPaths`) | Indexable, SoftwareApplication Schema | Semantic headings, code blocks | Responsive sidebar |
| `/work/market-regime-engine` | `src/pages/work/[slug].astro` | Case study: quantitative volatility regime detection engine using GMM/HMM | `src/data/projects.ts` | Static (`getStaticPaths`) | Indexable, SoftwareSourceCode Schema | Semantic headings, code blocks | Responsive sidebar |
| `/work/restaurant-pos` | `src/pages/work/[slug].astro` | Case study: restaurant point-of-sale and kitchen inventory system | `src/data/projects.ts` | Static (`getStaticPaths`) | Indexable, SoftwareApplication Schema | Semantic headings, code blocks | Responsive sidebar |
| `/work/hayatabad-gym` | `src/pages/work/[slug].astro` | Case study: fitness platform and digital membership experience | `src/data/projects.ts` | Static (`getStaticPaths`) | Indexable, SoftwareApplication Schema | Semantic headings, code blocks | Responsive sidebar |
| `/research` | `src/pages/research.astro` | Research laboratory catalog: 3 active scientific inquiries & methodology standards | `src/data/research.ts` | Static | Indexable, Canonical URL, Breadcrumbs | Semantic section cards | 3-col / 2-col / 1-col |
| `/research/signal-research` | `src/pages/research/[slug].astro` | Deep-dive inquiry: stationarized feature extraction in financial series | `src/data/research.ts` | Static (`getStaticPaths`) | Indexable, TechArticle Schema | Math callouts, citations | Responsive layout |
| `/research/market-regimes` | `src/pages/research/[slug].astro` | Deep-dive inquiry: unsupervised clustering of market regime transitions | `src/data/research.ts` | Static (`getStaticPaths`) | Indexable, TechArticle Schema | Math callouts, citations | Responsive layout |
| `/research/agentic-systems` | `src/pages/research/[slug].astro` | Deep-dive inquiry: deterministic guardrails for multi-agent LLM systems | `src/data/research.ts` | Static (`getStaticPaths`) | Indexable, TechArticle Schema | Math callouts, citations | Responsive layout |
| `/services` | `src/pages/services.astro` | Collaboration areas: Quantitative Systems, AI Engineering, Full-Stack SaaS | `src/data/opportunities.ts` | Static | Indexable, Canonical URL, Breadcrumbs | High-contrast cards, direct links | 2-col / 1-col |
| `/about` | `src/pages/about.astro` | Technical background, engineering philosophy, toolkit, personal narrative | `src/data/site.ts` | Static | Indexable, ProfilePage Schema | Semantic article blocks | 2-col / 1-col |
| `/contact` | `src/pages/contact.astro` | Direct inbound channel, structured contact form, direct email/social channels | `src/data/contact.ts` | Static | Indexable, ContactPage Schema | Form labels, focus states, honeypot | Responsive form grid |
| `/contact/success` | `src/pages/contact/success.astro` | Inbound confirmation and SLA expectation (24–48h) | Inline static | Static | `noindex, nofollow` | High-contrast confirmation icon | Centered card |
| `/404` | `src/pages/404.astro` | System route recovery page with quick navigation back to core sections | Inline static | Static | `noindex, nofollow` | Clear recovery links | Centered error card |
