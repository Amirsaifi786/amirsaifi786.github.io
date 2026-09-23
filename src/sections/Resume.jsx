// src/sections/Resume.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload, FiEye, FiX, FiFileText } from 'react-icons/fi';

const RESUME_PATH = '/Amir_Saifi_Resume.pdf'; // apna resume PDF public/ folder me isi naam se rakhein

const Resume = () => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section id="resume" className="py-20 md:py-32 bg-gray-950">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h2
          className="text-4xl font-bold text-center text-teal-400 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Resume
        </motion.h2>
        <motion.p
          className="text-center text-gray-400 mb-12"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          A quick look at my experience, skills, and background.
        </motion.p>

        <motion.div
          className="bg-gray-800 p-8 rounded-lg border border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="p-4 bg-teal-500/10 rounded-lg text-teal-400 shrink-0">
              <FiFileText size={32} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">Amir Saifi — Resume</h3>
              <p className="text-gray-400 text-sm">PDF · Full Stack Developer</p>
            </div>
          </div>

          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => setShowPreview(true)}
              className="flex items-center gap-2 px-5 py-2.5 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition text-white"
            >
              <FiEye size={18} />
              Preview
            </button>
            <a
              href={RESUME_PATH}
              download="Amir_Saifi_Resume.pdf"
              className="flex items-center gap-2 px-5 py-2.5 bg-teal-500 hover:bg-teal-600 rounded-lg font-medium transition text-white"
            >
              <FiDownload size={18} />
              Download
            </a>
          </div>
        </motion.div>
      </div>

      {/* Resume preview modal */}
      <AnimatePresence>
        {showPreview && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPreview(false)}
          >
            <motion.div
              className="bg-gray-800 rounded-lg border border-gray-700 w-full max-w-3xl h-[85vh] flex flex-col overflow-hidden"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-3 border-b border-gray-700">
                <h3 className="text-lg font-semibold text-white">Resume Preview</h3>
                <div className="flex items-center gap-3">
                  <a
                    href={RESUME_PATH}
                    download="Amir_Saifi_Resume.pdf"
                    className="flex items-center gap-1.5 text-sm px-3 py-1.5 bg-teal-500 hover:bg-teal-600 rounded-md text-white transition"
                  >
                    <FiDownload size={16} />
                    Download
                  </a>
                  <button
                    onClick={() => setShowPreview(false)}
                    className="p-2 rounded-md hover:bg-gray-700 text-gray-300 hover:text-white transition"
                    aria-label="Close resume preview"
                  >
                    <FiX size={20} />
                  </button>
                </div>
              </div>
              <div className="flex-1 bg-gray-900">
                <iframe
                  src={RESUME_PATH}
                  title="Resume Preview"
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Resume;