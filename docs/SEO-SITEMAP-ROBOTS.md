# Sitemap & Robots.txt Protocol

## 1. `public/robots.txt` Specification

```text
User-agent: *
Allow: /

# Sitemap location
Sitemap: https://uzairahmad.vercel.app/sitemap-index.xml
Sitemap: https://uzairahmad.vercel.app/sitemap-0.xml
```

---

## 2. Sitemap Generation via `@astrojs/sitemap`
- **Output Files:**
  - `dist/sitemap-index.xml` (Root sitemap pointer)
  - `dist/sitemap-0.xml` (58 verified canonical indexable URLs)
- **Included URLs:** All public projects, research inquiries, engineering notes, lab experiments, technologies, timeline, archive, about, and contact pages.
- **Excluded URLs:**
  - `/404` (Error route)
  - `/contact/success` (Transient state)
