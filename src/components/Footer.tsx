'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] border-t border-[#334155] py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-full flex items-center justify-center">
                <span className="text-lg font-bold">AG</span>
              </div>
              <span className="text-xl font-bold tracking-wider">
                AAYUSH<span className="text-[#3B82F6]">.DEV</span>
              </span>
            </div>
            <p className="text-gray-400 mt-2 text-sm">
              Results-driven AI and machine learning specialist.
            </p>
          </motion.div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/Vickykawadkar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#1E293B] rounded-full text-gray-400 hover:text-white hover:bg-[#3B82F6]/20 transition-all"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/vicky-kawadkar-376459366"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#1E293B] rounded-full text-gray-400 hover:text-white hover:bg-[#3B82F6]/20 transition-all"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:vickykawadkar779@gmail.com"
              className="p-2 bg-[#1E293B] rounded-full text-gray-400 hover:text-white hover:bg-[#3B82F6]/20 transition-all"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-[#334155] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {currentYear} VICKY KAWADKAR. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-[#3B82F6] hover:underline text-sm">
              Built with Next.js & Framer Motion
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
