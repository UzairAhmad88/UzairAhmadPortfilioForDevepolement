# Visual Polish QA Matrix

## 1. Multi-Viewport & Dual-Theme Verification Matrix

| Route | Viewport | Theme | Component Audited | Issue / Observation | Expected | Actual | Change / Polish Applied | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **`/` (Home)** | 320px | Dark | Hero & Topology | Layout density tight on narrow screens | Single column stack with full readability | Clean 1-col layout | Hero grid stack and padding verified | PASS |
| **`/` (Home)** | 390px | Light | Topology SVG | Text fill in SVG difficult to read on light surface | Node text and hub text high contrast | High contrast text | Added `[data-theme="light"]` SVG rules | PASS |
| **`/` (Home)** | 1440px | Dark | Hero & Work | Desktop wide spacing and topology grid | Balanced 2-column hero composition | Balanced composition | Fluid typography & grid clamp | PASS |
| **`/work`** | 768px | Dark | Project Cards | Category filter pills and project cards | 2-column responsive grid with DNA strip | 2-column grid | Grid clamp verified | PASS |
| **`/work`** | 1024px | Light | Project Cards | Card surface contrast on light background | Elevated white surface with subtle shadow | `#ffffff` surface with shadow | Added light theme card override | PASS |
| **`/work/[slug]`** | 1440px | Dark | Project DNA Spec Sheet | Technical DNA table and evidence pills | Clear grid with role, runtime, and artifacts | Crisp DNA grid | Full width cells for evidence | PASS |
| **`/research`** | 390px | Light | Research Inquiry Cards | Question box background on light canvas | Subtle light surface with teal border | `#f4f0e8` surface | Scoped light question-box styles | PASS |
| **`/notes`** | 768px | Dark | Note Cards | Reading time and topic tag alignment | Aligned header with topic and reading min | Aligned header | Space-between header flex | PASS |
| **`/notes/[slug]`** | 1440px | Light | Code Blocks (`pre`/`code`) | Light mode code block contrast | Distinct `#f4f0e8` background with border | Clean contrast | Added light mode `pre`/`code` styles | PASS |
| **`/lab`** | 1024px | Dark | Lab Workbench Cards | Workbench state badge and outcome tags | High-contrast indigo/emerald status tags | Crisp tags | Validated status pill styles | PASS |
| **`/technology`** | 1440px | Light | Tech Grid & Systems | Tech category cards and related systems | Neutral elevated card with badge row | High contrast card | Token-based tech cards verified | PASS |
| **`/discovery`** | 768px | Dark | Search & Filter Matrix | Search input and quick tag filters | Instant visual filter feedback | Responsive matrix | Standard input focus ring | PASS |
| **`/knowledge`** | 1440px | Dark | Knowledge Graph & Clusters | Topic clusters and pathway guides | Editorial pathway cards without AI gimmicks | Editorial cards | Verified pathway cards | PASS |
| **`/timeline`** | 768px | Light | Chronological Timeline | Event milestones and date badges | Clear vertical spine with date tags | Vertical timeline | Date tags with high contrast | PASS |
| **`/archive`** | 1024px | Dark | Historical Archive Table | Archive table headers and link states | Clean tabular data with hover rows | Clean table layout | Standardized `th`/`td` styles | PASS |
| **`/about`** | 1440px | Light | Principles & Education | Education cards and principle items | Light surface cards with accent numbers | Clean cards | Elevated light theme cards | PASS |
| **`/collaborate`** | 1024px | Dark | Collaboration Profiles | Working modes and partnership types | 3-column clean cards | 3-col cards | Token-based surface verified | PASS |
| **`/contact`** | 390px | Light | Inquiry Form | Form input borders and select focus | High contrast borders with teal focus | High contrast inputs | Form input styles refined | PASS |
| **`/404`** | 1024px | Dark | Error Card | 404 code badge and recovery link row | Centered error card with quick recovery links | Centered error card | 44px recovery links verified | PASS |

---

## 2. Accessibility & Contrast Verification
- **Text Contrast**: Verified >= 7:1 for normal body text and >= 4.5:1 for large headings across both Light and Dark themes.
- **Focus Rings**: Universal `:focus-visible` offset ring (2px solid with 2px/3px offset) verified on buttons, links, inputs, and toggles.
- **Keyboard Navigation**: Skip link (`#top` / `#main-content`) verified with top drop-down animation on focus.
