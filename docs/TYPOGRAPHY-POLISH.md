# Typography Polish & Editorial Hierarchy

## 1. Typeface Pairings & Font Stack

| Role | Font Family | Fallback Stack | Purpose & Aesthetic |
| :--- | :--- | :--- | :--- |
| **Primary UI & Body** | `Inter` | `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif` | Clean, modern editorial reading experience with balanced letterforms and high legibility. |
| **Monospace / Code / Meta** | `JetBrains Mono` | `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace` | Technical precision, clear character distinction (e.g. 0 vs O, 1 vs l), and structured data formatting. |

---

## 2. Fluid Typographic Scale

All font sizes utilize CSS `clamp()` functions to scale fluidly from mobile (320px) to ultra-wide (3840px) viewports without sudden breakpoint jumps:

```css
--font-size-display: clamp(2.35rem, 5.5vw + 0.75rem, 5.25rem); /* Hero Title */
--font-size-h1:      clamp(2.1rem, 4.2vw + 0.5rem, 3.75rem);   /* Page Titles */
--font-size-h2:      clamp(1.65rem, 3.2vw + 0.35rem, 2.65rem); /* Section Headings */
--font-size-h3:      clamp(1.2rem, 1.8vw + 0.25rem, 1.65rem);  /* Card Headings */
--font-size-h4:      clamp(1.05rem, 1.2vw + 0.15rem, 1.25rem); /* Sub-headings */
--font-size-lead:    clamp(1.05rem, 1.4vw + 0.2rem, 1.25rem);  /* Hero Lead */
--font-size-body:    clamp(0.95rem, 0.8vw + 0.2rem, 1.05rem);  /* Paragraphs */
--font-size-sm:      0.875rem;                                 /* Supporting UI / Buttons */
--font-size-xs:      0.75rem;                                  /* Eyebrows / Meta Labels */
--font-size-code:    0.85rem;                                  /* Inline Code */
```

---

## 3. Typographic Measures & Line Spacing

- **Reading Measure**: Constrained via `--container-reading: 70ch` to maintain optimal reading cadence (45–75 characters per line).
- **Line Heights**:
  - `Display / H1`: `1.12` – `1.15` (compact, confident title presence)
  - `H2 / H3`: `1.25` – `1.35` (structured header cadence)
  - `Body Text`: `1.68` (comfortable editorial body reading)
  - `Relaxed / Long-form`: `1.8` (inquiry questions, research methodology)
- **Text Wrap**: Applied `text-wrap: balance` on headings and `text-wrap: pretty` on lead paragraphs to prevent orphan words.
- **Letter Spacing**:
  - Headings: `--letter-spacing-tight: -0.025em`
  - Body: `--letter-spacing-normal: 0`
  - Monospace Metadata: `--letter-spacing-meta: 0.08em` (uppercase clarity)

---

## 4. Code Block & Technical Notation Polish

1. **Inline Code (`code`)**:
   - Dark Theme: `background: rgba(255, 255, 255, 0.08)`, `color: #7ed8c4`.
   - Light Theme: `background: rgba(20, 31, 28, 0.06)`, `color: #0d7663`.
   - Radius: `--radius-sm` (4px).
2. **Code Blocks (`pre`)**:
   - Dark Theme: `background: #101a17`, `border: 1px solid rgba(246, 241, 232, 0.08)`.
   - Light Theme: `background: #f4f0e8`, `border: 1px solid rgba(20, 31, 28, 0.12)`.
   - Horizontal scrolling with `-webkit-overflow-scrolling: touch`.
