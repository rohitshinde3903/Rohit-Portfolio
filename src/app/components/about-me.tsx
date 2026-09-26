'use client';

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Cloud, Server, Database, Award, Sparkles, Rocket, GitBranch, ChevronRight } from 'lucide-react'

export function AboutMe() {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <div id="about" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Profile Card */}
          <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariants} className="col-span-1">
            <motion.div 
              className="relative h-full rounded-2xl overflow-hidden border border-gray-800 shadow-2xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black z-0" />
              <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-purple-500/10 blur-xl" />
              <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-blue-500/10 blur-xl" />
              
              <div className="relative z-10 flex flex-col items-center p-8 h-full">
                <div className="relative mb-6">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-gray-800 shadow-xl">
                    <Image
                      src="/images/rohit-profile.png"
                      alt="Rohit Shinde"
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    GenAI Engineer
                  </div>
                </div>
                
                <motion.div className="text-center mb-8" variants={itemVariants}>
                  <h2 className="text-3xl font-bold text-white mb-1">Rohit Shinde</h2>
                  <p className="text-purple-400 font-medium">LLMs & RAG | Agentic AI | Python Full Stack</p>
                </motion.div>
                
                <div className="w-full space-y-6">
                  <motion.div className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-xl border border-gray-800" variants={itemVariants}>
                    <h3 className="flex items-center gap-2 text-white font-medium mb-3">
                      <Cloud size={20} />
                      <span>Specialization</span>
                    </h3>
                    <ul className="space-y-2">
                      <Skill title="LLMs, RAG & Agentic AI" />
                      <Skill title="Model Fine-Tuning (LoRA/QLoRA)" />
                      <Skill title="Python Full Stack (Django/FastAPI)" />
                      <Skill title="MLOps/LLMOps & Cloud (GCP)" />
                    </ul>
                  </motion.div>
                  
                  <motion.div className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-xl border border-gray-800" variants={itemVariants}>
                    <h3 className="flex items-center gap-2 text-white font-medium mb-3">
                      <GitBranch size={20} />
                      <span>Version Control</span>
                    </h3>
                    <ul className="space-y-2">
                      <Skill title="Git & GitHub" />
                      <Skill title="Continuous Deployment" />
                      <Skill title="Collaborative Development" />
                    </ul>
                  </motion.div>
                </div>

                <motion.div className="mt-auto pt-6 w-full" variants={itemVariants}>
                  <a 
                    href="#contact" 
                    className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all px-6 py-3 rounded-lg text-white font-medium shadow-lg hover:shadow-xl"
                  >
                    Contact Me
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Column */}
          <motion.div className="col-span-1 lg:col-span-2 space-y-10" initial="hidden" animate={controls} variants={containerVariants}>
            
            {/* About */}
            <motion.div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800 shadow-2xl" variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <Code className="text-purple-500" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">About Me</h2>
                  <div className="h-px w-16 bg-gradient-to-r from-purple-500 to-blue-500 mt-1" />
                </div>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  I'm <span className="text-white font-medium">Rohit Shinde</span>, a GenAI Engineer and Python Full-Stack Developer with <span className="text-purple-400">4+ years of experience</span> building AI-powered products across the complete software lifecycle.
                </p>
                <p>
                  Specialized in <span className="text-blue-400">LLMs, RAG, Agentic AI, NLP, and MLOps</span>, with hands-on experience using PyTorch, Hugging Face, LangChain, LlamaIndex, FastAPI, Django, Docker, and GCP.
                </p>
                <p>
                  Experienced in fine-tuning open-source models using <span className="text-purple-400">LoRA, QLoRA, and progressive layer unfreezing</span>, designing production-grade RAG systems, optimizing LLM inference, and deploying AI microservices to cloud environments.
                </p>
              </div>
            </motion.div>

            {/* Expertise & Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Expertise */}
              <motion.div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800 shadow-2xl" variants={itemVariants}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Rocket className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Technical Expertise</h2>
                    <div className="h-px w-16 bg-gradient-to-r from-blue-400 to-cyan-500 mt-1" />
                  </div>
                </div>

                <div className="space-y-6">
                  <ExpertiseBlock 
                    icon={<Server size={20} />}
                    title="Backend Development"
                    skills={["Python", "Django", "FastAPI", "Flask", "REST APIs", "Async Python"]}
                  />
                  <ExpertiseBlock 
                    icon={<Code size={20} />}
                    title="Frontend & UI"
                    skills={["React", "Next.js", "Tailwind CSS", "Framer Motion"]}
                  />
                  <ExpertiseBlock 
                    icon={<Database size={20} />}
                    title="AI, Data & Cloud"
                    skills={["PyTorch", "Hugging Face", "LangChain", "LlamaIndex", "GCP", "Docker"]}
                  />
                </div>
              </motion.div>

              {/* Achievements */}
              <motion.div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800 shadow-2xl" variants={itemVariants}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <Award className="text-purple-500" size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Achievements</h2>
                    <div className="h-px w-16 bg-gradient-to-r from-purple-500 to-pink-500 mt-1" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <AchievementBlock 
                    icon={<Sparkles size={20} />}
                    title="AI/GenAI Engineer at EduAI Hub"
                    description="Led development of EduAI SLM, fine-tuning Gemma 3B using LoRA/QLoRA, improving domain-specific Q&A accuracy by ~38%."
                    year="2025-26"
                  />
                  <AchievementBlock 
                    icon={<Sparkles size={20} />}
                    title="Google Advanced Data Analytics Certificate"
                    description="Completed Google's professional certificate focusing on advanced data analytics, statistics, and ML."
                    year="2024"
                  />
                  <AchievementBlock 
                    icon={<Sparkles size={20} />}
                    title="Founder – Stones Web Services"
                    description="Founded and delivered technology solutions for 15+ startups, covering AI engineering, backend development, and full-stack product development."
                    year="2021+"
                  />
                </div>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-8 border border-purple-500/30 shadow-2xl backdrop-blur-sm" variants={itemVariants}>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Building intelligent, scalable systems.</h3>
                  <p className="text-purple-200 max-w-xl">Let's collaborate on innovative software that blends data, design, and AI.</p>
                </div>
                <div className="flex gap-4">
                  <a href="#projects" className="px-6 py-3 rounded-lg bg-white text-gray-900 font-medium hover:bg-gray-100 transition-all flex items-center gap-2">
                    <span>View Projects</span>
                    <ChevronRight size={18} />
                  </a>
                  <a href="#contact" className="px-6 py-3 rounded-lg bg-transparent border-2 border-white text-white font-medium hover:bg-white/10 transition-all">
                    Contact Me
                  </a>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </div>
  )
}

