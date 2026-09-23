import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiLinkedin, FiGithub, FiMail, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({
    type: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus({
        type: 'error',
        message: 'Please fill in all fields.',
      });
      return;
    }

    setIsSending(true);
    setStatus({
      type: '',
      message: '',
    });

    try {
      await emailjs.send(
        'service_4u66lo8',
        'template_f072spd',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to_email: 'amirsaifi7671@gmail.com',
        },
        {
          publicKey: 'muvJ7wCioprB6wygD',
        }
      );

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.',
      });

      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS Error:', error);

      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.',
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h2
          className="text-4xl font-bold text-center text-teal-400 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <motion.div
          className="bg-gray-800 p-8 rounded-lg border border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-6 mb-8">
            <div>
              <label className="block text-gray-300 mb-2">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none text-white transition"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none text-white transition"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none text-white transition resize-none"
                placeholder="Your message..."
              />
            </div>

            {status.message && (
              <div
                className={`px-4 py-3 rounded-lg text-sm ${
                  status.type === 'success'
                    ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                    : 'bg-red-500/10 border border-red-500/30 text-red-400'
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSending}
              className="w-full px-6 py-3 bg-teal-500 hover:bg-teal-600 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-lg font-semibold transition flex items-center justify-center gap-2"
            >
              {isSending ? (
                'Sending...'
              ) : (
                <>
                  <FiSend />
                  Send Message
                </>
              )}
            </button>
          </form>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-gray-400 mb-6">
              Or connect with me on:
            </p>

            <div className="flex justify-center gap-6">
              <a
                href="https://linkedin.com/in/amir-saifi-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 bg-gray-700 hover:bg-teal-500/30 rounded-full transition"
              >
                <FiLinkedin size={24} />
              </a>

              <a
                href="https://github.com/Amirsaifi786"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 bg-gray-700 hover:bg-teal-500/30 rounded-full transition"
              >
                <FiGithub size={24} />
              </a>

              <a
                href="mailto:amirsaifi7671@gmail.com"
                aria-label="Email"
                className="p-3 bg-gray-700 hover:bg-teal-500/30 rounded-full transition"
              >
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

