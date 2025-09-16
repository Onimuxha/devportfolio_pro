import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LearningPathCard = ({ path }) => {
  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-success';
    if (progress >= 50) return 'bg-warning';
    return 'bg-primary';
  };

  return (
    <div className="glass-effect rounded-xl p-6 hover-lift group">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth">
              {path?.title}
            </h3>
            <div className="flex items-center space-x-4 text-sm text-text-secondary">
              <div className="flex items-center space-x-1">
                <Icon name="BookOpen" size={14} />
                <span>{path?.totalCourses} courses</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Clock" size={14} />
                <span>{path?.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Target" size={14} />
                <span>{path?.level}</span>
              </div>
            </div>
          </div>
          
          {/* Progress Circle */}
          <div className="relative w-16 h-16">
            <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                className="text-surface"
              />
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 28}`}
                strokeDashoffset={`${2 * Math.PI * 28 * (1 - path?.progress / 100)}`}
                className={`${getProgressColor(path?.progress)} transition-all duration-500`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-bold text-foreground">{path?.progress}%</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed">
          {path?.description}
        </p>

        {/* Current Course */}
        {path?.currentCourse && (
          <div className="bg-surface/50 rounded-lg p-4 border border-glass-border">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-medium text-foreground">Currently Learning</h4>
              <span className="text-xs text-text-secondary">{path?.currentCourse?.progress}% complete</span>
            </div>
            <p className="text-sm text-text-secondary mb-3">{path?.currentCourse?.title}</p>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(path?.currentCourse?.progress)}`}
                style={{ width: `${path?.currentCourse?.progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Skills */}
        {path?.skills && path?.skills?.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-foreground flex items-center space-x-2">
              <Icon name="Zap" size={14} />
              <span>Skills You'll Learn</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {path?.skills?.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-glass-border">
          <div className="flex items-center space-x-2 text-sm text-text-secondary">
            <Icon name="Calendar" size={14} />
            <span>Started: {path?.startDate}</span>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            iconName="Play"
            iconPosition="left"
            className="text-xs"
          >
            Continue Learning
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LearningPathCard;