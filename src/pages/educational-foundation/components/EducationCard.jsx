import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const EducationCard = ({ education, index }) => {
  return (
    <div className="glass-effect rounded-xl p-6 hover-lift group">
      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
        {/* Institution Logo */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-xl overflow-hidden bg-surface border border-glass-border">
            <Image
              src={education?.logo}
              alt={`${education?.institution} logo`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Education Details */}
        <div className="flex-1 space-y-4">
          {/* Header */}
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-smooth">
                {education?.degree}
              </h3>
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="Calendar" size={16} />
                <span>{education?.duration}</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <div className="flex items-center space-x-2 text-text-secondary">
                <Icon name="MapPin" size={16} />
                <span className="font-medium">{education?.institution}</span>
              </div>
              <div className="flex items-center space-x-2 text-text-secondary">
                <Icon name="GraduationCap" size={16} />
                <span>{education?.location}</span>
              </div>
            </div>
          </div>

          {/* GPA/Grade */}
          {education?.gpa && (
            <div className="flex items-center space-x-2">
              <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                GPA: {education?.gpa}
              </div>
              {education?.honors && (
                <div className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                  {education?.honors}
                </div>
              )}
            </div>
          )}

          {/* Description */}
          <p className="text-text-secondary leading-relaxed">
            {education?.description}
          </p>

          {/* Relevant Coursework */}
          {education?.coursework && education?.coursework?.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-foreground flex items-center space-x-2">
                <Icon name="BookOpen" size={16} />
                <span>Relevant Coursework</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {education?.coursework?.map((course, courseIndex) => (
                  <span
                    key={courseIndex}
                    className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-md border border-glass-border"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Projects/Achievements */}
          {education?.achievements && education?.achievements?.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-foreground flex items-center space-x-2">
                <Icon name="Award" size={16} />
                <span>Key Achievements</span>
              </h4>
              <ul className="space-y-1">
                {education?.achievements?.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start space-x-2 text-sm text-text-secondary">
                    <Icon name="ChevronRight" size={14} className="mt-0.5 text-primary flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationCard;