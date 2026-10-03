# Research Platform — Architecture & Philosophy

## Overview

The **Research Platform** transforms the portfolio from a static project archive into a live **Personal Engineering & Research Workspace**. It grounds engineering work in structured scientific inquiry, empirical methodology, controlled experiments, and transparent epistemic uncertainty.

```text
Research Question
       ↓
Working Hypothesis
       ↓
Methodological Stages
       ↓
Controlled Experiments
       ↓
Empirical Evidence
       ↓
Findings vs. Interpretation
       ↓
Known Limitations & Open Questions
       ↓
Production Systems & Technologies
```

---

## Core Philosophy

1. **Research as an Ongoing Activity:**
   Research is not presented merely as a list of finished publications or vanity metrics. It represents how curiosity turns into structured investigation, and investigation into engineering decisions.

2. **Normalizing Uncertainty:**
   Investigations do not need to claim universal superiority or fake 99% accuracy. Inconclusive findings, regime-dependent boundaries, and sample size limitations are legitimate empirical results and are documented explicitly.

3. **Distinction Between Project, Research, and Note:**
   - **Project (Phase 05):** Something *built* (e.g., Deep Learning Stock Prediction System, CuraSphere HMS).
   - **Research (Phase 10):** Something *investigated* (e.g., Predictive feature extraction and stationarity in non-stationary series).
   - **Note (Future Phase 11):** A short observation, reflection, or technical memo.

---

## Route Structure

- `/research`: Canonical index presenting the research lifecycle, domain categorization, active inquiry cards, and epistemic standards.
- `/research/[slug]`: Deep-dive technical notebook layout containing numbered editorial sections:
  - `01 — Core Research Question`
  - `02 — Context & Motivation`
  - `03 — Working Hypothesis`
  - `04 — Methodological Pipeline & Stages`
  - `05 — Mathematical & Structural Formulation`
  - `06 — Data Sources & Experimental Inputs`
  - `07 — Experiments & Empirical Testing`
  - `08 — Empirical Findings & Technical Interpretation`
  - `09 — Known Limitations & Epistemic Uncertainty`
  - `10 — Related Technology Stack`
  - `11 — Academic & Technical References`

---

## Epistemic Integrity Standards

1. **Zero Lookahead Bias:** Feature transformations and rolling statistics are calculated exclusively on expanding historical windows.
2. **Out-of-Sample Discipline:** Walk-forward temporal partitions with strict purge buffers are utilized to prevent data leakage.
3. **Fact vs. Interpretation:** Factual experiment observations are strictly separated from theoretical interpretations.
4. **Verifiable Artifacts:** Every investigation links to public, reproducible GitHub code and mathematical formulations.
