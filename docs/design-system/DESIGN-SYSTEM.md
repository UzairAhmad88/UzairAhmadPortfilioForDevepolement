# Design System & Token Architecture

## 1. Design Philosophy

The design system uses a strict **Vanilla CSS token architecture** defined in `src/styles/variables.css` and `src/styles/utilities.css`. It delivers an engineering-grade aesthetic without heavy UI framework bloat.

---

## 2. Core Token Catalog

### 2.1 Color & Semantic Surface Tokens
- **Backgrounds**: `--bg-primary` (`#08090a` dark / `#fafafa` light), `--bg-surface` (`#111315` / `#ffffff`), `--bg-card` (`#16191d` / `#f3f4f6`).
- **Text**: `--text-primary` (`#f0f2f5` / `#111827`), `--text-secondary` (`#9ba3af` / `#4b5563`), `--text-muted` (`#636b78` / `#9ca3af`).
- **Accents**: `--color-mint` (`#7ed8c4`), `--color-blue` (`#60a5fa`), `--color-amber` (`#fbbf24`), `--color-purple` (`#c084fc`).
- **Borders**: `--border-subtle` (`rgba(255,255,255,0.06)` / `rgba(0,0,0,0.08)`), `--border-focus` (`var(--color-mint)`).

### 2.2 Typography & Spacing
- **Font Families**: Sans (`Inter, system-ui`), Monospace (`JetBrains Mono, monospace`).
- **Fluid Font Scale**: CSS `clamp()` tokens (`--text-xs` through `--text-4xl`).
- **Fluid Spacing Scale**: CSS `clamp()` tokens (`--space-1` through `--space-16`).

---

## 3. UI Component Patterns

- **Buttons**: `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-outline` with min $44\text{px}$ touch targets.
- **Cards**: `.card-interactive` using CSS Subgrid for 4-track row equalization.
- **Status Pills**: `.status-pill`, `.status-pill-completed`, `.status-pill-active`, `.status-pill-validating`.
