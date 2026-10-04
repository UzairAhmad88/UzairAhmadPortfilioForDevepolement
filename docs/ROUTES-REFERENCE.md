# Public Routes Reference & Sitemap Catalog

**Project:** Personal Developer Portfolio / Personal Engineering & Research Platform  
**Phase:** 34 — Final Engineering Documentation & Maintainability System  
**Routing Paradigm:** Astro File-Based Routing (Static Site Generation / Pure HTML)  
**Total Static Routes:** 60 Pages Generated in `dist/`  

---

## 1. Complete Route Inventory

| Route Path | Source File | Rendering Type | Canonical URL | SEO Title / Description | Sitemap Included | Notes |
|:---|:---|:---|:---|:---|:---|:---|
| `/` | `src/pages/index.astro` | Static | `https://.../` | Uzair Ahmad — Quantitative AI & Product Engineer | **Yes** | Living homepage with Hero, Currently, Featured Work, and Lab highlights. |
| `/about` | `src/pages/about.astro` | Static | `https://.../about` | About — Uzair Ahmad | **Yes** | Biography, academic background (FAST-NUCES), and technical philosophy. |
| `/archive` | `src/pages/archive.astro` | Static | `https://.../archive` | Project Archive — Uzair Ahmad | **Yes** | Historical and paused project repository catalog. |
| `/collaborate` | `src/pages/collaborate.astro` | Static | `https://.../collaborate` | Collaborate — Uzair Ahmad | **Yes** | Engagement models, engineering capabilities, and delivery processes. |
| `/contact` | `src/pages/contact.astro` | Static | `https://.../contact` | Contact — Uzair Ahmad | **Yes** | Secure contact form with honeypot validation and direct contact channels. |
| `/contact/success` | `src/pages/contact/success.astro` | Static | `https://.../contact/success` | Message Sent — Uzair Ahmad | **No** (Direct response) | Submission confirmation screen. |
| `/discover` | `src/pages/discover.astro` | Static | `https://.../discover` | Discovery & Search Engine — Uzair Ahmad | **Yes** | Instant client-side multi-facet search across all platform entities. |
| `/how-i-build` | `src/pages/how-i-build.astro` | Static | `https://.../how-i-build` | How I Build — Uzair Ahmad | **Yes** | 5 core architectural principles and engineering methodology. |
| `/knowledge` | `src/pages/knowledge/index.astro` | Static | `https://.../knowledge` | Knowledge Engine — Uzair Ahmad | **Yes** | Knowledge cluster hubs, entity pathways, and domain connections. |
| `/knowledge-graph` | `src/pages/knowledge-graph.astro` | Static | `https://.../knowledge-graph` | Interactive Knowledge Graph — Uzair Ahmad | **Yes** | 2D/3D force-directed entity graph with accessible table fallback. |
| `/services` | `src/pages/services.astro` | Static | `https://.../services` | Services & Capabilities — Uzair Ahmad | **Yes** | Canonical service offerings and technical consulting areas. |
| `/timeline` | `src/pages/timeline.astro` | Static | `https://.../timeline` | Engineering Timeline — Uzair Ahmad | **Yes** | Chronological descending event history across projects, research, and lab. |
| `/404.html` | `src/pages/404.astro` | Static | `https://.../404` | Page Not Found — Uzair Ahmad | **No** (Error Route) | Custom 404 screen with search recommendations and quick links. |
| `/work` | `src/pages/work/index.astro` | Static | `https://.../work` | Work & Engineering Projects — Uzair Ahmad | **Yes** | Full project catalog with category filters and status pills. |
| `/work/[slug]` (8 pages) | `src/pages/work/[slug].astro` | Dynamic SSG (`getStaticPaths`) | `https://.../work/{slug}` | `{Project Title} — Case Study` | **Yes** | Detailed case studies with 6-lens navigator and architecture diagrams. |
| `/research` | `src/pages/research.astro` | Static | `https://.../research` | Research Platform — Uzair Ahmad | **Yes** | Research hub and quantitative inquiry index. |
| `/research/[slug]` (3 pages) | `src/pages/research/[slug].astro` | Dynamic SSG (`getStaticPaths`) | `https://.../research/{slug}` | `{Research Title} — Research Dossier` | **Yes** | In-depth research dossiers with mathematical proofs and empirical findings. |
| `/notes` | `src/pages/notes/index.astro` | Static | `https://.../notes` | Engineering Notes — Uzair Ahmad | **Yes** | Technical engineering notes catalog categorized by discipline. |
| `/notes/[slug]` (6 pages) | `src/pages/notes/[slug].astro` | Dynamic SSG (`getStaticPaths`) | `https://.../notes/{slug}` | `{Note Title} — Technical Note` | **Yes** | Deep dives with syntax-highlighted code and implementation notes. |
| `/lab` | `src/pages/lab/index.astro` | Static | `https://.../lab` | Lab & Experiments — Uzair Ahmad | **Yes** | Experimental workbench index with interactive demos and CLI tools. |
| `/lab/[slug]` (6 pages) | `src/pages/lab/[slug].astro` | Dynamic SSG (`getStaticPaths`) | `https://.../lab/{slug}` | `{Lab Title} — Workbench` | **Yes** | Interactive and CLI experiment workbenches with live simulators. |
| `/technology` | `src/pages/technology/index.astro` | Static | `https://.../technology` | Technology Ecosystem — Uzair Ahmad | **Yes** | 19 canonical technologies organized by stack tier. |
| `/technology/[slug]` (19 pages)| `src/pages/technology/[slug].astro` | Dynamic SSG (`getStaticPaths`) | `https://.../technology/{slug}`| `{Technology} — Ecosystem & Applications` | **Yes** | Entity pages showing bi-directional connections to projects and research. |

