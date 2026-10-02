# ADR-004: Modular Vanilla CSS Architecture

## Status
Accepted

## Context
Phase 01 explicitly mandates preserving the visual output, colors, typography, spacing, and animations without redesigning the website or adding unnecessary CSS utility frameworks like Tailwind unless requested.

## Decision
Modularize the existing `styles.css` into a structured CSS architecture:
- `src/styles/variables.css`: Design tokens, colors, custom properties, typography variables.
- `src/styles/utilities.css`: Layout containers, buttons, skip links, accessibility helpers, badge styles.
- `src/styles/global.css`: Reset, keyframe animations, typography rules, reduced-motion queries.
- Component-scoped CSS in Astro components for localized card and layout styles.

## Reasons
1. **Preserves 100% Visual Fidelity**: Exactly matches the original design without visual regressions.
2. **Zero Runtime / Compiler Overhead**: Vanilla CSS with native CSS variables and scoped styles.
3. **Clean Foundation for Phase 02**: Clear separation makes future design system upgrades straightforward and safe.

## Consequences
- Clean organization without bloated CSS bundles or external framework dependencies.
