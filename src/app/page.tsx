"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, ArrowRight, Download, ExternalLink, Code } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import { useScroll } from "framer-motion";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { education, skills, experiences, projects, achievements } from "@/components/profileData";


// Navigation links
const navLinks = ["HOME", "ABOUT", "SKILLS", "EXPERIENCE", "PROJECTS", "CONTACT"];

export default function Portfolio() {
  const { scrollY } = useScroll();
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("HOME");
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const [scrollYValue, setScrollYValue] = useState(0);

  // Handle scroll for parallax effects and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      // setScrollY(window.scrollY);
      const currentY = window.scrollY;
      setScrollYValue(currentY);
      
      // Determine active section based on scroll position
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (currentY >= sectionTop && currentY < sectionTop + sectionHeight) {
          setActiveSection(section.id.toUpperCase());
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

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
      <HeroSection />

      {/* About Section */}
      <AboutSection scrollY={scrollY.get()} education={education} achievements={achievements} />

      {/* Skills Section */}
      <SkillsSection skills={skills} containerVariants={containerVariants} itemVariants={itemVariants} />

      {/* Experience Section */}
      <ExperienceSection experiences={experiences} scrollY={scrollY.get()} />

      {/* Projects Section */}
      <ProjectsSection projects={projects} />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Scroll to top button */}
      <AnimatePresence>
        {scrollY.get() > 300 && (
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