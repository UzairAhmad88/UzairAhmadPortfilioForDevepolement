# Theme 2.0 Recovery: Dual-Mode Architecture & Semantic Token Specification

## 1. System Overview

Theme 2.0 establishes a clean, dual-mode theme system for the Personal Engineering & Research Platform. It provides first-class support for both **Dark Mode** (the canonical brand baseline) and **Light Mode** (warm editorial paper with high-contrast typography) while ensuring zero Flash of Unstyled/Incorrect Content (zero-FOUC).

---

## 2. Design Token Hierarchy

```text
BRAND TOKENS (Palette constants: #07110f, #7ed8c4, #fbf9f5, #141f1c)
       ↓
SEMANTIC THEME TOKENS (--color-background, --color-surface, --color-text-primary, --color-border, --color-accent)
       ↓
LEGACY COMPATIBILITY TOKENS (--paper, --ink, --muted, --teal, --deep, --clay, --rose)
       ↓
COMPONENT STYLES (Cards, Navigators, Buttons, Code blocks, Badges)
```

---

## 3. Semantic Token Definitions

### Dark Mode (`:root` / default)

| Token Name | Value | Purpose |
|---|---|---|
| `--color-background` | `#07110f` | Main page canvas background |
| `--color-background-subtle` | `#101a17` | Secondary background sections / footer |
| `--color-surface` | `rgba(255, 255, 255, 0.035)` | Base card & panel surface |
| `--color-surface-hover` | `rgba(255, 255, 255, 0.06)` | Hovered card state |
| `--color-surface-card` | `#101a17` | Solid opaque card backing |
| `--color-text-primary` | `#f6f1e8` | Headings and primary reading text |
| `--color-text-secondary` | `#a9b8b1` | Subheadings, summaries, and body copy |
| `--color-text-muted` | `#83968e` | Metadata, tags, dates, and timestamps |
| `--color-border` | `rgba(246, 241, 232, 0.12)` | Standard border lines |
| `--color-border-subtle` | `rgba(246, 241, 232, 0.08)` | Grid backgrounds and divider lines |
| `--color-accent` | `#7ed8c4` | Primary brand teal accent & interactive states |

### Light Mode (`[data-theme="light"]`)

| Token Name | Value | Purpose |
|---|---|---|
| `--color-background` | `#fbf9f5` | Warm editorial paper background |
| `--color-background-subtle` | `#f4f0e8` | Subtle card & header contrast |
| `--color-surface` | `rgba(20, 31, 28, 0.04)` | Elevated card surfaces |
| `--color-surface-hover` | `rgba(20, 31, 28, 0.07)` | Hovered card surface |
| `--color-surface-card` | `#f2ede4` | Solid card backing |
| `--color-text-primary` | `#141f1c` | Deep obsidian ink for crisp contrast |
| `--color-text-secondary` | `#465751` | Readable secondary editorial text |
| `--color-text-muted` | `#5d6f68` | Muted metadata and captions |
| `--color-border` | `rgba(20, 31, 28, 0.12)` | Crisp, subtle border rules |
| `--color-border-subtle` | `rgba(20, 31, 28, 0.08)` | Background technical grid lines |
| `--color-accent` | `#0d7663` | Deep teal accent with WCAG AA contrast on light canvas |

---

## 4. Theme State Hierarchy & Priority

The theme evaluation engine follows a strict cascade:

```text
1. Explicit User Selection (User clicks ThemeToggle button)
       ↓
2. Persisted Preference (localStorage key 'ua_portfolio_theme')
       ↓
3. System OS Preference (@media (prefers-color-scheme: light))
       ↓
4. Platform Default ('dark' mode)
```

---

## 5. Zero-FOUC Initialization Strategy

To eliminate theme flickering or flashes of incorrect styling during page load:
1. An inline `<script is:inline>` is injected into the `<head>` of `BaseLayout.astro`.
2. This script executes synchronously before browser render tree creation.
3. It evaluates localStorage and system media queries, immediately setting `data-theme` on `document.documentElement` and updating `document.documentElement.style.colorScheme`.
4. The page renders with the correct background and text colors on the very first painted frame.

---

## 6. Accessible Theme Toggle Component

The `<ThemeToggle />` component located in `src/components/common/ThemeToggle.astro`:
- **Keyboard Accessible**: Fully operable via `Enter` or `Space` key.
- **Screen Reader Friendly**: Exposes dynamic `aria-label` announcing the switch target (e.g., "Switch to light theme" / "Switch to dark theme").
- **Visual Feedback**: Visible `:focus-visible` outline using `var(--color-focus)`.
- **System Sync**: Dispatches a `theme-changed` custom event for interactive canvas or visualization components.
- **Dual Location**: Present in both desktop Header navigation and the mobile navigation drawer.
