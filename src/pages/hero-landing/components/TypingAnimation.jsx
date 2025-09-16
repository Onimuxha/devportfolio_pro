import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypingAnimation = () => {
  const technologies = [
    'React Developer',
    'Node.js Expert', 
    'TypeScript Enthusiast',
    'MongoDB Specialist',
    'Full-Stack Engineer',
    'UI/UX Designer'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentTech = technologies?.[currentIndex];
    let timeoutId;

    if (isTyping) {
      if (displayText?.length < currentTech?.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentTech?.slice(0, displayText?.length + 1));
        }, 100);
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText?.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText?.slice(0, -1));
        }, 50);
      } else {
        setCurrentIndex((prev) => (prev + 1) % technologies?.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isTyping, currentIndex, technologies]);

  return (
    <div className="h-8 flex items-center justify-center">
      <span className="text-xl sm:text-2xl text-text-secondary">
        I'm a{' '}
        <span className="text-primary font-medium">
          {displayText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-0.5 h-6 bg-primary ml-1"
          />
        </span>
      </span>
    </div>
  );
};

export default TypingAnimation;