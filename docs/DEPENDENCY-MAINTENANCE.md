# Dependency Maintenance & Upgrade Strategy

This document defines the lifecycle, auditing frequency, and update protocols for project dependencies.

## 1. Dependency Strategy

- **Minimal Surface**: Only 5 runtime dependencies (`astro`, `@astrojs/sitemap`, `@astrojs/check`, `three`, `typescript`).
- **Audit Cadence**: Monthly `npm audit` check during regular release updates.
- **Major Upgrades**: Test in a dedicated local branch with full test suite execution (`npm test && npm run check && npm run build`) before merging to `main`.
