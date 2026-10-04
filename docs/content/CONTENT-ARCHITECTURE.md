# Content Architecture & Domain Models

## 1. Ontological Architecture

The platform models content as strongly-typed engineering entities connected through explicit, bidirectional relationships:

```
┌─────────────────────────────────────────────────────────────┐
│                       RESEARCH INQUIRY                      │
│                  (Hypothesis, Theory, Paper)                │
└──────────────────────────────┬──────────────────────────────┘
                               │ VALIDATES / EXPLORES
                               ▼
┌──────────────┐        ┌──────────────┐        ┌─────────────┐
│   PROJECT    │◄───────┤     LAB      ├───────►│ ENGINEERING │
│ (Case Study) │        │ (Experiment) │        │    NOTE     │
└──────────────┘        └──────┬───────┘        └─────────────┘
                               │ USES / STACK
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                         TECHNOLOGY                          │
│                   (Canonical Stack Entity)                  │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Core Entity Definitions

1. **Project (`Project`)**: A production-grade system or application built by the engineer. Includes problem definition, solution architecture, technical constraints, deployment telemetry, and multi-lens metadata.
2. **Research Inquiry (`ResearchItem`)**: A structured theoretical and empirical investigation addressing long-term quantitative or AI questions. Includes hypothesis, methodology stages, data sources, and open research questions.
3. **Lab Experiment (`LabItem`)**: An isolated workbench exploration, algorithmic prototype, or UI experiment evaluating a specific technical question with visual evidence artifacts.
4. **Engineering Note (`EngineeringNote`)**: A technical post-mortem, debugging lesson, or architectural deep dive explaining a concrete lesson derived from implementation.
5. **Technology (`Technology`)**: A canonical tool, framework, or library in the engineer's stack, tracking all projects, experiments, and notes that utilize it.
6. **Visual Artifact (`LabVisualArtifact`)**: A structured evidence payload (pipeline, comparison, state graph, or technical screenshot) grounded in real repository evidence.
