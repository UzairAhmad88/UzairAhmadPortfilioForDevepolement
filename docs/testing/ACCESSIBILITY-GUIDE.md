# Accessibility (a11y) Guide & Verification

## 1. Compliance Standard

The platform is engineered to meet **WCAG 2.1 AA** accessibility requirements across all 60 static pages.

---

## 2. Core Accessibility Invariants

1. **Semantic Landmark Structure**: Every page uses `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, and `<footer>`.
2. **Keyboard Navigation & Focus States**: All interactive elements (links, buttons, filter chips, lens tabs) expose high-contrast `:focus-visible` rings with `--border-focus: var(--color-mint)`.
3. **Screen Reader Context**: Icon-only buttons include `aria-label`. Visual state graphs and diagrams include comprehensive `textAlternative` descriptions.
4. **Color Contrast**: All text tokens achieve $\ge 4.5:1$ contrast against their respective surface backgrounds in both Dark and Light themes.
5. **Reduced Motion**: Respects `prefers-reduced-motion` preferences by setting animation and transition durations to $0.01\text{ms}$.
