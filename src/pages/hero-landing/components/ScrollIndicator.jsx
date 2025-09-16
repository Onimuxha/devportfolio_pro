import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ScrollIndicator = ({ onScrollDown }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
      onClick={onScrollDown}
    >
      <div className="flex flex-col items-center space-y-2 group">
        <span className="text-sm text-text-secondary group-hover:text-primary transition-smooth">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="p-2 rounded-full border border-primary/30 group-hover:border-primary group-hover:bg-primary/10 transition-smooth"
        >
          <Icon 
            name="ChevronDown" 
            size={20} 
            className="text-primary group-hover:text-primary transition-smooth" 
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;