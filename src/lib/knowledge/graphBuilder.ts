import type {
  KnowledgeNode,
  KnowledgeEdge,
  KnowledgeGraph,
  KnowledgeNodeType,
  KnowledgeRelationshipType,
  GraphValidationReport,
  FocusedGraphView,
} from '../../types/knowledge.ts';

import { projects } from '../../data/projects.ts';
import { researchItems } from '../../data/research.ts';
import { labItems } from '../../data/lab.ts';
import { engineeringNotes } from '../../data/notes.ts';
import { technologies } from '../../data/technologies.ts';
import { methodologySteps } from '../../data/methodology.ts';

export function buildKnowledgeGraph(): KnowledgeGraph {
  const nodes: KnowledgeNode[] = [];
  const edges: KnowledgeEdge[] = [];
  const edgeSet = new Set<string>();

  function addEdge(
    source: string,
    target: string,
    relationship: KnowledgeRelationshipType,
    label: string,
    metadata?: Record<string, any>
  ) {
    if (!source || !target || source === target) return;
    const edgeKey = `${source}->${target}:${relationship}`;
    if (edgeSet.has(edgeKey)) return;

    edgeSet.add(edgeKey);
    edges.push({
      id: `edge:${edgeKey}`,
      source,
      target,
      relationship,
      label,
      metadata,
    });
  }

  // 1. Projects
  for (const project of projects) {
    const nodeId = `project:${project.slug}`;
    nodes.push({
      id: nodeId,
      rawId: project.id || project.slug,
      type: 'project',
      title: project.title,
      slug: project.slug,
      href: `/work/${project.slug}`,
      summary: project.shortDescription || project.problem,
      badge: project.projectType,
      metadata: {
        domain: project.domain,
        status: project.status,
        presentationLevel: project.presentationLevel,
      },
    });

    // Tech relationships (normalize tech string / canonical ID)
    if (project.technologies) {
      for (const techName of project.technologies) {
        const canonicalTech = technologies.find(
          (t) =>
            t.id === techName.toLowerCase().trim() ||
            t.name.toLowerCase() === techName.toLowerCase().trim() ||
            t.aliases?.some((a) => a.toLowerCase() === techName.toLowerCase().trim())
        );
        if (canonicalTech) {
          addEdge(nodeId, `technology:${canonicalTech.id}`, 'USED_IN', 'Uses Technology');
        }
      }
    }

    if (project.relatedResearch) {
      for (const resSlug of project.relatedResearch) {
        addEdge(nodeId, `research:${resSlug}`, 'INFORMED_BY', 'Informed by Research');
      }
    }

    if (project.relatedLab) {
      for (const labSlug of project.relatedLab) {
        addEdge(nodeId, `lab:${labSlug}`, 'RELATED_TO', 'Related Lab Experiment');
      }
    }

    if (project.originatedFromLab) {
      addEdge(nodeId, `lab:${project.originatedFromLab}`, 'ORIGINATED_FROM', 'Originated from Lab Experiment');
    }

    if (project.relatedNotes) {
      for (const noteSlug of project.relatedNotes) {
        addEdge(nodeId, `note:${noteSlug}`, 'DOCUMENTS', 'Documented in Note');
      }
    }

    if (project.relatedProjects) {
      for (const otherProjSlug of project.relatedProjects) {
        addEdge(nodeId, `project:${otherProjSlug}`, 'RELATED_TO', 'Related Project');
      }
    }

    if (project.archive?.successorProjectId) {
      addEdge(nodeId, `project:${project.archive.successorProjectId}`, 'SUPERSEDED_BY', 'Superseded by Subsequent Architecture');
    }

    if (project.archive?.predecessorProjectId) {
      addEdge(nodeId, `project:${project.archive.predecessorProjectId}`, 'EVOLVED_FROM', 'Evolved from Precursor Architecture');
    }
  }


  // 2. Research
  for (const research of researchItems) {
    const nodeId = `research:${research.slug}`;
    nodes.push({
      id: nodeId,
      rawId: research.id,
      type: 'research',
      title: research.title,
      slug: research.slug,
      href: `/research/${research.slug}`,
      summary: research.summary,
      badge: research.badge,
      metadata: {
        domain: research.domain,
        status: research.status,
      },
    });

    if (research.technologies) {
      for (const techId of research.technologies) {
        addEdge(nodeId, `technology:${techId}`, 'USED_IN', 'Utilizes Technology');
      }
    }

    if (research.relatedProjects) {
      for (const projSlug of research.relatedProjects) {
        addEdge(nodeId, `project:${projSlug}`, 'IMPLEMENTS', 'Applied in Project');
      }
    }

    if (research.relatedLab) {
      for (const labSlug of research.relatedLab) {
        addEdge(nodeId, `lab:${labSlug}`, 'VALIDATES', 'Tested in Lab Workbench');
      }
    }

    if (research.relatedNotes) {
      for (const noteSlug of research.relatedNotes) {
        addEdge(nodeId, `note:${noteSlug}`, 'DOCUMENTS', 'Reflected in Note');
      }
    }

    if (research.relatedResearch) {
      for (const otherResSlug of research.relatedResearch) {
        addEdge(nodeId, `research:${otherResSlug}`, 'RELATED_TO', 'Related Research Inquiry');
      }
    }
  }

  // 3. Lab
  for (const lab of labItems) {
    const nodeId = `lab:${lab.slug}`;
    nodes.push({
      id: nodeId,
      rawId: lab.id,
      type: 'lab',
      title: lab.title,
      slug: lab.slug,
      href: `/lab/${lab.slug}`,
      summary: lab.shortDescription,
      badge: lab.type,
      metadata: {
        status: lab.status,
        state: lab.state,
        outcome: lab.resultOutcome,
      },
    });

    if (lab.technologies) {
      for (const techId of lab.technologies) {
        addEdge(nodeId, `technology:${techId}`, 'USED_IN', 'Explores Technology');
      }
    }

    if (lab.relatedProjects) {
      for (const projSlug of lab.relatedProjects) {
        addEdge(nodeId, `project:${projSlug}`, 'RELATED_TO', 'Related to Project');
      }
    }

    if (lab.promotedToProject) {
      addEdge(nodeId, `project:${lab.promotedToProject}`, 'PROMOTED_TO', 'Graduated to Production System');
    }

    if (lab.relatedResearch) {
      for (const resSlug of lab.relatedResearch) {
        addEdge(nodeId, `research:${resSlug}`, 'VALIDATES', 'Validates Research Hypothesis');
      }
    }

    if (lab.relatedNotes) {
      for (const noteSlug of lab.relatedNotes) {
        addEdge(nodeId, `note:${noteSlug}`, 'DOCUMENTS', 'Produces Engineering Note');
      }
    }
  }

  // 4. Engineering Notes
  for (const note of engineeringNotes) {
    const nodeId = `note:${note.slug}`;
    nodes.push({
      id: nodeId,
      rawId: note.id,
      type: 'note',
      title: note.title,
      slug: note.slug,
      href: `/notes/${note.slug}`,
      summary: note.summary,
      badge: note.type,
      metadata: {
        topic: note.topic,
        readingTimeMinutes: note.readingTimeMinutes,
      },
    });

    if (note.technologies) {
      for (const techId of note.technologies) {
        addEdge(nodeId, `technology:${techId}`, 'USED_IN', 'Dissects Technology');
      }
    }

    if (note.relatedProjects) {
      for (const projSlug of note.relatedProjects) {
        addEdge(nodeId, `project:${projSlug}`, 'DOCUMENTS', 'Documents Project Lesson');
      }
    }

    if (note.relatedResearch) {
      for (const resSlug of note.relatedResearch) {
        addEdge(nodeId, `research:${resSlug}`, 'DOCUMENTS', 'Documents Research Finding');
      }
    }

    if (note.relatedLab) {
      for (const labSlug of note.relatedLab) {
        addEdge(nodeId, `lab:${labSlug}`, 'DOCUMENTS', 'Documents Workbench Discovery');
      }
    }
  }

  // 5. Technologies
  for (const tech of technologies) {
    const nodeId = `technology:${tech.id}`;
    nodes.push({
      id: nodeId,
      rawId: tech.id,
      type: 'technology',
      title: tech.name,
      slug: tech.id,
      href: `/technology/${tech.id}`,
      summary: tech.tagline,
      badge: tech.primaryRole,
      metadata: {
        status: tech.status,
        categories: tech.categories,
      },
    });

    if (tech.projectSlugs) {
      for (const projSlug of tech.projectSlugs) {
        addEdge(nodeId, `project:${projSlug}`, 'USED_IN', 'Used in Project');
      }
    }

    if (tech.researchSlugs) {
      for (const resSlug of tech.researchSlugs) {
        addEdge(nodeId, `research:${resSlug}`, 'EXPLORES', 'Explored in Research');
      }
    }

    if (tech.labSlugs) {
      for (const labSlug of tech.labSlugs) {
        addEdge(nodeId, `lab:${labSlug}`, 'USED_IN', 'Tested in Lab');
      }
    }

    if (tech.noteSlugs) {
      for (const noteSlug of tech.noteSlugs) {
        addEdge(nodeId, `note:${noteSlug}`, 'DOCUMENTS', 'Discussed in Note');
      }
    }

    if (tech.methodologySteps) {
      for (const stepId of tech.methodologySteps) {
        addEdge(nodeId, `methodology:${stepId}`, 'USES_METHOD', 'Applied in Methodology Step');
      }
    }
  }

  // 6. Methodology Steps
  for (const step of methodologySteps) {
    const nodeId = `methodology:${step.id}`;
    nodes.push({
      id: nodeId,
      rawId: step.id,
      type: 'methodology',
      title: `${step.number} / ${step.title}`,
      slug: step.id,
      href: `/how-i-build#step-${step.id}`,
      summary: step.tagline,
      badge: `Step ${step.number}`,
      metadata: {
        number: step.number,
      },
    });

    if (step.projectSlugs) {
      for (const projSlug of step.projectSlugs) {
        addEdge(nodeId, `project:${projSlug}`, 'USES_METHOD', 'Demonstrated in Project');
      }
    }
  }

  return {
    nodes,
    edges,
    generatedAt: new Date().toISOString(),
  };
}

