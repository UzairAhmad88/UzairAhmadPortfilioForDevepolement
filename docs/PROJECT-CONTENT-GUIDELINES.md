# Project Content & Technical Storytelling Guidelines

This document provides step-by-step instructions for structuring, writing, and maintaining project documentation and case studies within the portfolio.

---

## 1. Step-by-Step Workflow for Adding a Project

To add a new project to the portfolio without modifying core page templates:

1. **Verify Source Code & Evidence**: Confirm the project exists with a public or documented repository, verifiable commit history, or working prototype.
2. **Define Category & Domain**: Assign valid taxonomy tags in `src/types/project.ts` (e.g. `quant`, `ai`, `engineering`, `product`).
3. **Choose Presentation Level**: Classify as Level A (Featured Case Study), Level B (Detailed Project), or Level C (Standard Entry).
4. **Draft Structured Content**:
   - Write clear Problem statement without generic buzzwords.
   - Describe Engineering Approach and key architectural layers.
   - Create ASCII or Mermaid architecture topology diagram.
   - Document at least 2 Technical Decisions using the **Context $\rightarrow$ Rationale $\rightarrow$ Trade-Off** format.
   - Classify Results honestly into `Implemented`, `Measured`, or `Experimental`.
   - List at least 1 known limitation and 1 technical lesson learned.
5. **Append to `src/data/projects.ts`**: Add the new object with a unique, descriptive, lowercase slug.
6. **Execute Automated Validation**: Run `npm test` to verify slug uniqueness and relationship integrity.
7. **Build & Inspect**: Run `npm run build` to ensure static route generation succeeds.

---

## 2. Technical Writing Style Guide

### Core Rules:
- **Be Exact with Technical Terminology**: Use precise library, model, and protocol names (e.g., *"PyTorch LSTM with walk-forward validation"*, not *"advanced neural AI"*).
- **Distinguish Implemented vs Measured vs Expected**:
  - `Implemented`: *"Constructed a 4-layer directed state graph in LangGraph."*
  - `Measured`: *"Achieved out-of-sample directional accuracy improvement over baseline."*
  - `Expected / Future`: *"Future iterations will evaluate live tick slippage."*
- **Acknowledge Limitations**: Never present experimental or prototype models as institutional-grade systems. Stating real limitations builds technical credibility.
