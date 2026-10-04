# SEO Indexation Policy & Robots Directives

## 1. Explicit Indexation Rules

| Surface / Page Category | Indexation Target | Robots Header / Tag | Canonical Target | Sitemap Included |
| :--- | :--- | :--- | :--- | :--- |
| **Homepage (`/`)** | Indexable | `index, follow` | `https://uzairahmad.vercel.app` | Yes |
| **Project Details (`/work/[slug]`)** | Indexable | `index, follow` | `https://uzairahmad.vercel.app/work/[slug]` | Yes |
| **Research Inquiries (`/research/[slug]`)** | Indexable | `index, follow` | `https://uzairahmad.vercel.app/research/[slug]` | Yes |
| **Engineering Notes (`/notes/[slug]`)** | Indexable | `index, follow` | `https://uzairahmad.vercel.app/notes/[slug]` | Yes |
| **Lab Experiments (`/lab/[slug]`)** | Indexable | `index, follow` | `https://uzairahmad.vercel.app/lab/[slug]` | Yes |
| **Technology Profiles (`/technology/[slug]`)**| Indexable | `index, follow` | `https://uzairahmad.vercel.app/technology/[slug]`| Yes |
| **About Page (`/about`)** | Indexable | `index, follow` | `https://uzairahmad.vercel.app/about` | Yes |
| **Contact Form (`/contact`)** | Indexable | `index, follow` | `https://uzairahmad.vercel.app/contact` | Yes |
| **Contact Success (`/contact/success`)** | **Non-Indexable** | `noindex, nofollow` | `https://uzairahmad.vercel.app/contact/success` | No |
| **Error Page (`/404`)** | **Non-Indexable** | `noindex, nofollow` | None (404 status) | No |

---

## 2. Protection of Unpublished & Draft Content
- Draft projects or internal sync test benches are excluded during build time and never output to `dist/` or listed in sitemaps.
