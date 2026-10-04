import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

describe('Phase 25: Motion System 2.0 & Restrained Token Architecture', () => {
  it('should define centralized motion tokens in variables.css', () => {
    const cssPath = path.resolve(process.cwd(), 'src/styles/variables.css');
    assert.ok(fs.existsSync(cssPath), 'variables.css must exist');
    const css = fs.readFileSync(cssPath, 'utf8');

    // Duration Tokens
    const requiredDurations = [
      '--motion-duration-instant: 50ms;',
      '--motion-duration-fast: 120ms;',
      '--motion-duration-normal: 220ms;',
      '--motion-duration-slow: 350ms;',
      '--motion-duration-deliberate: 480ms;',
    ];

    for (const token of requiredDurations) {
      assert.ok(css.includes(token), `variables.css missing duration token: ${token}`);
    }

    // Easing Tokens
    const requiredEasings = [
      '--motion-ease-standard:',
      '--motion-ease-emphasized:',
      '--motion-ease-decelerate:',
      '--motion-ease-accelerate:',
      '--motion-ease-linear:',
    ];

    for (const token of requiredEasings) {
      assert.ok(css.includes(token), `variables.css missing easing token: ${token}`);
    }

    // Distance and Scale Tokens
    const requiredDistances = [
      '--motion-distance-micro: 1px;',
      '--motion-distance-sm: 2px;',
      '--motion-distance-md: 6px;',
      '--motion-distance-lg: 16px;',
      '--motion-scale-press: 0.98;',
      '--motion-scale-card: 1.005;',
    ];

    for (const token of requiredDistances) {
      assert.ok(css.includes(token), `variables.css missing distance/scale token: ${token}`);
    }
  });

  it('should define structured hierarchy levels and utilities in motion.css', () => {
    const motionPath = path.resolve(process.cwd(), 'src/styles/motion.css');
    assert.ok(fs.existsSync(motionPath), 'motion.css must exist');
    const css = fs.readFileSync(motionPath, 'utf8');

    // Hierarchy levels
    assert.ok(css.includes('.motion-level-0'), 'Missing Level 0 (Static)');
    assert.ok(css.includes('.motion-level-1'), 'Missing Level 1 (Micro-interaction)');
    assert.ok(css.includes('.motion-level-2'), 'Missing Level 2 (Component transition)');
    assert.ok(css.includes('.motion-level-3'), 'Missing Level 3 (Page/System transition)');

    // Functional utilities
    assert.ok(css.includes('.motion-lift'), 'Missing .motion-lift utility');
    assert.ok(css.includes('.motion-pressable'), 'Missing .motion-pressable utility');
    assert.ok(css.includes('.motion-link'), 'Missing .motion-link utility');
    assert.ok(css.includes('.motion-disclosure'), 'Missing .motion-disclosure utility');
  });

  it('should enforce strict prefers-reduced-motion overrides', () => {
    const motionPath = path.resolve(process.cwd(), 'src/styles/motion.css');
    const css = fs.readFileSync(motionPath, 'utf8');

    assert.ok(css.includes('@media (prefers-reduced-motion: reduce)'), 'Missing prefers-reduced-motion query');
    assert.ok(css.includes('animation-duration: 0.01ms !important;'), 'Missing reduced animation duration');
    assert.ok(css.includes('transition-duration: 0.01ms !important;'), 'Missing reduced transition duration');
    assert.ok(css.includes('scroll-behavior: auto !important;'), 'Missing auto scroll behavior in reduced motion');
  });

  it('should import motion.css in global.css', () => {
    const globalPath = path.resolve(process.cwd(), 'src/styles/global.css');
    const css = fs.readFileSync(globalPath, 'utf8');
    assert.ok(css.includes("@import './motion.css';"), 'global.css must import motion.css');
  });
});
