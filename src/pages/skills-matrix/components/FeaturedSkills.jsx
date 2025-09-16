import React from 'react';
import Icon from '../../../components/AppIcon';

const FeaturedSkills = ({ featuredSkills }) => {
  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">Featured Expertise</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Core technologies and skills that define my development approach and drive project success
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredSkills?.map((skill, index) => (
          <div
            key={skill?.id}
            className="group glass-effect rounded-xl p-6 hover-lift transition-smooth relative overflow-hidden"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 right-4">
                <Icon name={skill?.icon} size={80} className="text-primary" />
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-smooth">
                  <Icon name={skill?.icon} size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">{skill?.name}</h3>
                  <p className="text-primary text-sm font-medium">{skill?.level}% Proficiency</p>
                </div>
              </div>

              <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                {skill?.detailedDescription}
              </p>

              {/* Application Examples */}
              <div className="space-y-2">
                <h4 className="text-foreground font-medium text-sm">How I Apply It:</h4>
                <ul className="space-y-1">
                  {skill?.applications?.map((application, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm text-text-secondary">
                      <Icon name="ChevronRight" size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>{application}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Progress Indicator */}
              <div className="mt-4 pt-4 border-t border-glass-border">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-text-secondary">Mastery Level</span>
                  <span className="text-xs font-medium text-primary">{skill?.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-1.5">
                  <div
                    className="h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
                    style={{ width: `${skill?.level}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSkills;