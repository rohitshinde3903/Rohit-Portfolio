'use client';

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import HandwrittenNote from '../ui/HandwrittenNote';
import { ArrowUpRight, Cpu, Network, Layout, Terminal, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    num: '01',
    title: 'AI SYSTEMS',
    subtitle: 'Small Language Models & Domain Fine-Tuning',
    desc: 'Fine-tuning open SLMs (Gemma, Llama) with LoRA/QLoRA, progressive layer unfreezing, deterministic vector RAG grounding, and high-throughput vLLM serving clusters.',
    icon: Cpu,
    tag: 'PyTorch / LlamaIndex / vLLM',
  },
  {
    num: '02',
    title: 'AGENTIC WORKFLOWS',
    subtitle: 'Autonomous Tool-Calling & Context Engines',
    desc: 'Multi-agent orchestration pipelines with stateful memory, structured function calling, dynamic model hot-switching, and self-correcting evaluation loops.',
    icon: Network,
    tag: 'LangChain / Multi-Agent / CoT',
  },
  {
    num: '03',
    title: 'FULL-STACK PRODUCTS',
    subtitle: 'High-Concurrency Backends & Scalable Web',
    desc: 'Production applications built with Python (FastAPI & Django) and modern React/Next.js, containerized with Docker, automated via CI/CD, and deployed on GCP Cloud Run.',
    icon: Layout,
    tag: 'FastAPI / Django / Next.js',
  },
  {
    num: '04',
    title: 'AUTOMATION & INFRA',
    subtitle: 'MLOps Pipelines & Low-Latency APIs',
    desc: 'Batch processing engines reducing operational overhead by 70%, vector database indexing, continuous model evaluation, and tamper-proof cryptographic workflows.',
    icon: Terminal,
    tag: 'GCP / Docker / ChromaDB',
  },
  {
    num: '05',
    title: 'EXPERIMENTAL TECHNOLOGY',
    subtitle: 'Computer Vision & Edge Offline SLMs',
    desc: 'On-device offline inference for mobile hardware, real-time facial biometric authentication, dual-factor cryptographic verification, and creative generative interfaces.',
    icon: Sparkles,
    tag: 'React Native / OpenCV / Edge AI',
  },
];

export default function WhatIBuild() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, idx) => {
        if (!item) return;
        gsap.fromTo(
          item,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 88%',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="what-i-build"
      className="py-32 sm:py-44 px-6 sm:px-12 bg-paper text-ink border-t border-paper-border relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-paper-border pb-8">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs text-ink-muted uppercase tracking-widest mb-4">
              <span>03 / ARCHITECTURAL SCOPE</span>
              <span className="w-10 h-[1px] bg-paper-border" />
              <HandwrittenNote rotate={-2}>
                capabilities
              </HandwrittenNote>
            </div>
            <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl tracking-tight leading-none text-ink font-normal uppercase">
              WHAT I <span className="italic text-emerald-deep font-serif">BUILD.</span>
            </h2>
          </div>
          <p className="text-ink-muted max-w-sm text-sm font-sans leading-relaxed">
            From foundational model adaptation to production user-facing software, engineering resilient intelligence at every tier.
          </p>
        </div>

        {/* Category Rows */}
        <div className="divide-y divide-paper-border">
          {categories.map((item, idx) => {
            const Icon = item.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={item.num}
                ref={(el) => { itemsRef.current[idx] = el; }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                data-cursor-label="EXPLORE"
                className="py-10 sm:py-14 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  
                  {/* Left: Number & Big Title */}
                  <div className="flex items-baseline gap-6 sm:gap-10">
                    <span className="font-mono text-sm sm:text-base text-emerald-deep/70 font-semibold">
                      /{item.num}
                    </span>
                    <div>
                      <h3 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ink group-hover:text-emerald-deep transition-colors tracking-tight font-normal">
                        {item.title}
                      </h3>
                      <div className="font-mono text-xs text-ink-muted mt-2 tracking-wide uppercase">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  {/* Right: Detailed Description & Tag */}
                  <div className="lg:max-w-md lg:ml-auto">
                    <p className="text-ink-secondary text-sm sm:text-base leading-relaxed font-sans mb-4">
                      {item.desc}
                    </p>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-paper-card border border-paper-border font-mono text-[11px] text-emerald-deep">
                        <Icon className="w-3 h-3" />
                        {item.tag}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-emerald-deep group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
