# Master Component Inventory & Mapping

This document provides the definitive component taxonomy, responsibilities, TypeScript prop interfaces, page usage mapping, and accessibility rules for the portfolio codebase.

---

## 1. Component Classification Hierarchy

```
                                  ┌─────────────────────────────┐
                                  │      MASTER INVENTORY       │
                                  └──────────────┬──────────────┘
                                                 │
          ┌───────────────────────┬──────────────┼──────────────┬───────────────────────┐
          │                       │              │              │                       │
    ┌─────▼─────┐           ┌─────▼─────┐  ┌─────▼─────┐  ┌─────▼─────┐           ┌─────▼─────┐
    │  GLOBAL   │           │  LAYOUT   │  │  CONTENT  │  │  PROJECT  │           │ INTERACT  │
    │  & NAV    │           │& CONTAINER│  │ & TYPO    │  │& RESEARCH │           │  & FORMS  │
    └───────────┘           └───────────┘  └───────────┘  └───────────┘           └───────────┘
```

---

## 2. Master Component Inventory

### Group 1: Global & Navigation

| Component | Responsibility | Props / Data Interface | Pages Used | Accessibility Requirements |
|---|---|---|---|---|
| `SiteHeader.astro` | Global top navigation bar with brand identity, desktop links, mobile trigger, and CTA. | `activeRoute?: string` | All Pages | `<header role="banner">`, `<nav aria-label="Main Navigation">`, skip-link target. |
| `SiteFooter.astro` | Global footer containing positioning statement, category links, social icons, and copyright. | None (reads global `SITE` config) | All Pages | `<footer role="contentinfo">`, `aria-label="Social Profiles"`, valid external link attributes. |
| `MobileNavDrawer.astro` | Slide-in / expandable mobile navigation overlay for small viewports. | `activeRoute?: string` | All Pages (Mobile) | `aria-modal="true"`, focus trap on open, `Escape` key handler, focus restoration on close. |
| `Breadcrumbs.astro` | Hierarchical navigational path indicator with Schema.org JSON-LD generation. | `items: { label: string; href?: string }[]` | All Subpages | `<nav aria-label="Breadcrumb">`, `<ol>`, `aria-current="page"` on last item. |

---

### Group 2: Layout & Container Primitives

| Component | Responsibility | Props / Data Interface | Pages Used | Accessibility Requirements |
|---|---|---|---|---|
| `BaseLayout.astro` | Root HTML wrapper providing `<head>`, SEO meta tags, skip link, and global stylesheets. | `title: string; description?: string; ogImage?: string; schema?: object; noindex?: boolean;` | All Pages | `lang="en"`, proper viewport tag, `<a href="#main-content" class="skip-link">`. |
| `Container.astro` | Responsive max-width wrapper (`max-w-6xl` or custom sizes) with standardized padding. | `size?: 'sm' \| 'md' \| 'lg' \| 'full'; class?: string;` | All Pages | Pure semantic wrapper, preserves layout hierarchy. |
| `Section.astro` | Standardized vertical spacing section container with optional border dividers. | `id?: string; class?: string; hasDivider?: boolean;` | All Pages | `<section aria-labelledby="section-heading-id">`. |

---

### Group 3: Content & Typography Primitives

| Component | Responsibility | Props / Data Interface | Pages Used | Accessibility Requirements |
|---|---|---|---|---|
| `SectionHeader.astro` | Standardized section header with eyebrow label, primary heading, and optional lead description. | `eyebrow?: string; title: string; subtitle?: string; align?: 'left' \| 'center'; id?: string;` | Home, Work, Research, About, Services, Contact | Uses proper semantic `<h2 id="...">` and optional `<p class="eyebrow">`. |
| `Badge.astro` | Visual status or category indicator (e.g., Active, Exploring, Research, SaaS). | `variant?: 'default' \| 'accent' \| 'success' \| 'warning'; text: string;` | All Pages | Appropriate color contrast against surface (min 4.5:1). |
| `Tag.astro` | Technology or skill tag pill (e.g., PyTorch, TypeScript, Astro). | `label: string; icon?: string;` | Work, Projects, Research, About | Semantic `<span>` with neutral background and legible font. |
| `Button.astro` | Reusable button or anchor styled as a button with primary, secondary, and outline variants. | `href?: string; variant?: 'primary' \| 'secondary' \| 'outline' \| 'ghost'; size?: 'sm' \| 'md' \| 'lg'; isExternal?: boolean;` | All Pages | Focus ring indicator, visible text or `aria-label`, target `_blank` accompanied by `rel="noopener noreferrer"`. |

