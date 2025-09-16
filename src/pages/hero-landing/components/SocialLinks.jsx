import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'Github',
      url: 'https://github.com/sukuna',
      color: 'hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      url: 'https://linkedin.com/in/sukuna',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Twitter',
      icon: 'Twitter',
      url: 'https://twitter.com/sukuna_dev',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: 'Mail',
      url: 'mailto:sukuna@devportfolio.com',
      color: 'hover:text-primary'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
      className="fixed left-6 top-1/2 transform -translate-y-1/2 z-20 hidden lg:flex flex-col space-y-4"
    >
      {socialLinks?.map((link, index) => (
        <motion.a
          key={link?.name}
          href={link?.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3 rounded-lg glass-effect text-text-secondary ${link?.color} transition-smooth hover-lift group`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
        >
          <Icon name={link?.icon} size={20} />
          <span className="sr-only">{link?.name}</span>
        </motion.a>
      ))}
      {/* Vertical Line */}
      <div className="w-px h-20 bg-gradient-to-b from-primary/50 to-transparent mx-auto" />
    </motion.div>
  );
};

export default SocialLinks;