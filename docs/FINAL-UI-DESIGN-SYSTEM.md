# Final UI Design System Specification
## Personal Engineering & Research Platform — Unified Design Token & Component System

> **Role:** Design Systems Architect, Principal Frontend Engineer, and Accessibility Lead.  
> **Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
> **Repository:** `UzairAhmad88/UzairAhmadPortfilioForDevepolement`  
> **Status:** Production Source of Truth (Post-UI Repair)

---

## 1. Core Philosophy & Design Identity

The platform embodies a **dark editorial engineering aesthetic**:
- **Technical & Editorial:** Precise typography, clear structural hierarchy, and information density without visual clutter.
- **Restrained & Sophisticated:** A disciplined palette anchored by deep green-black surfaces, warm off-white typography, and a single mint/teal identity accent (`#7ed8c4`).
- **Human & Engineering-Oriented:** Content framed around verifiable systems, open source architectures, empirical investigations, and mathematical rigor rather than generic SaaS marketing templates.

---

## 2. Design Tokens (CSS Custom Properties)

### 2.1 Color Tokens

```css
:root {
  /* Canvas & Backgrounds */
  --color-background: #07110f;
  --color-background-subtle: #101a17;
  --color-canvas: #07110f;
  --color-canvas-subtle: #101a17;
  --color-canvas-card: #101a17;

  /* Surfaces & Elevation */
  --color-surface: rgba(255, 255, 255, 0.035);
  --color-surface-hover: rgba(255, 255, 255, 0.06);
  --color-surface-elevated: rgba(255, 255, 255, 0.08);
  --color-surface-card: #101a17;

  /* Typography Colors */
  --color-text-primary: #f6f1e8;       /* Warm Off-White (16.8:1 Contrast) */
  --color-text-secondary: #a9b8b1;     /* Cool Gray-Green (9.4:1 Contrast) */
  --color-text-muted: #83968e;         /* Metadata Gray (5.8:1 Contrast) */

  /* Borders */
  --color-border: rgba(246, 241, 232, 0.12);
  --color-border-subtle: rgba(246, 241, 232, 0.08);
  --color-border-strong: rgba(246, 241, 232, 0.24);

  /* Primary Identity Accent */
  --color-accent: #7ed8c4;             /* Mint / Teal */
  --color-accent-hover: #9bd8cf;       /* Hover Mint */
  --color-accent-muted: rgba(126, 216, 196, 0.14);
  --color-accent-teal: #7ed8c4;

  /* Status & Feedback Tokens */
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  --color-info: #38bdf8;
  --color-focus: rgba(126, 216, 196, 0.5);
}
```

### 2.2 Typography Scale

```css
:root {
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Fluid Typography */
  --font-size-display: clamp(2.35rem, 5.5vw + 0.75rem, 5.25rem);
  --font-size-h1: clamp(2.1rem, 4.2vw + 0.5rem, 3.75rem);
  --font-size-h2: clamp(1.65rem, 3.2vw + 0.35rem, 2.65rem);
  --font-size-h3: clamp(1.2rem, 1.8vw + 0.25rem, 1.65rem);
  --font-size-h4: clamp(1.05rem, 1.2vw + 0.15rem, 1.25rem);
  --font-size-lead: clamp(1.05rem, 1.4vw + 0.2rem, 1.25rem);
  --font-size-body: clamp(0.95rem, 0.8vw + 0.2rem, 1.05rem);
  --font-size-sm: 0.875rem;
  --font-size-xs: 0.75rem;
  --font-size-code: 0.85rem;

  /* Line Heights & Measures */
  --line-height-tight: 1.15;
  --line-height-heading: 1.25;
  --line-height-body: 1.68;
  --container-reading: 70ch;
}
```

### 2.3 Containers & Spacing Scale

```css
:root {
  --container-max: 1200px;
  --container-standard: 1140px;
  --container-compact: 900px;
  --container-narrow: 680px;

  --space-section: clamp(3.5rem, 6vw + 1rem, 6.5rem);
  --space-card: clamp(1.25rem, 2.5vw, 2rem);
  --space-gutter: clamp(1rem, 3vw, 2rem);
}
```

---

## 3. Component Standards

### 3.1 Button Hierarchy

