# GitHub Intelligence — Project & Entity Mapping

## 1. Relational Entity Mapping Matrix

The GitHub Intelligence layer connects repositories to four distinct content layers:
1. **Projects (`/work/[slug]`)**: Direct code repositories for flagship systems.
2. **Research Inquiries (`/research/[slug]`)**: Empirical reproducible research and model notebooks.
3. **Lab Experiments (`/lab/[slug]`)**: Experimental prototypes and CLI tooling.
4. **Engineering Notes (`/notes/[slug]`)**: Architecture logs and debugging journals.

```
┌───────────────────────────────────────────────┐
│        GitHub Public Repository               │
│   (UzairAhmad88/Deep-Learning-Stock-...)      │
└───────┬───────────────┬───────────────┬───────┘
        │               │               │
        ▼               ▼               ▼
   [PROJECT]       [RESEARCH]         [LAB]
deep-learning-    signal-research   fractional-
stock-return-                       diff-cli
prediction
        │
        ▼
     [NOTE]
fractional-differentiation-
memory-stationarity
```

---

## 2. Portfolio-Only Projects & Private Repositories
Not every project requires a public GitHub repository. When a project is proprietary, client-managed, or private (e.g. enterprise healthcare installations or private customer systems), the evidence layer renders:
```html
<div class="github-evidence-unavailable">
  <p>Source repository is private, proprietary, or client-managed and not published publicly.</p>
</div>
```
This guarantees transparency without fabricating code availability.
