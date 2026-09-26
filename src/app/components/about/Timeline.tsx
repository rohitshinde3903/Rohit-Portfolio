'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, Sparkles, ExternalLink, Calendar, Trophy } from 'lucide-react';

const milestones = [
  {
    image: '/images/1.jpg',
    title: 'Hackathon Champion',
    category: 'Competition',
    date: '2024',
    description: 'First prize for architecting AI-powered computer vision and security automation.'
  },
  {
    image: '/images/2.jpg',
    title: 'Technical Presentation',
    category: 'Keynote',
    date: '2024',
    description: 'Demonstrating generative AI and SLM fine-tuning techniques to student engineers.'
  },
  {
    image: '/images/3.jpg',
    title: 'Project Innovation Award',
    category: 'Academic Honor',
    date: '2024',
    description: 'Recognized for pioneering work in AI-powered Electronic Voting verification.'
  },
  {
    image: '/images/4.png',
    title: 'PROFO Platform Launch',
    category: 'Product Release',
    date: '2024',
    description: 'Public release of full-stack developer portfolio and profile management engine.'
  },
  {
    image: '/images/6.jpg',
    title: 'Tech Fest Exhibition',
    category: 'Symposium',
    date: '2023',
    description: 'Showcasing real-time machine learning inference prototypes to industry mentors.'
  },
  {
    image: '/images/7.jpg',
    title: 'Research Team Spotlight',
    category: 'R&D',
    date: '2024',
    description: 'Collaborative development on synthetic data generation and biometric verification.'
  },
  {
    image: '/images/8.jpg',
    title: 'Workshop Mentorship',
    category: 'Community',
    date: '2024',
    description: 'Mentoring 50+ prospective developers in Python, Django, and modern cloud deployment.'
  },
  {
    image: '/images/9.jpg',
    title: 'Leadership Recognition',
    category: 'Leadership',
    date: '2023',
    description: 'Honored for spearheading engineering workshops and hackathon initiatives.'
  },
  {
    image: '/images/10.jpg',
    title: 'National Tech Summit',
    category: 'Conference',
    date: '2024',
    description: 'Representing university engineering in competitive software development arenas.'
  },
];

const AchievementGrid = () => {
  return (
    <section id="achievements" className="relative py-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-purple-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-600/10 blur-[130px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 mb-4">
            <Trophy className="h-3.5 w-3.5 text-purple-400" />
            <span className="text-xs sm:text-sm font-mono text-purple-300">Milestones & Recognition</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Spotlight & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">Accomplishments</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Moments from hackathons, technical conferences, academic research, and engineering awards.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestones.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 hover:border-purple-500/50 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(147,51,234,0.25)] transition-all duration-500"
            >
              {/* Image Frame with Aspect Ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-950">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                
                {/* Top Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 text-[11px] font-mono rounded-full bg-black/70 border border-purple-500/40 text-purple-300 backdrop-blur-md">
                    {item.category}
                  </span>
                  <span className="px-2.5 py-1 text-[11px] font-mono rounded-full bg-black/70 border border-white/20 text-gray-300 backdrop-blur-md flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    {item.date}
                  </span>
                </div>
              </div>

              {/* Card Footer Content */}
              <div className="p-5 relative z-10 bg-gradient-to-b from-transparent to-black">
                <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AchievementGrid;