"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

interface NavbarProps {
  navLinks?: string[];
  activeSection?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  navLinks = ['Home', 'About', 'Projects', 'Contact'],
  activeSection = 'Home',
}) => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div
        className="flex justify-between items-center px-6 py-4 backdrop-blur-md bg-[#0F172A]/80 border-b border-[#334155] transition-all duration-300"
        style={{
          boxShadow: scrollY > 20 ? '0 4px 20px rgba(0, 0, 0, 0.3)' : 'none',
        }}
      >
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 0.7, type: 'spring' }}
            className="w-12 h-12 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-full flex items-center justify-center"
          >
            <span className="text-2xl font-bold">AG</span>
          </motion.div>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold tracking-wider"
          >
            AAYUSH<span className="text-[#3B82F6]">.DEV</span>
          </motion.span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              className={`cursor-pointer text-sm font-medium tracking-wider relative ${
                activeSection === link ? 'text-white' : 'text-gray-400'
              } hover:text-white transition-colors duration-300`}
              onClick={() => {
                const element = document.getElementById(link.toLowerCase());
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {link}
              {activeSection === link && (
                <motion.span
                  layoutId="activeSection"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#3B82F6]"
                  transition={{ type: 'spring', duration: 0.5 }}
                />
              )}
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden z-50" onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#0F172A]/95 z-40 flex flex-col justify-center items-center md:hidden"
          >
            {navLinks.map((link, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`py-4 text-xl font-bold ${
                  activeSection === link ? 'text-[#3B82F6]' : 'text-white'
                }`}
                onClick={() => {
                  setNavOpen(false);
                  const element = document.getElementById(link.toLowerCase());
                  if (element) {
                    setTimeout(() => {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }, 300);
                  }
                }}
              >
                {link}
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-16 flex space-x-6"
            >
              <a
                href="https://github.com/aayush598"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/20 hover:border-[#3B82F6] hover:bg-[#3B82F6]/20 transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/aayush-gid-3767a2221"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/20 hover:border-[#3B82F6] hover:bg-[#3B82F6]/20 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:aayushgid598@gmail.com"
                className="p-2 rounded-full border border-white/20 hover:border-[#3B82F6] hover:bg-[#3B82F6]/20 transition-all"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
