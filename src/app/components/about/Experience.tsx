'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'AI / GenAI Engineer',
    company: 'EduAI Hub',
    location: 'Pune, India',
    period: 'Dec 2025 – Jun 2026',
    highlights: [
      'Led development of EduAI SLM, fine-tuning Gemma 3B using LoRA, QLoRA, improving accuracy by ~38%',
      'Architected production RAG pipelines using LlamaIndex and ChromaDB, reducing hallucinations by ~42%',
      'Reduced LLM inference latency by ~40% through QLoRA, PEFT, and vLLM-based optimization',
      'Developed and deployed GenAI microservices using FastAPI, Docker, and GCP Cloud Run',
    ],
    tags: ['LLMs', 'RAG', 'Fine-Tuning', 'FastAPI', 'GCP'],
  },
  {
    role: 'GenAI & ML Developer – Freelance',
    company: 'Independent Projects',
    location: 'Remote',
    period: 'Jan 2024 – Present',
    highlights: [
      'Delivered end-to-end GenAI and ML solutions for international clients',
      'Designed AI solutions from requirements through deployment and optimization',
      'Automated batch AI-generation workflows, reducing manual effort by ~70%',
    ],
    tags: ['GenAI', 'ML', 'Python', 'FastAPI'],
  },
  {
    role: 'Founder / Python Full-Stack & AI Engineer',
    company: 'Stones Web Services',
    location: 'Pune, India',
    period: 'Jun 2021 – Present',
    highlights: [
      'Founded and delivered technology solutions for 15+ startups',
      'Designed production apps using Django, FastAPI, React with OpenAI APIs, LangChain, RAG',
      'Deployed production applications on GCP using Docker and CI/CD',
    ],
    tags: ['Django', 'FastAPI', 'React', 'AI/ML'],
  },
  {
    role: 'R&D Specialist – Artificial Intelligence',
    company: 'Dr. D. Y. Patil School of Science & Technology',
    location: 'Pune, India',
    period: 'Nov 2024 – Apr 2025',
    highlights: [
      'Researched Computer Vision, NLP, and ML techniques for AI-powered Electronic Voting System',
      'Contributed to system architecture involving facial recognition and analytics',
    ],
    tags: ['Computer Vision', 'NLP', 'ML'],
  },
  {
    role: 'Technical Trainer – Python & Full Stack',
    company: 'Teknowell EduTech',
    location: 'Pune, India',
    period: 'Aug 2024 – Nov 2024',
    highlights: [
      'Trained 50+ students in Python, Django, Flask, React, REST APIs, Git',
      'Mentored students on project development, debugging, and deployment',
    ],
    tags: ['Python', 'Django', 'Teaching'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative py-12 sm:py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-500 blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full bg-blue-500 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-gray-800 mb-3 sm:mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Briefcase className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-purple-400" />
            <span className="text-xs sm:text-sm font-medium text-purple-400">
              Professional Journey
            </span>
          </motion.div>

          <motion.h2
            className="text-2xl sm:text-4xl font-bold text-white mb-2 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Work <span className="text-purple-500">Experience</span>
          </motion.h2>

          <motion.div
            className="flex justify-center mb-4 sm:mb-6"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
          </motion.div>

          <motion.p
            className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Building AI-powered products and leading engineering teams across startups and research
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Vertical timeline line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-blue-500 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-12 sm:pl-16 pb-10 sm:pb-14 last:pb-0"
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div className="absolute left-2.5 sm:left-4 top-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 border-2 border-black ring-2 ring-purple-500/30" />

              {/* Card */}
              <motion.div
                className="bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 p-4 sm:p-6 hover:border-purple-500/30 transition-all duration-300"
                whileHover={{ y: -3, boxShadow: '0 10px 30px -10px rgba(126, 34, 206, 0.2)' }}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-3 sm:mb-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">{exp.role}</h3>
                    <p className="text-purple-400 font-medium text-sm sm:text-base">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-0.5">
                    <span className="inline-flex items-center gap-1 text-xs sm:text-sm text-gray-400">
                      <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs sm:text-sm text-gray-500">
                      <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                  {exp.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs sm:text-sm text-gray-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-500/60 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs bg-gray-800 rounded-full text-gray-300 hover:bg-purple-900/30 hover:text-purple-300 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education */}
        <motion.div
          className="mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-gray-800 mb-3 sm:mb-4">
              <GraduationCap className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-400" />
              <span className="text-xs sm:text-sm font-medium text-blue-400">Education</span>
            </div>
          </div>

          <motion.div
            className="bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 p-4 sm:p-6 hover:border-blue-500/30 transition-all duration-300 max-w-2xl mx-auto"
            whileHover={{ y: -3, boxShadow: '0 10px 30px -10px rgba(59, 130, 246, 0.2)' }}
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="bg-blue-900/30 p-2 sm:p-3 rounded-lg flex-shrink-0">
                <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  B.Tech – Artificial Intelligence & Data Science
                </h3>
                <p className="text-blue-400 font-medium text-sm sm:text-base">
                  Dr. D. Y. Patil Vidyapeeth, Pune
                </p>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-1.5 sm:mt-2">
                  <span className="inline-flex items-center gap-1 text-xs sm:text-sm text-gray-400">
                    <Calendar className="h-3 w-3" />
                    2021 – 2025
                  </span>
                  <span className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs bg-blue-900/30 rounded-full text-blue-300 font-medium">
                    CGPA: 9.45 / 10
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
