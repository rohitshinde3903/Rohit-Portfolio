import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Cloud, BrainCircuit, Database } from "lucide-react";

type Skill = {
  name: string;
  info: string;
  icon: React.ReactElement;
  level: number;
};

type Category =
  | "Languages & Frameworks"
  | "Cloud & DevOps"
  | "AI & Data"
  | "Databases";

const categorizedSkills: Record<Category, Skill[]> = {
  "Languages & Frameworks": [
    {
      name: "JavaScript",
      info: "React, Next.js, TypeScript",
      icon: <Code size={20} />,
      level: 85,
    },
    {
      name: "Python",
      info: "Django, Flask, FastAPI",
      icon: <Code size={20} />,
      level: 90,
    },
  ],
  "Cloud & DevOps": [
    {
      name: "AWS",
      info: "EC2, Lambda, S3",
      icon: <Cloud size={20} />,
      level: 75,
    },
    {
      name: "Docker",
      info: "Containerization",
      icon: <Cloud size={20} />,
      level: 80,
    },
  ],
  "AI & Data": [
    {
      name: "TensorFlow",
      info: "Neural Networks",
      icon: <BrainCircuit size={20} />,
      level: 80,
    },
    {
      name: "Pandas",
      info: "Data Wrangling",
      icon: <BrainCircuit size={20} />,
      level: 85,
    },
  ],
  Databases: [
    {
      name: "PostgreSQL",
      info: "Relational DB",
      icon: <Database size={20} />,
      level: 75,
    },
    {
      name: "MongoDB",
      info: "NoSQL",
      icon: <Database size={20} />,
      level: 70,
    },
  ],
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Languages & Frameworks");

  return (
    <section className="py-20 bg-black text-white" id="skills">
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
            Explore the technologies and tools I use regularly.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {(Object.keys(categorizedSkills) as Category[]).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
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
                <h3 className="font-bold text-white text-sm sm:text-base">
                  {skill.name}
                </h3>
              </div>

              <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-4">
                {skill.info}
              </p>

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
      </div>
    </section>
  );
};

export default Skills;
