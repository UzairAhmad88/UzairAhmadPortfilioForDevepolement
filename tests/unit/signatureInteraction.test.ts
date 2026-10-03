import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { engineeringLenses, signatureConfig, defaultLensId } from '../../src/data/signatureInteraction.ts';
import { projects } from '../../src/data/projects.ts';
import {
  buildSignaturePayload,
  getAllSignaturePayloads,
  getSignaturePayloadBySlug,
  getFeaturedSignaturePayload,
} from '../../src/lib/signature/interactionBuilder.ts';

describe('Phase 23: Signature Interaction System & Engineering Lens Navigator', () => {
  it('should define exactly 6 canonical engineering lenses with complete metadata', () => {
    assert.strictEqual(engineeringLenses.length, 6);
    const expectedIds = ['architecture', 'constraints', 'implementation', 'evidence', 'tradeoffs', 'connections'];
    const actualIds = engineeringLenses.map((l) => l.id);
    assert.deepStrictEqual(actualIds, expectedIds);

    for (const lens of engineeringLenses) {
      assert.ok(lens.name.length > 0, `Lens ${lens.id} has empty name`);
      assert.ok(lens.tagline.length > 0, `Lens ${lens.id} has empty tagline`);
      assert.ok(lens.badge.length > 0, `Lens ${lens.id} has empty badge`);
      assert.ok(lens.description.length > 0, `Lens ${lens.id} has empty description`);
      assert.ok(lens.question.length > 0, `Lens ${lens.id} has empty question`);
    }

    assert.strictEqual(defaultLensId, 'architecture');
    assert.strictEqual(signatureConfig.urlParamKey, 'lens');
  });

  it('should generate valid multi-lens payloads for all platform projects', () => {
    const payloads = getAllSignaturePayloads();
    assert.strictEqual(payloads.length, projects.length);

    for (const p of payloads) {
      assert.ok(p.projectSlug);
      assert.ok(p.projectTitle);
      assert.ok(p.domain);
      assert.ok(p.lenses);

      // Check all 6 lenses exist
      assert.ok(p.lenses.architecture);
      assert.ok(p.lenses.constraints);
      assert.ok(p.lenses.implementation);
      assert.ok(p.lenses.evidence);
      assert.ok(p.lenses.tradeoffs);
      assert.ok(p.lenses.connections);
    }
  });

  it('should construct rich architecture lens data with stages and execution nodes', () => {
    const featured = getFeaturedSignaturePayload();
    const arch = featured.lenses.architecture;

    assert.ok(arch.topologyDescription.length > 0);
    assert.ok(arch.stages.length >= 3, 'Expected at least 3 stage flow cards');
    assert.ok(arch.nodes.length >= 3, 'Expected at least 3 execution topology nodes');
    assert.ok(arch.dataFlowSummary.length > 0);
    assert.ok(arch.stateModel);
  });

  it('should construct formal constraints lens data with mathematical boundaries', () => {
    const featured = getFeaturedSignaturePayload();
    const constr = featured.lenses.constraints;

    assert.ok(constr.problemStatement.length > 0);
    assert.ok(constr.mathematicalBoundaries.length > 0);
    assert.ok(constr.operationalConstraints.length > 0);
    assert.ok(constr.failureModesGuarded.length > 0);
  });

  it('should map implementation stack to canonical technologies and code contracts', () => {
    const featured = getFeaturedSignaturePayload();
    const impl = featured.lenses.implementation;

    assert.ok(impl.coreStack.length > 0);
    for (const tech of impl.coreStack) {
      assert.ok(tech.id);
      assert.ok(tech.name);
      assert.ok(tech.role);
    }
    assert.ok(impl.keyHighlights.length > 0);
    assert.ok(impl.codeOrContractSnippet);
    assert.ok(impl.codeOrContractSnippet.code.length > 0);
  });

  it('should provide empirical evidence telemetry and verification states', () => {
    const featured = getFeaturedSignaturePayload();
    const ev = featured.lenses.evidence;

    assert.ok(ev.verifiableResults.length > 0);
    assert.ok(ev.auditMetrics.length >= 3);
    for (const met of ev.auditMetrics) {
      assert.ok(met.label);
      assert.ok(met.value);
      assert.ok(['pass', 'optimal', 'verified'].includes(met.status));
    }
  });

  it('should capture architectural decisions, trade-offs, and lessons learned', () => {
    const featured = getFeaturedSignaturePayload();
    const to = featured.lenses.tradeoffs;

    assert.ok(to.decisions.length > 0);
    for (const dec of to.decisions) {
      assert.ok(dec.decision);
      assert.ok(dec.rationale);
    }
    assert.ok(to.challenges.length > 0);
    assert.ok(to.knownLimitations.length > 0);
    assert.ok(to.lessonsLearned.length > 0);
  });

  it('should resolve connected research, lab experiments, notes, and lineage', () => {
    const featured = getFeaturedSignaturePayload();
    const conn = featured.lenses.connections;

    assert.ok(typeof conn.totalConnectedEntities === 'number');
    assert.ok(Array.isArray(conn.connectedResearch));
    assert.ok(Array.isArray(conn.connectedLab));
    assert.ok(Array.isArray(conn.connectedNotes));
  });

  it('should handle slug lookups safely with fallback to undefined for invalid slugs', () => {
    const valid = getSignaturePayloadBySlug('deep-learning-stock-return-prediction');
    assert.ok(valid);
    assert.strictEqual(valid.projectSlug, 'deep-learning-stock-return-prediction');

    const invalid = getSignaturePayloadBySlug('non-existent-system-slug');
    assert.strictEqual(invalid, undefined);
  });
});
