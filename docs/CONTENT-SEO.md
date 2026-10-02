# Content SEO Architecture

This document defines the search engine optimization (SEO) strategy, structured data implementations, and indexation policies for technical content and research inquiries.

## 1. Indexation Policy

| Content Type | Indexation Status | Rationale |
|---|---|---|
| **Research Inquiries** (`/research/[slug]`) | `index, follow` | Primary intellectual proof. Contains rich technical analysis, math, and empirical findings. |
| **Project Case Studies** (`/projects/[slug]`) | `index, follow` | Core commercial proof of engineering and systems capabilities. |
| **Technical Hubs** (`/research`, `/projects`) | `index, follow` | Primary navigational category landing pages. |
| **Draft Content** (`status: 'draft'`) | `noindex, nofollow` | Staged content excluded from static generation and sitemap until publication. |
| **Empty Taxonomy Tags** | `noindex, follow` | Prevents thin content indexing penalties until sufficient articles exist. |

## 2. Structured Data Schema

### Research Articles (`ScholarlyArticle` / `TechArticle`)
```json
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Predictive Feature Extraction & Stationarity in Non-Stationary Financial Series",
  "description": "Empirical comparison of fractional differencing vs. standard returns for preserving long-memory signals while passing stationarity tests.",
  "author": {
    "@type": "Person",
    "name": "Uzair Ahmad",
    "url": "https://uzairahmad.dev"
  },
  "datePublished": "2026-03-01",
  "dateModified": "2026-03-15",
  "keywords": ["Quantitative Finance", "Time Series", "Stationarity", "Fractional Differentiation"]
}
```

## 3. On-Page SEO Best Practices

1. **Title Format**: `<Specific Technical Topic>: <Core Insight or Method> | Uzair Ahmad` (e.g. `Fractional Differentiation in Non-Stationary Financial Series | Research Lab`).
2. **Meta Description**: 130–155 characters summarizing the hypothesis, method, and empirical takeaway.
3. **Semantic Hierarchy**: Exactly one `<h1>` per page, followed by logical `<h2>` (Hypothesis, Method, Results) and `<h3>` (Formulations, Sub-metrics) without skipping levels.
4. **Internal Link Equity**: Contextual anchor text (e.g., "See the full implementation in the [Deep Learning Stock Return Prediction case study](/projects/deep-learning-stock-return-prediction)") rather than generic "click here" links.
