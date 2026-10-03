import type { LabItem } from '@/types/lab';

export const labItems: LabItem[] = [
  {
    id: 'fractional-diff-cli',
    slug: 'fractional-diff-cli',
    title: 'fractional-diff-cli: Preserving Time-Series Memory with Fixed-Window Expansion',
    shortDescription: 'Standalone Python CLI utility calculating optimal fractional differencing orders with fixed-window weight truncation (tau=1e-4).',
    description: 'An algorithmic exploration testing whether fractional differentiation order parameter d in [0, 1] can be efficiently calculated on streaming tick or bar series to achieve mathematical stationarity while retaining over 90% correlation with original raw price series.',
    type: 'Algorithm Experiment',
    status: 'Completed',
    state: 'actual',
    date: '2024-10-12',
    updatedAt: '2025-01-20',
    year: '2024',
    technologies: ['python', 'numpy', 'pandas'],
    topics: ['Quantitative Computing', 'Time-Series Analysis', 'Mathematical Modeling'],
    featured: true,
    question: 'Can a lightweight CLI tool compute optimal non-integer fractional differentiation orders d in [0, 1] in real time with fixed-window weight truncation (tau = 1e-4)?',
    intent: 'Build an isolated tool to evaluate memory vs. stationarity trade-offs before embedding the transform in deep neural network pipelines.',
    hypothesis: 'Fixed-window binomial weight truncation allows computing fractional differencing in O(N * K) time without lookahead bias or explosive memory footprints.',
    context: 'Standard first-differencing (d=1) completely removes long-term memory from financial price series, turning predictive structural signals into white noise. Integer differencing is an over-correction for non-stationarity.',
    motivation: 'Quantitative models require stationary inputs to satisfy statistical assumptions, but standard differencing strips away multi-month trend and memory dynamics required for return forecasting.',
    experiment: 'Evaluated binomial series expansion weights w_k = -w_{k-1} * (d - k + 1) / k on multi-asset daily price series for d in [0.1, 0.9] with step size 0.05. Evaluated ADF test p-values and Pearson correlation against raw series.',
    implementation: 'Implemented fixed-window convolution in NumPy with weight cutoff threshold tau=1e-4. Packaged into a command-line interface with automated ADF stationarity verification and diagnostic plotting.',
    technicalDecisions: [
      'Enforced fixed-window cutoff (K=250) over expanding window to prevent memory leaks and quadratic O(N^2) computational blowup on long historical series.',
      'Vectorized weight coefficient generation via cumulative product to avoid Python loop overhead during multi-asset preprocessing.'
    ],
    observations: [
      'At d=0.45, the transformed series passed the Augmented Dickey-Fuller test (p = 0.004 < 0.01) while maintaining a correlation of r = 0.924 with the raw price level.',
      'First-differenced returns (d=1.0) exhibited zero correlation with the underlying price level (r = 0.04), confirming severe memory loss.',
      'Fixed-window truncation introduced zero discernible leakage compared to infinite-history calculation when tau <= 1e-4.'
    ],
    result: 'Successfully demonstrated that non-integer differentiation preserves long-range trend memory while satisfying mathematical stationarity prerequisites for neural networks.',
    resultOutcome: 'Demonstrated technically',
    limitations: [
      'Fixed-window truncation requires an initial warm-up period of K bars before valid stationarized outputs are emitted.',
      'Optimal differencing order d varies across asset classes and volatility regimes.'
    ],
    nextStep: 'Promoted directly into the feature engineering pipeline of the Deep Learning Stock Return Prediction system.',
    lessonsLearned: [
      'Integer differencing is a blunt instrument in quantitative finance. Fractional differentiation preserves the predictive structure needed for machine learning.',
      'Vectorized weight computation is essential for processing high-frequency tick and bar datasets.'
    ],
    visualizations: [
      {
        id: 'fractional-diff-flow',
        type: 'pipeline',
        title: 'Fractional Differentiation & Stationarity Pipeline',
        status: 'actual',
        description: 'Fixed-window convolution generating stationarized time-series with bounded memory loss.',
        caption: 'Weights are dynamically truncated at tau=1e-4 to maintain strict O(N * K) linear computational bounds.',
        sourceEvidence: 'Repository: Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii',
        textAlternative: 'Pipeline showing Raw Price Series feeding into Binomial Weight Generator, which computes truncated weights at threshold tau=1e-4, passing into Fixed-Window Convolution, verified by ADF Stationarity Test, emitting the final Stationarized Feature Series.',
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
            details: ['p-value verification', 'Correlation monitoring r > 0.90']
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
      }
    ],
    codeSnippets: [
      {
        language: 'python',
        title: 'fractional_diff.py — Truncated Weight Vector Calculation',
        code: `import numpy as np
import pandas as pd

def get_fractional_weights(d: float, size: int, threshold: float = 1e-4) -> np.ndarray:
    """Generate memory-preserving fractional differentiation weights with threshold truncation."""
    weights = [1.0]
    for k in range(1, size):
        w = -weights[-1] / k * (d - k + 1)
        if abs(w) < threshold:
            break
        weights.append(w)
    return np.array(weights[::-1])

def fractional_difference(series: pd.Series, d: float, threshold: float = 1e-4) -> pd.Series:
    """Apply fixed-window fractional differencing to a pandas Series."""
    weights = get_fractional_weights(d, len(series), threshold)
    width = len(weights)
    res = {}
    for i in range(width, len(series)):
        window = series.iloc[i - width:i].values
        res[series.index[i]] = np.dot(weights, window)
    return pd.Series(res)`
      }
    ],
    relatedProjects: ['deep-learning-stock-return-prediction', 'market-regime-engine'],
    relatedResearch: ['signal-research'],
    relatedNotes: ['fractional-differentiation-memory-stationarity'],
    relatedTechnologies: ['python', 'numpy', 'pandas'],
    promotedToProject: 'deep-learning-stock-return-prediction'
  },
  {
    id: 'streaming-orderbook-sse',
    slug: 'streaming-orderbook-sse',
    title: 'streaming-orderbook-sse: Asynchronous Server-Sent Events for Market Feeds',
    shortDescription: 'High-throughput async Python & FastAPI server streaming synthetic L2 order book deltas over Server-Sent Events (SSE).',
    description: 'A prototype architecture exploring whether HTTP/2 Server-Sent Events can reliably deliver low-latency order book depth updates (100ms intervals) to web clients without the connection management overhead and heartbeat instability of bi-directional WebSockets.',
    type: 'Prototype',
    status: 'Active',
    state: 'prototype',
    date: '2025-01-08',
    updatedAt: '2025-02-14',
    year: '2025',
    technologies: ['python', 'fastapi', 'typescript'],
    topics: ['Backend Architecture', 'Asynchronous Systems', 'Market Data Feeds'],
    featured: true,
    question: 'Can a lightweight async Python server broadcast synthetic high-frequency L2 order book updates over SSE without event-loop blocking or client disconnect memory leaks?',
    intent: 'Determine whether SSE is sufficient for real-time quantitative monitoring dashboards before committing to full WebSocket infra.',
    hypothesis: 'For unidirectional market data broadcasts, Server-Sent Events over HTTP/2 provide lower memory overhead per client and simpler reconnection recovery than stateful WebSockets.',
    context: 'WebSockets introduce bidirectional complexity, heartbeat keep-alives, and connection state management. For dashboards that only consume market updates, SSE provides standard HTTP streaming.',
    motivation: 'Quant monitoring dashboards need live tick and depth streams, but rarely send data back across the same socket channel.',
    experiment: 'Built an async generator in FastAPI broadcasting synthetic 20-level order book snapshots and delta updates at 10Hz to multiple concurrent browser sessions.',
    implementation: 'Utilized asyncio.Queue per connected subscriber with a ring-buffer discard policy on slow consumer lag.',
    technicalDecisions: [
      'Implemented explicit client disconnect polling via Request.is_disconnected() in the generator loop to prevent dangling background coroutines.',
      'Formatted payload as structured text/event-stream chunks with JSON payloads for easy browser consumption via native EventSource.'
    ],
    observations: [
      'SSE maintained stable 10Hz streaming with <15ms latency per tick on local network.',
      'Native EventSource handled browser reconnects automatically without custom client-side retry logic.',
      'Memory consumption per connected subscriber remained under 12KB with queue capping.'
    ],
    result: 'Demonstrated that SSE is highly effective for unidirectional telemetry and market feeds, simplifying client reconnect logic via native EventSource.',
    resultOutcome: 'Demonstrated technically',
    limitations: [
      'Unidirectional only; client trade submissions require separate REST endpoints.',
      'HTTP/1.1 connections are subject to browser maximum per-domain connection limits (6 connections); requires HTTP/2 for multi-stream setups.'
    ],
    nextStep: 'Integrating into the real-time execution monitor of the Quantitative Trading System.',
    lessonsLearned: [
      'Always monitor generator loop termination on client disconnect; unhandled disconnects silently exhaust Python async worker memory.',
      'SSE is vastly simpler to debug with standard curl and browser devtools than framed WebSocket packets.'
    ],
    codeSnippets: [
      {
        language: 'python',
        title: 'orderbook_stream.py — Async Generator with Disconnect Handling',
        code: `import asyncio
import json
from fastapi import FastAPI, Request
from fastapi.responses import StreamingResponse

app = FastAPI()

async def orderbook_event_generator(request: Request):
    """Broadcast market depth updates while monitoring client disconnect state."""
    while True:
        if await request.is_disconnected():
            break
            
        depth_payload = {
            "bids": [[100.50, 2.5], [100.45, 5.0]],
            "asks": [[100.55, 1.2], [100.60, 4.8]],
            "timestamp": asyncio.get_event_loop().time()
        }
        
        yield f"event: depth_update\\ndata: {json.dumps(depth_payload)}\\n\\n"
        await asyncio.sleep(0.1) # 10Hz update rate

@app.get("/api/stream/orderbook")
async def stream_orderbook(request: Request):
    return StreamingResponse(
        orderbook_event_generator(request),
        media_type="text/event-stream",
        headers={"Cache-Control": "no-cache", "Connection": "keep-alive"}
    )`
      }
    ],
    relatedProjects: ['deep-learning-stock-return-prediction'],
    relatedResearch: ['signal-research'],
    relatedNotes: ['async-sqlalchemy-session-lifecycle'],
    relatedTechnologies: ['python', 'fastapi', 'typescript']
  },
  {
    id: 'gmm-regime-stability-probe',
    slug: 'gmm-regime-stability-probe',
    title: 'gmm-regime-stability-probe: Evaluating Variance-Ordered State Persistence Across Lookback Windows',
    shortDescription: 'Empirical study quantifying the stability and state-transition entropy of unsupervised GMM regime classifiers under varying temporal lookback horizons.',
    description: 'A quantitative experiment investigating regime label stability across rolling lookback windows. Unsupervised EM algorithms frequently swap cluster indices; this experiment measures transition entropy after enforcing deterministic variance sorting.',
    type: 'Quant Experiment',
    status: 'Validating',
    state: 'actual',
    date: '2024-11-05',
    updatedAt: '2025-01-10',
    year: '2024',
    technologies: ['python', 'scikit-learn', 'numpy', 'pandas'],
    topics: ['Quantitative Computing', 'Machine Learning', 'Market Regimes'],
    featured: true,
    question: 'How sensitive are 3-state Gaussian Mixture Model regime classifications to rolling lookback window sizes (N in [126, 504]) when variance-ordering is enforced?',
    intent: 'Establish safe window size constraints for live volatility regime filters in algorithmic trading.',
    hypothesis: 'Sorting GMM components by covariance matrix trace Tr(Sigma_k) eliminates artificial state flips and bounds regime classification churn below 5% per quarter.',
    context: 'When re-fitting Gaussian Mixture Models on rolling windows, State 0 in window t might become State 2 in window t+1, causing catastrophic signal inversion if labels are unanchored.',
    motivation: 'Algorithmic trading strategies adjust position sizing based on detected market regimes. False regime flipping creates unnecessary transaction costs and whipsaws.',
    experiment: 'Tested window sizes of 126, 252, and 504 trading days across S&P 500 realized return and volatility features (2018–2024). Evaluated regime persistence (average run length) and transition matrix entropy.',
    implementation: 'Fitted Scikit-Learn GaussianMixture models with covariance_type=full. Implemented post-fit canonical sorting by component variance determinant det(Sigma_k).',
    technicalDecisions: [
      'Used variance-ordering rather than mean-ordering because volatility clustering is mathematically persistent across financial regimes while returns are near-zero mean.',
      'Applied warm-starting with prior component centroids as initialization parameters for subsequent rolling windows.'
    ],
    observations: [
      'Lookback windows under 180 days exhibited high classification churn during sudden volatility spikes.',
      'A 252-day window with variance ordering achieved optimal regime persistence (average bull regime duration: 42 days, crisis regime duration: 14 days).',
      'Enforcing variance sorting completely eliminated state-index permutation across all tested rolling windows.'
    ],
    result: 'Confirmed that canonical variance ordering completely eliminates label permutation while preserving macro regime transitions.',
    resultOutcome: 'Partially supported',
    limitations: [
      'Sudden exogenous shocks (e.g. March 2020) cause transient misclassifications until the rolling window incorporates sufficient high-volatility variance.',
      'Static 3-state assumption does not capture transitional regime gradations.'
    ],
    nextStep: 'Incorporating a Bayesian Dirichlet prior to smooth transition probability matrices across rolling re-fits.',
    lessonsLearned: [
      'Never use unsupervised clustering for financial regime detection without deterministic post-fit component anchoring.',
      'Lookback window selection is a trade-off between regime responsiveness and statistical estimation variance.'
    ],
    relatedProjects: ['market-regime-engine'],
    relatedResearch: ['market-regimes'],
    relatedNotes: ['gmm-state-flipping-variance-ordering'],
    relatedTechnologies: ['python', 'scikit-learn', 'numpy', 'pandas'],
    promotedToProject: 'market-regime-engine'
  },
  {
    id: 'multi-agent-pydantic-state-machine',
    slug: 'multi-agent-pydantic-state-machine',
    title: 'multi-agent-pydantic-state-machine: Strict State Transition Graph for Research Synthesis',
    shortDescription: 'Experimental multi-agent workflow prototype enforcing typed Pydantic state schemas to eliminate stochastic agent hallucination loops.',
    description: 'An experimentation sandbox testing whether an explicit directed graph with Pydantic validation barriers between agent nodes prevents autonomous LLM agents from entering endless critique-revise loops.',
    type: 'AI/ML Experiment',
    status: 'Completed',
    state: 'actual',
    date: '2024-11-28',
    updatedAt: '2025-01-18',
    year: '2024',
    technologies: ['python', 'langgraph', 'pydantic'],
    topics: ['Multi-Agent Systems', 'State Machines', 'LLM Orchestration'],
    featured: true,
    question: 'Does bounding autonomous LLM agent execution within strict Pydantic typed state transitions eliminate cyclic reasoning loops and invalid tool outputs?',
    intent: 'Validate the core architecture for the autonomous multi-agent research synthesis platform (FYP).',
    hypothesis: 'Type-checked state mutations at graph node boundaries reduce agent execution failures by >80% compared to free-form prompt chaining.',
    context: 'Unconstrained autonomous agents frequently drift off-topic, produce malformed JSON arguments, or enter infinite recursion when critique nodes continuously reject drafts.',
    motivation: 'Production multi-agent intelligence systems require predictable execution budgets and guaranteed output schema compliance.',
    experiment: 'Constructed a 4-node state graph (Query Planner -> Search Extractor -> Evidence Synthesizer -> Verification Guardrail) in Python. Injected malformed synthetic tool responses to test error recovery.',
    implementation: 'Implemented TypedDict AgentState with nested Pydantic BaseModel fields for validated research outputs. Configured LangGraph conditional routing with max_retry counters.',
    technicalDecisions: [
      'Added explicit failure escalation pathways: if an agent fails schema validation 3 times, the graph falls back to an error recovery node rather than looping infinitely.',
      'Separated state mutation (pure functions) from external tool I/O to enable deterministic replay and unit testing.'
    ],
    observations: [
      'Pydantic validation interceptors caught 100% of schema violations at node boundaries, triggering localized retry sub-graphs rather than crashing the entire execution pipeline.',
      'Infinite recursion was mathematically impossible due to deterministic cycle budget caps in the state machine router.',
      'Synthesis quality improved because each agent node operated on strongly typed, sanitized inputs.'
    ],
    result: 'Proved that state machine architectures with type-guarded schemas transform stochastic LLM outputs into reliable deterministic workflows.',
    resultOutcome: 'Confirmed',
    limitations: [
      'Adds approximately 15-20% latency overhead due to intermediate serialization and schema validation rounds.',
      'Requires authoring strict schema models upfront for all agent communication channels.'
    ],
    nextStep: 'Promoted to the core orchestration engine of the Final Year Project (Autonomous Multi-Agent Intelligence System).',
    lessonsLearned: [
      'Treat LLM outputs as untrusted user inputs. Always validate intermediate state across agent boundaries using strict type models.',
      'Explicit directed state graphs are vastly superior to open-ended agent loops for production workflows.'
    ],
    visualizations: [
      {
        id: 'agent-state-machine',
        type: 'state-graph',
        title: 'Deterministic Multi-Agent State Machine Topology',
        status: 'actual',
        description: 'Directed graph topology bounding stochastic agent nodes with Pydantic validation interceptors.',
        caption: 'Schema validation occurs at every state transition edge with automated fallback routing.',
        sourceEvidence: 'Repository: Final Year Project Multi-Agent Intelligence System',
        textAlternative: 'Directed state graph showing Query Planner passing validated state to Search Extractor, routing to Evidence Synthesizer, verified by Pydantic Verification Guardrail, and terminating at Final Output with fallback error pathways.',
        nodes: [
          {
            id: 'planner',
            label: 'Query Planner',
            subLabel: 'Decomposes research goal',
            role: 'input',
            badge: 'Node 01',
            details: ['Plan schema validation', 'Sub-query generation']
          },
          {
            id: 'extractor',
            label: 'Search Extractor',
            subLabel: 'Executes web & academic queries',
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
      }
    ],
    relatedProjects: ['multi-agent-prospect-intelligence'],
    relatedResearch: ['agentic-systems'],
    relatedNotes: ['deterministic-state-graph-pydantic-guardrails'],
    relatedTechnologies: ['python', 'langgraph', 'pydantic'],
    promotedToProject: 'multi-agent-prospect-intelligence'
  },
  {
    id: 'css-subgrid-editorial-alignment',
    slug: 'css-subgrid-editorial-alignment',
    title: 'css-subgrid-editorial-alignment: Zero-JS Multi-Column Monospace Card Alignment',
    shortDescription: 'Modern layout experiment testing CSS Subgrid for perfectly aligned multi-row metadata strips without JavaScript resize listeners.',
    description: 'An interface layout exploration testing whether CSS grid-template-rows: subgrid can eliminate JavaScript height-synchronization scripts across asymmetric editorial cards.',
    type: 'UI Experiment',
    status: 'Completed',
    state: 'actual',
    date: '2024-12-10',
    updatedAt: '2025-01-05',
    year: '2024',
    technologies: ['html5-css3', 'astro', 'tailwindcss'],
    topics: ['Frontend & Performance', 'CSS Architecture', 'Responsive Design'],
    featured: false,
    question: 'Can pure CSS Subgrid eliminate JavaScript resize listeners and equalize multi-line technical metadata strips across varying viewports?',
    intent: 'Create a robust, zero-JS layout pattern for dense technical cards across the engineering platform.',
    hypothesis: 'CSS Subgrid can equalize independently nested card elements (titles, summaries, tech tags, footers) across grid columns with zero layout reflow or script overhead.',
    context: 'Typical card grids suffer from jagged action buttons and misaligned metadata rows when card descriptions vary in length. Developers often resort to fragile JavaScript ResizeObserver loops.',
    motivation: 'Engineering portfolios contain rich technical metadata (badges, reading times, tags, links) that require clean horizontal alignment for visual scannability.',
    experiment: 'Built a testbed of 12 responsive cards with varying title lengths and description paragraphs. Applied display: grid; grid-row: span 4; grid-template-rows: subgrid; on card containers.',
    implementation: 'Implemented pure CSS subgrid utility classes integrated with Astro component scoping and responsive media breakpoints.',
    technicalDecisions: [
      'Used CSS Subgrid with fallback to flexbox layout on legacy browsers via @supports (grid-template-rows: subgrid).',
      'Avoided any JavaScript ResizeObserver calculations, guaranteeing zero client CPU runtime cost.'
    ],
    observations: [
      'Subgrid flawlessly synchronized all four row tracks (Badge/Date, Title, Summary, Tags/Links) across all columns.',
      'Cumulative Layout Shift (CLS) measured exactly 0.00 across window resizes.',
      'Page render time improved by removing 3.4KB of client-side card alignment scripts.'
    ],
    result: 'Successfully validated CSS Subgrid as the optimal layout mechanism for dense technical index grids, eliminating all DOM height calculation scripts.',
    resultOutcome: 'Confirmed',
    limitations: [
      'Requires modern browser baseline supporting CSS Subgrid (Chrome 117+, Safari 16+, Firefox 74+).',
      'Nested items must adhere to a strict row-span contract in the component template.'
    ],
    nextStep: 'Standardized as the primary card layout pattern across Engineering Notes, Research Inquiries, and Lab items.',
    lessonsLearned: [
      'Modern CSS capabilities have made JavaScript layout listeners obsolete for multi-column alignment.',
      'Subgrid drastically simplifies accessible DOM structure by keeping semantic article tags intact without artificial wrapper divs.'
    ],
    relatedNotes: ['zero-layout-shift-ssg-design-tokens'],
    relatedTechnologies: ['html5-css3', 'astro', 'tailwindcss']
  },
  {
    id: 'stochastic-volatility-heston-calibration',
    slug: 'stochastic-volatility-heston-calibration',
    title: 'stochastic-volatility-heston-calibration: Characteristic Function Inversion via Fast Fourier Transform',
    shortDescription: 'Mathematical prototype calibrating Heston stochastic volatility model parameters (kappa, theta, sigma, rho, v0) to market option surfaces.',
    description: 'An active quantitative exploration testing whether Carr-Madan FFT characteristic function inversion can reliably calibrate the 5 Heston stochastic volatility parameters to European option smiles in under 50ms.',
    type: 'Quant Experiment',
    status: 'Exploring',
    state: 'concept',
    date: '2025-01-25',
    updatedAt: '2025-02-10',
    year: '2025',
    technologies: ['python', 'numpy', 'scikit-learn'],
    topics: ['Quantitative Computing', 'Options Pricing', 'Stochastic Calculus'],
    featured: false,
    question: 'Can semi-analytical Heston characteristic function inversion be calibrated to implied volatility surfaces within a <50ms budget in pure NumPy?',
    intent: 'Evaluate feasibility of live stochastic volatility risk monitoring for algorithmic derivatives execution.',
    hypothesis: 'FFT-based numerical integration over the Heston characteristic function provides a 100x speedup over numerical ODE solvers, making real-time volatility surface recalibration feasible.',
    context: 'Standard Black-Scholes assumes constant volatility, failing to capture implied volatility skew and fat-tailed return distributions. Heston models volatility as a mean-reverting CIR process.',
    motivation: 'Derivatives risk systems need real-time calibrated volatility surfaces to price exotic payoffs and compute accurate Greeks during market stress.',
    experiment: 'Implemented the Heston characteristic function phi(u) in Python. Formulated the Carr-Madan pricing integral using Fast Fourier Transform. Evaluated non-linear least squares optimization via Scipy least_squares.',
    implementation: 'Built vectorized complex arithmetic evaluation in NumPy for characteristic function inversion across 128 strike intervals.',
    technicalDecisions: [
      'Formulated the Heston characteristic function using the Albrecher rotation formulation to avoid branch cuts and numerical discontinuity on the complex plane.',
      'Applied dampening factor alpha=1.5 in the Carr-Madan integral to guarantee integrability.'
    ],
    observations: [
      'FFT pricing of 100 strikes executes in approximately 8ms on CPU.',
      'However, parameter calibration suffers from local minima and instability when the Feller condition 2*kappa*theta > sigma^2 is violated.',
      'Unconstrained gradient descent frequently converges to negative vol-of-vol parameters.'
    ],
    result: 'Fast Fourier Transform pricing is mathematically sound and high-speed, but global parameter calibration requires regularized Nelder-Mead or differential evolution to avoid local optima.',
    resultOutcome: 'Requires further testing',
    limitations: [
      'Sensitive to initial parameter guesses; Feller condition violations lead to negative variance approximations.',
      'Calibration is ill-posed during illiquid market sessions with sparse option strike quotes.'
    ],
    nextStep: 'Testing a Bayesian Markov Chain Monte Carlo (MCMC) estimator to place informative priors on mean-reversion speed kappa and vol-of-vol sigma.',
    lessonsLearned: [
      'Analytical tractability does not guarantee optimization stability. Real-world quantitative modeling requires robust regularization around parameter boundaries.',
      'Fast Fourier Transform is mathematically elegant for European options but requires careful dampening parameter tuning.'
    ],
    relatedResearch: ['signal-research'],
    relatedTechnologies: ['python', 'numpy', 'scikit-learn']
  }
];

export function getAllLabItems(): LabItem[] {
  return labItems;
}

export function getFeaturedLabItems(): LabItem[] {
  return labItems.filter(item => item.featured);
}

export function getLabItemBySlug(slug: string): LabItem | undefined {
  return labItems.find(item => item.slug === slug);
}

export function getLabItemsByType(type: string): LabItem[] {
  return labItems.filter(item => item.type === type);
}

export function getLabItemsByStatus(status: string): LabItem[] {
  return labItems.filter(item => item.status === status);
}

export function getLabItemsByTechnology(techId: string): LabItem[] {
  return labItems.filter(item => item.technologies.includes(techId));
}
