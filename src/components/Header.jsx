import React from 'react';
import { FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-dracula-bg text-dracula-foreground py-4 px-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Name */}
        <h1 className="text-3xl font-bold text-dracula-primary">Vimal Negi</h1>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li className="hover:text-dracula-accent">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-dracula-accent">
              <a href="#skills">Skills</a>
            </li>
            <li className="hover:text-dracula-accent">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-dracula-accent">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a 
            href="https://www.linkedin.com/in/vimal-negi-233882233/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-dracula-accent"
          >
            <FaLinkedin size={24} />
          </a>
          <a 
            href="https://github.com/Vimalnegi03" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-dracula-accent"
          >
            <FaGithub size={24} />
          </a>
          <a 
            href="https://leetcode.com/u/vimalnegi03/"  // Updated link to LeetCode profile
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-dracula-accent"
          >
            <FaCode size={24} />  {/* Used FaCode icon as a placeholder for LeetCode */}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
