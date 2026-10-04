# Production Bundle Audit & Dependency Breakdown

## 1. Package Dependency Inventory

| Package Name | Version | Scope / Category | Justification / Usage |
| :--- | :--- | :--- | :--- |
| `astro` | `^4.16.18` | Core Framework | Static site generator, route compilation, HTML serialization |
| `@astrojs/check` | `^0.9.4` | Build Diagnostics | Static type-checking across Astro frontmatter & templates |
| `@astrojs/sitemap` | `^3.1.6` | SEO Engine | Automated `sitemap-index.xml` & `sitemap-0.xml` generation |
| `typescript` | `^5.7.3` | Core Tooling | Type definitions, interface integrity, compiler checking |
| `three` | `^0.160.0` | Optional WebGL | Optional interactive 3D Knowledge Graph rendering |

---

## 2. Chunk Optimization & Tree-Shaking Discipline
- **Zero Client Framework Runtime:** The site uses zero React/Vue/Svelte client hydration runtimes. All HTML is rendered to pure, immutable static markup at build-time.
- **Tree-Shaken Astro Components:** Client `<script>` blocks in Astro components are bundled as lightweight ES modules without polyfills or large runtime abstractions.
- **Top 5 Largest Code Modules:**
  1. Discovery client filter index: ~3.94 KB raw (1.71 KB gzip)
  2. Timeline dynamic sorting & query parser: ~2.78 KB raw (1.11 KB gzip)
  3. Knowledge Graph SVG renderer: ~2.75 KB raw (1.30 KB gzip)
  4. Theme state synchronizer: ~1.62 KB raw (0.58 KB gzip)
  5. Inquiry form validation & error announcer: ~1.21 KB raw (0.58 KB gzip)

---

## 3. Duplication & Code Smells Analysis
- **Duplicated Modules:** **0 duplicates found**.
- **Unused Dependencies:** Zero unused runtime dependencies.
- **Client/Server Boundary Audit:** 100% of data fetching, relationship building, GitHub synchronization caching, and Vercel normalizations happen at build-time in Node.js.