const Skill = ({ title }: { title: string }) => (
  <motion.div className="flex items-center gap-3 py-2 border-b border-gray-800 last:border-0" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
    <div className="w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
    <span className="text-gray-300">{title}</span>
  </motion.div>
)

const ExpertiseBlock = ({ icon, title, skills }: { icon: any, title: string, skills: string[] }) => (
  <div className="pb-4 border-b border-gray-800 last:border-0">
    <div className="flex items-center gap-3 mb-3">
      <div className="p-1.5 bg-gray-800 rounded-lg">{icon}</div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, i) => (
        <span key={i} className="px-3 py-1.5 text-sm bg-gray-800 rounded-lg text-gray-300">{skill}</span>
      ))}
    </div>
  </div>
)

const AchievementBlock = ({ icon, title, description, year }: { icon: any, title: string, description: string, year: string }) => (
  <div className="pb-4 border-b border-gray-800 last:border-0">
    <div className="flex items-start gap-3">
      <div className="p-1.5 mt-0.5 bg-gray-800 rounded-lg">{icon}</div>
      <div>
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <span className="text-sm text-purple-400 bg-purple-900/30 px-2 py-0.5 rounded-full">{year}</span>
        </div>
        <p className="text-gray-400 mt-1">{description}</p>
      </div>
    </div>
  </div>
)
