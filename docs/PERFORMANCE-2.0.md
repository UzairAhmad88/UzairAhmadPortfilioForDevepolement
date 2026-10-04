# Performance 2.0 Specification & Engineering Philosophy

## 1. Primary Objective
Performance 2.0 treats speed, efficiency, and layout stability as fundamental engineering features rather than a cosmetic score-chasing exercise. The platform delivers instant editorial readability, zero-FOUC theme switching, tiny client JavaScript payloads, and predictable hydration budgets across all device form factors.

---

## 2. Performance Philosophy: Performance by Default
The platform follows an 8-question elimination hierarchy before executing any client or runtime work:
1. **Does this work need to happen?** (Eliminate redundant DOM nodes, unneeded polyfills, and fake metrics).
2. **Does it need to happen immediately?** (Defer non-critical micro-interactions and secondary previews).
3. **Does it need to happen on the client?** (Render all HTML, metadata, and data hierarchies at build-time via SSG).
4. **Does it need to happen for every visitor?** (Bail out of heavy calculations for touch/reduced-motion devices).
5. **Can it happen at build time?** (Precompute relationships, search index structures, and schema graphs).
6. **Can it happen on the server/edge?** (Static asset caching, immutable build bundles).
7. **Can it be deferred?** (Load secondary views only upon user activation).
8. **Can it be removed?** (Zero third-party analytics trackers, zero heavy UI frameworks).

---

## 3. Performance Budget & Core Targets

| Target Metric | Accepted Standard | Platform Measured / Budget | Target Category |
| :--- | :--- | :--- | :--- |
| **LCP (Largest Contentful Paint)** | ≤ 2.5s | **~0.8s - 1.2s** (Lab) | **Good (Green)** |
| **INP (Interaction to Next Paint)** | ≤ 200ms | **< 50ms** | **Good (Green)** |
| **CLS (Cumulative Layout Shift)** | ≤ 0.10 | **0.00** | **Good (Green)** |
| **FCP (First Contentful Paint)** | ≤ 1.8s | **~0.6s - 0.9s** | **Good (Green)** |
| **TTFB (Time to First Byte)** | ≤ 800ms | **< 150ms** (Vercel Edge SSG) | **Good (Green)** |
| **Total Client JS Bundle** | ≤ 100 KB | **16.34 KB raw (7.15 KB gzip)** | **Exceeds Budget** |
| **Total Route CSS** | ≤ 50 KB | **~14 KB - 38 KB (Scoped)** | **Within Budget** |
| **Third-Party Trackers** | 0 trackers | **0.0 KB (Zero scripts)** | **Strict Zero Policy** |
