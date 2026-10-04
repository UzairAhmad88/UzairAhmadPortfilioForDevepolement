# Lab Visual Artifact Content & Editorial Guide

**Project:** Personal Engineering & Research Platform — Lab Subsystem  
**Scope:** Guidelines for Authoring Technical Visual Evidence  
**Status:** Canonical Editorial Standard  

---

## 1. Editorial Voice & Grounding Standard

Visual artifacts in the Lab are technical evidence, not marketing banners.

### The Rule of Evidence
- **Never decorate:** Do not add illustrations, floating spheres, generic AI gradients, or decorative isometric icons.
- **Truthful Evidence Labeling:** If an artifact illustrates a theoretical mathematical formula, mark it `CONCEPT`. If it runs on synthetic test arrays, mark it `SIMULATION`. If it reflects measured system logs, mark it `ACTUAL`.

---

## 2. Caption & Interpretation Formula

Every artifact must follow this three-part interpretation structure:

1. **Title & Subtitle:**
   - *Example:* "Fixed-Window Binomial Convolution Pipeline: Mathematical stationarization with bounded memory loss"
2. **WHAT THIS SHOWS:**
   - Describe the data path, algorithm steps, or benchmark parameters factually.
   - *Example:* "The linear data pipeline from raw OHLCV price ingestion through recursive binomial coefficient calculation (threshold $\tau = 10^{-4}$), vectorized fixed-window NumPy convolution ($K=250$), and ADF stationarity verification."
3. **WHAT TO NOTICE:**
   - Highlight the critical architectural trade-off, boundary constraint, or failure mode.
   - *Example:* "The fixed-window cutoff at $K=250$ prevents quadratic computational blowup on multi-decade tick series while preserving $>92\%$ correlation with raw price levels."
4. **Caption (`<figcaption>`):**
   - Provide the specific execution parameters and source repository location.
