// src/components/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-teal-500 group shadow-lg hover:shadow-teal-500/10 transition"
    >
      
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition">
          
          {/* Github */}
          {project.github && (
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-teal-500 rounded-full hover:bg-teal-600 transition"
            >
              <FiGithub size={20} />
            </a>
          )}

          {/* Live Demo */}
          {project.live && (
            <a 
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white text-black rounded-full hover:bg-gray-300 transition"
            >
              <FiExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-teal-400 mb-2">
          {project.name}
        </h3>

        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span 
              key={i}
              className="px-2 py-1 text-xs bg-gray-800 text-teal-300 rounded-md border border-teal-500/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-teal-500/20 text-teal-400 rounded hover:bg-teal-500/40 transition text-sm"
            >
              <FiGithub size={16} /> Code
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white/10 text-white rounded hover:bg-white/20 transition text-sm"
            >
              <FiExternalLink size={16} /> Live
            </a>
          )}

        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;