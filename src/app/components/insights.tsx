'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ArrowRight, Github, ExternalLink, Smartphone } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';
import { projectsData } from '@/data/projects';

gsap.registerPlugin(ScrollTrigger);

const projects = projectsData;

export default function InsightsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const watermarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Card entry reveals and differential column parallax
      cardsRef.current.forEach((card, idx) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );

        // On desktop, odd cards have a differential scrub rate to create an editorial staggered scroll
        const isOdd = idx % 2 === 1;
        gsap.to(card, {
          y: isOdd ? -40 : 25,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      });

      // 2. Parallax inside image windows
      imageRefs.current.forEach((img) => {
        if (!img) return;
        gsap.fromTo(
          img,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: 'none',
            scrollTrigger: {
              trigger: img,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          }
        );
      });

      // 3. Subtle background watermark horizontal parallax drift
      if (watermarkRef.current) {
        gsap.to(watermarkRef.current, {
          x: 90,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-28 max-w-7xl mx-auto px-6 border-t border-border-subtle relative z-10 overflow-hidden"
    >
      {/* Background Parallax Watermark */}
      <div
        ref={watermarkRef}
        className="absolute -left-20 top-1/2 -translate-y-1/2 font-display text-[13rem] md:text-[17rem] font-black text-white/[0.02] pointer-events-none select-none tracking-tighter leading-none -z-10"
        aria-hidden="true"
      >
        SYSTEMS
      </div>

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-border-subtle pb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated text-xs font-mono text-secondary mb-4 border border-border-subtle">
            <span>03 / FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-primary">
            Production AI &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-300 to-cyan-400 italic font-normal">
              Full-Stack Case Studies
            </span>
          </h2>
        </div>
        <p className="text-secondary max-w-md text-sm sm:text-base leading-relaxed font-normal">
          A curated selection of high-impact systems engineered for enterprise accuracy, low latency, and scaling startups.
        </p>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((project, idx) => (
          <div
            key={idx}
            ref={(el) => {
              cardsRef.current[idx] = el;
            }}
            className="p-8 md:p-10 rounded-3xl bg-surface/80 border border-border-subtle hover:border-accent/40 backdrop-blur-2xl shadow-xl flex flex-col justify-between group transition-all duration-500"
          >
            <div>
              {/* Category & Year Header */}
              <div className="flex items-center justify-between mb-6">
                <span className="px-3.5 py-1 rounded-full bg-surface-elevated text-xs font-mono text-accent border border-border-subtle">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-muted">{project.year}</span>
              </div>

              {/* Large Immersive Image Preview with Parallax Window */}
              {project.image && (
                <div
                  data-cursor-label="EXPLORE"
                  className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden mb-6 border border-border-subtle bg-surface-elevated"
                >
                  <div
                    ref={(el) => {
                      imageRefs.current[idx] = el;
                    }}
                    className="relative w-full h-[120%] -top-[10%]"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>
              )}

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>

              <p className="text-secondary mb-6 leading-relaxed text-sm sm:text-base font-normal">
                {project.description}
              </p>

              {/* Architectural Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {(project.tags || project.tech || []).map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md bg-surface-elevated text-xs font-mono text-secondary border border-border-subtle"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Footer with Metric & Magnetic Action Links */}
            <div className="pt-6 border-t border-border-subtle flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs sm:text-sm font-mono text-accent font-semibold">
                {project.metric}
              </span>

              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <MagneticButton strength={0.3}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-label="CODE"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-secondary hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
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
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-accent text-primary text-xs font-semibold hover:bg-accent-violet transition-all shadow-md shadow-accent/20"
                    >
                      {project.isPlayStore ? (
                        <>
                          <Smartphone className="w-3.5 h-3.5" />
                          <span>Google Play</span>
                        </>
                      ) : (
                        <>
                          <span>View Live</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </>
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
