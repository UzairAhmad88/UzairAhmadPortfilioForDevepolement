# 🌊 Signature Interaction Motion & Animation Principles

## Core Motion Principles
Motion within the Signature Interaction System is purely functional and communicates:
1. **State & Active Selection:** Seamless tab indicator shifts and subtle border highlights.
2. **System Liveness:** Micro pulse indicator on the header pill (2s gentle opacity pulse).
3. **No Decorative Bloat:** Zero physics engines, zero particle systems, zero continuous requestAnimationFrame rendering loops.

---

## Motion Tokens & Durations
- **Tab Hover / Focus:** `0.15s ease`
- **Border / Background Transition:** `0.18s ease`
- **Pill Pulse Glow:** `2.0s infinite ease-in-out` (keyframes: 40% → 100% opacity)

---

## Accessibility & Reduced Motion
When `prefers-reduced-motion: reduce` is enabled:
```css
@media (prefers-reduced-motion: reduce) {
  .pulse-indicator {
    animation: none;
  }
  .lens-tab-btn, .tech-stack-card, .con-item-card, .evidence-btn {
    transition: none;
  }
}
```
All animations, keyframe transitions, and hover motion are disabled while preserving complete functionality.
