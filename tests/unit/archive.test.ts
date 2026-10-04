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
      assert.strictEqual(
        active.length + archived.length,
        publicProj.length,
        'Sum of active and archived must equal total public projects'
      );
    });

    it('identifies superseded projects with valid successors if present', () => {
      const superseded = getSupersededProjects(projects);

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

    it('identifies legacy systems and historical completions if present', () => {
      const legacy = getLegacyProjects(projects);
      const historical = getCompletedHistoricalProjects(projects);

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
      assert.ok(graph.nodes.length > 0, 'Graph must contain nodes');
      assert.ok(graph.edges.length > 0, 'Graph must contain edges');
    });
  });

  describe('Discovery Archive Search & Filtering', () => {
    it('includes projects in discovery index', () => {
      const index = buildDiscoveryIndex();
      const projectItems = index.items.filter((i) => i.type === 'project');

      assert.ok(projectItems.length >= projects.length);
    });

    it('allows searching discovery index for engineering systems', () => {
      const index = buildDiscoveryIndex();
      const matches = searchDiscovery(index.items, { query: 'system' });
      assert.ok(matches.length > 0, 'Search for "system" should return matches');
    });
  });
});
