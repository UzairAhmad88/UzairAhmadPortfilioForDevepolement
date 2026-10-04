import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { getThemeInitScript, THEME_STORAGE_KEY } from '../../src/lib/theme/themeManager.ts';

describe('Phase 24: Theme 2.0 Recovery System & Token Architecture', () => {
  it('should generate a robust zero-FOUC synchronous initialization script', () => {
    const script = getThemeInitScript();
    assert.ok(script.length > 50, 'Init script is too short');
    assert.ok(script.includes(THEME_STORAGE_KEY), 'Script must reference canonical storage key');
    assert.ok(script.includes('prefers-color-scheme: light'), 'Script must support system color scheme detection');
    assert.ok(script.includes('data-theme'), 'Script must set data-theme attribute on documentElement');
    assert.ok(script.includes('colorScheme'), 'Script must synchronize colorScheme with root element');
    assert.ok(script.includes('try {'), 'Script must be wrapped in try/catch for safety in restricted environments');
  });

  it('should provide full semantic token definitions in variables.css for both dark and light modes', () => {
    const cssPath = path.resolve(process.cwd(), 'src/styles/variables.css');
    assert.ok(fs.existsSync(cssPath), 'variables.css must exist');
    const css = fs.readFileSync(cssPath, 'utf8');

    // Verify Dark Mode Semantic Tokens in :root
    const requiredDarkTokens = [
      '--color-background: #07110f;',
      '--color-background-subtle: #101a17;',
      '--color-surface-card: #101a17;',
      '--color-text-primary: #f6f1e8;',
      '--color-text-secondary: #a9b8b1;',
      '--color-accent: #7ed8c4;',
      '--color-accent-teal: #7ed8c4;',
      '--color-border: rgba(246, 241, 232, 0.12);',
    ];

    for (const token of requiredDarkTokens) {
      assert.ok(css.includes(token), `variables.css missing dark token: ${token}`);
    }

    // Verify Light Mode Semantic Tokens in [data-theme="light"]
    const requiredLightTokens = [
      '--color-background: #fbf9f5;',
      '--color-background-subtle: #f4f0e8;',
      '--color-surface-card: #ffffff;',
      '--color-text-primary: #141f1c;',
      '--color-text-secondary: #35453f;',
      '--color-accent: #0d7663;',
      '--color-border: rgba(20, 31, 28, 0.12);',
    ];

    for (const token of requiredLightTokens) {
      assert.ok(css.includes(token), `variables.css missing light token: ${token}`);
    }

    // Verify Backward-Compatibility Legacy Tokens are preserved
    const legacyTokens = [
      '--paper:',
      '--ink:',
      '--muted:',
      '--teal:',
      '--deep:',
      '--clay:',
      '--rose:',
      '--white:',
      '--color-text:',
    ];

    for (const token of legacyTokens) {
      assert.ok(css.includes(token), `variables.css missing legacy compatibility token: ${token}`);
    }
  });

  it('should define consistent typography and spacing scales that do not shift across themes', () => {
    const cssPath = path.resolve(process.cwd(), 'src/styles/variables.css');
    const css = fs.readFileSync(cssPath, 'utf8');

    assert.ok(css.includes('--font-sans:'), 'Missing sans-serif font definition');
    assert.ok(css.includes('--font-mono:'), 'Missing monospace font definition');
    assert.ok(css.includes('--space-section:'), 'Missing fluid section spacing');
    assert.ok(css.includes('--space-gutter:'), 'Missing fluid gutter spacing');
  });
});
