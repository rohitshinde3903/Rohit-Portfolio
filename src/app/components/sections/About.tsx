'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { MapPin, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const philosophy = [
  {
    num: '01',
    title: 'Deterministic Guardrails over Blind Generation',
    desc: 'Every production LLM output passes through rigorous verification layers and grounded vector retrieval to eliminate hallucinations.',
  },
  {
    num: '02',
    title: 'Low Latency & Memory Efficiency by Design',
    desc: 'Optimizing vector retrieval indices, model quantization, and async microservices to keep response times sub-second.',
  },
  {
    num: '03',
    title: 'Developer Ergonomics & Enterprise Scalability',
    desc: 'Building maintainable, well-tested Python and TypeScript codebases that scale from MVP to enterprise workloads.',
  },
];

const tags = ['LLM Fine-Tuning', 'RAG Pipelines', 'FastAPI', 'GCP Cloud Run', 'Docker', 'PyTorch'];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: headerRef.current, start: 'top 85%' } }
      );

      gsap.fromTo(
        leftRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: leftRef.current, start: 'top 80%' } }
      );

      gsap.fromTo(
        rightRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2, scrollTrigger: { trigger: rightRef.current, start: 'top 80%' } }
      );

      // Counter parallax
      gsap.to(leftRef.current, {
        y: -30,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1 },
      });
      gsap.to(rightRef.current, {
        y: 30,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1 },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-32 max-w-7xl mx-auto px-6 relative overflow-hidden">
      <div className="hr-glow mb-24" />

      <div ref={headerRef} className="mb-16">
        <span className="section-num block mb-4">02 / About</span>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-text-primary">
          Behind the architecture.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left column */}
        <div ref={leftRef} className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-5 p-5 rounded-2xl bg-bg-card/80 border border-border-dim backdrop-blur-sm">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 border border-border-lite">
              <Image src="/images/rohit-profile.png" alt="Rohit Shinde" fill sizes="112px" priority className="object-cover" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-text-primary">Rohit Shinde</h3>
              <p className="text-xs text-text-muted font-mono flex items-center gap-1 mt-0.5 mb-2">
                <MapPin className="w-3 h-3 text-accent" /> Pune, India
              </p>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-glow border border-border-accent text-accent text-xs font-mono">
                <Sparkles className="w-3 h-3" /> GenAI Architect
              </span>
            </div>
          </div>

          <p className="text-text-secondary text-sm leading-relaxed">
            I believe transformative AI is built at the intersection of rigorous mathematical precision and elegant systems design. My path started in core Python backend engineering before diving deep into deep learning, LLM fine-tuning, and retrieval architectures.
          </p>
          <p className="text-text-muted text-sm leading-relaxed">
            When I'm not tuning retrieval pipelines or fine-tuning models, you'll find me designing resilient distributed services, optimizing quantization parameters, and mentoring upcoming developers.
          </p>

          <div className="flex gap-4">
            <div className="flex-1 p-5 rounded-xl bg-bg-card/60 border border-border-dim">
              <div className="text-2xl font-display font-bold text-text-primary">4+</div>
              <div className="text-[11px] text-text-muted font-mono mt-0.5">Years in AI & Python</div>
            </div>
            <div className="flex-1 p-5 rounded-xl bg-bg-card/60 border border-border-dim">
              <div className="text-2xl font-display font-bold text-accent">9.45</div>
              <div className="text-[11px] text-text-muted font-mono mt-0.5">CGPA • B.Tech AI & DS</div>
            </div>
          </div>
        </div>

        {/* Right column - Philosophy */}
        <div ref={rightRef} className="lg:col-span-7">
          <div className="p-8 md:p-10 rounded-2xl bg-bg-card/60 border border-border-dim backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-accent/[0.05] rounded-full blur-[100px] pointer-events-none" />

            <h3 className="text-xl md:text-2xl font-display font-bold text-text-primary mb-8 relative z-10">
              Engineering Philosophy
            </h3>

            <ul className="space-y-7 relative z-10">
              {philosophy.map((item) => (
                <li key={item.num} className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 text-accent flex items-center justify-center shrink-0 font-mono text-xs mt-0.5">
                    {item.num}
                  </span>
                  <div>
                    <h4 className="font-display font-bold text-text-primary text-base mb-1">{item.title}</h4>
                    <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-border-dim flex flex-wrap gap-2 relative z-10">
              {tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-md bg-bg-elevated text-xs font-mono text-text-muted border border-border-dim">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
