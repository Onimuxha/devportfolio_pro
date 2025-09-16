import React from 'react';
import Icon from '../../../components/AppIcon';

const ValuesApproach = () => {
  const coreValues = [
    {
      id: 1,
      title: "Quality Over Quantity",
      description: "I believe in writing clean, maintainable code that stands the test of time. Every line serves a purpose, and every function tells a story.",
      icon: "Award",
      color: "text-primary"
    },
    {
      id: 2,
      title: "Continuous Learning",
      description: "Technology evolves rapidly, and so do I. I'm committed to staying current with industry trends and constantly expanding my skill set.",
      icon: "TrendingUp",
      color: "text-secondary"
    },
    {
      id: 3,
      title: "User-Centric Design",
      description: "Great software isn\'t just about elegant code—it\'s about creating meaningful experiences that solve real problems for real people.",
      icon: "Users",
      color: "text-accent"
    },
    {
      id: 4,
      title: "Collaborative Spirit",
      description: "The best solutions emerge from diverse perspectives. I thrive in environments where ideas are shared freely and everyone\'s voice matters.",
      icon: "Handshake",
      color: "text-success"
    }
  ];

  const workingPrinciples = [
    {
      id: 1,
      principle: "Test-Driven Development",
      description: "I write tests first to ensure reliability and maintainability from the ground up.",
      icon: "CheckCircle2"
    },
    {
      id: 2,
      principle: "Agile Methodology",
      description: "Embracing iterative development with regular feedback loops and continuous improvement.",
      icon: "RotateCcw"
    },
    {
      id: 3,
      principle: "Documentation First",
      description: "Clear documentation is as important as clean code—it ensures knowledge transfer and team alignment.",
      icon: "FileText"
    },
    {
      id: 4,
      principle: "Performance Optimization",
      description: "Every millisecond matters. I optimize for speed, efficiency, and scalability in all my solutions.",
      icon: "Zap"
    },
    {
      id: 5,
      principle: "Security by Design",
      description: "Security isn\'t an afterthought—it\'s built into every layer of the application architecture.",
      icon: "Shield"
    },
    {
      id: 6,
      principle: "Accessibility Focus",
      description: "Technology should be inclusive. I ensure all applications are accessible to users of all abilities.",
      icon: "Heart"
    }
  ];

  return (
    <div className="glass-effect rounded-2xl p-8 mb-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-success/10 rounded-lg">
          <Icon name="Compass" size={24} className="text-success" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">Values & Approach</h2>
      </div>
      {/* Core Values */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <Icon name="Star" size={20} className="text-primary" />
          Core Values
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreValues?.map((value) => (
            <div key={value?.id} className="bg-surface/30 rounded-xl p-6 hover-lift transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-current/10 rounded-lg flex-shrink-0">
                  <Icon name={value?.icon} size={24} className={value?.color} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{value?.title}</h4>
                  <p className="text-text-secondary leading-relaxed">{value?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Working Principles */}
      <div>
        <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <Icon name="Settings" size={20} className="text-secondary" />
          Working Principles
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {workingPrinciples?.map((principle) => (
            <div key={principle?.id} className="bg-surface/30 rounded-xl p-5 hover-lift transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon name={principle?.icon} size={20} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground text-sm">{principle?.principle}</h4>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">{principle?.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Philosophy Quote */}
      <div className="mt-12 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 border border-primary/10">
        <div className="flex items-start gap-4">
          <Icon name="Quote" size={32} className="text-primary flex-shrink-0 mt-2" />
          <div>
            <blockquote className="text-lg text-foreground font-medium leading-relaxed mb-4">
              "I don't just build applications—I craft digital experiences that bridge the gap between human needs 
              and technological possibilities. Every project is an opportunity to push boundaries, solve complex 
              problems, and create something that makes a meaningful difference in people's lives."
            </blockquote>
            <cite className="text-text-secondary text-sm">— My Development Philosophy</cite>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuesApproach;