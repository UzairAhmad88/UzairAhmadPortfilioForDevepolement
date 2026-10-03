import { describe, it } from 'node:test';
import assert from 'node:assert';
import { projects } from '../../src/data/projects.ts';
import {
  isPublicProject,
  getActiveProjects,
  getArchivedProjects,
  getSupersededProjects,
  getLegacyProjects,
  getCompletedHistoricalProjects,
  getArchiveCatalogSummary,
  getArchiveStateBadge,
  getArchiveReasonText,
} from '../../src/lib/archive/archiveService.ts';
import { getProjectDNA } from '../../src/utils/projectDNA.ts';
import { buildKnowledgeGraph } from '../../src/lib/knowledge/graphBuilder.ts';
import { buildDiscoveryIndex, searchDiscovery } from '../../src/lib/discovery/discoveryEngine.ts';

describe('Phase 18 — Project Archive System', () => {
  describe('Archive Service & Project Filtering', () => {
    it('correctly filters active vs archived projects', () => {
      const active = getActiveProjects(projects);
      const archived = getArchivedProjects(projects);
      const publicProj = projects.filter(isPublicProject);

      assert.ok(active.length > 0, 'Must have active projects');
      assert.ok(archived.length > 0, 'Must have archived projects');
      assert.strictEqual(
        active.length + archived.length,
        publicProj.length,
        'Sum of active and archived must equal total public projects'
      );
    });

    it('identifies superseded projects with valid successors', () => {
      const superseded = getSupersededProjects(projects);
      assert.ok(superseded.length > 0, 'Must have at least one superseded project');

      for (const p of superseded) {
        assert.strictEqual(p.archive?.state, 'superseded');
        assert.ok(p.archive?.successorProjectId, `Superseded project "${p.slug}" must have successorProjectId`);
        assert.notStrictEqual(
          p.archive?.successorProjectId,
          p.slug,
          `Superseded project "${p.slug}" cannot self-reference`
        );
        const successor = projects.find((cand) => cand.slug === p.archive?.successorProjectId || cand.id === p.archive?.successorProjectId);
        assert.ok(successor, `Successor project "${p.archive?.successorProjectId}" must exist in project catalog`);
      }
    });

    it('identifies legacy systems and historical completions', () => {
      const legacy = getLegacyProjects(projects);
      const historical = getCompletedHistoricalProjects(projects);

      assert.ok(legacy.length > 0, 'Must have legacy systems');
      assert.ok(historical.length > 0, 'Must have completed historical projects');

      for (const p of legacy) {
        assert.strictEqual(p.archive?.state, 'legacy');
      }
      for (const p of historical) {
        assert.strictEqual(p.archive?.state, 'archived');
      }
    });

    it('computes accurate catalog summary metrics', () => {
      const summary = getArchiveCatalogSummary(projects);
      assert.strictEqual(summary.totalProjects, projects.length);
      assert.ok(summary.activeCount > 0);
      assert.ok(summary.archivedCount > 0);
      assert.ok(summary.supersededCount > 0);
      assert.ok(summary.legacyCount > 0);
      assert.strictEqual(
        summary.activeCount + summary.archivedCount + summary.supersededCount + summary.legacyCount + summary.pausedCount + summary.unpublishedCount + summary.excludedCount,
        projects.length
      );
    });

    it('formats human-readable archive badges and reasons', () => {
      const supersededBadge = getArchiveStateBadge('superseded');
      assert.strictEqual(supersededBadge.label, 'Superseded');
      assert.strictEqual(supersededBadge.badgeClass, 'badge-superseded');

      const reasonDesc = getArchiveReasonText('SUPERSEDED');
      assert.ok(reasonDesc.includes('Superseded by a newer'));
    });
  });

  describe('Project DNA Archive Integration', () => {
    it('embeds archiveState in derived ProjectDNA', () => {
      for (const project of projects) {
        const dna = getProjectDNA(project);
        assert.ok(dna.archiveState, `Project "${project.slug}" must have archiveState in DNA`);
        if (project.archive?.state === 'superseded') {
          assert.strictEqual(dna.status, 'Superseded');
        } else if (project.archive?.state === 'legacy') {
          assert.strictEqual(dna.status, 'Legacy System');
        } else if (project.archive?.state === 'archived') {
          assert.strictEqual(dna.status, 'Archived');
        }
      }
    });
  });

  describe('Knowledge Graph Archive Evolution Edges', () => {
    it('generates SUPERSEDED_BY and EVOLVED_FROM edges for connected projects', () => {
      const graph = buildKnowledgeGraph();
      const supersededEdges = graph.edges.filter((e) => e.relationship === 'SUPERSEDED_BY');
      const evolvedEdges = graph.edges.filter((e) => e.relationship === 'EVOLVED_FROM');

      assert.ok(supersededEdges.length > 0, 'Graph must contain SUPERSEDED_BY edges');
      assert.ok(evolvedEdges.length > 0, 'Graph must contain EVOLVED_FROM edges');

      for (const edge of supersededEdges) {
        assert.ok(graph.nodes.some((n) => n.id === edge.source), `Source node ${edge.source} must exist`);
        assert.ok(graph.nodes.some((n) => n.id === edge.target), `Target node ${edge.target} must exist`);
      }
    });
  });

  describe('Discovery Archive Search & Filtering', () => {
    it('includes archived projects with archive topics in discovery index', () => {
      const index = buildDiscoveryIndex();
      const projectItems = index.items.filter((i) => i.type === 'project');

      assert.ok(projectItems.length >= projects.length);
      const supersededItem = projectItems.find((i) => i.slug === 'online-complaint-system');
      assert.ok(supersededItem, 'Superseded project must be in discovery index');
      assert.ok(supersededItem.topics.includes('Superseded'), 'Must have Superseded topic tag');
    });

    it('allows searching discovery specifically for archived and legacy systems', () => {
      const index = buildDiscoveryIndex();
      const matches = searchDiscovery(index.items, { query: 'legacy' });
      assert.ok(matches.length > 0, 'Search for "legacy" should return matches');
    });
  });
});
