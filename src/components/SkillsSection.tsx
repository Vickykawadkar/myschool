"use client";

import { motion } from "framer-motion";

interface SkillsSectionProps {
  skills: {
    programming: string[];
    mlTools: string[];
    dataScience: string[];
    frameworks: string[];
    devOps: string[];
  };
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <section id="skills" className="py-20 bg-[#0F172A]">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="inline-block text-sm font-medium py-1 px-3 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] mb-4">
            MY SKILLS
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Technical Expertise
          </h3>
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Programming Languages */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-6 rounded-xl border border-[#334155] hover:border-[#3B82F6]/50 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <h4 className="text-xl font-bold mb-4 text-white">Programming Languages</h4>
            <div className="flex flex-wrap gap-3">
              {skills.programming.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full text-sm border border-[#3B82F6]/20">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ML Tools */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-6 rounded-xl border border-[#334155] hover:border-[#10B981]/50 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <h4 className="text-xl font-bold mb-4 text-white">Machine Learning & AI</h4>
            <div className="flex flex-wrap gap-3">
              {skills.mlTools.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 bg-[#10B981]/10 text-[#10B981] rounded-full text-sm border border-[#10B981]/20">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Data Science */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-6 rounded-xl border border-[#334155] hover:border-[#EC4899]/50 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <h4 className="text-xl font-bold mb-4 text-white">Data Science</h4>
            <div className="flex flex-wrap gap-3">
              {skills.dataScience.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 bg-[#EC4899]/10 text-[#EC4899] rounded-full text-sm border border-[#EC4899]/20">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Frameworks */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-6 rounded-xl border border-[#334155] hover:border-[#8B5CF6]/50 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <h4 className="text-xl font-bold mb-4 text-white">Frameworks & Libraries</h4>
            <div className="flex flex-wrap gap-3">
              {skills.frameworks.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 bg-[#8B5CF6]/10 text-[#8B5CF6] rounded-full text-sm border border-[#8B5CF6]/20">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* DevOps Tools */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-6 rounded-xl border border-[#334155] hover:border-[#F59E0B]/50 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <h4 className="text-xl font-bold mb-4 text-white">DevOps & Tools</h4>
            <div className="flex flex-wrap gap-3">
              {skills.devOps.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 bg-[#F59E0B]/10 text-[#F59E0B] rounded-full text-sm border border-[#F59E0B]/20">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
