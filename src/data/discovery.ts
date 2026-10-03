import {
  buildDiscoveryIndex,
  searchDiscovery,
  getContextualDiscovery,
  safeHighlight,
} from '../lib/discovery/discoveryEngine.ts';
import type {
  DiscoveryItem,
  DiscoveryFilterState,
  DiscoveryMatchResult,
  DiscoveryTaxonomy,
  DiscoveryIndexPayload,
  DiscoveryItemType,
} from '../types/discovery.ts';

// Singleton build-time discovery index
export const discoveryPayload: DiscoveryIndexPayload = buildDiscoveryIndex();
export const discoveryItems: DiscoveryItem[] = discoveryPayload.items;
export const discoveryTaxonomy: DiscoveryTaxonomy = discoveryPayload.taxonomy;

export {
  buildDiscoveryIndex,
  searchDiscovery,
  getContextualDiscovery,
  safeHighlight,
};

export type {
  DiscoveryItem,
  DiscoveryFilterState,
  DiscoveryMatchResult,
  DiscoveryTaxonomy,
  DiscoveryIndexPayload,
  DiscoveryItemType,
};
