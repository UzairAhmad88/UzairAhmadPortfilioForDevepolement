# PROJECT VISUALIZATION VISUAL SPECIFICATION (PHASE 07)
## Editorial Design System, Node Geometry & Responsive Adaptation

> **Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
> **Status:** Active / Production Specification  
> **Phase:** 07 — Project Visualization System  

---

## 1. DESIGN SYSTEM INTEGRATION

Project visualizations adhere to the core Phase 02 tokens:
- **Canvas Shell:** `rgba(16, 26, 23, 0.85)` with `1px solid rgba(126, 216, 196, 0.2)` border and `0.875rem` rounded corners.
- **Node Cards:** `rgba(7, 17, 15, 0.75)` with subtle `3px` role-indicator left borders.
- **Connectors:** Inline SVG directional arrows (`var(--color-accent, #7ed8c4)` at `0.6` opacity).
- **Typography:** Monospace indices and badges (`var(--font-mono)`), high-contrast bold titles (`var(--font-sans)`).

---

## 2. RESPONSIVE VISUAL FLOW STRATEGY

### Desktop (> 820px): Horizontal Topology
```text
┌────────────────┐        ┌────────────────┐        ┌────────────────┐
│  01 / INPUT    │  ───►  │  02 / PROCESS  │  ───►  │  03 / OUTPUT   │
│  Market Data   │        │  Feature Store │        │  Risk Engine   │
└────────────────┘        └────────────────┘        └────────────────┘
```

### Mobile (< 820px): Vertical Stack Flow
```text
┌────────────────┐
│  01 / INPUT    │
│  Market Data   │
└────────────────┘
        │
        ▼
┌────────────────┐
│  02 / PROCESS  │
│  Feature Store │
└────────────────┘
        │
        ▼
┌────────────────┐
│  03 / OUTPUT   │
│  Risk Engine   │
└────────────────┘
```
This guarantees zero horizontal clipping, zero tiny unreadable text, and zero awkward zooming on mobile devices.

---

## 3. COLOR & BORDER ROLE MAPPING

| Role | Left Accent Border | Background Tint | Meaning |
| :--- | :--- | :--- | :--- |
| `input` | `#83968e` | Subtle Sage | Ingestion feed, raw user query, external data |
| `process` / `router` | `#7ed8c4` | Mint Teal | Transformation, mathematical normalizer, state router |
| `model` | `#bda6ff` | Soft Lavender | Deep learning neural net, LLM worker agent, GMM cluster |
| `guardrail` | `#6ee7b7` | Emerald | Schema verification, contract guard, auth token gateway |
| `storage` | `#7ed8c4` | Dark Sage | Relational PostgreSQL, EMR tables, local sales ledger |
| `output` | `#d2a071` | Warm Clay | Signal evaluator, decision briefing UI, risk throttle |
