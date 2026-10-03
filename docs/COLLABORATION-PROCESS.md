# Collaboration Process & Engineering Lifecycle (Phase 21)

## 1. 6-Stage Engineering Process

Derived directly from Phase 08 (*How I Build*), the collaboration process follows a disciplined, 6-stage lifecycle prioritizing diagnosis, explicit typing, isolated experimentation, modular build, and empirical validation:

```text
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│ 01 Understand│ ──> │  02 Define   │ ──> │  03 Explore  │
│  Context &   │     │  Schemas &   │     │  Isolated    │
│ Constraints  │     │  Boundaries  │     │  Prototypes  │
└──────────────┘     └──────────────┘     └──────────────┘
                                                 │
                                                 ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  06 Iterate  │ <── │ 05 Validate  │ <── │   04 Build   │
│  Telemetry & │     │  Walk-Forward│     │  Modular &   │
│  Refinement  │     │  Stress-Tests│     │  Type-Safe   │
└──────────────┘     └──────────────┘     └──────────────┘
```

---

## 2. Stage Breakdown

### Stage 01: Understand
- **Operational Focus:** Deep inquiry into the business or technical context, operational constraints, existing codebases, and domain invariants.
- **Core Principle:** *Diagnosis precedes prescription. Every system is constrained by its operational context.*
- **Outcome:** Documented constraint matrix and architectural requirements.

### Stage 02: Define
- **Operational Focus:** Formalizing explicit data schemas, API contracts, success metrics, and architectural boundaries before writing production code.
- **Core Principle:** *Strong typing and explicit boundaries prevent costly downstream rework.*
- **Outcome:** Typed Pydantic/TypeScript interfaces, database entity-relationship diagrams, and API specifications.

### Stage 03: Explore
- **Operational Focus:** Prototyping critical algorithmic mechanics, evaluating stationarity/latency trade-offs, and testing edge hypotheses in isolation.
- **Core Principle:** *Isolated experiments de-risk core assumptions before committing to full build cycles.*
- **Outcome:** Standalone CLI scripts, algorithmic benchmark logs, and feasibility reports.

### Stage 04: Build
- **Operational Focus:** Engineering clean, modular, and type-safe software with comprehensive error boundaries, asynchronous safety, and documented interfaces.
- **Core Principle:** *Production software must be maintainable, legible, and verifiable by other engineers.*
- **Outcome:** Production codebase with clean Git commit history and modular structure.

### Stage 05: Validate
- **Operational Focus:** Rigorous testing spanning walk-forward validation, deterministic replay, accessibility audits, and cross-browser responsive checks.
- **Core Principle:** *Verifiable evidence over assumptions. Systems must pass empirical stress tests.*
- **Outcome:** Automated test suites, stationarity test logs (ADF p-values), and accessibility compliance audits.

### Stage 06: Iterate
- **Operational Focus:** Refining and optimizing based on observable telemetry, user feedback, and measurable performance benchmarks.
- **Core Principle:** *Software evolves through measured observations and continuous hardening.*
- **Outcome:** Production release, performance telemetry report, and documentation handoff.
