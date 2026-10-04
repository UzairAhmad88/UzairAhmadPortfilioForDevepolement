import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

describe('Phase 26: Responsive System 2.0 & Fluid Architecture', () => {
  it('should define fluid typography tokens with CSS clamp in variables.css', () => {
    const cssPath = path.resolve(process.cwd(), 'src/styles/variables.css');
    assert.ok(fs.existsSync(cssPath), 'variables.css must exist');
    const css = fs.readFileSync(cssPath, 'utf8');

    const fluidTypeTokens = [
      '--font-size-display: clamp(',
      '--font-size-h1: clamp(',
      '--font-size-h2: clamp(',
      '--font-size-h3: clamp(',
      '--font-size-h4: clamp(',
      '--font-size-lead: clamp(',
      '--font-size-body: clamp(',
    ];

    for (const token of fluidTypeTokens) {
      assert.ok(css.includes(token), `variables.css missing fluid typography token: ${token}`);
    }
  });

  it('should define fluid spacing tokens with CSS clamp in variables.css', () => {
    const cssPath = path.resolve(process.cwd(), 'src/styles/variables.css');
    const css = fs.readFileSync(cssPath, 'utf8');

    const fluidSpacingTokens = [
      '--space-section: clamp(',
      '--space-gutter: clamp(',
      '--space-card: clamp(',
    ];

    for (const token of fluidSpacingTokens) {
      assert.ok(css.includes(token), `variables.css missing fluid spacing token: ${token}`);
    }
  });

  it('should define explicit container width constraints in variables.css', () => {
    const cssPath = path.resolve(process.cwd(), 'src/styles/variables.css');
    const css = fs.readFileSync(cssPath, 'utf8');

    const containerTokens = [
      '--container-max: 1200px;',
      '--container-standard: 1140px;',
      '--container-compact: 900px;',
      '--container-narrow: 680px;',
      '--container-reading: 70ch;',
    ];

    for (const token of containerTokens) {
      assert.ok(css.includes(token), `variables.css missing container token: ${token}`);
    }
  });

  it('should enforce WCAG touch target minimum of 44px', () => {
    const cssPath = path.resolve(process.cwd(), 'src/styles/variables.css');
    const css = fs.readFileSync(cssPath, 'utf8');

    assert.ok(css.includes('--touch-target-min: 44px;'), 'Missing --touch-target-min: 44px definition');
  });

  it('should implement safe-area insets in layout shells within utilities.css', () => {
    const utilPath = path.resolve(process.cwd(), 'src/styles/utilities.css');
    assert.ok(fs.existsSync(utilPath), 'utilities.css must exist');
    const css = fs.readFileSync(utilPath, 'utf8');

    assert.ok(css.includes('env(safe-area-inset-left)'), 'Missing safe-area-inset-left in utilities.css');
    assert.ok(css.includes('env(safe-area-inset-right)'), 'Missing safe-area-inset-right in utilities.css');
  });
});
