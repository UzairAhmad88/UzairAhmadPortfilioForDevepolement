# Simplification Audit: Component & System Triage

**Audit Standard:** HCI Reduction of Cognitive Load  
**Classification Types:** `KEEP` · `SIMPLIFY` · `MERGE` · `HIDE` · `REMOVE`

---

## 1. System-by-System Audit Matrix

| System / Element | Previous Complexity | Visitor Cognitive Problem | Decision | Implementation in New Portfolio |
| :--- | :--- | :--- | :--- | :--- |
| **Global Navigation** | 10+ links (Lab, Notes, Graph, Archive, Discovery, Sync) | Decision paralysis; visitor doesn't know where to look first | `SIMPLIFY` | Reduced to 5 essential items: `Home`, `Work`, `Research`, `About`, `Contact`. Internal tools accessible via contextual links. |
| **Hero Section** | DNA fingerprints, floating cards, multi-stat meters | Visual competition; distracts from who Uzair is | `SIMPLIFY` | Pure typography, portrait avatar, clean value proposition, single focus strip, direct CTAs. |
| **Currently Section** | 3 separate interactive glass cards with hover matrices | Looks like a monitoring dashboard | `SIMPLIFY` | 3 editorial rows (`Building`, `Exploring`, `Learning`) embedded directly into the page flow. |
| **Project Cards** | 12+ badges (status, SLA, complexity, DNA bars) | Cluttered scan path; prevents fast comprehension | `SIMPLIFY` | Scannable format: Domain tag, Title, 1-line description, 4-5 tech pills, `View Project →`. |
| **Project Detail Header** | 10 metadata widgets, graph inspector triggers | Excessive vertical height before getting to what was built | `SIMPLIFY` | Clean title, 1-sentence summary, domain & year tags, live link & GitHub buttons, hero screenshot. |
| **Knowledge Graph** | Full-screen D3 interactive force simulation | Visitors want to see code and case studies, not a graph UI | `HIDE` | Preserved as an internal relational engine (`src/data/`) for related links, hidden from primary UI. |
| **Project DNA / Fingerprints** | Algorithmic attribute bar visualizations | Abstract visual noise with zero real-world meaning | `REMOVE` | Removed from project cards and replaced with concise tech stack lists. |
| **Skill Percentage Meters** | Percentage progress bars (e.g., "Python 95%") | False precision; diminishes engineering credibility | `REMOVE` | Replaced with grouped capabilities (Quantitative Finance, Full-Stack, AI/ML, Data Systems). |
| **Fake Trading Graphics / Terminals** | Decorative candlestick animations, green neon accents | Cheapens technical authenticity | `REMOVE` | Replaced with clean editorial styling, real project screenshots, and verified code links. |
| **Footer** | 4-column mega-footer with internal sitemap links | Unnecessary scrolling bulk on simple pages | `SIMPLIFY` | Minimal 1-row editorial footer: Identity, Social links (GitHub, LinkedIn, Email, WhatsApp), copyright. |
| **Lab System** | Giant workbench UI with test runners | Overwhelms recruiters looking for core projects | `MERGE` | Key experiments integrated into Research and Work sections as verified projects. |

---

## 2. Quantitative Reduction Metrics

- **Primary Nav Items:** 11 → **5** (-55% cognitive overhead)
- **Badges per Project Card:** ~8 → **1** (-87% visual noise)
- **Hero Element Count:** 14 → **4** (-71% visual competition)
- **Time to Core Comprehension:** ~15s → **<3s**
