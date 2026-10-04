# Motion Truth Audit: Existing Motion Inventory & Refinement Rationale

## 1. Animation Inventory & Rationalization

| Original Animation / Motion | Location | Phase 25 Action | Engineering Rationale |
|---|---|---|---|
| `200ms ease` drawer opacity / `250ms cubic-bezier` drawer slide | `MobileNavDrawer.astro` | **Standardized** | Mapped to `--motion-duration-normal` (`220ms`) and `--motion-duration-slow` (`350ms`) with `--motion-ease-emphasized`. |
| `180ms ease` Header CTA / buttons | `Header.astro` | **Standardized** | Replaced ad-hoc 180ms timing with `--motion-transition-fast` (`120ms`) for crisper user response. |
| `200ms ease` Card hover lift (`-4px`) | `ProjectCard.astro` | **Refined** | Reduced lift to `--motion-distance-sm` (`-2px`) and duration to `--motion-duration-normal` (`220ms`) to eliminate aggressive card jumping. |
| `0.18s ease` Lens tab transition | `EngineeringLensNavigator.astro` | **Standardized** | Mapped to `--motion-transition-fast` (`120ms`) for snappy engineering inspection. |
| Continuous 2s pulse glow dot | `EngineeringLensNavigator.astro` | **Retained & Hardened** | Retained subtle 2s pulse dot for active lens indicator, strictly disabled under `prefers-reduced-motion: reduce`. |
| Ad-hoc hover transforms | Various cards | **Centralized** | Replaced with `.motion-lift` and `.motion-pressable` utility classes. |

---

## 2. Eliminated Unnecessary Motion

- Removed aggressive multi-directional card transforms.
- Eliminated all potential scroll-jacking or forced scroll interception scripts.
- Removed dependency risks on third-party runtime animation engines.
