# Call-To-Action (CTA) Hierarchy & Flow Strategy

This document establishes the site-wide CTA hierarchy, contextual mapping, and navigation flows.

## 1. Primary & Secondary CTA Standards

| Level | Standard Label | Typical Placement | Destination |
|---|---|---|---|
| **Primary Level** | `Start a Conversation` | Hero sections, final page banners, `/services` footer | `/contact` |
| **Contextual Project** | `Discuss Similar Architecture` | Project Case Studies (`/work/[slug]`) | `/contact?type=project` |
| **Contextual Research** | `Explore Research Collaboration` | Research Inquiries (`/research/[slug]`) | `/contact?type=research` |
| **Secondary Evidence** | `Explore Work & Architecture` | Hero secondary button, About section | `/work` |
| **Secondary Research** | `View Research Inquiries` | Capabilities cards, technical breakdown | `/research` |

## 2. Contextual Routing Flow

```
[Case Study: Deep Learning Stock Prediction]
       │
       ▼
[Contextual CTA Banner: "Interested in Quantitative Machine Learning Pipelines?"]
       │
       ▼
[Contact Form with pre-populated inquiry_type = 'project']
```

```
[Research: Market Regime Detection]
       │
       ▼
[Contextual CTA Banner: "Interested in Volatility Modeling & Regime Research?"]
       │
       ▼
[Contact Form with pre-populated inquiry_type = 'research']
```

## 3. CTA Discipline Rules

- Avoid aggressive sales language ("Book a 15-min Discovery Call Now", "Hire Me Instantly").
- Ensure all button elements have high-contrast focus rings and semantic HTML (`<a>` or `<button>`).
- Maintain consistent arrow styling (`→` for forward page actions, `↗` for external links).
