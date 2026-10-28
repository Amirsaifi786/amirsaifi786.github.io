// src/components/Navbar.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      className="site-nav fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="site-brand text-2xl font-bold text-teal-400" aria-label="Amir Saifi, home">
          <span className="brand-mark">AS</span>
          <span>Amir Saifi</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="site-nav-link text-gray-300 hover:text-teal-400 transition font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="site-menu-button md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="site-mobile-menu md:hidden bg-gray-800 border-t border-gray-700"
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
        >
          <div className="flex flex-col gap-4 p-4">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="site-nav-link text-gray-300 hover:text-teal-400 transition"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
