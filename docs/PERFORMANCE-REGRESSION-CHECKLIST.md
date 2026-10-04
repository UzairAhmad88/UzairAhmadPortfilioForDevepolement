# Performance Regression Prevention Checklist

## 1. Continuous Performance Verification Protocol
Before merging any future features or content updates, run the following automated and manual checks:

### Automated Pre-Flight Checks:
- [ ] **Run Unit Tests:** `npm test` (Enforces 214+ assertions across all subsystems and performance budgets).
- [ ] **Run Astro Diagnostics:** `npm run check` (Verifies 0 errors, 0 warnings across all `.astro` and `.ts` files).
- [ ] **Run Production Build:** `npm run build` (Ensures 60 static HTML routes compile in under 5.0 seconds).
- [ ] **Inspect Generated Chunks:** Verify total client JavaScript in `dist/_astro` remains under **50 KB**.

---

## 2. Code Review Checklist for Engineers
1. **Third-Party Scripts:** Never add external scripts (e.g. analytics, chatbots, social widgets) to `BaseLayout.astro` without explicit architectural justification.
2. **Font Imports:** Never import unused font weights. Always include `&display=swap`.
3. **Client-Side Libraries:** Avoid introducing client UI frameworks (React, Vue, etc.) for components that can be static HTML or simple vanilla ES modules.
4. **Data Fetching:** Fetch and process all API payloads (GitHub, Vercel, external data) during build time, never in runtime client `<script>` tags.
5. **Layout Shifts:** Always declare dimensions or `aspect-ratio` on diagrams, SVGs, and card media.
