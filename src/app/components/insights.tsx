'use client';
import { useState } from 'react';
import { Code, Cloud, Lock } from "lucide-react";
import { Github, ExternalLink, ArrowRight, Sparkles, User } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ProjectCard = () => {
  const [activeProject, setActiveProject] = useState(0);
  
  // Projects data from your resume
  const projects = [
    {
      title: "Electronic Voting Software Powered by AI",
      description: "A secure, AI-powered electronic voting system for college elections featuring facial recognition and two-factor authentication",
      tags: ["AI", "Facial Recognition", "Django", "React", "Two-Factor Authentication", "Security"],
      highlights: [
        "Implemented facial recognition for voter identity verification",
        "Integrated two-factor authentication (2FA) for enhanced security",
        "Designed user-friendly interfaces with real-time vote tracking",
        "Ensured data privacy and system integrity throughout the process"
      ],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "PROFO: Profile Manager",
      description: "A profile management application to consolidate users' online presence with privacy controls and responsive design",
      tags: ["Django", "Python", "Full Stack", "Responsive Design", "Authentication"],
      highlights: [
        "Lets users share resume, GitHub, LinkedIn through a single public link",
        "Clean interface for adding, editing, and managing profile info",
        "Privacy controls for public/private content management",
        "Secured with login and authentication to keep data safe"
      ],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-800 mb-4"
          >
            <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-sm font-medium text-purple-400">Projects</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            My <span className="text-purple-500">Innovative</span> Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Showcasing solutions that blend cutting-edge technology with practical applications
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Project Cards Navigation */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative rounded-xl overflow-hidden border ${
                  activeProject === index 
                    ? 'border-purple-500 bg-gradient-to-br from-purple-900/30 to-black' 
                    : 'border-gray-800 bg-gray-900/50 hover:bg-gray-800/20 cursor-pointer'
                } transition-all duration-300`}
                onClick={() => setActiveProject(index)}
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${
                      activeProject === index 
                        ? 'bg-purple-500/20 text-purple-400' 
                        : 'bg-gray-800 text-gray-400'
                    }`}>
                      {index === 0 ? <Lock size={20} /> : <User size={20} />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-400 text-sm">{project.description}</p>
                      
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className={`text-xs px-3 py-1 rounded-full ${
                              activeProject === index 
                                ? 'bg-purple-900/50 text-purple-300' 
                                : 'bg-gray-800 text-gray-400'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {activeProject === index && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500" />
                )}
              </motion.div>
            ))}
          </div>
          
          {/* Project Details Panel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 overflow-hidden shadow-2xl"
          >
            <div className="relative h-72 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 z-0" />
              
              {/* Placeholder for project image */}
              <div className="relative h-full w-full flex items-center justify-center">
                <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-xl w-4/5 h-4/5" />
                <div className="absolute z-20 bottom-4 left-4 flex gap-2">
                  {projects[activeProject].githubUrl && (
                    <a
                      href={projects[activeProject].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-white"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {projects[activeProject].liveUrl && (
                    <a
                      href={projects[activeProject].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-white"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">
                  {projects[activeProject].title}
                </h3>
                <span className="text-sm px-3 py-1 rounded-full bg-purple-900/50 text-purple-300">
                  {activeProject === 0 ? "AI Application" : "Web Platform"}
                </span>
              </div>
              
              <p className="text-gray-300 mb-8">
                {projects[activeProject].description}
              </p>
              
              <div className="mb-8">
                <h4 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
                  <Sparkles className="text-yellow-400" size={20} />
                  <span>Key Features</span>
                </h4>
                <ul className="space-y-3">
                  {projects[activeProject].highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      </div>
                      <span className="text-gray-400">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
                  <span>Technologies Used</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1.5 text-sm bg-gray-800 rounded-lg text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Additional project cards grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white">Other Projects</h3>
            <a 
              href="#"
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden hover:border-purple-500/30 transition-all">
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                  <Code className="text-purple-500" size={24} />

                </div>
                <h4 className="text-xl font-bold text-white mb-2">Cloud-Based Analytics Dashboard</h4>
                <p className="text-gray-400 mb-4">Real-time data visualization platform with interactive charts</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs bg-gray-800 rounded-lg text-gray-300">React</span>
                  <span className="px-3 py-1 text-xs bg-gray-800 rounded-lg text-gray-300">Node.js</span>
                  <span className="px-3 py-1 text-xs bg-gray-800 rounded-lg text-gray-300">AWS</span>
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden hover:border-purple-500/30 transition-all">
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <p className="text-blue-500" size={24} />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">AI Content Recommendation System</h4>
                <p className="text-gray-400 mb-4">Personalized content suggestions using machine learning algorithms</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs bg-gray-800 rounded-lg text-gray-300">Python</span>
                  <span className="px-3 py-1 text-xs bg-gray-800 rounded-lg text-gray-300">TensorFlow</span>
                  <span className="px-3 py-1 text-xs bg-gray-800 rounded-lg text-gray-300">API</span>
                </div>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden hover:border-purple-500/30 transition-all">
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                  <Lock className="text-green-500" size={24} />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Blockchain Authentication System</h4>
                <p className="text-gray-400 mb-4">Secure authentication protocol using blockchain technology</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs bg-gray-800 rounded-lg text-gray-300">Blockchain</span>
                  <span className="px-3 py-1 text-xs bg-gray-800 rounded-lg text-gray-300">Solidity</span>
                  <span className="px-3 py-1 text-xs bg-gray-800 rounded-lg text-gray-300">Web3</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectCard;
