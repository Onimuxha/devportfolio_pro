import React from 'react';
import SkillCard from './SkillCard';

const SkillsGrid = ({ skills, filteredSkills }) => {
  const displaySkills = filteredSkills?.length > 0 ? filteredSkills : skills;

  if (displaySkills?.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">🔍</span>
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">No skills found</h3>
        <p className="text-text-secondary">Try adjusting your filters or search terms</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {displaySkills?.map((skill, index) => (
        <SkillCard 
          key={skill?.id} 
          skill={skill} 
          index={index}
        />
      ))}
    </div>
  );
};

export default SkillsGrid;