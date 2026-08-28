'use client';

import { useState, useRef, useEffect } from 'react';
import { LineChart, Calculator, TrendingUp, Sliders, RefreshCw, BookOpen, Layers } from 'lucide-react';

export function QuantLab() {
  const [activeTab, setActiveTab] = useState<'monte-carlo' | 'black-scholes' | 'yield-curve'>('monte-carlo');

  // Monte Carlo Simulator State
  const [initialPrice, setInitialPrice] = useState<number>(100);
  const [volatility, setVolatility] = useState<number>(0.25);
  const [drift, setDrift] = useState<number>(0.08);
  const [days, setDays] = useState<number>(90);
  const [numPaths, setNumPaths] = useState<number>(15);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Black-Scholes Calculator State
  const [spotPrice, setSpotPrice] = useState<number>(100);
  const [strikePrice, setStrikePrice] = useState<number>(105);
  const [riskFreeRate, setRiskFreeRate] = useState<number>(0.05);
  const [optionVolatility, setOptionVolatility] = useState<number>(0.2);
  const [timeToExpiry, setTimeToExpiry] = useState<number>(0.5); // 6 months

  // Yield Curve State
  const [shortRate, setShortRate] = useState<number>(4.5);
  const [longRate, setLongRate] = useState<number>(5.2);

  // 1. Draw Monte Carlo Canvas Simulation
  const drawMonteCarlo = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);

    // Background Grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y < h; y += 30) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // Generate Stochastic Paths via Geometric Brownian Motion
    const dt = 1 / 252; // daily time step
    const paths: number[][] = [];

    for (let p = 0; p < numPaths; p++) {
      const path: number[] = [initialPrice];
      let currentS = initialPrice;

      for (let d = 1; d <= days; d++) {
        // Box-Muller transform for Gaussian random variate Z ~ N(0, 1)
        const u1 = Math.random();
        const u2 = Math.random();
        const z = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);

        // dS = mu*S*dt + sigma*S*sqrt(dt)*Z
        const dS = drift * currentS * dt + volatility * currentS * Math.sqrt(dt) * z;
        currentS = Math.max(1, currentS + dS);
        path.push(currentS);
      }
      paths.push(path);
    }

    // Find min and max for vertical scaling
    let maxP = initialPrice * 1.5;
    let minP = initialPrice * 0.7;

    // Draw Paths
    paths.forEach((path, idx) => {
      ctx.beginPath();
      ctx.strokeStyle = idx === 0 ? '#10b981' : idx === 1 ? '#06b6d4' : 'rgba(99, 102, 241, 0.4)';
      ctx.lineWidth = idx < 2 ? 2.5 : 1;

      path.forEach((val, step) => {
        const x = (step / days) * w;
        const y = h - ((val - minP) / (maxP - minP)) * h;
        if (step === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();
    });
  };

  useEffect(() => {
    if (activeTab === 'monte-carlo') {
      drawMonteCarlo();
    }
  }, [activeTab, initialPrice, volatility, drift, days, numPaths]);

  // 2. Black-Scholes Analytical Calculation
  const normCDF = (x: number): number => {
    const t = 1 / (1 + 0.2316419 * Math.abs(x));
    const d = 0.3989423 * Math.exp((-x * x) / 2);
    const prob =
      d *
      t *
      (0.3193815 +
        t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
    return x >= 0 ? 1 - prob : prob;
  };

  const S = spotPrice;
  const K = strikePrice;
  const r = riskFreeRate;
  const v = optionVolatility;
  const T = timeToExpiry;

  const d1 = (Math.log(S / K) + (r + (v * v) / 2) * T) / (v * Math.sqrt(T));
  const d2 = d1 - v * Math.sqrt(T);

  const bsCallPrice = S * normCDF(d1) - K * Math.exp(-r * T) * normCDF(d2);
  const bsPutPrice = K * Math.exp(-r * T) * normCDF(-d2) - S * normCDF(-d1);

  const deltaCall = normCDF(d1);
  const gamma = (Math.exp((-d1 * d1) / 2) / (S * v * Math.sqrt(2 * Math.PI * T)));
  const vega = S * Math.sqrt(T) * (Math.exp((-d1 * d1) / 2) / Math.sqrt(2 * Math.PI)) * 0.01;

  const quantRoadmap = [
    { title: '01 / Mathematics Foundation', topics: ['Multivariable Calculus', 'Linear Algebra', 'Probability Theory', 'Differential Equations'] },
    { title: '02 / Stochastic Processes', topics: ['Brownian Motion', 'Ito Calculus', 'Martingales', 'Random Walks'] },
    { title: '03 / Financial Derivatives', topics: ['Black-Scholes Model', 'Option Greeks', 'Risk-Neutral Valuation', 'Binomial Trees'] },
    { title: '04 / Numerical Methods', topics: ['Monte Carlo Simulation', 'Variance Reduction', 'Finite Difference PDE', 'Short-Rate Curves'] },
  ];

  return (
    <section id="quant-lab" className="section">
      <div className="eyebrow">06 / QUANTITATIVE FINANCE & TIME SERIES</div>
      <h2>Stochastic Models & Mathematical Suite</h2>
      <p className="lede">
        Quantitative finance goes beyond prediction — combining probability theory, stochastic differential equations,
        Monte Carlo simulation, derivative option pricing, and yield curve term structures.
      </p>

      {/* Module Selector Tabs */}
      <div style={{ display: 'flex', gap: '12px', marginTop: '40px' }}>
        <button
          onClick={() => setActiveTab('monte-carlo')}
          className="btn-tool"
          style={{
            borderColor: activeTab === 'monte-carlo' ? 'var(--accent)' : 'var(--panel-border)',
            background: activeTab === 'monte-carlo' ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
            color: activeTab === 'monte-carlo' ? '#fff' : 'var(--text-muted)',
          }}
        >
          <TrendingUp size={16} /> Monte Carlo Stock Simulator
        </button>

        <button
          onClick={() => setActiveTab('black-scholes')}
          className="btn-tool"
          style={{
            borderColor: activeTab === 'black-scholes' ? 'var(--accent)' : 'var(--panel-border)',
            background: activeTab === 'black-scholes' ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
            color: activeTab === 'black-scholes' ? '#fff' : 'var(--text-muted)',
          }}
        >
          <Calculator size={16} /> Black-Scholes Option Pricer
        </button>

        <button
          onClick={() => setActiveTab('yield-curve')}
          className="btn-tool"
          style={{
            borderColor: activeTab === 'yield-curve' ? 'var(--accent)' : 'var(--panel-border)',
            background: activeTab === 'yield-curve' ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
            color: activeTab === 'yield-curve' ? '#fff' : 'var(--text-muted)',
          }}
        >
          <LineChart size={16} /> Dynamic Yield Curve
        </button>
      </div>

      {/* Tab 1: Monte Carlo Stock Path Simulator */}
      {activeTab === 'monte-carlo' && (
        <div className="grid-2" style={{ marginTop: '32px' }}>
          {/* Controls */}
          <div className="card-glass" style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-hero)', margin: 0 }}>Geometric Brownian Motion Parameters</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-hero)', margin: 0, fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
              dS = μ·S·dt + σ·S·dW
            </p>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                <span>Initial Stock Price (S₀):</span>
                <span style={{ color: 'var(--text-hero)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>${initialPrice}</span>
              </div>
              <input type="range" min={50} max={300} value={initialPrice} onChange={e => setInitialPrice(Number(e.target.value))} style={{ width: '100%', accentColor: 'var(--text-hero)' }} />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                <span>Annualized Volatility (σ):</span>
                <span style={{ color: 'var(--text-hero)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>{(volatility * 100).toFixed(0)}%</span>
              </div>
              <input type="range" min={0.05} max={0.6} step={0.05} value={volatility} onChange={e => setVolatility(Number(e.target.value))} style={{ width: '100%', accentColor: 'var(--text-hero)' }} />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                <span>Annualized Drift (μ):</span>
                <span style={{ color: 'var(--text-hero)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>{(drift * 100).toFixed(0)}%</span>
              </div>
              <input type="range" min={-0.1} max={0.3} step={0.02} value={drift} onChange={e => setDrift(Number(e.target.value))} style={{ width: '100%', accentColor: 'var(--text-hero)' }} />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                <span>Simulated Trajectories (M):</span>
                <span style={{ color: 'var(--text-hero)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>{numPaths} Paths</span>
              </div>
              <input type="range" min={5} max={40} value={numPaths} onChange={e => setNumPaths(Number(e.target.value))} style={{ width: '100%', accentColor: 'var(--text-hero)' }} />
            </div>

            <button className="btn-primary" onClick={drawMonteCarlo} style={{ justifyContent: 'center', marginTop: '10px' }}>
              <RefreshCw size={16} /> Recalculate Stochastic Paths
            </button>
          </div>

          {/* Canvas Output */}
          <div className="card-glass" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1.25rem', color: '#fff', margin: 0 }}>Simulated Stochastic Trajectories</h3>
              <span className="tag-pill" style={{ color: 'var(--accent-emerald)', borderColor: 'var(--accent-emerald)', fontSize: '0.75rem' }}>
                Geometric Brownian Motion
              </span>
            </div>

            <canvas
              ref={canvasRef}
              width={500}
              height={300}
              style={{
                width: '100%',
                height: '280px',
                background: 'rgba(0, 0, 0, 0.4)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--panel-border)',
              }}
            />
          </div>
        </div>
      )}

      {/* Tab 2: Black-Scholes Calculator */}
      {activeTab === 'black-scholes' && (
        <div className="grid-2" style={{ marginTop: '32px' }}>
          <div className="card-glass" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-hero)', margin: 0 }}>Option Inputs</h3>

            <div>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Spot Price (S): ${spotPrice}</label>
              <input type="range" min={50} max={200} value={spotPrice} onChange={e => setSpotPrice(Number(e.target.value))} style={{ width: '100%', accentColor: 'var(--text-hero)' }} />
            </div>

            <div>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Strike Price (K): ${strikePrice}</label>
              <input type="range" min={50} max={200} value={strikePrice} onChange={e => setStrikePrice(Number(e.target.value))} style={{ width: '100%', accentColor: 'var(--text-hero)' }} />
            </div>

            <div>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Volatility (σ): {(optionVolatility * 100).toFixed(0)}%</label>
              <input type="range" min={0.05} max={0.6} step={0.05} value={optionVolatility} onChange={e => setOptionVolatility(Number(e.target.value))} style={{ width: '100%', accentColor: 'var(--text-hero)' }} />
            </div>

            <div>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Time to Expiry (T): {(timeToExpiry * 12).toFixed(0)} Months</label>
              <input type="range" min={0.1} max={2} step={0.1} value={timeToExpiry} onChange={e => setTimeToExpiry(Number(e.target.value))} style={{ width: '100%', accentColor: 'var(--text-hero)' }} />
            </div>
          </div>

          <div className="card-glass">
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-hero)', marginBottom: '20px' }}>Analytical Black-Scholes Output</h3>

            <div className="grid-2" style={{ marginBottom: '20px' }}>
              <div style={{ background: 'var(--accent-light)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--panel-border)' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-hero)', fontWeight: 600 }}>European Call Price</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-hero)', fontFamily: 'var(--font-mono)' }}>
                  ${bsCallPrice.toFixed(2)}
                </div>
              </div>

              <div style={{ background: 'var(--accent-light)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--panel-border)' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-hero)', fontWeight: 600 }}>European Put Price</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-hero)', fontFamily: 'var(--font-mono)' }}>
                  ${bsPutPrice.toFixed(2)}
                </div>
              </div>
            </div>

            {/* Sensitivity Greeks */}
            <div style={{ borderTop: '1px solid var(--panel-border)', paddingTop: '16px' }}>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '10px' }}>Option Sensitivity Greeks:</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.88rem' }}>
                <span>Delta (Δ): <strong style={{ color: 'var(--text-hero)' }}>{deltaCall.toFixed(3)}</strong></span>
                <span>Gamma (Γ): <strong style={{ color: 'var(--text-hero)' }}>{gamma.toFixed(4)}</strong></span>
                <span>Vega (ν): <strong style={{ color: 'var(--text-hero)' }}>{vega.toFixed(3)}</strong></span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Dynamic Yield Curve */}
      {activeTab === 'yield-curve' && (
        <div className="card-glass" style={{ marginTop: '32px' }}>
          <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '16px' }}>Yield Curve Dynamics</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
            Adjust short-term and long-term interest rates to observe yield curve shifts (Normal, Inverted, Flat term structures).
          </p>

          <div className="grid-2" style={{ marginBottom: '24px' }}>
            <div>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Short-Rate (3M): {shortRate}%</label>
              <input type="range" min={1} max={8} step={0.25} value={shortRate} onChange={e => setShortRate(Number(e.target.value))} style={{ width: '100%', accentColor: 'var(--accent)' }} />
            </div>

            <div>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Long-Rate (30Y): {longRate}%</label>
              <input type="range" min={1} max={8} step={0.25} value={longRate} onChange={e => setLongRate(Number(e.target.value))} style={{ width: '100%', accentColor: 'var(--accent)' }} />
            </div>
          </div>

          {/* Yield Curve Graph Simulation */}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px', height: '180px', padding: '20px', background: 'rgba(0, 0, 0, 0.4)', borderRadius: 'var(--radius-md)', border: '1px solid var(--panel-border)' }}>
            {['1M', '3M', '6M', '1Y', '2Y', '5Y', '10Y', '30Y'].map((tenor, idx) => {
              const rate = shortRate + ((longRate - shortRate) * idx) / 7;
              return (
                <div key={tenor} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end' }}>
                  <span style={{ fontSize: '0.72rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', marginBottom: '6px' }}>{rate.toFixed(2)}%</span>
                  <div style={{ width: '100%', height: `${(rate / 10) * 100}%`, background: 'linear-gradient(180deg, var(--accent-cyan), var(--accent))', borderRadius: '4px 4px 0 0' }} />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '6px', fontFamily: 'var(--font-mono)' }}>{tenor}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Quantitative Learning Roadmap */}
      <div style={{ marginTop: '48px' }}>
        <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <BookOpen size={18} style={{ color: 'var(--accent-cyan)' }} /> Quantitative Research & Learning Roadmap
        </h3>

        <div className="grid-2">
          {quantRoadmap.map(stage => (
            <div key={stage.title} className="card-glass">
              <div style={{ fontWeight: 600, color: 'var(--accent-cyan)', fontSize: '0.92rem', marginBottom: '12px' }}>{stage.title}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {stage.topics.map(topic => (
                  <span key={topic} className="tag-pill" style={{ fontSize: '0.78rem' }}>
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
