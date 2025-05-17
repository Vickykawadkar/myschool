"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

interface NavbarProps {
  navLinks: string[];
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ navLinks, activeSection }) => {
  const [navOpen, setNavOpen] = useState(false);

  const handleScroll = () => {
    if (navOpen) setNavOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0F172A]/90 backdrop-blur border-b border-[#334155]">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 text-white font-bold text-lg">
          <div className="w-8 h-8 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-full flex items-center justify-center">
            <span>VK</span>
          </div>
          <span>VICKY<span className="text-[#3B82F6]">.DEV</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-sm font-medium ${activeSection === link ? "text-[#3B82F6]" : "text-gray-300"} hover:text-white transition-colors`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="md:hidden bg-[#1E293B] px-6 pb-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-2 text-gray-300 hover:text-white"
              onClick={() => setNavOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
