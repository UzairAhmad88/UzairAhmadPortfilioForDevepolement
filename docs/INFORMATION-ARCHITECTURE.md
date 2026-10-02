# Information Architecture Specification — Uzair Ahmad Portfolio

## 1. Executive Summary & Core Objective
The objective of this Information Architecture (IA) is to organize Uzair Ahmad's personal professional web presence into an intuitive, scalable, and search-indexable system.

The site communicates a clear professional narrative:
$$\text{PERSON} \longrightarrow \text{THINKING} \longrightarrow \text{WORK} \longrightarrow \text{PROOF} \longrightarrow \text{CONTACT}$$

Visitors must never hunt for core facts. The architecture allows diverse technical disciplines—**Quantitative Finance**, **AI / Machine Learning**, **Full Stack Software**, and **Product Engineering**—to coexist harmoniously without creating confusion.

---

## 2. Six-Level Information Hierarchy

| Level | Strategic Question | Information Delivered | Primary Locations |
|---|---|---|---|
| **Level 1** | **Who is Uzair?** | Professional identity, domain intersection, technical focus | Hero Eyebrow, H1, About Summary |
| **Level 2** | **What does Uzair do?** | 4 core capability disciplines (Quant, AI/Agents, Full Stack, Products) | Systems Section, Capabilities Hub |
| **Level 3** | **What has Uzair built?** | Featured systems, case studies, working applications, GitHub repositories | Work Section, Project Index |
| **Level 4** | **How does Uzair think & work?** | Engineering principles, data-to-product pipeline, problem-solving mindset | Architecture Pipeline, "How I Think" |
| **Level 5** | **What evidence demonstrates this?** | Real code repositories, live demos, research methodologies, activity signals | Verified GitHub Links, Lab Notes, Timeline |
| **Level 6** | **How can someone engage / contact?** | Direct email, LinkedIn messaging, WhatsApp chat, collaboration inquiry | Contact Section, Persistent CTAs, Footer |

---

## 3. Site Map & Page Justification Matrix

```
                        ┌───────────────────────────────┐
                        │          HOME ( / )           │
                        └───────────────┬───────────────┘
                                        │
      ┌─────────────────┬───────────────┼───────────────┬─────────────────┐
      │                 │               │               │                 │
┌─────▼─────┐     ┌─────▼─────┐   ┌─────▼─────┐   ┌─────▼─────┐     ┌─────▼─────┐
│   ABOUT   │     │   WORK    │   │ RESEARCH  │   │  SYSTEMS  │     │  CONTACT  │
│ ( /about )│     │ ( /work ) │   │(/research)│   │(/systems) │     │(/contact) │
└───────────┘     └─────┬─────┘   └───────────┘   └───────────┘     └───────────┘
                        │
                  ┌─────▼─────────────┐
                  │   WORK / [slug]   │
                  │   (Case Studies)  │
                  └───────────────────┘
```

### Page Evaluation & Justification:

| Page Route | Phase 01/02 Status | Justification & Purpose | Target Audience | Key Content Included | Content Excluded |
|---|---|---|---|---|---|
| `/` (Home) | **Active** | 30-second gateway summarizing identity, disciplines, featured projects, and contact | All visitors | Hero, 4 disciplines, featured project, tech map, recent signals, primary CTAs | Exhaustive documentation, lengthy autobiographies |
| `/about` | **Architecture Defined** (Phase 03) | Contextual background, technical journey, engineering principles, current focus | Recruiters, Collaborators | Career narrative, technical philosophies, working values, toolkit | Generic life story, unrelated personal trivia |
| `/work` | **Architecture Defined** (Phase 03) | Comprehensive catalog of engineering systems, applications, and tools | Technical recruiters, Founders, Clients | Categorized projects, technology badges, repository links, status | Non-technical fluff, unverified claims |
| `/work/[slug]` | **Architecture Defined** (Phase 04) | Deep-dive case studies explaining problem, architecture, decisions, outcomes | Senior engineers, Hiring managers | Problem statement, architecture diagrams, technical tradeoffs, lessons | Fluff, marketing buzzwords |
| `/research` | **Architecture Defined** (Phase 07) | Explorations in quantitative trading, time-series, agentic workflows | Researchers, Quants, AI teams | Hypotheses, backtest methodology, mathematical modeling, experiments | Unverified investment advice |
| `/systems` | **Architecture Defined** (Phase 03) | In-depth breakdown of the 4 technical pillars and systems architecture | Technical directors, Architects | Deep discipline specifications, data flows, infrastructure paradigms | Vague high-level buzzwords |
| `/contact` | **Architecture Defined** (Phase 03) | Direct communication portal with verified channels | Clients, Recruiters, Collaborators | Email, LinkedIn, WhatsApp, collaboration inquiry guidelines | Complex intrusive forms |

---

## 4. Homepage 30-Second Strategy
A visitor landing on the homepage must absorb four fundamental realities within 30 seconds:

```
00-05s: IDENTITY ─────► "Uzair Ahmad — Quantitative AI & Product Engineer"
05-15s: INTERSECTION ─► "Where finance, intelligence, and software meet."
15-25s: PROOF ────────► Real codebases: Return Prediction, Healthcare SaaS, Market Regime Engine
25-30s: ACTION ───────► Direct conversation via LinkedIn, Email, or WhatsApp
```

---

## 5. Information Grouping Rules
1. **Never bury code evidence**: Every project reference must link directly to verifiable source code or working deployment.
2. **Strict separation of claims and reality**: If a system is in experimentation stage (e.g. Market Regime Engine), label it as *Research / Active*; if deployed, label as *Completed*.
3. **No orphaned pages**: Every subpage must provide contextual breadcrumbs and clear navigation back to related work or the contact portal.
