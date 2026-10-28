// src/sections/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDownRight, FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi';

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
    <section id="home" className="hero-section min-h-screen flex items-center pt-20">
      <div className="hero-grid container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-copy"
        >
          <motion.p className="hero-kicker" custom={0} variants={textVariants} initial="hidden" animate="visible">
            <span className="availability-dot" /> Available for select projects
          </motion.p>
          <motion.h1 className="hero-title" custom={1} variants={textVariants} initial="hidden" animate="visible">
            I build digital <span>experiences</span> that work beautifully.
          </motion.h1>
          <motion.p className="hero-description" custom={2} variants={textVariants} initial="hidden" animate="visible">
            Hey, I’m Amir Saifi, a full-stack developer turning thoughtful ideas into fast, dependable web products.
          </motion.p>
          <motion.div className="hero-actions" custom={3} variants={textVariants} initial="hidden" animate="visible">
            <a href="#portfolio" className="hero-primary group">
              Explore my work <FiArrowRight className="group-hover:translate-x-1 transition" />
            </a>
            <a href="#contact" className="hero-secondary">Let’s talk <FiArrowDownRight /></a>
          </motion.div>
          <motion.div className="hero-proof" custom={4} variants={textVariants} initial="hidden" animate="visible">
            <div className="hero-stat"><strong>4<span>+</span></strong><small>years building for the web</small></div>
            <div className="hero-stat"><strong>30<span>+</span></strong><small>projects delivered</small></div>
            <div className="hero-socials">
              <a href="https://github.com/Amirsaifi786" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub /></a>
              <a href="https://linkedin.com/in/amir-saifi-dev" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-portrait-wrap"
          initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="portrait-orbit orbit-one" />
          <div className="portrait-orbit orbit-two" />
          <div className="portrait-frame">
            <img src="https://avatars.githubusercontent.com/u/159249074?v=4" alt="Amir Saifi" />
          </div>
          <div className="portrait-note"><span>01 / 06</span><strong>Developer<br />by craft.</strong></div>
          <div className="portrait-tag">PHP <span>·</span> Laravel <span>·</span> React</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
