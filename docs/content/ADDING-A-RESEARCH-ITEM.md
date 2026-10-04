# Content Runbook: Adding a Research Inquiry

## 1. Step-by-Step Procedure

1. **Open Canonical Data File**: Navigate to `src/data/research.ts`.
2. **Define the ResearchItem Object**: Append a new `ResearchItem` conforming to `src/types/research.ts`:
   - `slug`: Canonical URL slug (e.g. `signal-research`).
   - `title`: Research inquiry title.
   - `question`: Bounded theoretical question.
   - `hypothesis`: Mathematical or architectural assumption.
   - `methodology`: Sequential stage array with tools and data inputs.
   - `findings`: Concrete empirical observations.
   - `openQuestions`: Unresolved limits and future inquiries.
   - `relatedLab`: Array of supporting Lab experiment slugs.
3. **Update Reciprocal References**:
   - In `src/data/lab.ts`, ensure linked Lab items list this research slug in `relatedResearch`.
4. **Validate**:
   ```bash
   npm test
   npm run check
   npm run build
   ```
