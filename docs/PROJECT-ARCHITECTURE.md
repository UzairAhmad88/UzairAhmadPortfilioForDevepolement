# Project & Research Architecture

## 1. Project Categorization Strategy

Projects in the portfolio fall into distinct engineering classifications:

```
                      ┌─────────────────────────────┐
                      │    PROJECT CLASSIFICATION   │
                      └──────────────┬──────────────┘
                                     │
         ┌───────────────────────────┼───────────────────────────┐
         │                           │                           │
   ┌─────▼─────┐               ┌─────▼─────┐               ┌─────▼─────┐
   │  PRODUCT  │               │  SYSTEM   │               │ RESEARCH  │
   │   SaaS    │               │  Engine   │               │ Model/Lab │
   └───────────┘               └───────────┘               └───────────┘
```

1. **Product**: End-to-end usable software solving an operational or business challenge (e.g. *CuraSphere HMS*, *Restaurant POS*).
2. **System**: Core computational or architectural backend engine (e.g. *Market Regime Engine*).
3. **Research**: Quantitative experiments, model-driven signal exploration, and machine learning pipelines (e.g. *Deep Learning Stock Return Prediction*).

---

## 2. Simple Project vs. Deep-Dive Case Study Criteria

Not every repository requires an extensive 2,000-word case study. The architecture supports two formats:

### A. Compact Project Entry
- **Criteria**: Standard utilities, straightforward client web platforms, or targeted tools.
- **Content**: Project Type, Problem Statement, System/Product Summary, Outcome, Tech Tags, Direct Repository Link.
- **Example**: *Hayatabad Gym*, *Restaurant POS*.

### B. Full Case Study (Phase 04 Roadmap)
- **Criteria**: Complex multi-layer architecture, non-trivial engineering tradeoffs, mathematical modeling, or custom pipelines.
- **Structure**:
  1. **Executive Overview**: Problem, Role, Timeline, Tech Stack.
  2. **The Problem & Domain Context**: Why existing solutions fall short.
  3. **System Architecture**: High-level block diagram (Data → Pipeline → Engine → API).
  4. **Key Engineering Decisions**: Why Python/TypeScript was chosen; algorithm selection; latency/throughput tradeoffs.
  5. **Implementation Highlights**: Key code modules and data contracts.
  6. **Results & Verifiable Outcomes**: Verified output, live demo, or repository.
  7. **Lessons & Future Iterations**: Technical retrospectives.
- **Example**: *Deep Learning Stock Return Prediction Quantitative Trading System*.

---

## 3. Current Verified Project Inventory

| Project Title | Slug | Classifications | Status | Repository Verification |
|---|---|---|---|---|
| **Deep Learning Stock Return Prediction** | `deep-learning-stock-return-prediction` | `quant`, `ai`, `product` | Active Research | [Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii](https://github.com/UzairAhmad88/Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii) |
| **CuraSphere HMS** | `curasphere-hms` | `engineering`, `product` | Completed | [-CuraSphere-HMS-DevelopbyUzaii](https://github.com/UzairAhmad88/-CuraSphere-HMS-DevelopbyUzaii) |
| **Market Regime Engine** | `market-regime-engine` | `quant`, `ai` | Active Research | [Develop-Market-Regime--Engine-byUzaii](https://github.com/UzairAhmad88/Develop-Market-Regime--Engine-byUzaii) |
| **Restaurant POS** | `restaurant-pos` | `engineering`, `product` | Completed | [Resturent-Managment-System---POS](https://github.com/UzairAhmad88/Resturent-Managment-System---POS) |
| **Hayatabad Gym** | `hayatabad-gym` | `engineering`, `product` | Completed | [Hayatabad-Gym-BYMe](https://github.com/UzairAhmad88/Hayatabad-Gym-BYMe) |

---

## 4. Research Lab Architecture
The Research Lab houses exploratory technical inquiries. Each research item specifies:
- **Badge**: `Exploring` | `Experimenting` | `Building`
- **Inquiry Question**: The precise hypothesis or problem being tested.
- **Methodological Approach**: Mathematics, modeling, and toolchains utilized.

### Current Research Themes:
1. **Signal Research**: Which market features hold useful predictive structure? (Time-series analysis, statistical modeling, backtesting).
2. **Agentic Systems**: How can agents support repeatable research workflows? (Task decomposition, tool use, automation).
3. **System Architecture**: How do research systems become stable products? (APIs, interfaces, data flows, deployment paths).
