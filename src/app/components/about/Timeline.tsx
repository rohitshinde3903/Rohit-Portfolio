import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const achievements = [
  { image: '/images/9.jpg' },
  { image: '/images/10.jpg' },
  { image: '/images/6.jpg' },
  { image: '/images/3.jpg' },
  { image: '/images/1.jpg' },
  { image: '/images/2.jpg' },
  { image: '/images/3.jpg' },
  { image: '/images/4.png' },
  { image: '/images/5.png' },
  { image: '/images/7.jpg' },
  { image: '/images/8.jpg' },
  { image: '/images/icon.ico' },
];

const AchievementGrid = () => {
  return (
    <section id="achievements" className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500 blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-blue-500 blur-3xl animate-float-medium" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-800 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-sm font-medium text-purple-400">Achievements</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            My <span className="text-purple-500">Milestones</span> & Recognition
          </motion.h2>
          
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
          </motion.div>
          
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Highlights from hackathons, competitions, and professional accomplishments
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              className="group relative overflow-hidden rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(126, 34, 206, 0.3), 0 10px 10px -5px rgba(126, 34, 206, 0.1)"
              }}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={achievement.image}
                  alt={`Achievement ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content on hover */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <motion.h3 
                    className="text-white font-bold text-lg mb-2"
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    PROFO Launch
                  </motion.h3>
                  <motion.p 
                    className="text-gray-300 text-sm"
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                  </motion.p>
                  
                  <motion.div 
                    className="mt-4 flex gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <span className="px-3 py-1 text-xs bg-purple-900/50 text-purple-300 rounded-full">
                      February
                    </span>
                    <span className="px-3 py-1 text-xs bg-blue-900/50 text-blue-300 rounded-full">
                      2025
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
            View All Achievements
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementGrid;