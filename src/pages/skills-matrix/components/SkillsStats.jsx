import React from 'react';
import Icon from '../../../components/AppIcon';

const SkillsStats = ({ skills }) => {
  const totalSkills = skills?.length;
  const expertSkills = skills?.filter(skill => skill?.level >= 90)?.length;
  const advancedSkills = skills?.filter(skill => skill?.level >= 75 && skill?.level < 90)?.length;
  const categories = [...new Set(skills.map(skill => skill.category))]?.length;

  const stats = [
    {
      icon: 'Code',
      label: 'Total Skills',
      value: totalSkills,
      color: 'text-primary'
    },
    {
      icon: 'Award',
      label: 'Expert Level',
      value: expertSkills,
      color: 'text-secondary'
    },
    {
      icon: 'TrendingUp',
      label: 'Advanced Level',
      value: advancedSkills,
      color: 'text-accent'
    },
    {
      icon: 'Layers',
      label: 'Categories',
      value: categories,
      color: 'text-warning'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats?.map((stat, index) => (
        <div
          key={stat?.label}
          className="glass-effect rounded-xl p-6 text-center hover-lift transition-smooth"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className={`w-12 h-12 rounded-xl bg-surface flex items-center justify-center mx-auto mb-3 ${stat?.color}`}>
            <Icon name={stat?.icon} size={24} />
          </div>
          <div className="text-2xl font-bold text-foreground mb-1">{stat?.value}</div>
          <div className="text-sm text-text-secondary">{stat?.label}</div>
        </div>
      ))}
    </div>
  );
};

export default SkillsStats;