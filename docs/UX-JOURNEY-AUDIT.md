# UX Journey Audit

> **Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
> **Evaluation Scope:** 6 Canonical User Journeys across Information Architecture, Wayfinding, Cognitive Friction, and CTA Clarity.

---

## Journey 1 — Recruiter / Senior Engineer

**Goal:** Rapidly evaluate technical depth, architecture decisions, and code quality.

```text
Home
  ↓ (Primary CTA: "Inspect Selected Work" or Top Navigation)
Work (/work)
  ↓ (Filter by Domain / Stack or select featured case study)
Project Case Study (/work/[slug])
  ↓ (Read Architecture, Decisions, Trade-offs, Evidence)
Repository / Live Production Link (Outbound GitHub / Live Demo)
```

- **Step 1 (Home):** Visitor sees headline positioning (*Full-Stack Systems Architect & AI/Web Engineer*), core domain badges, and 3 high-impact project highlights.
- **Step 2 (Work):** Visitor scans domain filters (Systems, AI/ML, Web Apps, DevTools). Cards show immediate context: Category, Title, Problem statement, Key Stack, and explicit `Inspect Case Study →` action.
- **Step 3 (Case Study):** Detail page provides architecture breakdown, technical stack, metrics, problems solved, and engineering challenges.
- **Step 4 (Evidence):** Outbound buttons (`Source Code`, `Live System`) provide immediate proof without dead ends.
- **Result:** **PASS** — Zero dead ends, clear proof of competence, rapid wayfinding under 3 clicks.

---

## Journey 2 — Academic / Industry Researcher

**Goal:** Inspect research inquiries, hypotheses, methodologies, and experimental evidence.

```text
Home
  ↓ (Navigation: "Research" or Hero secondary CTA)
Research Index (/research)
  ↓ (Select inquiry topic: Neural Search, LLM Benchmarking, Distributed Caching)
Research Detail (/research/[slug])
  ↓ (Inspect Hypothesis, Methodology, Data, Findings, Limitations)
Related Project & Technology (/work/[slug] or /technology)
```

- **Step 1 (Home):** Visitor notices research focus areas in Hero and Currently stream.
- **Step 2 (Research):** Cards present explicit research questions (`Inquiry: How do vector quantization algorithms scale under memory constraints?`), domain classification, and publication state.
- **Step 3 (Detail):** Reads formal methodology, mathematical framing, benchmarking charts, and empirical findings.
- **Step 4 (Relationships):** Discovers connected software implementations in Work or underlying tooling in Technology.
- **Result:** **PASS** — Scholarly structure preserved; avoids generic blog feel; strong reciprocal linking.

---

## Journey 3 — Technical Explorer / Hacker

**Goal:** Explore cutting-edge prototypes, work-in-progress experiments, and interactive workbenches.

```text
Home
  ↓ (Navigation: "Lab" or Currently Exploration item)
Lab Index (/lab)
  ↓ (Filter by State: Active / Prototype / Proof-of-Concept)
Experiment Detail (/lab/[slug])
  ↓ (Read Question, Constraints, Benchmarks, Observations)
Related Research / Source Repo
```

- **Step 1 (Home):** Visitor is drawn to the "Currently Exploring" callout.
- **Step 2 (Lab):** High visual clarity; experimental status tags (Active, Alpha, Proof of Concept); concise experiment question boxes.
- **Step 3 (Experiment):** Clear breakdown of the technical problem, initial hypothesis, setup instructions, and observed benchmarks.
- **Step 4 (Next Steps):** Direct links to GitHub repository sandbox or companion research inquiry.
- **Result:** **PASS** — Clear separation between production work and experimental research.

---

## Journey 4 — Reader / Technical Blogger

**Goal:** Read in-depth architectural post-mortems, implementation notes, and best practices.

```text
Home
  ↓ (Navigation: "Notes")
Engineering Notes (/notes)
  ↓ (Select note by topic or chronological index)
Note Detail (/notes/[slug])
  ↓ (Read technical walkthrough, code snippets, architectural trade-offs)
Related Projects / Connected Notes
```

- **Step 1 (Home):** Direct link in main navigation and footer.
- **Step 2 (Notes Index):** Clean chronological index with reading time, difficulty level, topic pills, and architectural takeaways.
- **Step 3 (Note Detail):** High-readability typography (Inter/JetBrains Mono), syntax-highlighted code snippets, copyable blocks, and responsive tables.
- **Step 4 (Cross-links):** Contextual links to projects where the technique was applied in production.
- **Result:** **PASS** — Clean typography, distraction-free reading mode, accessible syntax highlighting.

---

## Journey 5 — Potential Client / Collaborator

**Goal:** Understand engagement models, advisory capabilities, and initiate direct contact.

```text
Home
  ↓ (Navigation: "Collaboration" or Footer CTA "Start a Conversation")
Collaboration Overview (/collaboration)
  ↓ (Review engagement types: Architecture Consulting, MVP Development, AI Integration)
Contact Page (/contact)
  ↓ (Fill out structured form or click Direct Channels: WhatsApp / Email / LinkedIn)
Submission Confirmation & SLA Expectation
```

- **Step 1 (Home):** Prominent contact CTA in header, footer, and dedicated Collaboration section.
- **Step 2 (Collaboration):** Clearly specifies what Uzair builds, engagement scope, typical timeline, and working philosophy (no buzzwords or agency fluff).
- **Step 3 (Contact):** Frictionless contact options: encrypted web form, direct email (`mailto:`), and direct WhatsApp for rapid technical consulting.
- **Step 4 (Follow-up):** Clear expectation that responses arrive within 24–48 hours.
- **Result:** **PASS** — Clear expectations, zero sales fluff, multiple direct channels.

---

## Journey 6 — Discovery / Serendipitous Searcher

**Goal:** Search across all artifacts (Projects, Research, Notes, Lab, Technologies) using global discovery.

```text
Any Page
  ↓ (Press "/" shortcut or click "Discovery" in nav)
Discovery (/discovery)
  ↓ (Type multi-word query e.g. "Distributed Systems", "TypeScript", "Astro")
Search Results View
  ↓ (Filter by Content Type or click direct matched item)
Target Content Destination
```

- **Step 1 (Entry):** Instant keyboard shortcut `/` or navigation item opens Discovery.
- **Step 2 (Query):** Instant client-side search with debounced filtering and snippet matching.
- **Step 3 (Results):** Results clearly grouped by type (Project, Research, Note, Experiment, Tech) with excerpt context.
- **Step 4 (Zero State):** If no direct match occurs, helpful categories and popular search suggestions are provided.
- **Result:** **PASS** — Instant search, accessible live region announcements, clear result categorization.

---

## Summary Journey Matrix

| Journey ID | Target Persona | Wayfinding Friction | Cognitive Load | Next-Step Obviousness | Overall Result |
|---|---|---|---|---|---|
| **Journey 1** | Recruiter / Engineer | Zero | Low | Immediate (`Inspect Case Study`) | **PASS** |
| **Journey 2** | Academic / Researcher | Zero | Moderate (Structured) | Immediate (`Inspect Methodology`) | **PASS** |
| **Journey 3** | Technical Explorer | Zero | Low | Immediate (`Inspect Workbench`) | **PASS** |
| **Journey 4** | Engineering Reader | Zero | Low | Immediate (`Read Note`) | **PASS** |
| **Journey 5** | Potential Collaborator | Zero | Low | Immediate (`Start a Conversation`) | **PASS** |
| **Journey 6** | Global Discovery | Zero | Low | Immediate (`View Matching Content`) | **PASS** |
