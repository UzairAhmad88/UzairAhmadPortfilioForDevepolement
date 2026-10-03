# About 2.0 System — SEO & Schema.org Specification

## 1. Indexing & Canonicals

- **Canonical URL:** `https://uzairahmad.vercel.app/about`
- **Sitemap Priority:** Registered with `priority: 0.9` and `changefreq: monthly`.
- **Indexing Directives:** `index, follow`.

---

## 2. Structured Metadata & Schema.org

### 2.1 Meta Tags
- **Title:** `About Uzair Ahmad — Quantitative AI & Product Engineer | Engineering Identity`
- **Description:** `Engineering identity, intellectual focus, core principles, and technical evolution of Uzair Ahmad across quantitative finance, machine learning, and full-stack systems.`
- **OpenGraph Type:** `profile`
- **Twitter Card:** `summary_large_image`

### 2.2 Schema.org ProfilePage & Person Objects
Generated via `src/lib/seo/jsonld.ts`:
```json
{
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "name": "Uzair Ahmad",
    "jobTitle": "Quantitative AI & Product Engineer",
    "url": "https://uzairahmad.vercel.app",
    "sameAs": [
      "https://github.com/UzairAhmad88",
      "https://www.linkedin.com/in/uzair-ahmad-58007a266/"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Institute of Management Sciences (IMSciences)"
    }
  }
}
```
