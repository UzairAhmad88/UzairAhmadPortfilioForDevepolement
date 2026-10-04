import { knowledgeGraph, getNodeById, getNodeBySlug, getConnectedNodes, getDirectEdges } from '../../data/knowledgeGraph.ts';
import type { KnowledgeNode, KnowledgeNodeType } from '../../types/knowledge.ts';
import type { KnowledgePath, KnowledgeCluster, KnowledgeContext, ContextualNextItem } from '../../types/knowledgeEngine.ts';

// 1. Curated Knowledge Pathways
export const curatedKnowledgePaths: KnowledgePath[] = [
  {
    id: 'path:quant-signals-to-execution',
    title: 'From Statistical Inefficiency to Production Alpha Pipelines',
    slug: 'statistical-inefficiency-to-production-alpha',
    description: 'Traces the engineering lifecycle from mathematical signal formulation in fractional differentiation through market regime conditioning to high-throughput streaming execution.',
    theme: 'quantitative-finance',
    steps: [
      {
        nodeId: 'research:signal-research',
        nodeType: 'research',
        title: 'Signal Research & Statistical Inefficiencies in Equities',
        href: '/research/signal-research',
        rationale: 'Hypothesis testing on non-stationary price series and memory preservation via fractional differentiation.',
        keyLearning: 'Fractional differentiation at d=0.45 achieves statistical stationarity while preserving autocorrelation memory.',
      },
      {
        nodeId: 'lab:fractional-diff-cli',
        nodeType: 'lab',
        title: 'Fractional Differentiation CLI & Statistical Stationarity Benchmark',
        href: '/lab/fractional-diff-cli',
        rationale: 'CLI workbench validation of order d bounds and memory retention against real market returns.',
        keyLearning: 'Memory cutoffs at threshold 1e-4 prevent memory loss without incurring computational bottleneck.',
      },
      {
        nodeId: 'note:fractional-differentiation-memory-stationarity',
        nodeType: 'note',
        title: 'Fractional Differentiation: Preserving Memory in Financial Time Series',
        href: '/notes/fractional-differentiation-memory-stationarity',
        rationale: 'Architectural documentation of binomial series expansion and cutoff memory trade-offs.',
        keyLearning: 'Standard integer differentiation destroys the long-memory properties essential for alpha predictability.',
      },
      {
        nodeId: 'project:deep-learning-stock-return-prediction',
        nodeType: 'project',
        title: 'Deep Learning Stock Return Prediction Platform',
        href: '/work/deep-learning-stock-return-prediction',
        rationale: 'Production quantitative ML pipeline integrating stationary features, LSTM-Transformer models, and backtesting engine.',
        keyLearning: 'Ensemble model predictions require rolling cross-validation to eliminate lookahead bias.',
      },
      {
        nodeId: 'lab:streaming-orderbook-sse',
        nodeType: 'lab',
        title: 'Sub-Millisecond Orderbook Server-Sent Events Engine',
        href: '/lab/streaming-orderbook-sse',
        rationale: 'Real-time telemetry stream delivering L2 depth book updates to execution algorithms.',
        keyLearning: 'Asynchronous SSE with non-blocking queues delivers 10,000 updates/sec at < 1.2ms latency.',
      },
    ],
  },
  {
    id: 'path:agentic-state-machines',
    title: 'Deterministic State Graphs & Autonomous Multi-Agent Systems',
    slug: 'deterministic-state-graphs-to-autonomous-agents',
    description: 'Explores how structured Pydantic state machines and LangGraph execution topologies prevent non-deterministic agent hallucinations in B2B prospect intelligence.',
    theme: 'agentic-systems',
    steps: [
      {
        nodeId: 'research:agentic-systems',
        nodeType: 'research',
        title: 'Autonomous Multi-Agent Architecture & Deterministic Orchestration',
        href: '/research/agentic-systems',
        rationale: 'Formal investigation into cyclic agent graphs with strict schema contracts.',
        keyLearning: 'State transitions must be guarded by deterministic validation schemas rather than free-form natural language prompts.',
      },
      {
        nodeId: 'lab:multi-agent-pydantic-state-machine',
        nodeType: 'lab',
        title: 'Deterministic Multi-Agent State Machine with Pydantic Guardrails',
        href: '/lab/multi-agent-pydantic-state-machine',
        rationale: 'Interactive prototype verifying schema transitions and cyclic recovery paths.',
        keyLearning: 'Pydantic BaseModel contracts reject malformed intermediate payload graphs before downstream execution.',
      },
      {
        nodeId: 'note:deterministic-state-graph-pydantic-guardrails',
        nodeType: 'note',
        title: 'Deterministic State Graphs in Multi-Agent Systems: Beyond Prompt-Based Handoffs',
        href: '/notes/deterministic-state-graph-pydantic-guardrails',
        rationale: 'Engineering retrospective analyzing prompt-based vs state-graph reliability in production.',
        keyLearning: 'Explicit routing nodes eliminate unbounded loops and guarantee deterministic state transitions.',
      },
      {
        nodeId: 'project:multi-agent-prospect-intelligence',
        nodeType: 'project',
        title: 'Multi-Agent Prospect Intelligence Engine',
        href: '/work/multi-agent-prospect-intelligence',
        rationale: 'Production multi-agent platform automating company research, contact discovery, and structured brief synthesis.',
        keyLearning: 'Role specialization with dedicated verification agents reduces hallucination rates to near zero.',
      },
    ],
  },
  {
    id: 'path:regime-conditioned-models',
    title: 'Market Regime Detection & Unsupervised Volatility Modeling',
    slug: 'market-regime-detection-to-adaptive-execution',
    description: 'How Gaussian Mixture Models and Heston stochastic calibration inform adaptive risk thresholds across distinct market volatility states.',
    theme: 'quantitative-finance',
    steps: [
      {
        nodeId: 'research:market-regimes',
        nodeType: 'research',
        title: 'Market Regime Detection via Gaussian Mixture Models',
        href: '/research/market-regimes',
        rationale: 'Unsupervised identification of trending, mean-reverting, and high-volatility market regimes.',
        keyLearning: 'Single-model strategies degrade during regime transitions; adaptive parameters preserve risk-adjusted returns.',
      },
      {
        nodeId: 'lab:gmm-regime-stability-probe',
        nodeType: 'lab',
        title: 'GMM Market Regime Transition Stability Probe',
        href: '/lab/gmm-regime-stability-probe',
        rationale: 'Evaluation of transition matrix stability and state-flipping phenomena.',
        keyLearning: 'Variance ordering on covariance matrices prevents non-deterministic state label swapping.',
      },
      {
        nodeId: 'note:gmm-state-flipping-variance-ordering',
        nodeType: 'note',
        title: 'Solving GMM State-Flipping in Unsupervised Financial Regime Detection',
        href: '/notes/gmm-state-flipping-variance-ordering',
        rationale: 'Technical post-mortem on variance sorting and deterministic expectation-maximization seeding.',
        keyLearning: 'Sorting components by empirical variance prior to state classification provides stable regime IDs.',
      },
      {
        nodeId: 'project:market-regime-engine',
        nodeType: 'project',
        title: 'Market Regime Classification & Strategy Allocation Engine',
        href: '/work/market-regime-engine',
        rationale: 'End-to-end framework dynamically adjusting capital allocation based on classified regime state.',
        keyLearning: 'Regime conditioning reduces maximum portfolio drawdown by 34% during volatile macro environments.',
      },
    ],
  },
];

