# GitHub Intelligence — Data Model Specification

## 1. Domain Entities & Schemas

### 1.1 Source Types & Provenance
```typescript
export type SourceType = 'LIVE_GITHUB' | 'CACHED_GITHUB' | 'MANUAL' | 'CURATED';

export type ProvenanceState = 'Verified' | 'Cached' | 'Manual' | 'Unavailable';

export type RepositoryClassification =
  | 'portfolio'
  | 'research'
  | 'experiment'
  | 'academic'
  | 'utility'
  | 'learning'
  | 'template'
  | 'archive'
  | 'fork'
  | 'personal'
  | 'infrastructure'
  | 'not-for-portfolio'
  | 'unknown';

export type CurationLifecycleState =
  | 'discovered'
  | 'reviewed'
  | 'classified'
  | 'curated'
  | 'published'
  | 'excluded'
  | 'archived';
```

### 1.2 GitHub Repository Entity (`GitHubRepository`)
Represents normalized public repository metadata:
- `id`: Stable numeric GitHub identifier as string.
- `name`: Clean repository name.
- `fullName`: Complete `owner/repo` path.
- `owner`: Account username.
- `url`: API endpoint URL.
- `htmlUrl`: Verified public web destination.
- `description`: Sanitized repository description.
- `visibility`: `'public' | 'private'`.
- `archived`: Boolean indicating lifecycle freeze.
- `fork`: Boolean distinguishing upstream forks from original authoring.
- `defaultBranch`: Target branch for source browsing (`main` / `master`).
- `language`: Primary detected language.
- `detectedTechnologies`: Canonical normalized technology names.
- `topics`: Normalized repository topic tags.
- `stars`, `forks`, `watchers`: Verified count metadata.
- `createdAt`, `updatedAt`, `pushedAt`: ISO timestamps.
- `license`: Full license title.
- `sourceType`: Provenance origin (`LIVE_GITHUB` vs `CACHED_GITHUB`).
- `provenance`: Verification state.

### 1.3 GitHub Evidence Entity (`GitHubEvidence`)
Attached to Projects, Research Inquiries, and Lab items:
- `repositoryUrl`: Direct link to repository root.
- `repositoryName`: Name of repository.
- `fullName`: Full `owner/name` format.
- `public`: Boolean visibility confirmation.
- `archived`: Boolean lifecycle status.
- `lastVerifiedAt`: Verified push date.
- `readmeAvailable`: Confirmation of public documentation.
- `defaultBranch`: Git branch for source inspection.
- `language`: Primary programming language.
- `license`: License name or null.
- `topics`: Associated topic tags.
- `provenance`: `'Verified' | 'Cached' | 'Manual'`.
- `sourceType`: Data source origin.
- `codeUrl`: Direct tree URL (`https://github.com/owner/repo/tree/main`).
- `releaseUrl`: Optional release notes URL.
- `issuesUrl`: Issue tracker URL.
- `commitsUrl`: Commit log URL.
