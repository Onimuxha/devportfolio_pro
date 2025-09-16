import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LearningSection = () => {
  const currentLearning = [
    {
      id: 1,
      name: "Next.js 14",
      icon: "Zap",
      progress: 75,
      description: "Exploring App Router and Server Components for enhanced performance"
    },
    {
      id: 2,
      name: "GraphQL",
      icon: "Database",
      progress: 60,
      description: "Building efficient APIs with Apollo Server and client-side optimization"
    },
    {
      id: 3,
      name: "AWS Cloud",
      icon: "Cloud",
      progress: 45,
      description: "Mastering serverless architecture and cloud deployment strategies"
    }
  ];

  const learningPrinciples = [
    "Stay curious and embrace new technologies",
    "Practice through real-world projects",
    "Share knowledge with the developer community",
    "Focus on fundamentals while exploring trends"
  ];

  return (
    <div className="mt-16 pt-16 border-t border-glass-border">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">Continuous Learning Journey</h2>
        <p className="text-text-secondary max-w-3xl mx-auto text-lg">
          Technology evolves rapidly, and so do I. Here's what I'm currently exploring and my approach to staying ahead in the ever-changing development landscape.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Currently Learning */}
        <div className="glass-effect rounded-xl p-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <Icon name="BookOpen" size={20} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Currently Learning</h3>
          </div>

          <div className="space-y-6">
            {currentLearning?.map((item) => (
              <div key={item?.id} className="border border-glass-border rounded-lg p-4">
                <div className="flex items-start space-x-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center">
                    <Icon name={item?.icon} size={16} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{item?.name}</h4>
                    <p className="text-text-secondary text-sm mt-1">{item?.description}</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-text-secondary">Progress</span>
                  <span className="text-sm font-medium text-primary">{item?.progress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
                    style={{ width: `${item?.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="glass-effect rounded-xl p-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
              <Icon name="Lightbulb" size={20} className="text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Learning Philosophy</h3>
          </div>

          <div className="space-y-4 mb-8">
            {learningPrinciples?.map((principle, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Icon name="CheckCircle" size={16} className="text-secondary mt-1 flex-shrink-0" />
                <p className="text-text-secondary">{principle}</p>
              </div>
            ))}
          </div>

          <div className="bg-surface/50 rounded-lg p-6 border border-glass-border">
            <div className="flex items-center space-x-3 mb-4">
              <Icon name="Target" size={20} className="text-accent" />
              <h4 className="font-semibold text-foreground">2024 Learning Goals</h4>
            </div>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li>• Master full-stack TypeScript development</li>
              <li>• Achieve AWS Solutions Architect certification</li>
              <li>• Contribute to 3 open-source projects</li>
              <li>• Build and deploy 2 production applications</li>
            </ul>
          </div>

          <div className="mt-6 flex space-x-3">
            <Button
              variant="outline"
              size="sm"
              iconName="Github"
              iconPosition="left"
              className="flex-1"
            >
              View Learning Projects
            </Button>
            <Button
              variant="secondary"
              size="sm"
              iconName="ExternalLink"
              iconPosition="left"
              className="flex-1"
            >
              Learning Blog
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningSection;