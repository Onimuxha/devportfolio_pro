import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  const handleBackdropClick = (e) => {
    if (e?.target === e?.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-4xl max-h-[90vh] glass-effect rounded-xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-background/80 hover:bg-surface rounded-full transition-colors"
            >
              <Icon name="X" size={20} className="text-foreground" />
            </button>

            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[90vh]">
              {/* Hero Section */}
              <div className="relative h-64 md:h-80">
                <Image
                  src={project?.image}
                  alt={project?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                
                {/* Project Title Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full">
                      {project?.category}
                    </span>
                    {project?.status && (
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                        project?.status === 'Live' ?'bg-success/20 text-success' 
                          : project?.status === 'In Development' ?'bg-warning/20 text-warning' :'bg-muted/20 text-muted-foreground'
                      }`}>
                        {project?.status}
                      </span>
                    )}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {project?.title}
                  </h2>
                  <p className="text-text-secondary text-lg">
                    {project?.description}
                  </p>
                </div>
              </div>

              {/* Content Sections */}
              <div className="p-6 md:p-8 space-y-8">
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  {project?.liveUrl && (
                    <Button
                      variant="default"
                      iconName="ExternalLink"
                      iconPosition="left"
                      onClick={() => window.open(project?.liveUrl, '_blank')}
                    >
                      View Live Demo
                    </Button>
                  )}
                  {project?.githubUrl && (
                    <Button
                      variant="outline"
                      iconName="Github"
                      iconPosition="left"
                      onClick={() => window.open(project?.githubUrl, '_blank')}
                    >
                      View Source Code
                    </Button>
                  )}
                </div>

                {/* Project Overview */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 space-y-6">
                    {/* Problem Statement */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                        <Icon name="Target" size={20} className="mr-2 text-primary" />
                        Problem Statement
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {project?.details?.problem || "Identified key challenges in user experience and system performance that required innovative solutions."}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                        <Icon name="Lightbulb" size={20} className="mr-2 text-primary" />
                        Solution Approach
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {project?.details?.solution || "Developed a comprehensive solution using modern technologies and best practices to address the identified challenges."}
                      </p>
                    </div>

                    {/* Results */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                        <Icon name="TrendingUp" size={20} className="mr-2 text-primary" />
                        Results & Impact
                      </h3>
                      <div className="space-y-2">
                        {project?.results?.map((result, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <Icon name="CheckCircle" size={16} className="text-success mt-1 flex-shrink-0" />
                            <span className="text-text-secondary">{result}</span>
                          </div>
                        )) || (
                          <div className="flex items-start space-x-2">
                            <Icon name="CheckCircle" size={16} className="text-success mt-1 flex-shrink-0" />
                            <span className="text-text-secondary">Successfully delivered project with improved performance and user satisfaction</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Lessons Learned */}
                    {project?.details?.lessons && (
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                          <Icon name="BookOpen" size={20} className="mr-2 text-primary" />
                          Key Learnings
                        </h3>
                        <p className="text-text-secondary leading-relaxed">
                          {project?.details?.lessons}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Project Details Sidebar */}
                  <div className="space-y-6">
                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project?.technologies?.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-surface text-text-secondary text-sm rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Stats */}
                    {project?.stats && (
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">
                          Project Details
                        </h4>
                        <div className="space-y-3">
                          {project?.stats?.duration && (
                            <div className="flex items-center justify-between">
                              <span className="text-text-secondary">Duration:</span>
                              <span className="text-foreground font-medium">{project?.stats?.duration}</span>
                            </div>
                          )}
                          {project?.stats?.teamSize && (
                            <div className="flex items-center justify-between">
                              <span className="text-text-secondary">Team Size:</span>
                              <span className="text-foreground font-medium">{project?.stats?.teamSize}</span>
                            </div>
                          )}
                          {project?.stats?.role && (
                            <div className="flex items-center justify-between">
                              <span className="text-text-secondary">My Role:</span>
                              <span className="text-foreground font-medium">{project?.stats?.role}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Additional Links */}
                    {project?.additionalLinks && (
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">
                          Additional Resources
                        </h4>
                        <div className="space-y-2">
                          {project?.additionalLinks?.map((link, index) => (
                            <a
                              key={index}
                              href={link?.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                            >
                              <Icon name="ExternalLink" size={16} />
                              <span className="text-sm">{link?.label}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;