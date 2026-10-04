# Platform Operations & Maintenance Guide

## 1. Routine Maintenance Schedule

| Cadence | Maintenance Task | Command / Procedure |
|:---|:---|:---|
| **Weekly** | Run diagnostic checks and automated tests | `npm run check && npm test` |
| **Monthly** | Audit dependencies for security patches | `npm audit` |
| **Quarterly** | Re-run Knowledge Graph and Discovery invariant tests | `node --test tests/unit/knowledge-graph.test.ts` |
| **Quarterly** | Dry-run GitHub and Vercel project sync | `npm run github:sync:dry && npm run vercel:sync:dry` |

---

## 2. Change Risk Classification

- **Low Risk (P4)**: Typos, summary edits, new technology tags $\rightarrow$ Direct edit in `src/data/`, run `npm test`, commit.
- **Medium Risk (P3)**: New Lab experiment or project case study $\rightarrow$ Follow content runbook, verify reciprocal links, run full test suite.
- **High Risk (P2)**: Layout, design tokens, or routing changes $\rightarrow$ Test responsive breakpoints and light/dark theme parity before merging.
- **Critical Risk (P1)**: Build config, Astro upgrades, or security header updates $\rightarrow$ Full staging build and preview verification required.
