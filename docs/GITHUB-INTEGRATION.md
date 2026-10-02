# GitHub Repository Discovery & Evidence Architecture

**Project**: Uzair Ahmad Personal Professional Website  
**GitHub Profile**: [github.com/UzairAhmad88](https://github.com/UzairAhmad88)  
**Primary Principle**: *GitHub is Evidence. The Portfolio is the Curated Presentation Layer.*  

---

## 1. Overview & Core Philosophy
The GitHub integration connects Uzair Ahmad's authentic public repositories with the portfolio's strongly typed presentation layer.

**Core Rules**:
1. **Never Auto-Publish Raw Repositories**: A discovered repository is classified as `DISCOVERED` or `REVIEWED`. It only appears publicly when manually curated with problem statements, architecture diagrams, and engineering trade-offs.
2. **Never Overwrite Curated Content**: Automated metadata synchronization only updates dates, stars, forks, and deployment links; it never overwrites hand-written case studies.
3. **Fail-Safe Offline Mode**: If GitHub's API is rate-limited or unavailable during a build, the site falls back to verified static baseline repository data without failing the build.

---

## 2. Integration Layer Architecture

```text
src/lib/github/
├── types.ts          # Strongly-typed GitHub API schemas and domain models
├── normalizer.ts     # Technology normalization, classification, and URL validation
├── matcher.ts        # Matcher linking repos to portfolio slugs and Vercel projects
├── client.ts         # Resilient HTTP client with rate-limit handling & baseline fallbacks
├── sync.ts           # Sync engine, markdown report generator & draft scaffold generator
└── index.ts          # Library barrel export
```

---

## 3. Technology Normalization & Classification
The normalizer (`src/lib/github/normalizer.ts`) maps raw repository language fields and topics to canonical technology names:
- `pytorch` $\rightarrow$ `PyTorch`
- `scikit-learn` $\rightarrow$ `Scikit-Learn`
- `reactjs` $\rightarrow$ `React`
- `tailwindcss` $\rightarrow$ `TailwindCSS`

Repositories are automatically classified into domain categories:
- `PORTFOLIO`: Full-stack applications and production systems (e.g. `curasphere-hms`, `restaurant-pos`).
- `RESEARCH`: Quantitative research models and algorithms (e.g. `deep-learning-stock-return-prediction`, `market-regime-engine`).
- `ACADEMIC`: University and Final Year Projects (e.g. `multi-agent-prospect-intelligence`).
- `EXPERIMENT`: Prototypes and exploratory codebases.
- `ARCHIVED`: Historical repositories marked as archived.

---

## 4. API Authentication & Rate Limiting
- **Unauthenticated Mode**: Standard public discovery consumes 60 requests/hour from GitHub's unauthenticated API.
- **Authenticated Mode**: Setting `GITHUB_TOKEN` in `.env` increases rate limit to 5,000 requests/hour. Tokens are strictly server-side and never bundled into client assets.
- **Fail-Safe Fallback**: `BASELINE_GITHUB_REPOSITORIES` provides guaranteed offline build stability.
