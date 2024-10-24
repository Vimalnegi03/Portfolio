import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineHand } from 'react-icons/hi';

const Home = () => {
  return (
    <motion.div 
      className="bg-dracula-bg text-dracula-foreground h-screen flex items-center justify-center"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1.5 }}
    >
      <div className="text-center">
        <div className="flex justify-center items-center mb-4">
          <motion.div 
            initial={{ rotate: -30, opacity: 0 }} 
            animate={{ rotate: 0, opacity: 1 }} 
            transition={{ duration: 1.5 }}
          >
            <HiOutlineHand className="text-dracula-accent text-6xl" />
          </motion.div>
          <h1 className="text-5xl font-bold text-dracula-accent ml-4">
            Hi, I'm Vimal Negi
          </h1>
        </div>

        <motion.p 
          className="text-xl mt-4 max-w-2xl mx-auto leading-relaxed text-dracula-foreground"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I’m a passionate <span className="text-dracula-primary">Full Stack Developer</span> with expertise in building dynamic, responsive web applications. I specialize in creating seamless user experiences using the <span className="text-dracula-primary">MERN stack</span> and delivering efficient, innovative back-end solutions.
        </motion.p>
      </div>
    </motion.div>
  );
}

export default Home;
