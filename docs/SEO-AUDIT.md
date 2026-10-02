# Technical SEO Audit & Route Inventory

This document provides a route-by-route audit of every URL in the portfolio, documenting indexability status, canonical URLs, semantic headings, metadata, structured data schemas, and search intents.

## 1. Route-by-Route SEO Audit Matrix

| URL Path | Type | Indexability | Canonical URL | Primary H1 | Structured Data | Primary Search Intent | Status |
|---|---|---|---|---|---|---|---|
| `/` | Landing / Hub | `index, follow` | `https://uzairahmad.vercel.app` | "Uzair Ahmad — Quantitative AI & Product Engineer" | `WebSite`, `Person` | Brand / Professional Overview | INDEX |
| `/about` | Profile | `index, follow` | `https://uzairahmad.vercel.app/about` | "About Uzair Ahmad" | `ProfilePage`, `Person` | Author Identity & Background | INDEX |
| `/work` | Directory | `index, follow` | `https://uzairahmad.vercel.app/work` | "Selected Engineering Work & Systems" | `BreadcrumbList` | Engineering Proof & Codebases | INDEX |
| `/work/deep-learning-stock-return-prediction` | Case Study | `index, follow` | `https://uzairahmad.vercel.app/work/deep-learning-stock-return-prediction` | "Deep Learning-Based Stock Return Prediction" | `SoftwareApplication`, `BreadcrumbList` | Financial ML / Return Modeling | INDEX |
| `/work/multi-agent-prospect-intelligence` | Case Study | `index, follow` | `https://uzairahmad.vercel.app/work/multi-agent-prospect-intelligence` | "Multi-Agent Prospect Intelligence System" | `SoftwareApplication`, `BreadcrumbList` | Multi-Agent LLM Architecture | INDEX |
| `/work/curasphere-hms` | Case Study | `index, follow` | `https://uzairahmad.vercel.app/work/curasphere-hms` | "CuraSphere Hospital Management System" | `SoftwareApplication`, `BreadcrumbList` | Healthcare SaaS / Full-Stack | INDEX |
| `/work/market-regime-engine` | Case Study | `index, follow` | `https://uzairahmad.vercel.app/work/market-regime-engine` | "Market Regime Engine" | `SoftwareApplication`, `BreadcrumbList` | Latent Volatility Clustering | INDEX |
| `/work/restaurant-pos` | Case Study | `index, follow` | `https://uzairahmad.vercel.app/work/restaurant-pos` | "Enterprise Restaurant POS System" | `SoftwareApplication`, `BreadcrumbList` | Real-time POS / State Engine | INDEX |
| `/work/hayatabad-gym` | Case Study | `index, follow` | `https://uzairahmad.vercel.app/work/hayatabad-gym` | "Hayatabad Fitness Club Management System" | `SoftwareApplication`, `BreadcrumbList` | Member Management / Billing | INDEX |
| `/research` | Directory | `index, follow` | `https://uzairahmad.vercel.app/research` | "Research Lab & Technical Inquiries" | `BreadcrumbList` | Mathematical / ML Research | INDEX |
| `/research/signal-research` | Research | `index, follow` | `https://uzairahmad.vercel.app/research/signal-research` | "Predictive Feature Extraction & Stationarity in Non-Stationary Financial Series" | `TechArticle`, `BreadcrumbList` | Fractional Differencing / Math | INDEX |
| `/research/market-regimes` | Research | `index, follow` | `https://uzairahmad.vercel.app/research/market-regimes` | "Unsupervised Market Regime Detection via Latent Volatility Clustering" | `TechArticle`, `BreadcrumbList` | GMM / HMM Regime Switching | INDEX |
| `/research/agentic-systems` | Research | `index, follow` | `https://uzairahmad.vercel.app/research/agentic-systems` | "Deterministic Guardrails & State Graphs for Multi-Agent LLM Workflows" | `TechArticle`, `BreadcrumbList` | LangGraph State Graphs / Agents | INDEX |
| `/services` | Capabilities | `index, follow` | `https://uzairahmad.vercel.app/services` | "Engineering Consulting & Collaboration" | `BreadcrumbList` | Technical Collaboration & Offerings | INDEX |
| `/contact` | Intake | `index, follow` | `https://uzairahmad.vercel.app/contact` | "Start a Technical Conversation" | `ContactPage` | Direct Outreach & Lead Intake | INDEX |
| `/contact/success` | Confirmation | `noindex, nofollow` | `https://uzairahmad.vercel.app/contact/success` | "Message Received" | None | Form Completion State | NOINDEX |
| `/404` | Utility | `noindex, nofollow` | `https://uzairahmad.vercel.app/404` | "Page Not Found" | None | Error Handling | NOINDEX |

## 2. Duplicate Risk & Canonical Hygiene

- **Trailing Slashes**: Unified via `getCanonicalUrl()` helper stripping trailing slashes.
- **Protocol**: Enforced HTTPS across all metadata and sitemaps.
- **Query Strings**: Ignored in canonicals (`/contact?type=project` canonicalizes cleanly to `https://uzairahmad.vercel.app/contact`).
