import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Cloud, BrainCircuit, Database } from "lucide-react";

type SkillType = {
  name: string;
  info: string;
  icon: React.ReactElement;
  level: number;
};

type SkillCategory = "Languages & Frameworks" | "Cloud & DevOps" | "AI & Data" | "Databases";

const categorizedSkills: Record<SkillCategory, SkillType[]> = {
  "Languages & Frameworks": [
    {
      name: "JavaScript",
      info: "ES6+, React, Next.js",
      icon: <Code size={20} />,
      level: 85,
    },
    {
      name: "Python",
      info: "Flask, Django, FastAPI",
      icon: <Code size={20} />,
      level: 90,
    },
    // Add more...
  ],
  "Cloud & DevOps": [
    {
      name: "AWS",
      info: "EC2, S3, Lambda",
      icon: <Cloud size={20} />,
      level: 70,
    },
    // Add more...
  ],
  "AI & Data": [
    {
      name: "TensorFlow",
      info: "Deep learning models",
      icon: <BrainCircuit size={20} />,
      level: 80,
    },
    // Add more...
  ],
  Databases: [
    {
      name: "PostgreSQL",
      info: "Relational DB",
      icon: <Database size={20} />,
      level: 75,
    },
    // Add more...
  ],
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("Languages & Frameworks");

  return (
    <section id="skills" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            My <span className="text-purple-500">Skills</span>
          </motion.h2>
          <p className="text-gray-400">
            Tools and technologies I use regularly for development and AI projects.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(categorizedSkills).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as SkillCategory)}
              className={`px-4 py-2 rounded-full border transition ${
                activeCategory === category
                  ? "bg-purple-600 border-purple-500 text-white"
                  : "bg-gray-900 border-gray-700 text-gray-400 hover:text-white hover:border-purple-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categorizedSkills[activeCategory].map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-gray-900 rounded-xl border border-gray-800 p-4 hover:border-purple-500/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-purple-600/10 rounded-md text-purple-400">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold">{skill.name}</h3>
                  <p className="text-sm text-gray-400">{skill.info}</p>
                </div>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
                <div
                  className="bg-purple-500 h-2 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
