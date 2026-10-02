# Project Source Mapping & Provenance Registry

**Project**: Uzair Ahmad Personal Professional Website  
**Registry Location**: `src/lib/github/matcher.ts` and `src/data/projects.ts`  

---

## 1. Verified Project Provenance Matrix

| Portfolio Slug | Title | Domain | GitHub Repository | Vercel / Live Deployment | Publication Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `deep-learning-stock-return-prediction` | Deep Learning Stock Return Prediction | Quantitative Finance | [`UzairAhmad88/Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii`](https://github.com/UzairAhmad88/Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii) | Not Deployed (Jupyter/Python Pipeline) | **PUBLISHED (Flagship Case Study)** |
| `multi-agent-prospect-intelligence` | Multi-Agent Decision Support for Prospect Intelligence | Multi-Agent AI | [`UzairAhmad88/Multi-Modal-Quantitative-AI-Development`](https://github.com/UzairAhmad88) | Preview Dashboard | **PUBLISHED (Academic FYP)** |
| `curasphere-hms` | CuraSphere HMS | Full-Stack Engineering | [`UzairAhmad88/-CuraSphere-HMS-DevelopbyUzaii`](https://github.com/UzairAhmad88/-CuraSphere-HMS-DevelopbyUzaii) | [`https://vercel.com/imuzairahmad8-6603s-projects`](https://vercel.com/imuzairahmad8-6603s-projects) | **PUBLISHED (Completed SaaS)** |
| `market-regime-engine` | Market Regime Detection Engine | Quantitative Finance | [`UzairAhmad88/Develop-Market-Regime--Engine-byUzaii`](https://github.com/UzairAhmad88/Develop-Market-Regime--Engine-byUzaii) | Not Deployed (Algorithmic Module) | **PUBLISHED (Active Research)** |
| `restaurant-pos` | Restaurant POS & Management System | Operations Software | [`UzairAhmad88/Resturent-Managment-System---POS`](https://github.com/UzairAhmad88/Resturent-Managment-System---POS) | Not Deployed (Local Desktop/Web App) | **PUBLISHED (Completed App)** |
| `hayatabad-gym` | Hayatabad Gym Web Platform | Full-Stack Engineering | [`UzairAhmad88/Hayatabad-Gym-BYMe`](https://github.com/UzairAhmad88/Hayatabad-Gym-BYMe) | Not Deployed (Static Platform) | **PUBLISHED (Completed Client Project)** |

---

## 2. Adding a Manual Mapping Override
If a new GitHub repository has a non-standard name, register it in `KNOWN_PROJECT_MAPPINGS` inside `src/lib/github/matcher.ts`:
```typescript
{
  githubRepo: 'UzairAhmad88/My-New-Project-Repo',
  portfolioSlug: 'my-new-project',
  vercelProjectName: 'my-new-project-ui',
  classification: 'PORTFOLIO',
  syncStatus: 'PUBLISHED',
}
```
