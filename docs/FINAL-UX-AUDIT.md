# Final UX Audit & Interaction Blueprint Certification

**Website:** Uzair Ahmad Professional Portfolio  
**Audit Scope:** Navigation, User Journeys, Signature Moments, Interactive Workflows, Form Flows  

---

## 1. Primary User Journeys

### A. Technical Recruiter & Engineering Manager (Target: 30-Second Discovery)
1. **Entry (Hero):** Immediately absorbs role (`Quantitative AI & Product Engineer`), core disciplines, and verified evidence claim.
2. **Primary Action:** Clicks `Explore Verified Systems →` or `View My Work`.
3. **Project Review:** Reads Flagship `Deep Learning Stock Return Prediction` card: problem statement, architecture, tech stack, inspects case study or launches GitHub directly.
4. **Verification:** Inspects public code repositories on GitHub (`github.com/UzairAhmad88/...`).
5. **Contact:** Clicks `Get in Touch` or footer email/LinkedIn.

### B. Principal Engineer / Quantitative Researcher (Target: Deep Technical Credibility)
1. **Research Discovery:** Navigates to `/research` or clicks `Read Research Inquiries`.
2. **Inquiry Evaluation:** Reads active hypothesis-driven research:
   - Feature extraction in non-stationary series
   - Unsupervised market regime transition clustering (GMM/HMM)
   - Deterministic state machine guardrails for agentic execution
3. **Methodology:** Inspects mathematical rigor (expanding historical windows, walk-forward out-of-sample CV, zero lookahead bias).
4. **Case Study Deep-Dive:** Explores full 12-section technical case studies under `/work/[slug]`.

### C. Potential Client / Technical Collaborator (Target: Low-Friction Inquiry)
1. **Capabilities & Services:** Navigates to `/services` to review domain offerings without sleazy agency pricing.
2. **Form Interaction:** Fills structured inquiry on `/contact` (Name, Email, Discipline, Message) with real-time validation and CSRF/honeypot protection.
3. **Confirmation:** Lands on `/contact/success` with explicit turnaround timeframe (24–48 hours).

---

## 2. Signature Interactive Experience: "How I Build"
- **Implementation:** Interactive 5-stage stepper tablist (`Problem Formulation` → `Systems Design` → `Implementation` → `Validation` → `Production`).
- **Accessibility:** Full keyboard navigation (`Tab`, `Enter`, `Space`, `Arrow` keys), `role="tablist"`, `role="tab"`, `role="tabpanel"`, and `aria-selected` tracking.
- **Cognitive Value:** Replaces empty claims with a concrete, mature engineering methodology.

---

## 3. Micro-Interactions & Transitions
- **Button Hover:** 150ms ease with subtle vertical translation (`-1px` to `-2px`) and background illumination.
- **Card Tilts:** Subtle 2.5deg pointer tilt restricted to desktop non-reduced-motion environments.
- **Reveals:** Fast, non-blocking IntersectionObserver transitions (`threshold: 0.12`).
- **Reduced-Motion Support:** All animations immediately collapse to instantaneous transitions when `prefers-reduced-motion: reduce` is active.