export function validateKnowledgeGraph(graph: KnowledgeGraph): GraphValidationReport {
  const nodeMap = new Map<string, KnowledgeNode>();
  const nodesByType: Record<KnowledgeNodeType, number> = {
    project: 0,
    research: 0,
    lab: 0,
    note: 0,
    technology: 0,
    methodology: 0,
  };

  const edgesByRelationship: Record<KnowledgeRelationshipType, number> = {
    USED_IN: 0,
    EXPLORES: 0,
    ORIGINATED_FROM: 0,
    PROMOTED_TO: 0,
    DOCUMENTS: 0,
    INFORMED_BY: 0,
    RELATED_TO: 0,
    IMPLEMENTS: 0,
    VALIDATES: 0,
    USES_METHOD: 0,
    SUPERSEDED_BY: 0,
    EVOLVED_FROM: 0,
  };


  for (const node of graph.nodes) {
    nodeMap.set(node.id, node);
    nodesByType[node.type] = (nodesByType[node.type] || 0) + 1;
  }

  const invalidEdgeIds: string[] = [];
  const connectedNodeIds = new Set<string>();
  const warnings: string[] = [];

  for (const edge of graph.edges) {
    const hasSource = nodeMap.has(edge.source);
    const hasTarget = nodeMap.has(edge.target);

    if (!hasSource || !hasTarget) {
      invalidEdgeIds.push(edge.id);
      warnings.push(
        `Edge "${edge.id}" references missing node: source=${edge.source} (exists: ${hasSource}), target=${edge.target} (exists: ${hasTarget})`
      );
    } else {
      connectedNodeIds.add(edge.source);
      connectedNodeIds.add(edge.target);
      edgesByRelationship[edge.relationship] = (edgesByRelationship[edge.relationship] || 0) + 1;
    }
  }

  const orphanedNodeIds: string[] = [];
  for (const node of graph.nodes) {
    if (!connectedNodeIds.has(node.id)) {
      orphanedNodeIds.push(node.id);
      warnings.push(`Orphaned node detected (no relationships): ${node.id} (${node.title})`);
    }
  }

  return {
    totalNodes: graph.nodes.length,
    totalEdges: graph.edges.length,
    nodesByType,
    edgesByRelationship,
    orphanedNodeIds,
    invalidEdgeIds,
    warnings,
    isValid: invalidEdgeIds.length === 0,
  };
}

