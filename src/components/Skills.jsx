import React from 'react';
import { motion } from 'framer-motion';

const skills = ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Socket.io", "JWT", "HTML", "CSS", "JavaScript","Git","Git hub","GSAP","MYSql"];

const Skills = () => {
  return (
    <motion.div 
      className="bg-dracula-bg text-dracula-foreground py-20 px-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1.2 }}
      id="skills"
    >
      <h2 className="text-4xl font-semibold text-center mb-8 text-dracula-primary">Skills</h2>
      <div className="flex flex-wrap justify-center">
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            className="m-2 px-4 py-2 bg-dracula-accent text-dracula-bg rounded-full shadow-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
