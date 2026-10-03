import type { EngineeringLensMetadata, EngineeringLensId } from '../types/signatureInteraction.ts';

export const engineeringLenses: EngineeringLensMetadata[] = [
  {
    id: 'architecture',
    name: 'Architecture & Topology',
    tagline: 'Component hierarchy, dataflow pipelines & system boundaries',
    badge: 'STAGE // 01',
    icon: 'topology',
    description: 'Examine the system topology, state machines, message flows, and decoupled tier boundaries.',
    question: 'How do the components interconnect and route state under load?'
  },
  {
    id: 'constraints',
    name: 'Problem & Constraints',
    tagline: 'Mathematical boundaries, non-stationarity & latency limits',
    badge: 'STAGE // 02',
    icon: 'constraints',
    description: 'Inspect the formal operational parameters, data regime shifts, and guarded failure modes.',
    question: 'What physical, mathematical, and latency boundaries dictate the design?'
  },
  {
    id: 'implementation',
    name: 'Core Stack & Code',
    tagline: 'Tensors, data contracts, and algorithmic implementation',
    badge: 'STAGE // 03',
    icon: 'implementation',
    description: 'Inspect verified technologies, schema contracts, tensor transformations, and core routines.',
    question: 'What technologies, schemas, and algorithms execute the business logic?'
  },
  {
    id: 'evidence',
    name: 'Empirical Evidence',
    tagline: 'Out-of-sample metrics, benchmarks & verified telemetry',
    badge: 'STAGE // 04',
    icon: 'evidence',
    description: 'Review verifiable out-of-sample evaluation metrics, Git commits, and live deployments.',
    question: 'What verifiable empirical proofs and metrics validate this system?'
  },
  {
    id: 'tradeoffs',
    name: 'Trade-offs & Lessons',
    tagline: 'Technical decisions, postmortems & what was sacrificed',
    badge: 'STAGE // 05',
    icon: 'tradeoffs',
    description: 'Explore conscious engineering compromises, retrospective discoveries, and limitations.',
    question: 'What alternative designs were rejected and what constraints were accepted?'
  },
  {
    id: 'connections',
    name: 'Connected Knowledge',
    tagline: 'Linked research, lab experiments, notes & system evolution',
    badge: 'STAGE // 06',
    icon: 'connections',
    description: 'Trace bidirectional relationships across research inquiries, lab prototypes, and notes.',
    question: 'How does this system connect to the broader body of research and lab experiments?'
  }
];

export const defaultLensId: EngineeringLensId = 'architecture';

export const signatureConfig = {
  urlParamKey: 'lens',
  heading: 'System Topology & Engineering Lens',
  subheading: 'Inspect production systems through six disciplined engineering perspectives—from mathematical constraints and architectural topologies to verifiable evidence and postmortem lessons.',
  badgeText: 'SIGNATURE INTERACTION // MULTI-DIMENSIONAL SYSTEM INSPECTOR',
};
