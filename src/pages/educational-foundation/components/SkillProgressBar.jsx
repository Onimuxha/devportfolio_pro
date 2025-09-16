import React from 'react';
import Icon from '../../../components/AppIcon';

const SkillProgressBar = ({ skill }) => {
  const getProgressColor = (level) => {
    switch (level) {
      case 'Expert':
        return 'bg-success';
      case 'Advanced':
        return 'bg-primary';
      case 'Intermediate':
        return 'bg-warning';
      case 'Beginner':
        return 'bg-accent';
      default:
        return 'bg-muted';
    }
  };

  const getProgressWidth = (level) => {
    switch (level) {
      case 'Expert':
        return 95;
      case 'Advanced':
        return 80;
      case 'Intermediate':
        return 60;
      case 'Beginner':
        return 35;
      default:
        return 0;
    }
  };

  const getLevelIcon = (level) => {
    switch (level) {
      case 'Expert':
        return 'Crown';
      case 'Advanced':
        return 'Star';
      case 'Intermediate':
        return 'TrendingUp';
      case 'Beginner':
        return 'Seedling';
      default:
        return 'Circle';
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-surface border border-glass-border flex items-center justify-center">
            <Icon name={skill?.icon || 'Code'} size={16} className="text-primary" />
          </div>
          <div>
            <h4 className="text-sm font-medium text-foreground">{skill?.name}</h4>
            <p className="text-xs text-text-secondary">{skill?.category}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Icon name={getLevelIcon(skill?.level)} size={14} className="text-primary" />
          <span className="text-sm font-medium text-foreground">{skill?.level}</span>
        </div>
      </div>
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-1000 ${getProgressColor(skill?.level)}`}
            style={{ width: `${getProgressWidth(skill?.level)}%` }}
          />
        </div>
        
        {/* Experience Details */}
        {skill?.experience && (
          <div className="flex items-center justify-between text-xs text-text-secondary">
            <span>{skill?.experience}</span>
            <span>{getProgressWidth(skill?.level)}%</span>
          </div>
        )}
      </div>
      {/* Recent Learning */}
      {skill?.recentLearning && (
        <div className="bg-surface/30 rounded-lg p-3 border border-glass-border">
          <div className="flex items-center space-x-2 mb-1">
            <Icon name="BookOpen" size={12} className="text-accent" />
            <span className="text-xs font-medium text-accent">Recent Learning</span>
          </div>
          <p className="text-xs text-text-secondary">{skill?.recentLearning}</p>
        </div>
      )}
    </div>
  );
};

export default SkillProgressBar;