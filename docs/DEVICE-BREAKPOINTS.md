# Device Breakpoints & Space-Adaptive System

This document explains the device adaptation rationale and content-driven breakpoint hierarchy implemented across the codebase.

---

## 1. Design Philosophy: Space-Driven Rather Than Device-Driven

Rather than targeting specific hardware device labels (e.g. "iPhone 14" or "MacBook Air"), our system responds to **available pixel real estate**:

- **Fluid Typography and Spacing**: Scales proportionally using CSS `clamp()`.
- **CSS Grid Auto-Fit Tracks**: Grids collapse naturally based on `minmax()` thresholds rather than strict media queries where possible.
- **Strategic Structural Breakpoints**: Invoked only when component information density requires structural reconfiguration (such as collapsing a 4-item horizontal nav or converting a 2-column sidebar layout into stacked sections).

---

## 2. Breakpoint Directory & Implementation Reference

```css
/* ==========================================================================
   Breakpoints Reference Map
   ========================================================================== */

/* 1. Mobile Compact (< 480px) */
@media (max-width: 480px) {
  /* Forms stack into single column */
  /* Buttons become full width */
  /* Card action buttons wrap vertically */
}

/* 2. Mobile Standard (< 640px) */
@media (max-width: 640px) {
  /* Project & capability grids collapse to 1 column */
  /* Process steps timeline collapse to 1 column */
  /* Tech orbital badges compress into compact radius */
}

/* 3. Tablet Portrait / Navigation Collapse (< 820px) */
@media (max-width: 820px) {
  /* Desktop navigation menu hides */
  /* Mobile drawer trigger button displays (44x44px touch target) */
  /* Header brand title switches to compact display */
}

/* 4. Tablet Landscape / Sidebar Stacking (< 1024px) */
@media (max-width: 1024px) {
  /* 3-column project grids collapse to 2 columns */
  /* Sticky two-column article sidebars stack statically above content */
  /* Capability grid collapses to 1 column */
  /* Process steps grid collapses to 2 columns */
}

/* 5. Desktop Baseline (1025px - 1440px) */
/* Full multi-column grids, sticky sidebars, hover interactions */

/* 6. Ultrawide & 4K Displays (> 1440px) */
/* Content bounded within --container-max: 1200px centered in viewport */
```

---

## 3. High-DPI & Retina Displays

- All icons and system diagrams are implemented in vector SVG format or responsive CSS, guaranteeing sub-pixel clarity at 2x and 3x device pixel ratios without overhead.
- Typography is rendered with `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;` ensuring clean legibility across macOS Retina, iOS, and Windows ClearType.