1. **Primary Action (`.button.primary`, `.btn-primary`):**
   - Background: `var(--color-accent, #7ed8c4)`
   - Text Color: `#07110f` (Dark, 13.8:1 AAA contrast)
   - Font Weight: `700`
   - Hover: `background: #9bd8cf; transform: translateY(-1px);`
2. **Secondary Action (`.button.secondary`, `.btn-secondary`):**
   - Background: `rgba(126, 216, 196, 0.08)`
   - Border: `1px solid rgba(126, 216, 196, 0.3)`
   - Text Color: `#7ed8c4`
3. **Ghost Action (`.button.ghost`, `.btn-ghost`):**
   - Background: `var(--color-surface, rgba(255, 255, 255, 0.035))`
   - Border: `1px solid var(--color-border, rgba(246, 241, 232, 0.12))`
   - Text Color: `#f6f1e8`
4. **Touch Target Standard:**
   - Minimum height: `44px` (`--touch-target-min`) across all viewports.

### 3.2 Status Badges & Pills

Standardized into `.status-pill` with `border-radius: var(--radius-full, 9999px)`, `font-family: var(--font-mono)`, `font-size: 0.72rem`, `letter-spacing: 0.04em`:
- **Active:** `bg: rgba(126,216,196,0.1); color: #7ed8c4; border: 1px solid rgba(126,216,196,0.28);`
- **Completed:** `bg: rgba(16,185,129,0.1); color: #6ee7b7; border: 1px solid rgba(16,185,129,0.25);`
- **Prototype / Research / Validating:** `bg: rgba(126,216,196,0.08); color: #9bd8cf; border: 1px solid rgba(126,216,196,0.22);`
- **Archived / Legacy / Superseded / Paused:** `bg: rgba(120,144,156,0.12); color: #94a3b8; border: 1px solid rgba(120,144,156,0.25);`

### 3.3 Technology Tags (`.tech-tag`, `.card-tech-pill`)

- Font: `JetBrains Mono` (`0.75rem`)
- Background: `rgba(255, 255, 255, 0.04)`
- Border: `1px solid rgba(246, 241, 232, 0.08)`
- Text Color: `#a9b8b1`
- Radius: `4px` (`--radius-sm`)

### 3.4 Project Cards (`ProjectCard.astro`, `FeaturedProjectCard.astro`)

- Surface: `rgba(16, 26, 23, 0.75)` on dark canvas
- Border: `1px solid rgba(246, 241, 232, 0.09)`
- Hover Elevation: `translateY(-2px)` + `border-color: rgba(126, 216, 196, 0.35)` + `box-shadow: 0 16px 40px rgba(0,0,0,0.35)`
- Header: Eyebrow classification + Status badge pill
- Content: Role line → Tech tags → Title → Summary description → Action buttons

### 3.5 Lab Workbench Cards (`LabItemCard.astro`, `LabSection.astro`)

- Surface: `rgba(16, 26, 23, 0.75)`
- Border: `1px solid rgba(246, 241, 232, 0.09)`
- Question Block: `background: rgba(255, 255, 255, 0.03); border-left: 2px solid #7ed8c4; color: #f6f1e8;`
- Title Hover: `color: #7ed8c4;`
- Footer Action: `color: #7ed8c4; font-semibold;`

### 3.6 Footer (`Footer.astro`)

- Background: `rgba(7, 17, 15, 0.95)` with backdrop blur `12px`
- Border Top: `1px solid rgba(246, 241, 232, 0.12)`
- 4-Column Grid: Brand statement + Platform navigation + Ecosystem & Index + Connect channels
- Copyright & Back to top trigger

---

## 4. Motion & Accessibility Invariants

1. **Transitions:** Standardized to `120ms` (fast) and `220ms` (normal) using `cubic-bezier(0.2, 0, 0, 1)`.
2. **Reduced Motion:** Full support for `prefers-reduced-motion: reduce` disabling animations, translations, and marquee loops.
3. **Keyboard Focus:** Visible 2px mint outline (`outline: 2px solid #7ed8c4; outline-offset: 2px;`) across all interactive elements.
4. **Touch Targets:** Minimum `44px` on all mobile and desktop controls.
