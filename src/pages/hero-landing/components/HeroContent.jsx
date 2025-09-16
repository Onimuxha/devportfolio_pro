import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';


const HeroContent = ({ onViewWork, onDownloadCV }) => {
  return (
    <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
      {/* Main Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-6"
      >
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4 font-inter">
          <span className="block">Sukuna</span>
          <span className="text-2xl sm:text-3xl lg:text-4xl font-medium text-text-secondary block mt-2">
            Full-Stack Developer
          </span>
        </h1>
      </motion.div>
      {/* Dynamic Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="mb-8"
      >
        <div className="flex flex-wrap justify-center items-center gap-2 text-lg sm:text-xl text-text-secondary">
          <span className="text-primary font-medium">React</span>
          <span className="text-text-secondary">•</span>
          <span className="text-primary font-medium">Node.js</span>
          <span className="text-text-secondary">•</span>
          <span className="text-primary font-medium">TypeScript</span>
          <span className="text-text-secondary">•</span>
          <span className="text-primary font-medium">MongoDB</span>
        </div>
      </motion.div>
      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="text-xl sm:text-2xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed"
      >
        Crafting Digital Experiences Through Code
      </motion.p>
      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <Button
          variant="default"
          size="lg"
          onClick={onViewWork}
          iconName="Eye"
          iconPosition="left"
          className="min-w-[180px] shadow-elevation hover-lift"
        >
          View My Work
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={onDownloadCV}
          iconName="Download"
          iconPosition="left"
          className="min-w-[180px] border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground shadow-elevation hover-lift"
        >
          Download CV
        </Button>
      </motion.div>
      {/* Professional Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
      >
        <div className="text-center">
          <div className="text-3xl font-bold text-primary mb-2">5+</div>
          <div className="text-sm text-text-secondary">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary mb-2">50+</div>
          <div className="text-sm text-text-secondary">Projects Completed</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary mb-2">100%</div>
          <div className="text-sm text-text-secondary">Client Satisfaction</div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroContent;