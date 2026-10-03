# The "Currently" System Specification

**Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
**Live Canonical URL:** https://uzair-ahmad-portfilio-for-devepolem.vercel.app/  
**Phase:** 04 — Currently System + Living Homepage  
**Status:** Approved & Implemented  

---

## 1. System Purpose

The **Currently** system transforms the platform homepage from a static project catalog into a living, authentic representation of Uzair Ahmad's active technical trajectory.

It communicates four essential dimensions:
1. **BUILDING:** The primary software system actively under development or live validation.
2. **LEARNING:** Advanced technical, mathematical, or systems concepts currently being studied.
3. **EXPLORING:** Experimental prototypes, architectural patterns, and micro-tools.
4. **INTERESTED IN:** Current engineering disciplines and collaboration directions.

```
                    CURRENTLY
        ┌─────────────┬─────────────┬─────────────┐
        │             │             │             │
      BUILDING      LEARNING     EXPLORING     INTERESTED IN
        │             │             │             │
     projects      subjects      experiments    directions
```

---

## 2. Content Separation & Single Source of Truth

The system strictly decouples **content data** from **UI presentation**:
- **Type Schema:** [`src/types/currently.ts`](file:///d:/web/protfolio/src/types/currently.ts)
- **Data Source:** [`src/data/currently.ts`](file:///d:/web/protfolio/src/data/currently.ts)
- **Component:** [`src/components/sections/Currently.astro`](file:///d:/web/protfolio/src/components/sections/Currently.astro)

To update active focus, only [`src/data/currently.ts`](file:///d:/web/protfolio/src/data/currently.ts) is modified. Zero component template or styling changes are required.

---

## 3. Data Model Schema

```typescript
export interface CurrentlyBuilding {
  title: string;
  description: string;
  href?: string;
  tag?: string;
  status?: string;
}

export interface CurrentlyData {
  updatedAt: string;         // e.g. "October 2026"
  statusNote?: string;       // Optional editorial summary line
  building?: CurrentlyBuilding;
  learning?: string[];       // 2-4 active learning topics
  exploring?: string[];      // 2-3 exploratory experiment subjects
  interestedIn?: string[];   // 2-3 technical/professional directions
}
```

---

## 4. Truthfulness & Anti-Vanity Rules

- ❌ **No Fake Metrics:** No simulated percentages ("73% complete"), animated counters, or artificial velocity graphs.
- ❌ **No Social Feed Noise:** No follower counts, "posted X minutes ago" timestamps, or micro-blogging streams.
- ❌ **No Unverified Claims:** Every item in `building`, `learning`, or `exploring` reflects genuine engineering effort backed by public code or documented research.

---

## 5. Display Rules & Empty State Handling

- If any quadrant (e.g. `exploring` or `learning`) is empty or undefined, its card is automatically suppressed rather than displaying empty placeholder text.
- If `statusNote` is absent, the section cleanly collapses vertical space without layout shifts.
- If `href` is provided on `building`, the title and card action link automatically bind directly to the internal project or case study route (`/work/[slug]`).

---

## 6. How to Update the "Currently" Section

1. Open [`src/data/currently.ts`](file:///d:/web/protfolio/src/data/currently.ts).
2. Edit the relevant fields (e.g. update `updatedAt: 'November 2026'`, modify `learning` array).
3. Run `npm test` and `npm run check` to verify data integrity.
4. Run `npm run build` to generate the updated static page.
5. Commit and push to deploy via Vercel.
