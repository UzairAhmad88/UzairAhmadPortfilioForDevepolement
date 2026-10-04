# UX Information Hierarchy & Content Density Guide

> **Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
> **Purpose:** Document information architecture, visual hierarchy rules, content density modes, and cognitive load controls across all platform surfaces.

---

## 1. Core Communication Architecture

The entire platform is structured to answer visitor questions in a strict cognitive order:

```text
WHO IS UZAIR?
        ↓ (Full-Stack Systems Architect & AI/Web Engineer)
WHAT DOES HE BUILD?
        ↓ (/work — Resilient cloud systems, high-performance web apps, developer tools)
HOW DOES HE THINK?
        ↓ (/about & /notes — Architectural trade-offs, engineering first principles, rigor)
WHAT IS HE RESEARCHING?
        ↓ (/research — Vector quantization, distributed caching, LLM evaluation)
WHAT IS HE EXPERIMENTING WITH?
        ↓ (/lab — Active sandbox prototypes, benchmarking suites, experimental UI)
WHAT TECHNOLOGIES DOES HE USE?
        ↓ (/technology — Real-world stack grounded in verified project evidence)
HOW CAN I EXPLORE HIS WORK?
        ↓ (/discovery & /knowledge — Full-text search and reciprocal relationship graph)
HOW CAN I CONTACT / COLLABORATE?
        ↓ (/collaboration & /contact — Transparent engagement scopes and direct communication)
```

---

## 2. Platform Section Distinctions

To eliminate visitor ambiguity, each section has an explicit boundary:

| Section | Architectural Definition | Primary Question Answered |
|---|---|---|
| **WORK** (`/work`) | Production & Completed Software | *What did Uzair build and deploy?* |
| **RESEARCH** (`/research`) | Structured Empirical Inquiries | *What questions and hypotheses did he investigate?* |
| **LAB** (`/lab`) | Active Experimental Sandboxes | *What active prototypes is he exploring?* |
| **NOTES** (`/notes`) | Public Engineering Notebook | *What technical insights and patterns did he document?* |
| **TECHNOLOGY** (`/technology`) | Evidence-Grounded Catalog | *Where does each tool appear in real projects?* |
| **KNOWLEDGE** (`/knowledge`) | Semantic Relationship Graph | *How do projects, research, and technologies connect?* |
| **TIMELINE** (`/timeline`) | Curated Milestone History | *How did his engineering career and focus evolve?* |
| **ARCHIVE** (`/archive`) | Historical & Inactive Work | *What older work has been superseded or completed?* |

---

## 3. Content Density Modes

Different types of content require different visual densities to maintain focus and prevent cognitive fatigue:

### A. Editorial Density (Breathing Room)
- **Applies to:** `/` (Hero), `/about`, `/collaboration`
- **Characteristics:** Max content width 70–80ch for body text; generous vertical section spacing (`clamp(3rem, 6vw, 6rem)`); balanced line height (`1.7–1.8`); minimal competing UI controls.

### B. Technical Density (Moderate Density)
- **Applies to:** `/work`, `/notes`
- **Characteristics:** Structured grids (1-to-2 or 1-to-3 columns); scannable metadata pills (tech stack, date, reading time); explicit primary action buttons.

### C. Research & Empirical Density (Structured High-Order Density)
- **Applies to:** `/research`, `/lab`
- **Characteristics:** Explicit question callout boxes; hypothesis cards; methodology and benchmarking lists; clear status indicators (Active, In Review, Concluded).

### D. Data Visualization & Graph Density (High Information Density with Strong Grouping)
- **Applies to:** `/knowledge`, `/discovery`
- **Characteristics:** Relationship canvases with fallback accessible list views; distinct color-coded node taxonomy; clear search highlighting and facet counts.

### E. Navigation Density (Compact & Unobtrusive)
- **Applies to:** Header navbar, Breadcrumbs, Mobile drawer
- **Characteristics:** Height 64px–72px; distinct active indicators; clear contrast without overwhelming content below the fold.

---

## 4. Card Hierarchy Standards

Every card type across the platform enforces a strict top-to-bottom visual hierarchy to ensure visitors can scan and understand content in under 3 seconds:

### `ProjectCard`
```text
1. Category / Domain Badge (e.g. "Systems Architecture")
2. Status Indicator (e.g. "Production" / "Completed")
3. Project Title Link
4. Short Problem Statement (max 2–3 lines)
5. Core Technologies (max 4 relevant pills)
6. Primary Action: "Inspect Case Study →"
7. Secondary Action: GitHub / Live Demo links
```

### `LabItemCard`
```text
1. Status Pill + Experiment Type (e.g. "Active Prototype")
2. Year / Date
3. Experiment Title
4. Research Question Box ("Question: ...")
5. Outcome / Observation Summary
6. Tech Stack Pills
7. Primary Action: "Inspect Workbench →"
```

### `ResearchInquiryCard`
```text
1. Research Domain Badge (e.g. "Distributed Systems")
2. Inquiry ID (e.g. "RES-2024-03")
3. Inquiry Title
4. Core Hypothesis / Question Box
5. Methodologies & Tools
6. Primary Action: "Inspect Methodology & Evidence →"
```

### `EngineeringNoteCard`
```text
1. Primary Topic Tag (e.g. "Database Internals")
2. Estimated Reading Time (e.g. "6 min read")
3. Note Title
4. Executive Architectural Takeaway
5. Core Tech Stack
6. Published Date
7. Primary Action: "Read Note →"
```

---

## 5. CTA Language Standard

To prevent ambiguity, the platform forbids vague CTA copy (e.g., "Learn More", "Click Here", "Explore Now") and uses action-specific labels:

| Context | Forbidden Generic Label | Approved Specific Label |
|---|---|---|
| Project Case Studies | "Learn More" / "View" | `Inspect Case Study →` |
| Research Inquiries | "Read More" | `Inspect Methodology & Evidence →` |
| Lab Experiments | "Try It" / "Check Out" | `Inspect Workbench →` |
| Technical Notes | "Read" | `Read Note →` |
| Technologies | "More Info" | `View Related Work →` |
| Collaboration / Contact | "Get in Touch" / "Submit" | `Start a Conversation` |
| Discovery | "Search Now" | `Explore Knowledge Base` |

---

## 6. Mobile Scannability & Viewport Rules

- **First-Glance Rule:** At 390px width, the top viewport immediately communicates identity, engineering positioning, and primary navigation without requiring vertical scrolling.
- **Filter Layouts:** Horizontal filters automatically wrap into clean, touch-friendly rows (`min-height: 44px`, `gap: 0.5rem`) without awkward horizontal clip or hidden scrollbars.
- **Floating CTA Safety:** Floating WhatsApp / contact triggers maintain a minimum 16px clearance from screen edges and do not cover footer links or form submit buttons.
- **Body Copy Width:** Typography containers constrain long-form paragraphs to `max-width: 68ch` to maintain optimal ocular scan rhythm across large desktop displays.
