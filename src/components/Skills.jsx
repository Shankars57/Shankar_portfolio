import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import {
  FaJava,
  FaJs,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaKey,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiCplusplus,
  SiMongodb,
  SiPostgresql,
  SiVercel,
  SiPostman,
  SiJson,
  SiFramer,
  SiAxios,
  SiExpress,
} from "react-icons/si";

const categorizedSkills = {
  Languages: [
    { name: "Java", icon: <FaJava />, color: "text-orange-400" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
    { name: "Python", icon: <FaPython />, color: "text-blue-400" },
    { name: "C++", icon: <SiCplusplus />, color: "text-indigo-400" },
    { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "JSON", icon: <SiJson />, color: "text-yellow-500" },
  ],
  "Frameworks & Libraries": [
    {
      name: "React",
      icon: <FaReact className="animate-spin duration-900 ease" />,
      color: "text-cyan-400 ",
    },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
    { name: "Express.js", icon: <SiExpress />, color: "text-gray-300" },
    { name: "Framer Motion", icon: <SiFramer />, color: "text-pink-400" },
    { name: "Axios", icon: <SiAxios />, color: "text-blue-300" },
  ],
  Databases: [
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-400" },
    { name: "REST APIs", icon: <FaDatabase />, color: "text-teal-400" },
  ],
  "Tools & Platforms": [
    { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
    { name: "GitHub", icon: <FaGithub />, color: "text-white" },
    { name: "Postman", icon: <SiPostman />, color: "text-orange-500" },
    { name: "JWT", icon: <FaKey />, color: "text-red-500" },
    { name: "Vercel", icon: <SiVercel />, color: "text-white" },
  ],
};

const Skills = () => {
  return (
    <section
      id="skills"
      className=" py-20 bg-black text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 opacity-30 bg-gradient-to-br from-blue-800 via-purple-800 to-pink-700 animate-shimmer" />

      <div className="container md:w-[80%] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life.
          </p>
        </div>

        {Object.entries(categorizedSkills).map(([category, skills]) => (
          <div key={category} className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">
              {category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Tilt
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    scale={1.05}
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    transitionSpeed={250}
                    className="bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-md hover:shadow-blue-500/30 border border-white/10 flex flex-col items-center justify-center transition-all duration-300 group"
                  >
                    <div className={`text-4xl mb-2 z-10 ${skill.color}`}>
                      {skill.icon}
                    </div>
                    <span className="text-sm text-gray-200 font-medium text-center">
                      {skill.name}
                    </span>
                  </Tilt>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <motion.hr
        initial={{ width: 0 }}
        whileInView={{ width: "90%", transition: { duration: 2 } }}
        className="hidden md:flex w-[90%] m-auto h-[3px] text-blue-600 mt-20"
      />
    </section>
  );
};

export default Skills;
