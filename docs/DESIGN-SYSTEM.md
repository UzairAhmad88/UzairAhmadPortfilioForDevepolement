# Design System Foundation & Token Architecture

## 1. Design System Philosophy
The design system is built to convey a **dark, technical, editorial, confident, and human** aesthetic. It intentionally avoids generic template looks, neon cyberpunk cliches, and meaningless decorative shapes.

Every visual token serves a semantic purpose:
- **Depth through Layering**: Subtle translucent surfaces (`rgba(255, 255, 255, 0.035)`) over dark organic background gradients.
- **Precision Accents**: Controlled technical colors (`#7ed8c4` Teal, `#bda6ff` Lavender, `#d2a071` Clay) indicating domains, states, and data streams.
- **Harmonious Typography**: Pairing high-legibility sans-serif (`Inter`) with monospace (`JetBrains Mono`) for technical metadata and eyebrows.

---

## 2. Color System Tokens

```css
:root {
  /* Canvas / Backgrounds */
  --color-canvas: #07110f;
  --color-canvas-subtle: #101a17;
  --color-canvas-card: #17211f;

  /* Surfaces & Glass Layers */
  --color-surface: rgba(255, 255, 255, 0.035);
  --color-surface-hover: rgba(255, 255, 255, 0.06);
  --color-surface-elevated: rgba(255, 255, 255, 0.08);

  /* Typography / Inks */
  --color-text-primary: #f6f1e8;
  --color-text-secondary: #a9b8b1;
  --color-text-tertiary: rgba(246, 241, 232, 0.58);

  /* Borders & Dividers */
  --color-border: rgba(246, 241, 232, 0.12);
  --color-border-subtle: rgba(246, 241, 232, 0.08);
  --color-border-strong: rgba(246, 241, 232, 0.24);

  /* Domain & Brand Accents */
  --color-accent-teal: #7ed8c4;
  --color-accent-teal-glow: rgba(126, 216, 196, 0.18);
  --color-accent-deep: #9bd8cf;
  --color-accent-clay: #d2a071;
  --color-accent-lavender: #bda6ff;
  --color-accent-rose: #e0aaa7;

  /* Semantic Feedback */
  --color-focus: rgba(126, 216, 196, 0.5);
}
```

---

## 3. Typography Hierarchy

| Role | Target Element / Class | Font Family | Size | Weight | Line Height |
|---|---|---|---|---|---|
| **Display** | Hero Title (`h1`) | `Inter` | `clamp(3rem, 7vw, 6.9rem)` | 800 | `0.92` |
| **H1 (Page)** | Subpage Title | `Inter` | `clamp(2.5rem, 5vw, 4.2rem)` | 800 | `1.0` |
| **H2 (Section)**| Section Heading (`h2`) | `Inter` | `clamp(2rem, 4vw, 4rem)` | 800 | `1.0` |
| **H3 (Card)** | Card Title (`h3`) | `Inter` | `1.22rem` – `1.42rem` | 800 | `1.15` |
| **Body** | Paragraphs (`p`) | `Inter` | `1.0rem` – `1.08rem` | 400 | `1.65` – `1.75` |
| **Eyebrow / Code** | Category Eyebrows | `JetBrains Mono` | `0.77rem` | 700 | `1.0` (Uppercase) |
| **Badge / Label** | Tags, Metas | `JetBrains Mono` | `0.74rem` – `0.78rem` | 800 | `1.0` |

---

## 4. Spacing Scale

Built on a consistent 4px base increment:
- `--space-1`: `0.25rem` (4px)
- `--space-2`: `0.5rem` (8px)
- `--space-3`: `0.75rem` (12px)
- `--space-4`: `1.0rem` (16px)
- `--space-6`: `1.5rem` (24px)
- `--space-8`: `2.0rem` (32px)
- `--space-12`: `3.0rem` (48px)
- `--space-16`: `4.0rem` (64px)
- `--space-24`: `6.5rem` (104px) — *Standard section padding*

---

## 5. Elevation & Radius Tokens
- **Border Radii**:
  - Small UI / Badges: `4px`
  - Cards & Containers: `8px`
  - Floating CTAs / Buttons / Header Pill: `9999px`
- **Shadows**:
  - Surface: `0 16px 50px rgba(0, 0, 0, 0.18)`
  - Elevated Card: `0 24px 80px rgba(0, 0, 0, 0.32)`
  - Ambient Teal Glow: `0 0 70px rgba(126, 216, 196, 0.18)`

---

## 6. Layout Grid & Responsive Breakpoints

```
[ Mobile (<= 640px) ] ──────► 1-Column Grid, Full-Width Stack, Sticky Pill Header
[ Tablet (641px - 920px) ] ──► 2-Column Capability & Project Grids, Collapsed Nav Links
[ Desktop (> 920px) ] ──────► 3 & 4-Column Grids, Full Horizontal Pill Navigation
[ Container Maximum ] ──────► 1180px Centered Shell (--container-max)
```

---

## 7. Motion & Interaction Standards
- **Subtle, Fast & GPU-Accelerated**: Animations animate only `transform` and `opacity`.
- **Card 3D Tilt**: Max tilt angle restricted to $3.5^\circ$ for smooth tactile feedback.
- **Reduced Motion**: Full suppression under `@media (prefers-reduced-motion: reduce)`.
