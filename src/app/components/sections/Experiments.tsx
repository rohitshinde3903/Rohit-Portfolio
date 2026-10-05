'use client';

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Sparkles, Brain, Cpu, Radio, Network, Eye, ArrowUpRight } from 'lucide-react';
import HandwrittenNote from '../ui/HandwrittenNote';

gsap.registerPlugin(ScrollTrigger);

interface Experiment {
  id: string;
  number: string;
  title: string;
  category: string;
  status: 'EXPLORING' | 'PROTOTYPING' | 'RESEARCHING';
  hypothesis: string;
  tech: string[];
  icon: any;
  metric?: string;
}

const experiments: Experiment[] = [
  {
    id: 'agentic-memory',
    number: '01',
    title: 'Hierarchical Memory for Autonomous Agents',
    category: 'Agentic AI',
    status: 'RESEARCHING',
    hypothesis:
      'Can long-horizon autonomous agents maintain coherent personas and factual consistency across months using episodic graph memory instead of flat context windows?',
    tech: ['Mem0', 'Neo4j', 'LangGraph', 'Vector DBs'],
    icon: Brain,
    metric: 'Target: 98% Recall',
  },
  {
    id: 'edge-slms',
    number: '02',
    title: 'Sub-100ms SLMs on Consumer Hardware',
    category: 'Edge AI & Inference',
    status: 'PROTOTYPING',
    hypothesis:
      'Benchmarking 4-bit quantizations of Gemma-3B & Phi-4 on local Apple Silicon & RTX GPUs with zero external API latency for offline privacy-first agents.',
    tech: ['Ollama', 'vLLM', 'GGUF', 'MLX'],
    icon: Cpu,
    metric: 'Sub-50ms TTFT',
  },
  {
    id: 'voice-multimodal',
    number: '03',
    title: 'Voice-First Duplex Spatial Agents',
    category: 'Multimodal AI',
    status: 'EXPLORING',
    hypothesis:
      'Building zero-friction conversational agents with WebRTC streaming and bidirectional interruptions that feel genuinely human rather than turn-based walkie-talkies.',
    tech: ['LiveKit', 'WebRTC', 'FastAPI', 'Whisper'],
    icon: Radio,
    metric: '<300ms End-to-End',
  },
  {
    id: 'swarm-intelligence',
    number: '04',
    title: 'Consensus Protocols for Agent Swarms',
    category: 'Distributed Systems',
    status: 'RESEARCHING',
    hypothesis:
      'Designing fault-tolerant voting and validation mechanisms for teams of specialized AI agents doing automated code review and security audits.',
    tech: ['CrewAI', 'AutoGen', 'PydanticAI'],
    icon: Network,
    metric: '99.4% Decision Validity',
  },
  {
    id: 'generative-interfaces',
    number: '05',
    title: 'Self-Synthesizing Generative UIs',
    category: 'Creative Tech',
    status: 'PROTOTYPING',
    hypothesis:
      'User interfaces that re-render and morph their layout dynamically in real-time according to user intent, cognitive load, and semantic task requirements.',
    tech: ['React 19', 'Tailwind', 'Structured Outputs', 'Vercel AI SDK'],
    icon: Eye,
    metric: 'Dynamic DOM Morphing',
  },
  {
    id: 'slm-reasoning',
    number: '06',
    title: 'Test-Time Compute Scaling on 3B Models',
    category: 'Model Architecture',
    status: 'EXPLORING',
    hypothesis:
      'Can small 3B models outperform 70B models on specific reasoning benchmarks by employing Monte Carlo tree search and verification loops at inference?',
    tech: ['PyTorch', 'Hugging Face', 'LoRA', 'Gemma 3B'],
    icon: Sparkles,
    metric: '3.2x Reasoning Gain',
  },
];

export default function Experiments() {
  const [activeExp, setActiveExp] = useState<string>(experiments[0].id);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
          },
        }
      );

      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 85%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="lab"
      className="py-32 sm:py-44 px-6 sm:px-12 bg-paper text-ink border-t border-paper-border relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-paper-border pb-8">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs text-ink-muted uppercase tracking-widest mb-4">
              <span>06 / EXPERIMENTAL LAB</span>
              <span className="w-10 h-[1px] bg-paper-border" />
              <span className="text-emerald-deep font-semibold">RESEARCH & EXPLORATION</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-ink tracking-tight font-normal">
              Things I&apos;m Curious About.
            </h2>
          </div>

          <div className="relative">
            <p className="max-w-md font-sans text-sm text-ink-muted leading-relaxed">
              When I&apos;m not shipping production systems, I explore emergent questions in agentic memory, edge inference, and dynamic interfaces.
            </p>
            <div className="hidden lg:block absolute -top-12 -right-6">
              <HandwrittenNote
                text="weekend rabbit holes & hypotheses"
                arrowDirection="down-left"
                rotation={-3}
              />
            </div>
          </div>
        </div>

        {/* Experiments Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiments.map((exp) => {
            const Icon = exp.icon;
            const isHovered = activeExp === exp.id;

            return (
              <div
                key={exp.id}
                onMouseEnter={() => setActiveExp(exp.id)}
                data-cursor-label="EXPLORE"
                className={`group p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  isHovered
                    ? 'bg-paper-card border-emerald-deep/40 shadow-xl shadow-black/5 -translate-y-1'
                    : 'bg-paper-card/60 border-paper-border hover:border-emerald-deep/20'
                }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-paper-border">
                    <span className="font-mono text-xs text-ink-muted">{exp.number} / {exp.category}</span>
                    <span
                      className={`font-mono text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold ${
                        exp.status === 'PROTOTYPING'
                          ? 'bg-[#25C98A]/15 text-emerald-deep border border-[#25C98A]/30'
                          : exp.status === 'RESEARCHING'
                          ? 'bg-amber-500/10 text-amber-800 border border-amber-500/20'
                          : 'bg-blue-500/10 text-blue-800 border border-blue-500/20'
                      }`}
                    >
                      {exp.status}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-paper border border-paper-border flex items-center justify-center shrink-0 text-emerald-deep group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-serif font-medium text-ink leading-snug group-hover:text-emerald-deep transition-colors">
                      {exp.title}
                    </h3>
                  </div>

                  {/* Hypothesis */}
                  <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed mb-6">
                    {exp.hypothesis}
                  </p>
                </div>

                {/* Footer / Tech & Metric */}
                <div>
                  {exp.metric && (
                    <div className="mb-4 font-mono text-[11px] text-emerald-deep font-semibold bg-emerald-light/40 px-3 py-1.5 rounded-md inline-block">
                      {exp.metric}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-paper-border">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] px-2 py-0.5 rounded bg-paper border border-paper-border text-ink-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Note */}
        <div className="mt-14 p-6 rounded-2xl bg-paper-card border border-paper-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25C98A] opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0B3D2E]" />
            </span>
            <span className="font-mono text-xs text-ink">
              Open to collaborative research on test-time compute & local SLM deployment.
            </span>
          </div>

          <a
            href="mailto:rohitshinde3903@gmail.com?subject=Collaborative%20Research%20Question"
            data-cursor-label="TALK"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-emerald-deep hover:underline"
          >
            <span>DISCUSS AN IDEA</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
