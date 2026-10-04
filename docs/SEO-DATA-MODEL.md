# SEO Data Model & Metadata Contract

## 1. Centralized TypeScript Definition (`src/types/seo.ts`)

```typescript
export interface OpenGraphMetadata {
  title?: string;
  description?: string;
  type?: 'website' | 'article' | 'profile';
  image?: string;
  imageAlt?: string;
  url?: string;
}

export interface TwitterMetadata {
  card?: 'summary' | 'summary_large_image';
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
}

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  og?: OpenGraphMetadata;
  twitter?: TwitterMetadata;
  noindex?: boolean;
  nofollow?: boolean;
  schema?: Record<string, any> | Record<string, any>[];
}
```

---

## 2. Metadata Builder Contract (`buildMetadata`)
Defined in [`src/lib/seo/metadata.ts`](file:///d:/web/protfolio/src/lib/seo/metadata.ts):
- **Title Fallback:** If `props.title` is provided, generates `${props.title} | ${siteConfig.name}`. Otherwise uses `siteConfig.title`.
- **Description Fallback:** Uses `props.description` or defaults to `siteConfig.description`.
- **Canonical Calculation:** Normalizes `Astro.url.pathname` via `getCanonicalUrl(pathname)`.
- **OG & Twitter Normalization:** Automatically synchronizes social titles, descriptions, and images with page properties unless explicitly overridden.
