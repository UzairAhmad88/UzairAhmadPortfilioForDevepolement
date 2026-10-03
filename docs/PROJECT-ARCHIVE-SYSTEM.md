# Project Archive System Architecture

## 1. Executive Summary

The Project Archive System delivers a structured historical and evolutionary layer for the Personal Engineering & Research Platform. It preserves earlier software architectures, superseded prototypes, and legacy applications as inspectable evidence of engineering progression without degrading or cluttering the primary active portfolio catalog.

The core philosophy of the Archive is:
> **“This is part of my engineering history.”**  
> It does NOT communicate: “These are my bad projects.”

The archive is an evolutionary record, not a quality ranking or project graveyard.

---

## 2. System Philosophy & Invariants

```
┌─────────────────────────────────────────────────────────────┐
│                 PORTFOLIO / ACTIVE CATALOG                  │
│       Current Flagship Systems & Active Inquiries           │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                PROJECT ARCHIVE LAYER (/archive)             │
│   - Superseded Architectures (Evolved into new systems)     │
│   - Legacy Stacks (Foundational earlier implementations)    │
│   - Completed Historical Work (Preserved client portals)    │
│   - Historical Experiments (Concluded prototypes)           │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│              HISTORICAL EVIDENCE & KNOWLEDGE GRAPH          │
│   - Immutable code repositories                             │
│   - Predecessor & Successor relationship edges              │
│   - Retrospective technical decision logs                   │
└─────────────────────────────────────────────────────────────┘
```

### 2.1 Archive $\ne$ Deletion
Archiving a project never deletes its historical context, architecture diagrams, technical decisions, or verifiable evidence. Projects demonstrate learning curves, architectural refactoring rationale, and problem-solving evolution.

### 2.2 Archive $\ne$ Failure
Archived work is never verbally or visually shamed. The platform uses objective, factual classifications (`Archived`, `Superseded`, `Legacy`, `Paused`, `Historical`) rather than subjective failure badges.

### 2.3 Archive $\ne$ Ranking
The system does not calculate "top projects", "worst projects", or "maturity scores". Projects are organized chronologically and contextually.

### 2.4 Stable URL Invariant
Archived projects retain their canonical URLs at `/work/[slug]` to prevent link rot and maintain search references.

---

## 3. Architecture & Integration Points

1. **Project System Integration:** Extends `Project` with optional `archive?: ProjectArchiveMetadata` without creating duplicate models.
2. **Project DNA Integration:** Displays factual historical indicators (`Superseded`, `Legacy System`, `Archived`) in technical fingerprints.
3. **Knowledge Graph Integration:** Connects historical entities via `SUPERSEDED_BY` and `EVOLVED_FROM` relationship edges.
4. **Discovery Integration:** Surfaces historical work with explicit archive tags while prioritizing current flagship systems in default search views.
5. **Project Sync Integration:** Respects human curation; external repository deletions or cloud status changes never automatically archive a project.