// 2. Curated Knowledge Clusters
export const curatedKnowledgeClusters: KnowledgeCluster[] = [
  {
    id: 'cluster:quant-finance',
    name: 'Quantitative Finance & Market Intelligence',
    slug: 'quantitative-finance-market-intelligence',
    description: 'Production prediction pipelines, statistical stationarity research, Gaussian regime detection, and orderbook streaming systems.',
    nodeIds: [
      'project:deep-learning-stock-return-prediction',
      'project:market-regime-engine',
      'research:signal-research',
      'research:market-regimes',
      'lab:fractional-diff-cli',
      'lab:streaming-orderbook-sse',
      'lab:gmm-regime-stability-probe',
      'note:fractional-differentiation-memory-stationarity',
      'note:gmm-state-flipping-variance-ordering',
    ],
    primaryTechnologies: ['python', 'pytorch', 'pandas', 'numpy', 'scikit-learn', 'fastapi'],
  },
  {
    id: 'cluster:agentic-systems',
    name: 'Autonomous Agentic Systems & State Graphs',
    slug: 'autonomous-agentic-systems-state-graphs',
    description: 'Multi-agent orchestration engines, deterministic Pydantic state machines, and LLM intelligence pipelines.',
    nodeIds: [
      'project:multi-agent-prospect-intelligence',
      'research:agentic-systems',
      'lab:multi-agent-pydantic-state-machine',
      'note:deterministic-state-graph-pydantic-guardrails',
    ],
    primaryTechnologies: ['python', 'langgraph', 'pydantic', 'fastapi', 'typescript'],
  },
  {
    id: 'cluster:enterprise-platforms',
    name: 'Mission-Critical Healthcare & Distributed Systems',
    slug: 'healthcare-distributed-systems',
    description: 'Tiered hospital management systems, role-based access control, relational data integrity, and async database session lifecycles.',
    nodeIds: [
      'project:curasphere-hms',
      'note:async-sqlalchemy-session-lifecycle',
      'note:rbac-relational-integrity-emr-systems',
    ],
    primaryTechnologies: ['fastapi', 'postgresql', 'react', 'typescript', 'python'],
  },
];

