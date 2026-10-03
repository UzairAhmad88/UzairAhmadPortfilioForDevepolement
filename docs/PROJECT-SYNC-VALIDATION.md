# Project Sync Validation & Integrity Verification

## 1. Executive Summary

Integrity verification ensures that all project mappings, external references, curation directives, and evidence badges conform to strict schemas, contain no broken links or duplicate associations, and preserve deterministic consistency across builds.

---

## 2. Automated Validation Pipeline

Validation is invoked via:
```bash
npm run projects:validate
```

The validator script (`scripts/validate-project-sync.mjs`) performs 7 exhaustive pre-flight verification checks:

```
┌─────────────────────────────────────────────────────────────┐
│ 1. Schema & Type Conformance Check                          │
├─────────────────────────────────────────────────────────────┤
│ 2. Project ID Cross-Reference Validation                   │
├─────────────────────────────────────────────────────────────┤
│ 3. Duplicate Repository & Project ID Collision Check        │
├─────────────────────────────────────────────────────────────┤
│ 4. URL Scheme & Sanitization Validation                     │
├─────────────────────────────────────────────────────────────┤
│ 5. Monorepo Path Structural Validation                      │
├─────────────────────────────────────────────────────────────┤
│ 6. Curation Entry vs Cache Cross-Check                      │
├─────────────────────────────────────────────────────────────┤
│ 7. Static Build & TypeScript Compilation Invariant          │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. Detailed Validation Rules

### Rule 1: Project Identity Integrity
* Every `projectId` in `curation.ts` must correspond to a valid existing project in `src/data/projects.ts` or markdown collection.
* Slugs must contain only lowercase alphanumeric characters, dashes, and underscores (`^[a-z0-9-_]+$`).

### Rule 2: Non-Collision Invariant
* No two distinct projects may share the same `githubFullName` or `vercelProjectId` unless `isMonorepo: true` is explicitly configured with non-overlapping `monorepoPath` declarations.

### Rule 3: Strict URL Syntax
* All `liveUrl`, `repositoryUrl`, and `overrideLiveUrl` values must begin with `https://`.
* URLs must not contain trailing garbage, spaces, or invalid port numbers.

### Rule 4: Curation Reference Verification
* When `publishGithubEvidence: true`, the target repository must either exist in `src/data/github/cache.json` or have a verified curated entry.
* When `publishDeploymentEvidence: true`, the deployment domain must be verified.

---

## 4. Test Suite Integration

The project sync verification is deeply integrated into the automated test suite:

* **Unit Test Suite:** `tests/unit/project-sync.test.ts`
* **Test Command:** `npm run test`
* **Coverage:**
  * Canonical identity construction.
  * 6-level matching heuristics (exact, ID, URL, lexical).
  * Conflict detection (repo mismatch, duplicate mappings, URL inconsistency, state conflict).
  * Change detection (new repos, changed metadata, removed resources).
  * Curation layer query helpers and overrides.
  * Deterministic dry-run report output.
