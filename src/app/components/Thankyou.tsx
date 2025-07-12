// import React from 'react';
// import { motion } from 'framer-motion';
// import { Code, GitBranch, Award, Coffee, Sparkles, BrainCircuit, Lightbulb, Activity } from 'lucide-react';

// const ThankYouSection = () => {
//   return (
//     <section id="thank-you" className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden text-white">
//       {/* Heading */}
//       <motion.div
//         className="text-center mb-16"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-800 mb-6">
//           <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
//           <span className="text-sm font-medium text-purple-400">Let's Connect</span>
//         </div>

//         <motion.h2
//           className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
//           style={{
//             background: 'linear-gradient(to right, #8b5cf6, #6366f1, #3b82f6)',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//             backgroundSize: '200% auto'
//           }}
//           animate={{ backgroundPosition: ['0% center', '100% center'] }}
//           transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
//         >
//           Thank You for Your Time!
//         </motion.h2>

//         <div className="w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500" />

//         <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
//           I believe in turning ideas into impactful digital experiences. Let's collaborate on something exceptional and future-ready.
//         </p>
//       </motion.div>

//       {/* Highlight Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
//         {[
//           { icon: <Code className="w-6 h-6" />, label: 'Projects Built', value: '20+' },
//           { icon: <GitBranch className="w-6 h-6" />, label: 'GitHub Repos', value: '35+' },
//           { icon: <Award className="w-6 h-6" />, label: 'Hackathon Wins', value: '3' },
//           { icon: <Coffee className="w-6 h-6" />, label: 'Caffeine Boosts', value: '∞' },
//           { icon: <Sparkles className="w-6 h-6" />, label: 'UI/UX Projects', value: '10+' },
//           { icon: <BrainCircuit className="w-6 h-6" />, label: 'AI & ML Models', value: '8' },
//           { icon: <Lightbulb className="w-6 h-6" />, label: 'Innovations Filed', value: '2' },
//           { icon: <Activity className="w-6 h-6" />, label: 'Live Deployments', value: '15+' }
//         ].map((item, index) => (
//           <motion.div
//             key={index}
//             className="group p-6 rounded-xl bg-gradient-to-b from-gray-900/40 to-gray-800/30 border border-gray-700 backdrop-blur-sm hover:shadow-xl transition-all duration-500"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             whileHover={{ scale: 1.05 }}
//           >
//             <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20">
//               <div className="text-purple-400">{item.icon}</div>
//             </div>
//             <h3 className="text-2xl font-bold text-white mb-1">{item.value}</h3>
//             <p className="text-sm text-gray-400">{item.label}</p>
//           </motion.div>
//         ))}
//       </div>

//       {/* CTA Button */}
//       <motion.div
//         className="text-center mt-16"
//         initial={{ opacity: 0, scale: 0.95 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6, delay: 0.3 }}
//       >
//         <a
//           href="#contact"
//           className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
//         >
//           Let’s Build Something Amazing
//         </a>
//       </motion.div>
//     </section>
//   );
// };

// export default ThankYouSection;
import React from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { 
  Code, 
  GitBranch, 
  Award, 
  Coffee, 
  Sparkles, 
  BrainCircuit, 
  Lightbulb, 
  Activity,
  Zap
} from 'lucide-react';

const ThankYouSection = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <section id="thank-you" className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-purple-900/20 to-blue-800/20 blur-3xl"
        style={{ x, rotate }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-gradient-to-br from-blue-900/20 to-cyan-800/20 blur-3xl"
        style={{ y, rotate: useTransform(rotate, v => -v) }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 mb-6">
            <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-sm font-medium text-purple-400 tracking-wider">LET'S CONNECT</span>
          </div>

          <motion.h2
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
              Thank You
            </span>
            <span className="block text-xl sm:text-2xl text-gray-400 font-normal mt-4">
              For exploring my portfolio
            </span>
          </motion.h2>

          <motion.div
            className="w-32 h-0.5 mx-auto my-8 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />

          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I'm passionate about creating digital experiences that blend innovation with purpose. 
            Let's collaborate on something that pushes boundaries and delivers real impact.
          </motion.p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
          {[
            { 
              icon: <Code className="w-5 h-5" />, 
              label: 'Projects Built', 
              value: '20+',
              color: 'from-purple-500/10 to-purple-500/20'
            },
            { 
              icon: <GitBranch className="w-5 h-5" />, 
              label: 'GitHub Repos', 
              value: '35+',
              color: 'from-blue-500/10 to-blue-500/20'
            },
            { 
              icon: <Award className="w-5 h-5" />, 
              label: 'Hackathon Wins', 
              value: '3',
              color: 'from-amber-500/10 to-amber-500/20'
            },
            { 
              icon: <Coffee className="w-5 h-5" />, 
              label: 'Caffeine Doses', 
              value: '∞',
              color: 'from-rose-500/10 to-rose-500/20'
            },
            { 
              icon: <Sparkles className="w-5 h-5" />, 
              label: 'UI/UX Projects', 
              value: '12+',
              color: 'from-violet-500/10 to-violet-500/20'
            },
            { 
              icon: <BrainCircuit className="w-5 h-5" />, 
              label: 'AI Models', 
              value: '8',
              color: 'from-emerald-500/10 to-emerald-500/20'
            },
            { 
              icon: <Lightbulb className="w-5 h-5" />, 
              label: 'Innovations', 
              value: '4',
              color: 'from-yellow-500/10 to-yellow-500/20'
            },
            { 
              icon: <Activity className="w-5 h-5" />, 
              label: 'Live Deployments', 
              value: '15+',
              color: 'from-cyan-500/10 to-cyan-500/20'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-gray-800 p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                borderColor: 'rgba(139, 92, 246, 0.5)',
                boxShadow: '0 10px 30px -10px rgba(99, 102, 241, 0.2)'
              }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
              
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-lg bg-gray-800/50 flex items-center justify-center mb-4 group-hover:bg-transparent transition-colors">
                  <div className="text-purple-400 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{item.value}</h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Start a Conversation</span>
            <Zap className="w-5 h-5 group-hover:animate-pulse" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ThankYouSection;