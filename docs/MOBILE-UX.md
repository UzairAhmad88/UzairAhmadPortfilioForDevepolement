# Mobile UX & Responsive Strategy

This document defines the dedicated mobile experience, touch target requirements, layout stacking priorities, responsive typography, and mobile-specific performance considerations.

---

## 1. Mobile-First UX Principles

1. **Touch Target Accessibility**: All interactive elements (buttons, links, navigation items, pills) must meet the minimum $44 \times 44\text{px}$ touch target size per WCAG 2.1 Success Criterion 2.5.5.
2. **Thumb-Zone Optimization**: Primary CTAs (e.g. *"Explore Work"*, *"Start Conversation"*) and navigation drawers are positioned within easy thumb-reach zones.
3. **No Horizontal Scrolling**: Prevent unintended overflow on all viewports ($320\text{px}$ to $430\text{px}$). Long code blocks and wide diagrams must have explicit contained horizontal scrolling with visible indicators.
4. **Zero Layout Shifts (CLS < 0.05)**: All image containers, icons, and badges have explicit aspect ratios or bounding boxes to prevent shifts during font or asset loading.

---

## 2. Responsive Breakpoint System

| Token | Breakpoint | Target Devices | Key Layout Behaviors |
|---|---|---|---|
| **`sm`** | $\ge 640\text{px}$ | Large phones (landscape), small tablets | Single column starts splitting into 2 columns for compact cards. |
| **`md`** | $\ge 768\text{px}$ | Tablets (portrait), small laptops | Header navigation switches from mobile drawer trigger to inline desktop links. |
| **`lg`** | $\ge 1024\text{px}$ | Laptops, desktop monitors | Full multi-column grids (3–4 columns), case study sidebar becomes sticky. |
| **`xl`** | $\ge 1280\text{px}$ | Wide desktop monitors | Max container width clamped at $1280\text{px}$ with auto-centering. |

---

## 3. Component Stacking & Reordering on Mobile

### A. Homepage Stacking
- **Desktop**: Hero text on left, optional technical canvas/visual badge on right.
- **Mobile**: Single vertical stack. Eyebrow $\rightarrow$ Heading $\rightarrow$ Summary $\rightarrow$ Full-width Primary CTA $\rightarrow$ Secondary CTA $\rightarrow$ Availability status pill.

### B. Project Cards
- **Desktop**: Dual-action buttons (*Inspect Case Study* and *GitHub Repo ↗*) aligned horizontally.
- **Mobile**: Primary action takes full width; secondary repository link placed directly underneath as a text link with clear hit area.

### C. Case Study Detail (`/work/[slug]`)
- **Desktop**: 8-column main narrative on left, 4-column sticky table of contents & meta sidebar on right.
- **Mobile**:
  1. Breadcrumbs
  2. Project Title & Eyebrow
  3. Quick Specs Meta Strip (Role, Timeline, Tech Tags)
  4. Main Architectural Content & Problem Statement
  5. GitHub & Live Demo Sticky/Prominent Buttons
  6. Related Projects

---

## 4. Mobile Navigation Drawer Architecture

```
┌──────────────────────────────────────┐
│ [Uzair Ahmad]                    [✕] │  <-- Fixed top bar
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
│  [ Get in Touch (Primary CTA) ]      │  <-- Prominent full-width button
├──────────────────────────────────────┤
│  CONNECT: [GitHub] [LinkedIn]        │
└──────────────────────────────────────┘
```

- **Backdrop Overlay**: Darkened transparent overlay (`rgba(0, 0, 0, 0.7)`) with backdrop blur where supported.
- **Keyboard Navigation**: Drawer captures focus upon opening, closes on `Escape`, and traps tab order.

---

## 5. Responsive Typography Scale

| Style | Desktop Size | Mobile Size | Line Height | Letter Spacing |
|---|---|---|---|---|
| **Display / Hero H1** | `2.75rem` ($44\text{px}$) | `2.0rem` ($32\text{px}$) | `1.15` | `-0.025em` |
| **Section H2** | `2.0rem` ($32\text{px}$) | `1.5rem` ($24\text{px}$) | `1.25` | `-0.02em` |
| **Subheading H3** | `1.25rem` ($20\text{px}$) | `1.125rem` ($18\text{px}$) | `1.35` | `-0.01em` |
| **Body Text** | `1.0rem` ($16\text{px}$) | `0.9375rem` ($15\text{px}$) | `1.6` | `normal` |
| **Small / Captions** | `0.875rem` ($14\text{px}$) | `0.8125rem` ($13\text{px}$) | `1.5` | `+0.01em` |
| **Eyebrows / Labels** | `0.75rem` ($12\text{px}$) | `0.75rem` ($12\text{px}$) | `1.4` | `+0.05em` (Uppercase) |
