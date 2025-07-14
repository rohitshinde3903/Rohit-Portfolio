'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaPython, FaReact, FaNodeJs, FaJsSquare
} from 'react-icons/fa';
import {
  SiMongodb, SiNextdotjs, SiGit,
  SiGithub, SiPostgresql, SiFirebase, SiTypescript, SiVercel
} from 'react-icons/si';

// Icon components for custom JSX icons
const AWSIcon = () => (
  <div className="bg-gray-900 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center">
    <span className="text-orange-500 font-bold text-xs">AWS</span>
  </div>
);

const DockerIcon = () => (
  <div className="bg-gray-900 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center">
    <span className="text-blue-400 font-bold text-xs">DC</span>
  </div>
);

const TFIcon = () => (
  <div className="bg-gray-900 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center">
    <span className="text-orange-500 font-bold text-xs">TF</span>
  </div>
);

const PTIcon = () => (
  <div className="bg-gray-900 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center">
    <span className="text-red-500 font-bold text-xs">PT</span>
  </div>
);

const PDIcon = () => (
  <div className="bg-gray-900 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center">
    <span className="text-purple-500 font-bold text-xs">PD</span>
  </div>
);

// TypeScript types
type Skill = {
  name: string;
  info: string;
  icon: JSX.Element;
  level: number;
};

type Category = 'Languages & Frameworks' | 'Cloud & DevOps' | 'AI & Data' | 'Databases';

const categorizedSkills: Record<Category, Skill[]> = {
  "Languages & Frameworks": [
    { name: 'Python', info: 'Advanced scripting & backend development', icon: <FaPython className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />, level: 90 },
    { name: 'JavaScript', info: 'Modern web development', icon: <FaJsSquare className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300" />, level: 95 },
    { name: 'TypeScript', info: 'Type-safe JavaScript', icon: <SiTypescript className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />, level: 85 },
    { name: 'React', info: 'Component-based UI', icon: <FaReact className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />, level: 95 },
    { name: 'Next.js', info: 'React framework', icon: <SiNextdotjs className="w-6 h-6 sm:w-8 sm:h-8 text-white" />, level: 90 },
    { name: 'Node.js', info: 'JavaScript runtime', icon: <FaNodeJs className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />, level: 85 },
  ],
  "Cloud & DevOps": [
    { name: 'AWS', info: 'Cloud services', icon: <AWSIcon />, level: 80 },
    { name: 'Docker', info: 'Containerization', icon: <DockerIcon />, level: 85 },
    { name: 'Git', info: 'Version control', icon: <SiGit className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400" />, level: 95 },
    { name: 'GitHub', info: 'Code hosting', icon: <SiGithub className="w-6 h-6 sm:w-8 sm:h-8 text-white" />, level: 90 },
    { name: 'Vercel', info: 'Static sites', icon: <SiVercel className="w-6 h-6 sm:w-8 sm:h-8 text-white" />, level: 85 },
  ],
  "AI & Data": [
    { name: 'TensorFlow', info: 'ML framework', icon: <TFIcon />, level: 75 },
    { name: 'PyTorch', info: 'Deep learning', icon: <PTIcon />, level: 70 },
    { name: 'Pandas', info: 'Data analysis', icon: <PDIcon />, level: 85 },
  ],
  "Databases": [
    { name: 'MongoDB', info: 'NoSQL database', icon: <SiMongodb className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />, level: 85 },
    { name: 'PostgreSQL', info: 'Relational DB', icon: <SiPostgresql className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />, level: 80 },
    { name: 'Firebase', info: 'BaaS platform', icon: <SiFirebase className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />, level: 80 },
  ]
};

const certifications = [
  {
    title: 'Python Full Stack',
    issuer: 'Professional Cert',
    date: '2024',
    description: 'Hands-on experience building full-stack applications from scratch.',
    skills: ['Python', 'Django', 'APIs']
  },
  {
    title: 'Google Data Analytics',
    issuer: 'Google Cert',
    date: '2024',
    description: 'Courses focused on data exploration and model building.',
    skills: ['Data Analysis', 'ML', 'Statistics']
  }
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Languages & Frameworks");

  return (
    <div id="skills" className="bg-gradient-to-b from-black via-gray-900 to-black py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-gray-800 mb-3 sm:mb-4">
            <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-purple-400">Technical Expertise</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2 sm:mb-4">
            My <span className="text-purple-500">Technology</span> Stack
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            Skills I've mastered to build innovative solutions
          </p>
        </motion.div>

        <div className="relative mb-6 sm:mb-10">
          <div className="flex overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:justify-center gap-2 sm:gap-3 hide-scrollbar">
            {Object.keys(categorizedSkills).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category as Category)}
                className={`flex-shrink-0 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.split(' ')[0]}
                <span className="hidden sm:inline"> {category.split(' ').slice(1).join(' ')}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 mb-12 sm:mb-20">
          {categorizedSkills[activeCategory].map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black rounded-lg sm:rounded-xl border border-gray-800 p-3 sm:p-5 hover:border-purple-500/30 transition-all"
              whileHover={{ y: -3 }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
                <div className="bg-gray-800 p-1 sm:p-2 rounded-md sm:rounded-lg">
                  {skill.icon}
                </div>
                <h3 className="font-bold text-white text-sm sm:text-base">{skill.name}</h3>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-4">{skill.info}</p>
              <div className="w-full bg-gray-800 rounded-full h-1.5 sm:h-2 mb-1">
                <div
                  className="bg-gradient-to-r from-purple-500 to-blue-500 h-full rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <p className="text-gray-500 text-xs text-right">{skill.level}%</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-gray-800 mb-3 sm:mb-4">
            <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-blue-400">Certifications</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">
            Professional <span className="text-blue-400">Credentials</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 p-4 sm:p-6"
            >
              <div className="flex justify-between items-start mb-3 sm:mb-4">
                <div>
                  <h3 className="font-bold sm:text-xl text-white">{cert.title}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm">{cert.issuer} | {cert.date}</p>
                </div>
                <div className="bg-blue-900/30 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-blue-400 text-xs sm:text-sm">
                  Verified
                </div>
              </div>
              <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-6">{cert.description}</p>
              <div className="mb-3 sm:mb-6">
                <h4 className="text-white font-medium text-sm sm:text-base mb-1 sm:mb-2">Skills:</h4>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm bg-gray-800 rounded-full text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default SkillsSection;
