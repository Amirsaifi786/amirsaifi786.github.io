// src/sections/Portfolio.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projectData = [
    {
      name: 'RoomDekho - Real Estate Platform',
      repo: 'roomdekhofrontend',
      url: 'https://github.com/Amirsaifi786/roomdekhofrontend',
      description: 'A full-stack real estate application for finding and listing properties.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express'],
      type: 'full-stack',
      image: 'https://via.placeholder.com/400x300?text=RoomDekho'
    },
    {
      name: 'MERN E-Commerce',
      repo: 'mern-ecommerce',
      url: 'https://github.com/Amirsaifi786/mern-ecommerce',
      description: 'Complete e-commerce platform with MongoDB, Express, React, and Node.js',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      type: 'full-stack',
      image: 'https://via.placeholder.com/400x300?text=MERN+Ecommerce'
    },
    {
      name: 'Laravel E-Commerce',
      repo: 'LaravelEcommerce',
      url: 'https://github.com/Amirsaifi786/LaravelEcommerce',
      description: 'Traditional e-commerce built with Laravel and MySQL',
      tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
      type: 'backend',
      image: 'https://via.placeholder.com/400x300?text=Laravel+Ecommerce'
    },
    {
      name: 'Bill Management System',
      repo: 'billmanagement',
      url: 'https://github.com/Amirsaifi786/billmanagement',
      description: 'Complete billing solution for small businesses to create invoices',
      tech: ['PHP', 'MySQL', 'Bootstrap', 'jQuery'],
      type: 'backend',
      image: 'https://via.placeholder.com/400x300?text=Bill+Management'
    },
    {
      name: 'React Admin Dashboard',
      repo: 'reactecommerceadmin',
      url: 'https://github.com/Amirsaifi786/reactecommerceadmin',
      description: 'Professional admin dashboard for e-commerce management',
      tech: ['React.js', 'Tailwind CSS', 'Redux', 'Chart.js'],
      type: 'frontend',
      image: 'https://via.placeholder.com/400x300?text=Admin+Dashboard'
    },
    {
      name: 'Laravel Role & Permission System',
      repo: 'User_Role_Permission_And_Authorization_In_Laravel10',
      url: 'https://github.com/Amirsaifi786/User_Role_Permission_And_Authorization_In_Laravel10',
      description: 'Advanced user roles, permissions, and authorization system in Laravel 10',
      tech: ['Laravel', 'PHP', 'MySQL', 'Blade'],
      type: 'backend',
      image: 'https://via.placeholder.com/400x300?text=Laravel+Roles'
    },
    {
      name: 'Location Management System',
      repo: 'Location_management_system',
      url: 'https://github.com/Amirsaifi786/Location_management_system',
      description: 'GPS-based location management and tracking system',
      tech: ['Laravel', 'MySQL', 'Maps API', 'Bootstrap'],
      type: 'backend',
      image: 'https://via.placeholder.com/400x300?text=Location+System'
    },
    {
      name: 'Student ID Card System',
      repo: 'Student_Id_Card-Management',
      url: 'https://github.com/Amirsaifi786/Student_Id_Card-Management',
      description: 'Student ID card generation and management system',
      tech: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
      type: 'full-stack',
      image: 'https://via.placeholder.com/400x300?text=Student+ID+Card'
    },
    {
      name: 'React E-Commerce Admin',
      repo: 'mern-clothing',
      url: 'https://github.com/Amirsaifi786/mern-clothing',
      description: 'Clothing store admin panel with MERN stack',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      type: 'full-stack',
      image: 'https://via.placeholder.com/400x300?text=Clothing+Admin'
    },
    {
      name: 'Fashion E-Commerce',
      repo: 'fashionecom',
      url: 'https://github.com/Amirsaifi786/fashionecom',
      description: 'Modern fashion store with React and Tailwind CSS',
      tech: ['React', 'Tailwind CSS', 'Context API', 'Node.js'],
      type: 'frontend',
      image: 'https://via.placeholder.com/400x300?text=Fashion+Store'
    },
    {
      name: 'POS System',
      repo: 'POSSYSTEM',
      url: 'https://github.com/Amirsaifi786/POSSYSTEM',
      description: 'Complete Point of Sale system for retail shops',
      tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      type: 'backend',
      image: 'https://via.placeholder.com/400x300?text=POS+System'
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
          A collection of full-stack, frontend, and backend projects showcasing my expertise 
          in PHP, Laravel, React.js, Node.js, and MongoDB
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'full-stack', 'frontend', 'backend'].map(category => (
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
