# Lab Evidence Hierarchy & Grounding Standards

**Project:** Personal Engineering & Research Platform — Lab Subsystem  
**Scope:** Technical Evidence Standards  
**Status:** Canonical Standard  

---

## 1. Evidence Hierarchy (E0 to E5)

Every claim in the Lab must trace back to a verifiable tier in the evidence hierarchy:

- **E5 (Authoritative Literature):** Peer-reviewed papers, published algorithmic formulations (e.g., Marcos Lopez de Prado's Fractional Differentiation papers).
- **E4 (Measured Experiment):** Automated test runs, reproducible benchmark telemetry, Lighthouse audits, or CLI outputs.
- **E3 (Implementation Code):** Vectorized NumPy algorithms, FastAPI async endpoints, LangGraph state machine definitions.
- **E2 (Visual Artifact):** SVG node diagrams, architecture flowcharts, and telemetry matrices.
- **E1 (Prototype Harness):** Working code prototype or sandbox script.
- **E0 (Theoretical Conjecture):** Working hypothesis or conceptual model (must be explicitly labeled `concept` or `planned`).

---

## 2. Anti-Fabrication Rules

1. Never convert theoretical conjectures (E0) into measured experiments (E4).
2. Never invent execution times, throughput numbers, or user counts.
3. If an experiment uses synthetic data, explicitly label it `SIMULATION`.
