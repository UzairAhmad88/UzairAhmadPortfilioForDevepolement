# Contact SEO & Schema Specifications (Phase 22)

## 1. Page Metadata Specification

- **Main Route:** `/contact`
  - **Title Tag:** `Contact Uzair Ahmad — Engineering, Research & Collaboration`
  - **Meta Description:** `Direct communication channels for engineering systems, quantitative AI research collaborations, and technical discussions with Uzair Ahmad.`
  - **Canonical URL:** `https://uzairahmad.vercel.app/contact`
  - **Robots Directive:** `index, follow`
- **Confirmation Route:** `/contact/success`
  - **Title Tag:** `Inquiry Received — Uzair Ahmad`
  - **Robots Directive:** `noindex, nofollow` (prevents indexing confirmation state)

---

## 2. Structured Data (Schema.org)

```json
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Uzair Ahmad",
  "description": "Direct communication channels for technical engineering, quantitative AI research, and architecture discussions.",
  "url": "https://uzairahmad.vercel.app/contact",
  "mainEntity": {
    "@type": "Person",
    "name": "Uzair Ahmad",
    "jobTitle": "Quantitative AI & Product Engineer",
    "email": "imuzairahmad8@gmail.com",
    "url": "https://uzairahmad.vercel.app",
    "sameAs": [
      "https://github.com/UzairAhmad88",
      "https://www.linkedin.com/in/uzair-ahmad-58007a266/"
    ]
  }
}
```
