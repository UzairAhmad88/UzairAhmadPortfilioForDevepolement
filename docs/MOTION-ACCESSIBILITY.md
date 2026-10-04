# Motion Accessibility: WCAG 2.2 Level AA & Reduced Motion Compliance

## 1. Core Accessibility Principles

1. **Motion Is Never Exclusive**: State changes (active, selected, expanded, error, success) are always conveyed via semantic HTML (`aria-expanded`, `aria-selected`, `aria-current`), text labels, and high-contrast color/border tokens. Motion is purely supplementary feedback.
2. **Respect User Intent**: The website respects the operating system's `prefers-reduced-motion` setting globally and instantaneously.
3. **No Seizure or Vestibular Hazards**: Zero flashing lights, zero high-frequency blinking, and zero full-screen spinning or disorienting parallax.

---

## 2. Reduced Motion Implementation

When `prefers-reduced-motion: reduce` is active:
- All animation durations are clamped to `0.01ms` (instantaneous completion).
- All transform offsets (`translateY`, `scale`, `translateX`) are set to `none`.
- Smooth scrolling is disabled (`scroll-behavior: auto`).
- Infinite looping animations (such as pulse dots and ticker marquees) are frozen at static rest states.
- The interface remains 100% interactive, readable, and functional.

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  .motion-lift,
  .motion-pressable,
  .motion-link::after,
  .motion-reveal-init {
    transform: none !important;
    transition: none !important;
    opacity: 1 !important;
  }
}
```

---

## 3. Keyboard Navigation Integration

- Tab navigation moves between focusable elements with visible, instantaneous `:focus-visible` outlines.
- Focus rings are not delayed or masked by ongoing motion transitions.
