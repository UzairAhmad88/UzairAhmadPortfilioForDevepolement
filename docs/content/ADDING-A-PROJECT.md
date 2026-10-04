# Content Runbook: Adding a Project Case Study

## 1. Step-by-Step Procedure

1. **Open Canonical Data File**: Navigate to `src/data/projects.ts`.
2. **Define the Project Object**: Append a new `Project` conforming to `src/types/project.ts`:
   - `id`: Stable kebab-case ID (e.g. `project-slug`).
   - `slug`: Canonical URL slug (e.g. `project-slug`).
   - `title`: Formal project name.
   - `problem`, `solution`, `outcome`: Dense, technical descriptions.
   - `technologies`: Array of canonical technology IDs matching `src/data/technologies.ts`.
   - `dna`: Architectural DNA object (pattern, latency, scaling bounds).
   - `lensData`: 6-lens navigator payload (Overview, Architecture, Constraints, Stack, Evidence, Retrospective).
3. **Update Reciprocal References**:
   - In `src/data/technologies.ts`, add the project slug to the corresponding technologies' `projectSlugs`.
4. **Validate**:
   ```bash
   npm test
   npm run check
   npm run build
   ```
