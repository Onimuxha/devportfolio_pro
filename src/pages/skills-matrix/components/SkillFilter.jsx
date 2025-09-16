import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SkillFilter = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange, 
  proficiencyLevels, 
  selectedProficiency, 
  onProficiencyChange,
  searchTerm,
  onSearchChange 
}) => {
  return (
    <div className="glass-effect rounded-xl p-6 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Icon 
              name="Search" 
              size={20} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" 
            />
            <input
              type="text"
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e?.target?.value)}
              className="w-full pl-10 pr-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories?.map((category) => (
            <Button
              key={category?.value}
              variant={selectedCategory === category?.value ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange(category?.value)}
              iconName={category?.icon}
              iconPosition="left"
              className="whitespace-nowrap"
            >
              {category?.label}
            </Button>
          ))}
        </div>

        {/* Proficiency Filter */}
        <div className="flex flex-wrap gap-2">
          {proficiencyLevels?.map((level) => (
            <Button
              key={level?.value}
              variant={selectedProficiency === level?.value ? "secondary" : "ghost"}
              size="sm"
              onClick={() => onProficiencyChange(level?.value)}
              className="whitespace-nowrap"
            >
              {level?.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillFilter;