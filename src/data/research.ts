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
    question: 'Which statistical transformations preserve meaningful long-range temporal memory while satisfying stationarity constraints for deep neural networks in financial time series?',
    context: 'Standard integer differencing ($d=1$) completely removes trend and unit roots from financial price series ($p_t$), but destroys virtually all historical memory and autocorrelation structure necessary for multi-horizon predictive models.',
    hypothesis: 'Fractional differentiation ($0 < d < 1$) combined with rolling volatility normalization will yield higher signal-to-noise ratios and improved out-of-sample directional precision compared to raw log returns.',
    approach: 'Empirical backtesting using PyTorch neural networks on historical multi-asset daily and hourly OHLCV time series with expanding walk-forward cross-validation.',
    methodology: [
      'Fractional Differentiation via binomial expansion weights $(1-B)^d = \sum_{k=0}^{\infty} (-1)^k \binom{d}{k} B^k$.',
      'Augmented Dickey-Fuller (ADF) and KPSS statistical tests for stationarity verification.',
      'Rolling realized volatility and Garman-Klass volatility moment normalization.',
      'Walk-forward temporal cross-validation with zero lookahead leakage.'
    ],
    mathematicalFormulation: `Fractional Differentiation Expansion:
(1 - B)^d = 1 - d*B + (d*(d-1)/2!)*B^2 - (d*(d-1)*(d-2)/3!)*B^3 + ...

Weight calculation for lag k:
w_k = -w_{k-1} * (d - k + 1) / k,  where w_0 = 1`,
    dataSources: [
      'Multi-asset historical OHLCV market feeds (Equities, Indices).',
      'Calculated technical indicator matrices (RSI, MACD, Bollinger Bands, ATR).'
    ],
    experiments: [
      'Parameter grid search for optimal fractional order d in range [0.1, 0.9] across asset classes.',
      'Comparative neural training using LSTM and GRU architectures on standard returns vs fractionally differenced series.'
    ],
    findings: [
      {
        status: 'Active',
        description: 'Empirical ADF tests show stationarity can frequently be achieved at d between 0.35 and 0.55 while preserving significant memory correlation.'
      },
      {
        status: 'Confirmed',
        description: 'Walk-forward cross-validation eliminates artificial in-sample Sharpe ratio inflation caused by standard k-fold random splits.'
      }
    ],
    limitations: [
      'Optimal memory parameter d varies across distinct macroeconomic volatility regimes.',
      'Higher computational overhead due to expanding memory window convolution.'
    ],
    conclusion: 'Fractional differentiation provides a mathematically principled middle ground between completely non-stationary raw price series and memoryless integer returns.',
    nextSteps: [
      'Integrate regime-adaptive fractional order selection using dynamic volatility estimates.',
      'Evaluate execution slippage and market impact models on simulated signal orders.'
    ],
    references: [
      {
        citation: 'López de Prado, M. (2018). Advances in Financial Machine Learning. John Wiley & Sons.',
        url: 'https://www.wiley.com/en-us/Advances+in+Financial+Machine+Learning-p-9781119482086'
      },
      {
        citation: 'Hosking, J. R. (1981). Fractional differencing. Biometrika, 68(1), 165-176.',
        url: 'https://doi.org/10.1093/biomet/68.1.165'
      }
    ],
    relatedProjects: ['deep-learning-stock-return-prediction', 'market-regime-engine'],
    relatedResearch: ['market-regimes'],
    githubUrl: 'https://github.com/UzairAhmad88/Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii',
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
    hypothesis: 'Gaussian Mixture Models fitted to rolling moments (volatility, skewness, volume kurtosis) can accurately partition market states into distinct behavioral clusters.',
    approach: 'Unsupervised clustering on rolling statistical feature vectors with Bayesian Information Criterion (BIC) for component selection.',
    methodology: [
      'Rolling window computation of realized volatility, normalized ATR, and volume variance.',
      'Gaussian Mixture Model (GMM) probabilistic expectation-maximization fitting.',
      'Hidden Markov Model (HMM) transition probability matrix calculation.',
      'Sorting cluster indices by ascending variance to eliminate state label flipping.'
    ],
    mathematicalFormulation: `Gaussian Mixture Probability Density:
p(x) = \sum_{k=1}^{K} \pi_k * \mathcal{N}(x | \mu_k, \Sigma_k)

where \pi_k are mixing coefficients satisfying \sum \pi_k = 1`,
    dataSources: [
      'Historical daily and intraday equity and index price series.'
    ],
    findings: [
      {
        status: 'Confirmed',
        description: 'Unsupervised 3-state GMM partitions empirical data cleanly into Low-Vol Bull, Medium Consolidation, and High-Vol Stress regimes.'
      },
      {
        status: 'Active',
        description: 'HMM transition probabilities provide useful forward risk throttling signals before volatility spikes.'
      }
    ],
    limitations: [
      'Model parameter refitting requires stationary lookback windows; rapid flash crash events can lag by multiple estimation bars.'
    ],
    conclusion: 'Probabilistic state modeling outperforms static volatility thresholds by outputting continuous state membership probabilities rather than brittle binary flags.',
    references: [
      {
        citation: 'Hamilton, J. D. (1989). A new approach to the economic analysis of nonstationary time series and the business cycle. Econometrica, 357-384.',
        url: 'https://doi.org/10.2307/1912559'
      }
    ],
    relatedProjects: ['market-regime-engine', 'deep-learning-stock-return-prediction'],
    relatedResearch: ['signal-research'],
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
    hypothesis: 'Strictly bounded state graphs with typed JSON schema guardrails at every inter-agent transition will produce 100% parseable structured intelligence reports.',
    approach: 'Building directed state graph orchestration with specialized worker sub-agents, deterministic JSON Schema validators, and structured output parsing.',
    methodology: [
      'Directed State Graph orchestration with explicit state schemas.',
      'Deterministic JSON Schema validation on all worker agent responses.',
      'Maximum recursion depth and timeout guardrails on sub-agent tool calls.',
      'Human-in-the-loop checkpoint gates for critical scoring decisions.'
    ],
    mathematicalFormulation: `State Transition Function:
S_{t+1} = \delta(S_t, A_t, V(O_t))

where V(O_t) is the deterministic schema validation operator verifying output O_t matches schema \mathcal{T}`,
    dataSources: [
      'Structured company intelligence APIs, simulated web search feeds, and CRM lead records.'
    ],
    findings: [
      {
        status: 'Confirmed',
        description: 'Schema guardrails eliminate downstream JSON parsing crashes completely across multi-step research graphs.'
      },
      {
        status: 'Active',
        description: 'Evaluating token caching strategies to minimize inference latency during repetitive entity enrichment.'
      }
    ],
    limitations: [
      'Upstream LLM API latency introduces variability in overall execution time.'
    ],
    conclusion: 'Enterprise agentic systems require explicit state machines rather than unstructured prompt chains to achieve production reliability.',
    references: [
      {
        citation: 'LangChain / LangGraph Architecture Documentation (2024).',
        url: 'https://langchain-ai.github.io/langgraph/'
      }
    ],
    relatedProjects: ['multi-agent-prospect-intelligence'],
    relatedResearch: ['signal-research'],
    githubUrl: 'https://github.com/UzairAhmad88',
    featured: true,
  },
];

export const featuredResearch = researchItems.find((r) => r.featured) || researchItems[0];

export function getResearchBySlug(slug: string): ResearchItem | undefined {
  return researchItems.find((r) => r.slug === slug);
}
