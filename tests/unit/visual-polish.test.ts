import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import * as fs from 'node:fs';
import * as path from 'node:path';

describe('Phase 31: Final Visual Polish & Design Token Invariants', () => {
  const rootDir = process.cwd();
  const variablesCss = fs.readFileSync(path.join(rootDir, 'src/styles/variables.css'), 'utf-8');
  const utilitiesCss = fs.readFileSync(path.join(rootDir, 'src/styles/utilities.css'), 'utf-8');
  const globalCss = fs.readFileSync(path.join(rootDir, 'src/styles/global.css'), 'utf-8');

  it('verifies essential design tokens in variables.css', () => {
    assert.ok(variablesCss.includes('--color-background:'), 'Missing --color-background');
    assert.ok(variablesCss.includes('--color-surface:'), 'Missing --color-surface');
    assert.ok(variablesCss.includes('--color-text-primary:'), 'Missing --color-text-primary');
    assert.ok(variablesCss.includes('--color-text-secondary:'), 'Missing --color-text-secondary');
    assert.ok(variablesCss.includes('--color-text-muted:'), 'Missing --color-text-muted');
    assert.ok(variablesCss.includes('--color-border:'), 'Missing --color-border');
    assert.ok(variablesCss.includes('--color-border-subtle:'), 'Missing --color-border-subtle');
    assert.ok(variablesCss.includes('--color-accent:'), 'Missing --color-accent');
    assert.ok(variablesCss.includes('--font-size-display:'), 'Missing --font-size-display');
    assert.ok(variablesCss.includes('--font-size-body:'), 'Missing --font-size-body');
    assert.ok(variablesCss.includes('--space-section:'), 'Missing --space-section');
    assert.ok(variablesCss.includes('--space-gutter:'), 'Missing --space-gutter');
    assert.ok(variablesCss.includes('--space-card:'), 'Missing --space-card');
    assert.ok(variablesCss.includes('--touch-target-min:'), 'Missing --touch-target-min');
  });

  it('verifies light theme token definitions in variables.css', () => {
    assert.ok(variablesCss.includes('[data-theme="light"]'), 'Missing [data-theme="light"]');
    assert.ok(variablesCss.includes('--color-background: #fbf9f5;'), 'Missing light --color-background');
    assert.ok(variablesCss.includes('--color-text-primary: #141f1c;'), 'Missing light --color-text-primary');
    assert.ok(variablesCss.includes('--color-accent: #0d7663;'), 'Missing light --color-accent');
  });

  it('verifies button system classes in utilities.css', () => {
    assert.ok(utilitiesCss.includes('.button'), 'Missing .button');
    assert.ok(utilitiesCss.includes('.button.primary'), 'Missing .button.primary');
    assert.ok(utilitiesCss.includes('.button.secondary'), 'Missing .button.secondary');
    assert.ok(utilitiesCss.includes('.button.ghost'), 'Missing .button.ghost');
    assert.ok(utilitiesCss.includes('.button.link'), 'Missing .button.link');
  });

  it('verifies status pill taxonomy and light theme support in utilities.css', () => {
    assert.ok(utilitiesCss.includes('.status-pill.active'), 'Missing .status-pill.active');
    assert.ok(utilitiesCss.includes('.status-pill.completed'), 'Missing .status-pill.completed');
    assert.ok(utilitiesCss.includes('.status-pill.academic'), 'Missing .status-pill.academic');
    assert.ok(utilitiesCss.includes('.status-pill.prototype'), 'Missing .status-pill.prototype');
    assert.ok(utilitiesCss.includes('.status-pill.research'), 'Missing .status-pill.research');
    assert.ok(utilitiesCss.includes('.status-pill.archived'), 'Missing .status-pill.archived');
    assert.ok(utilitiesCss.includes('[data-theme="light"] .status-pill.active'), 'Missing light .status-pill.active');
  });

  it('verifies typography, code blocks, tables, and forms in global.css', () => {
    assert.ok(globalCss.includes('pre'), 'Missing pre in global.css');
    assert.ok(globalCss.includes('code'), 'Missing code in global.css');
    assert.ok(globalCss.includes('[data-theme="light"] code'), 'Missing light code in global.css');
    assert.ok(globalCss.includes('table'), 'Missing table in global.css');
    assert.ok(globalCss.includes('th'), 'Missing th in global.css');
    assert.ok(globalCss.includes('td'), 'Missing td in global.css');
    assert.ok(globalCss.includes('input:not([type="checkbox"]):not([type="radio"])'), 'Missing input rule in global.css');
  });

  it('verifies safe-area and responsive layout containers in utilities.css', () => {
    assert.ok(utilitiesCss.includes('.section-shell'), 'Missing .section-shell');
    assert.ok(utilitiesCss.includes('--container-max'), 'Missing --container-max');
    assert.ok(utilitiesCss.includes('safe-area-inset-left'), 'Missing safe-area-inset-left');
  });
});
