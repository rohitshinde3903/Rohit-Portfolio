'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar } from 'lucide-react';

const milestones = [
  {
    image: '/images/1.jpg',
    title: 'Hackathon Champion',
    category: 'Competition',
    date: '2024',
    description: 'First prize for architecting AI-powered computer vision and security automation.',
  },
  {
    image: '/images/2.jpg',
    title: 'Technical Keynote',
    category: 'Presentation',
    date: '2024',
    description: 'Demonstrating generative AI and SLM fine-tuning techniques to student engineers.',
  },
  {
    image: '/images/3.jpg',
    title: 'Project Innovation Award',
    category: 'Academic Honor',
    date: '2024',
    description: 'Recognized for pioneering work in AI-powered Electronic Voting verification.',
  },
  {
    image: '/images/4.png',
    title: 'PROFO Platform Launch',
    category: 'Product Release',
    date: '2024',
    description: 'Public release of full-stack developer portfolio and profile management engine.',
  },
  {
    image: '/images/6.jpg',
    title: 'Tech Fest Exhibition',
    category: 'Symposium',
    date: '2023',
    description: 'Showcasing real-time machine learning inference prototypes to industry mentors.',
  },
  {
    image: '/images/7.jpg',
    title: 'Research Team Spotlight',
    category: 'R&D',
    date: '2024',
    description: 'Collaborative development on synthetic data generation and biometric verification.',
  },
  {
    image: '/images/8.jpg',
    title: 'Workshop Mentorship',
    category: 'Community',
    date: '2024',
    description: 'Mentoring 50+ prospective developers in Python, Django, and modern cloud deployment.',
  },
  {
    image: '/images/9.jpg',
    title: 'Leadership Recognition',
    category: 'Leadership',
    date: '2023',
    description: 'Honored for spearheading engineering workshops and hackathon initiatives.',
  },
  {
    image: '/images/10.jpg',
    title: 'National Tech Summit',
    category: 'Conference',
    date: '2024',
    description: 'Representing university engineering in competitive software development arenas.',
  },
];

export default function AchievementGrid() {
  return (
    <section
      id="achievements"
      className="py-28 max-w-7xl mx-auto px-6 border-t border-border-subtle relative z-10"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-border-subtle pb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated text-xs font-mono text-secondary mb-4 border border-border-subtle">
            <span>06 / VISUAL RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-primary">
            Spotlight &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-300 to-cyan-400 italic font-normal">
              Milestones
            </span>
          </h2>
        </div>
        <p className="text-secondary max-w-md text-sm sm:text-base leading-relaxed font-normal">
          Moments from competitive hackathons, technical symposia, research milestones, and mentorship programs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {milestones.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            data-cursor-label="EXPAND"
            className="p-4 rounded-3xl bg-surface/80 border border-border-subtle hover:border-accent/40 backdrop-blur-xl group transition-all duration-300"
          >
            {/* Image Container with Restrained Soft Geometry */}
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mb-4 bg-surface-elevated border border-border-subtle">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out filter brightness-95 group-hover:brightness-105"
              />
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="px-2.5 py-1 text-[11px] font-mono rounded-full bg-background/80 text-primary backdrop-blur-md shadow-sm border border-border-subtle">
                  {item.category}
                </span>
                <span className="px-2.5 py-1 text-[11px] font-mono rounded-full bg-background/80 text-secondary backdrop-blur-md shadow-sm border border-border-subtle flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-accent" />
                  {item.date}
                </span>
              </div>
            </div>

            <div className="px-2 pb-2">
              <h3 className="text-lg font-display font-bold text-primary mb-1 group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-secondary font-normal leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}