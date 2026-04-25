// src/sections/Portfolio.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projectData = [
    
    {
      name: 'Esscopic - Machinery & Motors',
      repo: 'esscopic',
      url: 'https://esscopic.in/',
      description: 'E-commerce platform for machinery and motor products',
      tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      type: 'php',
      image: 'https://via.placeholder.com/400x300?text=Esscopic'
    },
    {
      name: 'Zylotech India - IT Services',
      repo: 'zylotechindia',
      url: 'https://zylotechindia.com/',
      description: 'IT services selling website',
      tech: ['PHP', 'MySQL', 'Bootstrap', 'jQuery'],
      type: 'php',
      image: 'https://via.placeholder.com/400x300?text=Zylotech+India'
    },
    {
      name: 'Kamsun Electronics',
      repo: 'kamsungelectronics',
      url: 'https://kamsungelectronics.com/',
      description: 'E-commerce for electronics products',
      tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      type: 'php',
      image: 'https://via.placeholder.com/400x300?text=Kamsun+Electronics'
    },
    {
      name: 'Cloud Chaser - IT Services',
      repo: 'cloudchaser',
      url: 'https://cloudchaser.co.in/',
      description: 'IT services selling website',
      tech: ['PHP', 'MySQL', 'Bootstrap', 'jQuery'],
      type: 'php',
      image: 'https://via.placeholder.com/400x300?text=Cloud+Chaser'
    },
    {
      name: 'Pincleiq Solutions - Electronics',
      repo: 'pincleiqsolutions',
      url: 'https://pincleiqsolutions.co.in/',
      description: 'E-commerce platform for electronics products',
      tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      type: 'php',
      image: 'https://via.placeholder.com/400x300?text=Pincleiq+Solutions'
    },
    {
      name: 'Buttonhole - Mens Wear',
      repo: 'buttonhole',
      url: 'https://buttonhole.in/',
      description: 'E-commerce for mens wear products',
      tech: ['PHP', 'MySQL', 'Bootstrap', 'jQuery'],
      type: 'php',
      image: 'https://via.placeholder.com/400x300?text=Buttonhole'
    },
    {
      name: 'Atharvke Electronics',
      repo: 'atharvkelectronics',
      url: 'https://atharvkelectronics.in/',
      description: 'Electronic product selling e-commerce site',
      tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      type: 'php',
      image: 'https://via.placeholder.com/400x300?text=Atharvke+Electronics'
    },
    {
      name: 'Poulomi India - Mens Wear',
      repo: 'poulomiindia',
      url: 'https://poulomiindia.com/',
      description: 'E-commerce for mens wear',
      tech: ['PHP', 'MySQL', 'Bootstrap', 'jQuery'],
      type: 'php',
      image: 'https://via.placeholder.com/400x300?text=Poulomi+India'
    },
    {
      name: 'Consulenza - Mens Wear',
      repo: 'consulenza',
      url: 'https://consulenza.co.in/',
      description: 'Mens wear product e-commerce',
      tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      type: 'php',
      image: 'https://via.placeholder.com/400x300?text=Consulenza'
    },
    {
      name: 'Tixri Logistics - Mens & Women',
      repo: 'tixrilogistics',
      url: 'https://tixrilogistics.com/',
      description: 'E-commerce for mens and women products',
      tech: ['PHP', 'MySQL', 'Bootstrap', 'jQuery'],
      type: 'php',
      image: 'https://via.placeholder.com/400x300?text=Tixri+Logistics'
    },
    {
      name: 'Naina Wooden - Wooden Work',
      repo: 'nainawooden',
      url: 'https://nainawooden.com/',
      description: 'Wooden work products e-commerce',
      tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      type: 'php',
      image: 'https://via.placeholder.com/400x300?text=Naina+Wooden'
    },
    // Laravel Projects
    {
      name: 'Elite Design Consultants - Architecture',
      repo: 'elitedesignconsultants',
      url: 'https://elitedesignconsultants.in/',
      description: 'Architectural services website',
      tech: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Bootstrap'],
      type: 'laravel',
      image: 'https://via.placeholder.com/400x300?text=Elite+Design+Consultants'
    },
    {
      name: 'Gunnu Wooden - Wooden Work',
      repo: 'gunnuwooden',
      url: 'http://gunnuwooden.com/',
      description: 'Wooden work services website',
      tech: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Bootstrap'],
      type: 'laravel',
      image: 'https://via.placeholder.com/400x300?text=Gunnu+Wooden'
    },
    {
      name: 'Bhardwaj Architects',
      repo: 'bhardwajarchitects',
      url: 'https://bhardwajarchitects.in/',
      description: 'Architectural services website',
      tech: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Bootstrap'],
      type: 'laravel',
      image: 'https://via.placeholder.com/400x300?text=Bhardwaj+Architects'
    },
    {
      name: 'G Tech Logics India - Company Website',
      repo: 'gtechlogicsindia',
      url: 'https://gtechlogicsindia.com/',
      description: 'Company website for tech services',
      tech: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Bootstrap'],
      type: 'laravel',
      image: 'https://via.placeholder.com/400x300?text=G+Tech+Logics+India'
    },
    {
      name: 'Cure Comm Solutions - HRM & Marketing',
      repo: 'curecommsolutions',
      url: 'https://curecommsolutions.com/',
      description: 'HRM and marketing related website',
      tech: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Bootstrap'],
      type: 'laravel',
      image: 'https://via.placeholder.com/400x300?text=Cure+Comm+Solutions'
    },
    // MERN Projects
    {
      name: 'RoomDekho - Property Rent & Selling',
      repo: 'roomdekho-live',
      url: 'http://roomdekho.nainawooden.com/',
      description: 'Property rental and selling platform',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express'],
      type: 'mern',
      image: 'https://via.placeholder.com/400x300?text=RoomDekho'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projectData 
    : projectData.filter(p => p.type === filter);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2 
          className="text-4xl font-bold text-center text-teal-400 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Portfolio
        </motion.h2>
        
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          A collection of full-stack, frontend, backend, PHP, Laravel, and MERN projects showcasing my expertise 
          in PHP, Laravel, React.js, Node.js, MongoDB, and various web technologies
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'full-stack', 'frontend', 'backend', 'php', 'laravel', 'mern'].map(category => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === category
                  ? 'bg-teal-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.repo} 
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
