# Change Classification & Risk Evaluation Model

**Project:** Personal Developer Portfolio / Personal Engineering & Research Platform  
**Stage:** Post-Production Governance & Long-Term Stewardship  
**Scope:** Risk Management, Change Categorization & Review Gates  

---

## 1. Change Classification Taxonomy

Every proposed modification to the repository must be tagged with exactly one canonical change category:

| Change Category | Code / Scope Tag | Typical Trigger / Description | Verification Gate |
|:---|:---|:---|:---|
| **`HOTFIX`** | `fix(security)` / `fix(prod)` | Urgent production outage, broken critical route, or exposed credential. | Immediate patch, full unit test run, smoke test. |
| **`BUG FIX`** | `fix(component)` | Functional regression, broken link, or interactive state defect. | Unit test addition, `npm test`, route verification. |
| **`CONTENT UPDATE`** | `feat(content)` | Adding a newly completed case study, research inquiry, or note. | Referential integrity check, `npm run build`. |
| **`CONTENT CORRECTION`** | `fix(content)` | Fixing a typo, updating dates, or correcting external citations. | Visual inspection, metadata check. |
| **`SECURITY UPDATE`** | `sec(dependency)` | Patching a vulnerable dependency or hardening HTTP headers. | Automated security test, bundle audit. |
| **`DEPENDENCY UPDATE`** | `chore(deps)` | Upgrading minor/patch dependencies (Astro, TypeScript). | Clean build, `astro check`, full test suite. |
| **`PERFORMANCE IMPROVEMENT`**| `perf(core)` | Optimizing asset loading, CSS tokens, or reducing client JS. | Web Vitals audit (LCP, CLS, INP comparison). |
| **`ACCESSIBILITY IMPROVEMENT`**| `a11y(core)` | Improving ARIA attributes, focus states, or contrast tokens. | Keyboard walkthrough, screen-reader semantics check. |
| **`UX REFINEMENT`** | `refactor(ux)` | Smoothing drawer navigation or modal interaction behavior. | Multi-device responsive matrix test. |
| **`DESIGN REFINEMENT`** | `style(tokens)` | Fine-tuning CSS custom properties or typography spacing. | Dark/Light theme cross-check, zero-shift check. |
| **`ARCHITECTURAL CHANGE`** | `refactor(arch)` | Refactoring data pipelines or knowledge engine graph logic. | Architecture Decision Record (ADR), full test suite. |
| **`NEW CAPABILITY`** | `feat(capability)` | Adding a new interactive workbench or major visualization. | Full Feature Gate evaluation, full QA pass. |
| **`EXPERIMENT`** | `lab(experiment)` | Prototyping an experimental model or CLI in `/lab`. | Isolated lab item record, non-blocking check. |
| **`RESEARCH`** | `research(dossier)` | Publishing a formal hypothesis-driven scientific inquiry. | Mathematical formulation check, citations check. |

---

## 2. Risk Tier Classification Matrix

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                          CHANGE RISK TIERS (P0–P4)                          │
├────────────┬─────────────────────────────┬──────────────────────────────────┤
│ Risk Level │ Definition & Impact Scope   │ Required Pre-Release Protocol    │
├────────────┼─────────────────────────────┼──────────────────────────────────┤
│ **P0**     │ **Critical / Blocker**      │ 1. Immediate reproduction        │
│ (Critical) │ Build failure, security     │ 2. Isolated fix / rollback       │
│            │ vulnerability, site outage  │ 3. Automated & manual smoke test │
│            │ or data exposure.           │ 4. Post-incident report          │
├────────────┼─────────────────────────────┼──────────────────────────────────┤
│ **P1**     │ **High Risk**               │ 1. Full typecheck & unit tests   │
│ (High)     │ Major navigation failure,   │ 2. Cross-browser smoke test      │
│            │ broken case study route, or │ 3. Responsive matrix check       │
│            │ core accessibility defect.  │ 4. Immediate doc sync            │
├────────────┼─────────────────────────────┼──────────────────────────────────┤
│ **P2**     │ **Medium Risk**             │ 1. Standard unit test pass       │
│ (Medium)   │ Secondary filter failure,   │ 2. Route existence check         │
│            │ layout glitch, or GitHub/   │ 3. Documentation update          │
│            │ Vercel sync discrepancy.    │                                  │
├────────────┼─────────────────────────────┼──────────────────────────────────┤
│ **P3**     │ **Low Risk**                │ 1. Fast verification (`npm test`)│
│ (Low)      │ Content update, typo fix,   │ 2. Documentation synchronization │
│            │ or minor CSS refinement.    │                                  │
├────────────┼─────────────────────────────┼──────────────────────────────────┤
│ **P4**     │ **Cosmetic / Polish**       │ 1. Local build preview           │
│ (Cosmetic) │ Non-blocking spacing tweak  │ 2. Visual confirmation           │
│            │ or docstring clarification. │                                  │
└────────────┴─────────────────────────────┴──────────────────────────────────┘
```
