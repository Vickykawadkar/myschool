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
  containerVariants: any;
  itemVariants: any;
}

const SkillsSection = ({ skills, containerVariants, itemVariants }: SkillsSectionProps) => {
  return (
    <section id="skills" className="py-20 bg-[#0F172A]">
      <div className="container mx-auto px-6">
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
          <h3 className="text-3xl md:text-4xl font-bold">Technical Expertise</h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Skill Categories */}
          {[
            { title: "Programming Languages", items: skills.programming, color: "#3B82F6" },
            { title: "Machine Learning & AI", items: skills.mlTools, color: "#10B981" },
            { title: "Data Science", items: skills.dataScience, color: "#EC4899" },
            { title: "Frameworks & Libraries", items: skills.frameworks, color: "#8B5CF6" },
            { title: "DevOps & Tools", items: skills.devOps, color: "#F59E0B" }
          ].map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-6 rounded-xl border border-[#334155] transition-all duration-300"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              style={{ borderColor: `${category.color}80` }}
            >
              <h4 className="text-xl font-bold mb-4 text-white">{category.title}</h4>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-sm border"
                    style={{
                      backgroundColor: `${category.color}1A`,
                      color: category.color,
                      borderColor: `${category.color}33`
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency Meter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#1E293B] p-8 rounded-xl border border-[#334155]"
        >
          <h4 className="text-xl font-bold mb-6 text-center">Proficiency Levels</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {[
              { skill: "Python", level: 95, color: "#3B82F6" },
              { skill: "Machine Learning", level: 90, color: "#10B981" },
              { skill: "Computer Vision", level: 85, color: "#8B5CF6" },
              { skill: "JavaScript/React", level: 80, color: "#F59E0B" },
              { skill: "NLP", level: 88, color: "#EC4899" },
              { skill: "Data Analysis", level: 92, color: "#6366F1" }
            ].map((item, idx) => (
              <div key={idx} className="mb-3">
                <div className="flex justify-between mb-1 text-white">
                  <span>{item.skill}</span>
                  <span>{item.level}%</span>
                </div>
                <div className="h-2 w-full bg-[#0F172A] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1, delay: 0.2 * idx }}
                    viewport={{ once: true }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
