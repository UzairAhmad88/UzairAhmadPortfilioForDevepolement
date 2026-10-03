import type { Project, ProjectDNAMetadata, ProjectEvidenceItem } from '@/types/project';

/**
 * Derives the canonical Project DNA technical fingerprint from a project model.
 * Guarantees zero hardcoding in components while allowing explicit project overrides.
 */
export function getProjectDNA(project: Project): ProjectDNAMetadata {
  // Format Lifecycle Status
  let statusText = 'Completed';
  if (project.status === 'active') {
    statusText = 'Active Research';
  } else if (project.status === 'academic') {
    statusText = 'Academic FYP';
  } else if (project.status === 'prototype') {
    statusText = 'Prototype';
  } else if (project.status === 'research') {
    statusText = 'Research';
  } else if (project.status === 'archived') {
    statusText = 'Archived';
  }

  // Derive Context
  let contextText = project.context;
  if (!contextText) {
    if (project.status === 'academic' || project.team?.toLowerCase().includes('fyp')) {
      contextText = 'Academic (FYP)';
    } else if (project.team?.toLowerCase().includes('client')) {
      contextText = 'Client Platform';
    } else if (project.type === 'Research' || project.team?.toLowerCase().includes('research')) {
      contextText = 'Independent Research';
    } else if (project.team?.toLowerCase().includes('individual')) {
      contextText = 'Personal Engineering';
    } else {
      contextText = 'Personal Engineering';
    }
  }

  // Derive Deployment Environment
  let deploymentText = project.deployment;
  if (!deploymentText) {
    if (project.deploymentStatus === 'production') {
      deploymentText = 'Vercel (Production)';
    } else if (project.deploymentStatus === 'preview') {
      deploymentText = 'Vercel (Preview / Staging)';
    } else if (project.type === 'Research' || project.category.includes('quant')) {
      deploymentText = 'Local Research / GPU (CUDA)';
    } else if (project.category.includes('ai')) {
      deploymentText = 'Python Execution / Agent Runtime';
    } else {
      deploymentText = 'Local Execution / Browser';
    }
  }

  // Extract Verifiable Evidence
  const evidence: ProjectEvidenceItem[] = [];

  if (project.githubUrl) {
    evidence.push({
      label: 'GitHub Repository',
      url: project.githubUrl,
      type: 'github',
      verified: project.repositoryStatus === 'public' || Boolean(project.githubRepo)
    });
  }

  if (project.liveUrl) {
    evidence.push({
      label: 'Live Application',
      url: project.liveUrl,
      type: 'live',
      verified: project.deploymentStatus === 'production'
    });
  } else if (project.vercelUrl) {
    evidence.push({
      label: 'Vercel Deployment',
      url: project.vercelUrl,
      type: 'demo',
      verified: true
    });
  }

  if (project.documentationUrl) {
    evidence.push({
      label: 'Documentation',
      url: project.documentationUrl,
      type: 'documentation',
      verified: true
    });
  }

  // Case study is always available on-platform
  evidence.push({
    label: 'Technical Case Study',
    url: `/work/${project.slug}`,
    type: 'case-study',
    verified: Boolean(project.caseStudy)
  });

  const archiveState = project.archive?.state;
  if (archiveState === 'superseded') {
    statusText = 'Superseded';
  } else if (archiveState === 'legacy') {
    statusText = 'Legacy System';
  } else if (archiveState === 'paused') {
    statusText = 'Paused';
  } else if (archiveState === 'abandoned') {
    statusText = 'Historical Experiment';
  } else if (archiveState === 'archived') {
    statusText = 'Archived';
  }

  const baseDNA: ProjectDNAMetadata = {
    type: project.projectType || project.type || 'System',
    status: statusText,
    rawStatus: project.status,
    archiveState: archiveState || (project.status === 'archived' ? 'archived' : 'active'),
    timeline: project.timeline || (project.publishedAt ? new Date(project.publishedAt).getFullYear().toString() : undefined),
    year: project.publishedAt ? new Date(project.publishedAt).getFullYear().toString() : undefined,
    role: project.role,
    context: contextText,
    technologies: project.technologies || [],
    evidence,
    deployment: deploymentText,
    domain: project.domain,
  };

  return {
    ...baseDNA,
    ...(project.dna || {}),
  };
}

