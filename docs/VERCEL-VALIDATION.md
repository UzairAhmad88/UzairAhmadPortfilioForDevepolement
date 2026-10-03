# Vercel Validation & Quality Assurance

## 1. Automated Test Suite

Executed via `npm run test` targeting [`tests/unit/vercel-sync.test.ts`](file:///d:/web/protfolio/tests/unit/vercel-sync.test.ts):
- **Configuration & Types**: Central configuration values and defaults.
- **Normalizer Engine**: State mapping, target normalization, URL sanitization, framework formatting.
- **Validator & Security**: Protocol enforcement, rejection of private IPs and malicious schemas.
- **Baseline Cache & Evidence**: Evidence resolution for projects, research, and lab items.
- **Matcher Engine**: Verified matching vs suggested matching vs unmatched fallback.
- **Sync & Report Engine**: Dry-run execution and markdown generation.
- **Legacy Compatibility**: `findVercelDeployment` and `KNOWN_VERCEL_DEPLOYMENTS`.

---

## 2. CLI Validation

```bash
npm run vercel:validate
```

Validates:
- All URLs start with `https://`.
- No empty project or deployment IDs exist.
- All curation targets map to valid system entities.
