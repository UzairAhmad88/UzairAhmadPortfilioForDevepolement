# Design Tokens Specification

**Source File:** `src/styles/variables.css`  
**Phase:** 02 — Personal Brand System + Visual Identity  
**Status:** Verified in Production  

---

## 1. Color Tokens

### 1.1 Canvas & Backgrounds
| CSS Token | Value | Description |
| :--- | :--- | :--- |
| `--color-background` | `#07110f` | Main canvas background |
| `--color-background-subtle` | `#101a17` | Card and block background |
| `--color-canvas` | `#07110f` | Canvas alias |
| `--color-canvas-subtle` | `#101a17` | Subtle canvas alias |
| `--bg-surface` | `#101a17` | Surface alias |

### 1.2 Interactive Surfaces
| CSS Token | Value | Description |
| :--- | :--- | :--- |
| `--color-surface` | `rgba(255, 255, 255, 0.035)` | Base translucent surface |
| `--color-surface-hover` | `rgba(255, 255, 255, 0.06)` | Hovered translucent surface |
| `--color-surface-elevated` | `rgba(255, 255, 255, 0.08)` | Elevated chip / badge surface |

### 1.3 Text & Foreground
| CSS Token | Value | Contrast Ratio (vs #07110f) | Description |
| :--- | :--- | :--- | :--- |
| `--color-text-primary` | `#f6f1e8` | 16.4 : 1 (AAA) | High-contrast headings and active links |
| `--color-text-secondary`| `#a9b8b1` | 9.8 : 1 (AAA) | Body paragraphs and secondary copy |
| `--color-text-tertiary` | `rgba(246, 241, 232, 0.58)` | 6.2 : 1 (AA) | Timestamp and helper metadata |
| `--color-text-muted` | `#83968e` | 7.1 : 1 (AAA) | Monospace labels and indices |

### 1.4 Borders
| CSS Token | Value | Description |
| :--- | :--- | :--- |
| `--color-border` | `rgba(246, 241, 232, 0.12)` | Standard border stroke |
| `--color-border-subtle` | `rgba(246, 241, 232, 0.08)` | Internal dividers |
| `--color-border-strong` | `rgba(246, 241, 232, 0.24)` | Emphasized card outlines |

### 1.5 Brand Accents & State
| CSS Token | Value | Description |
| :--- | :--- | :--- |
| `--color-accent` | `#7ed8c4` | Mint teal primary accent |
| `--color-accent-hover` | `#9bd8cf` | Mint hover state |
| `--color-accent-muted` | `rgba(126, 216, 196, 0.14)`| Mint background tint |
| `--color-accent-clay` | `#d2a071` | Warm amber/clay accent |
| `--color-accent-lavender`| `#bda6ff` | Soft lavender accent |
| `--color-success` | `#10b981` | Green success status |
| `--color-warning` | `#f59e0b` | Amber warning status |
| `--color-error` | `#ef4444` | Red error/drawdown status |
| `--color-info` | `#38bdf8` | Sky blue information status |
| `--color-focus` | `rgba(126, 216, 196, 0.5)`| Focus ring outline color |

---

## 2. Typography Tokens

### 2.1 Font Families
```css
--font-sans: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
```

### 2.2 Fluid Scale (CSS clamp)
```css
--font-size-display: clamp(2.35rem, 5.5vw + 0.75rem, 5.25rem);
--font-size-h1:      clamp(2.1rem, 4.2vw + 0.5rem, 3.75rem);
--font-size-h2:      clamp(1.65rem, 3.2vw + 0.35rem, 2.65rem);
--font-size-h3:      clamp(1.2rem, 1.8vw + 0.25rem, 1.65rem);
--font-size-h4:      clamp(1.05rem, 1.2vw + 0.15rem, 1.25rem);
--font-size-lead:    clamp(1.05rem, 1.4vw + 0.2rem, 1.25rem);
--font-size-body:    clamp(0.95rem, 0.8vw + 0.2rem, 1.05rem);
--font-size-sm:      0.875rem;
--font-size-xs:      0.75rem;
--font-size-code:    0.85rem;
```

---

## 3. Spacing Scale (4px Base Grid)

```css
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-5: 1.25rem;  /* 20px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-10: 2.5rem;  /* 40px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
--space-20: 5rem;    /* 80px */
--space-24: 6rem;    /* 96px */
--space-32: 8rem;    /* 128px */
```

---

## 4. Container Tokens

```css
--container-max: 1200px;
--container-standard: 1140px;
--container-compact: 900px;
--container-narrow: 680px;
--container-reading: 70ch;
```

---

## 5. Border Radius & Shadows

```css
--radius-none: 0px;
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-full: 9999px;

--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.12);
--shadow-md: 0 8px 24px rgba(0, 0, 0, 0.2);
--shadow-lg: 0 16px 48px rgba(0, 0, 0, 0.28);
--shadow-card: 0 20px 60px rgba(0, 0, 0, 0.3);
--shadow-subtle-glow: 0 0 32px rgba(126, 216, 196, 0.08);
```

---

## 6. Motion Tokens

```css
--duration-fast: 150ms;
--duration-normal: 240ms;
--duration-slow: 400ms;

--ease-standard: cubic-bezier(0.2, 0, 0, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);

--transition-fast: var(--duration-fast) var(--ease-standard);
--transition-base: var(--duration-normal) var(--ease-standard);
--transition-slow: var(--duration-slow) var(--ease-standard);
```
