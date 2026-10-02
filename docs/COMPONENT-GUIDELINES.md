# Component Design Guidelines

## 1. Single Responsibility Principle
Each component must have one well-defined responsibility:
- **Layouts (`src/layouts/`)**: Orchestrate HTML structure, global assets, and page wrappers.
- **Sections (`src/components/sections/`)**: Handle section-level layout, headings, and data iteration.
- **Cards (`src/components/cards/`)**: Self-contained representation of a single domain entity (project, capability, research item).
- **SEO (`src/components/seo/`)**: Generate standard head tags, Open Graph, Twitter cards, and Schema.org metadata.

---

## 2. Static-First and Island Architecture
- Write components in pure Astro (`.astro`) syntax whenever possible.
- Avoid introducing React/Vue islands unless complex client-side state is strictly necessary.
- Encapsulate client-side scripts inside `<script>` blocks within Astro components rather than loading global monolithic scripts.

---

## 3. Scoped CSS & Utility Usage
- Use `<style>` blocks inside Astro components for component-specific rules.
- Leverage design tokens from `var(--teal)`, `var(--ink)`, `var(--paper)`, `var(--line)` to ensure color consistency across components.
- Use `.section-shell` for standardized width constraints (`max-width: 1180px`).

---

## 4. Accessibility First
- Always provide semantic HTML tags (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`).
- Use `<button>` for actions and `<a>` for navigational hyperlinks.
- Ensure all interactive elements have visible focus indicators (`:focus-visible`).
- Supply descriptive `aria-label` attributes for icon-only buttons and links.
