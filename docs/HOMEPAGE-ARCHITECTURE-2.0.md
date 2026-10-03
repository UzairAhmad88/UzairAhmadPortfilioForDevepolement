# Homepage Architecture 2.0: Living Narrative Structure

**Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
**Live Canonical URL:** https://uzair-ahmad-portfilio-for-devepolem.vercel.app/  
**Phase:** 04 — Currently System + Living Homepage  
**Status:** Approved & Implemented  

---

## 1. Homepage Narrative Storyline

The homepage guides the visitor through a logical, high-bandwidth narrative flow:

```
[01. WHO I AM]                (Hero: Engineering systems where rigor, AI & code meet)
      │
      ▼
[02. WHAT I AM DOING NOW]     (Currently: Building, Learning, Exploring, Interested In)
      │
      ▼
[03. WHAT I HAVE BUILT]       (Selected Work: Curated systems + "View All Work Archive →")
      │
      ▼
[04. CORE DISCIPLINES]        (Systems: 4 connected technical capabilities)
      │
      ▼
[05. TECHNICAL MAP]           (Tech Stack: Engineering roles & practical tools)
      │
      ▼
[06. ACTIVE RESEARCH]         (Research Lab: Inquiries, hypotheses, mathematical models)
      │
      ▼
[07. ARCHITECTURE BLUEPRINT]  (Pipeline topology & production engineering discipline)
      │
      ▼
[08. HOW I THINK]             (About: Research. Build. Ship. & Engineering Mindset)
      │
      ▼
[09. TRAJECTORY]              (Timeline: Milestones & academic foundations)
      │
      ▼
[10. INQUIRY & CONTACT]       (Contact: Start a Conversation, Email, WhatsApp, LinkedIn)
```

---

## 2. Section Breakdown & Source Mapping

| Sequence | Section Title | Numbering | Data Source | Primary CTA |
| :--- | :--- | :--- | :--- | :--- |
| 1 | **Hero** | — | `src/data/site.ts` | `Explore Verified Systems →` |
| 2 | **Currently** | `01 / CURRENTLY` | `src/data/currently.ts` | Direct link to active building system |
| 3 | **Selected Work** | `02 / SELECTED WORK` | `src/data/projects.ts` | `View All Work & Projects Archive →` |
| 4 | **Core Disciplines** | `03 / CORE DISCIPLINES` | `src/data/capabilities.ts` | In-card case study references |
| 5 | **Technical Map** | `04 / TECHNICAL MAP` | `src/data/skills.ts` | Role & capability pills |
| 6 | **Research Lab** | `05 / RESEARCH LAB` | `src/data/research.ts` | `Inspect Inquiry & Findings →` |
| 7 | **Architecture Blueprint** | — | Static SVG Topology | Deterministic pipeline tags |
| 8 | **How I Think** | `06 / HOW I THINK` | `src/data/site.ts` | Mindset points |
| 9 | **Timeline** | — | `src/data/timeline.ts` | Milestone chips |
| 10 | **Inquiry & Collaboration** | `07 / INQUIRY & COLLABORATION` | `src/data/site.ts` | `Start a Conversation` |

---

## 3. Responsive Adaptations

- **Mobile (≤640px):** Single-column stacked cards, full-width touch targets (≥44px), sticky header with accessible drawer.
- **Tablet (641px–1100px):** 2-column grid for Currently and Selected Work.
- **Desktop (≥1101px):** 4-column balanced layout for Currently, 3-column grid for Project cards.
- **Ultrawide (≥1920px):** Max-width 1200px container (`--container-max`) centered with fluid horizontal margins.
