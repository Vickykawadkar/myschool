// components/footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">&copy; {new Date().getFullYear()} Aayush Gid. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/aayushgid" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            GitHub
          </a>
          <a href="https://linkedin.com/in/aayushgid" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            LinkedIn
          </a>
          <a href="mailto:aayush@example.com" className="hover:text-gray-400">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
