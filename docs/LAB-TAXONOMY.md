# Lab Taxonomy & Controlled Vocabulary

**Uzair Ahmad — Personal Engineering & Research Platform**  
**Phase 12 Specification**

---

## 1. Controlled Lab Types

| Lab Type | Identifier | Definition & Scope | Example |
| :--- | :--- | :--- | :--- |
| **Algorithm Experiment** | `Algorithm Experiment` | Mathematical or numerical testing of algorithmic transforms and complexity. | Fractional order differentiation ($d \in [0, 1]$) with fixed-window truncation. |
| **Prototype** | `Prototype` | Functional system implementation testing architecture or protocol viability. | Async Server-Sent Events (SSE) market depth broadcasting server. |
| **Quant Experiment** | `Quant Experiment` | Quantitative statistical modeling, state stability, and pricing explorations. | Evaluating lookback window sensitivity in variance-ordered GMM regime models. |
| **AI/ML Experiment** | `AI/ML Experiment` | Artificial intelligence workflows, agent orchestration, and guardrails. | Directed state graph with Pydantic runtime validation barriers. |
| **UI Experiment** | `UI Experiment` | Modern CSS/JS layout primitives, rendering performance, and typography. | Zero-JS multi-row card alignment via CSS Subgrid. |
| **Technical Exploration** | `Technical Exploration` | Early-stage investigation into mathematical feasibility or API capabilities. | Heston stochastic volatility calibration via Fast Fourier Transform. |
| **Tool** | `Tool` | Standalone CLI or developer utility solving a specific engineering pain point. | CLI feature stationarizer emitting CSV and diagnostic plots. |
| **Sandbox** | `Sandbox` | Isolated computational testbed for rapid prototyping. | Multi-agent execution simulator. |

---

## 2. Controlled Lab Lifecycle Statuses

Lifecycle describes the current **activity state** of the experiment, not its quality:

- `Idea` — Conceptual problem definition; implementation has not commenced.
- `Exploring` — Active mathematical derivation, exploratory notebook analysis, or API testing.
- `Active` — In active iterative development on the engineering workbench.
- `Prototype` — Working technical prototype available and testable.
- `Validating` — Empirical testing, parameter sweep, or stability benchmarking underway.
- `Completed` — Experiment has concluded and produced durable empirical takeaways.
- `Paused` — Exploration temporarily set aside due to other engineering priorities.
- `Archived` — Historical exploration preserved for architectural reference.
- `Abandoned` — Explored idea invalidated by empirical findings or structural blockers.

---

## 3. Experiment Implementation States

- `actual` — Fully implemented and empirically tested with executable code.
- `prototype` — Working prototype with bounded functionality.
- `concept` — Formal mathematical formulation or structural architecture designed.
- `planned` — Scheduled for upcoming engineering investigation.

---

## 4. Result Outcome Classification

- `Confirmed` — Empirical findings strongly support the initial technical hypothesis.
- `Partially supported` — Hypothesis confirmed under specific constrained boundary conditions.
- `Not supported` — Empirical tests disproved the initial assumption.
- `Demonstrated technically` — Prototype successfully proved the technical feasibility of the approach.
- `Requires further testing` — Initial results promising but parameter stability requires broader data sweeps.
- `Inconclusive` — Data variance or noise prevented a definitive statistical conclusion.
- `Abandoned` — Exploration concluded due to fundamental mathematical or computational limitations.
