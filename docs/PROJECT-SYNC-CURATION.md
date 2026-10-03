# Project Sync Curation Layer

## 1. Executive Summary

The Project Sync Curation Layer is the definitive control boundary between external cloud metadata and public portfolio presentation. Located at `src/data/projectSync/curation.ts`, this typed registry enables maintainers to explicitly declare mappings, override automated heuristics, configure multi-repository/monorepo subprojects, and control evidence publication toggles without modifying core project content.

---

## 2. Core Architecture

The curation layer operates on the principle of **Zero Implicit Truth**: no external telemetry from GitHub or Vercel is surfaced publicly unless it aligns with explicit curation directives or verified high-confidence mappings.

```
┌────────────────────────────────────────────────────────┐
│             PORTFOLIO CONTENT / NARRATIVES             │
│        (Human-Authored: Why, What, How, Impact)        │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│              CURATION REGISTRY (curation.ts)           │
│  - Explicit Repo / Deployment Mappings                 │
│  - Monorepo Path Assignments                           │
│  - Publication Toggles (GitHub / Deployment Evidence)  │
│  - Conflict Overrides & Notes                          │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│               PROJECT SYNCHRONIZATION ENGINE           │
│        (Deterministic Verification & Reporting)        │
└────────────────────────────────────────────────────────┘
```

---

## 3. Schema & Type Definition

```typescript
export interface ProjectSyncCurationEntry {
  projectId: string;
  githubRepositoryId?: string;
  githubFullName?: string;
  vercelProjectId?: string;
  preferredDeploymentId?: string;
  publishGithubEvidence: boolean;
  publishDeploymentEvidence: boolean;
  overrideLiveUrl?: string;
  isMonorepo?: boolean;
  monorepoPath?: string;
  notes?: string;
}
```

---

## 4. Curation Registry Directives

### 1. Evidence Publication Controls
* `publishGithubEvidence: boolean`: When set to `false`, GitHub stars, commit activity, and repository links are suppressed from project cards and DNA blocks.
* `publishDeploymentEvidence: boolean`: When set to `false`, live deployment verification badges and preview URLs are hidden.

### 2. Monorepo & Path-Level Curation
For monorepos containing multiple independent microservices or applications, entries configure `isMonorepo: true` and `monorepoPath: "apps/frontend"` to disambiguate code scope.

### 3. Canonical Domain Overrides
If DNS records are pointing to custom cloud infrastructure (e.g. Cloudflare, AWS CloudFront, or specialized bare-metal clusters), `overrideLiveUrl` takes precedence over ephemeral Vercel alias domains.

---

## 5. Standard Registry Example

```typescript
export const projectSyncCurationRegistry: Record<string, ProjectSyncCurationEntry> = {
  'portfolio-v2': {
    projectId: 'portfolio-v2',
    githubFullName: 'UzairAhmad88/UzairAhmadPortfilioForDevepolement',
    vercelProjectId: 'prj_uzairahmad_portfolio',
    publishGithubEvidence: true,
    publishDeploymentEvidence: true,
    notes: 'Primary engineering portfolio repository'
  },
  'ai-agent-framework': {
    projectId: 'ai-agent-framework',
    githubFullName: 'UzairAhmad88/ai-agent-core',
    publishGithubEvidence: true,
    publishDeploymentEvidence: false,
    notes: 'Library only - no deployment required'
  }
};
```

---

## 6. Maintenance Guidelines

1. **Adding a New Project:** Add an explicit entry in `curation.ts` when a project transitions from `Prototype` to `In Development` or `Completed`.
2. **Archiving Evidence:** If a repository is set to private or deprecated, toggle `publishGithubEvidence: false` while keeping the portfolio case study intact.
3. **Validating Integrity:** Always execute `npm run projects:validate` after modifying the registry.
