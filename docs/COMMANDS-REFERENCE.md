# Verified Commands & CLI Scripts Reference

**Project:** Personal Developer Portfolio / Personal Engineering & Research Platform  
**Phase:** 34 — Final Engineering Documentation & Maintainability System  
**Canonical Source:** `package.json`  

---

## 1. Verified CLI Commands Matrix

| NPM Script | Underlying Command | Environment | Safe? | Purpose / Description |
|:---|:---|:---|:---|:---|
| `npm run dev` | `astro dev` | Local | **Yes** | Starts local Astro development server on `http://localhost:4321` with hot module reloading. |
| `npm run start` | `astro dev` | Local | **Yes** | Alias for `npm run dev`. |
| `npm run build` | `astro build` | Local / CI | **Yes** | Compiles all 60 static HTML pages and client JS bundles into `dist/`. |
| `npm run check` | `astro check` | Local / CI | **Yes** | Runs Astro and TypeScript diagnostic type checking across 172 source files. |
| `npm test` | `node --test tests/unit/*.test.ts` | Local / CI | **Yes** | Runs all 244 unit tests across 45 suites via native Node.js test runner. |
| `npm run preview` | `astro preview` | Local | **Yes** | Spins up a local static server previewing the generated `dist/` directory. |
| `npm run lint` | `eslint . --ext .js,.ts,.astro` | Local / CI | **Yes** | Runs ESLint validation across JavaScript, TypeScript, and Astro templates. |
| `npm run format` | `prettier --write .` | Local | **Yes** | Formats all codebase files using Prettier according to `.prettierrc`. |
| `npm run format:check` | `prettier --check .` | Local / CI | **Yes** | Verifies Prettier formatting compliance without writing changes. |
| `npm run signature:validate` | `node scripts/validate-signature-interaction.mjs` | Local / CI | **Yes** | Validates 6-lens data integrity and modal payload structures. |
| `npm run archive:validate` | `node scripts/validate-archive.mjs` | Local / CI | **Yes** | Validates archive taxonomy, year ordering, and excluded content safeguards. |
| `npm run timeline:validate` | `node scripts/validate-timeline.mjs` | Local / CI | **Yes** | Enforces chronological descending order and valid date formats in timeline. |
| `npm run about:validate` | `node scripts/validate-about.mjs` | Local / CI | **Yes** | Asserts biography and educational credentials against truth audit baselines. |
| `npm run collaborate:validate` | `node scripts/validate-collaboration.mjs` | Local / CI | **Yes** | Validates engagement models and delivery phases integrity. |
| `npm run contact:validate` | `node scripts/validate-contact.mjs` | Local / CI | **Yes** | Validates form fields, spam protection invariants, and contact channels. |
| `npm run projects:sync` | `node scripts/sync-projects.mjs` | Local | **Yes** | Executes full project synchronization against GitHub and Vercel caches. |
| `npm run projects:sync:dry` | `node scripts/sync-projects.mjs --dry-run` | Local / CI | **Yes** | Runs project sync in read-only mode, outputting drift alerts without writing. |
| `npm run projects:validate` | `node scripts/validate-project-sync.mjs` | Local / CI | **Yes** | Validates repository mappings for all portfolio case studies. |
| `npm run github:sync` | `node scripts/sync-projects.mjs` | Local | **Yes** | Alias for project sync focusing on GitHub telemetry reconciliation. |
| `npm run github:sync:dry` | `node scripts/sync-projects.mjs --dry-run` | Local / CI | **Yes** | Read-only GitHub sync preview. |
| `npm run github:validate` | `node scripts/validate-github.mjs` | Local / CI | **Yes** | Asserts validity of all GitHub repository URLs. |
| `npm run vercel:sync` | `node scripts/sync-vercel.mjs` | Local | **Yes** | Reconciles Vercel deployment evidence and preview domain snapshots. |
| `npm run vercel:sync:dry` | `node scripts/sync-vercel.mjs --dry-run` | Local / CI | **Yes** | Read-only Vercel deployment preview. |
| `npm run vercel:validate` | `node scripts/validate-vercel.mjs` | Local / CI | **Yes** | Enforces that all live demo links reference valid HTTPS endpoints. |

---

## 2. Command Safety Notes

- All sync scripts (`projects:sync`, `github:sync`, `vercel:sync`) support the `--dry-run` flag to inspect potential changes safely before writing.
- None of the verified commands delete database records or perform destructive remote operations.
