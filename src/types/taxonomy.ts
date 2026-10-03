export type ContentType = 
  | 'project'
  | 'case-study'
  | 'research'
  | 'note'
  | 'lab-experiment'
  | 'prototype'
  | 'tutorial';

export type TopicKey = 
  | 'quant'
  | 'ai-ml'
  | 'agents'
  | 'web'
  | 'data-systems'
  | 'systems'
  | 'ui-ux';

export interface TopicDefinition {
  key: TopicKey;
  label: string;
  description: string;
  associatedTechnologies: string[];
}

export interface ContentTaxonomyItem {
  id: string;
  slug: string;
  title: string;
  contentType: ContentType;
  primaryTopic: TopicKey;
  secondaryTopics?: TopicKey[];
  technologies: string[];
  url: string;
}
