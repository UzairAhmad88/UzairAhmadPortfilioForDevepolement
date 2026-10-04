# Post-Production Operations Manual

**Project:** Personal Developer Portfolio / Personal Engineering & Research Platform  
**Stage:** Post-Production Governance & Long-Term Stewardship  
**Scope:** Practical Operations, Maintenance Workflows & Evolution Manual  

---

## 1. Quick Reference: Common Maintenance Scenarios

### 1.1 How do I add a new project case study?
1. Open `src/data/projects.ts` and append a new `Project` object.
2. Provide all 6 lenses (Overview, Architecture, Constraints, Stack, Evidence, Lessons).
3. Ensure all listed `technologies` exist in `src/data/technologies.ts`.
4. Link the public GitHub repository URL in `githubUrl`.
5. Run `npm test` and `npm run build` to verify route generation.

### 1.2 How do I add a new research inquiry or paper?
1. Open `src/data/research.ts` and append a new `ResearchItem`.
2. Include the formal hypothesis, methodology stages, empirical observations, and LaTeX equations.
3. Link related projects and engineering notes.
4. Run `npm test` to verify referential integrity.

### 1.3 How do I add an experiment or prototype to the Lab?
1. Open `src/data/lab.ts` and append a new `LabItem`.
2. Set status (`completed`, `prototype`, `concept`) and type (`cli`, `interactive`, `probe`).
3. Add repository or live demo links if available.

### 1.4 How do I update my "Currently" status and focus?
1. Open `src/data/currently.ts` or `src/data/site.ts`.
2. Update the status indicator string, current research topic, or primary focus areas.
3. Run `npm run build` to update the homepage static build.

### 1.5 How do I fix a bug in a component or layout?
1. Create a local fix branch (`fix/issue-description`).
2. Make the minimal necessary code adjustment in `src/components/` or `src/styles/`.
3. Verify that the fix does not cause layout shifts or break dark/light mode contrast.
4. Run `npm test && npm run check`.
5. Merge to `main` to trigger production edge deployment.

### 1.6 How do I synchronize GitHub and Vercel evidence?
```bash
# Safe read-only dry run
npm run projects:sync:dry

# Validate repository mappings
npm run projects:validate
```

### 1.7 How do I deploy updates to production?
- Push clean commits to the `main` branch on GitHub:
  ```bash
  git add .
  git commit -m "feat(content): add new quantitative signal research dossier"
  git push origin main
  ```
- Vercel automatically compiles the static output and distributes it globally in < 60 seconds.

### 1.8 How do I recover the platform if production goes down?
- **Instant Rollback:** In the Vercel Dashboard, select the previous known good deployment and click **Instant Rollback**.
- **Local Reconstruction:** Clone the repository and run `npm install && npm run build`. The platform has zero remote database dependencies.

### 1.9 How do I decide whether a new feature belongs?
- Run the Feature Gate check from `docs/POST-PRODUCTION-GOVERNANCE.md`. If it does not strengthen personal identity, provide real evidence, or improve maintainability, reject it.

### 1.10 How do I preserve the platform's authentic identity?
- Review `docs/IDENTITY-GOVERNANCE.md` and `docs/HUMANITY-AUDIT.md`. Maintain first-person precision, avoid corporate clichés, and never add fake skill ratings.
