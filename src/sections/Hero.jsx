// src/sections/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 }
    })
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center pt-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Profile Image */}
          <motion.img
            src="https://avatars.githubusercontent.com/u/159249074?v=4"
            alt="Amir Saifi"
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-teal-500"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          />

          {/* Title */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Hi, I'm <span className="text-teal-400">Amir Saifi</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-2xl md:text-3xl text-gray-400 mb-6"
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Full Stack Developer
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed"
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Specialized in PHP, Laravel, CodeIgniter, React.js, Node.js, and MongoDB. 
            Building scalable web applications with modern technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            custom={3}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <a href="#portfolio" className="px-8 py-3 bg-teal-500 hover:bg-teal-600 rounded-lg font-semibold flex items-center justify-center gap-2 group">
              View My Work <FiArrowRight className="group-hover:translate-x-1 transition" />
            </a>
            <a href="#contact" className="px-8 py-3 border-2 border-teal-500 text-teal-400 hover:bg-teal-500/10 rounded-lg font-semibold">
              Get in Touch
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 mt-16 max-w-md mx-auto"
            custom={4}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <div>
              <div className="text-3xl font-bold text-teal-400">5+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-400">15+</div>
              <div className="text-gray-400">Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-400">10+</div>
              <div className="text-gray-400">Technologies</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;