# GitHub Intelligence — Validation Specification

## 1. Automated Integrity Checks
The validation system (`src/lib/github/validator.ts` and `scripts/validate-github.mjs`) tests all curated mappings and repository entities:

### 1.1 Integrity Rules
1. **Repository Name Exists**: Every curation entry must reference a non-empty `repositoryFullName`.
2. **Project Slug Resolution**: If `projectId` is defined in a curation entry, it must resolve to a valid slug in `projects.ts`.
3. **URL Conformance**: All `htmlUrl` and `homepage` properties must be valid HTTP/HTTPS URLs.
4. **Zero Orphaned Evidence**: Projects declaring `githubUrl` must point to valid destinations.
