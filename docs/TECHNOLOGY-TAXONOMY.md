# Technology Taxonomy & Classification Standard

## 1. Taxonomy Structure
The portfolio categorizes technologies into 7 structured engineering domains:

| Category ID | Display Name | Scope & Definition |
|---|---|---|
| `languages` | Languages | Core programming languages (Python, TypeScript, JavaScript, HTML5/CSS3). |
| `ai-ml` | AI & Machine Learning | Deep neural networks, probabilistic clustering, and agent state machines (PyTorch, LangGraph, Scikit-Learn, Pydantic). |
| `data-quant` | Data & Quantitative Computing | Vectorized array computing, stationarity feature stores, and numerical math (Pandas, NumPy, PyTorch, Jupyter). |
| `frontend` | Frontend & UI Architecture | Client component systems, accessible tokens, and SSG rendering (React, Astro, TailwindCSS, HTML5/CSS3). |
| `backend` | Backend & APIs | Server runtimes, REST controllers, authentication middleware, and agent servers (FastAPI, Node.js, Express, LangGraph). |
| `databases` | Databases & Persistence | Relational tables, EMR schema models, and transactional state stores (PostgreSQL). |
| `tools-devops` | Tooling & Infrastructure | Hardware accelerators, interactive notebooks, version control, and automated tests (Git, CUDA, Jupyter). |

---

## 2. Normalization & Canonical Entity Rules
To prevent naming fragmentation across projects, all references resolve to single canonical IDs:

- `ReactJS`, `React.js` → `react`
- `NodeJS`, `Node` → `nodejs`
- `TS` → `typescript`
- `sklearn` → `scikit-learn`
- `HTML`, `CSS`, `Modern CSS` → `html5-css3`
- `Postgres`, `PGSQL` → `postgresql`
- `Torch` → `pytorch`
- `JupyterLab`, `IPython` → `jupyter`
