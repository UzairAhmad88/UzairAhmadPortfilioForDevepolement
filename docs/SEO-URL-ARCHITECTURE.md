# SEO URL Architecture & Canonical Enforcement

## 1. URL Formatting Standards
All platform routes adhere to strict architectural rules:
- **Lowercase Only:** All path segments are strictly lowercase (e.g. `/work/market-regime-engine`, never `/work/Market-Regime-Engine`).
- **Hyphen Separators:** Multi-word slugs use single dashes (`-`), never underscores (`_`) or `%20` encoded spaces.
- **No Trailing Slashes:** Canonical URLs strip trailing slashes (e.g. `https://uzairahmad.vercel.app/work`, never `https://uzairahmad.vercel.app/work/`).
- **Semantic Hierarchy:**
  - Projects: `/work/[slug]`
  - Research: `/research/[slug]`
  - Notes: `/notes/[slug]`
  - Lab Experiments: `/lab/[slug]`
  - Technologies: `/technology/[slug]`

---

## 2. Query Parameter & Filter Strategy
Interactive state changes on `/discover` or `/timeline` (e.g. `?q=python&type=project`) are handled via client-side state without altering the canonical URL.
- **Canonical Definition:** `https://uzairahmad.vercel.app/discover`
- **Result:** Search engines index the primary static content index without generating thousands of thin duplicate parameter permutations.
