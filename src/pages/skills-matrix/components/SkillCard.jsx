import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getProgressColor = (level) => {
    if (level >= 90) return 'bg-primary';
    if (level >= 75) return 'bg-secondary';
    if (level >= 60) return 'bg-accent';
    return 'bg-warning';
  };

  const getExperienceYears = (level) => {
    if (level >= 90) return '4+ years';
    if (level >= 75) return '3+ years';
    if (level >= 60) return '2+ years';
    return '1+ years';
  };

  return (
    <div
      className="group relative glass-effect rounded-xl p-6 hover-lift transition-smooth"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Skill Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
            <Icon name={skill?.icon} size={20} className="text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground text-lg">{skill?.name}</h3>
            <p className="text-text-secondary text-sm">{skill?.category}</p>
          </div>
        </div>
        {skill?.isFeatured && (
          <div className="px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
            Featured
          </div>
        )}
      </div>
      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-text-secondary">Proficiency</span>
          <span className="text-sm font-medium text-primary">{skill?.level}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-1000 ease-out ${getProgressColor(skill?.level)}`}
            style={{ width: isHovered ? `${skill?.level}%` : '0%' }}
          />
        </div>
      </div>
      {/* Skill Description */}
      <p className="text-text-secondary text-sm mb-4 line-clamp-2">
        {skill?.description}
      </p>
      {/* Hover Details */}
      <div className={`transition-all duration-300 ${isHovered ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'} overflow-hidden`}>
        <div className="border-t border-glass-border pt-4 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-secondary">Experience:</span>
            <span className="text-foreground font-medium">{getExperienceYears(skill?.level)}</span>
          </div>
          {skill?.recentProject && (
            <div className="flex items-center justify-between text-sm">
              <span className="text-text-secondary">Recent Project:</span>
              <span className="text-primary font-medium">{skill?.recentProject}</span>
            </div>
          )}
          {skill?.certification && (
            <div className="flex items-center space-x-2 text-sm">
              <Icon name="Award" size={14} className="text-secondary" />
              <span className="text-secondary">{skill?.certification}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;