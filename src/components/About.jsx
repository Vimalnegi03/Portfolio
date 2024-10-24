import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      className="bg-dracula-bg text-dracula-foreground py-20 px-10"
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
      id="about"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* About Image */}
        <img 
          src="/pro.jpg" 
          alt="Vimal Negi" 
          className="w-64 h-64 rounded-full mb-6 md:mb-0 md:mr-12 border-4 border-dracula-accent"
        />
        
        {/* About Text */}
        <div>
          <h2 className="text-4xl font-semibold mb-4 text-dracula-accent">About Me</h2>
          <p className="text-lg">
            I am <span className="text-dracula-primary">Vimal Negi</span>, a passionate Full Stack Developer with expertise in designing and developing responsive and scalable web applications. My experience spans across the <span className="text-dracula-primary">MERN stack</span> (MongoDB, Express.js, React, and Node.js), where I build end-to-end solutions that are both functional and visually appealing. 
            <br /><br />
            I excel at creating seamless user interfaces using <span className="text-dracula-primary">React</span> and styling frameworks like <span className="text-dracula-primary">Tailwind CSS</span> and <span className="text-dracula-primary">Daisy UI</span>, ensuring that my applications are mobile-friendly and accessible across various devices. Additionally, I specialize in building robust backends using <span className="text-dracula-primary">Node.js</span> and <span className="text-dracula-primary">Express</span>, implementing secure and efficient APIs, and managing databases with <span className="text-dracula-primary">MongoDB</span>.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
