# Project Archive System — Taxonomy & Classification Guide

## 1. Executive Summary

The **Taxonomy Specification** defines strict, factual terminology for the historical engineering archive. Under no circumstances are pejorative or judgmental terms used (e.g., "Failed", "Dead", "Bad Code", "Toy App"). Every classified project is categorized using verified historical realities and factual lifecycle statuses.

---

## 2. Archive States Taxonomy

```
                   ┌───────────────────────────────────┐
                   │        ALL PROJECT ENTITIES       │
                   └─────────────────┬─────────────────┘
                                     │
                 ┌───────────────────┴───────────────────┐
                 │                                       │
        ┌────────▼────────┐                     ┌────────▼────────┐
        │  PUBLIC STATES  │                     │ INTERNAL STATES │
        └────────┬────────┘                     └────────┬────────┘
                 │                                       │
  ┌──────────────┼──────────────┐            ┌───────────┴───────────┐
  │              │              │            │                       │
┌─▼──────┐ ┌─────▼──────┐ ┌─────▼──────┐ ┌───▼───────────┐ ┌─────────▼────────┐
│ ACTIVE │ │  ARCHIVED  │ │ SUPERSEDED │ │  UNPUBLISHED  │ │     EXCLUDED     │
└────────┘ └────────────┘ └────────────┘ └───────────────┘ └──────────────────┘
  │              │              │
┌─▼──────┐ ┌─────▼──────┐       │
│ LEGACY │ │   PAUSED   │       │
└────────┘ └────────────┘       │
  │                             │
┌─▼─────────┐                   │
│ ABANDONED │                   │
└───────────┘                   │
```

### 2.1 Public Archive States

| State | Badge Label | Definition | UI Treatment |
|---|---|---|---|
| `active` | `Active` | Flagship, currently maintained, or actively referenced core project. | Standard Project Card on `/work`. |
| `archived` | `Archived` | Fully completed milestone preserved intact as a historical reference point. | Archive Card on `/archive` with muted historical badge. |
| `superseded` | `Superseded` | Preceding architectural iteration replaced by an advanced successor system. | Highlighted evolution link directing to the successor project. |
| `legacy` | `Legacy` | Functional early system built using older technological paradigms (e.g. Flask 2.x, vanilla DOM). | Detailed retrospective note on technical growth and stack transition. |
| `paused` | `Paused` | Work intentionally placed on hold due to prioritized research or prerequisites. | Informative note explaining project context. |
| `abandoned` | `Archived Concept` | Early experimental exploration halted prior to productionization. | Educational summary of takeaways and limitations. |

### 2.2 Internal / Guarded States

| State | Accessibility | Exposure |
|---|---|---|
| `unpublished` | Development/Staging only | Excluded from `/archive`, `/work`, Knowledge Graph, Discovery, and Sitemap. |
| `excluded` | Strictly hidden | Filtered out at the service layer; guaranteed zero SEO or UI footprint. |

---

## 3. Archive Reasons Taxonomy

Every non-active project must be assigned an approved reason from this controlled taxonomy:

| Taxonomy Key | Human-Readable Label | Applied Criteria |
|---|---|---|
| `COMPLETED_HISTORICAL` | Completed Historical Milestone | Project reached completion; preserved for record of capability at that time. |
| `SUPERSEDED` | Superseded by Modern System | Replaced by a more robust architecture or multi-tier product. |
| `LEGACY` | Legacy Architecture & Stack | Early codebase demonstrating foundation skills (e.g., Python/Flask monoliths). |
| `PAUSED` | Development Suspended | Active work paused; may be revived in a future research phase. |
| `ABANDONED` | Exploratory Work Discontinued | Proof of concept that concluded without becoming a production platform. |
| `NO_LONGER_MAINTAINED` | Maintained Deprecated | Project is functional but no longer receives security or feature updates. |
| `ACADEMIC_HISTORY` | Academic Coursework Milestone | Developed as part of formal degree milestones or academic labs. |
| `EXPERIMENTAL_HISTORY` | Experimental Prototype | Prototype built to test a specific algorithm, model, or protocol. |
| `UNPUBLISHED` | Internal Draft | Project metadata curated in repository but marked as non-public. |
| `EXCLUDED` | Curated Out | Project withheld from public catalog based on relevance criteria. |

---

## 4. Terminology Style Guide

### Forbidden Phrases vs. Canonical Equivalents

| ❌ Unacceptable Pejorative Label | ✅ Approved Engineering Taxonomy |
|---|---|
| "Dead project" | "Preserved historical milestone" |
| "Failed experiment" | "Completed architectural exploration" |
| "Old garbage code" | "Legacy Flask / Python architecture" |
| "Obsolete tool" | "Superseded by Curasphere HMS" |
| "Giving up on this" | "Development intentionally paused" |
| "Beginner project" | "Early foundational implementation" |
