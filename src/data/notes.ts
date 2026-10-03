import type { EngineeringNote, NoteTopic, NoteType } from '@/types/note';

export const engineeringNotes: EngineeringNote[] = [
  {
    id: 'async-sqlalchemy-session-lifecycle',
    slug: 'async-sqlalchemy-session-lifecycle',
    title: 'Asynchronous Session Lifecycles & Greenlet Threading Traps in FastAPI',
    summary: 'Diagnosing greenlet concurrency exceptions when combining SQLAlchemy ORM relationships with asynchronous FastAPI route handlers.',
    type: 'Debugging Note',
    status: 'PUBLISHED',
    topic: 'Backend Architecture',
    publishedAt: '2025-01-14',
    updatedAt: '2025-02-10',
    readingTimeMinutes: 5,
    featured: true,
    context: 'While building high-throughput FastAPI microservices for the Multi-Agent Prospect Intelligence platform, background task workers occasionally crashed with greenlet spawning errors under concurrent lead ingestion.',
    problem: 'FastAPI route handlers were executing async queries across SQLAlchemy models with lazy-loaded child relationships, triggering implicit synchronous I/O on an async event loop.',
    observedError: 'sqlalchemy.exc.MissingGreenlet: greenlet_spawn has not been called; can\'t call await_only() here. Was IO attempted in an unexpected place?',
    investigation: 'SQLAlchemy 2.0 requires async sessions (`AsyncSession`) with the `asyncpg` driver. When accessing lazy-loaded attributes on ORM objects after the initial query returned, SQLAlchemy attempts synchronous socket I/O. Because the execution was inside an async event loop, greenlet context switching threw an unhandled exception.',
    solution: 'Replaced lazy loading with explicit `selectinload()` eager fetching for relational collections, and ensured all database session dependencies utilize an `async with async_sessionmaker()` context manager that closes immediately upon route completion.',
    tradeoffs: [
      'Eager loading joins more data upfront, requiring disciplined query design to avoid N+1 query overhead.',
      'All ORM attribute access outside active session scopes must be converted to pure Pydantic schema representations before leaving repository boundaries.'
    ],
    lessons: [
      'Asynchronous ORM architectures must never rely on implicit lazy-loading.',
      'Enforce repository boundary contracts where database entities are transformed into plain immutable Pydantic schemas before reaching API controllers.'
    ],
    sections: [
      {
        heading: 'The Concurrency Crash Under Load',
        body: 'During multi-agent lead enrichment, the system spawned concurrent background worker tasks. The initial single-threaded tests passed cleanly, but concurrent bursts immediately failed with cryptic greenlet errors.',
        codeSnippet: `# Problematic: Implicit lazy-loading on async session
@router.get("/companies/{company_id}")
async def get_company(company_id: str, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Company).where(Company.id == company_id))
    company = result.scalar_one_or_none()
    
    # CRASH: Accessing .contacts triggers implicit sync I/O!
    return {"name": company.name, "contacts": [c.email for c in company.contacts]}`,
        codeLang: 'python',
        codeTitle: 'src/api/routes/companies.py (Before Fix)'
      },
      {
        heading: 'The Root Cause & Asynchronous Solution',
        body: 'To fix this, we used selectinload to eagerly fetch relationships in a single asynchronous batch query, and decoupled the ORM instance from the response serialization.',
        codeSnippet: `# Solution: Explicit selectinload and Pydantic transformation
from sqlalchemy.orm import selectinload

@router.get("/companies/{company_id}", response_model=CompanyResponse)
async def get_company(company_id: str, db: AsyncSession = Depends(get_db)):
    query = (
        select(Company)
        .options(selectinload(Company.contacts))
        .where(Company.id == company_id)
    )
    result = await db.execute(query)
    company = result.scalar_one_or_none()
    if not company:
        raise HTTPException(status_code=404, detail="Company not found")
        
    return CompanyResponse.model_validate(company)`,
        codeLang: 'python',
        codeTitle: 'src/api/routes/companies.py (After Fix)'
      }
    ],
    technologies: ['python', 'fastapi', 'postgresql', 'pydantic'],
    relatedProjects: ['multi-agent-prospect-intelligence', 'curasphere-hms'],
    relatedResearch: ['agentic-systems'],
    sources: [
      {
        title: 'SQLAlchemy 2.0 Asyncio Extension Documentation',
        url: 'https://docs.sqlalchemy.org/en/20/orm/extensions/asyncio.html',
        type: 'documentation'
      }
    ]
  },
  {
    id: 'fractional-differentiation-memory-stationarity',
    slug: 'fractional-differentiation-memory-stationarity',
    title: 'Preserving Memory in Financial Time Series: Why Integer Differencing Destroys Alpha',
    summary: 'A mathematical investigation into fractional differentiation order (d) for financial return series to satisfy ADF stationarity without destroying historical autocorrelation.',
    type: 'Technical Note',
    status: 'PUBLISHED',
    topic: 'Quantitative Computing',
    publishedAt: '2025-01-22',
    updatedAt: '2025-02-05',
    readingTimeMinutes: 6,
    featured: true,
    context: 'When training deep neural networks on raw financial price series, models fail to generalize because non-stationary distributions violate identically-distributed learning assumptions. However, standard log returns discard essential historical memory.',
    problem: 'Standard first-order differencing (d=1.0) completely removes unit roots and satisfies stationarity tests, but drops serial correlation to near-zero (~0.04), destroying multi-day trend structure needed for temporal neural architectures.',
    investigation: 'By computing binomial series expansion weights for arbitrary real orders d between 0.0 and 1.0, we can measure Augmented Dickey-Fuller (ADF) statistics alongside Pearson autocorrelation against the original series.',
    solution: 'Applied expanding fractional differencing filters where order d was tuned via grid search to find the minimal d where the ADF p-value drops below 0.01 (typically d in [0.35, 0.50] on equity indices).',
    tradeoffs: [
      'Fractional differencing involves an expanding memory window convolution that requires truncating weights below a threshold (e.g. 1e-4) to prevent excessive compute overhead.',
      'The optimal d shifts across high-volatility macro regimes, requiring rolling recalibration.'
    ],
    lessons: [
      'Stationarity is not a binary switch; memory preservation and stationarity exist on a continuum.',
      'Fractional differentiation preserves structural features that feed recurrent and transformer sequence models far better than naive percentage changes.'
    ],
    sections: [
      {
        heading: 'The Mathematical Dilemma: Memory vs Stationarity',
        body: 'Raw price series p_t contain maximal memory (correlation = 1.0) but are completely non-stationary (ADF p > 0.90). Integer returns delta p_t are stationary (ADF p < 0.01) but have zero memory.',
        mathFormula: `(1 - B)^d = \\sum_{k=0}^{\\infty} (-1)^k \\binom{d}{k} B^k = 1 - d B + \\frac{d(d-1)}{2!} B^2 - \\frac{d(d-1)(d-2)}{3!} B^3 + \\dots`
      },
      {
        heading: 'Vectorized Weight Computation in NumPy',
        body: 'To compute fractional series efficiently without memory leaks, we generate iterative expansion weights up to a fixed lookback cutoff.',
        codeSnippet: `import numpy as np

def get_fractional_weights(d: float, size: int, threshold: float = 1e-4) -> np.ndarray:
    weights = [1.0]
    for k in range(1, size):
        w = -weights[-1] / k * (d - k + 1)
        if abs(w) < threshold:
            break
        weights.append(w)
    return np.array(weights[::-1])`,
        codeLang: 'python',
        codeTitle: 'src/quant/features/fractional.py'
      }
    ],
    technologies: ['python', 'numpy', 'pandas', 'pytorch'],
    relatedProjects: ['deep-learning-stock-return-prediction', 'market-regime-engine'],
    relatedResearch: ['signal-research'],
    sources: [
      {
        title: 'Advances in Financial Machine Learning (Marcos López de Prado)',
        year: 2018,
        type: 'book'
      }
    ]
  },
  {
    id: 'gmm-state-flipping-variance-ordering',
    slug: 'gmm-state-flipping-variance-ordering',
    title: 'Preventing State Flipping in Unsupervised Gaussian Mixture Models',
    summary: 'Eliminating non-deterministic cluster label permutations in rolling-window market regime models using covariance trace sorting.',
    type: 'Implementation Note',
    status: 'PUBLISHED',
    topic: 'Machine Learning',
    publishedAt: '2025-01-28',
    updatedAt: '2025-02-12',
    readingTimeMinutes: 4,
    context: 'In quantitative risk systems, unsupervised Gaussian Mixture Models (GMM) classify market conditions into distinct volatility regimes (e.g., Low Volatility Bull, Medium Consolidation, High Volatility Stress).',
    problem: 'When retraining GMM models on rolling monthly windows, the Expectation-Maximization (EM) algorithm randomly assigns cluster indices based on random centroid initialization, causing state 0 and state 2 to swap labels intermittently.',
    observedError: 'Downstream risk management engine interpreted high-volatility flash crashes as low-volatility safe regimes because cluster index 0 flipped semantics across consecutive monthly model refits.',
    investigation: 'Unsupervised clustering has no inherent semantic ordering. The EM algorithm maximizes likelihood without knowledge of which cluster represents low vs high variance.',
    solution: 'Engineered a deterministic post-clustering permutation operator that calculates the trace of each component covariance matrix, sorts the indices ascendingly, and re-maps means, covariances, and transition matrices before returning predictions.',
    tradeoffs: [
      'Assumes variance is the monotonic defining characteristic of regime severity (which holds true empirically for financial market shocks).',
      'Adds a minor matrix trace computation step after model convergence.'
    ],
    lessons: [
      'Unsupervised ML outputs must never be passed to automated decision systems without deterministic semantic anchors.',
      'Simple mathematical constraints (such as variance ordering) bridge statistical models with engineering reliability.'
    ],
    sections: [
      {
        heading: 'Deterministic Variance Ordering Operator',
        body: 'By sorting mixture components by ascending covariance trace, State 0 is mathematically guaranteed to always represent the lowest volatility regime.',
        codeSnippet: `import numpy as np
from sklearn.mixture import GaussianMixture

def fit_stabilized_gmm(X: np.ndarray, n_components: int = 3) -> GaussianMixture:
    gmm = GaussianMixture(n_components=n_components, covariance_type='full', random_state=42)
    gmm.fit(X)
    
    # Calculate trace of covariance matrix for each component
    variances = [np.trace(cov) for cov in gmm.covariances_]
    order = np.argsort(variances)
    
    # Permute model parameters deterministically
    gmm.means_ = gmm.means_[order]
    gmm.covariances_ = gmm.covariances_[order]
    gmm.weights_ = gmm.weights_[order]
    gmm.precisions_cholesky_ = gmm.precisions_cholesky_[order]
    
    return gmm`,
        codeLang: 'python',
        codeTitle: 'src/quant/regimes/gmm_engine.py'
      }
    ],
    technologies: ['python', 'scikit-learn', 'numpy', 'pandas'],
    relatedProjects: ['market-regime-engine', 'deep-learning-stock-return-prediction'],
    relatedResearch: ['market-regimes'],
    sources: [
      {
        title: 'Pattern Recognition and Machine Learning (Christopher Bishop)',
        year: 2006,
        type: 'book'
      }
    ]
  },
  {
    id: 'deterministic-state-graph-pydantic-guardrails',
    slug: 'deterministic-state-graph-pydantic-guardrails',
    title: 'Bounding Stochastic LLM Agents with Deterministic State Graphs',
    summary: 'Architecting directed acyclic execution state machines with Pydantic runtime schema barriers to eliminate infinite loops and malformed JSON in autonomous research agents.',
    type: 'Architecture Note',
    status: 'PUBLISHED',
    topic: 'Multi-Agent Systems',
    publishedAt: '2025-02-04',
    updatedAt: '2025-02-18',
    readingTimeMinutes: 5,
    featured: true,
    context: 'During development of the Multi-Agent Prospect Intelligence engine, autonomous worker agents (Market Researcher, ICP Scorer, Outreach Strategist) performed multi-step web searches and lead evaluations.',
    problem: 'Unconstrained prompt chaining caused occasional infinite tool-calling loops on ambiguous domains, non-deterministic branching, and silent data corruption when upstream LLMs omitted required schema keys.',
    investigation: 'LLMs are stochastic text generators, not state machines. When multi-agent architectures rely solely on natural language handoffs, error propagation compounds exponentially across nodes.',
    solution: 'Formalized all agent coordination into a directed state graph using LangGraph, enforced strict Pydantic runtime schema interceptors at every node boundary, and added hard recursion depth and timeout guardrails.',
    tradeoffs: [
      'Strict schema validation will reject malformed responses, requiring automated self-healing error retry loops.',
      'Explicit state definitions require more upfront structural code than naive free-form agent frameworks.'
    ],
    lessons: [
      'Autonomous agent systems require strict software boundary constraints, not prompt suggestions.',
      'Treat LLM outputs as untrusted third-party API payloads that must be parsed, validated, and sanitized before state mutation.'
    ],
    sections: [
      {
        heading: 'Node Validation Barrier Pattern',
        body: 'Every worker agent node validates its raw completion against a typed Pydantic schema before committing to the shared execution state.',
        codeSnippet: `from pydantic import BaseModel, Field
from typing import List, Optional

class CompanyIntelligencePayload(BaseModel):
    company_name: str
    industry: str
    key_decision_makers: List[str] = Field(min_length=1)
    estimated_revenue_tier: str
    confidence_score: float = Field(ge=0.0, le=1.0)
    risk_flags: List[str] = []

def research_node_handler(state: AgentWorkflowState) -> AgentWorkflowState:
    raw_llm_response = execute_research_agent(state.query)
    
    # Deterministic Schema Guardrail
    validated_data = CompanyIntelligencePayload.model_validate_json(raw_llm_response)
    state.intelligence = validated_data
    state.step_count += 1
    return state`,
        codeLang: 'python',
        codeTitle: 'src/agents/nodes/research_node.py'
      }
    ],
    technologies: ['python', 'langgraph', 'pydantic', 'fastapi'],
    relatedProjects: ['multi-agent-prospect-intelligence'],
    relatedResearch: ['agentic-systems'],
    sources: [
      {
        title: 'LangGraph State Graph Documentation',
        url: 'https://langchain-ai.github.io/langgraph/',
        type: 'documentation'
      }
    ]
  },
  {
    id: 'zero-layout-shift-ssg-design-tokens',
    slug: 'zero-layout-shift-ssg-design-tokens',
    title: 'Eliminating Cumulative Layout Shift (CLS) in Static Editorial Layouts',
    summary: 'Architecting zero-layout-shift container tokens, fallback font metrics, and responsive aspect-ratio wrappers for technical long-form content.',
    type: 'UX Note',
    status: 'PUBLISHED',
    topic: 'Frontend & Performance',
    publishedAt: '2025-02-14',
    readingTimeMinutes: 4,
    context: 'Building this personal engineering platform and technical reading pages required rendering complex monospace code blocks, mathematical equations, and metadata sidebars across viewports from 320px to 4K displays.',
    problem: 'Initial builds exhibited visible Cumulative Layout Shift (CLS > 0.12) as custom Google Fonts (Syne, JetBrains Mono, Inter) loaded asynchronously and code containers resized dynamically.',
    investigation: 'Font loading caused vertical metric differences between the fallback serif/sans fonts and the loaded web fonts. Additionally, code blocks without fixed padding reservations pushed adjacent article content downwards.',
    solution: 'Configured font fallback metric overrides (`ascent-override`, `descent-override`, `size-adjust`) in CSS, implemented fixed horizontal overflow containers with `-webkit-overflow-scrolling: touch`, and declared rigid CSS custom property tokens for container widths.',
    tradeoffs: [
      'Requires fine-tuning font metric percentages for exact alignment with local system fallbacks.',
      'Restricts ad-hoc inline styling in favor of strict design token discipline.'
    ],
    lessons: [
      'Performance and visual stability must be designed into the CSS token system from day zero.',
      'A true editorial technical layout requires strict control over typographic measure (max-width ~68-75ch) for optimal reading comfort.'
    ],
    sections: [
      {
        heading: 'Font Metric Override & Container Tokens',
        body: 'By matching fallback font metrics to custom web fonts, text swaps cause zero layout reflows during hydration.',
        codeSnippet: `/* CSS Font Metric Override to prevent font-swap CLS */
@font-face {
  font-family: 'Inter-Fallback';
  src: local('Arial');
  ascent-override: 90%;
  descent-override: 22%;
  line-gap-override: 0%;
  size-adjust: 107%;
}

:root {
  --font-body: 'Inter', 'Inter-Fallback', system-ui, sans-serif;
  --measure-editorial: min(68ch, 100%);
  --container-max: 1200px;
}`,
        codeLang: 'css',
        codeTitle: 'src/styles/tokens.css'
      }
    ],
    technologies: ['astro', 'html5-css3', 'tailwindcss'],
    relatedProjects: ['curasphere-hms'],
    sources: [
      {
        title: 'Web.dev: Cumulative Layout Shift (CLS) Optimization Guide',
        url: 'https://web.dev/cls/',
        type: 'documentation'
      }
    ]
  },
  {
    id: 'rbac-relational-integrity-emr-systems',
    slug: 'rbac-relational-integrity-emr-systems',
    title: 'Architecting Role-Based Access Guards & Relational Integrity in Healthcare Systems',
    summary: 'Implementing layered JWT authentication and granular role-matrix authorization guards in PostgreSQL and Node.js for clinical data security.',
    type: 'Decision Note',
    status: 'PUBLISHED',
    topic: 'Software Architecture',
    publishedAt: '2025-02-20',
    readingTimeMinutes: 5,
    context: 'During the architecture of CuraSphere HMS (Hospital Management System), the application had to serve four distinct user personas: Patients, Doctors, Pharmacists, and Hospital Administrators.',
    problem: 'Allowing client-side state to dictate routing permissions created security vulnerabilities. Any direct HTTP request to patient medical history endpoints needed strict server-side role verification.',
    investigation: 'A single binary admin flag in the user table was insufficient; doctor-patient assignment contracts and prescription modification permissions required fine-grained relational ownership checks.',
    solution: 'Implemented a dual-layer security model: (1) stateless JWT authentication middleware verifying token validity, and (2) parametric RBAC middleware evaluating required permissions against database ownership relations before invoking controller handlers.',
    tradeoffs: [
      'Requires an additional database query for ownership verification on sensitive patient update routes.',
      'Slightly higher middleware complexity compared to basic role string checks.'
    ],
    lessons: [
      'In healthcare software, security boundaries must be enforced at the gateway and database foreign key levels.',
      'Decouple authentication (who the user is) from authorization (what specific resources the user can mutate).'
    ],
    sections: [
      {
        heading: 'Parametric RBAC Middleware Guard',
        body: 'The authorization guard verifies role privileges at the route boundary before controller execution.',
        codeSnippet: `// Express RBAC Middleware Guard
export const requireRole = (allowedRoles: UserRole[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user;
    if (!user) {
      return res.status(401).json({ error: 'Unauthenticated session' });
    }
    
    if (!allowedRoles.includes(user.role)) {
      return res.status(403).json({ 
        error: 'Forbidden: Insufficient privileges for clinical resource' 
      });
    }
    
    next();
  };
};`,
        codeLang: 'typescript',
        codeTitle: 'src/middleware/auth.ts'
      }
    ],
    technologies: ['typescript', 'postgresql', 'express', 'nodejs'],
    relatedProjects: ['curasphere-hms'],
    sources: [
      {
        title: 'NIST Role-Based Access Control (RBAC) Standard',
        type: 'standard'
      }
    ]
  }
];

export const featuredNotes = engineeringNotes.filter((n) => n.featured);

export function getNoteBySlug(slug: string): EngineeringNote | undefined {
  return engineeringNotes.find((n) => n.slug === slug);
}

export function getNotesByTopic(topic: NoteTopic): EngineeringNote[] {
  return engineeringNotes.filter((n) => n.topic === topic);
}

export function getNotesByType(type: NoteType): EngineeringNote[] {
  return engineeringNotes.filter((n) => n.type === type);
}

export function getNotesByTechnology(techId: string): EngineeringNote[] {
  return engineeringNotes.filter((n) => n.technologies.includes(techId));
}

export function getNotesByProject(projectSlug: string): EngineeringNote[] {
  return engineeringNotes.filter((n) => n.relatedProjects?.includes(projectSlug));
}

export function getNotesByResearch(researchSlug: string): EngineeringNote[] {
  return engineeringNotes.filter((n) => n.relatedResearch?.includes(researchSlug));
}
