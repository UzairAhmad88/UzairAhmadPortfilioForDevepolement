import type { LabVisualArtifact } from '@/types/labArtifact';

export const labVisualArtifacts: LabVisualArtifact[] = [
  // 1. fractional-diff-cli
  {
    id: 'art-frac-diff-pipeline',
    experimentSlug: 'fractional-diff-cli',
    type: 'PIPELINE',
    title: 'Fixed-Window Binomial Convolution Pipeline',
    subtitle: 'Mathematical stationarization with bounded memory loss',
    description: 'Vectorized execution flow converting non-stationary I(1) asset price series into memory-preserving stationary I(0) feature representations with fixed-window weight truncation.',
    evidenceState: 'actual',
    sourceEvidence: 'Repository: Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii',
    whatThisShows: 'The linear data pipeline from raw OHLCV price ingestion through recursive binomial coefficient calculation (threshold tau=1e-4), vectorized fixed-window NumPy convolution (K=250), statistical ADF stationarity verification, and clean feature store emission.',
    whatToNotice: 'The fixed-window cutoff at K=250 prevents quadratic computational blowup on multi-decade tick series while preserving >92% correlation with the underlying price series.',
    caption: 'Pipeline execution topology for fixed-window fractional differentiation (d=0.45, tau=1e-4, K=250).',
    textAlternative: 'Linear execution pipeline showing Raw OHLCV Price Series feeding into Binomial Weight Generator, which applies threshold truncation tau=1e-4, passing weights into Fixed-Window Convolution, validated by ADF Stationarity Check, emitting Stationarized Feature Series.',
    visual: {
      kind: 'nodes',
      nodes: [
        {
          id: 'raw-series',
          label: 'Raw Price Series',
          subLabel: 'OHLCV close price history',
          role: 'input',
          badge: 'Input',
          details: ['Non-stationary I(1)', 'High memory retention']
        },
        {
          id: 'weight-gen',
          label: 'Binomial Weight Engine',
          subLabel: 'Recursive weight calculation',
          role: 'process',
          badge: 'O(K) Math',
          details: ['Binomial expansion (1-B)^d', 'Truncation threshold tau=1e-4']
        },
        {
          id: 'convolution',
          label: 'Fixed-Window Convolution',
          subLabel: 'Vectorized NumPy dot product',
          role: 'model',
          badge: 'NumPy Vectorized',
          details: ['Window length K=250', 'Zero lookahead bias']
        },
        {
          id: 'adf-test',
          label: 'ADF Stationarity Check',
          subLabel: 'Augmented Dickey-Fuller p < 0.01',
          role: 'guardrail',
          badge: 'Statistical Test',
          details: ['p-value verification (p=0.004)', 'Correlation monitoring (r=0.924)']
        },
        {
          id: 'output-series',
          label: 'Stationarized Output',
          subLabel: 'Memory-preserving feature series',
          role: 'output',
          badge: 'Feature Store',
          details: ['Stationary I(0)', 'Ready for deep neural training']
        }
      ]
    },
    technologies: ['python', 'numpy', 'pandas'],
    relatedProject: 'deep-learning-stock-return-prediction',
    relatedResearch: 'signal-research',
    relatedNote: 'fractional-differentiation-memory-stationarity'
  },
  {
    id: 'art-frac-diff-tradeoff-comparison',
    experimentSlug: 'fractional-diff-cli',
    type: 'COMPARISON',
    title: 'Differencing Order vs. Memory Retention Matrix',
    subtitle: 'Empirical ADF p-value and Pearson correlation trade-off',
    description: 'Empirical evaluation of statistical stationarity against raw price memory retention across fractional differencing orders d from 0.0 to 1.0.',
    evidenceState: 'actual',
    sourceEvidence: 'CLI Output: python -m fractional_diff --eval --asset SPY --tau 1e-4',
    whatThisShows: 'At d=0.45, the transformed series achieves statistical stationarity (p=0.004 < 0.01) while retaining a high correlation (r=0.924) with the raw price level.',
    whatToNotice: 'Standard integer differencing (d=1.0) achieves stationarity but destroys 96% of price level correlation (r=0.04), discarding structural predictive memory.',
    caption: 'ADF test statistic p-value and Pearson correlation (r) against raw prices across differencing orders d.',
    textAlternative: 'Comparison matrix showing: Raw Series (d=0.0): Non-stationary (p=0.892), Correlation r=1.000. Fractional (d=0.45): Stationary (p=0.004), Correlation r=0.924 (Optimal). Integer Differencing (d=1.0): Stationary (p=0.0001), Correlation r=0.040 (Severe memory loss).',
    visual: {
      kind: 'comparison',
      comparisonTracks: [
        {
          name: 'Raw Price Series (d=0.00)',
          metricA: 'ADF p-value: 0.892 (Non-stationary)',
          metricB: 'Price Correlation r: 1.000',
          delta: 'Zero stationarity',
          verdict: 'drawback'
        },
        {
          name: 'Fractional Differenced (d=0.45)',
          metricA: 'ADF p-value: 0.004 (Stationary)',
          metricB: 'Price Correlation r: 0.924',
          delta: 'Optimal trade-off',
          verdict: 'advantage'
        },
        {
          name: 'Standard First-Difference (d=1.00)',
          metricA: 'ADF p-value: <0.0001 (Stationary)',
          metricB: 'Price Correlation r: 0.040',
          delta: 'Severe memory loss (-96%)',
          verdict: 'drawback'
        }
      ]
    },
    technologies: ['python', 'numpy'],
    relatedProject: 'deep-learning-stock-return-prediction',
    relatedNote: 'fractional-differentiation-memory-stationarity'
  },

  // 2. streaming-orderbook-sse
  {
    id: 'art-sse-stream-topology',
    experimentSlug: 'streaming-orderbook-sse',
    type: 'ARCHITECTURE',
    title: 'Unidirectional SSE Market Feed Topology',
    subtitle: 'Asynchronous event-stream delivery over HTTP/2',
    description: 'System topology routing synthetic high-frequency L2 order book depth updates from an async generator into per-client subscriber queues over HTTP/2 Server-Sent Events.',
    evidenceState: 'prototype',
    sourceEvidence: 'Repository: streaming-orderbook-sse prototype harness',
    whatThisShows: 'The streaming pathway from market depth state updates to async Python subscriber queues, chunked text/event-stream serialization, and browser EventSource consumers.',
    whatToNotice: 'The explicit client disconnect check via request.is_disconnected() in the generator loop prevents dangling background coroutines and Python memory leaks.',
    caption: 'Asynchronous Server-Sent Events broadcast architecture with per-subscriber queue isolation.',
    textAlternative: 'Architecture diagram showing Market Depth Engine passing 10Hz L2 orderbook deltas to Async Queue Manager, broadcasting via FastAPI SSE Generator, transmitted through HTTP/2 Persistent Stream to Native Browser EventSource and In-Memory L2 Orderbook State.',
    visual: {
      kind: 'nodes',
      nodes: [
        {
          id: 'depth-engine',
          label: 'Market Depth Engine',
          subLabel: 'Synthetic 20-level L2 generator',
          role: 'input',
          badge: '10Hz Producer',
          details: ['100ms tick interval', 'Delta & snapshot modes']
        },
        {
          id: 'queue-mgr',
          label: 'Async Queue Manager',
          subLabel: 'Per-client subscriber queues',
          role: 'process',
          badge: 'asyncio.Queue',
          details: ['Ring-buffer capping', 'Slow-consumer drop policy']
        },
        {
          id: 'sse-gen',
          label: 'FastAPI SSE Generator',
          subLabel: 'StreamingResponse coroutine',
          role: 'model',
          badge: 'HTTP/2 SSE',
          details: ['is_disconnected() polling', 'text/event-stream format']
        },
        {
          id: 'browser-client',
          label: 'Native EventSource',
          subLabel: 'Browser-side streaming client',
          role: 'output',
          badge: 'Zero-JS Reconnect',
          details: ['Automatic retry backoff', 'In-memory state sync']
        }
      ]
    },
    technologies: ['python', 'fastapi', 'typescript'],
    relatedProject: 'deep-learning-stock-return-prediction',
    relatedNote: 'async-sqlalchemy-session-lifecycle'
  },
  {
    id: 'art-sse-telemetry-bench',
    experimentSlug: 'streaming-orderbook-sse',
    type: 'TECHNICAL_SCREENSHOT',
    title: 'SSE vs. WebSocket Connection Telemetry',
    subtitle: 'Memory footprint and reconnect overhead comparison',
    description: 'Empirical telemetry comparison measuring per-connection memory consumption and reconnection resilience between HTTP/2 SSE and stateful WebSockets.',
    evidenceState: 'actual',
    sourceEvidence: 'Telemetry Harness: Local Node/Python benchmark suite at 100 concurrent connections',
    whatThisShows: 'SSE reduces per-client memory footprint to under 12KB while providing native browser reconnection without custom client heartbeat packages.',
    whatToNotice: 'For unidirectional telemetry, SSE eliminates bidirectional framing overhead and socket ping-pong connection degradation.',
    caption: 'Runtime telemetry metrics comparing Server-Sent Events and WebSockets under sustained 10Hz depth broadcasts.',
    textAlternative: 'Comparison matrix showing: Memory per Connection: SSE = 12KB vs WebSocket = 48KB (75% reduction). Reconnection Protocol: SSE = Native EventSource retry vs WebSocket = Custom JS heartbeat/reconnect loop. Dispatch Latency: SSE = 14ms vs WebSocket = 12ms (comparable on LAN).',
    visual: {
      kind: 'comparison',
      comparisonTracks: [
        {
          name: 'Per-Connection Memory Overhead',
          metricA: 'SSE: 12 KB / client',
          metricB: 'WebSocket: 48 KB / client',
          delta: '75% memory reduction',
          verdict: 'advantage'
        },
        {
          name: 'Reconnection Resilience',
          metricA: 'SSE: Native browser EventSource retry',
          metricB: 'WebSocket: Requires bespoke retry/ping loop',
          delta: 'Zero client retry code',
          verdict: 'advantage'
        },
        {
          name: 'Dispatch Latency (10Hz)',
          metricA: 'SSE: 14.2 ms avg',
          metricB: 'WebSocket: 12.1 ms avg',
          delta: 'Negligible 2.1ms delta',
          verdict: 'neutral'
        }
      ]
    },
    technologies: ['python', 'fastapi', 'typescript'],
    relatedProject: 'deep-learning-stock-return-prediction'
  },

  // 3. gmm-regime-stability-probe
  {
    id: 'art-gmm-variance-flow',
    experimentSlug: 'gmm-regime-stability-probe',
    type: 'ALGORITHM',
    title: 'Variance-Ordered GMM Invariant Mapping Algorithm',
    subtitle: 'Deterministic state-anchoring across rolling lookback windows',
    description: 'Post-fit sorting workflow eliminating unsupervised label permutation by ordering Gaussian Mixture Model components by covariance matrix trace Tr(Sigma_k).',
    evidenceState: 'actual',
    sourceEvidence: 'Repository: Market-Regime-Engine-ByUzaii',
    whatThisShows: 'How unanchored EM cluster assignments are canonically re-indexed into deterministic state definitions (State 0: Low Volatility Bull, State 1: Transition, State 2: High Volatility Crisis).',
    whatToNotice: 'Without deterministic variance ordering, rolling re-fits frequently invert State 0 and State 2, which would trigger disastrous trading signal flips.',
    caption: 'Algorithmic flow for deterministic variance sorting on 3-state Gaussian Mixture Models.',
    textAlternative: 'Algorithm flow showing Rolling Returns & Volatility Features feeding into Unsupervised EM GMM Fitting (K=3), processed by Covariance Determinant Sorter det(Sigma_k), mapped through Canonical Index Relabeler, outputting Anchored Volatility Regime Signals.',
    visual: {
      kind: 'nodes',
      nodes: [
        {
          id: 'rolling-input',
          label: 'Rolling Return/Vol Data',
          subLabel: '252-day historical window',
          role: 'input',
          badge: 'Input Features',
          details: ['Daily returns', 'Realized volatility']
        },
        {
          id: 'em-fit',
          label: 'Expectation-Maximization',
          subLabel: 'Scikit-Learn GaussianMixture',
          role: 'process',
          badge: 'EM Algorithm',
          details: ['K=3 clusters', 'Full covariance matrix']
        },
        {
          id: 'var-sort',
          label: 'Covariance Sorting Engine',
          subLabel: 'Calculates det(Sigma_k)',
          role: 'guardrail',
          badge: 'Deterministic Sorter',
          details: ['Ascending variance sort', 'Index permutation lock']
        },
        {
          id: 'anchored-regime',
          label: 'Anchored Regime Filter',
          subLabel: 'Consistent state output',
          role: 'output',
          badge: 'Signal Store',
          details: ['State 0: Bull (Low-Vol)', 'State 2: Crisis (High-Vol)']
        }
      ]
    },
    technologies: ['python', 'scikit-learn', 'numpy', 'pandas'],
    relatedProject: 'market-regime-engine',
    relatedResearch: 'market-regimes',
    relatedNote: 'gmm-state-flipping-variance-ordering'
  },
  {
    id: 'art-gmm-transition-matrix',
    experimentSlug: 'gmm-regime-stability-probe',
    type: 'CHART',
    title: '3-State Regime Persistence & Transition Matrix',
    subtitle: 'Empirical transition probabilities and state half-lives',
    description: 'Empirical transition probability matrix measured across S&P 500 volatility regimes (2018–2024) under 252-day rolling lookback windows.',
    evidenceState: 'actual',
    sourceEvidence: 'Empirical calculation on SPY/VIX feature dataset (2018-2024)',
    whatThisShows: 'Low-volatility bull regimes demonstrate high persistence with a 42-day average duration (P_00 = 0.976), while high-volatility crisis regimes average 14 days (P_22 = 0.928).',
    whatToNotice: 'Lookback windows N >= 252 trading days are required to prevent state whipsaws during transient market noise.',
    caption: 'Empirical state transition probabilities and average regime durations (N=252 days).',
    textAlternative: 'Transition matrix showing: State 0 (Bull): P_00 = 0.976, Duration = 42 days. State 1 (Transition): P_11 = 0.885, Duration = 9 days. State 2 (Crisis): P_22 = 0.928, Duration = 14 days.',
    visual: {
      kind: 'comparison',
      comparisonTracks: [
        {
          name: 'State 0: Low-Volatility Bull Regime',
          metricA: 'Self-Transition Prob P_00: 0.976',
          metricB: 'Average Duration: 42.4 trading days',
          delta: 'High persistence stability',
          verdict: 'advantage'
        },
        {
          name: 'State 1: Transitional Regime',
          metricA: 'Self-Transition Prob P_11: 0.885',
          metricB: 'Average Duration: 8.7 trading days',
          delta: 'Rapid state evolution',
          verdict: 'neutral'
        },
        {
          name: 'State 2: High-Volatility Crisis Regime',
          metricA: 'Self-Transition Prob P_22: 0.928',
          metricB: 'Average Duration: 14.1 trading days',
          delta: 'Mean-reverting clustering',
          verdict: 'advantage'
        }
      ]
    },
    technologies: ['python', 'scikit-learn', 'numpy'],
    relatedProject: 'market-regime-engine',
    relatedResearch: 'market-regimes'
  },

  // 4. multi-agent-pydantic-state-machine
  {
    id: 'art-agent-state-graph',
    experimentSlug: 'multi-agent-pydantic-state-machine',
    type: 'STATE_GRAPH',
    title: 'Deterministic Multi-Agent State Graph Topology',
    subtitle: 'Type-guarded directed graph bounding stochastic LLM agents',
    description: 'Directed graph topology incorporating Pydantic validation interceptors between autonomous agent nodes to eliminate hallucination recursion and tool execution loops.',
    evidenceState: 'actual',
    sourceEvidence: 'Repository: Autonomous Multi-Agent Intelligence System (FYP)',
    whatThisShows: 'The state transition flow between Query Planner, Search Extractor, Evidence Synthesizer, and Pydantic Verification Guardrail with localized fallback loops and terminal synthesis.',
    whatToNotice: 'The Pydantic interceptor enforces type contracts at every node edge; invalid JSON payloads are rejected back to the originating agent with structured error hints, bounded by a 3-retry cap.',
    caption: 'LangGraph directed state machine with Pydantic validation boundaries and cycle budget caps.',
    textAlternative: 'State graph showing Query Planner passing state to Search Extractor, routing to Evidence Synthesizer, intercepted by Pydantic Verification Guardrail, transitioning to Validated Synthesis output or localized retry fallback loop.',
    visual: {
      kind: 'nodes',
      nodes: [
        {
          id: 'planner',
          label: 'Query Planner Node',
          subLabel: 'Decomposes research goal',
          role: 'input',
          badge: 'Node 01',
          details: ['Plan schema validation', 'Sub-query decomposition']
        },
        {
          id: 'extractor',
          label: 'Search Extractor Node',
          subLabel: 'Executes academic queries',
          role: 'process',
          badge: 'Node 02',
          details: ['Rate-limited I/O', 'Raw payload sanitization']
        },
        {
          id: 'synthesizer',
          label: 'Evidence Synthesizer',
          subLabel: 'Cross-correlates citations',
          role: 'model',
          badge: 'Node 03',
          details: ['Structured drafting', 'Claim verification']
        },
        {
          id: 'guardrail',
          label: 'Pydantic Guardrail',
          subLabel: 'Schema & constraint validator',
          role: 'guardrail',
          badge: 'Interceptor',
          details: ['Type enforcement', 'Max 3 retry cycle cap']
        },
        {
          id: 'output',
          label: 'Validated Synthesis',
          subLabel: 'Structured research output',
          role: 'output',
          badge: 'Terminal State',
          details: ['Clean JSON export', 'Zero hallucinated schema fields']
        }
      ]
    },
    technologies: ['python', 'langgraph', 'pydantic'],
    relatedProject: 'multi-agent-prospect-intelligence',
    relatedResearch: 'agentic-systems',
    relatedNote: 'deterministic-state-graph-pydantic-guardrails'
  },
  {
    id: 'art-agent-guardrail-recovery',
    experimentSlug: 'multi-agent-pydantic-state-machine',
    type: 'SYSTEM_FLOW',
    title: 'Interceptor Error Recovery & Fallback Sub-Graph',
    subtitle: 'Resilience against malformed tool arguments and hallucination loops',
    description: 'Execution benchmark demonstrating how schema interceptors handle injected malformed tool responses and prevent infinite recursion in agent critique loops.',
    evidenceState: 'actual',
    sourceEvidence: 'Pytest Suite: test_state_graph_resilience.py (100 synthetic injection passes)',
    whatThisShows: '100% of injected schema violations were caught at the Pydantic boundary, triggering localized sub-graph retries rather than crashing the pipeline or entering runaway token loops.',
    whatToNotice: 'The deterministic cycle budget cap guarantees total execution termination within predictable token budgets.',
    caption: 'Benchmark results comparing unconstrained agent prompt chains against Pydantic-guarded state graphs.',
    textAlternative: 'Comparison matrix showing: Schema Compliance: Pydantic State Graph = 100% vs Free-Form Loop = 72% (28% failure rate). Infinite Loop Risk: Pydantic State Graph = 0% (bounded by cap) vs Free-Form Loop = 14% recursion risk. Average Retry Count: Pydantic State Graph = 1.2 retries.',
    visual: {
      kind: 'comparison',
      comparisonTracks: [
        {
          name: 'Schema Compliance Rate',
          metricA: 'Pydantic State Graph: 100% compliant',
          metricB: 'Free-form Prompt Chaining: 72% compliant',
          delta: '+28% reliability improvement',
          verdict: 'advantage'
        },
        {
          name: 'Infinite Recursion Risk',
          metricA: 'Pydantic State Graph: 0% (capped budget)',
          metricB: 'Free-form Loop: 14% oscillation rate',
          delta: 'Zero infinite loops',
          verdict: 'advantage'
        },
        {
          name: 'Execution Latency Overhead',
          metricA: 'Pydantic State Graph: +18% (schema parsing)',
          metricB: 'Free-form Loop: Baseline',
          delta: 'Modest 18% schema overhead',
          verdict: 'neutral'
        }
      ]
    },
    technologies: ['python', 'langgraph', 'pydantic'],
    relatedProject: 'multi-agent-prospect-intelligence',
    relatedResearch: 'agentic-systems'
  },

  // 5. css-subgrid-editorial-alignment
  {
    id: 'art-subgrid-track-layout',
    experimentSlug: 'css-subgrid-editorial-alignment',
    type: 'UI_SCREENSHOT',
    title: 'CSS Subgrid Multi-Row Track Alignment Model',
    subtitle: 'Zero-JS layout architecture for dense editorial metadata cards',
    description: 'Grid layout model synchronizing 4 independent vertical tracks (Badge/Date, Title, Summary, Tags & CTA) across asymmetric card columns using pure CSS Subgrid.',
    evidenceState: 'actual',
    sourceEvidence: 'Astro Component Layout System: LabItemCard & ProjectCard',
    whatThisShows: 'How independently nested card elements inherit the parent grid row tracks via grid-template-rows: subgrid, maintaining perfect horizontal alignment across varying text lengths without JavaScript.',
    whatToNotice: 'Removing JavaScript ResizeObserver loops eliminated 3.4KB of client-side scripts and achieved exactly 0.00 Cumulative Layout Shift (CLS).',
    caption: 'Four-row CSS Subgrid track contract equalizing asymmetric cards across multi-column viewports.',
    textAlternative: 'Layout model showing Parent Grid Container defining 4 row tracks (Track 1: Badge/Date, Track 2: Title Headline, Track 3: Body Summary, Track 4: Tech Stack & CTA Link), inherited by all child cards via grid-template-rows: subgrid.',
    visual: {
      kind: 'nodes',
      nodes: [
        {
          id: 'parent-grid',
          label: 'Parent Grid Container',
          subLabel: 'grid-template-columns: repeat(auto-fit, ...)',
          role: 'input',
          badge: 'Container',
          details: ['Defines master row tracks', 'Gap: var(--space-6)']
        },
        {
          id: 'row-1',
          label: 'Track 1: Header / Badges',
          subLabel: 'Type, status, and evidence pills',
          role: 'process',
          badge: 'Row Track 1',
          details: ['Fixed auto height', 'Perfect horizontal baseline']
        },
        {
          id: 'row-2',
          label: 'Track 2: Title Headline',
          subLabel: 'Multi-line clamped headline',
          role: 'model',
          badge: 'Row Track 2',
          details: ['Dynamic max-height', 'Equalized column bounds']
        },
        {
          id: 'row-3',
          label: 'Track 3: Body Summary',
          subLabel: 'Technical description text',
          role: 'guardrail',
          badge: 'Row Track 3',
          details: ['Flexible track expansion', 'Natural reading measure']
        },
        {
          id: 'row-4',
          label: 'Track 4: Tags & Actions',
          subLabel: 'Technology pills & inspect CTA',
          role: 'output',
          badge: 'Row Track 4',
          details: ['Bottom-anchored CTA', 'Zero JavaScript alignment']
        }
      ]
    },
    technologies: ['html5-css3', 'astro', 'tailwindcss'],
    relatedNote: 'zero-layout-shift-ssg-design-tokens'
  },
  {
    id: 'art-subgrid-performance-comparison',
    experimentSlug: 'css-subgrid-editorial-alignment',
    type: 'COMPARISON',
    title: 'JavaScript ResizeObserver vs. Pure CSS Subgrid',
    subtitle: 'Layout shift and runtime CPU overhead comparison',
    description: 'Empirical browser rendering benchmarks comparing legacy JavaScript height-equalization scripts against native CSS Subgrid.',
    evidenceState: 'actual',
    sourceEvidence: 'Lighthouse & Chrome DevTools Performance Trace (12 asymmetric card grid)',
    whatThisShows: 'CSS Subgrid eliminates 100% of client-side layout calculation scripts, dropping Cumulative Layout Shift to 0.000 and total blocking time to 0ms.',
    whatToNotice: 'Subgrid keeps semantic HTML <article> tags completely clean without requiring arbitrary wrapper divs.',
    caption: 'Performance and layout metrics comparing JS ResizeObserver against native CSS Subgrid.',
    textAlternative: 'Comparison matrix showing: JavaScript Bundle Size: Subgrid = 0 KB vs ResizeObserver = 3.4 KB. Cumulative Layout Shift: Subgrid = 0.000 vs ResizeObserver = 0.042 (during resize). Client CPU Runtime: Subgrid = 0 ms vs ResizeObserver = 18 ms per resize frame.',
    visual: {
      kind: 'comparison',
      comparisonTracks: [
        {
          name: 'Client JavaScript Payload',
          metricA: 'CSS Subgrid: 0 KB (Native CSS)',
          metricB: 'ResizeObserver: 3.4 KB script payload',
          delta: '100% script elimination',
          verdict: 'advantage'
        },
        {
          name: 'Cumulative Layout Shift (CLS)',
          metricA: 'CSS Subgrid: 0.000 (Zero shift)',
          metricB: 'ResizeObserver: 0.042 (Reflow jump)',
          delta: 'Zero layout shift',
          verdict: 'advantage'
        },
        {
          name: 'Resize Calculation CPU Time',
          metricA: 'CSS Subgrid: 0 ms (GPU compositor)',
          metricB: 'ResizeObserver: 18.4 ms per resize event',
          delta: 'Zero main-thread blocking',
          verdict: 'advantage'
        }
      ]
    },
    technologies: ['html5-css3', 'astro', 'tailwindcss'],
    relatedNote: 'zero-layout-shift-ssg-design-tokens'
  },

  // 6. stochastic-volatility-heston-calibration
  {
    id: 'art-heston-fft-pipeline',
    experimentSlug: 'stochastic-volatility-heston-calibration',
    type: 'PIPELINE',
    title: 'Carr-Madan FFT Characteristic Inversion Pipeline',
    subtitle: 'Semi-analytical calibration of Heston stochastic volatility',
    description: 'Mathematical pipeline inverting the Heston characteristic function phi(u) via Fast Fourier Transform to calibrate 5 volatility parameters (kappa, theta, sigma, rho, v0) to market option smiles.',
    evidenceState: 'concept',
    sourceEvidence: 'Mathematical Formulation: Albrecher Rotation & Carr-Madan Numerical Inversion',
    whatThisShows: 'The mathematical pipeline transforming market implied volatility surfaces through Albrecher characteristic function evaluation, Carr-Madan FFT pricing, and regularized non-linear least squares parameter estimation.',
    whatToNotice: 'FFT evaluation over 128 strikes executes in ~8ms, but global parameter calibration requires bounded regularization to avoid violating the Feller condition 2*kappa*theta > sigma^2.',
    caption: 'Semi-analytical Carr-Madan characteristic function inversion and calibration workflow.',
    textAlternative: 'Pipeline diagram showing Implied Volatility Surface feeding into Albrecher Characteristic Function phi(u), processed by Carr-Madan FFT Pricing Engine (alpha=1.5), passing to Residual Loss Function, optimized by Regularized Non-Linear Optimizer, emitting the Calibrated Heston Parameter Vector.',
    visual: {
      kind: 'nodes',
      nodes: [
        {
          id: 'market-surface',
          label: 'Market Volatility Surface',
          subLabel: 'Strike & maturity quotes',
          role: 'input',
          badge: 'Input Data',
          details: ['European call option smiles', '128 strike intervals']
        },
        {
          id: 'char-func',
          label: 'Albrecher Characteristic Func',
          subLabel: 'Stable rotation phi(u)',
          role: 'process',
          badge: 'Complex Math',
          details: ['No branch cut discontinuities', 'Vectorized NumPy evaluation']
        },
        {
          id: 'fft-engine',
          label: 'Carr-Madan FFT Engine',
          subLabel: 'Fast numerical integration',
          role: 'model',
          badge: 'FFT 8ms',
          details: ['Dampening factor alpha=1.5', '128 strike grid']
        },
        {
          id: 'regularizer',
          label: 'Regularized Loss Function',
          subLabel: 'Non-linear least squares',
          role: 'guardrail',
          badge: 'Feller Guard',
          details: ['Feller condition constraint', 'Vol-of-vol regularization']
        },
        {
          id: 'heston-params',
          label: 'Calibrated Heston Params',
          subLabel: '[kappa, theta, sigma, rho, v0]',
          role: 'output',
          badge: 'Calibrated Model',
          details: ['Mean reversion kappa', 'Long-term variance theta']
        }
      ]
    },
    technologies: ['python', 'numpy', 'scikit-learn'],
    relatedResearch: 'signal-research'
  },
  {
    id: 'art-heston-smile-simulation',
    experimentSlug: 'stochastic-volatility-heston-calibration',
    type: 'CHART',
    title: 'Simulated Heston Volatility Smile vs. Strike',
    subtitle: 'Comparison of Black-Scholes flat vol vs. Heston stochastic skew',
    description: 'Simulated comparison demonstrating how Heston stochastic volatility captures negative spot-volatility correlation (rho=-0.70) across strike intervals [80, 120].',
    evidenceState: 'simulation',
    sourceEvidence: 'Simulation Script: test_heston_smile_sim.py (kappa=2.0, theta=0.04, sigma=0.3, rho=-0.7, v0=0.04)',
    whatThisShows: 'Heston model accurately reproduces the asymmetric implied volatility skew observed in equity index options, in contrast to Black-Scholes flat volatility assumptions.',
    whatToNotice: 'This artifact is explicitly classified as SIMULATION because parameters are evaluated against synthetic test quotes rather than live market feeds.',
    caption: 'Simulated implied volatility smile showing negative skew across strike range (K=80 to K=120).',
    textAlternative: 'Comparison matrix showing: In-the-Money Strike (K=85): Heston IV = 24.2% vs Black-Scholes = 20.0% (+4.2% skew). At-the-Money Strike (K=100): Heston IV = 20.0% vs Black-Scholes = 20.0% (calibrated baseline). Out-of-the-Money Strike (K=115): Heston IV = 17.8% vs Black-Scholes = 20.0% (-2.2% wing decay).',
    visual: {
      kind: 'comparison',
      comparisonTracks: [
        {
          name: 'In-The-Money Put / OTM Call (K=85)',
          metricA: 'Heston Implied Vol: 24.2%',
          metricB: 'Black-Scholes Assumption: 20.0%',
          delta: '+4.2% negative skew capture',
          verdict: 'advantage'
        },
        {
          name: 'At-The-Money Strike (K=100)',
          metricA: 'Heston Implied Vol: 20.0%',
          metricB: 'Black-Scholes Assumption: 20.0%',
          delta: 'Calibrated ATM baseline',
          verdict: 'neutral'
        },
        {
          name: 'Out-Of-The-Money Call (K=115)',
          metricA: 'Heston Implied Vol: 17.8%',
          metricB: 'Black-Scholes Assumption: 20.0%',
          delta: '-2.2% volatility decay',
          verdict: 'advantage'
        }
      ]
    },
    technologies: ['python', 'numpy'],
    relatedResearch: 'signal-research'
  }
];

export function getAllLabVisualArtifacts(): LabVisualArtifact[] {
  return labVisualArtifacts;
}

export function getLabVisualArtifactsByExperiment(experimentSlug: string): LabVisualArtifact[] {
  return labVisualArtifacts.filter(art => art.experimentSlug === experimentSlug);
}

export function getLabVisualArtifactById(id: string): LabVisualArtifact | undefined {
  return labVisualArtifacts.find(art => art.id === id);
}
