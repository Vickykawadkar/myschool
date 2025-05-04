"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, ArrowRight, Download, ExternalLink, Code } from "lucide-react";
import Navbar from "@/components/navbar";

// Navigation links
const navLinks = ["HOME", "ABOUT", "SKILLS", "EXPERIENCE", "PROJECTS", "CONTACT"];

export default function Portfolio() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("HOME");
  const [scrollY, setScrollY] = useState(0);
  const [viewMode, setViewMode] = useState("grid"); // grid or list

  // Handle scroll for parallax effects and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Determine active section based on scroll position
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.id.toUpperCase());
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  // Education details
  const education = [
    {
      degree: "B.Tech in Electronics and Communication",
      institution: "Indore Institute of Science and Technology",
      location: "Indore, India",
      period: "2022 - Present"
    },
    {
      degree: "12th Grade (88%)",
      institution: "Career Academy",
      location: "Indore, India",
      period: "2021 - 2022"
    }
  ];

  // Skills categorized
  const skills = {
    programming: ["Python", "JavaScript", "C++", "HTML", "CSS"],
    mlTools: ["TensorFlow", "Keras", "Scikit-learn", "OpenCV"],
    dataScience: ["Feature Engineering", "Dataset Preprocessing", "Statistical Analysis"],
    frameworks: ["React", "Next.js", "Streamlit", "Flask", "LangChain"],
    devOps: ["Git", "Docker", "REST APIs"]
  };

  // Experience details
  const experiences = [
    {
      title: 'DiagnosisX - AI ECG System',
      role: 'Lead Developer',
      period: 'Feb 2024 - Apr 2024',
      desc: 'Built a diagnostic model achieving 97% accuracy on 20,000+ ECG samples across 25+ classes. Developed a Streamlit interface for real-time predictions, reducing diagnosis time by 70%.',
      tech: ['TensorFlow', 'Keras', 'Streamlit', 'Python'],
      color: '#3B82F6'
    },
    {
      title: 'Health Assistant Chatbot',
      role: 'AI Engineer',
      period: 'Jul 2024 - Present',
      desc: 'Designed a LangChain-powered chatbot handling 500+ monthly queries for symptom-based disease prediction. Delivered personalized health tips with 90% confidence scores.',
      tech: ['LangChain', 'Python', 'NLP', 'Flask'],
      color: '#10B981'
    },
    {
      title: 'Gesture-Based Game Control',
      role: 'Computer Vision Specialist',
      period: 'Oct 2022 - Jul 2023',
      desc: 'Enabled gesture-based interaction using OpenCV, achieving 95% accuracy for real-time control. Improved accessibility for 100+ users, replacing keyboard and mouse reliance.',
      tech: ['OpenCV', 'Python', 'Computer Vision'],
      color: '#8B5CF6'
    }
  ];

  // Projects details
  const projects = [
    {
      title: 'DiagnosisX',
      description: 'AI-powered ECG diagnosis system with real-time analysis capabilities and medical-grade accuracy.',
      tech: ['Python', 'TensorFlow', 'Streamlit', 'ECG Analysis'],
      image: '/project-diagnosisx.jpg',
      github: 'https://github.com/aayush598/diagnosisx',
      demo: 'https://diagnosisx-demo.vercel.app'
    },
    {
      title: 'Health Assistant Chatbot',
      description: 'Intelligent conversational agent for preliminary medical assessments and health recommendations.',
      tech: ['Python', 'LangChain', 'NLP', 'Healthcare'],
      image: '/project-chatbot.jpg',
      github: 'https://github.com/aayush598/health-assistant',
      demo: 'https://health-assistant-demo.vercel.app'
    },
    {
      title: 'Gesture-Based Controller',
      description: 'Computer vision system that translates hand gestures into game commands for an immersive experience.',
      tech: ['Python', 'OpenCV', 'Computer Vision', 'HCI'],
      image: '/project-gesture.jpg',
      github: 'https://github.com/aayush598/gesture-control',
      demo: 'https://gesture-control-demo.vercel.app'
    },
    {
      title: 'Budget Tracking System',
      description: 'Hackathon-winning financial management tool that reduces cash flow errors by 20%.',
      tech: ['React', 'Node.js', 'MongoDB', 'Finance'],
      image: '/project-budget.jpg',
      github: 'https://github.com/aayush598/budget-tracker',
      demo: 'https://budget-tracker-demo.vercel.app'
    }
  ];

  // Achievements
  const achievements = [
    {
      title: 'Clash Hackathon Winner',
      date: 'March 2024',
      description: 'Led a team of 5 to develop a budget-tracking system, reducing cash flow errors by 20%.'
    },
    {
      title: 'Innovative Idea Presentation Winner',
      date: 'August 2022',
      description: 'Developed an automatic attendance system using facial recognition, presented to an audience of 50+ educators.'
    },
    {
      title: 'Technex 2022 (Mage): Runner-Up',
      date: 'March 2022',
      description: 'Designed a fixed-wing Mars rover model, earning 2nd place among 500+ participants in an IIT BHU-organized event.'
    }
  ];

  // Animation variants
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

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white font-mono">
      {/* Particle Background Effect */}
      <div className="fixed inset-0 z-0 overflow-hidden opacity-20">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 5 + 1}px`,
              height: `${Math.random() * 5 + 1}px`,
              opacity: Math.random() * 0.9 + 0.1,
              animation: `float ${Math.random() * 30 + 20}s linear infinite`
            }}
          />
        ))}
      </div>

      {/* Fixed Navbar */}
      <Navbar navLinks={['Home', 'About', 'Services', 'Contact']} activeSection="Home" />


      {/* Hero Section */}
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
                    AAYUSH GID<span className="text-[#3B82F6]">.</span>
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
                    className="px-6 py-3 bg-[#3B82F6] text-white font-medium rounded-lg flex items-center gap-2 hover:bg-[#2563EB] transition-all transform hover:translate-y-[-2px]"
                  >
                    Get In Touch <ArrowRight size={16} />
                  </a>
                  <a
                    href="/AayushGid_Resume.pdf"
                    download
                    className="px-6 py-3 bg-transparent border border-[#3B82F6] text-[#3B82F6] font-medium rounded-lg flex items-center gap-2 hover:bg-[#3B82F6]/10 transition-all transform hover:translate-y-[-2px]"
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
                  <a href="https://github.com/aayush598" target="_blank" rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-all">
                    <Github size={22} />
                  </a>
                  <a href="https://linkedin.com/in/aayush-gid-3767a2221" target="_blank" rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-all">
                    <Linkedin size={22} />
                  </a>
                  <a href="mailto:aayushgid598@gmail.com"
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
                {/* Replace with actual profile image */}
                <div className="absolute inset-2 rounded-full bg-[#1E293B] flex items-center justify-center overflow-hidden">
                  <span className="text-6xl font-bold">AG</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
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

      {/* About Section */}
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
                  {["Deep Learning in Healthcare", "Natural Language Processing", "Predictive Modeling", 
                    "Big Data Analytics", "Human-Computer Interaction"].map((interest, idx) => (
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

      {/* Skills Section */}
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
            <h3 className="text-3xl md:text-4xl font-bold">
              Technical Expertise
            </h3>
          </motion.div>
          
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
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h4 className="text-xl font-bold mb-4 text-white">Programming Languages</h4>
              <div className="flex flex-wrap gap-3">
                {skills.programming.map((skill, idx) => (
                  <span key={idx} 
                        className="px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full text-sm border border-[#3B82F6]/20">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            
            {/* ML Tools */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-6 rounded-xl border border-[#334155] hover:border-[#10B981]/50 transition-all duration-300"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h4 className="text-xl font-bold mb-4 text-white">Machine Learning & AI</h4>
              <div className="flex flex-wrap gap-3">
                {skills.mlTools.map((skill, idx) => (
                  <span key={idx} 
                        className="px-3 py-1 bg-[#10B981]/10 text-[#10B981] rounded-full text-sm border border-[#10B981]/20">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            
            {/* Data Science */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-6 rounded-xl border border-[#334155] hover:border-[#EC4899]/50 transition-all duration-300"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h4 className="text-xl font-bold mb-4 text-white">Data Science</h4>
              <div className="flex flex-wrap gap-3">
                {skills.dataScience.map((skill, idx) => (
                  <span key={idx} 
                        className="px-3 py-1 bg-[#EC4899]/10 text-[#EC4899] rounded-full text-sm border border-[#EC4899]/20">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            
            {/* Frameworks */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-6 rounded-xl border border-[#334155] hover:border-[#8B5CF6]/50 transition-all duration-300"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h4 className="text-xl font-bold mb-4 text-white">Frameworks & Libraries</h4>
              <div className="flex flex-wrap gap-3">
                {skills.frameworks.map((skill, idx) => (
                  <span key={idx} 
                        className="px-3 py-1 bg-[#8B5CF6]/10 text-[#8B5CF6] rounded-full text-sm border border-[#8B5CF6]/20">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            
            {/* DevOps & Tools */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-6 rounded-xl border border-[#334155] hover:border-[#F59E0B]/50 transition-all duration-300"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h4 className="text-xl font-bold mb-4 text-white">DevOps & Tools</h4>
              <div className="flex flex-wrap gap-3">
                {skills.devOps.map((skill, idx) => (
                  <span key={idx} 
                        className="px-3 py-1 bg-[#F59E0B]/10 text-[#F59E0B] rounded-full text-sm border border-[#F59E0B]/20">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Skill Meter Section */}
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
                  <div className="flex justify-between mb-1">
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

      {/* Experience Section */}
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
            <h3 className="text-3xl md:text-4xl font-bold">
              Work & Projects
            </h3>
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
                      <span className="text-sm font-medium" style={{ color: exp.color }}>{exp.period}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h4 className="text-xl font-bold">{exp.title}</h4>
                      <span className="text-sm bg-[#0F172A] px-3 py-1 rounded-full mt-2 md:mt-0">{exp.role}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{exp.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 bg-[#0F172A] rounded-md">
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

      {/* Projects Section */}
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
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              Recent Work
            </h3>
            
            <div className="flex justify-center space-x-4 mb-8">
              <button 
                onClick={() => setViewMode("grid")}
                className={`px-4 py-2 rounded-lg ${viewMode === "grid" 
                  ? "bg-[#F59E0B] text-white" 
                  : "bg-[#1E293B] text-gray-400 hover:text-white"}`}
              >
                Grid View
              </button>
              <button 
                onClick={() => setViewMode("list")}
                className={`px-4 py-2 rounded-lg ${viewMode === "list" 
                  ? "bg-[#F59E0B] text-white" 
                  : "bg-[#1E293B] text-gray-400 hover:text-white"}`}
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
                      {/* Placeholder for project image */}
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#3B82F6]/20 to-[#8B5CF6]/20">
                        <span className="text-4xl font-bold text-white/30">{project.title.charAt(0)}</span>
                      </div>
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-[#F59E0B]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex space-x-4">
                          <a href={project.github} target="_blank" rel="noopener noreferrer"
                             className="p-3 bg-white rounded-full text-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-all">
                            <Github size={20} />
                          </a>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer"
                             className="p-3 bg-white rounded-full text-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-all">
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
                        <span className="text-4xl font-bold text-white/30">{project.title.charAt(0)}</span>
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
                          <a href={project.github} target="_blank" rel="noopener noreferrer"
                             className="inline-flex items-center px-3 py-1 rounded-lg bg-[#0F172A] text-white hover:bg-[#F59E0B] transition-all">
                            <Github size={16} className="mr-2" /> Code
                          </a>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer"
                             className="inline-flex items-center px-3 py-1 rounded-lg bg-[#0F172A] text-white hover:bg-[#F59E0B] transition-all">
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
              href="https://github.com/aayush598"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-[#1E293B] text-white font-medium rounded-lg hover:bg-[#F59E0B] transition-all"
            >
              View All Projects <ArrowRight size={16} className="ml-2" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -z-10 w-96 h-96 rounded-full blur-3xl bg-[#3B82F6]/20"
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
              GET IN TOUCH
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold">
              Let's Work Together
            </h3>
          </motion.div>
          
          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-2/5"
            >
              <h4 className="text-2xl font-bold mb-6">Contact Information</h4>
              <p className="text-gray-400 mb-8">
                Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 bg-[#1E293B] rounded-lg mr-4">
                    <Mail size={20} className="text-[#3B82F6]" />
                  </div>
                  <div>
                    <h5 className="font-semibold">Email</h5>
                    <a href="mailto:aayushgid598@gmail.com" className="text-gray-400 hover:text-[#3B82F6] transition-colors">
                      aayushgid598@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-[#1E293B] rounded-lg mr-4">
                    <Linkedin size={20} className="text-[#3B82F6]" />
                  </div>
                  <div>
                    <h5 className="font-semibold">LinkedIn</h5>
                    <a href="https://linkedin.com/in/aayush-gid-3767a2221" target="_blank" rel="noopener noreferrer" 
                       className="text-gray-400 hover:text-[#3B82F6] transition-colors">
                      linkedin.com/in/aayush-gid-3767a2221
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-[#1E293B] rounded-lg mr-4">
                    <Github size={20} className="text-[#3B82F6]" />
                  </div>
                  <div>
                    <h5 className="font-semibold">GitHub</h5>
                    <a href="https://github.com/aayush598" target="_blank" rel="noopener noreferrer" 
                       className="text-gray-400 hover:text-[#3B82F6] transition-colors">
                      github.com/aayush598
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:w-3/5"
            >
              <form className="bg-[#1E293B] p-8 rounded-xl border border-[#334155]">
                <h4 className="text-2xl font-bold mb-6">Send Me a Message</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 bg-[#0F172A] border border-[#334155] rounded-lg focus:outline-none focus:border-[#3B82F6] transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 bg-[#0F172A] border border-[#334155] rounded-lg focus:outline-none focus:border-[#3B82F6] transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 bg-[#0F172A] border border-[#334155] rounded-lg focus:outline-none focus:border-[#3B82F6] transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-3 bg-[#0F172A] border border-[#334155] rounded-lg focus:outline-none focus:border-[#3B82F6] transition-colors resize-none"
                    placeholder="Your message here..."
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full px-6 py-3 bg-[#3B82F6] text-white font-medium rounded-lg hover:bg-[#2563EB] transition-all flex items-center justify-center"
                >
                  Send Message
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
              <a href="https://github.com/aayush598" target="_blank" rel="noopener noreferrer"
                 className="p-2 bg-[#1E293B] rounded-full text-gray-400 hover:text-white hover:bg-[#3B82F6]/20 transition-all">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/aayush-gid-3767a2221" target="_blank" rel="noopener noreferrer"
                 className="p-2 bg-[#1E293B] rounded-full text-gray-400 hover:text-white hover:bg-[#3B82F6]/20 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="mailto:aayushgid598@gmail.com"
                 className="p-2 bg-[#1E293B] rounded-full text-gray-400 hover:text-white hover:bg-[#3B82F6]/20 transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="border-t border-[#334155] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Aayush Gid. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-[#3B82F6] hover:underline text-sm">
                Built with Next.js & Framer Motion
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <AnimatePresence>
        {scrollY > 300 && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-[#3B82F6] text-white shadow-lg z-50 hover:bg-[#2563EB] transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m18 15-6-6-6 6"/>
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Added custom keyframes for the particles */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
    </>
  );
}