# Project Sync Matching Architecture

## 1. Executive Summary

The Project Sync Matching Engine implements a deterministic, multi-level heuristic for linking portfolio projects with external GitHub repositories and Vercel projects. External metadata (repository names, deployment aliases, URLs) fluctuates frequently and cannot be considered unconditionally authoritative. Therefore, project matching is structured into discrete confidence tiers with strict separation between automated suggestions and verified curation.

Automated matching never directly publishes or mutates portfolio presentation records; rather, it proposes candidates for human review.

---

## 2. Multi-Level Matching Hierarchy

Matching occurs sequentially through 6 evaluation tiers, from absolute explicit references to fuzzy lexical similarity:

```
┌─────────────────────────────────────────────────────────────┐
│ LEVEL 1: Explicit Curation Registry Entry                   │
│ Confidence: EXACT | MappingStatus: VERIFIED                 │
├─────────────────────────────────────────────────────────────┤
│ LEVEL 2: Stable External Identity Match                     │
│ Confidence: EXACT | MappingStatus: VERIFIED                 │
├─────────────────────────────────────────────────────────────┤
│ LEVEL 3: Canonical Repository URL Equality                  │
│ Confidence: STRONG | MappingStatus: VERIFIED                │
├─────────────────────────────────────────────────────────────┤
│ LEVEL 4: Canonical Deployment URL Equality                  │
│ Confidence: STRONG | MappingStatus: VERIFIED                │
├─────────────────────────────────────────────────────────────┤
│ LEVEL 5: GitHub/Vercel Evidence Chain                       │
│ Confidence: STRONG | MappingStatus: SUGGESTED               │
├─────────────────────────────────────────────────────────────┤
│ LEVEL 6: Normalized Slug & Name Similarity                  │
│ Confidence: POSSIBLE / AMBIGUOUS | MappingStatus: SUGGESTED │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. Tier Specifications & Evaluation Logic

### Level 1: Explicit Curation Registry Match
* **Criteria:** An explicit record exists in `projectSyncCurationRegistry` matching `projectId`.
* **Confidence Level:** `EXACT`
* **Resulting Status:** `VERIFIED` (or user-defined override)
* **Rationale:** Human curation is the platform's ultimate source of truth. If the registry specifies `githubRepositoryId: "portfolio-v2"` or `vercelProjectId: "prj_abc"`, this takes precedence over automated discovery.

### Level 2: Stable External ID Match
* **Criteria:** The project definition contains hardcoded, immutable external identifiers (`githubRepoId`, `vercelProjectId`) that match fetched records.
* **Confidence Level:** `EXACT`
* **Resulting Status:** `VERIFIED`
* **Rationale:** Immutable integer or UUID identities survive repository renames, domain transfers, and project alias migrations.

### Level 3: Canonical Repository URL Equality
* **Criteria:** Sanitized, normalized repository URL in portfolio matches GitHub repository `html_url`.
* **Normalization Rules:**
  * Case insensitivity (`github.com/UzairAhmad88/App` == `github.com/uzairahmad88/app`).
  * Strip trailing slashes (`/`).
  * Strip `.git` suffixes.
  * Protocol normalization (`http://` $\rightarrow$ `https://`).
* **Confidence Level:** `STRONG`
* **Resulting Status:** `VERIFIED`

### Level 4: Canonical Deployment URL Equality
* **Criteria:** Portfolio `liveUrl` matches Vercel production deployment domain or project target domain.
* **Normalization Rules:**
  * Strip protocol (`https://`, `http://`).
  * Strip `www.` subdomain.
  * Strip trailing paths and query strings.
* **Confidence Level:** `STRONG`
* **Resulting Status:** `VERIFIED`

### Level 5: GitHub / Vercel Inter-Source Link
* **Criteria:** A Vercel deployment references GitHub repository ID/Name `X`, and Portfolio project `Y` is linked to `X`, but the portfolio was missing a direct Vercel mapping.
* **Confidence Level:** `STRONG`
* **Resulting Status:** `SUGGESTED` (requires human validation to prevent unintended cross-linking).

### Level 6: Slug & Lexical Similarity
* **Criteria:** Levenshtein or token set similarity between `project.slug` and `repo.name` / `project.name` exceeds threshold ($\ge 0.8$).
* **Confidence Level:** `POSSIBLE` (similarity $\ge 0.85$), `AMBIGUOUS` (multiple candidates or $0.7 \le \text{sim} < 0.85$).
* **Resulting Status:** `SUGGESTED`
* **Critical Rule:** Lexical similarity NEVER automatically transitions to `VERIFIED`.

---

## 4. Confidence Classifications

Confidence ratings serve purely as internal workflow indicators and triage guides for manual reviews:

| Confidence | Description | Automated Action | Public Display |
| :--- | :--- | :--- | :--- |
| `EXACT` | Validated by explicit curation or immutable IDs | Retain/Update Verified State | Badge: "Verified Evidence" |
| `STRONG` | Direct URL match or verified multi-source chain | Propose for fast-track verification | Badge: "Verified Deployment" |
| `POSSIBLE` | High lexical similarity or clean slug correlation | Flag in Review Queue | No external evidence badge |
| `AMBIGUOUS` | Multiple weak matches or competing targets | Flag as Review Conflict | Hidden from public visitors |

---

## 5. Security & Verification Guarantees

1. **Non-Destructive Matching:** A failed or ambiguous match never deletes or unpublishes a portfolio project.
2. **Deterministic Outputs:** Running the matcher against the same dataset produces identical match candidates and scores without non-deterministic side-effects.
3. **No Phantom Linking:** Monorepo packages and submodules are never arbitrarily matched without curation layer rules.
