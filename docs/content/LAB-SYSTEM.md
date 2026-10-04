# Lab Workbench & Experimental System

## 1. System Overview

The Lab system (`src/data/lab.ts` and `src/data/labArtifacts.ts`) manages focused workbench experiments, algorithmic probes, and architectural prototypes.

---

## 2. Core Lab Invariants

- **Isolated Scenarios**: Tests a single hypothesis with defined inputs and configurations.
- **Evidence-Driven**: Every experiment pairs with structured visual artifacts (`actual`, `prototype`, `simulation`, `concept`).
- **Honest Outcomes**: Explicitly records whether the hypothesis was `Confirmed`, `Partially supported`, `Demonstrated technically`, or `Requires further testing`.
- **Disclosed Limitations**: Boundary conditions and computational overhead are documented directly in the experiment view.
- **Lineage Tracking**: Promoted experiments (e.g. `gmm-regime-stability-probe`) link directly to their parent projects via `promotedToProject`.
