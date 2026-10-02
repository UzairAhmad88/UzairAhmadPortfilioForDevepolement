# Structured Data (Schema.org) Technical Specification

This document specifies the JSON-LD schemas implemented across the portfolio, ensuring compliance with Schema.org standards and Google Rich Results guidelines.

## 1. Implemented Schema Typology

```
Schema.org Architecture (src/lib/seo/schema/)
├── person.ts             ──► @type: Person (knowsAbout, sameAs, jobTitle)
├── website.ts            ──► @type: WebSite (author, inLanguage)
├── profile.ts            ──► @type: ProfilePage (mainEntity: Person)
├── breadcrumb.ts         ──► @type: BreadcrumbList (ListItem positions)
├── research.ts           ──► @type: TechArticle / ScholarlyArticle (headline, methodology, citation)
└── project.ts            ──► @type: SoftwareApplication (applicationCategory, codeRepository)
```

## 2. Examples

### BreadcrumbList Schema Example:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://uzairahmad.vercel.app"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Research",
      "item": "https://uzairahmad.vercel.app/research"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Predictive Feature Extraction",
      "item": "https://uzairahmad.vercel.app/research/signal-research"
    }
  ]
}
```

### SoftwareApplication Schema Example:
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Deep Learning-Based Stock Return Prediction",
  "description": "Quantitative forecasting pipeline utilizing PyTorch neural networks.",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Cross-platform",
  "author": {
    "@type": "Person",
    "name": "Uzair Ahmad",
    "url": "https://uzairahmad.vercel.app"
  },
  "url": "https://uzairahmad.vercel.app/work/deep-learning-stock-return-prediction",
  "codeRepository": "https://github.com/UzairAhmad88/Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii"
}
```
