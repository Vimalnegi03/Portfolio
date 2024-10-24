import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { 
    title: "LMS Platform", 
    description: "• Developed a responsive and feature-rich LMS platform using ReactJS for the frontend and Node.js withExpress for the backend.• Ensured seamless user experience across all devices by optimizing the interface for both mobile and desktopusers.• Integrated payment gateway.", 
    image: "/lms.jpeg",
    link: "https://lms-v1wq.onrender.com/",
  },
  { 
    title: "Offline Learning", 
    description: "The Offline Learning System allows students and teachers to connect, share resources, and communicate, evenwithout continuous internet access.• Worked as a full-stack developer, actively implementing real-time messaging features and user profilefunctionalities to enhance the interaction between learners and tutors.• Also contributed to backend development and integration with location-based services to enable users to findtutors within a 10km radius.", 
    image: "/offline.jpg",
    link:"https://github.com/Vimalnegi03/Offline_Learning"

  },
  { 
    title: "Uniyal Skylink", 
    description: "• Uniyal Sky Link is a platform providing geonavigation services across Uttarakhand, enabling users to locate Wi-Fi connections and important landmarks in the region.• Worked as a frontend developer, focusing on web app responsiveness, integrating geolocation features, anddesigning interactive maps with location markers for specific areas like Tehri Garhwal", 
    image: "/uni.jpeg",
    link:"https://uniyalskylink.netlify.app/"
  },
  { 
    title: "Food Blog", 
    description: " Worked as a full-stack developer, focusing on building and optimizing a responsive food blog application with features like recipe listings and user authentication.• Integrated backend services using Appwrite, enabling smooth data management and secure user interactions.• Developed and designed multiple components, such as dynamic forms for submitting recipes, improving theoverall user experience.• Deployed and managed the application using Netlify, ensuring seamless integration and deployment", 
    image: "/food.jpeg",
    link:"https://vimal-food-blog.netlify.app/"
  },
  { 
    title: "Online Compiler", 
    description: " • Worked as a full-stack developer, focusing on building and optimizing a responsive online compiler application, allowing users to write, compile, and run code in real time.• Integrated backend services using Node.js and Express, enabling real-time code execution and error handling.• Developed multiple components for language selection, code input, and real-time output display, enhancing the overall user experience", 
    image: "/compiler.jpeg",
    link:"https://github.com/Vimalnegi03/Online_Compiler"
  }
];

const Projects = () => {
  return (
    <motion.div 
      className="bg-dracula-bg text-dracula-foreground py-20 px-10"
      initial={{ scale: 0.9 }} 
      animate={{ scale: 1 }}
      transition={{ duration: 0.8 }}
      id="projects"
    >
      <h2 className="text-4xl font-semibold text-center mb-8 text-dracula-primary">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="bg-grey-900 rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            {/* Project Image */}
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-64 object-cover"
            />
            
            {/* Project Details */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-dracula-primary">{project.title}</h3>
              <p className="text-dracula-foreground">{project.description}</p>
              <a className="text-2xl font-semibold mb-2 text-dracula-primary" href={project.link}>Project Link</a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
