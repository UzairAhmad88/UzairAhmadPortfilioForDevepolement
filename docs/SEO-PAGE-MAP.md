# SEO Page Map & Metadata Architecture

This document defines the complete technical SEO architecture, structured metadata, search intent classification, Open Graph parameters, and Schema.org JSON-LD definitions for all indexable and non-indexable routes.

---

## 1. Global SEO & Site Indexing Directives

- **Primary Canonical Domain**: `https://uzairahmad.dev` (configurable via `SITE.siteUrl`)
- **Robots.txt Policy**: Allow all crawlable routes; disallow internal assets and scratch files.
- **Sitemap Generation**: Automated static generation via `@astrojs/sitemap` to `/sitemap-index.xml` and `/sitemap-0.xml`.
- **OpenGraph Image Strategy**: Dynamic branded 1200x630px social cards with title, category eyebrow, and brand identifier.
- **Index Hygiene**: Single canonical per page; clean self-referencing trailing slash normalization.

---

## 2. Page-by-Page SEO Metadata Matrix

| Route | Primary Search Intent | Target Title Tag | Meta Description | Primary H1 | Index Status | Canonical Target | Schema.org Type |
|---|---|---|---|---|---|---|---|
| `/` | Navigational / Brand Discovery | `Uzair Ahmad — Quantitative AI & Product Engineer` | `Personal portfolio of Uzair Ahmad. Engineering production software, AI systems, and quantitative pipelines at the intersection of finance and technology.` | `Engineering systems where finance, intelligence, and software meet.` | `index, follow` | `https://uzairahmad.dev/` | `WebSite`, `Person` |
| `/about` | Informational / Professional | `About — Uzair Ahmad | Background & Philosophy` | `Explore Uzair Ahmad's background in quantitative machine learning, full-stack product engineering, and core architectural principles.` | `Background, Philosophy & Technical Trajectory` | `index, follow` | `https://uzairahmad.dev/about` | `ProfilePage`, `Person` |
| `/work` | Commercial / Proof Investigation | `Work & Projects — Uzair Ahmad | Systems Catalog` | `Verified portfolio of production web applications, quantitative trading engines, and open-source systems built by Uzair Ahmad.` | `Systems, Products & Engineering Builds` | `index, follow` | `https://uzairahmad.dev/work` | `CollectionPage`, `ItemList` |
| `/work/deep-learning-stock-return-prediction` | Deep Technical Informational | `Stock Return Prediction System — Uzair Ahmad` | `Deep-dive case study on a PyTorch-based quantitative stock return prediction pipeline evaluating multi-horizon predictive structures.` | `Deep Learning Stock Return Prediction` | `index, follow` | `https://uzairahmad.dev/work/deep-learning-stock-return-prediction` | `CreativeWork`, `SoftwareSourceCode` |
| `/work/curasphere-hms` | Product / Full-Stack Informational | `CuraSphere Healthcare System — Uzair Ahmad` | `Case study on CuraSphere HMS, a scalable healthcare management web platform with role-based access control and patient records.` | `CuraSphere Healthcare Management System` | `index, follow` | `https://uzairahmad.dev/work/curasphere-hms` | `SoftwareApplication` |
| `/work/market-regime-engine` | Quant / ML Informational | `Market Regime Detection Engine — Uzair Ahmad` | `Unsupervised machine learning system for detecting latent financial market volatility regimes using Gaussian Mixture Models.` | `Market Regime Detection Engine` | `index, follow` | `https://uzairahmad.dev/work/market-regime-engine` | `SoftwareSourceCode` |
| `/work/restaurant-pos` | Full-Stack Informational | `Restaurant POS & Management — Uzair Ahmad` | `Production point-of-sale and inventory management system designed for high-throughput restaurant operations.` | `Restaurant POS & Management System` | `index, follow` | `https://uzairahmad.dev/work/restaurant-pos` | `SoftwareApplication` |
| `/work/hayatabad-gym` | Web Product Informational | `Hayatabad Gym Web Platform — Uzair Ahmad` | `Responsive web platform for fitness center operations, membership scheduling, and customer engagement.` | `Hayatabad Gym Web Platform` | `index, follow` | `https://uzairahmad.dev/work/hayatabad-gym` | `SoftwareApplication` |
| `/research` | Technical Research / Academic | `Research Lab — Uzair Ahmad | Quantitative AI Inquiries` | `Hypothesis-driven technical inquiries in quantitative finance, time-series prediction, and deterministic agent workflows.` | `Research Lab & Technical Inquiries` | `index, follow` | `https://uzairahmad.dev/research` | `CollectionPage` |
| `/services` | Commercial Investigation | `Services & Consulting — Uzair Ahmad | Technical Collaboration` | `Specialized engineering consulting in full-stack web platforms, AI/ML model integration, and quantitative data pipelines.` | `Technical Collaboration & Consulting` | `index, follow` | `https://uzairahmad.dev/services` | `Service`, `ProfessionalService` |
| `/contact` | Navigational / Conversion | `Contact Uzair Ahmad — Let's Start a Conversation` | `Get in touch with Uzair Ahmad for technical engineering roles, research collaboration, and software consulting.` | `Let's Start a Conversation` | `index, follow` | `https://uzairahmad.dev/contact` | `ContactPage` |
| `/404` | Error Recovery | `404: Page Not Found — Uzair Ahmad` | `The requested page could not be found. Return to Uzair Ahmad's personal portfolio.` | `Page Not Found` | `noindex, follow` | `https://uzairahmad.dev/404` | None |

