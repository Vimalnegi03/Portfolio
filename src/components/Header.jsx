import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaCode, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-dracula-bg text-dracula-foreground py-4 px-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Name */}
        <h1 className="text-3xl font-bold text-dracula-primary">Vimal Negi</h1>

        {/* Navigation Links */}
        <nav className="hidden md:flex">
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

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-dracula-primary"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>

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
            href="https://leetcode.com/u/vimalnegi03/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-dracula-accent"
          >
            <FaCode size={24} />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-dracula-bg">
          <ul className="flex flex-col space-y-4 text-lg text-center mt-4">
            <li className="hover:text-dracula-accent">
              <a href="#about" onClick={toggleMobileMenu}>About</a>
            </li>
            <li className="hover:text-dracula-accent">
              <a href="#skills" onClick={toggleMobileMenu}>Skills</a>
            </li>
            <li className="hover:text-dracula-accent">
              <a href="#projects" onClick={toggleMobileMenu}>Projects</a>
            </li>
            <li className="hover:text-dracula-accent">
              <a href="#contact" onClick={toggleMobileMenu}>Contact</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
