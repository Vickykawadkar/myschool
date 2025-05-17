// components/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between">
          <div className="w-full md:w-3/5">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-[#3B82F6] font-bold mb-2 tracking-wider">Hi, I'm</h2>
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-white"
                >
                  VICKY <span className="text-[#3B82F6]">.</span>
                </motion.h1>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-300">
                  AI & Machine Learning Specialist
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                  Specializing in deep learning, computer vision, and NLP. Building AI-driven solutions with 
                  97% accuracy in diagnostic systems and enhancing user experiences through innovative integrations.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <a
                  href="#contact"
                  className="px-6 py-3 bg-[#3B82F6] text-white font-medium rounded-lg flex items-center gap-2 hover:bg-[#2563EB] transition-all transform hover:-translate-y-0.5"
                >
                  Get In Touch <ArrowRight size={16} />
                </a>
                <a
                  href="/AayushGid_Resume.pdf"
                  download
                  className="px-6 py-3 bg-transparent border border-[#3B82F6] text-[#3B82F6] font-medium rounded-lg flex items-center gap-2 hover:bg-[#3B82F6]/10 transition-all transform hover:-translate-y-0.5"
                >
                  Download CV <Download size={16} />
                </a>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="mt-12 flex items-center gap-6"
              >
                <a href="https://github.com/Vickykawadkar" target="_blank" rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all">
                  <Github size={22} />
                </a>
                <a href="https://www.linkedin.com/in/vicky-kawadkar-376459366" target="_blank" rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all">
                  <Linkedin size={22} />
                </a>
                <a href="mailto:vickykawadkar779@gmail.com"
                  className="text-gray-400 hover:text-white transition-all">
                  <Mail size={22} />
                </a>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full md:w-2/5 mb-12 md:mb-0 flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] animate-pulse blur-xl opacity-30"></div>
              <div className="absolute inset-2 rounded-full bg-[#1E293B] flex items-center justify-center overflow-hidden">
                <span className="text-6xl font-bold">VK</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
        <div className="w-5 h-8 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-1 bg-gray-400 rounded-full mt-1"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
