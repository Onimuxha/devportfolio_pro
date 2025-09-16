import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const FilterTabs = ({ categories, activeCategory, onCategoryChange }) => {
  const categoryIcons = {
    'All': 'Grid3X3',
    'Web Applications': 'Globe',
    'Mobile Apps': 'Smartphone',
    'Full-Stack Solutions': 'Layers',
    'E-Commerce': 'ShoppingCart',
    'SaaS Platforms': 'Cloud',
    'APIs & Backend': 'Server',
    'UI/UX Projects': 'Palette'
  };

  // Ensure categories is an array and handle potential object categories
  const safeCategories = Array.isArray(categories) ? categories : [];
  
  // Handle cases where category items might be objects instead of strings
  const normalizedCategories = safeCategories?.map(category => {
    // If category is an object with a name property, use the name
    if (typeof category === 'object' && category !== null) {
      return category?.name || category?.title || String(category?.id) || 'Unknown';
    }
    // If category is already a string, use it directly
    return typeof category === 'string' ? category : String(category);
  });

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {normalizedCategories?.map((category, index) => (
        <motion.button
          key={`${category}-${index}`}
          onClick={() => onCategoryChange?.(category)}
          className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
            activeCategory === category
              ? 'text-primary-foreground bg-primary shadow-glow'
              : 'text-text-secondary hover:text-primary hover:bg-surface/50'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon 
            name={categoryIcons?.[category] || 'Folder'} 
            size={16} 
          />
          <span>{category}</span>
          
          {activeCategory === category && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-primary rounded-lg -z-10"
              initial={false}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
};

export default FilterTabs;