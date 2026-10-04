# Responsive Design System: Fluid Scales, Grids & Touch Targets

## 1. Fluid Typography System

All primary type scales dynamically scale between minimum mobile values (at 320px viewport) and maximum desktop values (at 1200px+ viewport) via CSS `clamp()`:

```css
--font-size-display: clamp(2.35rem, 5.5vw + 0.75rem, 5.25rem);
--font-size-h1:      clamp(2.1rem, 4.2vw + 0.5rem, 3.75rem);
--font-size-h2:      clamp(1.65rem, 3.2vw + 0.35rem, 2.65rem);
--font-size-h3:      clamp(1.2rem, 1.8vw + 0.25rem, 1.65rem);
--font-size-h4:      clamp(1.05rem, 1.2vw + 0.15rem, 1.25rem);
--font-size-lead:    clamp(1.05rem, 1.4vw + 0.2rem, 1.25rem);
--font-size-body:    clamp(0.95rem, 0.8vw + 0.2rem, 1.05rem);
--font-size-sm:      0.875rem;
--font-size-xs:      0.75rem;
```

---

## 2. Fluid Spacing Scale

Fluid spacing eliminates repetitive, rigid breakpoint overrides by providing mathematical interpolation across viewport sizes:

```css
--space-section: clamp(3.5rem, 6vw + 1rem, 6.5rem);
--space-gutter:  clamp(1rem, 3vw, 2rem);
--space-card:    clamp(1.25rem, 2.5vw, 2rem);
```

---

## 3. Intrinsic CSS Grid Patterns

Card layouts throughout Work, Research, Lab, Notes, Technology, and Archive utilize intrinsic auto-fit patterns:

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
  gap: var(--space-gutter);
}
```

---

## 4. Touch Targets & Safe Areas (WCAG 2.5.5 / 2.5.8)

- All buttons, links, toggles, and drawer controls enforce `--touch-target-min: 44px;` (minimum 44×44px hit area).
- Floating action buttons (e.g. WhatsApp trigger, mobile navigation trigger) incorporate iOS/Android safe area insets: `max(1.25rem, env(safe-area-inset-bottom))`.
