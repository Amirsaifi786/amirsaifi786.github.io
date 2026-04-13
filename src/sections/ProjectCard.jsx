// src/components/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-teal-500 group"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gray-800">
        <img 
          src={project.image} 
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
        />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex gap-4">
            <a 
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-teal-500 rounded-full hover:bg-teal-600 transition"
            >
              <FiGithub size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-teal-400 mb-2">{project.name}</h3>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map(tech => (
            <span 
              key={tech}
              className="px-3 py-1 bg-gray-800 text-teal-300 text-xs rounded-full border border-teal-500/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-teal-500/20 text-teal-400 rounded hover:bg-teal-500/40 transition text-sm font-semibold"
          >
            <FiGithub size={16} /> View Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
