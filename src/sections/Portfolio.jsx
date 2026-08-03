// src/sections/Portfolio.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const thumbnailUrl = (url) =>
    `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=600`;

  const projectData = [
    {
      name: 'Bhardwaj Architects',
      repo: 'bhardwajarchitects',
      url: 'http://bhardwajarchitects.in',
      description: '  test Architecture and interior design website for planning, turnkey services, portfolios, team profiles, and appointment enquiries.',
      tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
      type: 'architecture'
    },
    {
      name: 'Naina Wooden',
      repo: 'nainawooden',
      url: 'http://nainawooden.com',
      description: 'Wooden work and furniture business website showcasing custom wood services, product categories, and customer enquiries.',
      tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      type: 'furniture'
    },
    {
      name: 'Curecomm Solutions',
      repo: 'curecommsolutions',
      url: 'https://curecommsolutions.com/',
      description: 'Promotech and HRMS platform website covering reward engine, loyalty campaigns, ecommerce, fulfilment, and lead generation.',
      tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
      type: 'business'
    },
    {
      name: 'Buttonhole',
      repo: 'buttonhole',
      url: 'http://buttonhole.in',
      description: 'Menswear ecommerce website with product catalogue, cart, user login, policy pages, and customer account flow.',
      tech: ['PHP', 'MySQL', 'Bootstrap', 'jQuery'],
      type: 'ecommerce'
    },
    {
      name: 'Kamsung Electronics',
      repo: 'kamsungelectronics',
      url: 'http://kamsungelectronics.com',
      description: 'Electronics ecommerce website for computer peripherals, mobile accessories, audio devices, cables, and electrical products.',
      tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      type: 'ecommerce'
    },
    {
      name: 'Poulomi India',
      repo: 'poulomiindia',
      url: 'https://poulomiindia.com/',
      description: 'Fashion ecommerce website for menswear products with catalogue browsing, cart, account pages, and order support.',
      tech: ['PHP', 'MySQL', 'Bootstrap', 'jQuery'],
      type: 'ecommerce'
    },
    {
      name: 'Gunnu Furniture',
      repo: 'gunnuwooden',
      url: 'http://gunnuwooden.com',
      description: 'Furniture and wooden work website featuring custom furniture, repair services, brochure download, and enquiry details.',
      tech: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Bootstrap'],
      type: 'furniture'
    },
    {
      name: 'Consulenza',
      repo: 'consulenza',
      url: 'https://consulenza.co.in',
      description: 'Menswear ecommerce website with product listings, shopping cart, login, customer policies, and contact information.',
      tech: ['PHP', 'MySQL', 'Bootstrap', 'jQuery'],
      type: 'ecommerce'
    },
    // {
    //   name: 'Kasvee',
    //   repo: 'kasvee',
    //   url: 'https://kasvee.in/',
    //   description: 'Business website built for a polished online presence with responsive pages, service information, and contact flow.',
    //   tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    //   type: 'business'
    // },
    {
      name: 'Elite Design Consultants',
      repo: 'elitedesignconsultants',
      url: 'http://elitedesignconsultants.in',
      description: 'Architecture and interior design website with services, project showcases, consultation booking, and lead capture.',
      tech: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Bootstrap'],
      type: 'architecture'
    },
    // {
    //   name: 'Prime Picks India',
    //   repo: 'primepicksindia',
    //   url: 'http://primepicksindia.co.in',
    //   description: 'Ecommerce website for curated product selling with shopping flow, catalogue pages, customer account, and order features.',
    //   tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    //   type: 'ecommerce'
    // },
    {
      name: 'Zylotech India',
      repo: 'zylotechindia',
      url: 'http://zylotechindia.com',
      description: 'IT services company website for web development, software development, UI/UX, mobile app development, and branding.',
      tech: ['PHP', 'MySQL', 'Bootstrap', 'jQuery'],
      type: 'it-services'
    },
    {
      name: 'Xeno Build',
      repo: 'xenobuild',
      url: 'https://xenobuild.co.in/',
      description: 'Construction and building services website focused on company presentation, service pages, and customer enquiries.',
      tech: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Bootstrap'],
      type: 'business'
    }
  ].map((project) => ({
    ...project,
    image: thumbnailUrl(project.url)
  }));

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
          {['all', 'architecture', 'ecommerce', 'furniture', 'business', 'it-services'].map(category => (
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
