# Motion Component Guide: Interaction Patterns & Behaviors

## 1. Component Motion Specifications

### Header & Navigation
- **Desktop Links**: Underline animation (`scaleX(0)` → `scaleX(1)`) using `--motion-duration-fast` (`120ms`).
- **Header Background**: Subtle backdrop-filter with `120ms` background and border color shifts on theme change.
- **Mobile Drawer**: Off-canvas translation (`translateX(100%)` → `translateX(0)`) using `--motion-duration-slow` (`350ms`) with `--motion-ease-emphasized`. Backdrop opacity fades in at `220ms`.

### Buttons & CTAs
- **Default State**: Defined background, crisp border.
- **Hover State**: Color/background transition at `120ms`.
- **Active / Pressed**: Subtle `translateY(1px) scale(0.98)` at `50ms` tactile response.
- **Focus-Visible**: Immediate `2px` focus ring without animation lag.

### Cards (Work, Research, Lab, Notes, Timeline)
- **Hover / Focus**: Restrained elevation lift `translateY(-2px)` and border highlight at `220ms` with `--motion-ease-standard`.
- **Actions**: Internal links underline/color shift at `120ms`.

### Signature Interaction (Engineering Lens Navigator)
- **Lens Tab Switch**: Active border highlight and background transition at `120ms`.
- **Topology SVG Nodes**: Stable rendering without perpetual animation loops; pulse glow restrained to subtle `opacity: 0.4 → 1` indicator dot.
- **Payload Panel Switch**: Instantaneous or subtle `120ms` crossfade for immediate data exploration without blocking the user.

### Forms & Input Fields
- **Focus**: Border highlight and outline ring transition at `120ms`.
- **Validation**: Static semantic error/success text and color changes; no aggressive shaking.

### Accordions & Expandable Disclosures
- **Expansion**: CSS Grid `grid-template-rows: 0fr` → `1fr` transition at `220ms` using `--motion-ease-emphasized` for zero layout distortion.
