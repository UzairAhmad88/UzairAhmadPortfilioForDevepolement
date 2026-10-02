# Navigation & URL Strategy

## 1. Primary Navigation Philosophy
Navigation should remain **lean, intuitive, and focused**. A visitor should never experience cognitive overload from an exhaustive list of redundant links.

### Primary Header Navigation (Desktop & Mobile):

```
┌──────┐                                                      ┌──────────┐
│  UA  │         [ Work ]   [ Research ]   [ Systems ]   [ About ]   [ Contact ]    │  GitHub  │
└──────┘                                                      └──────────┘
```

- **Logo (`UA`)**: Jumps smoothly to the top of the page (`#top` or `/`).
- **Work**: Direct link to the featured projects and engineering showcase (`#work` on Home, `/work` on subpages).
- **Research**: Direct link to active research themes and lab experiments (`#research` on Home, `/research` on subpages).
- **Systems**: Direct link to the 4 core capability disciplines (`#systems` on Home, `/systems` on subpages).
- **About**: Direct link to engineering mindset and journey (`#about` on Home, `/about` on subpages).
- **Contact**: Direct link to contact channels and inquiry options (`#contact` on Home, `/contact` on subpages).
- **GitHub Action**: Direct external link to [UzairAhmad88](https://github.com/UzairAhmad88).

---

## 2. Mobile Navigation Strategy
- On screens $\le 920\text{px}$, the desktop link strip collapses cleanly, leaving the brand monogram, quick GitHub action, and the persistent floating WhatsApp contact trigger.
- In Phase 03, an accessible, lightweight mobile modal drawer will be introduced for multi-page routing.

---

## 3. Footer Navigation & Context
The footer provides essential orientation without mimicking a massive sitemap:
- Identity reminder: `Quantitative AI & Product Engineer`
- Quick tech keywords: `Python · Quant · AI · HFT · Full Stack · Products`
- Direct contact link: `imuzairahmad8@gmail.com`
- Back-to-top navigational anchor: `#top`
- Copyright & licensing information.

---

## 4. Breadcrumb Strategy (for Subpages & Case Studies)
On deep case studies and subpages, accessible breadcrumbs guide the visitor:
```html
Home / Work / Deep Learning Stock Return Prediction
```
- Fully integrated with `aria-label="Breadcrumbs"` and Schema.org `BreadcrumbList`.
