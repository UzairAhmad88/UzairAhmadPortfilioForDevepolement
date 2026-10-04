import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

describe('Phase 27: Accessibility 2.0 (WCAG 2.2 AA System)', () => {
  it('should define a functional skip link targeting #main-content in BaseLayout.astro', () => {
    const layoutPath = path.resolve(process.cwd(), 'src/layouts/BaseLayout.astro');
    assert.ok(fs.existsSync(layoutPath), 'BaseLayout.astro must exist');
    const content = fs.readFileSync(layoutPath, 'utf8');

    assert.ok(content.includes('href="#main-content"'), 'BaseLayout must include href="#main-content" on skip link');
    assert.ok(content.includes('class="skip-link"'), 'BaseLayout must include skip-link class');
    assert.ok(content.includes('Skip to main content'), 'BaseLayout must include explicit "Skip to main content" label');
    assert.ok(content.includes('id="main-content"'), 'BaseLayout must provide <main id="main-content"> target');
    assert.ok(content.includes('tabindex="-1"'), 'BaseLayout main target should have tabindex="-1" for programmatic focus placement');
  });

  it('should enforce focus-visible styling for interactive elements across global.css', () => {
    const globalCssPath = path.resolve(process.cwd(), 'src/styles/global.css');
    const css = fs.readFileSync(globalCssPath, 'utf8');

    assert.ok(css.includes(':focus-visible'), 'global.css must contain :focus-visible rules');
    assert.ok(css.includes('a:focus-visible'), 'global.css must style anchor focus-visible');
    assert.ok(css.includes('button:focus-visible'), 'global.css must style button focus-visible');
    assert.ok(css.includes('outline: 2px solid'), 'global.css must provide visible outline');
    assert.ok(css.includes('outline-offset:'), 'global.css must define outline-offset to prevent clipped rings');
  });

  it('should define accessible semantic theme color tokens with high contrast in variables.css', () => {
    const varsPath = path.resolve(process.cwd(), 'src/styles/variables.css');
    const vars = fs.readFileSync(varsPath, 'utf8');

    // Dark mode primary contrast tokens
    assert.ok(vars.includes('--color-background: #07110f;'), 'Dark background must be defined');
    assert.ok(vars.includes('--color-text-primary: #f6f1e8;'), 'Dark text primary must be defined');
    assert.ok(vars.includes('--color-accent: #7ed8c4;'), 'Dark accent must be defined');

    // Light mode contrast tokens
    assert.ok(vars.includes('--color-background: #fbf9f5;'), 'Light background must be defined');
    assert.ok(vars.includes('--color-text-primary: #141f1c;'), 'Light text primary must be defined');
    assert.ok(vars.includes('--color-accent: #0d7663;'), 'Light accent must be defined');
  });

  it('should support universal reduced-motion media query in motion.css', () => {
    const motionCssPath = path.resolve(process.cwd(), 'src/styles/motion.css');
    const css = fs.readFileSync(motionCssPath, 'utf8');

    assert.ok(css.includes('@media (prefers-reduced-motion: reduce)'), 'motion.css must include prefers-reduced-motion: reduce');
    assert.ok(css.includes('animation-duration: 0.01ms'), 'Animations must be effectively nulled under reduced-motion');
    assert.ok(css.includes('transition-duration: 0.01ms'), 'Transitions must be effectively nulled under reduced-motion');
  });

  it('should enforce touch target minimum token in variables.css', () => {
    const varsPath = path.resolve(process.cwd(), 'src/styles/variables.css');
    const vars = fs.readFileSync(varsPath, 'utf8');

    assert.ok(vars.includes('--touch-target-min: 44px;'), 'variables.css must define 44px minimum touch target');
  });

  it('should have accessible labels and inputs in contact.astro', () => {
    const formPath = path.resolve(process.cwd(), 'src/pages/contact.astro');
    assert.ok(fs.existsSync(formPath), 'contact.astro must exist');
    const form = fs.readFileSync(formPath, 'utf8');

    assert.ok(form.includes('for="name"'), 'Name input must have matching label for attribute');
    assert.ok(form.includes('for="email"'), 'Email input must have matching label for attribute');
    assert.ok(form.includes('for="inquiry_type"'), 'InquiryType must have matching label for attribute');
    assert.ok(form.includes('for="message"'), 'Message textarea must have matching label for attribute');

    assert.ok(form.includes('autocomplete="name"'), 'Name field must have autocomplete="name"');
    assert.ok(form.includes('autocomplete="email"'), 'Email field must have autocomplete="email"');
  });

  it('should have accessible theme toggle button with ARIA attributes', () => {
    const togglePath = path.resolve(process.cwd(), 'src/components/common/ThemeToggle.astro');
    assert.ok(fs.existsSync(togglePath), 'ThemeToggle.astro must exist');
    const toggle = fs.readFileSync(togglePath, 'utf8');

    assert.ok(toggle.includes('aria-label='), 'Theme toggle must have aria-label');
    assert.ok(toggle.includes('<button'), 'Theme toggle must use native button element');
  });
});

