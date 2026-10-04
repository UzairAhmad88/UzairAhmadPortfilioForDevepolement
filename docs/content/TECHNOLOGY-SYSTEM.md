# Technology System & Canonical Stack Taxonomy

## 1. System Role

The Technology system (`src/data/technologies.ts`) manages the canonical vocabulary of tools, frameworks, and libraries utilized across the platform:
- **Languages**: Python, TypeScript, SQL, HTML5/CSS3.
- **AI & Quant Stack**: PyTorch, LangGraph, Pydantic, Scikit-Learn, NumPy, Pandas, CUDA.
- **Web & Backend**: FastAPI, Node.js, Express, PostgreSQL, Astro, TailwindCSS, React.
- **Tools & Systems**: Git, Jupyter, Docker.

---

## 2. Invariant Rules

- **Zero Skill Percentages**: No "90% Python" or "Expert React" bars. Technologies list actual usage and connected entities.
- **Bidirectional Mapping**: Each technology maintains `projectSlugs`, `researchSlugs`, `labSlugs`, and `noteSlugs` to allow instant reverse lookups.
