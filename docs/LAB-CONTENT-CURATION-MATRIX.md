# Lab Content Curation Matrix

## 1. Content Curation Dimensions

This matrix assesses each Lab item across seven core technical narrative dimensions:
1. **Question Clarity**: Is the question bounded and testable?
2. **Context Specificity**: Does it explain why the experiment existed without personal fluff?
3. **Hypothesis / Assumption**: Is the expected behavior explicitly defined?
4. **Implementation Rigor**: Are configuration, code, and constraints detailed?
5. **Observation vs. Interpretation**: Are raw facts separated from deduction?
6. **Result Outcome**: Does the outcome match reality without exaggeration?
7. **Disclosed Limitations**: Are practical edge cases and boundary conditions acknowledged?

---

## 2. Item-by-Item Narrative Matrix

| Lab Slug | Question Clarity | Context Specificity | Hypothesis | Implementation Rigor | Observation Split | Result Outcome | Disclosed Limitations |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **`fractional-diff-cli`** | **PASS** ($d \in [0, 1]$, $\tau=10^{-4}$) | **PASS** (Avoids memory loss of $d=1$) | **PASS** ($O(N \cdot K)$ binomial expansion) | **PASS** (Vectorized NumPy convolution, $K=250$) | **PASS** (ADF $p=0.004$, $r=0.924$ vs $r=0.04$) | **PASS** (Demonstrated technically) | **PASS** (Warm-up period $K=250$, asset sensitivity) |
| **`streaming-orderbook-sse`** | **PASS** (Async SSE broadcast without event-loop lag) | **PASS** (Telemetry for monitoring dashboards) | **PASS** (HTTP/2 SSE simpler than WS for ingest) | **PASS** (FastAPI async generator, queue capping) | **PASS** (<15ms latency, <12KB RAM per client) | **PASS** (Demonstrated technically) | **PASS** (Unidirectional only, HTTP/1.1 limits) |
| **`gmm-regime-stability-probe`** | **PASS** (Lookback $N \in [126, 504]$ sensitivity) | **PASS** (Label swapping in unanchored EM) | **PASS** ($\text{Tr}(\Sigma_k)$ eliminates permutations) | **PASS** (Full covariance, warm-starting centroids) | **PASS** ($N=252$ days, 42-day bull duration) | **PASS** (Partially supported) | **PASS** (Exogenous shock lag, static $K=3$) |
| **`multi-agent-pydantic-state-machine`** | **PASS** (Type-checked state eliminating loops) | **PASS** (Preventing autonomous LLM drift) | **PASS** (Validation barriers reduce errors >80%) | **PASS** (LangGraph TypedDict, 3-retry budget) | **PASS** (100% schema compliance, zero runaway loops) | **PASS** (Confirmed) | **PASS** (+18% schema latency overhead) |
| **`css-subgrid-editorial-alignment`** | **PASS** (Zero-JS card row equalization) | **PASS** (Eliminating `ResizeObserver` loops) | **PASS** (Subgrid equalizes rows with 0.00 CLS) | **PASS** (4-row track contract, fallback flexbox) | **PASS** (0.00 CLS, 3.4KB script removed) | **PASS** (Confirmed) | **PASS** (Modern browser baseline, contract coupling) |
| **`stochastic-volatility-heston-calibration`** | **PASS** (Carr-Madan FFT inversion in <50ms) | **PASS** (Replacing Black-Scholes constant vol) | **PASS** (FFT achieves 100x speedup over ODE) | **PASS** (Albrecher rotation, dampening $\alpha=1.5$) | **PASS** (8ms pricing, but calibration local minima) | **PASS** (Requires further testing) | **PASS** (Feller condition violations, illiquid quotes) |

---

## 3. Editorial Curation Actions

- **Preserved Technical Precision**: Maintained exact mathematical notations ($d=0.45$, $\tau=10^{-4}$, $\text{Tr}(\Sigma_k)$, $\alpha=1.5$) rather than dumbing down the text.
- **Removed Promotional Language**: Cleaned all adjectives claiming "revolutionary", "seamless", or "enterprise-grade".
- **Structured Limitations**: Placed boundary conditions and failure modes in designated visual blocks.
