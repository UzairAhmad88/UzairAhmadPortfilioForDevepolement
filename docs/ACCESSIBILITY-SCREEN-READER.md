# Screen Reader Optimization & Assistive Technology Strategy

## 1. Assistive Technology Strategy
The screen reader experience is designed as an editorial, structured document without noisy or redundant announcements.

### Screen Reader Support Matrix
- **NVDA (Windows):** Full support for landmark navigation, heading hierarchy (H key), form fields (F key), and live regions.
- **JAWS (Windows):** Full structural validation across HTML5 semantic elements and ARIA states.
- **VoiceOver (macOS / iOS):** Rotor navigation supported across Landmarks, Headings, Links, and Form Controls.
- **Android TalkBack:** Accessible tap targets, sequential swipe traversal, and announced toggle states.

---

## 2. Accessible Naming & Icon Discipline
- **Icon-Only Controls:** Buttons containing only SVG icons (Theme Toggle, Hamburger Menu, Copy Buttons) have explicit `aria-label` attributes (e.g. `aria-label="Toggle visual color theme"`).
- **Decorative Icons:** Purely visual icons inside links or cards feature `aria-hidden="true"` to prevent redundant "bullet / chevron / icon" announcements.
- **External Links:** Links that navigate to new tabs or external repos include accessible context or title descriptions without cluttering the main reading stream.

---

## 3. Dynamic Live Regions (`aria-live`)
- Restrained application of `aria-live="polite"` on search result counts and form validation summaries.
- No intrusive `aria-live="assertive"` announcements that interrupt user reading flow.
- Filter changes in Discovery update an accessible status readout (`Showing X of Y items matching filters`).
