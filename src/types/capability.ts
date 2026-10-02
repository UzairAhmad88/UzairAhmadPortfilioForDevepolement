export interface CapabilityItem {
  id: string;
  number: string;
  flow: string;
  title: string;
  description: string;
  tags: string[];
  punchline: string;
  visualType: 'signal' | 'network' | 'architecture' | 'product';
}