export function getNodeById(graph: KnowledgeGraph, id: string): KnowledgeNode | undefined {
  return graph.nodes.find((n) => n.id === id);
}

export function getNodeBySlug(
  graph: KnowledgeGraph,
  type: KnowledgeNodeType,
  slug: string
): KnowledgeNode | undefined {
  return graph.nodes.find((n) => n.type === type && n.slug === slug);
}

export function getDirectEdges(graph: KnowledgeGraph, nodeId: string): KnowledgeEdge[] {
  return graph.edges.filter((e) => e.source === nodeId || e.target === nodeId);
}

export function getConnectedNodes(graph: KnowledgeGraph, nodeId: string): KnowledgeNode[] {
  const edges = getDirectEdges(graph, nodeId);
  const connectedIds = new Set<string>();

  for (const e of edges) {
    if (e.source === nodeId) connectedIds.add(e.target);
    if (e.target === nodeId) connectedIds.add(e.source);
  }

  return graph.nodes.filter((n) => connectedIds.has(n.id));
}

export function getFocusedGraph(graph: KnowledgeGraph, nodeId: string, depth: number = 1): FocusedGraphView | null {
  const focusNode = getNodeById(graph, nodeId);
  if (!focusNode) return null;

  const directEdges = getDirectEdges(graph, nodeId);
  const directConnectedNodes = getConnectedNodes(graph, nodeId);

  let secondaryNodes: KnowledgeNode[] = [];
  let secondaryEdges: KnowledgeEdge[] = [];

  if (depth > 1) {
    const directIds = new Set(directConnectedNodes.map((n) => n.id));
    const secondaryIds = new Set<string>();

    for (const node of directConnectedNodes) {
      const secEdges = getDirectEdges(graph, node.id);
      for (const e of secEdges) {
        const otherId = e.source === node.id ? e.target : e.source;
        if (otherId !== nodeId && !directIds.has(otherId)) {
          secondaryIds.add(otherId);
          secondaryEdges.push(e);
        }
      }
    }
    secondaryNodes = graph.nodes.filter((n) => secondaryIds.has(n.id));
  }

  const groupedByType: Record<KnowledgeNodeType, KnowledgeNode[]> = {
    project: [],
    research: [],
    lab: [],
    note: [],
    technology: [],
    methodology: [],
  };

  for (const node of directConnectedNodes) {
    groupedByType[node.type].push(node);
  }

  return {
    focusNode,
    directEdges,
    connectedNodes: directConnectedNodes,
    secondaryNodes: depth > 1 ? secondaryNodes : undefined,
    secondaryEdges: depth > 1 ? secondaryEdges : undefined,
    groupedByType,
  };
}
