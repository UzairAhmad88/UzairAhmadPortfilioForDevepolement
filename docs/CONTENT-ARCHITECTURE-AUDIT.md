# Content Architecture Audit — Separation of Concerns

**Platform:** Uzair Ahmad — Personal Engineering & Research Platform  

---

## 1. Architectural Separation Status

| Layer | Implementation Location | State of Separation |
|---|---|---|
| **Content Layer** | `src/data/*.ts` (`projects.ts`, `research.ts`, `skills.ts`, `timeline.ts`, `contact.ts`) | **Strong:** 95% of data points live in dedicated TypeScript data files. |
| **Presentation Layer** | `src/components/**/*.astro`, `src/layouts/**/*.astro`, `src/pages/**/*.astro` | **Clean:** Components consume typed data structures; minimal inline hardcoding. |
| **Logic Layer** | `src/lib/**/*.ts` (Validation, analytics, SEO builders, GitHub sync) | **Decoupled:** Pure functions with zero UI framework dependencies. |
| **Configuration Layer** | `src/data/site.ts`, `.env.example`, `astro.config.mjs`, `vercel.json` | **Isolated:** URLs, meta information, and environment configurations centralized. |

---

## 2. Identified Opportunities for Future Phases
- **Case Studies Markdown/MDX Migration:** Case study narratives currently reside as structured objects in `src/data/projects.ts`. Transitioning longer technical articles and case studies to Astro Content Collections (`src/content/`) in a future phase will enable seamless markdown authoring, syntax-highlighted code blocks, and math typesetting (KaTeX).
- **Research Notes Schema:** Normalize research items into Content Collections with frontmatter schema validation (`zod`).
