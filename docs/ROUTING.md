# Routing Architecture Specification

## 1. Routing Strategy
Astro uses file-based routing. In Phase 01, the root route (`/`) provides the consolidated single-page overview matching the current portfolio, with foundational architecture in place for future multi-page expansion.

---

## 2. Current Routes

| Route | File Path | Status | Purpose |
|---|---|---|---|
| `/` | `src/pages/index.astro` | Active | Main portfolio showcase with all sections |
| `/404` | `src/pages/404.astro` | Active | Error recovery and return-to-home navigation |

---

## 3. Future Route Strategy (Phases 03+)

When multi-page deep dives are introduced in future phases, the URL architecture will follow standard human-readable RESTful slugs:

| Target Route | Planned Layout | Content Source | Purpose |
|---|---|---|---|
| `/about` | `PageLayout.astro` | Markdown / Data | Extended bio, journey, engineering philosophy |
| `/work` | `PageLayout.astro` | `src/data/projects.ts` | Complete project archive and filter hub |
| `/work/[slug]` | `ProjectLayout.astro` | `src/content/projects/` | Deep-dive case studies with architecture & results |
| `/research` | `PageLayout.astro` | `src/data/research.ts` | Lab research notes, experiments, whitepapers |
| `/systems` | `PageLayout.astro` | `src/data/capabilities.ts`| Detailed capability breakdown and specs |
| `/contact` | `PageLayout.astro` | `src/data/contact.ts` | Direct inquiry, client collaboration form |
| `/blog` | `PageLayout.astro` | `src/content/blog/` | Technical essays, quantitative notes, tutorials |
| `/blog/[slug]` | `PageLayout.astro` | `src/content/blog/*.md` | Individual technical articles |

### URL Rules:
- **Never use query-parameter IDs** (e.g. `/project?id=123`).
- **Always use kebab-case descriptive slugs** (e.g. `/work/deep-learning-stock-return-prediction`).
- **Trailing Slash Strategy**: Trailing slashes are normalized via Astro and Vercel routing configuration.
