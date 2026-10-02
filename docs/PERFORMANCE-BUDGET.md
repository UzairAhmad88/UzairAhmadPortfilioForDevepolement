# Performance Budget & Asset Limits

This document establishes hard thresholds for asset weights, bundle sizes, and network requests to prevent performance regression in future development.

## 1. Asset Weight Thresholds

| Metric / Asset | Budget Limit | Current Production Measure | Compliance Status |
|---|---|---|---|
| **Critical JS (Initial Load)** | < 50 kB gzip | ~1.5 kB gzip | PASS |
| **Total JS (incl. 3D Canvas)** | < 150 kB gzip | ~117 kB gzip | PASS |
| **Global CSS Bundle** | < 25 kB gzip | ~4.0 kB gzip | PASS |
| **Total HTML Payload per Route** | < 45 kB | ~12–25 kB | PASS |
| **Third-Party Script Weight** | < 20 kB | 0 kB | PASS |
| **Total Network Requests (Initial)** | < 15 requests | 6–8 requests | PASS |

## 2. Enforcement Guidelines

- Do not introduce heavy client-side UI component libraries (e.g. Material UI, Chakra, Ant Design).
- All image assets must be compressed with modern formats (WebP/SVG) and sized appropriately.
- Defer non-critical scripts and background visual effects using `requestIdleCallback` or static fallbacks.
