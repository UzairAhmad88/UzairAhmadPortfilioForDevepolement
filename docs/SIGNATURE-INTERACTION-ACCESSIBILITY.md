# ♿ Signature Interaction Accessibility (WCAG 2.2 AA)

## Accessibility Audit & Standards Alignment

### 1. WAI-ARIA Semantic Roles
- Container tablist is assigned `role="tablist"` with `aria-label="Engineering Perspective Lenses"`.
- Each button is assigned `role="tab"` with `id`, `aria-controls="[uniqueId]-panel-[lensId]"`, and dynamic `aria-selected="true|false"`.
- Each panel is assigned `role="tabpanel"` with `id` and `aria-labelledby="[uniqueId]-tab-[lensId]"`.
- Perspective banner has `aria-live="polite"` to announce context queries to assistive technologies.

### 2. Keyboard Navigation Contract
- **Tab:** Focuses the currently active tab inside the tablist, then tabs into interactive controls inside the panel.
- **ArrowRight / ArrowDown:** Moves focus and activates the next perspective lens. Wraps to start when reaching the end.
- **ArrowLeft / ArrowUp:** Moves focus and activates the previous perspective lens. Wraps to end when reaching the start.
- **Home:** Immediately jumps to and activates the first lens (*Architecture & Topology*).
- **End:** Immediately jumps to and activates the last lens (*Connected Knowledge*).

### 3. Screen Reader Representation & Non-Visual Access
- All structured data (tables, stage flows, code contracts, trade-offs) is authored in semantic HTML (`<table>`, `<ol>`, `<ul>`, `<pre><code>`).
- No critical information is hidden behind mouse hover or canvas pixels.

### 4. Touch Targets & Responsive Sizing
- Tab buttons provide a minimum touch target area (>44x44px equivalent spacing) for comfortable touch operation across all mobile viewports (320px–430px).
