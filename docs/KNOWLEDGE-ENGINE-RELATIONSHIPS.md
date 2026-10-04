# Knowledge Engine Relationships & Edge Semantics

## 1. Supported Relationship Taxonomies

| Relationship Type | Source Entity | Target Entity | Meaning |
| :--- | :--- | :--- | :--- |
| **`USED_IN`** | Technology | Project / Lab / Research | Direct technical adoption in codebase |
| **`EXPLORES`** | Research | Technology / Problem | Formal academic/empirical investigation |
| **`ORIGINATED_FROM`** | Project | Lab Experiment | Production system grew from an initial workbench probe |
| **`DOCUMENTS`** | Engineering Note | Project / Lab / Technology | In-depth retrospective, post-mortem, or pattern breakdown |
| **`INFORMED_BY`** | Project | Research / Note | Architecture influenced by research findings |
| **`IMPLEMENTS`** | Project | Research / Architecture | Concrete realization of theoretical models |
| **`VALIDATES`** | Lab Experiment | Mathematical Model | Empirical test validating assumptions |

---

## 2. Bidirectional Edge Navigation
All relationships are indexed symmetrically: if `note:async-sqlalchemy` `DOCUMENTS` `project:curasphere-hms`, the project entity automatically resolves the note under its connected documentation.
