# How I Build Visual Specification & UI Ergonomics

## 1. Visual Aesthetics & Design System
The visual style of the **How I Build** page (`/how-i-build`) and preview components strictly adheres to the editorial/technical design language established in Phase 02:

- **Background Palette:** Primary dark obsidian `#07110f`, elevated container slate `#101a17`, border delineation `rgba(246, 241, 232, 0.08)`.
- **Accent & Indicators:** Technical teal `#7ed8c4` with translucent tinted badges (`rgba(126, 216, 196, 0.08)` to `0.18`), warning gold `#e09f67` for trade-off notes.
- **Typography:**
  - Headings: Inter/system font with `-0.02em` tracking, bold weights (`700`–`900`).
  - Numbers & Badges: JetBrains Mono / monospace for numeric zero-padded stage indicators (`01`, `02`, `03`).
  - Body: Readable serif/sans with high contrast (`#f6f1e8` ink, `#a9b8b1` muted).

---

## 2. Layout & Responsive Behavior

### Desktop (>= 960px):
- Hero with horizontal quick-nav lifecycle bar.
- Step cards with dual-column subgrids (Questions I Ask vs. Practices & Artifacts).
- 2-column grid for Nonlinear Domain Flows, Engineering Decisions, and Core Principles.

### Mobile & Compact Screens (< 960px):
- Single-column flow with touch-optimized vertical stacks.
- Interactive stepper tabs adjust to 2 or 3 columns with minimum 44px touch targets.
- Horizontal connectors collapse gracefully without text truncation.
- Zero horizontal scrolling or viewport overflow.

---

## 3. Accessibility & Performance
- Full keyboard navigation and tab order across stepper buttons and links.
- ARIA attributes: `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`, `aria-controls`, `aria-labelledby`.
- High contrast ratios exceeding WCAG AA standards (teal on dark slate > 7:1).
- Minimal JavaScript footprint (plain DOM event listeners with `astro:after-swap` lifecycle support).
