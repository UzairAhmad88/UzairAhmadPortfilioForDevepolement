import type { ResearchItem } from '@/types/research';

export const researchItems: ResearchItem[] = [
  {
    id: 'signal-research',
    slug: 'signal-research',
    badge: 'Exploring',
    title: 'Predictive Feature Extraction & Stationarity in Non-Stationary Financial Series',
    summary: 'Investigating mathematical transformations (fractional differentiation, rolling realized volatility moments) that preserve long memory while satisfying stationarity constraints for deep neural network training.',
    domain: 'Quantitative Finance',
    status: 'Exploring',
    publishedAt: '2024-09-15',
    updatedAt: '2025-01-20',
    githubUrl: 'https://github.com/UzairAhmad88/Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii',
    githubRepo: 'UzairAhmad88/Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii',
    question: 'Which statistical transformations preserve meaningful long-range temporal memory while satisfying stationarity constraints for deep neural networks in financial time series?',
    context: 'Standard integer differencing (d=1) completely removes trend and unit roots from financial price series, but destroys virtually all historical memory and autocorrelation structure necessary for multi-horizon predictive models.',
    motivation: 'The investigation began after observing that standard log-returns fed into LSTM models suffered from poor signal-to-noise ratios, while raw price levels violated the stationarity assumption necessary for statistical learning generalization.',
    hypothesis: 'Fractional differentiation (0 < d < 1) combined with rolling volatility moment normalization will yield higher signal-to-noise ratios and improved out-of-sample directional precision compared to raw log returns.',
    approach: 'Empirical backtesting using PyTorch neural networks on historical multi-asset daily and hourly OHLCV time series with expanding walk-forward cross-validation.',
    methodology: [
      'Fractional Differentiation via binomial expansion weights (1-B)^d = sum_{k=0}^inf (-1)^k binom(d, k) B^k.',
      'Augmented Dickey-Fuller (ADF) and Kwiatkowski-Phillips-Schmidt-Shin (KPSS) statistical tests for stationarity verification.',
      'Rolling realized volatility and Garman-Klass volatility moment normalization.',
      'Walk-forward temporal cross-validation with zero lookahead leakage.'
    ],
    methodologyStages: [
      {
        stage: '01 / INGESTION',
        title: 'Multi-Horizon Time-Series Alignment',
        description: 'Synchronizing historical OHLCV data across equity and index feeds, handling corporate actions, split adjustments, and irregular trading calendar intervals.',
        tools: ['Python', 'Pandas', 'NumPy']
      },
      {
        stage: '02 / TRANSFORMATION',
        title: 'Memory Preservation via Fractional Differencing',
        description: 'Applying memory-preserving binomial expansion filtering across orders d in [0.1, 0.9] to discover the minimal differentiation order satisfying ADF/KPSS stationarity.',
        tools: ['Python', 'NumPy', 'SciPy']
      },
      {
        stage: '03 / MODELING',
        title: 'Temporal Sequence Processing',
        description: 'Feeding fractionally differenced feature matrices into stacked LSTM and GRU architectures with sequence length truncation and dropout regularization.',
        tools: ['PyTorch', 'CUDA']
      },
      {
        stage: '04 / VALIDATION',
        title: 'Walk-Forward Temporal Out-of-Sample Testing',
        description: 'Executing expanding-window walk-forward validation with strict temporal purges to eliminate lookahead bias and evaluate directional accuracy.',
        tools: ['Scikit-Learn', 'Matplotlib']
      }
    ],
    mathematicalFormulation: `Fractional Differentiation Expansion:
(1 - B)^d = 1 - d*B + (d*(d-1)/2!)*B^2 - (d*(d-1)*(d-2)/3!)*B^3 + ...

Weight calculation for lag k:
w_0 = 1
w_k = -w_{k-1} * (d - k + 1) / k  for k >= 1

Stationarity Condition:
ADF Test Statistic < Critical Value (p < 0.01) AND KPSS p > 0.05`,
    dataSources: [
      'Multi-asset historical OHLCV market feeds (US Equities, Index Futures).',
      'Calculated statistical volatility matrices (Garman-Klass, Parkinson, Yang-Zhang).',
      'Engineered technical momentum indicators (RSI, MACD, Bollinger Band width).'
    ],
    experiments: [
      'Parameter grid search for optimal fractional order d in range [0.1, 0.9] across asset classes.',
      'Comparative neural training using LSTM and GRU architectures on standard returns vs fractionally differenced series.'
    ],
    experimentsList: [
      {
        id: 'exp-01',
        title: 'Fractional Differencing Order (d) vs Memory Correlation Curve',
        objective: 'Determine the minimum differentiation order d required to reject the unit root null hypothesis (ADF test p < 0.01) while maximizing correlation with the original price series.',
        variables: ['Differentiation order d in [0.05, 0.95]', 'Lookback window truncation threshold (1e-4)'],
        results: [
          'Stationarity achieved at d in [0.35, 0.50] for major equity index series.',
          'Preserved Pearson correlation with raw series exceeded 0.82 at d=0.40, whereas standard returns (d=1.0) dropped correlation to ~0.04.'
        ],
        interpretation: 'Fractional differentiation successfully preserves significant structural price memory while passing formal stationarity hurdles.',
        status: 'Completed'
      },
      {
        id: 'exp-02',
        title: 'Walk-Forward Neural Directional Accuracy on Differenced Series',
        objective: 'Compare out-of-sample directional prediction metrics between baseline log-return inputs and fractionally differenced feature vectors across 5-year rolling windows.',
        variables: ['Input representation (Log Returns vs. d=0.40 Differenced)', 'Model architecture (2-Layer LSTM with 64 hidden units)'],
        results: [
          'Fractionally differenced inputs exhibited reduced gradient instability during PyTorch backpropagation.',
          'Walk-forward directional accuracy showed modest improvement over baseline during sustained trending regimes, with negligible divergence in mean-reverting regimes.'
        ],
        interpretation: 'The benefit of preserved memory is regime-dependent; trending regimes utilize long-range autocorrelations more effectively than sideways consolidation regimes.',
        status: 'Completed'
      }
    ],
    findings: [
      {
        status: 'Confirmed',
        description: 'Empirical ADF tests verify that fractional differencing at d between 0.35 and 0.50 achieves statistical stationarity while preserving memory autocorrelation above 0.80.'
      },
      {
        status: 'Confirmed',
        description: 'Expanding walk-forward cross-validation eliminates artificial in-sample performance inflation caused by naive random k-fold splits.'
      },
      {
        status: 'Active',
        description: 'Investigating dynamic regime-conditioned adjustment of d to adapt automatically as volatility regimes shift.'
      }
    ],
    interpretation: 'Fractional differentiation provides a mathematically sound bridge between non-stationary raw price series and memoryless integer returns. While it improves gradient stability and preserves temporal context, it does not magically eliminate noise in high-frequency regimes.',
    limitations: [
      'Optimal memory parameter d is not static over time; it fluctuates across macroeconomic volatility regimes.',
      'Expanding binomial memory convolutions increase computational overhead during real-time feature streaming.',
      'Does not prevent alpha decay if market microstructure underlying the signal shifts.'
    ],
    openQuestions: [
      'Can an online estimator dynamically adjust differentiation order d in real time based on instantaneous volatility?',
      'How does fractional differencing interact with multi-head self-attention mechanisms compared to recurrent neural architectures?'
    ],
    conclusion: 'Fractional differentiation provides a mathematically principled middle ground between completely non-stationary raw price series and memoryless integer returns for quantitative deep learning models.',
    nextSteps: [
      'Integrate regime-adaptive fractional order selection using dynamic volatility estimates.',
      'Evaluate execution slippage and market impact models on simulated signal orders.'
    ],
    references: [
      {
        citation: 'López de Prado, M. (2018). Advances in Financial Machine Learning. John Wiley & Sons.',
        author: 'Marcos López de Prado',
        year: 2018,
        type: 'book',
        url: 'https://www.wiley.com/en-us/Advances+in+Financial+Machine+Learning-p-9781119482086'
      },
      {
        citation: 'Hosking, J. R. (1981). Fractional differencing. Biometrika, 68(1), 165-176.',
        author: 'J. R. M. Hosking',
        year: 1981,
        type: 'paper',
        url: 'https://doi.org/10.1093/biomet/68.1.165'
      }
    ],
    technologies: ['python', 'pytorch', 'pandas', 'numpy', 'scikit-learn'],
    relatedProjects: ['deep-learning-stock-return-prediction', 'market-regime-engine'],
    relatedResearch: ['market-regimes'],
    relatedNotes: ['fractional-differentiation-memory-stationarity'],
    relatedLab: ['fractional-diff-cli', 'streaming-orderbook-sse', 'stochastic-volatility-heston-calibration'],
    featured: true,
  },
  {
    id: 'market-regimes',
    slug: 'market-regimes',
    badge: 'Experimenting',
    title: 'Unsupervised Market Regime Detection via Latent Volatility Clustering',
    summary: 'Exploring Gaussian Mixture Models (GMM) and Hidden Markov Models (HMM) to detect latent volatility states and provide early warning signals before drawdown cascades.',
    domain: 'Quantitative Finance',
    status: 'Experimenting',
    publishedAt: '2024-11-10',
    updatedAt: '2025-02-01',
    question: 'Can unsupervised probabilistic clustering models dynamically classify financial volatility regimes without manual threshold heuristics?',
    context: 'Quantitative trading models configured for trending low-volatility regimes suffer severe drawdowns when entering turbulent mean-reverting market phases if risk throttles are static.',
    motivation: 'Hardcoded volatility thresholds (e.g. VIX > 25) fail during structural market transitions. We needed a data-driven clustering mechanism that infers latent market states directly from observable multi-moment distributions.',
    hypothesis: 'Gaussian Mixture Models fitted to rolling moments (volatility, skewness, volume kurtosis) can accurately partition market states into distinct behavioral clusters.',
    approach: 'Unsupervised clustering on rolling statistical feature vectors with Bayesian Information Criterion (BIC) for component selection.',
    methodology: [
      'Rolling window computation of realized volatility, normalized ATR, and volume variance.',
      'Gaussian Mixture Model (GMM) probabilistic expectation-maximization fitting.',
      'Hidden Markov Model (HMM) transition probability matrix calculation.',
      'Sorting cluster indices by ascending variance to eliminate state label flipping.'
    ],
    methodologyStages: [
      {
        stage: '01 / FEATURE EXTRACTION',
        title: 'Multi-Moment Volatility Vectors',
        description: 'Calculating rolling realized volatility, Parkinson extreme-value variance, return skewness, and volume kurtosis across multiple lookback windows.',
        tools: ['Python', 'Pandas', 'NumPy']
      },
      {
        stage: '02 / CLUSTERING',
        title: 'Gaussian Mixture Expectation-Maximization',
        description: 'Fitting Gaussian Mixture Models across component counts K in [2, 6] and selecting optimal complexity via Bayesian Information Criterion (BIC).',
        tools: ['Python', 'Scikit-Learn']
      },
      {
        stage: '03 / STABILIZATION',
        title: 'Variance Ordering & Label Disambiguation',
        description: 'Sorting mixture components by ascending covariance trace to ensure state 0 always represents low volatility, state 1 consolidation, and state 2 high volatility.',
        tools: ['NumPy']
      },
      {
        stage: '04 / EVALUATION',
        title: 'State Transition Risk Throttling',
        description: 'Measuring whether probabilistic regime transitions precede drawdown acceleration on out-of-sample market historical test segments.',
        tools: ['Python', 'Matplotlib']
      }
    ],
    mathematicalFormulation: `Gaussian Mixture Probability Density:
p(x) = sum_{k=1}^{K} pi_k * N(x | mu_k, Sigma_k)

where pi_k are mixing coefficients satisfying sum pi_k = 1

Bayesian Information Criterion (BIC):
BIC = k * ln(n) - 2 * ln(L_hat)

Component Ordering Constraint:
Trace(Sigma_0) < Trace(Sigma_1) < ... < Trace(Sigma_{K-1})`,
    dataSources: [
      'Historical daily and intraday equity and index price series.',
      'Market-wide breadth and realized volatility surfaces.'
    ],
    experiments: [
      'Optimal component selection using BIC minimization across equity historical periods.',
      'Transition probability stability evaluation under abrupt macroeconomic market shocks.'
    ],
    experimentsList: [
      {
        id: 'gmm-k-selection',
        title: 'BIC Minimization for Component Count (K)',
        objective: 'Evaluate Bayesian Information Criterion (BIC) curves across K=2 to K=6 to determine the parsimonious number of distinct volatility regimes.',
        variables: ['Component count K in [2, 6]', 'Covariance type: full vs tied vs diagonal'],
        results: [
          'K=3 with full covariance yielded the minimum BIC across 10-year historical index test periods.',
          'K=4 and higher caused overfitting into transient micro-clusters with insufficient sample support.'
        ],
        interpretation: 'A 3-state decomposition (Low-Vol Trending, Normal Consolidation, High-Vol Stress) captures the fundamental dynamics without over-parameterization.',
        status: 'Completed'
      },
      {
        id: 'label-stability',
        title: 'State Flipping Prevention via Variance Sorting',
        objective: 'Test whether deterministic re-indexing by ascending variance prevents random state permutation across rolling retraining windows.',
        variables: ['Retraining frequency (Monthly vs Quarterly)', 'Variance sorting operator'],
        results: [
          'Zero state label inversions observed across 120 consecutive monthly refits.',
          'Continuous state posterior probabilities remained stable and interpretable across the entire backtest window.'
        ],
        interpretation: 'Sorting components by variance provides a deterministic guarantee for downstream risk management systems that depend on stable state definitions.',
        status: 'Completed'
      }
    ],
    findings: [
      {
        status: 'Confirmed',
        description: 'Unsupervised 3-state GMM partitions empirical market data cleanly into Low-Vol Bull, Medium Consolidation, and High-Vol Stress regimes with minimal BIC penalty.'
      },
      {
        status: 'Confirmed',
        description: 'Deterministic variance sorting eliminates state-flipping artifacts during rolling retraining.'
      },
      {
        status: 'Active',
        description: 'Evaluating Hidden Markov Model transition matrices to provide forward-looking early warning probabilities.'
      }
    ],
    interpretation: 'Probabilistic state modeling outperforms static volatility thresholds by outputting continuous posterior probabilities rather than brittle binary flags. This enables gradual risk de-leveraging rather than sudden all-or-nothing liquidations.',
    limitations: [
      'Model parameter refitting requires sufficiently long lookback windows; flash-crash events can lag by 1-2 estimation bars.',
      'Unsupervised clusters reflect statistical distributions of volatility, not macroeconomic causality.'
    ],
    openQuestions: [
      'Can exogenous sentiment signals accelerate regime transition detection during sudden exogenous shocks?',
      'What is the optimal lookback decay rate for weighting recent variance spikes versus long-term baseline volatility?'
    ],
    conclusion: 'Probabilistic state modeling provides continuous state membership probabilities that enable proportional risk throttling before drawdown cascades.',
    nextSteps: [
      'Deploy real-time regime inference pipeline as a microservice.',
      'Integrate cross-asset correlation matrices into the feature vector.'
    ],
    references: [
      {
        citation: 'Hamilton, J. D. (1989). A new approach to the economic analysis of nonstationary time series and the business cycle. Econometrica, 357-384.',
        author: 'James D. Hamilton',
        year: 1989,
        type: 'paper',
        url: 'https://doi.org/10.2307/1912559'
      },
      {
        citation: 'Bishop, C. M. (2006). Pattern Recognition and Machine Learning. Springer.',
        author: 'Christopher M. Bishop',
        year: 2006,
        type: 'book',
        url: 'https://www.microsoft.com/en-us/research/people/cmbishop/prml-book/'
      }
    ],
    technologies: ['python', 'scikit-learn', 'pandas', 'numpy'],
    relatedProjects: ['market-regime-engine', 'deep-learning-stock-return-prediction'],
    relatedResearch: ['signal-research'],
    relatedNotes: ['gmm-state-flipping-variance-ordering'],
    relatedLab: ['gmm-regime-stability-probe', 'fractional-diff-cli'],
    githubUrl: 'https://github.com/UzairAhmad88/Develop-Market-Regime--Engine-byUzaii',
    featured: true,
  },
  {
    id: 'agentic-systems',
    slug: 'agentic-systems',
    badge: 'Building',
    title: 'Deterministic Guardrails & State Graphs for Multi-Agent LLM Workflows',
    summary: 'Architecting bounded execution boundaries and deterministic state graph transitions for autonomous agent workflows in decision support and research automation.',
    domain: 'Multi-Agent Systems',
    status: 'Building',
    publishedAt: '2024-12-05',
    updatedAt: '2025-02-15',
    question: 'How can multi-agent LLM systems be architected with deterministic state machines to ensure zero hallucinations in automated research pipelines?',
    context: 'Free-form prompt chaining in autonomous agents frequently suffers from unbounded loops, non-deterministic branching, and silent data schema corruption.',
    motivation: 'When orchestrating multiple specialized agents for automated entity extraction and market intelligence, stochastic LLM outputs regularly broke downstream databases without strict runtime schemas.',
    hypothesis: 'Strictly bounded state graphs with typed JSON schema guardrails at every inter-agent transition will produce 100% parseable structured intelligence reports.',
    approach: 'Building directed state graph orchestration with specialized worker sub-agents, deterministic JSON Schema validators, and structured output parsing.',
    methodology: [
      'Directed State Graph orchestration with explicit state schemas.',
      'Deterministic JSON Schema validation on all worker agent responses.',
      'Maximum recursion depth and timeout guardrails on sub-agent tool calls.',
      'Human-in-the-loop checkpoint gates for critical scoring decisions.'
    ],
    methodologyStages: [
      {
        stage: '01 / TOPOLOGY DESIGN',
        title: 'State Machine & Node Boundary Definition',
        description: 'Formalizing directed acyclic graph transitions with explicit entry criteria, state schemas, and terminal failure fallback branches.',
        tools: ['Python', 'LangGraph']
      },
      {
        stage: '02 / SCHEMA ENFORCEMENT',
        title: 'Runtime Structured Output Validation',
        description: 'Injecting Pydantic validation barriers at every agent node to guarantee structural integrity before state mutation.',
        tools: ['Pydantic', 'FastAPI']
      },
      {
        stage: '03 / GUARDRAIL EXECUTION',
        title: 'Recursion Depth & Latency Throttling',
        description: 'Implementing hard execution limits, exponential backoff retries, and deterministic circuit breakers on external search tools.',
        tools: ['Python', 'AsyncIO']
      },
      {
        stage: '04 / AUDITABILITY',
        title: 'Structured State Tracing & Checkpointing',
        description: 'Persisting full execution state snapshots at every transition point for deterministic replay and failure root-cause analysis.',
        tools: ['PostgreSQL', 'TypeScript']
      }
    ],
    mathematicalFormulation: `State Transition Function:
S_{t+1} = delta(S_t, A_t, V(O_t))

where V(O_t) is the deterministic schema validation operator verifying output O_t matches schema T.

Circuit Breaker Guardrail:
Exec(Node_i) <= MaxRetries (k=3) AND Latency <= MaxTimeout (15.0s)`,
    dataSources: [
      'Structured company intelligence APIs, verified web search feeds, and CRM lead records.'
    ],
    experiments: [
      'Fault injection testing on malformed LLM responses across multi-step research graphs.',
      'Evaluation of token caching strategies to minimize inference latency during repetitive entity enrichment.'
    ],
    experimentsList: [
      {
        id: 'schema-guardrails-test',
        title: 'Malformed Output Interception & Auto-Healing',
        objective: 'Test whether Pydantic validation interceptors can catch and repair malformed JSON syntax before state graph corruption.',
        variables: ['Prompt temperature in [0.2, 0.9]', 'Validator retry loop depth (1-3)'],
        results: [
          '100% of malformed responses were caught at node boundaries without crashing the parent state machine.',
          'Automated error-reflection prompts healed 94% of syntax errors on the first retry attempt.'
        ],
        interpretation: 'Runtime schema enforcement transforms stochastic agent outputs into deterministic, enterprise-grade data pipelines.',
        status: 'Completed'
      },
      {
        id: 'recursion-limit-bench',
        title: 'Unbounded Loop Prevention Under Ambiguous Input',
        objective: 'Measure circuit breaker termination when agents encounter contradictory or unresolvable research queries.',
        variables: ['Max recursion depth (5 vs 10)', 'Circuit breaker threshold'],
        results: [
          'All ambiguous search queries terminated cleanly at max recursion bounds with structured error payloads.',
          'Zero runaway API cost spikes or infinite search cycles occurred.'
        ],
        interpretation: 'Hard state machine recursion limits are non-negotiable for autonomous agent production safety.',
        status: 'Completed'
      }
    ],
    findings: [
      {
        status: 'Confirmed',
        description: 'Schema guardrails eliminate downstream JSON parsing crashes completely across multi-step research graphs.'
      },
      {
        status: 'Confirmed',
        description: 'Circuit breakers and recursion limits prevent infinite execution loops when search data is unavailable.'
      },
      {
        status: 'Active',
        description: 'Benchmarking latency reduction using semantic token caching across repeated research queries.'
      }
    ],
    interpretation: 'Enterprise agentic systems require explicit state machines rather than unstructured prompt chains to achieve production reliability. Guardrails must be deterministic software constraints, not merely system prompt suggestions.',
    limitations: [
      'Upstream LLM API latency introduces inherent variance in total execution pipeline duration.',
      'Strict schema validation can reject novel, valid insights if the schema definition is overly rigid.'
    ],
    openQuestions: [
      'How can state graphs dynamically adapt their topology when encountering unexpected sub-task complexity without compromising determinism?',
      'What is the optimal tradeoff between fine-grained node validation overhead and end-to-end execution latency?'
    ],
    conclusion: 'Autonomous LLM workflows achieve production reliability only when constrained by deterministic state graphs and runtime schema validation.',
    nextSteps: [
      'Implement distributed task queues for parallel agent sub-graph execution.',
      'Add human-in-the-loop validation checkpoints for high-impact decision nodes.'
    ],
    references: [
      {
        citation: 'LangChain / LangGraph Architecture Documentation (2024).',
        author: 'Harrison Chase et al.',
        year: 2024,
        type: 'documentation',
        url: 'https://langchain-ai.github.io/langgraph/'
      },
      {
        citation: 'Pydantic Data Validation Framework Documentation (2024).',
        author: 'Samuel Colvin',
        year: 2024,
        type: 'documentation',
        url: 'https://docs.pydantic.dev/'
      }
    ],
    technologies: ['python', 'typescript', 'langgraph', 'fastapi', 'pydantic'],
    relatedProjects: ['multi-agent-prospect-intelligence'],
    relatedResearch: ['signal-research'],
    relatedNotes: [
      'async-sqlalchemy-session-lifecycle',
      'deterministic-state-graph-pydantic-guardrails',
    ],
    relatedLab: ['multi-agent-pydantic-state-machine'],
    githubUrl: 'https://github.com/UzairAhmad88',
    featured: true,
  },
];

export const featuredResearch = researchItems.find((r) => r.featured) || researchItems[0];

export function getResearchBySlug(slug: string): ResearchItem | undefined {
  return researchItems.find((r) => r.slug === slug);
}
