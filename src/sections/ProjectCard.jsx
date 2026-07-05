import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project, index }) => {
  const [showCard, setShowCard] = useState(true);

  if (!showCard) return null;

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="block bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-teal-500 group"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gray-800">
        <img
          src={project.image}
          alt={project.name}
          onError={() => setShowCard(false)}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
        />

        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <span className="p-3 bg-teal-500 rounded-full group-hover:bg-teal-600 transition">
            <FiExternalLink size={24} />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-teal-400 mb-2">
          {project.name}
        </h3>

        <p className="text-gray-400 text-sm mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-800 text-teal-300 text-xs rounded-full border border-teal-500/30"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <span className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-teal-500/20 text-teal-400 rounded group-hover:bg-teal-500/40 transition text-sm font-semibold">
            <FiExternalLink size={16} />
            Visit Site
          </span>
        </div>
      </div>
    </motion.a>
  );
};

export default ProjectCard;