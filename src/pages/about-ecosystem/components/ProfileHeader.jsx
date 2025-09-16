import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ProfileHeader = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl glass-effect p-8 mb-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-32 h-32 bg-primary rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-secondary rounded-full translate-x-12 translate-y-12"></div>
      </div>
      
      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Profile Image */}
        <div className="relative group">
          <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden ring-4 ring-primary/20 transition-all duration-300 group-hover:ring-primary/40">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
              alt="Sukuna - Full Stack Developer"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full border-4 border-background flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-4">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Sukuna Ryomen
            </h1>
            <div className="flex items-center justify-center lg:justify-start gap-2 text-text-secondary mb-3">
              <Icon name="Code" size={18} className="text-primary" />
              <span className="text-lg">Full Stack Developer</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2 text-text-secondary">
              <Icon name="MapPin" size={16} className="text-secondary" />
              <span>San Francisco, CA</span>
              <span className="mx-2">•</span>
              <Icon name="Clock" size={16} className="text-secondary" />
              <span>Available for opportunities</span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex items-center justify-center lg:justify-start gap-6 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">5+</div>
              <div className="text-sm text-text-secondary">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">50+</div>
              <div className="text-sm text-text-secondary">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">15+</div>
              <div className="text-sm text-text-secondary">Technologies</div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <a
              href="https://github.com/sukuna"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-surface hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift"
            >
              <Icon name="Github" size={20} />
            </a>
            <a
              href="https://linkedin.com/in/sukuna"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-surface hover:bg-accent hover:text-white transition-all duration-300 hover-lift"
            >
              <Icon name="Linkedin" size={20} />
            </a>
            <a
              href="https://twitter.com/sukuna"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-surface hover:bg-blue-500 hover:text-white transition-all duration-300 hover-lift"
            >
              <Icon name="Twitter" size={20} />
            </a>
            <a
              href="mailto:sukuna@example.com"
              className="p-2 rounded-lg bg-surface hover:bg-success hover:text-white transition-all duration-300 hover-lift"
            >
              <Icon name="Mail" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;