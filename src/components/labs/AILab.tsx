'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Play, CheckCircle2 } from 'lucide-react';

export function AILab() {
  const [modelType, setModelType] = useState<'cnn' | 'rnn' | 'mlp'>('cnn');
  const [hiddenLayers, setHiddenLayers] = useState<number>(3);
  const [neurons, setNeurons] = useState<number>(64);
  const [activation, setActivation] = useState<'relu' | 'sigmoid' | 'tanh'>('relu');
  const [learningRate, setLearningRate] = useState<number>(0.001);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [valAccuracy, setValAccuracy] = useState<number>(94.2);

  const pipelineSteps = [
    { num: '01', title: 'Data Ingestion', sub: 'Normalization & Batches' },
    { num: '02', title: 'Preprocessing', sub: 'Feature Scaling & Encoders' },
    { num: '03', title: 'Feature Engineering', sub: 'Convolutions, Scaling & Vector Encoding' },
    { num: '04', title: 'Neural Architecture', sub: 'Forward Pass & Activations' },
    { num: '05', title: 'Metrics & Insights', sub: 'Loss Curves & ROC Validation' },
  ];

  const handleSimulatePass = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
      setValAccuracy(prev => Number((92 + Math.random() * 6.5).toFixed(1)));
    }, 600);
  };

  return (
    <section id="ai-lab" className="section">
      <div className="eyebrow">05 / INTERACTIVE LABORATORY</div>
      <h2>AI / ML / Deep Learning Playground</h2>
      <p className="lede">
        An interactive laboratory illustrating neural network architecture design, feature maps, hidden layer capacity,
        activation function dynamics, and empirical validation metrics.
      </p>

      {/* Pipeline Steps Header Bar */}
      <div style={{ marginTop: '36px', overflowX: 'auto', paddingBottom: '8px' }}>
        <div style={{ display: 'flex', gap: '14px', minWidth: '850px' }}>
          {pipelineSteps.map((step, idx) => (
            <div
              key={step.num}
              className="card-glass"
              style={{
                flex: 1,
                padding: '16px',
                borderTop: idx === 2 ? '4px solid var(--text-hero)' : '1px solid var(--panel-border)',
                background: idx === 2 ? 'var(--accent-light)' : '#ffffff',
              }}
            >
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-hero)', fontWeight: 700 }}>
                {step.num} / {step.title}
              </div>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-hero)', marginTop: '4px' }}>{step.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid-2" style={{ marginTop: '32px' }}>
        {/* Controls Panel */}
        <div className="card-glass" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Cpu size={22} style={{ color: 'var(--text-hero)' }} />
            <h3 style={{ fontSize: '1.25rem', margin: 0, color: 'var(--text-hero)', fontWeight: 700 }}>Hyperparameter Tuning Panel</h3>
          </div>

          {/* Model Architecture Switcher */}
          <div>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '8px', fontWeight: 600 }}>
              Model Architecture:
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
              <button
                onClick={() => setModelType('cnn')}
                className="tag-pill"
                style={{
                  justifyContent: 'center',
                  background: modelType === 'cnn' ? 'var(--text-hero)' : '#ffffff',
                  color: modelType === 'cnn' ? '#ffffff' : 'var(--text-hero)',
                  borderColor: 'var(--panel-border)',
                  cursor: 'pointer',
                  fontWeight: 600,
                }}
              >
                CNN (Spatial)
              </button>

              <button
                onClick={() => setModelType('rnn')}
                className="tag-pill"
                style={{
                  justifyContent: 'center',
                  background: modelType === 'rnn' ? 'var(--text-hero)' : '#ffffff',
                  color: modelType === 'rnn' ? '#ffffff' : 'var(--text-hero)',
                  borderColor: 'var(--panel-border)',
                  cursor: 'pointer',
                  fontWeight: 600,
                }}
              >
                RNN / LSTM (Sequential)
              </button>

              <button
                onClick={() => setModelType('mlp')}
                className="tag-pill"
                style={{
                  justifyContent: 'center',
                  background: modelType === 'mlp' ? 'var(--text-hero)' : '#ffffff',
                  color: modelType === 'mlp' ? '#ffffff' : 'var(--text-hero)',
                  borderColor: 'var(--panel-border)',
                  cursor: 'pointer',
                  fontWeight: 600,
                }}
              >
                MLP (Dense)
              </button>
            </div>
          </div>

          {/* Hidden Layers Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
              <span style={{ fontWeight: 600 }}>Hidden Layers:</span>
              <span style={{ color: 'var(--text-hero)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>{hiddenLayers} Layers</span>
            </div>
            <input
              type="range"
              min={1}
              max={6}
              value={hiddenLayers}
              onChange={e => setHiddenLayers(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--text-hero)' }}
            />
          </div>

          {/* Neurons / Units Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
              <span style={{ fontWeight: 600 }}>Units / Channel Capacity:</span>
              <span style={{ color: 'var(--text-hero)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>{neurons} Nodes</span>
            </div>
            <input
              type="range"
              min={16}
              max={256}
              step={16}
              value={neurons}
              onChange={e => setNeurons(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--text-hero)' }}
            />
          </div>

          {/* Activation Function */}
          <div>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '8px', fontWeight: 600 }}>
              Activation Function:
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
              {(['relu', 'sigmoid', 'tanh'] as const).map(act => (
                <button
                  key={act}
                  onClick={() => setActivation(act)}
                  className="tag-pill"
                  style={{
                    justifyContent: 'center',
                    background: activation === act ? 'var(--text-hero)' : '#ffffff',
                    color: activation === act ? '#ffffff' : 'var(--text-hero)',
                    borderColor: 'var(--panel-border)',
                    cursor: 'pointer',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                  }}
                >
                  {act}
                </button>
              ))}
            </div>
          </div>

          {/* Learning Rate */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
              <span style={{ fontWeight: 600 }}>Learning Rate (η):</span>
              <span style={{ color: 'var(--text-hero)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>{learningRate}</span>
            </div>
            <input
              type="range"
              min={0.0001}
              max={0.01}
              step={0.0005}
              value={learningRate}
              onChange={e => setLearningRate(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--text-hero)' }}
            />
          </div>

          <button className="btn-primary" onClick={handleSimulatePass} style={{ justifyContent: 'center', marginTop: '10px' }}>
            <Play size={16} /> Execute Forward Pass Simulation
          </button>
        </div>

        {/* Visualizer & Metrics Panel */}
        <div className="card-glass" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.25rem', margin: 0, color: 'var(--text-hero)', fontWeight: 700 }}>Activation Visualizer</h3>
              <span className="tag-pill" style={{ background: 'var(--accent-light)', borderColor: 'var(--panel-border)', color: 'var(--text-hero)', fontSize: '0.78rem' }}>
                {modelType.toUpperCase()} Pipeline
              </span>
            </div>

            {/* Neural Layer Visual Flow Canvas Container */}
            <div
              style={{
                height: '220px',
                background: 'radial-gradient(circle at 50% 50%, #1b3240 0%, #11222e 100%)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--panel-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                padding: '20px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Input Layer */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', zIndex: 2 }}>
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ scale: isSimulating ? [1, 1.25, 1] : 1 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    style={{
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      background: '#6da8b7',
                      boxShadow: '0 0 10px #6da8b7',
                    }}
                  />
                ))}
              </div>

              {/* Hidden Layers */}
              {[...Array(Math.min(hiddenLayers, 4))].map((_, lIdx) => (
                <div key={lIdx} style={{ display: 'flex', flexDirection: 'column', gap: '6px', zIndex: 2 }}>
                  {[...Array(5)].map((_, nIdx) => (
                    <motion.div
                      key={nIdx}
                      animate={{ scale: isSimulating ? [1, 1.3, 1] : 1 }}
                      transition={{ duration: 0.4, delay: (lIdx + 1) * 0.1 }}
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: activation === 'relu' ? '#10b981' : activation === 'sigmoid' ? '#0284c7' : '#6366f1',
                        boxShadow: '0 0 8px currentColor',
                      }}
                    />
                  ))}
                </div>
              ))}

              {/* Output Layer */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', zIndex: 2 }}>
                {[...Array(2)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ scale: isSimulating ? [1, 1.35, 1] : 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      background: '#ffffff',
                      boxShadow: '0 0 12px #ffffff',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Validation Metrics Dashboard */}
          <div style={{ marginTop: '20px', paddingTop: '18px', borderTop: '1px solid var(--panel-border)' }}>
            <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-hero)', marginBottom: '12px' }}>
              Validation Performance Dashboard:
            </div>

            <div className="grid-3">
              <div style={{ background: 'var(--accent-light)', padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--panel-border)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-hero)', fontWeight: 600 }}>Validation Accuracy</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-hero)', fontFamily: 'var(--font-mono)' }}>
                  {valAccuracy}%
                </div>
              </div>

              <div style={{ background: 'var(--accent-light)', padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--panel-border)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-hero)', fontWeight: 600 }}>Cross-Entropy Loss</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-hero)', fontFamily: 'var(--font-mono)' }}>
                  0.142
                </div>
              </div>

              <div style={{ background: 'var(--accent-light)', padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--panel-border)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-hero)', fontWeight: 600 }}>F1 Score</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-hero)', fontFamily: 'var(--font-mono)' }}>
                  0.938
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
