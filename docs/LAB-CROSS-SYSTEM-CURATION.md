# Lab Cross-System Curation & Boundary Rules

## 1. Subsystem Boundaries & Anti-Duplication Rules

To maintain high information density without duplicating narratives across the platform, every entity is assigned a primary home:

| Entity Type | Primary Role | What is Stored Here | What is NOT Stored Here |
|:---|:---|:---|:---|
| **Work (`/work`)** | System Case Study | Full architecture, production constraints, deployed features, multi-lens analysis. | Small isolated script tests or exploratory mathematical proofs. |
| **Lab (`/lab`)** | Empirical Experiment | Research question, hypothesis, code benchmark, visual evidence, direct outcome, limitations. | Full product documentation or multi-page architectural dissertations. |
| **Research (`/research`)** | Theoretical Inquiry | Broad domain literature, hypotheses, formal proofs, structural breakdowns. | Ephemeral code snippets or isolated UI scripts. |
| **Notes (`/notes`)** | Engineering Lesson | Deep dive into a specific bug, library quirk, mathematical theorem, or runtime lifecycle. | General project summaries. |

---

## 2. Contextual Handoff Patterns

When navigating from a Lab experiment to a connected system:
1. **Lab $\rightarrow$ Project**: The link states `"Promoted to Project: [Name]"` or `"Informs Project: [Name]"`, directing the visitor to inspect the production implementation.
2. **Lab $\rightarrow$ Note**: The link states `"Read Note: [Title]"`, directing the visitor to the dedicated architectural or mathematical breakdown without repeating the full text in the Lab view.
3. **Lab $\rightarrow$ Research**: The link states `"Validates Inquiry: [Title]"`, contextualizing the empirical evidence within the broader theoretical question.
4. **Lab $\rightarrow$ Technology**: The technology chips link directly to `/technologies/[id]` to show all other platform projects utilizing the same tool.

---

## 3. Verification of Relationships

Every cross-reference in `src/data/lab.ts` (`relatedProjects`, `relatedResearch`, `relatedNotes`, `relatedTechnologies`, `promotedToProject`) has been verified to resolve to a canonical slug or ID in the respective subsystem data file. Zero orphaned or fabricated links exist.
