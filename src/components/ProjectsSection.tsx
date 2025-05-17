"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
};

type Props = {
  projects: Project[];
};

const ProjectsSection: React.FC<Props> = ({ projects }) => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <section id="projects" className="py-20 bg-[#0F172A]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="inline-block text-sm font-medium py-1 px-3 rounded-full bg-[#F59E0B]/10 text-[#F59E0B] mb-4">
            MY PROJECTS
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">Recent Work</h3>

          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setViewMode("grid")}
              className={`px-4 py-2 rounded-lg ${
                viewMode === "grid"
                  ? "bg-[#F59E0B] text-white"
                  : "bg-[#1E293B] text-gray-400 hover:text-white"
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`px-4 py-2 rounded-lg ${
                viewMode === "list"
                  ? "bg-[#F59E0B] text-white"
                  : "bg-[#1E293B] text-gray-400 hover:text-white"
              }`}
            >
              List View
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {viewMode === "grid" ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-[#1E293B] rounded-xl overflow-hidden border border-[#334155] hover:border-[#F59E0B] transition-all duration-300 group"
                >
                  <div className="h-56 bg-[#0F172A] relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#3B82F6]/20 to-[#8B5CF6]/20">
                      <span className="text-4xl font-bold text-white/30">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-[#F59E0B]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white rounded-full text-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-all"
                        >
                          <Github size={20} />
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white rounded-full text-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-all"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 bg-[#0F172A] rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-[#1E293B] rounded-xl overflow-hidden border border-[#334155] hover:border-[#F59E0B] transition-all duration-300"
                >
                  <div className="p-6 flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/4 h-32 bg-[#0F172A] rounded-lg flex items-center justify-center">
                      <span className="text-4xl font-bold text-white/30">
                        {project.title.charAt(0)}
                      </span>
                    </div>

                    <div className="w-full md:w-3/4">
                      <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                      <p className="text-gray-400 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-[#0F172A] rounded-md">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1 rounded-lg bg-[#0F172A] text-white hover:bg-[#F59E0B] transition-all"
                        >
                          <Github size={16} className="mr-2" /> Code
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1 rounded-lg bg-[#0F172A] text-white hover:bg-[#F59E0B] transition-all"
                        >
                          <ExternalLink size={16} className="mr-2" /> Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/Vickykawadkar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-[#1E293B] text-white font-medium rounded-lg hover:bg-[#F59E0B] transition-all"
          >
            View All Projects <ArrowRight size={16} className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
