// src/sections/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gray-800">
      <div className="container mx-auto px-4 max-w-5xl">

{/* <img   className="text-4xl font-bold text-center text-teal-400 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }} 
          src="https://avatars.githubusercontent.com/u/159249074?v=4" alt="" /> */}

        <motion.div
          className="bg-gray-900 p-8 rounded-lg border border-gray-700"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            I'm a passionate full-stack developer with 5+ years of experience building 
            scalable web applications. My expertise spans across PHP, Laravel, CodeIgniter 
            for backend development, and React.js with modern frontend technologies.
          </p>
          
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            I specialize in creating responsive, user-friendly applications that solve 
            real-world problems. From traditional MVC frameworks to modern MERN stack 
            development, I'm comfortable working across the full technology spectrum.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            When I'm not coding, I enjoy exploring new technologies, contributing to 
            open-source projects, and helping others learn web development. Let's build 
            something amazing together!
          </p>

          <motion.a
            href="/path-to-resume.pdf"
            className="inline-block mt-8 px-6 py-3 bg-teal-500 hover:bg-teal-600 rounded-lg font-semibold transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
        📥 Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;