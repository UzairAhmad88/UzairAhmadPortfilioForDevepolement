# Route Architecture & Static Pages Catalog

## 1. Routing Architecture

The platform uses Astro's file-based static routing engine under `src/pages/`. All 60 routes are pre-rendered into static `index.html` files during `npm run build`.

---

## 2. Complete 60-Route Inventory

### 2.1 Core Hub Routes (12 Static Pages)
| Route Path | Source File | Purpose | Canonical URL |
|:---|:---|:---|:---|
| `/` | `src/pages/index.astro` | Homepage with hero, workbench preview, featured work | `https://.../` |
| `/about` | `src/pages/about.astro` | Identity, engineering philosophy, timeline summary | `https://.../about` |
| `/work` | `src/pages/work/index.astro` | Engineering case studies portfolio | `https://.../work` |
| `/research` | `src/pages/research.astro` | Quantitative & AI research inquiries | `https://.../research` |
| `/lab` | `src/pages/lab/index.astro` | Experimental workbench & prototypes index | `https://.../lab` |
| `/notes` | `src/pages/notes/index.astro` | Engineering notes & architectural lessons | `https://.../notes` |
| `/technology` | `src/pages/technology/index.astro` | Stack capabilities & canonical technology index | `https://.../technology` |
| `/discover` | `src/pages/discover.astro` | Full-text discovery search interface | `https://.../discover` |
| `/knowledge-graph` | `src/pages/knowledge-graph.astro` | Interactive relational entity graph | `https://.../knowledge-graph` |
| `/timeline` | `src/pages/timeline.astro` | Chronological milestone timeline | `https://.../timeline` |
| `/archive` | `src/pages/archive.astro` | Historical & superseded systems archive | `https://.../archive` |
| `/collaborate` | `src/pages/collaborate.astro` | Collaboration areas & engagement models | `https://.../collaborate` |
| `/contact` | `src/pages/contact.astro` | Secure contact form & PGP/keys | `https://.../contact` |
| `/contact/success` | `src/pages/contact/success.astro` | Contact submission confirmation | `https://.../contact/success` |
| `/how-i-build` | `src/pages/how-i-build.astro` | 6-Stage systems engineering methodology | `https://.../how-i-build` |
| `/services` | `src/pages/services.astro` | Advisory & consulting capabilities | `https://.../services` |
| `/404` | `src/pages/404.astro` | Accessible custom error page | `https://.../404` |

### 2.2 Dynamic Detail Pages (43 Static HTML Endpoints)
- **Projects (`/work/[slug]`, 8 pages)**:
  - `/work/deep-learning-stock-return-prediction`
  - `/work/multi-agent-prospect-intelligence`
  - `/work/curasphere-hms`
  - `/work/market-regime-engine`
  - `/work/restaurant-pos`
  - `/work/hayatabad-gym`
  - `/work/online-complaint-system`
  - `/work/event-management-system`
- **Research Inquiries (`/research/[slug]`, 3 pages)**:
  - `/research/signal-research`
  - `/research/market-regimes`
  - `/research/agentic-systems`
- **Lab Experiments (`/lab/[slug]`, 6 pages)**:
  - `/lab/fractional-diff-cli`
  - `/lab/streaming-orderbook-sse`
  - `/lab/gmm-regime-stability-probe`
  - `/lab/multi-agent-pydantic-state-machine`
  - `/lab/css-subgrid-editorial-alignment`
  - `/lab/stochastic-volatility-heston-calibration`
- **Engineering Notes (`/notes/[slug]`, 6 pages)**:
  - `/notes/async-sqlalchemy-session-lifecycle`
  - `/notes/fractional-differentiation-memory-stationarity`
  - `/notes/gmm-state-flipping-variance-ordering`
  - `/notes/deterministic-state-graph-pydantic-guardrails`
  - `/notes/zero-layout-shift-ssg-design-tokens`
  - `/notes/rbac-relational-integrity-emr-systems`
- **Technologies (`/technology/[slug]`, 20 pages)**:
  - Python, TypeScript, PyTorch, React, LangGraph, FastAPI, Node.js, Express, PostgreSQL, Pandas, NumPy, Scikit-Learn, Astro, TailwindCSS, Git, CUDA, Jupyter, HTML5/CSS3, Pydantic, etc.

---

## 3. URL Invariants

- **Trailing Slash Policy**: No trailing slashes (`trailingSlash: "never"` enforced in Astro config).
- **Indexation**: Dynamic `sitemap-index.xml` generated automatically at build time.
