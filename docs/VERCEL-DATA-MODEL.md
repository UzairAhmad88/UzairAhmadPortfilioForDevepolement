# Vercel Intelligence Data Models & Schemas

## 1. Type Definitions

The Vercel Intelligence subsystem introduces formal TypeScript schemas in [`src/types/vercel.ts`](file:///d:/web/protfolio/src/types/vercel.ts):

### 1.1 Deployment State
```typescript
export type VercelDeploymentState =
  | 'READY'
  | 'BUILDING'
  | 'ERROR'
  | 'CANCELED'
  | 'QUEUED'
  | 'UNKNOWN';
```

### 1.2 Deployment Target
```typescript
export type VercelDeploymentTarget = 'production' | 'preview' | 'development';
```

### 1.3 Provenance States
```typescript
export type VercelProvenanceState =
  | 'LIVE_VERIFIED'
  | 'CACHED'
  | 'MANUAL'
  | 'UNAVAILABLE';
```

---

## 2. Core Entities

### 2.1 `VercelProject`
Represents the hosting container on Vercel:
- `id`: Unique project identifier (e.g. `prj_uzairahmad_portfolio`)
- `name`: Vercel project name (e.g. `uzairahmad`)
- `framework`: Detected framework string (e.g. `astro`, `nextjs`)
- `productionDeployment`: Associated verified production deployment
- `latestDeployments`: List of recent deployments
- `gitRepository`: Associated GitHub repository slug
- `domains`: List of assigned custom and `.vercel.app` domains
- `source`: Provenance source (`LIVE_VERCEL` or `CACHED_VERCEL`)

### 2.2 `VercelDeployment`
Represents an individual build artifact:
- `id`: Deployment identifier
- `projectId`: Parent project identifier
- `url`: Canonical HTTPS deployment URL
- `state`: Normalized `VercelDeploymentState`
- `target`: `VercelDeploymentTarget` (`production` vs `preview`)
- `gitSource`: Commit hash, branch, and repo link
- `createdAt` / `readyAt`: Epoch timestamps

### 2.3 `VercelEvidence`
Normalized presentation layer payload consumed by Astro components:
- `projectName`: String
- `deploymentUrl`: Sanitized HTTPS URL
- `production`: Boolean
- `target`: `production` | `preview` | `development`
- `deploymentState`: `VercelDeploymentState`
- `framework`: Human-readable framework string
- `provenance`: `VercelProvenanceState`
- `lastVerifiedAt`: ISO 8601 string
- `matchedGitHubRepo`: Associated repository for cross-evidence linking
