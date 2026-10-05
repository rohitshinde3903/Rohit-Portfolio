'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: 'AI / GenAI Engineer',
    company: 'EduAI Hub',
    location: 'Pune, India',
    period: 'Dec 2025 – Jun 2026',
    description: 'Led development of EduAI SLM, fine-tuning Gemma 3B using LoRA/QLoRA, improving Q&A accuracy by ~38%. Architected production RAG pipelines with LlamaIndex and ChromaDB, reducing hallucinations by ~42%. Cut inference latency by ~40% via vLLM-based serving.',
    tags: ['Gemma 3B', 'LoRA', 'LlamaIndex', 'ChromaDB', 'vLLM', 'FastAPI', 'GCP'],
  },
  {
    role: 'Founder / Full-Stack & AI Engineer',
    company: 'Stones Web Services',
    location: 'Pune, India',
    period: 'Jun 2021 – Present',
    description: 'Founded and delivered tech solutions for 15+ startups: AI engineering, backend architecture, REST APIs, and full-stack products using Django, FastAPI, React, Python with OpenAI, LangChain, RAG, and diffusion models on GCP.',
    tags: ['Founding Engineer', 'Django', 'FastAPI', 'React', 'LangChain', 'GCP', 'Docker'],
  },
  {
    role: 'GenAI & ML Developer',
    company: 'Independent Clients',
    location: 'Remote',
    period: 'Jan 2024 – Present',
    description: 'Delivered end-to-end GenAI and ML solutions for international clients including LLM chatbots, RAG applications, AI analytics, and agentic workflows. Automated batch AI-generation workflows reducing manual effort by ~70%.',
    tags: ['GenAI Agents', 'RAG Pipelines', 'Diffusion Models', 'FastAPI', 'Python'],
  },
  {
    role: 'R&D Specialist — AI',
    company: 'Dr. D. Y. Patil School of Science & Technology',
    location: 'Pune, India',
    period: 'Nov 2024 – Apr 2025',
    description: 'Researched and implemented Computer Vision, NLP, and ML techniques for an AI-powered Electronic Voting System, including real-time biometric verification and fraud detection.',
    tags: ['Computer Vision', 'Biometrics', 'NLP', 'Anomaly Detection'],
  },
  {
    role: 'Technical Trainer — Python & Full Stack',
    company: 'Teknowell EduTech',
    location: 'Pune, India',
    period: 'Aug 2024 – Nov 2024',
    description: 'Trained 50+ students in Python, Django, Flask, React, REST APIs, Git, and deployment. Mentored junior engineers on project architecture and technical interviews.',
    tags: ['Python', 'Django', 'React', 'REST APIs', 'Mentorship'],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: headerRef.current, start: 'top 85%' } }
      );

      // Timeline beam
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', end: 'bottom 80%', scrub: 1 },
          }
        );
      }

      // Cards staggered reveal
      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 85%' },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-32 max-w-7xl mx-auto px-6 relative overflow-hidden">
      <div className="hr-glow mb-24" />

      <div ref={headerRef} className="mb-20">
        <span className="section-num block mb-4">05 / Track Record</span>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-text-primary">
          Experience &{' '}<span className="text-gradient italic">leadership.</span>
        </h2>
        <p className="text-text-secondary max-w-lg mt-4 text-sm leading-relaxed">
          Proven history leading GenAI fine-tuning, vector retrieval architecture, and founding production software systems.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-0 top-4 bottom-4 w-[2px] bg-border-dim overflow-hidden">
          <div
            ref={lineRef}
            className="w-full h-full bg-gradient-to-b from-accent via-accent-light to-cyan origin-top"
          />
        </div>

        <div className="space-y-6 md:pl-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              ref={(el) => { cardsRef.current[idx] = el; }}
              className="p-6 md:p-8 rounded-2xl bg-bg-card/60 border border-border-dim hover:border-border-accent backdrop-blur-sm transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg md:text-xl font-display font-bold text-text-primary group-hover:text-accent transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-text-muted font-mono text-xs mt-0.5">
                    {exp.company} • {exp.location}
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-bg-elevated text-[11px] font-mono text-text-dim border border-border-dim w-fit">
                  {exp.period}
                </span>
              </div>
              <p className="text-text-muted text-sm leading-relaxed mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-0.5 rounded text-[10px] font-mono text-text-dim bg-bg-elevated border border-border-dim">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Academic distinction */}
          <div
            ref={(el) => { cardsRef.current[experiences.length] = el; }}
            className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-bg-card via-bg-elevated to-bg-card border border-accent/20 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 text-accent flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-accent tracking-widest uppercase">Academic • 2021 — 2025</span>
                <h3 className="text-lg md:text-xl font-display font-bold text-text-primary mt-1">
                  B.Tech in AI & Data Science
                </h3>
                <p className="text-xs text-text-muted mt-0.5">Dr. D. Y. Patil Vidyapeeth, Pune</p>
              </div>
            </div>
            <div className="sm:text-right shrink-0">
              <div className="inline-block px-4 py-2 rounded-xl bg-bg-elevated border border-border-dim">
                <div className="text-[10px] font-mono text-text-dim">CGPA</div>
                <div className="text-xl font-display font-bold text-accent">
                  9.45 <span className="text-xs text-text-muted font-mono">/ 10.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
