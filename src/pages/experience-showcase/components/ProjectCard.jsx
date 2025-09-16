import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative glass-effect rounded-xl overflow-hidden hover-lift cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onViewDetails(project)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full backdrop-blur-sm">
            {project?.category}
          </span>
        </div>

        {/* Status Badge */}
        {project?.status && (
          <div className="absolute top-4 right-4">
            <span className={`px-2 py-1 text-xs font-medium rounded-full backdrop-blur-sm ${
              project?.status === 'Live' ?'bg-success/20 text-success' 
                : project?.status === 'In Development' ?'bg-warning/20 text-warning' :'bg-muted/20 text-muted-foreground'
            }`}>
              {project?.status}
            </span>
          </div>
        )}

        {/* Hover Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center"
            >
              <div className="flex space-x-3">
                {project?.liveUrl && (
                  <Button
                    variant="default"
                    size="sm"
                    iconName="ExternalLink"
                    iconPosition="left"
                    onClick={(e) => {
                      e?.stopPropagation();
                      window.open(project?.liveUrl, '_blank');
                    }}
                  >
                    Live Demo
                  </Button>
                )}
                {project?.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Github"
                    iconPosition="left"
                    onClick={(e) => {
                      e?.stopPropagation();
                      window.open(project?.githubUrl, '_blank');
                    }}
                  >
                    Code
                  </Button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {project?.title}
          </h3>
          <Icon 
            name="ArrowUpRight" 
            size={20} 
            className="text-muted-foreground group-hover:text-primary transition-colors" 
          />
        </div>

        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
          {project?.description}
        </p>

        {/* Technology Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project?.technologies?.slice(0, 4)?.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
          {project?.technologies?.length > 4 && (
            <span className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-md">
              +{project?.technologies?.length - 4} more
            </span>
          )}
        </div>

        {/* Project Stats */}
        {project?.stats && (
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center space-x-4">
              {project?.stats?.duration && (
                <div className="flex items-center space-x-1">
                  <Icon name="Clock" size={12} />
                  <span>{project?.stats?.duration}</span>
                </div>
              )}
              {project?.stats?.teamSize && (
                <div className="flex items-center space-x-1">
                  <Icon name="Users" size={12} />
                  <span>{project?.stats?.teamSize}</span>
                </div>
              )}
            </div>
            <div className="text-primary font-medium">
              View Details →
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;