// 3. Topic Normalization Map
export const TOPIC_SYNONYMS: Record<string, string> = {
  'ml': 'Machine Learning',
  'machine-learning': 'Machine Learning',
  'machine learning': 'Machine Learning',
  'dl': 'Deep Learning',
  'deep-learning': 'Deep Learning',
  'deep learning': 'Deep Learning',
  'quant': 'Quantitative Finance',
  'quantitative finance': 'Quantitative Finance',
  'quantitative-finance': 'Quantitative Finance',
  'hft': 'High-Frequency Trading',
  'agents': 'Agentic Systems',
  'agentic-ai': 'Agentic Systems',
  'agentic systems': 'Agentic Systems',
  'multi-agent': 'Agentic Systems',
  'time-series': 'Time Series Analysis',
  'time series': 'Time Series Analysis',
  'nlp': 'Natural Language Processing',
};

export function normalizeTopic(topic: string): string {
  if (!topic) return '';
  const lower = topic.toLowerCase().trim();
  return TOPIC_SYNONYMS[lower] || topic.trim();
}

// 4. Deterministic Knowledge Context Resolver
export function resolveKnowledgeContext(nodeIdOrSlug: string, typeHint?: KnowledgeNodeType): KnowledgeContext | undefined {
  let node: KnowledgeNode | undefined;

  if (nodeIdOrSlug.includes(':')) {
    node = getNodeById(knowledgeGraph, nodeIdOrSlug);
  } else if (typeHint) {
    node = getNodeBySlug(knowledgeGraph, typeHint, nodeIdOrSlug);
  } else {
    node = knowledgeGraph.nodes.find((n) => n.slug === nodeIdOrSlug);
  }


  if (!node) return undefined;

  const connectedNodes = getConnectedNodes(knowledgeGraph, node.id);
  const directEdges = getDirectEdges(knowledgeGraph, node.id);

  const relatedProjects: KnowledgeNode[] = [];
  const relatedResearch: KnowledgeNode[] = [];
  const relatedNotes: KnowledgeNode[] = [];
  const relatedLab: KnowledgeNode[] = [];
  const relatedTechnologies: KnowledgeNode[] = [];

  for (const item of connectedNodes) {
    if (item.type === 'project') relatedProjects.push(item);
    else if (item.type === 'research') relatedResearch.push(item);
    else if (item.type === 'note') relatedNotes.push(item);
    else if (item.type === 'lab') relatedLab.push(item);
    else if (item.type === 'technology') relatedTechnologies.push(item);
  }

  // Find relevant pathways containing this node
  const pathways = curatedKnowledgePaths.filter((path) =>
    path.steps.some((step) => step.nodeId === node!.id)
  );

  // Construct deterministic Next Exploration recommendations (Prioritized: Explicit edges first, then pathways)
  const nextExploration: ContextualNextItem[] = [];
  const seenIds = new Set<string>([node.id]);

  for (const edge of directEdges) {
    const targetId = edge.source === node.id ? edge.target : edge.source;
    if (seenIds.has(targetId)) continue;
    seenIds.add(targetId);

    const targetNode = getNodeById(knowledgeGraph, targetId);
    if (targetNode && targetNode.type !== 'technology') {
      nextExploration.push({
        id: targetNode.id,
        type: targetNode.type,
        title: targetNode.title,
        href: targetNode.href,
        summary: targetNode.summary || '',
        connectionReason: edge.label || 'Directly connected in knowledge graph',
        connectionPriority: 'explicit',
      });
    }
  }

  // Add next step in pathway if applicable
  for (const path of pathways) {
    const stepIdx = path.steps.findIndex((s) => s.nodeId === node!.id);
    if (stepIdx >= 0 && stepIdx < path.steps.length - 1) {
      const nextStep = path.steps[stepIdx + 1];
      if (!seenIds.has(nextStep.nodeId)) {
        seenIds.add(nextStep.nodeId);
        const nextNode = getNodeById(knowledgeGraph, nextStep.nodeId);
        if (nextNode) {
          nextExploration.push({
            id: nextNode.id,
            type: nextNode.type,
            title: nextNode.title,
            href: nextNode.href,
            summary: nextNode.summary || '',
            connectionReason: `Next step in pathway: "${path.title}"`,
            connectionPriority: 'derived',
          });
        }
      }
    }
  }

  return {
    currentEntity: node,
    relatedProjects,
    relatedResearch,
    relatedNotes,
    relatedLab,
    relatedTechnologies,
    pathways,
    nextExploration: nextExploration.slice(0, 5),
  };
}

export function getKnowledgePathways(): KnowledgePath[] {
  return curatedKnowledgePaths;
}

export function getKnowledgeClusters(): KnowledgeCluster[] {
  return curatedKnowledgeClusters;
}
