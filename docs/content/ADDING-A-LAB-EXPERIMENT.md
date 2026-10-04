# Content Runbook: Adding a Lab Experiment

## 1. Step-by-Step Procedure

1. **Open Canonical Data File**: Navigate to `src/data/lab.ts`.
2. **Define the LabItem Object**: Append a new `LabItem` conforming to `src/types/lab.ts`:
   - `id` and `slug`: Stable kebab-case slug (e.g. `gmm-regime-stability-probe`).
   - `title`: Standard format `[slug]: [Technical Mechanism]`.
   - `type`: `Algorithm Experiment`, `Prototype`, `Quant Experiment`, `AI/ML Experiment`, or `UI Experiment`.
   - `status`: `Completed`, `Active`, `Validating`, or `Exploring`.
   - `state`: `actual`, `prototype`, `simulation`, or `concept`.
   - `question`, `context`, `experiment`, `result`, `resultOutcome`, `limitations`, `nextStep`.
   - `technologies`: Array of canonical technology IDs matching `src/data/technologies.ts`.
   - `relatedProjects`, `relatedResearch`, `relatedNotes`.
3. **Add Supporting Visual Artifacts**:
   - In `src/data/labArtifacts.ts`, add 1–2 `LabVisualArtifact` items referencing `experimentSlug: "[slug]"`.
4. **Update Reciprocal References**:
   - In `src/data/technologies.ts`, add the lab slug to `tech.labSlugs`.
5. **Validate**:
   ```bash
   npm test
   npm run check
   npm run build
   ```
