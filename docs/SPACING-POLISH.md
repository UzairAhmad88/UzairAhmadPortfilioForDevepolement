# Spacing Polish & Vertical Rhythm

## 1. 4px Spacing Grid System

All structural spacing derives strictly from a 4px base grid system:

| Token | CSS Value | Pixel Equivalent | Typical Usage Context |
| :--- | :--- | :--- | :--- |
| `--space-1` | `0.25rem` | 4px | Micro-spacing, pill badge padding, dot margins |
| `--space-2` | `0.5rem` | 8px | Button gaps, list item gaps, icon-to-text spacing |
| `--space-3` | `0.75rem` | 12px | Compact padding, meta row gaps |
| `--space-4` | `1rem` | 16px | Standard padding, mobile gutter |
| `--space-5` | `1.25rem` | 20px | Card item separation, table padding |
| `--space-6` | `1.5rem` | 24px | Grid gap, default card padding |
| `--space-8` | `2rem` | 32px | Section subtitle margin, tablet gutter |
| `--space-10` | `2.5rem` | 40px | Section header bottom margin |
| `--space-12` | `3rem` | 48px | Section separation on mobile |
| `--space-16` | `4rem` | 64px | Section separation on tablet |
| `--space-20` | `5rem` | 80px | Major section padding on desktop |
| `--space-24` | `6rem` | 96px | Hero top padding |
| `--space-32` | `8rem` | 128px | Maximum container spacing on 4K |

---

## 2. Fluid Macro Spacing

To ensure continuous, harmonious vertical rhythm across all viewports, macro layout dimensions use fluid clamps:

```css
/* Inter-section vertical rhythm */
--space-section: clamp(3.5rem, 6vw + 1rem, 6.5rem);

/* Viewport side margins / gutters */
--space-gutter: clamp(1rem, 3vw, 2rem);

/* Internal card padding */
--space-card: clamp(1.25rem, 2.5vw, 2rem);
```

---

## 3. Container Consistency & Alignment Axes

Layout containers are classified into 4 standard widths:

1. **`--container-max: 1200px` (`.section-shell`)**:
   - Used for main grid sections (Work, Lab, Research, Hero).
   - Safe area insets integrated: `width: min(var(--container-max, 1200px), calc(100% - max(1.5rem, calc(env(safe-area-inset-left) + env(safe-area-inset-right) + 1rem))))`.
2. **`--container-compact: 900px` (`.section-shell-compact`)**:
   - Used for structured inquiry forms, technology index, and about narrative.
3. **`--container-narrow: 680px` (`.section-shell-narrow`)**:
   - Used for engineering note reading views and single-column editorial prose.
4. **`--container-reading: 70ch`**:
   - Max width applied to paragraphs to prevent excessive line lengths.

---

## 4. Vertical Rhythm Verification
- **Header to Content**: Header is sticky (`top: 0.6rem`) with `0.6rem` margin, seamlessly hovering over content without overlapping hero copy.
- **Section Dividers**: Subtle 1px dividers (`.editorial-divider`) use `var(--color-border-subtle)` with `--space-8` vertical margin.
- **Footer Spacing**: Footer top padding (`clamp(3rem, 5vw, 4.5rem)`) matches section rhythm.
