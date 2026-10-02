# Interaction & Animation Blueprint

This document defines the behavioral specifications, keyboard interactions, mobile gestures, state transitions, error handling, empty states, and accessibility standards for all interactive components.

---

## 1. Interaction Principles & Performance Standards

1. **Zero-JavaScript Baseline**: All primary navigational flows, page views, links, and content must render statically and function 100% without JavaScript enabled.
2. **Progressive Enhancement**: JavaScript is applied strictly for non-critical behavioral enhancements (e.g., mobile drawer toggle, theme switching, interactive category filtering).
3. **Subtle & Purposeful Motion**: Animations are limited to state transitions, subtle hover micro-interactions, and focus rings. Never introduce scroll-jacking, artificial delays, or decorative background motion loops that consume CPU/GPU cycles.
4. **Instant Response Times**: Micro-interactions must respond in $<100\text{ms}$ to maintain a snappy, tactile feel.
5. **Full Reduced Motion Compliance**: All transitions and transforms must disable or fall back to instant opacity changes when `@media (prefers-reduced-motion: reduce)` is detected.

---

## 2. Global Interactive Components

### A. Mobile Navigation Drawer

```
Closed State                         Open State
┌───────────────────────────┐        ┌───────────────────────────┐
│ [Uzair]               [☰] │ ────►  │ [Uzair]               [✕] │
├───────────────────────────┤ (Click)├───────────────────────────┤
│ Hero content...           │        │ • Work                    │
│                           │        │ • Research                │
│                           │        │ • About                   │
│                           │        │ • Services                │
│                           │        │ • Contact                 │
│                           │        │ [Get in Touch Button]     │
└───────────────────────────┘        └───────────────────────────┘
```

- **Trigger**: Click or `Enter`/`Space` on the mobile hamburger button (`aria-expanded="false"`, `aria-controls="mobile-nav-drawer"`).
- **Behavior**: Drawer expands vertically or slides smoothly from the top with an overlay backdrop (`transition: transform 200ms cubic-bezier(0.16, 1, 0.3, 1)`).
- **Body Scroll Lock**: When open, prevent background page scrolling by applying `overflow: hidden` to `document.body`.
- **Keyboard & Focus Management**:
  - Focus is immediately shifted to the first focusable navigation link inside the drawer.
  - Focus is trapped within the drawer while open (`Tab` cycles through links; `Shift+Tab` cycles backwards).
  - Pressing the `Escape` key immediately closes the drawer and restores focus to the hamburger button.
- **Reduced Motion**: Transition duration set to `0ms`; drawer appears instantly with `opacity: 1`.

---

### B. Project Category Filter Bar (`/work`)

- **Trigger**: Click or keyboard activation (`Enter`/`Space`) on filter pills (`All`, `Quant & AI`, `Full-Stack`, `Systems`).
- **Behavior**:
  - Updates active visual pill state (`aria-pressed="true"`, background highlight).
  - Smoothly displays matching project cards and hides non-matching cards using CSS opacity/transform or DOM filtering.
  - If no JavaScript is active, all cards remain visible, ensuring complete accessibility.
- **Empty State Behavior**:
  - If a filter combination produces zero results: Display a semantic empty state message:
    > *"No projects currently found in this category. View all projects or check back soon."*
  - Provide a single primary action: `[ Reset Filters ]`.

---

### C. Case Study Interactive Elements (`/work/[slug]`)

- **Code Block Copy Buttons**:
  - Appears in top-right corner of code blocks on hover or focus.
  - **Trigger**: Click or `Enter` copies raw snippet to clipboard via `navigator.clipboard.writeText()`.
  - **Feedback**: Icon changes to a checkmark, and tooltip updates to *"Copied!"* for 2000ms before resetting.
  - **Fallback**: If Clipboard API is unavailable or denied, graceful non-blocking failure.
- **Diagram Expansion / Pan**:
  - Architectural diagrams are responsive SVG/ASCII blocks with high-contrast text.
  - On narrow screens, horizontal overflow allows smooth momentum scrolling with a visible scroll indicator.

---

### D. Direct Contact Channels (`/contact`)

- **Copy Email / Direct Mailto**:
  - Clicking `[ Send Email ]` opens default mail client with prefilled subject (`Inquiry for Uzair Ahmad`).
  - Secondary action: Clicking `[ Copy Email Address ]` copies `contact@uzairahmad.dev` (or verified email) and displays inline feedback toast: *"Email copied to clipboard"*.

---

## 3. Focus & Hover States

| Component | Normal State | Hover State (`:hover`) | Focus Visible State (`:focus-visible`) | Active State (`:active`) |
|---|---|---|---|---|
| **Primary Button** | Accent background (`#3b82f6`), white text, rounded radius | Brightness 110%, scale `1.02`, `box-shadow: 0 4px 12px rgba(59,130,246,0.3)` | `outline: 2px solid #60a5fa`, `outline-offset: 3px` | Scale `0.98`, brightness 95% |
| **Secondary Button** | Surface card bg, subtle border (`#334155`), text secondary | Border color `#64748b`, text primary, bg `#1e293b` | `outline: 2px solid #38bdf8`, `outline-offset: 3px` | Scale `0.98` |
| **Project Card** | Slate surface (`#0f172a`), subtle border (`#1e293b`) | Border color `#3b82f6` (30% alpha), translateY `-3px`, subtle card glow | Card border accent highlight, inner link has clear focus ring | translateY `-1px` |
| **Nav Link** | Text secondary (`#94a3b8`), font medium | Text primary (`#f8fafc`), background tint | `outline: 2px solid #38bdf8`, `outline-offset: 2px`, rounded | Text primary |

---

## 4. Error States & Fallbacks

| Scenario | Trigger Condition | Visual & Technical Experience | Recovery Path |
|---|---|---|---|
| **404 Not Found** | Visitor accesses invalid route or outdated slug | Clear, accessible 404 error page. Displays friendly message and quick links to Home, Work, and About. | `[ Return to Homepage ]` button + search/sitemap links. |
| **Image Load Failure** | Broken asset link or network interruption | CSS fallback displays card with placeholder background and readable text title. `alt` text remains accessible in DOM. | Page layout does not shift (`aspect-ratio` preserved). |
| **Filtered Result Empty** | Category filter matches 0 items | Inline empty state message within the project grid container. | `[ Reset Category Filter ]` action button. |
| **Form/Mailto Failure** | User system has no default email client | Fallback text clearly displays raw email address with a 1-click `[ Copy Address ]` button. | User can manually paste into webmail. |

---

## 5. Reduced Motion Implementation

All animations and transitions must adhere to the following CSS media query:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
