# Project Synchronization Lifecycle Model

## 1. The Engineering Evidence Lifecycle

The platform enforces a strict, human-in-the-loop lifecycle for all projects:

```
[ DISCOVERED ]
  Discovered from GitHub API or Vercel REST telemetry.
        ↓
[ REVIEWED ]
  Inspected for relevance, public readiness, and portfolio alignment.
        ↓
[ CLASSIFIED ]
  Assigned domain taxonomy (Quant, AI, Full-Stack, Product, Lab).
        ↓
[ MAPPED ]
  Connected to corresponding repository and hosting identities.
        ↓
[ CURATED ]
  Human-authored narrative, architectural trade-offs, and empirical results.
        ↓
[ PUBLISHED ]
  Rendered in production build with verified evidence chains.
```

---

## 2. Guardrails & Immutability Rules

1. **No Auto-Promotion**: A repository discovered via GitHub API NEVER skips directly to `PUBLISHED`.
2. **Review Warnings**: External changes (such as repository description modifications or deployment updates) trigger `REVIEW WARNING` notices in sync reports rather than mutating published Markdown/TypeScript files.
3. **Independent Lifecycles**: External infrastructure deletion (e.g. deleting a preview deployment on Vercel) does not delete the portfolio case study.
