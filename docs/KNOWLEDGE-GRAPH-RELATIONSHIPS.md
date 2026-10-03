# KNOWLEDGE GRAPH RELATIONSHIPS & SEMANTIC TAXONOMY
## Uzair Ahmad — Personal Engineering & Research Platform

---

## 1. Relationship Semantic Taxonomy

| Relationship Type | Description | Source Entity Type | Target Entity Type | Human Label |
|:---|:---|:---|:---|:---|
| `USED_IN` | Technology is actively used in project/lab/research | `project` / `research` / `lab` / `technology` | `technology` / `project` | Uses Technology / Used in Project |
| `EXPLORES` | Research or Tech explores a problem domain | `research` / `technology` | `technology` / `research` | Explores Technology / Explored in Research |
| `ORIGINATED_FROM` | Project originated from a workbench prototype | `project` | `lab` | Originated from Lab Experiment |
| `PROMOTED_TO` | Lab experiment graduated to a production system | `lab` | `project` | Graduated to Production System |
| `DOCUMENTS` | Engineering note captures lessons or tradeoffs | `note` / `project` / `research` / `lab` | `project` / `research` / `lab` / `technology` | Documents Lesson / Captured in Note |
| `INFORMED_BY` | Project/Research was informed by research findings | `project` / `research` | `research` / `note` | Informed by Research |
| `IMPLEMENTS` | Project implements a theoretical research inquiry | `research` / `project` | `project` / `research` | Applied in Project / Implements Inquiry |
| `VALIDATES` | Experiment validates an algorithmic hypothesis | `lab` / `research` | `research` / `lab` | Validates Hypothesis / Tested in Lab |
| `USES_METHOD` | Project or technology demonstrates a methodology step | `methodology` / `project` / `technology` | `project` / `methodology` | Applied in Methodology Step |
| `RELATED_TO` | General meaningful bidirectional connection | Any | Any | Related System / Connected Entity |

---

## 2. Derivation Rules from Canonical Content

Edges are derived automatically from existing data attributes:
1. `project.technologies` → `USED_IN` → `technology:<id>`
2. `project.relatedResearch` → `INFORMED_BY` → `research:<slug>`
3. `project.originatedFromLab` → `ORIGINATED_FROM` → `lab:<slug>`
4. `project.relatedLab` → `RELATED_TO` → `lab:<slug>`
5. `project.relatedNotes` → `DOCUMENTS` → `note:<slug>`
6. `project.relatedProjects` → `RELATED_TO` → `project:<slug>`
7. `research.technologies` → `USED_IN` → `technology:<id>`
8. `research.relatedProjects` → `IMPLEMENTS` → `project:<slug>`
9. `research.relatedLab` → `VALIDATES` → `lab:<slug>`
10. `research.relatedNotes` → `DOCUMENTS` → `note:<slug>`
11. `lab.technologies` → `USED_IN` → `technology:<id>`
12. `lab.promotedToProject` → `PROMOTED_TO` → `project:<slug>`
13. `lab.relatedProjects` → `RELATED_TO` → `project:<slug>`
14. `lab.relatedResearch` → `VALIDATES` → `research:<slug>`
15. `lab.relatedNotes` → `DOCUMENTS` → `note:<slug>`
16. `note.technologies` → `USED_IN` → `technology:<id>`
17. `note.relatedProjects` → `DOCUMENTS` → `project:<slug>`
18. `note.relatedResearch` → `DOCUMENTS` → `research:<slug>`
19. `note.relatedLab` → `DOCUMENTS` → `lab:<slug>`
20. `technology.methodologySteps` → `USES_METHOD` → `methodology:<id>`
21. `methodology.projectSlugs` → `USES_METHOD` → `project:<slug>`
