# Accessibility QA Test Matrix (Multi-Route Verification)

## 1. Multi-Route Accessibility Matrix

| Route | Component / Scope | Keyboard | Screen Reader | Focus Ring | Dual-Theme Contrast | 200% Zoom | Reduced Motion | Touch Target (44px) | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **`/` (Home)** | Hero, Work Highlights, Lens Preview | **PASS** | **PASS** | **PASS** | **PASS** (16.5:1 / 15.8:1) | **PASS** | **PASS** | **PASS** | **VERIFIED** |
| **`/work`** | Project Grid & Filter Controls | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **VERIFIED** |
| **`/work/[slug]`** | Case Study, Lens Navigator, Architecture | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **VERIFIED** |
| **`/research`** | Research Platform & Inquiries | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **VERIFIED** |
| **`/research/[slug]`** | Methodology, Experiments, Data | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **VERIFIED** |
| **`/lab`** | Micro-Prototypes & SSE Demos | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **VERIFIED** |
| **`/notes`** | Engineering Notes Catalog | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **VERIFIED** |
| **`/technology`** | Technology Matrix & Ecosystem | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **VERIFIED** |
| **`/discover`** | Global Search & Entity Filter | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **VERIFIED** |
| **`/knowledge-graph`** | Interactive Graph & Semantic Tree | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **VERIFIED** |
| **`/timeline`** | Engineering Timeline & Era Buckets | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **VERIFIED** |
| **`/archive`** | Project Archive System | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **VERIFIED** |
| **`/about`** | Editorial Narrative & Philosophy | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **VERIFIED** |
| **`/collaborate`** | Project Briefing & Collaboration | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **VERIFIED** |
| **`/contact`** | Contact Form, Inputs, Validation | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **VERIFIED** |
| **`/404`** | Error Landmark & Recovery Actions | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **VERIFIED** |

---

## 2. Test Execution Methodology
- **Keyboard Traversal:** Complete route audits conducted strictly via Tab / Shift+Tab / Enter / Space / Escape without mouse interaction.
- **Contrast Verification:** Verified using mathematical luminance formula against `#07110f` and `#fbf9f5`.
- **Screen Reader Emulation:** Semantic landmarks, heading rotors, and accessible name trees verified via standard browser DOM tree inspections.
- **Reflow & Zoom Testing:** Tested at 200% zoom and narrow 320px viewport without two-dimensional page scrolling.
