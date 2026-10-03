# PROJECT VISUALIZATION CONTENT GUIDE (PHASE 07)
## Authoring Rules, When to Visualize & Evidence Requirements

> **Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
> **Status:** Active / Production Specification  
> **Phase:** 07 — Project Visualization System  

---

## 1. WHEN TO USE A VISUALIZATION

| Architecture Scenario | Recommended Visualization Type | Example |
| :--- | :--- | :--- |
| **Data Pipelines & Machine Learning** | `pipeline` | Ingesting raw prices $\rightarrow$ stationarized features $\rightarrow$ neural model training $\rightarrow$ out-of-sample backtesting |
| **Multi-Agent & Stateful Systems** | `state-graph` | Routing user prompts through orchestrators $\rightarrow$ parallel worker agents $\rightarrow$ Pydantic validation guardrails |
| **Full-Stack & Cloud Systems** | `architecture` | Web clients $\rightarrow$ JWT Auth gateway $\rightarrow$ Express controllers $\rightarrow$ PostgreSQL EMR |
| **Operational & POS Systems** | `system-flow` | Table mapping $\rightarrow$ split billing $\rightarrow$ local sales state persistence |

---

## 2. WHEN NOT TO USE A VISUALIZATION

**DO NOT add a visualization if:**
1. The project is a standard responsive landing page without multi-tier service boundaries (e.g. `hayatabad-gym`).
2. The architecture would require fabricating fake cloud services, microservices, or databases that were not actually part of the project.
3. The visual is merely decorative clip art or an ungrounded 3D graphic.

---

## 3. HOW TO ADD A VISUALIZATION TO A PROJECT

In `src/data/projects.ts`, add a `visualizations` array to the project's `caseStudy` object:

```typescript
visualizations: [
  {
    id: 'unique-id',
    type: 'pipeline', // 'architecture' | 'pipeline' | 'state-graph' | 'system-flow' | 'process-flow'
    title: 'Descriptive Architecture Title',
    status: 'actual', // 'actual' | 'prototype' | 'conceptual'
    description: '1-2 sentence overview of the system flow.',
    caption: 'Important technical constraint or synchronization detail.',
    sourceEvidence: 'Public GitHub Repository: UzairAhmad88/...',
    textAlternative: 'Full paragraph describing the data flow for screen readers.',
    nodes: [
      {
        id: 'node-1',
        label: 'Node Title',
        subLabel: 'Component or technology subtitle',
        role: 'input', // 'input' | 'process' | 'model' | 'guardrail' | 'storage' | 'output' | 'router'
        badge: 'Badge Text',
        details: ['Detail 1', 'Detail 2', 'Detail 3']
      },
      // ...
    ]
  }
]
```
Zero modifications to Astro pages or UI components are required. The layout renders the visualization automatically with full responsive and accessible features.
