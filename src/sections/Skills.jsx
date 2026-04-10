// src/sections/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  SiPhp, SiLaravel, SiCodeigniter, SiReact, SiNodedotjs,
  SiMongodb, SiMysql, SiJavascript, SiTailwindcss, SiGit
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'PHP', icon: SiPhp, color: 'text-purple-500' },
    { name: 'Laravel', icon: SiLaravel, color: 'text-red-500' },
    { name: 'CodeIgniter', icon: SiCodeigniter, color: 'text-orange-500' },
    { name: 'React.js', icon: SiReact, color: 'text-blue-400' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
    { name: 'Git/GitHub', icon: SiGit, color: 'text-orange-600' }
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          className="text-4xl font-bold text-center text-teal-400 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <Icon className={`${skill.color} text-5xl mb-3`} />
                <span className="text-gray-300 font-semibold text-sm text-center">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;