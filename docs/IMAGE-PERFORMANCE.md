# Image & Media Performance Architecture

## 1. Media Asset Inventory & Policy
The platform prioritizes editorial typography, code contracts, structured system topologies, and mathematical formulations over heavy image files.

| Image / Asset | Format | Resolution | File Size | Loading Strategy | Purpose |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `default-og.png` | PNG | 1200x630 | 680 KB | External / OpenGraph | Social media preview card (never loaded on-page) |
| `favicon.svg` | SVG | Vector | 280 B | Inline / Icon | High-resolution crisp browser favicon |

---

## 2. Layout Shift Prevention (CLS Invariants)
To eliminate Cumulative Layout Shift (CLS = 0.00):
1. **Explicit Aspect Ratios:** All diagram containers, card slots, and avatar wrappers reserve explicit `aspect-ratio` or `min-height` in CSS.
2. **SVG ViewBox Discipline:** All inline SVG icons and technical diagram illustrations define strict `viewBox` attributes and CSS dimensions (`width: 1.25rem; height: 1.25rem;`).
3. **No Dynamic Image Insertion:** No asynchronous client-side scripts insert images above-the-fold after page rendering.

---

## 3. Responsive Media & Embed Rules
- Decorative backgrounds use lightweight CSS radial gradients and SVG patterns instead of heavy raster images.
- Technical diagrams are rendered via vector SVGs that scale infinitely at zero additional bandwidth cost.
