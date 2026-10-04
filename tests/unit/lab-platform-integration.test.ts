import { describe, it } from 'node:test';
import assert from 'node:assert';
import { labItems, getAllLabItems, getLabItemBySlug } from '../../src/data/lab.ts';
import { projects } from '../../src/data/projects.ts';
import { researchItems } from '../../src/data/research.ts';
import { engineeringNotes } from '../../src/data/notes.ts';
import { technologies } from '../../src/data/technologies.ts';
import {
  buildKnowledgeGraph,
  validateKnowledgeGraph,
  getNodeById,
  getNodeBySlug,
  getDirectEdges,
  getConnectedNodes,
} from '../../src/lib/knowledge/graphBuilder.ts';
import { knowledgeGraph } from '../../src/data/knowledgeGraph.ts';
import { searchDocuments } from '../../src/lib/discovery/discoveryEngine.ts';
import { timelineEvents } from '../../src/lib/timeline/timelineEngine.ts';

describe('Lab Platform Integration: Full Cross-System Verification', () => {
  it('should have all 6 canonical lab items represented as valid Knowledge Graph nodes', () => {
    for (const lab of labItems) {
      const node = getNodeById(knowledgeGraph, `lab:${lab.slug}`);
      assert.ok(node, `Knowledge graph must contain node for lab:${lab.slug}`);
      assert.strictEqual(node?.type, 'lab');
      assert.strictEqual(node?.slug, lab.slug);
      assert.strictEqual(node?.href, `/lab/${lab.slug}`);
      assert.strictEqual(node?.title, lab.title);
    }
  });

  it('should generate valid Knowledge Graph edges connecting Lab to Projects, Research, Notes, and Technologies', () => {
    const validation = validateKnowledgeGraph(knowledgeGraph);
    assert.strictEqual(validation.isValid, true, 'Knowledge Graph must have 0 invalid edges');

    for (const lab of labItems) {
      const edges = getDirectEdges(knowledgeGraph, `lab:${lab.slug}`);
      assert.ok(edges.length >= 2, `Lab ${lab.slug} should have multiple direct edges in graph (found ${edges.length})`);

      const connected = getConnectedNodes(knowledgeGraph, `lab:${lab.slug}`);
      assert.ok(connected.length >= 2, `Lab ${lab.slug} should connect to at least 2 other entities`);
    }
  });

  it('should index all Lab items in the Discovery SearchDocument registry', () => {
    const labDocs = searchDocuments.filter((doc) => doc.type === 'LAB');
    assert.strictEqual(labDocs.length, labItems.length, 'Discovery index should contain all canonical lab items');

    for (const lab of labItems) {
      const doc = labDocs.find((d) => d.slug === lab.slug);
      assert.ok(doc, `Discovery index must include lab item ${lab.slug}`);
      assert.strictEqual(doc?.href, `/lab/${lab.slug}`);
      assert.strictEqual(doc?.title, lab.title);
      assert.ok(doc?.searchableText.includes(lab.question), 'Searchable text must include research question');
      assert.ok(doc?.searchableText.includes(lab.resultOutcome), 'Searchable text must include resultOutcome');
      assert.deepStrictEqual(doc?.technologies, lab.technologies);
      assert.deepStrictEqual(doc?.topics, lab.topics);
    }
  });

  it('should ensure bidirectional link consistency between Lab and Projects', () => {
    for (const lab of labItems) {
      if (lab.relatedProjects) {
        for (const projSlug of lab.relatedProjects) {
          const project = projects.find((p) => p.slug === projSlug);
          assert.ok(project, `Project ${projSlug} referenced by lab ${lab.slug} must exist`);
          assert.ok(
            project.relatedLab?.includes(lab.slug) || project.originatedFromLab === lab.slug,
            `Project ${projSlug} should reference back to lab ${lab.slug}`
          );
        }
      }
    }
  });

  it('should ensure bidirectional link consistency between Lab and Research', () => {
    for (const lab of labItems) {
      if (lab.relatedResearch) {
        for (const resSlug of lab.relatedResearch) {
          const research = researchItems.find((r) => r.slug === resSlug);
          assert.ok(research, `Research ${resSlug} referenced by lab ${lab.slug} must exist`);
          assert.ok(
            research.relatedLab?.includes(lab.slug),
            `Research ${resSlug} should reference back to lab ${lab.slug}`
          );
        }
      }
    }
  });

  it('should ensure bidirectional link consistency between Lab and Notes', () => {
    for (const lab of labItems) {
      if (lab.relatedNotes) {
        for (const noteSlug of lab.relatedNotes) {
          const note = engineeringNotes.find((n) => n.slug === noteSlug);
          assert.ok(note, `Note ${noteSlug} referenced by lab ${lab.slug} must exist`);
          assert.ok(
            note.relatedLab?.includes(lab.slug),
            `Note ${noteSlug} should reference back to lab ${lab.slug}`
          );
        }
      }
    }
  });

  it('should ensure bidirectional link consistency between Lab and Technologies', () => {
    for (const lab of labItems) {
      for (const techId of lab.technologies) {
        const tech = technologies.find((t) => t.id === techId);
        assert.ok(tech, `Technology ${techId} referenced by lab ${lab.slug} must exist`);
        assert.ok(
          tech.labSlugs?.includes(lab.slug),
          `Technology ${techId} should reference back to lab ${lab.slug}`
        );
      }
    }
  });

  it('should truthfully represent lab milestone transitions in Timeline events', () => {
    const labTimelineEvents = timelineEvents.filter(
      (e) => e.type === 'LAB_EXPERIMENT' || (e.relatedLab && e.relatedLab.length > 0)
    );
    assert.ok(labTimelineEvents.length > 0, 'Timeline should contain truthful lab milestone events');

    for (const event of labTimelineEvents) {
      if (event.relatedLab) {
        for (const slug of event.relatedLab) {
          assert.ok(
            labItems.some((l) => l.slug === slug),
            `Timeline event ${event.id} references non-existent lab ${slug}`
          );
        }
      }
    }
  });

  it('should have zero orphaned lab experiments across the platform', () => {
    for (const lab of labItems) {
      const hasProject = (lab.relatedProjects && lab.relatedProjects.length > 0) || !!lab.promotedToProject;
      const hasResearch = lab.relatedResearch && lab.relatedResearch.length > 0;
      const hasNotes = lab.relatedNotes && lab.relatedNotes.length > 0;
      const hasTech = lab.technologies && lab.technologies.length > 0;

      const totalConnections =
        (lab.relatedProjects?.length || 0) +
        (lab.relatedResearch?.length || 0) +
        (lab.relatedNotes?.length || 0) +
        (lab.technologies?.length || 0);

      assert.ok(
        totalConnections >= 3,
        `Lab ${lab.slug} must be deeply integrated with at least 3 connections across subsystems (found ${totalConnections})`
      );
      assert.ok(hasTech, `Lab ${lab.slug} must have canonical technology links`);
    }
  });
});
