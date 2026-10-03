# Collaboration Entity Relationships (Phase 21)

## 1. Relationship Graph Topology

The Collaboration System acts as an engagement layer over the existing platform knowledge graph:

```text
                  COLLABORATION PROFILE
                  ├── Areas (4)
                  │    ├── Project Entities (/work/[slug])
                  │    ├── Research Entities (/research/[slug])
                  │    ├── Lab Experiment Entities (/lab/[slug])
                  │    └── Technology Entities (/technology/[id])
                  │
                  └── Engagement Types (4)
                       ├── Evidence Entities (Project, Research, Lab)
                       └── Contact Handoff Targets (/contact?type=...)
```

---

## 2. Canonical Cross-Reference Matrix

| Collaboration Area ID | Area Title | Canonical Project Slugs | Canonical Research Slugs | Canonical Lab Slugs | Canonical Technology IDs |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `area-quant-systems` | Quantitative Systems & Financial Engineering | `deep-learning-stock-return-prediction`, `market-regime-engine` | `signal-research`, `market-regimes` | `fractional-diff-cli`, `gmm-regime-stability-probe`, `streaming-orderbook-sse` | `python`, `pytorch`, `pandas`, `numpy`, `scikit-learn` |
| `area-multi-agent-ai` | Multi-Agent AI & Deterministic Workflows | `multi-agent-prospect-intelligence` | `agentic-systems` | `multi-agent-pydantic-state-machine` | `langgraph`, `fastapi`, `pydantic`, `typescript`, `python` |
| `area-distributed-web` | Distributed Web & Operations Platforms | `curasphere-hms` | — | `css-subgrid-editorial-alignment` | `react`, `typescript`, `postgresql`, `astro`, `tailwindcss`, `html5-css3` |
| `area-prototyping-lab` | Technical Prototyping & Lab Benchmarks | `market-regime-engine`, `deep-learning-stock-return-prediction` | `signal-research` | `fractional-diff-cli`, `streaming-orderbook-sse`, `stochastic-volatility-heston-calibration` | `python`, `numpy`, `scikit-learn`, `astro` |

---

## 3. Knowledge Graph Non-Duplication Rule

Collaboration is intentionally modeled as a consumption and synthesis layer rather than introducing redundant graph nodes. All entities referenced by `/collaborate` resolve to canonical URLs in `/work`, `/research`, `/lab`, and `/technology`.
