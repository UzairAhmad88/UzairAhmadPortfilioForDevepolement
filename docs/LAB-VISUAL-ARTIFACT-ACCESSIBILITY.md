# Lab Visual Artifact Accessibility & A11y Verification

**Project:** Personal Engineering & Research Platform — Lab Subsystem  
**Standard:** WCAG 2.1 Level AA Compliance  
**Status:** 100% Verified  

---

## 1. Semantic DOM Structure

Every visual artifact is enclosed within a semantic `<figure>` element with an associated `<figcaption>`:

```html
<figure class="lab-artifact-figure" id="art-id" data-artifact-id="art-id">
  <header class="artifact-header">...</header>
  <div class="artifact-canvas" tabindex="0" role="region" aria-label="...">...</div>
  <div class="artifact-interpretation">...</div>
  <figcaption class="artifact-figcaption">
    <details class="artifact-a11y-details">
      <summary>Text Alternative: Technical Description</summary>
      <div class="a11y-content"><p>...</p></div>
    </details>
  </figcaption>
</figure>
```

---

## 2. Keyboard & Modal Focus Management

1. **Tab Navigation:** Artifact figures and their visual canvas containers are focusable with high-contrast outlines (`outline: 2px solid var(--color-accent)`).
2. **Keyboard Inspection:** Pressing `Enter` or `Space` on an inspectable visual canvas launches `LabArtifactViewer.astro`.
3. **Modal Focus Trap & Dismissal:**
   - Dialog automatically traps focus.
   - Close button is auto-focused on dialog launch.
   - Pressing `Escape` or clicking the blurred backdrop immediately closes the dialog.
   - Focus is automatically restored to the triggering canvas element on close (`previousActiveElement.focus()`).

---

## 3. Color Independence & Contrast Ratios

- **Non-Color Dependence:** Node roles (`input`, `process`, `model`, `guardrail`, `output`) include explicit textual badges (`Input`, `O(K) Math`, `Statistical Test`) in addition to semantic left borders.
- **Evidence State Badges:** Include unique typographic iconography (`●`, `◆`, `◇`, `▲`, `○`) and full uppercase text labels.
- **Contrast Ratios:** All text, badges, and border outlines exceed WCAG AA minimum thresholds (> 4.5:1 for normal text, > 3.0:1 for graphical UI components) in both Light and Dark themes.
