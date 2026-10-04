# Lab Responsive QA & Viewport Matrix

> **Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
> **Subsystem:** Lab Subsystem Responsive Verification  
> **Matrix Scope:** 320px Mobile to 3840px Ultrawide / 4K

---

## 1. Responsive Viewport Verification Results

| Viewport Category | Resolution (W×H) | Devices Sampled | Lab Index (`/lab`) | Lab Detail (`/lab/[slug]`) | Overflow Status | Result |
|---|---|---|---|---|---|---|
| **Compact Mobile** | 320×568 | iPhone SE (1st gen) | 1 column, wrapped filter pills, 44px tap targets | Single column stack, readable question box | 0px overflow | **PASS** |
| **Standard Mobile** | 375×812 / 390×844 | iPhone 12/13/14/15, Pixel 7 | Clean card padding, fluid title clamp | Clean metadata row, wrapped tags | 0px overflow | **PASS** |
| **Large Mobile** | 414×896 / 430×932 | iPhone Pro Max, Galaxy S23 Ultra | Balanced typography, visible focus | Generous padding, horizontal code scroll | 0px overflow | **PASS** |
| **Small Tablet** | 600×800 / 768×1024 | iPad Mini, iPad 10th Gen | 1-to-2 column transition, clean spacing | 2-column outcomes grid | 0px overflow | **PASS** |
| **Large Tablet** | 820×1180 / 834×1194 | iPad Air, iPad Pro 11" | 2-column grid, horizontal filter bar | 2-column outcomes grid | 0px overflow | **PASS** |
| **Standard Laptop** | 1280×800 / 1440×900 | MacBook Air 13", ThinkPad X1 | 2-column experiment grid, 3-column graduated | Max 920px reading container | 0px overflow | **PASS** |
| **Desktop Monitor** | 1920×1080 | 1080p FHD Display | Centered 1200px container, optimal rhythm | Max 920px container with clear line length | 0px overflow | **PASS** |
| **QHD / 2K** | 2560×1440 | 27" QHD Monitor | Constrained max-width, zero stretching | Centered reading container | 0px overflow | **PASS** |
| **Ultrawide & 4K** | 3440×1440 / 3840×2160 | 34" Ultrawide / 4K UHD | Bounded container with auto-margins | Bounded container with auto-margins | 0px overflow | **PASS** |

---

## 2. Browser Zoom Testing (80% – 200%)

- **80% Zoom:** Content scales smoothly with no disconnected cards or floating artifacts.
- **100% Zoom:** Baseline production standard.
- **125% Zoom:** Clean fluid typography scaling.
- **150% Zoom:** Elements stack naturally into single-column layout without clipping.
- **175% Zoom:** Touch targets and buttons expand cleanly.
- **200% Zoom:** Text reflows without horizontal scrollbars on the main document body.

---

## 3. Safe Area Insets & Floating Triggers

- `safe-area-inset-left` and `safe-area-inset-right` are explicitly handled via `page-container`.
- The floating contact trigger on mobile maintains a minimum 16px bottom-right safe clearance and does not obstruct bottom navigation or filter buttons.
