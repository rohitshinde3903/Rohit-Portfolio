'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ArrowRight, Github, Smartphone } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  category: string;
  year: string;
  tech: string[];
  metric: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  isPlayStore?: boolean;
}

const projects: Project[] = [
  {
    title: 'VidyaAI \u2014 Educational AI Platform',
    category: 'Enterprise GenAI',
    year: '2025\u20132026',
    tech: ['RAG Engine', 'Vector DB', 'Multi-LLM Router', 'FastAPI'],
    metric: 'Dynamic Provider Hot-Switching \u2022 Zero-Downtime',
    description: 'Comprehensive AI platform for schools powered by contextual RAG pipelines and vector database retrieval with multi-provider model switching.',
    image: '/images/vidyaai-web.jpg',
    liveUrl: 'https://vidyaai.eduaihub.in/login',
  },
  {
    title: 'VidyaAI Mobile \u2014 Edge SLM',
    category: 'Edge AI',
    year: '2025\u20132026',
    tech: ['React Native', 'Custom SLM', 'Offline RAG', 'PDF Ingestion'],
    metric: '100% Offline Edge Inference',
    description: 'Offline-first mobile app powered by a custom SLM fine-tuned on CBSE textbook data with on-device execution and offline RAG pipeline.',
    image: '/images/vidyaai-app.jpg',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.Vidya_AI.app&hl=en_IN',
    isPlayStore: true,
  },
  {
    title: 'Stones Academy',
    category: 'EdTech Platform',
    year: '2025\u20132026',
    tech: ['Next.js', 'Razorpay', 'SHA-256 Ledger', 'Course Distribution'],
    metric: 'Razorpay Integrated \u2022 Tamper-Proof Certs',
    description: 'Course hosting platform for 50+ premier schools with payment gateway, student portals, and tamper-proof cryptographic certificate system.',
    image: '/images/stones-academy.jpg',
    liveUrl: 'https://stonesacademy.vercel.app/',
  },
  {
    title: 'EduAI SLM Fine-Tuning',
    category: 'SLMs & Vector RAG',
    year: '2025\u20132026',
    tech: ['PyTorch', 'Gemma 3B', 'LoRA/QLoRA', 'LlamaIndex', 'vLLM'],
    metric: '+38% Accuracy \u2022 -42% Hallucinations',
    description: 'Fine-tuned Gemma 3B using LoRA and QLoRA for educational curricula with LlamaIndex and ChromaDB vector retrieval pipeline.',
    image: '/images/evs.png',
    githubUrl: 'https://github.com/rohitshinde3903',
  },
  {
    title: 'AI Electronic Voting',
    category: 'CV & Security',
    year: '2024\u20132025',
    tech: ['Python', 'Django', 'OpenCV', 'Facial Biometrics', '2FA'],
    metric: 'Biometric Verification & 2FA',
    description: 'Tamper-proof voting platform with real-time facial biometric authentication, dual-factor security, and anomaly-detection ML.',
    image: '/images/evs.png',
    githubUrl: 'https://github.com/rohitshinde3903/EVS-Flask.git',
  },
  {
    title: 'PROFO \u2014 Portfolio Engine',
    category: 'Full-Stack Web',
    year: '2024',
    tech: ['Django', 'Python', 'REST APIs', 'Tailwind CSS'],
    metric: 'Unified Engineering Profile',
    description: 'Developer profile management to consolidate resume, GitHub, and verified projects into a single authenticated link.',
    image: '/images/profo.png',
    githubUrl: 'https://github.com/rohitshinde3903/PROFO.git',
    liveUrl: 'https://profoui.onrender.com/',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: headerRef.current, start: 'top 85%' } }
      );

      cardsRef.current.forEach((card, idx) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 85%' },
          }
        );

        // Differential parallax
        const isOdd = idx % 2 === 1;
        gsap.to(card, {
          y: isOdd ? -30 : 20,
          ease: 'none',
          scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.2 },
        });
      });

      // Parallax inside images
      imageRefs.current.forEach((img) => {
        if (!img) return;
        gsap.fromTo(
          img,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: 'none',
            scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: 1 },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-32 max-w-7xl mx-auto px-6 relative overflow-hidden">
      <div className="hr-glow mb-24" />

      <div ref={headerRef} className="mb-20">
        <span className="section-num block mb-4">03 / Featured Work</span>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-text-primary max-w-4xl">
          Production AI &{' '}
          <span className="text-gradient italic">case studies.</span>
        </h2>
        <p className="text-text-secondary max-w-lg mt-4 text-sm sm:text-base leading-relaxed">
          Systems engineered for enterprise accuracy, low latency, and startup scale.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((project, idx) => (
          <div
            key={idx}
            ref={(el) => { cardsRef.current[idx] = el; }}
            className="group p-6 md:p-8 rounded-2xl bg-bg-card/60 border border-border-dim hover:border-border-accent backdrop-blur-sm transition-all duration-500"
          >
            {/* Category & Year */}
            <div className="flex items-center justify-between mb-5">
              <span className="px-3 py-1 rounded-full bg-bg-elevated text-[11px] font-mono text-accent border border-border-dim">
                {project.category}
              </span>
              <span className="text-[11px] font-mono text-text-dim">{project.year}</span>
            </div>

            {/* Image */}
            <div className="relative h-48 sm:h-56 w-full rounded-xl overflow-hidden mb-5 border border-border-dim bg-bg-elevated">
              <div
                ref={(el) => { imageRefs.current[idx] = el; }}
                className="relative w-full h-[120%] -top-[10%]"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-50 pointer-events-none" />
            </div>

            {/* Title & Desc */}
            <h3 className="text-xl sm:text-2xl font-display font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tech.map((tag, i) => (
                <span key={i} className="px-2 py-0.5 rounded text-[10px] font-mono text-text-dim bg-bg-elevated border border-border-dim">
                  {tag}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="pt-5 border-t border-border-dim flex items-center justify-between">
              <span className="text-xs font-mono text-accent">{project.metric}</span>
              <div className="flex items-center gap-2">
                {project.githubUrl && (
                  <MagneticButton strength={0.3}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-label="CODE"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-[11px] font-mono text-text-muted hover:text-text-primary transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Code
                    </a>
                  </MagneticButton>
                )}
                {project.liveUrl && (
                  <MagneticButton strength={0.3}>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-label={project.isPlayStore ? 'APP' : 'LIVE'}
                      className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[11px] font-mono hover:bg-accent/20 transition-colors"
                    >
                      {project.isPlayStore ? (
                        <><Smartphone className="w-3 h-3" /> Play Store</>
                      ) : (
                        <>Live <ArrowRight className="w-3 h-3" /></>
                      )}
                    </a>
                  </MagneticButton>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
