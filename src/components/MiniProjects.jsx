import React from 'react';
import { motion } from 'framer-motion';

// Updated project data with image and link fields
const miniProjects = [
  { 
    title: "Naruto", 
    description: "A simple website that displays all the characters of one of the most watched anime NARUTO.",
    image: 'naruto.jpeg', // Replace with actual image path
    link: 'https://naruto3.netlify.app/' 
  },
  { 
    title: "Pokemon", 
    description: "Looking for your favorite pokemon then you are at perfect place.",
    image: 'pokemon.jpeg', // Replace with actual image path
    link: 'https://pokeemons.netlify.app/' 
  },
  { 
    title: "AI_FITNESS", 
    description: "Fitness website with in-built voice-assistant",
    image: 'ai_fitness.jpeg', // Replace with actual image path
    link: 'https://vickyfitness.netlify.app/' 
  },
  { 
    title: "CHAT_BOT", 
    description: "Any Question! Ask here",
    image: 'chat_bot.jpeg', // Replace with actual image path
    link: 'https://vickychatbot.netlify.app/' 
  },
  { 
    title: "Virtual_Assistant", 
    description: "Alexa is good but have you tried cutie?",
    image: 'virtual_assistant.jpeg', // Replace with actual image path
    link: 'https://cutiieee.netlify.app/' 
  },
];

const MiniProjects = () => {
  return (
    <motion.div
      className="bg-dracula-bg text-dracula-foreground py-20 px-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1.2 }}
      id="mini-projects"
    >
      <h2 className="text-4xl font-semibold text-center mb-8 text-dracula-primary">Mini Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {miniProjects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-grey-900 rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            {/* Project Image */}
            <img 
              src={project.image} 
              alt={`${project.title} image`} 
              className="w-full h-64 object-cover"
            />
            {/* Project Details */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-dracula-primary">{project.title}</h3>
              <p className="text-dracula-foreground">{project.description}</p>
              <a 
                className="inline-block mt-4 text-xl font-semibold text-dracula-primary underline hover:text-dracula-accent"
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MiniProjects;
