'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { KnowledgeCore3D } from '../three/KnowledgeCore3D';
import { ArrowDown, Code, Cpu, LineChart, FileText, Sparkles, Globe, Terminal, Play, Copy, Check } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  const [activeCodeTab, setActiveCodeTab] = useState<'dotnet' | 'python' | 'quant'>('dotnet');
  const [copied, setCopied] = useState(false);
  const [executing, setExecuting] = useState(false);
  const [execResult, setExecResult] = useState<string | null>(null);

  const codeSnippets = {
    dotnet: {
      title: 'C# .NET Core 8 — Enterprise CQRS Command Handler',
      lang: 'csharp',
      code: `// HMS & POS Enterprise Transaction Handler
public class CreateCheckoutTransactionCommand : IRequest<TransactionResult> {
    public Guid CustomerId { get; set; }
    public List<CartItem> Items { get; set; }
    public decimal TotalAmount { get; set; }
}

public class TransactionHandler : IRequestHandler<CreateCheckoutTransactionCommand, TransactionResult> {
    private readonly ApplicationDbContext _db;
    public TransactionHandler(ApplicationDbContext db) => _db = db;

    public async Task<TransactionResult> Handle(CreateCheckoutTransactionCommand cmd, CancellationToken ct) {
        using var tx = await _db.Database.BeginTransactionAsync(IsolationLevel.ReadCommitted, ct);
        var order = new Order { Id = Guid.NewGuid(), Total = cmd.TotalAmount, CreatedAt = DateTime.UtcNow };
        _db.Orders.Add(order);
        await _db.SaveChangesAsync(ct);
        await tx.CommitAsync(ct);
        return new TransactionResult { Success = true, OrderId = order.Id };
    }
}`,
      output: '⚡ HTTP 200 OK — Order #84F19 Committed (EF Core 8 Async: 1.2ms)',
    },
    python: {
      title: 'Python PyTorch — LSTM Sequential Time-Series Tensor',
      lang: 'python',
      code: `# Sequential Deep Learning Tensor Pipeline
import torch
import torch.nn as nn

class LSTMTimeSeriesForecaster(nn.Module):
    def __init__(self, input_dim=1, hidden_dim=64, num_layers=2):
        super(LSTMTimeSeriesForecaster, self).__init__()
        self.lstm = nn.LSTM(input_dim, hidden_dim, num_layers, batch_first=True, dropout=0.2)
        self.fc = nn.Linear(hidden_dim, 1)

    def forward(self, x):
        h0 = torch.zeros(2, x.size(0), 64).to(x.device)
        c0 = torch.zeros(2, x.size(0), 64).to(x.device)
        out, _ = self.lstm(x, (h0, c0))
        return self.fc(out[:, -1, :])

model = LSTMTimeSeriesForecaster()
prediction = model(torch.randn(32, 30, 1))  # (Batch=32, Lookback=30, Feature=1)`,
      output: '🧠 Forward Pass Complete — Output Tensor Shape: torch.Size([32, 1]) (Validation Loss: 0.0014)',
    },
    quant: {
      title: 'Python NumPy — Vectorized Black-Scholes & Greeks Engine',
      lang: 'python',
      code: `# Vectorized Option Pricing Engine with Greeks
import numpy as np
from scipy.stats import norm

def black_scholes_greeks(S, K, T, r, sigma):
    d1 = (np.log(S / K) + (r + 0.5 * sigma**2) * T) / (sigma * np.sqrt(T))
    d2 = d1 - sigma * np.sqrt(T)
    call_price = S * norm.cdf(d1) - K * np.exp(-r * T) * norm.cdf(d2)
    delta = norm.cdf(d1)
    gamma = norm.pdf(d1) / (S * sigma * np.sqrt(T))
    vega = S * norm.pdf(d1) * np.sqrt(T)
    return call_price, delta, gamma, vega

price, delta, gamma, vega = black_scholes_greeks(100.0, 100.0, 1.0, 0.05, 0.20)`,
      output: '📈 Monte Carlo Valuation: Call Price = $10.45 | Delta (Δ) = 0.637 | Gamma (Γ) = 0.0198',
    },
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunCode = () => {
    setExecuting(true);
    setExecResult(null);
    setTimeout(() => {
      setExecuting(false);
      setExecResult(codeSnippets[activeCodeTab].output);
    }, 500);
  };

  return (
    <section
      id="top"
      className="hero section-blue"
      style={{
        paddingTop: '115px',
        paddingBottom: '60px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      {/* Pop-Out Reverse Triangle Profile Avatar with Orbiting Green Dot */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'relative',
          width: '260px',
          height: '260px',
          marginBottom: '28px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          perspective: '1000px',
        }}
      >
        {/* Continuous 360 Y-Axis Rotation & Floating Animation Group */}
        <motion.div
          animate={{ rotateY: [0, 360], y: [0, -8, 0] }}
          transition={{
            rotateY: { duration: 16, repeat: Infinity, ease: 'linear' },
            y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          }}
          style={{
            position: 'relative',
            width: '220px',
            height: '220px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Reverse Triangle Outer Frame (Flat Top Edge, Inverted Vertex Down) */}
          <div
            style={{
              position: 'absolute',
              top: '40px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '210px',
              height: '170px',
              background: 'linear-gradient(135deg, #1b3240 0%, #6da8b7 100%)',
              clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
              filter: 'drop-shadow(0 15px 25px rgba(27, 50, 64, 0.35))',
            }}
          />

          {/* Inner Light Powder Blue Reverse Triangle Background Layer */}
          <div
            style={{
              position: 'absolute',
              top: '44px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '198px',
              height: '158px',
              background: 'linear-gradient(180deg, #9dc0ce 0%, #ffffff 100%)',
              clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
            }}
          />

          {/* Profile Image with Pop-Out Head & Clean Background Blending */}
          <div
            style={{
              position: 'absolute',
              top: '-15px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '198px',
              height: '215px',
              zIndex: 5,
            }}
          >
            <Image
              src="/assets/Uzairahamd.jpeg"
              alt="Uzair Ahmad Profile"
              fill
              sizes="198px"
              priority
              style={{
                objectFit: 'cover',
                objectPosition: 'center 5%',
                mixBlendMode: 'multiply',
                filter: 'contrast(1.08) brightness(1.02) drop-shadow(0 10px 20px rgba(27, 50, 64, 0.3))',
              }}
            />
          </div>

          {/* Green Status Dot Orbiting Exact Reverse Triangle Perimeter */}
          <motion.div
            animate={{
              x: [-105, 105, 0, -105],
              y: [-70, -70, 95, -70],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
              times: [0, 0.4, 0.7, 1],
            }}
            style={{
              position: 'absolute',
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              background: '#10b981',
              border: '3px solid #ffffff',
              boxShadow: '0 0 14px rgba(16, 185, 129, 0.95)',
              zIndex: 10,
            }}
            title="Available for Web Development, Software & AI Roles"
          />
        </motion.div>
      </motion.div>

      {/* Eyebrow Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="eyebrow"
      >
        <Sparkles size={14} /> SOFTWARE • WEB DEVELOPER • AI / ML / DL • QUANT FINANCE
      </motion.div>

      {/* Centered Editorial Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ margin: '12px 0 16px 0', fontSize: 'clamp(3.2rem, 7vw, 5.2rem)', color: '#11222e' }}
      >
        Uzair Ahmad
      </motion.h1>

      {/* Sub-Headline Role */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          fontSize: 'clamp(1.15rem, 2.2vw, 1.4rem)',
          fontWeight: 700,
          color: '#1b3240',
          marginBottom: '14px',
          maxWidth: '840px',
        }}
      >
        Software & Web Developer · AI / ML / Deep Learning · Quantitative Finance & Time-Series Research
      </motion.p>

      {/* Centered Introduction Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="lede"
        style={{
          maxWidth: '760px',
          margin: '0 auto 28px auto',
          textAlign: 'center',
          fontSize: '1.08rem',
          color: '#2a4454',
        }}
      >
        Building high-performance full-stack web applications, scalable enterprise software, intelligent machine learning models, and quantitative financial algorithms.
      </motion.p>

      {/* Action Pill Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center', alignItems: 'center' }}
      >
        <a href="#projects" className="btn-primary">
          Explore Case Studies <ArrowDown size={16} />
        </a>

        <a href="#ai-lab" className="btn-secondary">
          Interactive Labs
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-tool"
          style={{ padding: '12px 20px', borderRadius: 'var(--radius-full)', textDecoration: 'none', color: 'var(--text-hero)', fontWeight: 600 }}
        >
          <FileText size={16} /> Résumé
        </a>
      </motion.div>

      {/* Key Feature Badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '24px',
          marginTop: '32px',
          paddingTop: '20px',
          borderTop: '1px solid rgba(27, 50, 64, 0.15)',
          width: '100%',
          maxWidth: '850px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#1b3240', fontWeight: 600 }}>
          <Globe size={16} style={{ color: '#0284c7' }} />
          <span>Full-Stack Web Development</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#1b3240', fontWeight: 600 }}>
          <Code size={16} style={{ color: '#1b3240' }} />
          <span>Software Engineering</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#1b3240', fontWeight: 600 }}>
          <Cpu size={16} style={{ color: '#10b981' }} />
          <span>AI & Deep Learning</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#1b3240', fontWeight: 600 }}>
          <LineChart size={16} style={{ color: '#6366f1' }} />
          <span>Quant Models</span>
        </div>
      </motion.div>

      {/* Interactive Code & Architecture Inspection Playground Widget */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{
          width: '100%',
          maxWidth: '920px',
          marginTop: '36px',
          background: '#0d161f',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid rgba(157, 192, 206, 0.3)',
          boxShadow: '0 20px 45px -10px rgba(17, 34, 46, 0.25)',
          textAlign: 'left',
          overflow: 'hidden',
        }}
      >
        {/* Code Editor Header */}
        <div
          style={{
            background: '#152230',
            padding: '12px 20px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Terminal size={16} style={{ color: '#6da8b7' }} />
            <span style={{ color: '#ffffff', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
              {codeSnippets[activeCodeTab].title}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={handleRunCode}
              style={{
                background: '#10b981',
                color: '#ffffff',
                border: 'none',
                padding: '5px 12px',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <Play size={12} /> {executing ? 'Executing...' : 'Run Pipeline'}
            </button>

            <button
              onClick={handleCopyCode}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '5px 12px',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              {copied ? <Check size={12} style={{ color: '#10b981' }} /> : <Copy size={12} />}
              {copied ? 'Copied!' : 'Copy Code'}
            </button>
          </div>
        </div>

        {/* Code Language Switcher Tabs */}
        <div style={{ display: 'flex', background: '#0a1017', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <button
            onClick={() => { setActiveCodeTab('dotnet'); setExecResult(null); }}
            style={{
              padding: '10px 18px',
              background: activeCodeTab === 'dotnet' ? '#0d161f' : 'transparent',
              color: activeCodeTab === 'dotnet' ? '#ffffff' : '#6c8899',
              border: 'none',
              borderBottom: activeCodeTab === 'dotnet' ? '2px solid #6da8b7' : '2px solid transparent',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            [ C# .NET CQRS ]
          </button>

          <button
            onClick={() => { setActiveCodeTab('python'); setExecResult(null); }}
            style={{
              padding: '10px 18px',
              background: activeCodeTab === 'python' ? '#0d161f' : 'transparent',
              color: activeCodeTab === 'python' ? '#ffffff' : '#6c8899',
              border: 'none',
              borderBottom: activeCodeTab === 'python' ? '2px solid #10b981' : '2px solid transparent',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            [ PyTorch LSTM Neural Net ]
          </button>

          <button
            onClick={() => { setActiveCodeTab('quant'); setExecResult(null); }}
            style={{
              padding: '10px 18px',
              background: activeCodeTab === 'quant' ? '#0d161f' : 'transparent',
              color: activeCodeTab === 'quant' ? '#ffffff' : '#6c8899',
              border: 'none',
              borderBottom: activeCodeTab === 'quant' ? '2px solid #0284c7' : '2px solid transparent',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            [ Quant Black-Scholes Engine ]
          </button>
        </div>

        {/* Code Content Viewport */}
        <pre
          style={{
            padding: '20px',
            margin: 0,
            color: '#e2e8f0',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            lineHeight: 1.6,
            overflowX: 'auto',
            maxHeight: '260px',
          }}
        >
          <code>{codeSnippets[activeCodeTab].code}</code>
        </pre>

        {/* Live Execution Result Output Line */}
        {execResult && (
          <div
            style={{
              background: '#070b10',
              padding: '12px 20px',
              borderTop: '1px solid rgba(16, 185, 129, 0.3)',
              color: '#10b981',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              fontWeight: 600,
            }}
          >
            {execResult}
          </div>
        )}
      </motion.div>

      {/* 3D Knowledge Core Interactive Viewport */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="scene"
        style={{
          width: '100%',
          maxWidth: '1200px',
          height: '420px',
          minHeight: '380px',
          marginTop: '36px',
          background: 'rgba(255, 255, 255, 0.7)',
          border: '1px solid rgba(255, 255, 255, 0.9)',
          boxShadow: '0 12px 35px -5px rgba(27, 50, 64, 0.1)',
        }}
      >
        <KnowledgeCore3D />
      </motion.div>
    </section>
  );
}
