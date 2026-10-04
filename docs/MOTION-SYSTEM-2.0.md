# Motion System 2.0: Restrained, Human-Centered Interaction Architecture

## 1. Executive Vision & Philosophy

**Core Principle: MOTION = INFORMATION**

Motion on the Personal Engineering & Research Platform exists solely to explain:
1. **State Change**: Clarifying when an element changes its active, expanded, or loading status.
2. **Hierarchy**: Drawing subtle focus to primary interactive targets without overwhelming content.
3. **Continuity**: Preserving spatial orientation during navigation, drawer opening, or lens switching.
4. **Feedback**: Offering tactile physical confirmation of clicks, taps, and keyboard activations.
5. **Orientation**: Revealing relationships between research, code evidence, and case studies.

The system intentionally avoids decorative noise:
- ❌ No cursor trails or glowing particle fields.
- ❌ No continuous background loops or animated canvas grids.
- ❌ No text scrambling or typewriter effects.
- ❌ No scroll-jacking or forced scroll choreography.

---

## 2. Motion Hierarchy

| Level | Name | Purpose | Target Properties | Duration |
|---|---|---|---|---|
| **Level 0** | **Static** | Dense technical content, code blocks, tables, math formulations, research telemetry. | None (`transition: none;`) | `0ms` |
| **Level 1** | **Micro-Interaction** | Buttons, links, tags, toggles, form inputs, icon state shifts. | `color`, `background-color`, `border-color`, `box-shadow`, `transform` | `50ms – 120ms` |
| **Level 2** | **Component Transition** | Project cards, accordion disclosures, filter updates, navigation drawers, modals. | `transform`, `opacity`, `grid-template-rows` | `220ms – 350ms` |
| **Level 3** | **Page / System Transition** | Route changes, section anchors, Engineering Lens Navigator switches. | `opacity`, `transform` | `350ms – 480ms` |

---

## 3. Architecture & Implementation

Motion System 2.0 is implemented with zero external animation dependencies using standard CSS custom properties and hardware-accelerated transforms:

- **Tokens**: Centralized in [`src/styles/variables.css`](file:///d:/web/protfolio/src/styles/variables.css) with semantic `--motion-*` custom properties.
- **Primitives & Hierarchy**: Encapsulated in [`src/styles/motion.css`](file:///d:/web/protfolio/src/styles/motion.css).
- **Reduced Motion**: Universal `@media (prefers-reduced-motion: reduce)` override collapsing durations and disabling motion while preserving instant state feedback.
