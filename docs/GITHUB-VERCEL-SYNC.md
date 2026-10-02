# GitHub & Vercel Project Synchronization Engine

**Purpose:** Safe, curated synchronization between GitHub repositories, Vercel deployments, and the portfolio project catalog.

---

## 1. Synchronization Architecture

```
GitHub API (UzairAhmad88)
         │
         ▼
[Project Normalization Engine]
         │
         ▼
[Human Review & Curation Gate] ──► Protects curated case studies from unintended overrides
         │
         ▼
[src/data/projects.ts] ──────────► Portfolio UI & Static Pages
```

---

## 2. Security & Token Handling
- **Zero Client-Side Exposure:** `GITHUB_TOKEN` is strictly consumed in Node.js build/sync scripts (`scripts/sync-github-projects.ts`), never bundled in client assets.
- **Selective Publishing:** Repositories are matched by name and tagged before inclusion; draft scaffolds are generated in `docs/generated/` for manual curation rather than auto-published immediately.

---

## 3. Verified Project Mapping

- `Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii` ➔ `deep-learning-stock-return-prediction`
- `Final-Year-Project-FYP-byUzaii` ➔ `multi-agent-prospect-intelligence`
- `CuraSphere-Healthcare-Management-System-byUzaii` ➔ `curasphere-hms` (Live on Vercel)
- `Develop-Market-Regime--Engine-byUzaii` ➔ `market-regime-engine`
- `Restaurant-POS-Management-System-ByUzaii` ➔ `restaurant-pos` (Live on Vercel)
- `Gym_Website_ByUzaii` ➔ `hayatabad-gym` (Live on Vercel)
