# Information Architecture 2.0: Personal Engineering & Research Platform

**Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
**Live Canonical URL:** https://uzair-ahmad-portfilio-for-devepolem.vercel.app/  
**Phase:** 03 — Information Architecture + Content Architecture  
**Status:** Approved & Implemented  

---

## 1. Executive Summary & Conceptual Model

The platform transforms from a standard "Developer Portfolio" into a structured **Personal Engineering & Research Platform**.

```
                         UZAIR AHMAD
                              │
                      PERSONAL IDENTITY
                              │
         ┌────────────────────┼────────────────────┐
         │                    │                    │
        WORK               RESEARCH                LAB
         │                    │                    │
     PROJECTS            NOTES / ARTICLES      EXPERIMENTS
         │                    │                    │
         └────────────────────┼────────────────────┘
                              │
                       KNOWLEDGE SYSTEM
                              │
                        HOW I BUILD
                              │
                           ABOUT
                              │
                       COLLABORATE
                              │
                           CONTACT
```

---

## 2. Core Functional Pillars: Work vs Research vs Lab

| Pillar | Primary Definition | Content Archetypes | Primary User Intent |
| :--- | :--- | :--- | :--- |
| **WORK** (`/work`) | Practical software systems engineered to solve real-world problems. | Deployed products, full-stack web applications, backend APIs, quantitative prediction engines. | "Show me verifiable software you have built and deployed." |
| **RESEARCH** (`/research`) | Methodological investigations, algorithmic studies, and engineering notes. | Time-series stationarity analyses, neural return predictions, agent state machine evaluations. | "Show me how you analyze complex problems and design models." |
| **LAB** (`/lab`) | Exploratory prototypes, proofs-of-concept, and experimental builds. | Micro-tools, algorithmic benchmarks, UI interaction prototypes, exploratory scripts. | "Show me what you are tinkering with and prototyping right now." |

---

## 3. Primary Navigation Architecture

The site uses a disciplined 6-item primary navigation structure:

1. **Home (`/`)**: High-bandwidth entry point establishing identity, active focus, selected systems, and direct pathways.
2. **Work (`/work`)**: The permanent catalog of production systems and detailed case studies.
3. **Research (`/research`)**: Formal inquiries, mathematical models, and engineering writeups.
4. **Lab (`/lab`)**: Rapid prototypes, algorithmic experiments, and technical playgrounds.
5. **About (`/about`)**: Personal background, engineering philosophy, and continuous learning journey.
6. **Contact (`/contact`)**: Direct channels, structured communication inquiry, and collaboration parameters.

---

## 4. Scalability Architecture (5 to 100+ Items)

To prevent the homepage and category indices from becoming cluttered as Uzair's body of work expands:

```
┌─────────────────────────────────────────────────────────────┐
│                    PAGE PRESENTATION DEPTH                   │
├───────────────────┬─────────────────────────────────────────┤
│ LEVEL             │ DISPLAY PATTERN & VOLUME                │
├───────────────────┼─────────────────────────────────────────┤
│ Flagship (Level A)│ Featured on Home + Full Case Study      │
│                   │ (Top 3–4 current major systems)         │
├───────────────────┼─────────────────────────────────────────┤
│ Detailed (Level B)│ Listed on /work Grid + Dedicated Detail │
│                   │ (8–15 high-fidelity projects)           │
├───────────────────┼─────────────────────────────────────────┤
│ Standard (Level C)│ Filterable Grid Entry with Direct Links │
│                   │ (15–30 verified builds)                 │
├───────────────────┼─────────────────────────────────────────┤
│ Archive (Level D) │ Searchable / Filterable Archive Index   │
│                   │ (50–100+ repositories & past tools)     │
└───────────────────┴─────────────────────────────────────────┘
```

---

## 5. Breadcrumb & Hierarchy Schema

Deep content pages feature semantic Schema.org breadcrumbs:

- `Home → Work → [Project Slug]`
- `Home → Research → [Inquiry Slug]`
- `Home → Lab → [Experiment Slug]`
- `Home → About`
- `Home → Contact`
