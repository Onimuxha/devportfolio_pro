import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProjectStats = ({ stats }) => {
  const statItems = [
    {
      icon: 'FolderOpen',
      label: 'Projects Completed',
      value: stats?.totalProjects,
      color: 'text-primary'
    },
    {
      icon: 'Code',
      label: 'Technologies Mastered',
      value: stats?.technologiesUsed,
      color: 'text-secondary'
    },
    {
      icon: 'Users',
      label: 'Clients Served',
      value: stats?.clientsServed,
      color: 'text-accent'
    },
    {
      icon: 'TrendingUp',
      label: 'Success Rate',
      value: `${stats?.successRate}%`,
      color: 'text-success'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      {statItems?.map((item, index) => (
        <motion.div
          key={item?.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="glass-effect rounded-lg p-6 text-center hover-lift"
        >
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-surface mb-3 ${item?.color}`}>
            <Icon name={item?.icon} size={24} />
          </div>
          <div className="text-2xl font-bold text-foreground mb-1">
            {item?.value}
          </div>
          <div className="text-sm text-text-secondary">
            {item?.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectStats;