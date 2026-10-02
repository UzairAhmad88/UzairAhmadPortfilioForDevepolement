# Desktop & Large Display UX Strategy

This document defines the user experience, container constraints, visual balance, and interaction patterns for Desktop (1280px–1920px), 2K (2560px), 4K (3840px), and Ultrawide (3440px) displays.

---

## 1. Large Display Philosophy

On large and high-resolution monitors, expanding layout width indiscriminately to `100vw` degrades readability and ergonomics:
- **Maximum Line Measure Constraint**: Narrative paragraphs and technical documentation must never exceed **75 characters per line** (`max-width: 680px` to `750px`).
- **Centering & Container Shells**: The primary layout container is bounded to `--container-max: 1200px` with fluid margins (`margin: 0 auto;`), guaranteeing that the content does not float arbitrarily or drift to extreme corners.
- **Visual Balance**: Background gradients and subtle atmospheric glows expand across the full viewport, while critical interactive UI remains anchored in the central focal zone.

---

## 2. Desktop Navigation & Sticky Sidebar Systems

### A. Horizontal Desktop Navigation
- Navigation links sit comfortably in the header with generous clickable padding and active indicator bars.
- Header width is pinned to the central container (`1200px`) so links do not spread to the extreme left/right edges on 3440px displays.

### B. Sticky Metadata & Action Sidebars
- On `/about`, `/work/[slug]`, `/research/[slug]`, and `/contact`, secondary metadata sidebars utilize `position: sticky; top: 6rem;`.
- When users scroll through lengthy case study narratives or research methodologies, key project metrics, repository links, and contact channels remain accessible without scrolling back to top.

---

## 3. Desktop Hover & Micro-Interactions

- **Card Elevating Transitions**: Project and capability cards elevate subtly (`transform: translateY(-3px)`) with glowing border highlights (`border-color: rgba(59, 130, 246, 0.4)`).
- **Architecture Pipeline Interaction**: Hovering over architecture stages highlights input/output flows, with touch fallback preserved for touchscreens.
- **Magnetic & Smooth Focus**: All interactive elements maintain high-contrast focus rings (`outline: 2px solid #ffffff; outline-offset: 2px`) for keyboard-first navigation.
