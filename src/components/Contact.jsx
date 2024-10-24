import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div 
      className="bg-dracula-bg text-dracula-foreground py-20 px-10"
      initial={{ y: '100vh' }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <h2 className="text-4xl font-semibold text-center mb-8 text-dracula-accent">Contact Me</h2>
      <div className="text-center">
        <p className="text-lg">
          Reach out via email: <span className="text-dracula-primary">vimalnegi2003@gmail.com</span>
        </p>
      </div>
    </motion.div>
  );
}

export default Contact;