---

### Group 4: Project & Research Components

| Component | Responsibility | Props / Data Interface | Pages Used | Accessibility Requirements |
|---|---|---|---|---|
| `FeaturedProjectCard.astro` | Prominent horizontal card showcasing the flagship project with metrics, tags, and dual CTAs. | `project: Project` | Home, Work | `<article>`, card wrapping link with explicit text, accessible badge contrast. |
| `ProjectCard.astro` | Standard grid card displaying project title, classification, summary, tech tags, and repository link. | `project: Project; viewMode?: 'grid' \| 'compact';` | Home, Work, About | `<article aria-labelledby="project-title-id">`, clear focusable link targets. |
| `ProjectMetaBar.astro` | Structured horizontal meta strip for project role, timeline, status, and code links. | `role: string; timeline: string; status: string; repoUrl?: string; liveUrl?: string;` | Project Detail (`/work/[slug]`) | Semantic `<dl>` or `<aside>` with descriptive labels. |
| `ArchitectureDiagram.astro` | Technical block-flow container showing architectural topology and component interactions. | `caption: string; diagramType?: 'ascii' \| 'svg' \| 'mermaid';` | Project Detail, Research | `role="figure"`, descriptive `<figcaption>`, readable high-contrast text. |
| `ResearchInquiryCard.astro` | Card detailing hypothesis question, investigation status, methodology, and lab notebook links. | `inquiry: ResearchInquiry` | Home, Research | Semantic `<article>`, accessible status badge, descriptive anchor targets. |

---

### Group 5: Form & Direct Contact Components

| Component | Responsibility | Props / Data Interface | Pages Used | Accessibility Requirements |
|---|---|---|---|---|
| `DirectChannelCard.astro` | Interactive channel card for direct outreach (Email, LinkedIn, GitHub, WhatsApp). | `title: string; description: string; actionLabel: string; href: string; icon: string;` | Contact, About | Keyboard focusable, clear link destination, external rel attributes. |
| `ContactCallout.astro` | Reusable bottom-of-page banner inviting visitor collaboration or technical discussions. | `title?: string; subtitle?: string; buttonText?: string; buttonHref?: string;` | Home, Work, About, Research, Services | Semantic `<aside>` or `<section>`, clear prominent CTA button. |

---

### Group 6: SEO & Technical Utilities

| Component | Responsibility | Props / Data Interface | Pages Used | Accessibility Requirements |
|---|---|---|---|---|
| `SeoHead.astro` | Generates all standard OpenGraph, Twitter, canonical, favicon, and meta tags. | `SeoProps` (from `@lib/seo`) | BaseLayout | Generates valid standard metadata according to Google Search Central guidelines. |
| `StructuredData.astro` | Injects valid Schema.org JSON-LD scripts into the document `<head>`. | `schema: object \| object[]` | BaseLayout | Valid JSON encoding, zero render blocking. |

---

## 3. Page-to-Component Mapping Matrix

| Component | `/` | `/about` | `/work` | `/work/[slug]` | `/research` | `/services` | `/contact` | `/404` |
|---|---|---|---|---|---|---|---|---|
| `BaseLayout` | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| `SiteHeader` | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| `SiteFooter` | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| `Breadcrumbs` | - | Yes | Yes | Yes | Yes | Yes | Yes | - |
| `SectionHeader` | Yes | Yes | Yes | Yes | Yes | Yes | Yes | - |
| `FeaturedProjectCard` | Yes | - | Yes | - | - | - | - | - |
| `ProjectCard` | Yes | - | Yes | Yes (Related) | - | - | - | - |
| `ProjectMetaBar` | - | - | - | Yes | - | - | - | - |
| `ArchitectureDiagram`| - | - | - | Yes | Yes | - | - | - |
| `ResearchInquiryCard`| Yes | - | - | - | Yes | - | - | - |
| `DirectChannelCard` | - | Yes | - | - | - | - | Yes | - |
| `ContactCallout` | Yes | Yes | Yes | Yes | Yes | Yes | - | - |
