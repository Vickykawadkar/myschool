"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  github: string;
  demo: string;
};

interface ProjectSectionProps {
  projects: Project[];
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-20 bg-[#0F172A]">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
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
          <h3 className="text-3xl md:text-4xl font-bold mb-2 text-white">
            Recent Work
          </h3>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            A showcase of my work in AI, full-stack development, and machine learning.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1E293B] rounded-xl overflow-hidden border border-[#334155] hover:border-[#F59E0B] transition-all duration-300 group"
            >
              <div className="h-56 bg-[#0F172A] relative overflow-hidden">
                {/* Optional Image */}
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#3B82F6]/20 to-[#8B5CF6]/20">
                    <span className="text-4xl font-bold text-white/30">{project.title.charAt(0)}</span>
                  </div>
                )}

                {/* Hover Overlay */}
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

              {/* Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2 text-white">{project.title}</h4>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-[#0F172A] rounded-md text-white/70">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
