# UX Final Defect Register

> **Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
> **Phase:** Final UX Consistency, Content Density & Information Hierarchy Pass  
> **Status:** All P0/P1/P2/P3 defects verified, remediated, or validated with 0 blockers.

---

## 1. Severity Definitions

- **P0:** Prevents use (blocker, crash, broken routing)
- **P1:** Major confusion / friction (unclear purpose, misleading CTA, broken filter state)
- **P2:** Noticeable UX issue (overloaded cognitive density, ambiguous metadata, awkward mobile wrapping)
- **P3:** Minor friction (subtle spacing rhythm, verbose tag lists)
- **P4:** Cosmetic / usability refinement (micro-interaction timing, focus ring styling)

---

## 2. Defect Register & Resolution Log

| ID | Route | UX Problem | Impact | Severity | Root Cause | Fix | Status |
|---|---|---|---|---|---|---|---|
| UX-001 | `/` (Home Hero) | Hero action buttons could compete with primary identity message if too dense | Moderate | P2 | Multiple actions without clear primary vs secondary visual weight | Established strict CTA hierarchy: Primary (`Inspect Selected Work`), Secondary (`Read Research Inquiries`), Quiet (`Direct Channels`) | Resolved |
| UX-002 | `/` (Currently) | Risk of currently active work reading like an automated real-time status feed | Moderate | P2 | Ambiguous section headers | Structured into distinct curated streams: Research, Systems, Learning with explicit date stamps and badges | Resolved |
| UX-003 | `/work` (Cards) | Risk of tag overload overwhelming core project problem statement | Moderate | P2 | Excessive badge density without visual grouping | Established clear visual hierarchy: Category Badge → Title Link → Problem Statement → Core Tech (max 4) → Primary Action (`Inspect Case Study →`) | Resolved |
| UX-004 | `/work` (Filters) | Horizontal overflow on narrow mobile screens (320px–390px) | High | P1 | Rigid inline flex without responsive wrap rules | Implemented flex-wrap with accessible tap targets (min 44px) and clear active state indicators | Resolved |
| UX-005 | `/research` (Inquiry) | Inquiry cards could read as generic blog posts rather than structured scientific inquiries | High | P1 | Missing clear hypothesis / inquiry question block | Created dedicated Question Box (`Inquiry: ...`) with explicit domain pills and method tags | Resolved |
| UX-006 | `/lab` (Experiments) | Lab cards having high information density leading to cognitive overload | High | P1 | Displaying experimental workbench metadata simultaneously | Established clean hierarchy: Title → Primary Question Box → Short Summary → Stack Pills → Direct Action (`Inspect Workbench →`) | Resolved |
| UX-007 | `/notes` (Cards) | Excessive metadata above note summary obscuring technical topic | Moderate | P2 | Header metadata stack preceding title | Shifted metadata to compact top badge + bottom reading timestamp, prioritizing note title and architectural takeaway | Resolved |
| UX-008 | `/technology` (Skills) | Artificial skill bars or percentages imply arbitrary mastery ratings | High | P1 | Anti-pattern of percentage bars (e.g., Python 95%) | Eliminated all arbitrary bars; grounded technology in real project, research, and lab evidence mappings | Resolved |
| UX-009 | `/discovery` (Search) | Empty search query providing zero recovery pathways | Moderate | P2 | Generic "No results" text | Provided structured recovery actions: suggested domains, available topic tags, and direct navigation links | Resolved |
| UX-010 | `/contact` (Form) | Unclear response expectation after message submission | Moderate | P3 | Missing post-submit guidance | Added clear timeline expectation (response within 24–48h) and direct fallback email link | Resolved |
| UX-011 | Global (Float CTA) | Floating WhatsApp button dominating mobile viewport or blocking footer elements | High | P2 | Fixed position overlapping interactive elements | Adjusted z-index, added subtle resting opacity, and provided safe margin spacing for mobile viewports | Resolved |
| UX-012 | Global (CTAs) | Generic labels such as "Learn More" or "Click Here" | High | P1 | Non-descriptive anchor text hurting screen-reader & contextual UX | Standardized on action-specific labels: `Inspect Case Study`, `Read Research Inquiries`, `Inspect Workbench`, `Start a Conversation` | Resolved |

---

## 3. Summary & Quality Gate Status

- **P0 Defects:** 0
- **P1 Defects:** 0 (All 4 remediated)
- **P2 Defects:** 0 (All 6 remediated)
- **P3 Defects:** 0 (All 1 remediated)
- **P4 Defects:** 0
- **Total Open Defects:** 0
- **Quality Gate:** `PASSED`
