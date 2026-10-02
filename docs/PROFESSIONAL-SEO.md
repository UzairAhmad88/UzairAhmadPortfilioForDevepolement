# Professional SEO Architecture

This document defines search engine metadata, canonical routing, and structured data schemas for professional service and contact pages.

## 1. Professional Page SEO Metadata

| Page Route | Page Title | Target Description | Canonical URL |
|---|---|---|---|
| `/contact` | `Contact Uzair Ahmad — Engineering, Research & Collaboration` | Direct communication channels for engineering roles, technical consulting, and quantitative AI research inquiries. | `https://uzairahmad.vercel.app/contact` |
| `/services` | `Engineering Capabilities & Technical Collaboration — Uzair Ahmad` | Specialized engineering consulting across full-stack web platforms, AI/ML model integration, and quantitative data architectures. | `https://uzairahmad.vercel.app/services` |
| `/contact/success` | `Inquiry Received — Uzair Ahmad` | Confirmation of your submitted inquiry. Discover further case studies and research inquiries. | `https://uzairahmad.vercel.app/contact/success` (noindex) |

## 2. Structured Data (Schema.org)

### ContactPage JSON-LD on `/contact`:
```json
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Uzair Ahmad",
  "description": "Communication channels for technical roles, consulting, and quantitative AI research.",
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
