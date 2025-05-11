// components/AboutSection.tsx
"use client";

import { motion } from "framer-motion";

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

interface Achievement {
  title: string;
  date: string;
  description: string;
}

interface AboutSectionProps {
  scrollY: number;
  education: Education[];
  achievements: Achievement[];
}

const AboutSection: React.FC<AboutSectionProps> = ({ scrollY, education, achievements }) => {
  return (
    <section id="about" className="py-20 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-0 right-0 -z-10 w-96 h-96 rounded-full blur-3xl bg-[#3B82F6]/30"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="inline-block text-sm font-medium py-1 px-3 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] mb-4">
            ABOUT ME
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            Get to Know Me Better
          </h3>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h4 className="text-2xl font-bold mb-6 text-[#3B82F6]">Who Am I?</h4>
            <div className="space-y-4 text-gray-300">
              <p>
                I'm a results-driven AI and machine learning specialist with a passion for developing
                innovative solutions that make a difference. With expertise in deep learning, computer vision,
                and NLP, I enjoy tackling complex problems and turning them into elegant, efficient systems.
              </p>
              <p>
                My goal is to bridge the gap between advanced AI technologies and practical applications,
                creating solutions that are not only technically impressive but also accessible and user-friendly.
              </p>
              <p>
                I believe in continuous learning and staying at the forefront of technological advancements,
                always looking for new challenges and opportunities to grow my skills and knowledge.
              </p>
              <p>
                When I'm not coding or training models, I enjoy exploring new technologies, participating
                in hackathons, and contributing to open-source projects.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-bold mb-4">Areas of Interest</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "Deep Learning in Healthcare",
                  "Natural Language Processing",
                  "Predictive Modeling",
                  "Big Data Analytics",
                  "Human-Computer Interaction"
                ].map((interest, idx) => (
                  <span key={idx} className="px-3 py-1 bg-[#1E293B] rounded-full text-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h4 className="text-2xl font-bold mb-6 text-[#3B82F6]">Education & Achievements</h4>

            <div className="mb-8">
              <h5 className="text-xl font-bold mb-4">Education</h5>
              {education.map((edu, idx) => (
                <div key={idx} className="mb-5 pl-4 border-l-2 border-[#3B82F6]">
                  <h6 className="text-lg font-semibold">{edu.degree}</h6>
                  <p className="text-[#3B82F6]">{edu.institution}</p>
                  <p className="text-gray-400 text-sm">{edu.location} | {edu.period}</p>
                </div>
              ))}
            </div>

            <div>
              <h5 className="text-xl font-bold mb-4">Key Achievements</h5>
              <div className="space-y-4">
                {achievements.map((achievement, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-[#1E293B] p-4 rounded-lg"
                  >
                    <div className="flex justify-between items-start">
                      <h6 className="text-lg font-semibold">{achievement.title}</h6>
                      <span className="text-sm text-[#3B82F6]">{achievement.date}</span>
                    </div>
                    <p className="text-gray-400 mt-2">{achievement.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
