import { describe, it } from 'node:test';
import assert from 'node:assert';
import { labItems } from '../../src/data/lab.ts';
import { labVisualArtifacts } from '../../src/data/labArtifacts.ts';

describe('Lab Final Curation Pass: Quality, Evidence & Truthfulness', () => {
  const FORBIDDEN_MARKETING_TERMS = [
    'cutting-edge',
    'revolutionary',
    'world-class',
    'enterprise-grade',
    'seamless',
    'next-generation',
    'magic',
    'groundbreaking',
    'industry-leading'
  ];

  it('should verify all Lab items have clear, non-empty questions and honest outcomes', () => {
    for (const item of labItems) {
      assert.ok(item.question.length > 15, `Lab item "${item.slug}" must have a detailed research question`);
      assert.ok(item.context.length > 20, `Lab item "${item.slug}" must have meaningful technical context`);
      assert.ok(item.experiment.length > 20, `Lab item "${item.slug}" must describe the experimental setup`);
      assert.ok(item.result.length > 20, `Lab item "${item.slug}" must state empirical results`);
      assert.ok(item.resultOutcome, `Lab item "${item.slug}" must have a designated resultOutcome`);
      assert.ok(item.limitations && item.limitations.length > 0, `Lab item "${item.slug}" must document explicit limitations`);
    }
  });

  it('should guarantee zero prohibited marketing buzzwords across titles, summaries, and descriptions', () => {
    for (const item of labItems) {
      const textCorpus = `${item.title} ${item.shortDescription} ${item.description} ${item.result}`.toLowerCase();
      for (const term of FORBIDDEN_MARKETING_TERMS) {
        assert.ok(
          !textCorpus.includes(term),
          `Lab item "${item.slug}" contains forbidden marketing buzzword: "${term}"`
        );
      }
    }
  });

  it('should verify all visual artifacts have explicit evidence states, whatThisShows, and whatToNotice explanations', () => {
    for (const art of labVisualArtifacts) {
      assert.ok(art.id, 'Artifact must have an id');
      assert.ok(art.experimentSlug, `Artifact "${art.id}" must link to an experimentSlug`);
      assert.ok(
        ['actual', 'prototype', 'simulation', 'concept'].includes(art.evidenceState),
        `Artifact "${art.id}" has invalid evidenceState: ${art.evidenceState}`
      );
      assert.ok(art.whatThisShows.length > 15, `Artifact "${art.id}" must explain whatThisShows`);
      assert.ok(art.whatToNotice.length > 15, `Artifact "${art.id}" must explain whatToNotice`);
      assert.ok(art.caption.length > 10, `Artifact "${art.id}" must have a descriptive caption`);
    }
  });

  it('should ensure conceptual/exploratory experiments truthfully declare non-actual evidence states', () => {
    const hestonExp = labItems.find((l) => l.slug === 'stochastic-volatility-heston-calibration');
    assert.ok(hestonExp, 'Heston experiment must exist');
    assert.strictEqual(hestonExp?.state, 'concept', 'Heston experiment state must be concept');
    assert.strictEqual(hestonExp?.status, 'Exploring', 'Heston experiment status must be Exploring');
    assert.strictEqual(
      hestonExp?.resultOutcome,
      'Requires further testing',
      'Heston experiment outcome must honestly declare "Requires further testing"'
    );

    const hestonArtifacts = labVisualArtifacts.filter(
      (a) => a.experimentSlug === 'stochastic-volatility-heston-calibration'
    );
    for (const art of hestonArtifacts) {
      assert.ok(
        art.evidenceState === 'concept' || art.evidenceState === 'simulation',
        `Heston artifact "${art.id}" must be classified as concept or simulation, got: ${art.evidenceState}`
      );
    }
  });

  it('should guarantee zero artificial star ratings, percentage scores, or fake tiers in Lab records', () => {
    for (const item of labItems) {
      assert.ok(!('qualityScore' in item), `Lab item "${item.slug}" must not contain qualityScore`);
      assert.ok(!('rating' in item), `Lab item "${item.slug}" must not contain rating`);
      assert.ok(!('stars' in item), `Lab item "${item.slug}" must not contain stars`);
      assert.ok(!('tier' in item), `Lab item "${item.slug}" must not contain tier`);
    }
  });
});
