# Network Performance, Caching & Request Waterfall

## 1. Network Waterfall Optimization

```text
Visitor Requests Route (e.g. /work/curasphere-hms)
  │
  ├─ [1] HTML Document (Edge SSG Response, ~18 KB gzip) -> TTFB < 150ms
  │       └─ Browser parses <head>
  │
  ├─ [2] Preconnect fonts.googleapis.com / fonts.gstatic.com (Parallel TLS Handshake)
  │
  ├─ [3] Scoped CSS Chunks (~8-14 KB) -> Fast non-blocking parse
  │
  ├─ [4] WebFont Files (Loaded asynchronously with font-display: swap)
  │
  └─ [5] Deferred ES Module Scripts (~0.8 - 4 KB, non-blocking)
```

---

## 2. Zero-Runtime External Requests Policy
- **GitHub Intelligence:** Repository metadata, commit counts, and star badges are cached at build time; visitors never make client-side GitHub REST/GraphQL queries.
- **Vercel Intelligence:** Deployment links, framework badges, and status checks are statically baked into the SSG output.
- **Static Discovery Search:** Full search index is embedded in the static page data; zero serverless function roundtrips on keystrokes.

---

## 3. Caching & Edge Headers Strategy
- **Static Assets (`/_astro/*`):** Fingerprinted hashes enable immutable caching (`Cache-Control: public, max-age=31536000, immutable`).
- **HTML Documents:** Short edge cache TTL with automatic purge upon deployment (`s-maxage=0, must-revalidate`).
- **Media & SVGs:** Public asset caching (`Cache-Control: public, max-age=86400`).
