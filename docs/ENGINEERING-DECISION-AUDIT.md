# Engineering Decision & Trade-off Audit

## 1. Audit Overview
This document records documented technical decisions across projects, auditing the decision, context, evaluated alternatives, rationale, accepted trade-offs, and project evidence.

---

## 2. Documented Engineering Decisions

### 1. PyTorch over High-Level Wrappers
- **Decision:** Used PyTorch for deep neural network return forecasting rather than Keras or FastAI.
- **Context:** Required exact sliding window tensor controls and custom directional loss penalties.
- **Alternatives Evaluated:** Keras / TensorFlow Sequential, FastAI, Scikit-Learn MLP.
- **Rationale:** Low-level tensor manipulation and explicit computational graphs allow custom loss penalties penalizing directional errors more heavily than magnitude errors.
- **Accepted Trade-off:** More low-level boilerplate for training loops and GPU memory management.
- **Project Evidence:** `deep-learning-stock-return-prediction` (Verified in repository).

---

### 2. State Graphs over Free-Form Prompt Chains
- **Decision:** Architected multi-agent pipeline as a directed state graph with step limits and Pydantic validation.
- **Context:** Unstructured prompt chains suffer from infinite execution loops, hallucinations, and unformatted outputs.
- **Alternatives Evaluated:** Monolithic single prompt, LangChain free-form AgentExecutor.
- **Rationale:** State machines provide deterministic execution paths, clear trace debugging, and automated fallback on malformed data.
- **Accepted Trade-off:** Requires upfront state schema and transition logic definition.
- **Project Evidence:** `multi-agent-prospect-intelligence` (Verified in FYP architecture).

---

### 3. Full-Stack TypeScript Data Contracts
- **Decision:** Enforced shared TypeScript interfaces across React client and Express API.
- **Context:** Healthcare applications handle sensitive patient and clinical schedules where runtime null errors are unacceptable.
- **Alternatives Evaluated:** Untyped JavaScript, independent decoupled types with manual syncing.
- **Rationale:** Compile-time type verification eliminates null-pointer runtime crashes across the stack.
- **Accepted Trade-off:** Strict discipline required when modifying database or API response schemas.
- **Project Evidence:** `curasphere-hms` (Verified in repository).

---

### 4. Probabilistic GMM over Fixed Volatility Thresholds
- **Decision:** Used Gaussian Mixture Models (GMM) with AIC/BIC selection for market regime detection.
- **Context:** Financial market volatility shifts across macro cycles; static thresholds fail in new volatility baselines.
- **Alternatives Evaluated:** Fixed VIX thresholds (>25), rule-based ATR moving averages.
- **Rationale:** Probabilistic clustering adapts smoothly to empirical distribution shifts and outputs continuous state probabilities.
- **Accepted Trade-off:** EM algorithm sensitivity to initial parameter seeds.
- **Project Evidence:** `market-regime-engine` (Verified in repository).

---

### 5. Deterministic Variance-Ordered Regime Sorting
- **Decision:** Automatically sorted latent GMM cluster labels in ascending order of realized volatility variance.
- **Context:** Unsupervised clustering assigns cluster indices arbitrarily on each fit, causing label flipping across rolling windows.
- **Alternatives Evaluated:** Manual label inspection, single-pass global clustering.
- **Rationale:** Guarantees cluster 0 always represents lowest volatility, enabling safe automation of downstream risk throttles.
- **Accepted Trade-off:** Assumes volatility variance is the primary monotonic differentiator.
- **Project Evidence:** `market-regime-engine` (Verified in repository).

---

### 6. Local State Persistence for Restaurant POS
- **Decision:** Client-first local state architecture with instant visual mutations and cached ledger.
- **Context:** Peak dining rush hours demand instantaneous 1-touch touchscreen feedback without latency or Wi-Fi drops.
- **Alternatives Evaluated:** Synchronous roundtrip API calls per button click.
- **Rationale:** Guarantees zero latency and uninterrupted order processing during network drops.
- **Accepted Trade-off:** Requires explicit sync protocols for multi-terminal concurrency.
- **Project Evidence:** `restaurant-pos` (Verified in repository).
