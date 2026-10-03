# Component Inventory — Architectural Component Breakdown

**Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
**Architecture:** Astro Components (Zero hydration overhead for static UI)  

---

## 1. Global & Layout Components

| Component | Location | Purpose | Dependencies | Reusable? | Data-Driven? | A11y & Responsiveness |
|---|---|---|---|---|---|---|
| `BaseLayout` | `src/layouts/BaseLayout.astro` | Root HTML skeleton, SEO head, skip link, header, main landmark, WhatsApp float, footer | `Header`, `Footer`, `BackgroundEffects`, `WhatsAppFloat`, `SEO` | Yes | Yes (SEO props) | Includes `#main-content` skip link, viewport meta, font preconnects |
| `Header` | `src/components/layout/Header.astro` | Sticky desktop capsule header, brand monogram, navigation, mobile hamburger trigger | `Nav`, `MobileNavDrawer`, `siteConfig` | Yes | Yes | `aria-current` link indicators, accessible mobile toggle with `aria-expanded` |
| `Footer` | `src/components/layout/Footer.astro` | Platform closing landmark, brand summary, quick links, system links, back-to-top | `primaryNavigation`, `siteConfig` | Yes | Yes | Semantic `role="contentinfo"`, high-contrast links, z-index isolation |
| `Nav` | `src/components/navigation/Nav.astro` | Desktop navigation pills | `primaryNavigation` | Yes | Yes | Dynamic active pill indicator matching current route |
| `MobileNavDrawer` | `src/components/navigation/MobileNavDrawer.astro` | Off-canvas drawer for viewports < 768px | `primaryNavigation`, `siteConfig` | Yes | Yes | Focus trapping, `aria-modal="true"`, touch-friendly targets (≥44px) |
| `BackgroundEffects` | `src/components/common/BackgroundEffects.astro` | Lightweight CSS technical grid texture & subtle pointer tilt handler | Vanilla JS (no Three.js) | Yes | No | Zero main-thread blocking, reduced-motion bypass |
| `SEO` | `src/components/seo/SEO.astro` | OpenGraph, Twitter cards, meta tags, JSON-LD injection | `siteConfig`, `src/lib/seo` | Yes | Yes | Automated canonical generation, trailing slash normalization |
| `Breadcrumbs` | `src/components/common/Breadcrumbs.astro` | Hierarchical navigation trail | Inline props | Yes | Yes | `aria-label="Breadcrumb"`, BreadcrumbList Schema |
| `SectionHeader` | `src/components/common/SectionHeader.astro` | Standardized section eyebrow, title, and subtitle | Inline props | Yes | Yes | Fluid clamp scaling, semantic heading levels |
| `WhatsAppFloat` | `src/components/common/WhatsAppFloat.astro` | Fixed quick-contact trigger | `siteConfig` | Yes | Yes | Bottom-right fixed, `aria-label`, safe area insets |

---

## 2. Page & Section Components

| Component | Location | Section Purpose | Interactive Features |
|---|---|---|---|
| `Hero` | `src/components/sections/Hero.astro` | Identity, positioning statement, metadata strip, and interactive architecture card | CSS animated flow lines, live status badge |
| `Ticker` | `src/components/sections/Ticker.astro` | Technical skill marquee | Continuous CSS marquee animation (pauses on reduced motion) |
| `Systems` | `src/components/sections/Systems.astro` | Four core connected disciplines grid | 4-column capability grid |
| `TechStack` | `src/components/sections/TechStack.astro` | Technology universe and role-based stack cards | Interactive core hub & orbital discipline nodes |
| `Work` | `src/components/sections/Work.astro` | Featured flagship card and project catalog grid | Interactive client-side category filter buttons |
| `ResearchLab` | `src/components/sections/ResearchLab.astro` | Laboratory inquiries overview | Direct deep-links to `/research/[slug]` |
| `ArchitectureSection` | `src/components/sections/ArchitectureSection.astro` | "How I Build" 5-stage engineering lifecycle | Interactive keyboard-accessible tablist & panels |
| `About` | `src/components/sections/About.astro` | Journey milestones and engineering philosophy points | Two-column responsive layout |
| `Timeline` | `src/components/sections/Timeline.astro` | "Currently Active" status snapshot | 2-column card grid (Building, Learning, Exploring, Interested In) |
| `Contact` | `src/components/sections/Contact.astro` | Direct conversation CTA and direct email/WhatsApp links | Responsive flex actions |
| `ContactCallout` | `src/components/sections/ContactCallout.astro` | Reusable closing conversation banner for subpages | Direct link to `/contact` |

---

## 3. Card & UI Components

| Component | Location | Purpose | Data Source |
|---|---|---|---|
| `FeaturedProjectCard` | `src/components/cards/FeaturedProjectCard.astro` | High-impact flagship system showcase | `featuredProject` (`src/data/projects.ts`) |
| `ProjectCard` | `src/components/cards/ProjectCard.astro` | Standardized catalog project card | `Project` entity (`src/types/project.ts`) |
| `CapabilityCard` | `src/components/cards/CapabilityCard.astro` | Discipline card with SVG architectural diagram | `CapabilityItem` (`src/data/capabilities.ts`) |
| `LabCard` | `src/components/cards/LabCard.astro` | Research inquiry teaser card | `ResearchItem` (`src/data/research.ts`) |
| `ResearchInquiryCard` | `src/components/cards/ResearchInquiryCard.astro` | Comprehensive research inquiry card on `/research` | Inline inquiry records |
| `DirectChannelCard` | `src/components/cards/DirectChannelCard.astro` | Contact subpage communication channel card | `ContactChannel` (`src/data/contact.ts`) |
