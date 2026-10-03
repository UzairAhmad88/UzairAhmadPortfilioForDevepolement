# Project Synchronization Data Models & Schemas

## 1. Schema Definitions

Located in [`src/types/projectSync.ts`](file:///d:/web/protfolio/src/types/projectSync.ts):

### 1.1 Project Lifecycle State
```typescript
export type ProjectLifecycleState =
  | 'DISCOVERED'
  | 'REVIEWED'
  | 'CLASSIFIED'
  | 'MAPPED'
  | 'CURATED'
  | 'PUBLISHED'
  | 'EXCLUDED'
  | 'CONFLICT'
  | 'STALE';
```

### 1.2 Mapping Status
```typescript
export type MappingStatus =
  | 'UNMATCHED'
  | 'SUGGESTED'
  | 'VERIFIED'
  | 'CONFLICT'
  | 'UNAVAILABLE';
```

### 1.3 Match Confidence
```typescript
export type MatchConfidence =
  | 'EXACT'
  | 'STRONG'
  | 'POSSIBLE'
  | 'AMBIGUOUS';
```

---

## 2. Core Entities

### 2.1 `ProjectIdentity`
Stable canonical representation of an engineering project:
- `projectId`: Primary project identifier
- `projectSlug`: URL route slug
- `title`: Curated title
- `githubRepositoryFullName`: Full GitHub repository name
- `vercelProjectId`: Linked Vercel project ID
- `liveUrl`: Verified live production or preview URL
- `repositoryUrl`: Public repository URL
- `lifecycleState`: Current lifecycle stage
- `mappingStatus`: External evidence link status

### 2.2 `ProjectSyncRecord`
Complete synchronization envelope:
- `identity`: Canonical `ProjectIdentity`
- `github`: Verified GitHub repository summary
- `vercel`: Verified Vercel deployment summary
- `syncStatus`: Current lifecycle state
- `mappingStatus`: Verification status
- `evidenceChain`: Link verification flags (`hasPortfolio`, `hasGitHub`, `hasVercel`, `isFullyLinked`)
- `conflicts`: Array of active `SyncConflict` items
- `warnings`: Actionable warnings
