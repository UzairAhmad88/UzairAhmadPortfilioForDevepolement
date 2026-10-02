# Case Study Architecture & Depth Guidelines

This document establishes the editorial standards, section hierarchy, and depth criteria for engineering case studies.

---

## 1. Case Study Anatomy (Progressive Disclosure)

Every comprehensive case study is structured to support both quick executive scanning and deep technical review:

```
┌────────────────────────────────────────────────────────┐
│ LEVEL 1: Quick Executive Scan                          │
│ • Eyebrow, Title, Status Badge, High-Impact Summary    │
│ • Meta Strip: Role, Timeline, Team Context, Tech Tags   │
│ • GitHub / Live Demo CTAs                              │
├────────────────────────────────────────────────────────┤
│ LEVEL 2: Technical Overview & Problem Context          │
│ • 01 Executive Overview                                │
│ • 02 Context & Motivation                              │
│ • 03 Core Problem Statement                            │
│ • 04 Project Objectives                                │
├────────────────────────────────────────────────────────┤
│ LEVEL 3: Deep Engineering Architecture                 │
│ • 05 Engineering Approach                              │
│ • 06 System Architecture Topology (Diagram + Notes)    │
│ • 07 Implementation Highlights                         │
│ • 08 Technical Decisions & Explicit Trade-offs         │
│ • 09 Challenges & Solutions                            │
├────────────────────────────────────────────────────────┤
│ LEVEL 4: Verification, Retrospective & Next Steps      │
│ • 10 Verifiable Results & Current State                │
│ • 11 Known Limitations                                 │
│ • 12 Lessons Learned & Retrospective                   │
│ • 13 Future Directions                                 │
│ • Related Work & Contextual Contact Banner             │
└────────────────────────────────────────────────────────┘
```

---

## 2. When to Create a Full Case Study vs Compact Entry

| Criteria | Compact Entry (Level C) | Full Case Study (Level A / B) |
|---|---|---|
| **Architecture Depth** | Single layer or straightforward script. | Multi-tier pipeline, API layer, or state machine graph. |
| **Engineering Trade-offs** | Standard CRUD implementation. | Non-trivial design decisions with deliberate sacrifices. |
| **Mathematical / AI Modeling**| Not applicable. | Neural architectures, statistical moment calculations, agent workflows. |
| **Documentation Depth** | Basic README. | Full technical documentation, notebooks, and architecture diagrams. |
