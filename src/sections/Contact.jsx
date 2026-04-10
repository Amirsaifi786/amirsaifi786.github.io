// src/sections/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiTwitter, FiMail } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Message sent! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h2
          className="text-4xl font-bold text-center text-teal-400 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Get In Touch
        </motion.h2>

        <motion.div
          className="bg-gray-800 p-8 rounded-lg border border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6 mb-8">
            <div>
              <label className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:border-teal-500 outline-none text-white"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:border-teal-500 outline-none text-white"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:border-teal-500 outline-none text-white"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-teal-500 hover:bg-teal-600 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-gray-400 mb-6">Or connect with me on:</p>
            <div className="flex justify-center gap-6">
              <a href="https://linkedin.com/in/amir-saifi" className="p-3 bg-gray-700 hover:bg-teal-500/30 rounded-full transition">
                <FiLinkedin size={24} />
              </a>
              <a href="https://github.com/Amirsaifi786" className="p-3 bg-gray-700 hover:bg-teal-500/30 rounded-full transition">
                <FiGithub size={24} />
              </a>
              <a href="https://twitter.com" className="p-3 bg-gray-700 hover:bg-teal-500/30 rounded-full transition">
                <FiTwitter size={24} />
              </a>
              <a href="mailto:your@email.com" className="p-3 bg-gray-700 hover:bg-teal-500/30 rounded-full transition">
                <FiMail size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;