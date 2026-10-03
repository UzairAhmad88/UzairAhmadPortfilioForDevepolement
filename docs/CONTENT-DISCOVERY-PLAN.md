# Content Discovery & Future Search Architecture

**Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
**Phase:** 03 — Information Architecture + Content Architecture  
**Status:** Approved  

---

## 1. Discovery Modalities

Content across the platform can be discovered through 4 distinct pathways:

```
┌─────────────────────────────────────────────────────────────┐
│                    CONTENT DISCOVERY PATHS                  │
├────────────────────┬────────────────────────────────────────┤
│ 1. Sequential Path │ Home → Work → Case Study → Related Research│
├────────────────────┼────────────────────────────────────────┤
│ 2. Domain Filters  │ Category filters on /work (Quant, AI,  │
│                    │ Engineering, Product)                  │
├────────────────────┼────────────────────────────────────────┤
│ 3. Topic Bridges   │ In-article tags (PyTorch, Astro, GMM)  │
│                    │ linking related case studies & research│
├────────────────────┼────────────────────────────────────────┤
│ 4. Direct Queries  │ Future static JSON index for instant   │
│                    │ client-side command palette search     │
└────────────────────┴────────────────────────────────────────┘
```

---

## 2. Future Static Search Index Schema (Phase 14 Preparation)

The content models are structured so an offline static index can be emitted during build:

```json
[
  {
    "id": "work-stock-return",
    "title": "Deep Learning Stock Return Prediction Engine",
    "type": "project",
    "topics": ["Quantitative Finance", "Deep Learning", "Time-Series"],
    "technologies": ["Python", "PyTorch", "Pandas", "NumPy", "Scikit-Learn"],
    "summary": "Walk-forward validated PyTorch return prediction pipeline with strict stationarity transforms.",
    "url": "/work/deep-learning-stock-return-prediction"
  },
  {
    "id": "research-signal",
    "title": "Return Stationarity & Feature Engineering in Noisy Time-Series",
    "type": "research",
    "topics": ["Quantitative Finance", "Machine Learning & Time-Series"],
    "technologies": ["Statsmodels", "NumPy", "Pandas"],
    "summary": "Empirical evaluation of stationary transformations vs raw price inputs.",
    "url": "/research/signal-research"
  }
]
```

This ensures future search integration (e.g. Pagefind / FlexSearch) requires zero backend servers or runtime databases.
