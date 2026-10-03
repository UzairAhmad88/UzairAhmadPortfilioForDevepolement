# Project Sync Reports Architecture

## 1. Executive Summary

The Project Sync reporting subsystem generates structured, deterministic audit reports in both machine-readable (`.json`) and human-reviewable (`.md`) formats. Reports capture the full state of repository evidence, deployment health, candidate matches, detected discrepancies, and actionable recommendations.

---

## 2. Report Formats & Outputs

Synchronization runs produce two primary output artifacts:

1. **`project-sync-report.json`**: Normalized machine-readable ledger designed for CI/CD assertions, build pre-flight hooks, and automated linting.
2. **`PROJECT-SYNC-REPORT.md`**: Human-readable operational dashboard detailing changes, warnings, conflicts, and required curation actions.

---

## 3. Machine-Readable Schema (`project-sync-report.json`)

```json
{
  "timestamp": "2026-10-04T02:00:00.000Z",
  "schemaVersion": "1.0.0",
  "summary": {
    "totalPortfolioProjects": 12,
    "totalGithubRepositories": 15,
    "totalVercelProjects": 6,
    "verifiedMappings": 10,
    "suggestedMappings": 2,
    "conflicts": 0,
    "brokenMappings": 0,
    "unavailableSources": 0,
    "staleRecords": 0
  },
  "records": [
    {
      "projectId": "portfolio-v2",
      "mappingStatus": "VERIFIED",
      "syncStatus": "FRESH",
      "lastCheckedAt": "2026-10-04T02:00:00.000Z",
      "github": {
        "repositoryId": "repo_123",
        "fullName": "UzairAhmad88/UzairAhmadPortfilioForDevepolement",
        "verified": true
      },
      "vercel": {
        "projectId": "prj_portfolio",
        "deploymentId": "dpl_abc",
        "verified": true
      },
      "warnings": [],
      "conflicts": []
    }
  ],
  "changes": {
    "newRepositories": [],
    "changedRepositories": [],
    "removedRepositories": [],
    "newDeployments": [],
    "changedDeployments": [],
    "portfolioChanges": []
  },
  "conflicts": [],
  "warnings": [],
  "nextReviewActions": [
    "Verify suggested mapping for new repository: 'ml-inference-kernel'"
  ]
}
```

---

## 4. Human-Readable Report Structure (`PROJECT-SYNC-REPORT.md`)

The markdown report is organized into structured review sections:

1. **Executive Summary Table**: High-level counts of projects, repositories, deployments, and mapping statuses.
2. **Verified Mappings**: All established, high-integrity connections across portfolio $\leftrightarrow$ GitHub $\leftrightarrow$ Vercel.
3. **Suggested Candidate Matches**: Discovered repositories or deployments with proposed mappings awaiting curation approval.
4. **Active Conflicts & Errors**: Contradictions requiring human intervention.
5. **Drift & Changes Detected**: Detailed breakdown of repository renames, topic updates, default branch migrations, or deployment status updates.
6. **Unavailable & Stale Sources**: External resources that could not be verified due to network, rate-limiting, or permission issues.
7. **Actionable Review Checklist**: Prioritized list of tasks for the maintainer.

---

## 5. Automated Generation & Execution

### Running Sync in Dry-Run Mode
```bash
npm run projects:sync:dry
```
Evaluates all current caches and portfolio files, compares evidence, and displays a dry-run summary in the terminal without altering filesystem artifacts.

### Running Live Sync & Report Generation
```bash
npm run projects:sync
```
Executes discovery, updates `project-sync-report.json` and `PROJECT-SYNC-REPORT.md`, and prepares sanitized metadata for the next build cycle.
