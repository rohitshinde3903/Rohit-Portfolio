'use client';

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import HandwrittenNote from '../ui/HandwrittenNote';
import { Sparkles, Terminal, Layers, Cloud } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface StackNode {
  id: string;
  name: string;
  category: 'GenAI & LLMs' | 'Backend' | 'Full-Stack' | 'Infra & MLOps';
  description: string;
  tag: string;
  primary?: boolean;
}

const stackNodes: StackNode[] = [
  { id: 'llms', name: 'LLMs', category: 'GenAI & LLMs', description: 'Foundation models, PEFT (LoRA/QLoRA), layer unfreezing, structured prompting & tool use', tag: 'Gemma 3B / Llama 3 / Mistral', primary: true },
  { id: 'rag', name: 'RAG Systems', category: 'GenAI & LLMs', description: 'Contextual retrieval engines, dense embeddings, hybrid search & semantic grounding', tag: 'LlamaIndex / ChromaDB / FAISS', primary: true },
  { id: 'langchain', name: 'LangChain & Agents', category: 'GenAI & LLMs', description: 'Agentic loops, function calling, stateful memory & multi-agent routing', tag: 'Agentic Workflows' },
  { id: 'vllm', name: 'vLLM Serving', category: 'GenAI & LLMs', description: 'PagedAttention serving clusters, KV cache optimizations, -40% inference latency', tag: 'High-Throughput' },
  { id: 'python', name: 'Python 3.x', category: 'Backend', description: 'Advanced async architectures, concurrency, OOP design patterns & rigorous typing', tag: 'Core Weapon', primary: true },
  { id: 'fastapi', name: 'FastAPI', category: 'Backend', description: 'High-performance asynchronous microservices, streaming AI responses & OpenAPI validation', tag: 'Microservices' },
  { id: 'django', name: 'Django & DRF', category: 'Backend', description: 'Enterprise backend architecture, authentication, ORM optimization & scalable REST APIs', tag: 'Enterprise Web' },
  { id: 'postgres', name: 'PostgreSQL', category: 'Backend', description: 'Relational data modeling, indexing, connection pooling & ACID-compliant transactions', tag: 'Relational Store' },
  { id: 'react', name: 'React & Next.js', category: 'Full-Stack', description: 'Server Components, dynamic routing, streaming SSR, architectural state & hydration', tag: 'Modern Frontend', primary: true },
  { id: 'typescript', name: 'TypeScript', category: 'Full-Stack', description: 'Strict type safety, generic systems, interfaces & enterprise frontend scalability', tag: 'Type Safety' },
  { id: 'rest', name: 'REST & WebSockets', category: 'Full-Stack', description: 'Bi-directional real-time telemetry, WebSocket streaming & resilient contract design', tag: 'Protocols' },
  { id: 'gcp', name: 'Google Cloud (GCP)', category: 'Infra & MLOps', description: 'Cloud Run serverless containers, Vertex AI pipelines, Cloud Functions & GPU hosting', tag: 'Cloud Platform', primary: true },
  { id: 'docker', name: 'Docker Containers', category: 'Infra & MLOps', description: 'Multi-stage production Dockerfiles, GPU image containerization & zero-downtime deploys', tag: 'Containerization' },
  { id: 'mlops', name: 'MLOps & CI/CD', category: 'Infra & MLOps', description: 'Automated GitHub Actions pipelines, MLflow experiment tracking & model governance', tag: 'Pipelines' },
];

const categoryIcons = {
  'GenAI & LLMs': Sparkles,
  'Backend': Terminal,
  'Full-Stack': Layers,
  'Infra & MLOps': Cloud,
};

export default function SkillsMap() {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [activeNode, setActiveNode] = useState<StackNode>(stackNodes[0]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const filteredNodes = activeCategory === 'ALL'
    ? stackNodes
    : stackNodes.filter((n) => n.category === activeCategory);

  return (
    <section
      ref={sectionRef}
      id="stack"
      className="py-32 sm:py-44 px-6 sm:px-12 bg-paper text-ink border-t border-paper-border relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-paper-border pb-8">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs text-ink-muted uppercase tracking-widest mb-4">
              <span>04 / TECHNICAL ARSENAL</span>
              <span className="w-10 h-[1px] bg-paper-border" />
              <HandwrittenNote rotate={3}>
                the machinery
              </HandwrittenNote>
            </div>
            <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl tracking-tight leading-none text-ink font-normal uppercase">
              THE <span className="italic text-emerald-deep font-serif">STACK.</span>
            </h2>
          </div>
          <p className="text-ink-muted max-w-sm text-sm font-sans leading-relaxed">
            An interconnected system of generative intelligence, low-latency microservices, and cloud infrastructure engineered for production.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {['ALL', 'GenAI & LLMs', 'Backend', 'Full-Stack', 'Infra & MLOps'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full font-mono text-xs transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-emerald-deep text-paper font-semibold shadow-md'
                  : 'bg-paper-card text-ink-muted hover:text-ink border border-paper-border hover:bg-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive Technical Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Nodes constellation (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {filteredNodes.map((node) => {
              const isSelected = activeNode.id === node.id;
              const Icon = categoryIcons[node.category];

              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNode(node)}
                  onMouseEnter={() => setActiveNode(node)}
                  data-cursor-label="NODE"
                  className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[110px] select-none ${
                    isSelected
                      ? 'bg-white border-emerald-deep shadow-lg shadow-emerald-glow scale-[1.03]'
                      : 'bg-paper-card hover:bg-white border-paper-border hover:border-black/20'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[10px] text-ink-muted tracking-widest uppercase">
                      {node.category.split(' ')[0]}
                    </span>
                    <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-emerald-deep' : 'text-ink-muted'}`} />
                  </div>
                  <div>
                    <h3 className={`font-serif text-lg sm:text-xl font-normal tracking-tight ${isSelected ? 'text-emerald-deep font-semibold' : 'text-ink'}`}>
                      {node.name}
                    </h3>
                    <span className="font-mono text-[10px] text-emerald-deep/80 block mt-0.5">
                      {node.tag}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Node Detail Dossier (5 cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="p-8 rounded-3xl bg-paper-card border border-paper-border shadow-lg relative overflow-hidden">
              <div className="flex items-center gap-2 font-mono text-[11px] text-emerald-deep uppercase tracking-widest mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-accent animate-pulse" />
                <span>INSPECTING NODE // {activeNode.id.toUpperCase()}</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-ink font-normal mb-2">
                {activeNode.name}
              </h3>
              
              <div className="font-mono text-xs text-ink-muted uppercase tracking-wider mb-6">
                DOMAIN // {activeNode.category}
              </div>

              <p className="text-ink-secondary text-sm sm:text-base leading-relaxed font-sans font-light mb-8">
                {activeNode.description}
              </p>

              <div className="pt-6 border-t border-paper-border flex justify-between items-center font-mono text-xs">
                <span className="text-ink-muted">STATUS</span>
                <span className="text-emerald-deep font-semibold">PRODUCTION VERIFIED</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
