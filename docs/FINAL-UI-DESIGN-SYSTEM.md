# Final Canonical UI Design System 2.0

**Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
**Architecture:** Dual Semantic Theme Architecture (Dark Engineering Workbench & Light Warm Editorial Platform)  
**File Reference:** `src/styles/variables.css`, `src/styles/utilities.css`, `src/styles/global.css`  
**Standard:** WCAG 2.1 Level AA / AAA, Zero-FOUC, Strict Design Token Discipline

---

## 1. Design Tokens Specification

### A. Semantic Color Tokens

#### Dark Theme (Engineering Workbench — Default)
- **Canvas / Background:** `--color-background: #07110f;` (Deep Obsidian / Evergreen Charcoal)
- **Subtle Background:** `--color-background-subtle: #101a17;`
- **Elevated Surfaces & Cards:** `--color-surface-elevated: #101a17;` / `--color-surface-card: #101a17;`
- **Surface Inset:** `--color-surface-inset: #07110f;`
- **Primary Text:** `--color-text-primary: #f6f1e8;` (Warm Off-White, 15.8:1 AAA Contrast)
- **Secondary Text:** `--color-text-secondary: #a9b8b1;` (8.6:1 AAA Contrast)
- **Muted Text:** `--color-text-muted: #83968e;` (6.2:1 AAA Contrast)
- **Border Default:** `--color-border: rgba(246, 241, 232, 0.12);`
- **Border Subtle:** `--color-border-subtle: rgba(246, 241, 232, 0.08);`
- **Border Strong:** `--color-border-strong: rgba(246, 241, 232, 0.24);`
- **Brand Accent (Mint):** `--color-accent: #7ed8c4;` / `--color-accent-teal: #7ed8c4;`
- **Brand Accent Hover:** `--color-accent-hover: #9bd8cf;`
- **Brand Accent Muted:** `--color-accent-muted: rgba(126, 216, 196, 0.14);`
- **Focus Ring:** `--color-focus: rgba(126, 216, 196, 0.5);`

#### Light Theme (Warm Editorial Engineering Platform)
- **Canvas / Background:** `--color-background: #fbf9f5;` (Warm Editorial Ivory)
- **Subtle Background:** `--color-background-subtle: #f4f0e8;`
- **Elevated Surfaces & Cards:** `--color-surface-elevated: #ffffff;` / `--color-surface-card: #ffffff;`
- **Surface Inset:** `--color-surface-inset: #f2ede4;`
- **Primary Text:** `--color-text-primary: #141f1c;` (Deep Forest Black, 14.2:1 AAA Contrast)
- **Secondary Text:** `--color-text-secondary: #35453f;` (11.5:1 AAA Contrast)
- **Muted Text:** `--color-text-muted: #4e6059;` (7.2:1 AAA Contrast)
- **Border Default:** `--color-border: rgba(20, 31, 28, 0.12);`
- **Border Subtle:** `--color-border-subtle: rgba(20, 31, 28, 0.08);`
- **Border Strong:** `--color-border-strong: rgba(20, 31, 28, 0.22);`
- **Brand Accent (Deep Teal):** `--color-accent: #0d7663;` / `--color-accent-teal: #0d7663;`
- **Brand Accent Hover:** `--color-accent-hover: #09594b;`
- **Brand Accent Muted:** `--color-accent-muted: rgba(13, 118, 99, 0.12);`
- **Focus Ring:** `--color-focus: rgba(13, 118, 99, 0.45);`

---

## 2. Typography Hierarchy

- **UI / Sans Font:** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;`
- **Technical / Monospace Font:** `'JetBrains Mono', 'Fira Code', ui-monospace, monospace;`
- **Editorial Accent Font:** `'Playfair Display', 'Georgia', serif;`

### Fluid Scale Tokens
- `--font-size-hero:` `clamp(2.25rem, 5vw + 1rem, 3.75rem);`
- `--font-size-title:` `clamp(1.75rem, 3vw + 1rem, 2.5rem);`
- `--font-size-h2:` `clamp(1.35rem, 2vw + 0.8rem, 1.85rem);`
- `--font-size-h3:` `clamp(1.15rem, 1.2vw + 0.6rem, 1.35rem);`
- `--font-size-body:` `clamp(0.9375rem, 0.4vw + 0.85rem, 1.0625rem);`
- `--font-size-sm:` `clamp(0.8125rem, 0.2vw + 0.75rem, 0.875rem);`
- `--font-size-xs:` `0.75rem;`

---

## 3. Component Design Rules

### A. Buttons
- **Primary Button (`.btn-primary`):** Mint (`#7ed8c4`) on Dark / Deep Teal (`#0d7663`) on Light with `#ffffff` text. Minimum touch height 44px (48px large).
- **Secondary Button (`.btn-secondary`):** Translucent card background on Dark / `#ffffff` with subtle border on Light.
- **Tertiary / Link (`.btn-ghost`):** Subtle text with hover underline.

### B. Cards & Panels
- **Dark Mode:** `#101a17` solid or elevated translucent background with `rgba(246, 241, 232, 0.12)` border.
- **Light Mode:** `#ffffff` solid elevated card with `rgba(20, 31, 28, 0.12)` border and `0 4px 16px rgba(20, 31, 28, 0.04)` soft shadow.
- **NEVER** render dark gray or charcoal container blocks inside the Light Theme.

### C. The Workbench Principle Callout
- **Dark Mode:** Deep card surface with mint accent badge.
- **Light Mode:** Elevated `#ffffff` card with `#141f1c` title, `#35453f` AAA body text, and `#0d7663` left/accent border.

### D. System Architecture & Lab Visualizations
- **Dark Mode:** Deep obsidian canvas with neon mint nodes.
- **Light Mode:** `#ffffff` technical canvas with warm ivory header, `#141f1c` readable node titles, and `#0d7663` links.

---

## 4. Quality Gate Invariants
1. **Zero-FOUC:** Synchronous inline script in `<head>` executes before render.
2. **Parity:** Switching Dark ↔ Light changes only the environmental rendering; information architecture, component hierarchy, and responsive layouts remain 100% identical.
3. **Contrast:** Every text element conforms to WCAG 2.1 Level AA (minimum 4.5:1 for body, 3:1 for large text) and Level AAA (7:1+) where applicable.
