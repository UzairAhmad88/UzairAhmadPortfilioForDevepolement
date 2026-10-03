# 🖱️ Signature Interaction UX & User Journeys

## UX Philosophy: Multi-Perspective Inspection
The UX transforms the portfolio from a standard one-directional case study reader into an interactive engineering inspection station.

---

## User Flows

### Journey 1: Homepage Discovery
1. Visitor lands on the homepage (`/`).
2. Scrolls past *Currently* and *Selected Work* to the **Signature Interaction Section**.
3. Sees the featured Deep Learning & Quantitative System.
4. Explores the 6 lenses by clicking or using arrow keys.
5. Can switch the inspected project via the dropdown selector to instantly inspect other systems (e.g. Multi-Agent Prospect Intelligence or CuraSphere HMS).
6. Reads exact architectural contracts and trade-offs.

### Journey 2: Case Study Deep-Dive
1. Visitor navigates to `/work/deep-learning-stock-return-prediction`.
2. Sees the embedded **Engineering Lens Navigator** right beneath the Project DNA header.
3. Clicks **"Stage 02 // Problem & Constraints"** to understand mathematical stationarity bounds.
4. The URL silently updates to `/work/deep-learning-stock-return-prediction?lens=constraints`.
5. Clicks **"Stage 06 // Connected Knowledge"** to find the precursor research paper `/research/signal-research` and the standalone CLI prototype `/lab/fractional-diff-cli`.

### Journey 3: Deep-Link Direct Access
1. Visitor clicks a link shared on GitHub or Twitter with `?lens=tradeoffs`.
2. Page loads directly with the *Trade-offs & Lessons* lens active, revealing key architectural sacrifices and postmortems immediately.

---

## State Transitions & States
- **Idle:** First lens (`architecture`) highlighted with blue outline.
- **Hover:** Subtle contrast shift on unselected tabs (`#21262d`).
- **Active / Selected:** Active tab highlighted with blue border (`#58a6ff`) and focus ring.
- **Focus-Visible:** Accessible 2px focus outline with 2px offset for keyboard navigation.
- **Reduced-Motion Mode:** Transitions and pulse animations disabled for vestibular safety.
