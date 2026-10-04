# Content Runbook: Adding an Engineering Note

## 1. Step-by-Step Procedure

1. **Open Canonical Data File**: Navigate to `src/data/notes.ts`.
2. **Define the EngineeringNote Object**: Append a new `EngineeringNote` conforming to `src/types/notes.ts`:
   - `slug`: Canonical URL slug (e.g. `gmm-state-flipping-variance-ordering`).
   - `title`: Descriptive technical title.
   - `summary`: Dense 1–2 sentence problem and learning summary.
   - `topic`: `Architecture`, `Debugging`, `Math`, `Performance`, or `Systems`.
   - `problem`: Detailed technical challenge or bug encountered.
   - `solution`: Implemented solution with code blocks.
   - `tradeoffs`: Architectural compromises and alternative approaches.
   - `relatedLab`: Slugs of originating Lab experiments.
3. **Validate**:
   ```bash
   npm test
   npm run check
   npm run build
   ```
