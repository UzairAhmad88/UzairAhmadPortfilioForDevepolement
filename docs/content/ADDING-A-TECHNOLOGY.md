# Content Runbook: Adding a Technology

## 1. Step-by-Step Procedure

1. **Open Canonical Data File**: Navigate to `src/data/technologies.ts`.
2. **Define the Technology Object**: Append a new `Technology` conforming to `src/types/technology.ts`:
   - `id`: Lowercase canonical identifier (e.g. `langgraph`).
   - `name`: Human-readable display name (e.g. `LangGraph`).
   - `tagline`: Concise technical description.
   - `categories`: Array matching `src/types/technology.ts` (`Language`, `Framework`, `Library`, `Infrastructure`, `Tool`).
   - `primaryRole`: Architecture role (`AI/Agentic Orchestration`, `Quantitative Computing`, etc.).
   - `projectSlugs`, `researchSlugs`, `labSlugs`, `noteSlugs`: Arrays of connected entity slugs.
3. **Validate**:
   ```bash
   npm test
   npm run check
   npm run build
   ```
