# Technical SEO Baseline & Schema Catalog

**Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
**Target Canonical Host:** `https://uzair-ahmad-portfilio-for-devepolem.vercel.app`  

---

## 1. Page SEO Audit Table

| URL Endpoint | Page Title | Meta Description Summary | Canonical URL | Robots Directive | Structured Data Schema | Indexability Status |
|---|---|---|---|---|---|---|
| `/` | Uzair Ahmad — Quantitative AI & Product Engineer | Quantitative research, deep learning trading engines, and modern full-stack systems. | `https://.../` | `index, follow` | `Person`, `WebSite`, `ProfilePage` | **Indexed** |
| `/work` | Work & Systems — Uzair Ahmad \| Engineering Portfolio | Catalog of production web platforms, trading engines, and ML systems. | `https://.../work` | `index, follow` | `BreadcrumbList`, `CollectionPage` | **Indexed** |
| `/work/deep-learning-stock-return-prediction` | Deep Learning Stock Return Prediction — Case Study | End-to-end quantitative research and forecasting pipeline in PyTorch. | `https://.../work/deep-learning-stock-return-prediction` | `index, follow` | `SoftwareSourceCode`, `BreadcrumbList` | **Indexed** |
| `/work/multi-agent-prospect-intelligence` | Multi-Agent Decision Support — Case Study | Multi-agent decision support system for B2B client acquisition workflows. | `https://.../work/multi-agent-prospect-intelligence` | `index, follow` | `SoftwareSourceCode`, `BreadcrumbList` | **Indexed** |
| `/work/curasphere-hms` | CuraSphere HMS — Case Study | Full-stack healthcare clinic and hospital management SaaS platform. | `https://.../work/curasphere-hms` | `index, follow` | `SoftwareApplication`, `BreadcrumbList` | **Indexed** |
| `/work/market-regime-engine` | Market Regime Detection Engine — Case Study | Quantitative market intelligence engine using GMM and HMM clustering. | `https://.../work/market-regime-engine` | `index, follow` | `SoftwareSourceCode`, `BreadcrumbList` | **Indexed** |
| `/work/restaurant-pos` | Restaurant POS & Management System — Case Study | Fast order entry, kitchen ticket dispatching, and inventory deduction. | `https://.../work/restaurant-pos` | `index, follow` | `SoftwareApplication`, `BreadcrumbList` | **Indexed** |
| `/work/hayatabad-gym` | Hayatabad Gym Web Platform — Case Study | Modern fitness web platform with trainer credentials and membership inquiry. | `https://.../work/hayatabad-gym` | `index, follow` | `SoftwareApplication`, `BreadcrumbList` | **Indexed** |
| `/research` | Research Lab & Technical Inquiries — Uzair Ahmad | Hypothesis-driven explorations across quantitative finance and ML systems. | `https://.../research` | `index, follow` | `BreadcrumbList`, `CollectionPage` | **Indexed** |
| `/research/signal-research` | Predictive Feature Extraction — Research Note | Statistical features preserving memory under stationarity constraints. | `https://.../research/signal-research` | `index, follow` | `TechArticle`, `BreadcrumbList` | **Indexed** |
| `/research/market-regimes` | Unsupervised Regime Transition Clustering — Note | Volatility regime partitioning via Gaussian Mixture Models. | `https://.../research/market-regimes` | `index, follow` | `TechArticle`, `BreadcrumbList` | **Indexed** |
| `/research/agentic-systems` | Deterministic Guardrails for Agentic Workflows | Finite state machine execution boundaries for zero-hallucination pipelines. | `https://.../research/agentic-systems` | `index, follow` | `TechArticle`, `BreadcrumbList` | **Indexed** |
| `/services` | Technical Capabilities & Services — Uzair Ahmad | High-impact engineering services: Quant, AI Systems, Full-Stack SaaS. | `https://.../services` | `index, follow` | `BreadcrumbList`, `Service` | **Indexed** |
| `/about` | About — Uzair Ahmad \| Background & Stack | Background, engineering philosophy, and toolkit of Uzair Ahmad. | `https://.../about` | `index, follow` | `ProfilePage`, `BreadcrumbList` | **Indexed** |
| `/contact` | Contact — Start a Conversation \| Uzair Ahmad | Get in touch for high-impact engineering roles and select collaborations. | `https://.../contact` | `index, follow` | `ContactPage`, `BreadcrumbList` | **Indexed** |
| `/contact/success` | Inquiry Received — Uzair Ahmad | Inbound confirmation and SLA expectation. | `https://.../contact/success` | `noindex, nofollow` | None | **Noindex** |
| `/404` | 404: Page Not Found — Uzair Ahmad | System route recovery page. | `https://.../404` | `noindex, nofollow` | None | **Noindex** |

---

## 2. Technical Infrastructure
- **Sitemap:** Automated generation at `/sitemap-index.xml` via `@astrojs/sitemap`.
- **Robots.txt:** Deployed at `/robots.txt` referencing `/sitemap-index.xml`.
- **OpenGraph & Twitter Cards:** Configured with `summary_large_image` and custom branding fallback.
