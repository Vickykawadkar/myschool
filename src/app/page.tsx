"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "Courses", "About", "Contact"];

export default function Home() {
  const [search, setSearch] = useState("");
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 sm:px-12 py-4 shadow-sm border-b border-[var(--card-border)] sticky top-0 z-50 bg-[var(--background)] backdrop-blur-md">
        <div className="text-xl font-bold text-[var(--primary)]">CourseHub</div>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex gap-8 text-sm font-medium">
          {navLinks.map((link, idx) => (
            <li
              key={idx}
              className="hover:text-[var(--primary)] transition-colors cursor-pointer"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden">
          <button onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Menu */}
      {navOpen && (
        <div className="sm:hidden bg-[var(--background)] border-b border-[var(--card-border)] px-6 py-4 space-y-2">
          {navLinks.map((link, idx) => (
            <div
              key={idx}
              className="text-sm font-medium hover:text-[var(--primary)] cursor-pointer"
            >
              {link}
            </div>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <main className="px-6 sm:px-12 py-16 flex flex-col gap-12 items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-bold leading-tight"
        >
          Master Your Skills with{" "}
          <span className="text-[var(--primary)]">Expert Courses</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-500 dark:text-gray-400 max-w-xl"
        >
          Explore a wide range of curated courses from industry professionals to
          boost your knowledge and career.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full max-w-md flex border border-[var(--card-border)] rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-[var(--primary)]"
        >
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search courses..."
            className="w-full px-4 py-2 bg-transparent outline-none"
          />
          <button className="bg-[var(--primary)] text-white px-4 py-2 font-medium hover:opacity-90 transition-all">
            Search
          </button>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          <a
            href="#"
            className="bg-[var(--primary)] text-white rounded-full px-6 py-3 text-sm font-semibold shadow hover:shadow-md transition-all"
          >
            Browse Courses
          </a>
          <a
            href="#"
            className="border border-[var(--primary)] text-[var(--primary)] rounded-full px-6 py-3 text-sm font-semibold hover:bg-[var(--primary)] hover:text-white transition-all"
          >
            Become an Instructor
          </a>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-[var(--card-border)] text-sm text-gray-400 dark:text-gray-600">
        © 2025 CourseHub. All rights reserved.
      </footer>
    </div>
  );
}
