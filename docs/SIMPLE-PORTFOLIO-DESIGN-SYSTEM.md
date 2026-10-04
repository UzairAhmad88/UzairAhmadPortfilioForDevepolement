# Simple Engineering Portfolio Design System (PDS-26)

**Design Personality:** Editorial + Technical + Minimal + Human  

---

## 1. Color Palette & Token System

The design system relies on a curated neutral base with a single primary emerald/teal accent and clear status tokens.

### Dark Mode Tokens (Default)
- **Background (`--color-bg`):** `#07110f` (Deep obsidian forest)
- **Surface (`--color-surface`):** `#101a17` (Subtle muted container)
- **Border Subtle (`--border-subtle`):** `rgba(246, 241, 232, 0.08)`
- **Text Primary (`--color-text` / `--ink`):** `#f6f1e8` (Warm editorial off-white)
- **Text Muted (`--color-text-muted` / `--muted`):** `#a9b8b1` (High-contrast sage gray)
- **Primary Accent (`--color-accent` / `--teal`):** `#7ed8c4` (Crisp seafoam emerald)

### Light Mode Tokens
- **Background:** `#fbfbf9`
- **Surface:** `#ffffff`
- **Border Subtle:** `rgba(15, 23, 42, 0.08)`
- **Text Primary:** `#0f172a`
- **Text Muted:** `#475569`
- **Primary Accent:** `#0d9488`

---

## 2. Typography Hierarchy

- **UI Font Family:** `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **Code / Mono Font Family:** `"JetBrains Mono", "Fira Code", monospace`

### Scale
- **H1 (Page Headlines):** `clamp(2rem, 4vw, 3rem)` | Weight: `800` | Tracking: `-0.03em`
- **H2 (Section Titles):** `clamp(1.5rem, 2.8vw, 2rem)` | Weight: `800` | Tracking: `-0.02em`
- **H3 (Card Titles):** `clamp(1.15rem, 1.8vw, 1.35rem)` | Weight: `700`
- **Body / Paragraphs:** `1rem - 1.05rem` | Line Height: `1.65` | Weight: `400`
- **Technical Metadata:** `0.8rem - 0.85rem` | Font Family: Mono | Weight: `600`

---

## 3. Spacing & Grid System

- **Container Max Width:** `1200px` (Centrally aligned with safe-area padding)
- **Section Spacing:** `clamp(3.5rem, 7vw, 6rem)` vertical padding
- **Grid Layouts:**
  - Featured Work: 2-column responsive grid (`repeat(auto-fit, minmax(360px, 1fr))`)
  - Detail Page Split: 2.2fr main content / 1fr sticky sidebar
  - Currently List: 1-column clean vertical stack with subtle divider rules

---

## 4. Components & Interactive States

### Buttons & CTAs
- **Primary Button (`.btn-primary`):** Solid accent background, dark ink text, 48px minimum touch target, subtle 2px hover elevation.
- **Secondary Button (`.btn-secondary`):** Translucent surface, 1px subtle border, accent text on hover.
- **Text Link (`.text-link`):** Understated inline link with arrow slide micro-interaction on hover (`translateX(4px)`).

### Cards
- Clean flat surface, 1px subtle border, 12px border radius (`--radius-md`).
- Elevation applied strictly on hover via subtle border glow and 2px lift.
- No floating 3D cards or rainbow gradient outlines.
