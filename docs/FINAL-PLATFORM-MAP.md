# Final Platform System Map & Information Architecture

**Project:** Personal Developer Portfolio / Personal Engineering & Research Platform  
**Phase:** 35 — Final Identity Review & Platform Completion Audit  
**Total Routes:** 60 Static Pages Generated in `dist/`  

---

## 1. Unified Information Architecture Map

```text
                               ┌────────────────────────────────┐
                               │         LIVING HOMEPAGE        │
                               │              (/)               │
                               └───────────────┬────────────────┘
                                               │
             ┌─────────────────────────────────┼─────────────────────────────────┐
             │                                 │                                 │
             ▼                                 ▼                                 ▼
   ┌──────────────────┐              ┌──────────────────┐              ┌──────────────────┐
   │    WORK INDEX    │              │  RESEARCH INDEX  │              │    LAB INDEX     │
   │     (/work)      │              │   (/research)    │              │     (/lab)       │
   └─────────┬────────┘              └────────┬─────────┘              └────────┬─────────┘
             │                                │                                 │
             ├─ Stock Prediction              ├─ Signal Research (FracDiff)     ├─ Fractional Diff CLI
             ├─ Multi-Agent Prospect AI       ├─ Market Regime Stability        ├─ SSE Orderbook Depth
             ├─ CuraSphere HMS                └─ Deterministic State Graphs     ├─ GMM Stability Probe
             ├─ Market Regime Engine                                            ├─ Pydantic State Machine
             ├─ Restaurant POS                                                  ├─ Subgrid Alignment
             ├─ Hayatabad Gym                                                   └─ Heston Calibration
             ├─ Online Complaints
             └─ Event Management
             │                                │                                 │
             └────────────────────────────────┼─────────────────────────────────┘
                                              │
                                              ▼
                               ┌────────────────────────────────┐
                               │       ENGINEERING NOTES        │
                               │            (/notes)            │
                               └──────────────┬─────────────────┘
                                              │
                                              ▼
                               ┌────────────────────────────────┐
                               │      TECHNOLOGY ECOSYSTEM      │
                               │         (/technology)          │
                               │        (19 Stack Pages)        │
                               └──────────────┬─────────────────┘
                                              │
                                              ▼
                               ┌────────────────────────────────┐
                               │          HOW I BUILD           │
                               │         (/how-i-build)         │
                               └──────────────┬─────────────────┘
                                              │
                                              ▼
                               ┌────────────────────────────────┐
                               │        KNOWLEDGE ENGINE        │
                               │   (/knowledge & /knowledge-g)  │
                               └──────────────┬─────────────────┘
                                              │
                                              ▼
                               ┌────────────────────────────────┐
                               │        DISCOVERY SEARCH        │
                               │          (/discover)           │
                               └──────────────┬─────────────────┘
                                              │
             ┌────────────────────────────────┼────────────────────────────────┐
             │                                │                                │
             ▼                                ▼                                ▼
   ┌──────────────────┐              ┌──────────────────┐             ┌──────────────────┐
   │     TIMELINE     │              │     ARCHIVE      │             │      ABOUT       │
   │   (/timeline)    │              │    (/archive)    │             │     (/about)     │
   └──────────────────┘              └──────────────────┘             └────────┬─────────┘
                                                                               │
                                                                               ▼
                                                                      ┌──────────────────┐
                                                                      │   COLLABORATE    │
                                                                      │  (/collaborate)  │
                                                                      └────────┬─────────┘
                                                                               │
                                                                               ▼
                                                                      ┌──────────────────┐
                                                                      │     CONTACT      │
                                                                      │    (/contact)    │
                                                                      └──────────────────┘
```

---

## 2. Cross-Subsystem Integrations & Bridges

- **6-Lens Signature Navigator:** Accessible across all 8 project case studies, breaking down each system through Overview, Architecture, Constraints, Stack, Evidence, and Lessons.
- **Bi-Directional Technology Mapping:** Every canonical technology connects directly to the specific projects, research dossiers, lab experiments, and engineering notes where it is utilized.
- **GitHub & Vercel Evidence Layer:** Real public repository links and live deployment evidence connected directly to the Case Studies and Lab Workbenches.
- **Deterministic Chronological Timeline:** Synthesizes projects, research milestones, and educational achievements into an unbroken chronological sequence.
