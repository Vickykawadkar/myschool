"use client";

import { motion } from "framer-motion";
import React from "react";

type Experience = {
  title: string;
  role: string;
  period: string;
  desc: string;
  tech: string[];
  color: string;
};

type Props = {
  experiences: Experience[];
  scrollY: number;
};

const ExperienceSection: React.FC<Props> = ({ experiences, scrollY }) => {
  return (
    <section id="experience" className="py-20 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 -z-10 w-96 h-96 rounded-full blur-3xl bg-[#10B981]/20"
        style={{ transform: `translateY(${scrollY * -0.1}px)` }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="inline-block text-sm font-medium py-1 px-3 rounded-full bg-[#10B981]/10 text-[#10B981] mb-4">
            MY EXPERIENCE
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">Work & Projects</h3>
        </motion.div>

        <div className="flex flex-col items-center">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative w-full max-w-3xl mb-12 last:mb-0"
            >
              {/* Timeline dot and line */}
              <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center">
                <div
                  className="w-5 h-5 rounded-full z-10"
                  style={{ backgroundColor: exp.color }}
                />
                {idx !== experiences.length - 1 && (
                  <div className="w-0.5 h-full bg-gray-700" />
                )}
              </div>

              {/* Content card */}
              <div className="ml-10 bg-[#1E293B] rounded-xl overflow-hidden border border-[#334155] hover:border-gray-500 transition-all duration-300 hover:shadow-lg hover:shadow-[#0F172A]/50">
                <div className="p-1" style={{ backgroundColor: exp.color }}>
                  <div className="px-5 py-1 bg-[#1E293B] rounded-t-lg">
                    <span className="text-sm font-medium" style={{ color: exp.color }}>
                      {exp.period}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h4 className="text-xl font-bold">{exp.title}</h4>
                    <span className="text-sm bg-[#0F172A] px-3 py-1 rounded-full mt-2 md:mt-0">
                      {exp.role}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{exp.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-[#0F172A] rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
