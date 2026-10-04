# Accessibility 2.0 Specification & Core Architecture

## 1. Primary Objective & Target Standard
The platform adheres to a rigorous **WCAG 2.2 Level AA** standard across all routes, interactive systems, data visualizations, and editorial surfaces. Accessibility is treated as an intrinsic engineering requirement, not an afterthought or cosmetic overlay.

### Target Personas Supported
- **Keyboard-only users:** Complete navigation across all menus, lenses, discovery filters, timeline buckets, and forms without pointer devices.
- **Screen reader users:** Semantic document structure, programmatic landmark names, accessible interactive widget states, and comprehensive text equivalents for complex diagrams.
- **Low-vision & high-zoom users:** Tested up to 200% zoom and 400% reflow without horizontal page clipping or obscured elements.
- **Color-vision divergent users:** Multi-channel status indicators combining non-color glyphs, textual labels, and high-contrast dual-theme tokens.
- **Motor/touch-constrained users:** Strict compliance with `--touch-target-min: 44px` across all interactive targets and buttons.
- **Motion-sensitive users:** Universal `@media (prefers-reduced-motion: reduce)` disabling non-essential transitions and animations.

---

## 2. Accessibility Engineering Philosophy
The platform strictly enforces the 4-tier hierarchy:
```text
1. Semantic HTML First   (<main>, <nav>, <header>, <footer>, <button>, <a href>)
2. ARIA Second           (aria-expanded, aria-controls, aria-describedby for true dynamic states)
3. CSS Third             (:focus-visible, clamp typography, touch target padding, reduced motion)
4. JavaScript Last       (keyboard trapping in modals, Escape key handlers, roving tabindex)
```

No fake clickable `<div>` or `<span>` elements are used for links or buttons.

---

## 3. Four Core Principles (WCAG 2.2 AA)

### Principle 1: Perceivable
- **Text Alternatives (1.1.1):** All informative images and interactive SVGs provide meaningful text alternatives. Purely decorative icons are hidden with `aria-hidden="true"`.
- **Adaptable (1.3.1, 1.3.2):** Valid semantic hierarchy and natural DOM reading order matching visual layouts.
- **Distinguishable (1.4.3, 1.4.11):** 16.5:1 text contrast in Dark Slate and 15.8:1 text contrast in Light Editorial modes. UI components and state boundaries maintain ≥ 3:1 contrast against backgrounds.

### Principle 2: Operable
- **Keyboard Accessible (2.1.1, 2.1.2):** Every control is operable via standard Tab, Shift+Tab, Enter, Space, and Escape. No keyboard traps exist.
- **Enough Time (2.2.1):** No expiring timers or forced auto-advancing carousels.
- **Navigable (2.4.1, 2.4.7):** Skip-to-main-content link available on first Tab press; high-contrast `:focus-visible` offset ring across all elements.

### Principle 3: Understandable
- **Readable (3.1.1):** Explicit `<html lang="en">` declaration.
- **Predictable (3.2.1, 3.2.2):** Focus changes never trigger unexpected context switches or automatic form submissions.
- **Input Assistance (3.3.1, 3.3.2):** Explicit `<label for="...">` associations, live validation messages linked with `aria-describedby`, and inline error summaries.

### Principle 4: Robust
- **Compatible (4.1.2, 4.1.3):** Correct role, state, and property usage verified across static HTML generation (SSG) and modern assistive technologies.
