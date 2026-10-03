# Responsive Baseline & Viewport Audit

**Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
**Audit Objective:** Measure cross-screen fluid layout stability, touch target comfort, and overflow elimination.  

---

## 1. Viewport Testing Matrix

| Device Class | Viewport Resolution | Layout State | Nav Behavior | Touch Target (≥44px) | Horizontal Scroll |
|---|---|---|---|---|---|
| **Compact Mobile** | 320 × 568 (iPhone SE gen 1) | Single column, stacked actions | Off-canvas drawer | Pass | **Zero Overflow** |
| **Standard Mobile** | 375 × 812 (iPhone X/12 mini) | Single column, fluid typography | Off-canvas drawer | Pass | **Zero Overflow** |
| **Large Mobile** | 390 × 844 / 414 × 896 | Fluid hero grid, 1-col cards | Off-canvas drawer | Pass | **Zero Overflow** |
| **Max Mobile** | 430 × 932 (iPhone 14/15 Pro Max) | Fluid hero grid, 1-col cards | Off-canvas drawer | Pass | **Zero Overflow** |
| **Small Tablet** | 600 × 800 (Android tablet portrait) | 2-column project grid | Off-canvas drawer | Pass | **Zero Overflow** |
| **Standard Tablet** | 768 × 1024 (iPad portrait) | 2-column project grid | Desktop / Drawer boundary | Pass | **Zero Overflow** |
| **Large Tablet** | 820 × 1180 / 834 × 1194 | 2-column grid, expanded hero | Desktop capsule header | Pass | **Zero Overflow** |
| **Tablet Landscape** | 1024 × 1366 (iPad Pro landscape) | 2-column case studies, 3-col grid | Desktop capsule header | Pass | **Zero Overflow** |
| **Standard Laptop** | 1280 × 800 / 1366 × 768 | 2-column hero, 2-col projects | Desktop capsule header | Pass | **Zero Overflow** |
| **Desktop** | 1440 × 900 / 1536 × 864 | Max width `1200px` container | Desktop capsule header | Pass | **Zero Overflow** |
| **Full HD Desktop** | 1920 × 1080 | Centered layout, max `1200px` | Desktop capsule header | Pass | **Zero Overflow** |
| **QHD & Ultrawide** | 2560 × 1440 / 3440 × 1440 | Centered layout, max `1200px` | Desktop capsule header | Pass | **Zero Overflow** |
| **4K UHD** | 3840 × 2160 | Centered layout, max `1200px` | Desktop capsule header | Pass | **Zero Overflow** |

---

## 2. Key Findings & Baseline Rules
- **Container Max-Width:** Constrained to `1200px` (`--container-max`) centered with `margin: 0 auto`.
- **Fluid Padding:** Implemented with `width: min(var(--container-max, 1200px), calc(100% - max(1.5rem, calc(env(safe-area-inset-left) + env(safe-area-inset-right) + 1rem))));`.
- **Code & Diagrams:** Wrapped with `overflow-x: auto; -webkit-overflow-scrolling: touch;` to prevent preformatted ASCII diagram blowouts.
- **Safe Area Insets:** Applied to mobile header, mobile drawer, and footer.
