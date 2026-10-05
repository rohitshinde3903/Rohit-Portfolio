'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { image: '/images/1.jpg', title: 'Hackathon Champion', category: 'Competition', date: '2024' },
  { image: '/images/2.jpg', title: 'Technical Keynote', category: 'Presentation', date: '2024' },
  { image: '/images/3.jpg', title: 'Project Innovation Award', category: 'Academic', date: '2024' },
  { image: '/images/4.png', title: 'PROFO Platform Launch', category: 'Product', date: '2024' },
  { image: '/images/6.jpg', title: 'Tech Fest Exhibition', category: 'Symposium', date: '2023' },
  { image: '/images/7.jpg', title: 'Research Team Spotlight', category: 'R&D', date: '2024' },
  { image: '/images/8.jpg', title: 'Workshop Mentorship', category: 'Community', date: '2024' },
  { image: '/images/9.jpg', title: 'Leadership Recognition', category: 'Leadership', date: '2023' },
  { image: '/images/10.jpg', title: 'National Tech Summit', category: 'Conference', date: '2024' },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
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

      cardsRef.current.forEach((card, idx) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 88%' },
          }
        );

        // Differential column parallax
        const col = idx % 3;
        const yDelta = col === 1 ? -35 : col === 2 ? 25 : 0;
        if (yDelta !== 0) {
          gsap.to(card, {
            y: yDelta,
            ease: 'none',
            scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.2 },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="gallery" className="py-32 max-w-7xl mx-auto px-6 relative overflow-hidden">
      <div className="hr-glow mb-24" />

      <div ref={headerRef} className="mb-20">
        <span className="section-num block mb-4">06 / Spotlight</span>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-text-primary">
          Milestones &{' '}<span className="text-gradient italic">recognition.</span>
        </h2>
        <p className="text-text-secondary max-w-lg mt-4 text-sm leading-relaxed">
          Moments from competitive hackathons, research milestones, and mentorship programs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {milestones.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => { cardsRef.current[idx] = el; }}
            data-cursor-label="VIEW"
            className="group rounded-xl overflow-hidden bg-bg-card/60 border border-border-dim hover:border-border-accent transition-all duration-300"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-bg/60 text-text-primary backdrop-blur-sm border border-border-dim">
                    {item.category}
                  </span>
                  <span className="text-[9px] font-mono text-text-muted">{item.date}</span>
                </div>
                <h3 className="text-sm font-display font-bold text-text-primary">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
