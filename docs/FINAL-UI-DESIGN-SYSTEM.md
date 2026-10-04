# Final Canonical UI Design System

**Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
**Architecture:** Dark Editorial Engineering & Quantitative Research Aesthetic  
**File Reference:** `src/styles/variables.css`, `src/styles/utilities.css`, `src/styles/global.css`  

---

## 1. Design Tokens Specification

### A. Color Palette Tokens

#### Dark Mode (Default)
- **Canvas / Background:** `--color-bg: #07110f;` (Deep green-black obsidian)
- **Primary Card Surface:** `--color-surface: rgba(255, 255, 255, 0.035);` / elevated glass `rgba(16, 26, 23, 0.75);`
- **Surface Hover:** `--color-surface-hover: rgba(255, 255, 255, 0.06);`
- **Surface Elevated:** `--color-surface-elevated: rgba(255, 255, 255, 0.08);`
- **Primary Text:** `--color-text-primary: #f6f1e8;` (Warm off-white, high contrast)
- **Secondary Text:** `--color-text-secondary: rgba(246, 241, 232, 0.78);`
- **Tertiary / Muted Text:** `--color-text-tertiary: rgba(246, 241, 232, 0.58);`
- **Border Default:** `--color-border: rgba(246, 241, 232, 0.12);`
- **Border Subtle:** `--color-border-subtle: rgba(246, 241, 232, 0.08);`
- **Border Strong:** `--color-border-strong: rgba(246, 241, 232, 0.24);`
- **Brand Accent (Mint):** `--color-mint: #7ed8c4;`
- **Brand Accent Hover:** `--color-mint-hover: #9bd8cf;`
- **Brand Accent Muted:** `--color-accent-muted: rgba(126, 216, 196, 0.14);`
- **Focus Indicator:** `--color-focus: rgba(126, 216, 196, 0.5);`

#### Light Mode
- **Canvas / Background:** `--color-bg: #f8faf9;` (Subtle off-white)
- **Primary Card Surface:** `--color-surface: #ffffff;` (Solid white with subtle border)
- **Primary Text:** `--color-text-primary: #141f1c;` (Deep forest black)
- **Secondary Text:** `--color-text-secondary: rgba(20, 31, 28, 0.82);`
- **Tertiary / Muted Text:** `--color-text-tertiary: rgba(20, 31, 28, 0.65);`
- **Border Default:** `--color-border: rgba(20, 31, 28, 0.12);`
- **Brand Accent (Teal):** `--color-mint: #0d7663;`
- **Focus Indicator:** `--color-focus: rgba(13, 118, 99, 0.45);`

---

### B. Typography Hierarchy

- **Font Family (Sans / Body / UI):** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;`
- **Font Family (Monospace / Code / Data):** `'JetBrains Mono', 'Fira Code', ui-monospace, monospace;`
- **Font Family (Serif / Editorial Accents):** `'Playfair Display', 'Georgia', serif;`

#### Fluid Scale Tokens
- `--font-size-hero:` `clamp(2.25rem, 5vw + 1rem, 3.75rem);`
- `--font-size-title:` `clamp(1.75rem, 3vw + 1rem, 2.5rem);`
- `--font-size-h2:` `clamp(1.35rem, 2vw + 0.8rem, 1.85rem);`
- `--font-size-h3:` `clamp(1.15rem, 1.2vw + 0.6rem, 1.35rem);`
- `--font-size-body:` `clamp(0.9375rem, 0.4vw + 0.85rem, 1.0625rem);`
- `--font-size-sm:` `clamp(0.8125rem, 0.2vw + 0.75rem, 0.875rem);`
- `--font-size-xs:` `0.75rem;`

---

### C. Spacing & Container Tokens

- `--space-xs:` `0.25rem;` (4px)
- `--space-sm:` `0.5rem;` (8px)
- `--space-md:` `1rem;` (16px)
- `--space-lg:` `1.5rem;` (24px)
- `--space-xl:` `2rem;` (32px)
- `--space-2xl:` `3rem;` (48px)
- `--space-3xl:` `4.5rem;` (72px)
- `--container-max:` `1280px;`
- `--container-narrow:` `900px;`

---

## 2. Canonical UI Components

### A. Buttons & Interactive Controls
```css
/* Primary Button */
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  min-height: 44px;
  border-radius: 8px;
  background: var(--color-mint);
  color: var(--color-bg);
  font-weight: 600;
  font-size: var(--font-size-sm);
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Secondary Button */
.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  min-height: 44px;
  border-radius: 8px;
  background: var(--color-surface);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
  font-weight: 500;
  font-size: var(--font-size-sm);
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
```

### B. Standard Cards
- Built on `.card` / `.lab-card` / `.research-card`
- Base background: `var(--color-surface)`
- Border: `1px solid var(--color-border-subtle)`
- Hover transition: `transform: translateY(-2px); border-color: var(--color-mint); box-shadow: var(--shadow-md);`

### C. Status Taxonomy
- **Production / Completed:** `--status-prod: #7ed8c4;` (`rgba(126, 216, 196, 0.12)`)
- **Research / Active / In-Progress:** `--status-active: #60a5fa;` (`rgba(96, 165, 250, 0.12)`)
- **Archival / Reference:** `--status-archive: #fbbf24;` (`rgba(251, 191, 36, 0.12)`)

---

## 3. Responsive & Accessibility Rules

1. **Touch Targets:** All clickable tags, buttons, filters, and nav links enforce `min-height: 44px;` and `min-width: 44px;`.
2. **Reduced Motion:** All transitions respect `@media (prefers-reduced-motion: reduce)` by resetting transition durations to `0.01ms`.
3. **Safe Area:** Fixed overlays, mobile navigation drawers, and floating contacts apply `env(safe-area-inset-bottom)` and `env(safe-area-inset-top)`.
4. **Layout Grid:** Desktop views use CSS Grid with `grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));` to avoid rigid column collapsing.
