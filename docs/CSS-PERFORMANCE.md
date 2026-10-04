# CSS Performance & Token Delivery Architecture

## 1. CSS Architecture & Structure
CSS is organized into modular, maintainable stylesheets:
- `src/styles/variables.css`: Design tokens, dual-theme palettes, typography scales, spacing scales, and layout boundaries.
- `src/styles/utilities.css`: Layout containers, flex/grid utilities, elevation tokens, safe-area insets, and buttons.
- `src/styles/motion.css`: Restrained transition tokens, hover micro-interactions, and `@media (prefers-reduced-motion: reduce)`.
- `src/styles/global.css`: Document reset, font definitions, `:focus-visible` contracts, and base HTML elements.

---

## 2. Critical CSS & Render-Blocking Mitigation
- **Scoped Styles:** Astro automatically scopes component `<style>` tags, extracting only the CSS necessary for the current route.
- **No Heavy CSS Frameworks:** Pure vanilla CSS custom properties without Tailwind runtime or bloated utility libraries.
- **Zero Layout Shifts on Theme Switch:** Theme colors are bound to CSS variables (`var(--color-background)`, `var(--color-text-primary)`). Switching `data-theme="light"` updates colors instantaneously without recalculating layout geometry.
