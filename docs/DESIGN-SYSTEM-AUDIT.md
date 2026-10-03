# Design System Audit & Token Baseline

**Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
**Design System Version:** 1.0 (Baseline Foundation)  
**Location:** `src/styles/variables.css` & `src/styles/global.css`  

---

## 1. Color Palette Tokens

```css
:root {
  /* Canvas & Surface */
  --color-canvas: #07110f;          /* Deep Emerald Dark Canvas */
  --color-canvas-subtle: #101a17;   /* Sub-canvas Tone */
  --bg-surface: #101a17;            /* Solid Card Surface */
  --color-surface: rgba(16, 26, 23, 0.75); /* Translucent Glass Card Surface */
  
  /* Text & Inks */
  --color-text-primary: #f6f1e8;    /* Warm Bone - High Contrast */
  --color-text-secondary: #a9b8b1;  /* Sage Grey - Body & Subtitles */
  --color-text-muted: #83968e;      /* Muted Labels & Metadata */
  
  /* Accents */
  --color-accent: #7ed8c4;          /* Mint / Emerald Teal (Primary) */
  --color-accent-clay: #d2a071;     /* Warm Amber / Clay (Secondary) */
  --color-accent-lavender: #bda6ff; /* Soft Lavender (Research) */
  --color-accent-rose: #e0aaa7;     /* Soft Rose (Accents) */
  --color-success: #10b981;         /* Operational Status Green */
  
  /* Borders */
  --color-border: rgba(246, 241, 232, 0.09);
  --color-border-subtle: rgba(246, 241, 232, 0.06);
  --color-border-strong: rgba(246, 241, 232, 0.18);
}
```

---

## 2. Typography Scale Tokens

```css
:root {
  --font-sans: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Fluid Clamp Scales */
  --font-size-display: clamp(2.35rem, 5.5vw + 0.75rem, 5.5rem);
  --font-size-h1: clamp(2.1rem, 4.5vw + 0.5rem, 3.8rem);
  --font-size-h2: clamp(1.65rem, 3.2vw + 0.35rem, 2.75rem);
  --font-size-h3: clamp(1.2rem, 1.8vw + 0.25rem, 1.65rem);
  --font-size-h4: clamp(1.05rem, 1.2vw + 0.15rem, 1.25rem);
  --font-size-lead: clamp(1.05rem, 1.4vw + 0.2rem, 1.25rem);
  --font-size-body: clamp(0.95rem, 0.8vw + 0.2rem, 1.05rem);
}
```

---

## 3. Spacing, Elevation & Shapes

```css
:root {
  /* Fluid Spacing Scale */
  --space-section: clamp(3.5rem, 6vw + 1rem, 6.5rem);
  --space-gutter: clamp(1rem, 3vw, 2rem);
  --space-card: clamp(1.25rem, 2.5vw, 2.25rem);

  /* Elevation */
  --shadow-surface: 0 16px 50px rgba(0, 0, 0, 0.18);
  --shadow-card: 0 24px 80px rgba(0, 0, 0, 0.32);

  /* Radii */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 14px;
  --radius-full: 9999px;

  /* Touch Target Minimum (WCAG 2.5.5 / 2.5.8) */
  --touch-target-min: 44px;
}
```

---

## 4. Motion & Micro-Interactions
- **Standard Transition:** `150ms ease` to `240ms ease`.
- **Card Hover Elevation:** `transform: translateY(-2px);` with border color transition to `rgba(126, 216, 196, 0.35)`.
- **Reduced Motion:** Explicit `@media (prefers-reduced-motion: reduce)` rules disable transitions, animations, and tilts across all components.
