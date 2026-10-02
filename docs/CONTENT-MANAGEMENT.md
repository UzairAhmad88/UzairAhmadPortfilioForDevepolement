# Content Management Guide

This guide explains how to add, modify, or archive content in the portfolio without modifying presentation components.

---

## 1. How to Add or Update a Project

All projects are managed in [src/data/projects.ts](file:///d:/web/protfolio/src/data/projects.ts).

### Step-by-Step:
1. Open `src/data/projects.ts`.
2. Add a new object to the `projects` array conforming to the `Project` interface:
   ```typescript
   {
     slug: 'your-project-slug',
     title: 'Project Title',
     category: ['quant', 'ai'], // 'quant' | 'ai' | 'engineering' | 'product'
     projectType: 'Market Intelligence',
     problem: 'Brief description of the challenge.',
     system: 'Description of the technical system built.',
     product: 'Optional product description.',
     outcome: 'Optional outcome description.',
     githubUrl: 'https://github.com/UzairAhmad88/your-repo',
     liveUrl: 'https://your-demo.com',
     status: 'active', // 'completed' | 'active' | 'research' | 'archived'
     order: 6
   }
   ```
3. If this project should be the primary hero case study, set it as `featuredProject` in `src/data/projects.ts`.
4. Validate changes:
   ```bash
   npm run check
   npm run build
   ```

---

## 2. How to Update Site & Contact Information

All global site constants and contact methods are configured in [src/data/site.ts](file:///d:/web/protfolio/src/data/site.ts).

- To update email: Modify `author.email` and the corresponding entry in `contactMethods`.
- To update social URLs (LinkedIn, GitHub, WhatsApp): Modify `socialLinks` object.
- To update site description or SEO keywords: Modify `description` and `keywords` array.

---

## 3. How to Add Building in Public Timeline Items

1. Open [src/data/timeline.ts](file:///d:/web/protfolio/src/data/timeline.ts).
2. Add a new timeline item:
   ```typescript
   {
     id: 'new-signal-id',
     date: 'OCT 2026',
     title: 'Title of recent work milestone',
     tags: 'Tech Stack / Domain'
   }
   ```

---

## 4. How to Update Technical Universe & Skills

1. Open [src/data/skills.ts](file:///d:/web/protfolio/src/data/skills.ts).
2. Edit `tickerSkills` to modify marquee tags.
3. Edit `universeNodes` to adjust positions (`x`, `y`) or keywords in the Python technical universe.
4. Edit `stackMap` to update language and domain descriptions.

---

## 5. Content Truthfulness Policy
- **Never fabricate** clients, companies, revenue, user numbers, testimonials, or metrics.
- If information is not yet public or verified, leave the field optional or omit it.
