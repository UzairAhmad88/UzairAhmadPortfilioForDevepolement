# Content Runbook: Adding a Visual Evidence Artifact

## 1. Step-by-Step Procedure

1. **Open Canonical Data File**: Navigate to `src/data/labArtifacts.ts`.
2. **Define the LabVisualArtifact Object**: Append a new `LabVisualArtifact` conforming to `src/types/labArtifact.ts`:
   - `id`: Unique kebab-case ID (e.g. `art-gmm-variance-flow`).
   - `experimentSlug`: Target experiment slug in `src/data/lab.ts`.
   - `type`: `PIPELINE`, `COMPARISON`, `ARCHITECTURE`, `STATE_GRAPH`, `ALGORITHM`, `CHART`, or `TECHNICAL_SCREENSHOT`.
   - `evidenceState`: `actual`, `prototype`, `simulation`, or `concept`.
   - `sourceEvidence`: Repository path, test script, or calculation source.
   - `whatThisShows`: Factual description of what the visual depicts.
   - `whatToNotice`: Analytical takeaway and engineering decision.
   - `visual`: Strongly typed node layout or comparison tracks.
3. **Validate**:
   ```bash
   npm test
   npm run check
   npm run build
   ```
