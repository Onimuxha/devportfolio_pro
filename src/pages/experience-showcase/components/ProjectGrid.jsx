import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';

const ProjectGrid = ({ projects, onProjectSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <AnimatePresence mode="wait">
        {projects?.map((project, index) => (
          <motion.div
            key={project?.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: index * 0.1 }}
          >
            <ProjectCard
              project={project}
              onViewDetails={onProjectSelect}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ProjectGrid;