---

## 3. Schema.org JSON-LD Entity Hierarchy

### A. Person & WebSite Entity (Applied on `/` and `/about`)
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://uzairahmad.dev/#website",
      "url": "https://uzairahmad.dev/",
      "name": "Uzair Ahmad Portfolio",
      "description": "Quantitative AI & Product Engineering Portfolio of Uzair Ahmad",
      "publisher": {
        "@id": "https://uzairahmad.dev/#person"
      }
    },
    {
      "@type": "Person",
      "@id": "https://uzairahmad.dev/#person",
      "name": "Uzair Ahmad",
      "url": "https://uzairahmad.dev/",
      "jobTitle": "Quantitative AI & Product Engineer",
      "knowsAbout": [
        "Quantitative Finance",
        "Machine Learning",
        "Artificial Intelligence",
        "Full-Stack Web Development",
        "TypeScript",
        "Python",
        "PyTorch",
        "Systems Architecture"
      ],
      "sameAs": [
        "https://github.com/UzairAhmad88",
        "https://linkedin.com/in/uzair-ahmad"
      ]
    }
  ]
}
```

### B. SoftwareApplication / CreativeWork Entity (Applied on `/work/[slug]`)
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  "name": "Deep Learning Stock Return Prediction",
  "description": "Multi-horizon quantitative stock return prediction pipeline using PyTorch.",
  "programmingLanguage": ["Python", "PyTorch", "Pandas"],
  "author": {
    "@id": "https://uzairahmad.dev/#person"
  },
  "codeRepository": "https://github.com/UzairAhmad88/Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii"
}
```

### C. BreadcrumbList Schema (Applied on all subpages)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://uzairahmad.dev/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Work",
      "item": "https://uzairahmad.dev/work"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Deep Learning Stock Return Prediction",
      "item": "https://uzairahmad.dev/work/deep-learning-stock-return-prediction"
    }
  ]
}
```

---

## 4. Heading Hierarchy & Content Hygiene Rules

1. **Strict Single `<h1>` Principle**: Every page must have exactly one `<h1>` tag containing the semantic primary topic.
2. **Predictable `<h2>` / `<h3>` Nesting**: Never skip heading levels (e.g. `<h1>` followed by `<h3>`). Subsections inside cards or grids use `<h3>`.
3. **No Decorative Headings**: Visual accents (e.g., `"01"`, `"FEATURED"`) use `<span>` or `<p class="eyebrow">`, not `<h*>`.
4. **Descriptive Image Alt Text**: All diagrams and screenshots must provide functional descriptions (e.g. `alt="Architectural block diagram showing data ingestion pipeline to PyTorch neural model"`), never generic strings like `alt="image"`.
