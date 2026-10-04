# Motion System & Reduced-Motion Accessibility

## 1. Motion Principles

The platform follows a **restrained engineering motion philosophy**:
- Motion exists exclusively to communicate state changes, focus transitions, and spatial hierarchy.
- No gratuitous parallax, floating background bubbles, or distracting marquee animations.

---

## 2. Motion Tokens & Durations

Defined in `src/styles/variables.css`:
- `--duration-fast`: `150ms` (hover states, button clicks, icon flips).
- `--duration-normal`: `250ms` (modal transitions, card elevations, tab switches).
- `--duration-slow`: `400ms` (view collapses, drawer slides).
- `--ease-standard`: `cubic-bezier(0.2, 0.0, 0, 1.0)`.

---

## 3. Reduced-Motion Invariant

In compliance with WCAG 2.1 Criterion 2.3.3:
```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
All animations instantly snap to their completed states when the user has enabled reduced motion preferences at the OS level.