---

## 2. Dynamic Route Slugs Catalog

### Project Case Studies (`/work/[slug]`)
1. `deep-learning-stock-return-prediction` — Deep learning financial forecasting pipeline.
2. `multi-agent-prospect-intelligence` — Final Year Project (FYP) multi-agent LangGraph system.
3. `curasphere-hms` — Enterprise healthcare management system with PostgreSQL RBAC.
4. `market-regime-engine` — Unsupervised Gaussian Mixture Model (GMM) regime detection.
5. `restaurant-pos` — Desktop point-of-sale system with offline-first SQLite persistence.
6. `hayatabad-gym` — Membership and billing management software.
7. `online-complaint-system` — Citizen issue logging and escalation workflow.
8. `event-management-system` — Academic event scheduling and attendee ticketing.

### Research Inquiries (`/research/[slug]`)
1. `signal-research` — Fractional differentiation in non-stationary financial feature spaces.
2. `market-regimes` — Unsupervised regime clustering stability and covariance ordering.
3. `agentic-systems` — Deterministic state graphs vs autonomous agent guardrails.

### Engineering Notes (`/notes/[slug]`)
1. `async-sqlalchemy-session-lifecycle` — Async SQLAlchemy session patterns in FastAPI.
2. `fractional-differentiation-memory-stationarity` — Memory retention vs stationarity trade-offs.
3. `gmm-state-flipping-variance-ordering` — Resolving state flipping via covariance ordering.
4. `deterministic-state-graph-pydantic-guardrails` — Pydantic V2 state schema guardrails.
5. `zero-layout-shift-ssg-design-tokens` — Layout stability and font loading in static sites.
6. `rbac-relational-integrity-emr-systems` — PostgreSQL foreign key constraints and RBAC matrices.

### Lab Workbenches (`/lab/[slug]`)
1. `fractional-diff-cli` — Terminal CLI tool for computing fractional differentiation weights.
2. `streaming-orderbook-sse` — Server-Sent Events (SSE) depth visualization workbench.
3. `gmm-regime-stability-probe` — Synthetic clustering stability parameter slider probe.
4. `multi-agent-pydantic-state-machine` — Pydantic schema validation execution simulator.
5. `css-subgrid-editorial-alignment` — CSS subgrid responsive card alignment testbed.
6. `stochastic-volatility-heston-calibration` — Heston model characteristic function calibration.

### Technology Entities (`/technology/[slug]`)
19 canonical pages: `python`, `typescript`, `pytorch`, `react`, `langgraph`, `fastapi`, `nodejs`, `express`, `postgresql`, `pandas`, `numpy`, `scikit-learn`, `astro`, `tailwindcss`, `git`, `cuda`, `jupyter`, `html5-css3`, `pydantic`.
