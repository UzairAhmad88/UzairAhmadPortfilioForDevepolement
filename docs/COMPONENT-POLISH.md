# Component Polish & UI System Inventory

## 1. Button System Refinement

All buttons share a unified structural specification in `src/styles/utilities.css`:
- **Minimum Height**: `44px` (`--touch-target-min`)
- **Border Radius**: `var(--radius-md, 8px)`
- **Typography**: `var(--font-sans)`, `font-weight: 700`, `font-size: 0.875rem`
- **Focus Ring**: `2px solid var(--color-accent)` with `2px` offset

| Button Variant | Background | Border | Text Color | Hover Effect |
| :--- | :--- | :--- | :--- | :--- |
| **`.button.primary`** | `var(--color-accent)` | `var(--color-accent)` | `#07110f` (Dark) / `#ffffff` (Light) | `translateY(-1px)`, subtle glow |
| **`.button.secondary`** | `rgba(126, 216, 196, 0.08)` | `rgba(126, 216, 196, 0.3)` | `var(--color-accent-teal)` | `translateY(-1px)`, background lighten |
| **`.button.ghost`** | `var(--color-surface)` | `var(--color-border)` | `var(--color-text-primary)` | `translateY(-1px)`, border highlight |
| **`.button.link`** | `transparent` | `transparent` | `var(--color-accent)` | `text-decoration: underline` |

---

## 2. Card Components Polish

Every card implements standardized elevation and border behavior:
- **`ProjectCard`**: Subtle surface elevation (`var(--color-surface-card)` / `#ffffff`), `--radius-lg` (12px), hover lift (`-2px`), and Project DNA header strip.
- **`FeaturedProjectCard`**: Elevated gradient surface, flagship badge strip, dual-action row (Case study + GitHub source).
- **`ResearchInquiryCard`**: Technical question quote box, domain badges, methods pill list, and repository artifact links.
- **`EngineeringNoteCard`**: Topic tag + note type badge (Debugging, Architecture, Technical, Decision, Implementation, UX, Learning), reading time indicator, and published timestamp.
- **`LabItemCard`**: State badge (Actual implementation, Working prototype, Concept, Planned experiment), outcome chip, and workbench inspection link.

---

## 3. Status Badges & Taxonomy

Centralized status pill taxonomy (`.status-pill`):

```css
.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-full, 9999px);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
```

- **Active**: Teal tint (`#7ed8c4` on dark / `#0d7663` on light)
- **Completed**: Emerald tint (`#6ee7b7` on dark / `#059669` on light)
- **Academic**: Lavender tint (`#d8b4fe` on dark / `#6348a5` on light)
- **Prototype / Research**: Clay tint (`#d2a071` on dark / `#a0642d` on light)
- **Archived / Legacy / Superseded**: Slate muted tint (`#94a3b8` on dark / `#465751` on light)

---

## 4. Form & Input Polish

- **Inputs, Selects, Textareas**:
  - `font-family: var(--font-sans)`
  - `font-size: var(--font-size-sm)`
  - `background-color: var(--color-surface)`
  - `border: 1px solid var(--color-border)`
  - `border-radius: var(--radius-md, 8px)`
  - `padding: 0.65rem 0.9rem`
  - Focus Ring: `outline: 2px solid var(--color-accent)` with `2px` offset.
- **Validation Alerts**: Clean alert boxes with icon indicator, bold title, and contextual guidance.

---

## 5. Table Polish

- Standard `.table-wrapper` with horizontal scroll indicator.
- Uppercase monospace headers (`th`) with `var(--letter-spacing-meta)`.
- Subtle 1px dividers between rows using `var(--color-border-subtle)`.
- Accessible hover row highlights.
