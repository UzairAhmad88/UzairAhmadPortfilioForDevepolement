# Responsive Design System: Fluid Architecture & Tokens

This document specifies the responsive tokens, fluid mathematics, container rules, and component constraints for Uzair Ahmad's portfolio.

---

## 1. Core Principles

1. **Fluid First, Breakpoint Second**: Design adapts continuously between viewports using CSS `clamp()`, `min()`, `max()`, and percentage dimensions rather than jumping only at arbitrary breakpoints.
2. **Controlled Max Measures**: Text line length is constrained to 65–75 characters (`max-width: 680px` to `750px`) preventing unreadable ultra-wide paragraphs.
3. **Safe-Area Inset Awareness**: All fixed and floating elements account for hardware notches and gesture bars via `env(safe-area-inset-*)`.
4. **WCAG 2.1 AA Touch Standard**: All interactive touch targets satisfy the minimum bounding box of **44 × 44px**.

---

## 2. Responsive Token Architecture

### 2.1 Fluid Typography Tokens (`variables.css`)
```css
:root {
  /* Fluid Typography Scale (320px viewport -> 1440px viewport) */
  --font-size-display: clamp(2.5rem, 6vw, 4.25rem);
  --font-size-h1: clamp(2.1rem, 4.5vw, 3.25rem);
  --font-size-h2: clamp(1.65rem, 3.2vw, 2.25rem);
  --font-size-h3: clamp(1.25rem, 2.2vw, 1.65rem);
  --font-size-h4: clamp(1.05rem, 1.5vw, 1.25rem);
  --font-size-lead: clamp(1.05rem, 1.3vw, 1.25rem);
  --font-size-body: clamp(0.95rem, 1vw, 1.05rem);
  --font-size-small: clamp(0.8rem, 0.9vw, 0.875rem);
}
```

### 2.2 Fluid Spacing Tokens
```css
:root {
  /* Fluid Spacing Scale */
  --space-section: clamp(3.5rem, 7vw, 6.5rem);
  --space-card: clamp(1.25rem, 2.5vw, 2.25rem);
  --space-gutter: clamp(1rem, 3vw, 2rem);
  --touch-target-min: 44px;
}
```

### 2.3 Container System Tokens
```css
:root {
  /* Container Constraints */
  --container-max: 1200px;
  --container-narrow: 840px;
  --container-wide: 1400px;
  --container-padding: clamp(1rem, 3vw, 2rem);
}
```

---

## 3. Content-Driven Breakpoint Matrix

Rather than device-specific hacks, breakpoints trigger based on component content density:

| Breakpoint Name | Threshold | Trigger Criteria | Layout Adaptation |
| :--- | :--- | :--- | :--- |
| **Mobile Compact** | `< 480px` | Single-column form inputs, full-width CTA buttons | Vertical action stacks, compact orbital badges |
| **Mobile Standard** | `< 640px` | 2-column project grids collapse to 1 column | Single-column project & capability cards |
| **Tablet Portrait** | `< 820px` | Desktop horizontal navigation bar overflows brand | Header collapses to animated full-height drawer |
| **Tablet Landscape** | `< 1024px` | 3-column grids squish; sticky sidebars compress body text | Grids collapse to 2 columns; sidebars stack statically |
| **Desktop Baseline**| `1200px – 1440px` | Standard full desktop experience | 3-column grids, sticky sidebars, hover animations |
| **Ultrawide & 4K** | `> 1920px` | Monitor width creates excessive whitespace | Centered container (`1200px`), balanced margins |

---

## 4. Universal Responsive Component Guidelines

### 4.1 Cards (`ProjectCard`, `FeaturedProjectCard`, `CapabilityCard`)
- Use `display: flex; flex-direction: column; justify-content: space-between` to ensure equal height in grid tracks.
- Card actions and badge rows must use `flex-wrap: wrap; gap: 0.5rem;` to prevent text truncation or horizontal overflow.
- Interactive card surfaces provide instant active touch feedback (`:active { transform: scale(0.99); }`) for mobile users.

### 4.2 Code & Technical Data Displays
- Global rule: `pre, code, .table-container { overflow-x: auto; -webkit-overflow-scrolling: touch; max-width: 100%; }`.
- Technical equations and code blocks wrap within responsive shells with custom subtle scrollbars that do not expand parent containers.

### 4.3 Navigation & Header
- Header sticks cleanly to top with backdrop blur (`backdrop-filter: blur(12px)`).
- Drawer uses focus trap, closes on `Escape` key, closes on route navigation, and locks `document.body` scroll when active.
