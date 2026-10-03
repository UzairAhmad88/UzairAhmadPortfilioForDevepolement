# Navigation Architecture Specification

**Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
**Phase:** 03 — Information Architecture + Content Architecture  
**Status:** Approved  

---

## 1. Desktop Masthead Navigation

Located at `src/components/layout/Header.astro` and `src/components/navigation/Nav.astro`:

- **Brand Anchor:** Monogram `UA` badge linking directly to `/`.
- **Primary Nav List:**
  - `Work` (`/work`)
  - `Research` (`/research`)
  - `About` (`/about`)
  - `Services` (`/services`)
  - `Contact` (`/contact`)
- **Primary Action (CTA):** `Get in Touch` (`/contact`).
- **External Bridge:** GitHub profile icon linking to `https://github.com/UzairAhmad88`.

---

## 2. Mobile Navigation Drawer

Located at `src/components/navigation/MobileNavDrawer.astro`:

- Full-height accessible slide-in drawer.
- Traps keyboard focus while open (`aria-modal="true"`, `role="dialog"`).
- Automatically locks body scroll and closes on Escape key press or backdrop click.
- Large touch targets (min height 48px) with visual active state indicator.

---

## 3. In-Page & Contextual Navigation

- **Breadcrumbs:** Structured navigation rendered on deep pages (`/work/[slug]`, `/research/[slug]`, `/services`).
- **Section Numbering Anchors:** `#work`, `#systems`, `#about`, `#research`, `#stack`, `#contact`.
- **Skip Link:** Accessible hidden link (`.skip-link`) allowing screen-reader and keyboard users to jump directly to main page content.

---

## 4. Footer Colophon Navigation

Located at `src/components/layout/Footer.astro`:

- **Directory 1 (Core Navigation):** Work, Research, About, Services, Contact.
- **Directory 2 (Selected Systems):** Stock Return Prediction, CuraSphere HMS, Market Regime Engine, All Systems.
- **Directory 3 (Direct Channels):** Verified Email, GitHub, LinkedIn, WhatsApp.
- **Utility:** Back to Top button (`#top`), verified license notice, copyright.
