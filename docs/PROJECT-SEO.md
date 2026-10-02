# Project SEO & Structured Data Architecture

This document specifies the metadata architecture, Schema.org JSON-LD generation, OpenGraph social card templates, and indexing policies for all project pages.

---

## 1. Structured Data JSON-LD Generation

Every project detail page automatically generates a valid Schema.org entity depending on its primary classification:

### A. For Research & System Projects (`SoftwareSourceCode`)
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  "name": "Deep Learning Stock Return Prediction",
  "description": "Multi-horizon quantitative trading and return forecasting pipeline built in PyTorch.",
  "applicationCategory": "Quantitative Finance",
  "programmingLanguage": ["Python", "PyTorch", "Pandas", "NumPy"],
  "author": {
    "@type": "Person",
    "name": "Uzair Ahmad",
    "url": "https://uzairahmad.dev"
  },
  "codeRepository": "https://github.com/UzairAhmad88/Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii"
}
```

### B. For Production Applications & SaaS (`SoftwareApplication`)
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "CuraSphere HMS",
  "description": "Modern, responsive Healthcare Management System with role-based access control.",
  "applicationCategory": "Full-Stack Engineering",
  "operatingSystem": "Web",
  "author": {
    "@type": "Person",
    "name": "Uzair Ahmad"
  }
}
```

---

## 2. Dynamic Social Meta Tag Strategy

For every project route `/work/[slug]`:
- `og:title`: `${project.title} — Uzair Ahmad | Technical Case Study`
- `og:description`: `${project.problem}`
- `og:type`: `article`
- `twitter:card`: `summary_large_image`
- `canonical`: `https://uzairahmad.dev/work/${project.slug}`
