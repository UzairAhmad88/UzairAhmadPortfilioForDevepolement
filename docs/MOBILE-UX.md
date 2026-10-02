# Mobile UX & Responsive Strategy

This document defines the dedicated mobile experience, touch target requirements, layout stacking priorities, fluid responsive typography, safe-area handling, and mobile-specific performance considerations.

---

## 1. Mobile-First UX Principles

1. **Touch Target Accessibility**: All interactive elements (buttons, links, navigation items, filter pills) meet the minimum **44 × 44px** touch target size per WCAG 2.1 Success Criterion 2.5.5.
2. **Safe-Area Inset Awareness**: Top headers, bottom floating widgets (WhatsApp button), and full-screen mobile drawers explicitly account for hardware notches and gesture bars via `env(safe-area-inset-top)` and `env(safe-area-inset-bottom)`.
3. **No Unintended Horizontal Scrolling**: Prevent unintended overflow on all viewports (320px to 430px). Long code blocks and wide diagrams have explicit contained horizontal scrolling with visible indicators.
4. **iOS Auto-Zoom Prevention**: All form inputs (`<input>`, `<select>`, `<textarea>`) enforce a minimum font size of `16px` (`1rem`) to prevent iOS Safari from automatically zooming into inputs on focus.
5. **Zero Layout Shifts (CLS < 0.05)**: All image containers, icons, and badges have explicit aspect ratios or bounding boxes to prevent shifts during font or asset loading.

---

## 2. Responsive Breakpoint & Collapse System

| Token / Trigger | Breakpoint | Target Space | Key Layout Behaviors |
|---|---|---|---|
| **Compact Stack** | `< 480px` | Small phones (SE, Mini) | Single column forms, vertical action buttons, compact badge scaling. |
| **Grid Collapse** | `< 640px` | Standard phones | 2-column cards collapse to 1 column. Tech orbit collapses to 280px radius. |
| **Nav Collapse** | `< 820px` | Large phones, iPad mini | Header collapses to animated full-height drawer with 44px link targets. |
| **Sidebar Stack** | `< 1024px` | Tablets & small laptops | Sticky sidebars stack statically; 3-column grids collapse to 2 columns. |
| **Standard Desktop** | `1025px – 1440px` | Laptops & Desktops | Full multi-column grids (3 columns), sticky sidebars, hover animations. |
| **Ultrawide / 4K** | `> 1440px` | 2K / 4K / Ultrawide | Centered container (`1200px` max-width), balanced fluid margins. |

---

## 3. Component Stacking & Reordering on Mobile

### A. Homepage Hero Stacking
- **Desktop**: Hero text on left (1.05fr), interactive architectural pipeline SVG on right (0.95fr).
- **Mobile**: Single vertical stack. Eyebrow $\rightarrow$ Heading $\rightarrow$ Summary $\rightarrow$ Primary + Secondary Action Buttons (stacked) $\rightarrow$ Key Metrics Strip $\rightarrow$ Architecture diagram.

### B. Project Cards
- **Desktop**: Dual-action buttons (*Inspect Case Study* and *Live Demo / GitHub*) aligned horizontally.
- **Mobile**: Action container set to `flex-wrap: wrap; gap: 0.75rem 1rem;` with full touch target heights.

### C. Case Study Detail (`/work/[slug]`)
- **Desktop**: 2-column layout (content left, sticky metadata sidebar right).
- **Mobile & Tablet (<1024px)**:
  1. Breadcrumbs (wrapped)
  2. Project Title & Eyebrow
  3. Quick Specs Meta Strip (Role, Timeline, Tech Tags)
  4. Architectural Narrative & Problem Statement
  5. Contained Code Blocks & Decision Tables
  6. Static Metadata & Deliverables
  7. Related Case Studies

---

## 4. Mobile Navigation Drawer Architecture

```
┌──────────────────────────────────────┐
│ [Uzair Ahmad]                    [✕] │  <-- Fixed top bar (env safe-area)
├──────────────────────────────────────┤
│                                      │
│  [ Work ]                       (48px)│
│                                      │
│  [ Research ]                   (48px)│
│                                      │
│  [ About ]                      (48px)│
│                                      │
│  [ Services ]                   (48px)│
│                                      │
│  [ Contact ]                    (48px)│
│                                      │
├──────────────────────────────────────┤
│  [ Start a Project (Primary CTA) ]   │  <-- Prominent full-width button
├──────────────────────────────────────┤
│  CONNECT: [GitHub] [LinkedIn] [Email]│
└──────────────────────────────────────┘
```

- **Backdrop Overlay**: Darkened transparent overlay (`rgba(0, 0, 0, 0.75)`) with backdrop blur (`backdrop-filter: blur(12px)`).
- **Keyboard & Focus Navigation**: Drawer traps focus upon opening, closes on `Escape`, locks background `document.body` scroll, and restores focus cleanly upon dismissal.

---

## 5. Fluid Responsive Typography Scale (`clamp()`)

| Style Token | Fluid Definition | Computed Range (320px -> 1440px) |
|---|---|---|
| `--font-size-display` | `clamp(2.5rem, 6vw, 4.25rem)` | 40px $\rightarrow$ 68px |
| `--font-size-h1` | `clamp(2.1rem, 4.5vw, 3.25rem)` | 33.6px $\rightarrow$ 52px |
| `--font-size-h2` | `clamp(1.65rem, 3.2vw, 2.25rem)` | 26.4px $\rightarrow$ 36px |
| `--font-size-h3` | `clamp(1.25rem, 2.2vw, 1.65rem)` | 20px $\rightarrow$ 26.4px |
| `--font-size-lead` | `clamp(1.05rem, 1.3vw, 1.25rem)` | 16.8px $\rightarrow$ 20px |
| `--font-size-body` | `clamp(0.95rem, 1vw, 1.05rem)` | 15.2px $\rightarrow$ 16.8px |
| `--font-size-small` | `clamp(0.8rem, 0.9vw, 0.875rem)` | 12.8px $\rightarrow$ 14px |

