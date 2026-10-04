# Theme System & Zero-FOUC Synchronization

## 1. Theme Architecture

The platform supports both **Dark** (default) and **Light** themes with instant local storage persistence and zero Flash of Unstyled Content (FOUC).

---

## 2. Zero-FOUC Initialization

To prevent visual flash during page load:
1. An inline `<script>` runs synchronously in the `<head>` of `src/layouts/BaseLayout.astro` before any DOM elements render.
2. It reads `localStorage.getItem('theme')` or falls back to `window.matchMedia('(prefers-color-scheme: light)').matches`.
3. It immediately applies `data-theme="dark"` or `data-theme="light"` to `document.documentElement`.

---

## 3. Theme Token Invariants

- Every semantic CSS token defined in `:root` has a corresponding override in `[data-theme="light"]` in `src/styles/variables.css`.
- Background, surface, card, border, and text tokens maintain identical contrast ratios across both modes ($\ge 4.5:1$ for body text, $\ge 3:1$ for large headings, meeting WCAG AA).
