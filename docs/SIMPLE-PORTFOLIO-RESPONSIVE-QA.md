# Simple Portfolio Responsive QA Report

**Testing Viewports:**
- Mobile Small: 320px, 360px, 375px
- Mobile Large: 390px, 414px, 430px
- Tablet: 768px, 1024px
- Desktop: 1280px, 1440px, 1920px

---

## 1. Viewport Matrix & Test Results

| Viewport Width | Navigation Behavior | Card & Grid Layout | Horizontal Overflow | Result |
| :--- | :--- | :--- | :--- | :--- |
| **320px (iPhone SE)** | Collapses to hamburger; full-screen accessible drawer | 1-column vertical stack; images adapt with `width: 100%` | **0px (No overflow)** | **PASSED** |
| **375px (iPhone 13 mini)** | Hamburger menu; 48px touch targets | 1-column stack; tags wrap smoothly without clipping | **0px (No overflow)** | **PASSED** |
| **430px (iPhone 14 Pro Max)** | Hamburger menu; comfortable touch spacing | 1-column stack; clean typography scale | **0px (No overflow)** | **PASSED** |
| **768px (iPad Mini)** | Inline desktop links wrap or collapse cleanly | 2-column project grid; comfortable line-length | **0px (No overflow)** | **PASSED** |
| **1024px (iPad Pro)** | Full horizontal header with theme toggle & GitHub | 2-column project grid; sidebar splits cleanly on details | **0px (No overflow)** | **PASSED** |
| **1440px (Desktop)** | Centered container max `1200px` | 2-column featured cards, 2.2fr / 1fr detail layout | **0px (No overflow)** | **PASSED** |
| **1920px (FHD Ultrawide)** | Centered container max `1200px` with generous gutters | Balanced whitespace; zero layout distortion | **0px (No overflow)** | **PASSED** |

---

## 2. Touch & Tap Target Verification

- All navigation items, filter buttons, project links, and form inputs satisfy the minimum **44x44px** touch target standard.
- Form inputs feature `font-size: 1rem` (16px) to eliminate unwanted automatic zoom on iOS Safari.
