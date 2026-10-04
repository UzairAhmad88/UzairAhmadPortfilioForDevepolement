# Vercel Intelligence & Deployment Evidence

## 1. System Overview

The Vercel Intelligence module (`src/lib/vercel/`) maps verified live deployment URLs to portfolio projects and workbench prototypes:
- **Baseline Cache**: Ingests deployment evidence from `src/data/vercelDeployments.ts`.
- **Validation Engine**: `vercelValidator.ts` validates that all deployment URLs are secure public HTTPS endpoints and rejects localhost/private IP ranges.

---

## 2. Sync & Verification Operations

```bash
# Execute dry-run Vercel deployment sync
npm run vercel:sync:dry

# Validate Vercel deployment records
npm run vercel:validate
```
