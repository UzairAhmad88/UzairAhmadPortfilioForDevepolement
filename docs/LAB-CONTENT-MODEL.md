# Lab Content Model & Narrative Specification

**Project:** Personal Engineering & Research Platform — Lab Subsystem  
**Reference:** `src/types/lab.ts` & `src/data/lab.ts`  
**Status:** Canonical Standard  

---

## 1. The 11-Stage Narrative Model

The Lab content architecture is organized around 11 sequential, evidence-grounded stages:

```
01. QUESTION        → The specific empirical or architectural unknown being tested.
02. CONTEXT         → Why this question mattered (prior limitations, theoretical tension).
03. INTENT          → The strategic engineering goal (feasibility study vs production path).
04. HYPOTHESIS      → The expected behavior or mathematical conjecture prior to testing.
05. EXPERIMENT      → What was actually configured, simulated, or executed.
06. IMPLEMENTATION  → Key technical decisions, vectorized routines, and code snippets.
07. OBSERVATION     → Unvarnished factual measurements and runtime outputs.
08. RESULT          → Explicit outcome classification (Confirmed, Demonstrated, Partially supported, Exploring).
09. CONCLUSION      → Architectural lessons learned and paradigm changes.
10. LIMITATIONS     → Boundary constraints, sample sizes, and failure modes.
11. NEXT STEP       → Actionable evolutionary path or graduation into production systems.
```

---

## 2. Empty Field Omission Invariant

- If an experiment has no formal hypothesis (e.g. an exploratory tool), **no empty hypothesis card is rendered**.
- If an experiment is in active exploration, **no fabricated conclusion is generated**.
- Sections render strictly on condition of authentic underlying content.
