# Responsive System & Viewport Adaptation

## 1. Fluid-First Philosophy

The platform prioritizes fluid scaling using CSS `clamp()` for typography and spacing rather than relying solely on rigid, jarring media query jumps.

---

## 2. Breakpoint Catalog

Defined in `src/styles/variables.css` and `src/styles/utilities.css`:
- **Mobile Compact**: `< 640px` (single-column layout, bottom-sheet navigation, stacked cards).
- **Tablet**: `640px – 1024px` (2-column grids, collapsed sidebar navigation).
- **Desktop**: `1024px – 1440px` (3-column index grids, full multi-lens project navigator).
- **Ultrawide**: `> 1440px` (constrained container width `--container-max: 1280px` to prevent uncomfortable line lengths).

---

## 3. Touch Targets & Safe Areas

- All interactive buttons, navigation links, and tabs enforce a minimum touch target of $44 \times 44\text{px}$ on mobile viewports.
- Layout shells incorporate `env(safe-area-inset-bottom)` and `env(safe-area-inset-top)` for mobile device notches and home indicator bars.
