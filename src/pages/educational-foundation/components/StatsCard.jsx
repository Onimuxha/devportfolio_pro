import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsCard = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats?.map((stat, index) => (
        <div key={index} className="glass-effect rounded-xl p-6 text-center hover-lift group">
          <div className="space-y-3">
            {/* Icon */}
            <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
              <Icon name={stat?.icon} size={24} className="text-primary" />
            </div>
            
            {/* Value */}
            <div className="space-y-1">
              <div className="text-2xl font-bold text-foreground group-hover:text-primary transition-smooth">
                {stat?.value}
              </div>
              <div className="text-sm text-text-secondary">
                {stat?.label}
              </div>
            </div>
            
            {/* Trend */}
            {stat?.trend && (
              <div className={`flex items-center justify-center space-x-1 text-xs ${
                stat?.trend?.direction === 'up' ? 'text-success' : 'text-warning'
              }`}>
                <Icon 
                  name={stat?.trend?.direction === 'up' ? 'TrendingUp' : 'TrendingDown'} 
                  size={12} 
                />
                <span>{stat?.trend?.value}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCard;