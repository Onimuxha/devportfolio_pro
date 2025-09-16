import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CurrentFocus = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const currentProjects = [
    {
      id: 1,
      title: "AI-Powered Code Review Tool",
      description: "Building an intelligent code review system that uses machine learning to identify potential bugs, security vulnerabilities, and performance issues in real-time.",
      status: "In Development",
      progress: 75,
      technologies: ["React", "Python", "TensorFlow", "Node.js", "PostgreSQL"],
      timeline: "Q1 2025",
      icon: "Bot"
    },
    {
      id: 2,
      title: "Microservices Architecture Migration",
      description: "Leading the migration of a monolithic application to microservices architecture, improving scalability and maintainability for a client serving 100k+ users.",
      status: "Planning Phase",
      progress: 25,
      technologies: ["Docker", "Kubernetes", "AWS", "Node.js", "Redis"],
      timeline: "Q2 2025",
      icon: "Network"
    },
    {
      id: 3,
      title: "Open Source Component Library",
      description: "Creating a comprehensive React component library with TypeScript support, accessibility features, and extensive documentation for the developer community.",
      status: "Beta Testing",
      progress: 90,
      technologies: ["React", "TypeScript", "Storybook", "Jest", "Rollup"],
      timeline: "December 2024",
      icon: "Package"
    }
  ];

  const learningInitiatives = [
    {
      id: 1,
      title: "Advanced Machine Learning",
      description: "Exploring deep learning frameworks and their applications in web development, particularly in user experience optimization and predictive analytics.",
      category: "AI/ML",
      progress: 60,
      platform: "Stanford Online",
      icon: "Brain"
    },
    {
      id: 2,
      title: "Cloud Architecture Patterns",
      description: "Mastering advanced AWS services and cloud-native development patterns to build more scalable and resilient applications.",
      category: "Cloud Computing",
      progress: 45,
      platform: "AWS Training",
      icon: "Cloud"
    },
    {
      id: 3,
      title: "Web3 & Blockchain Development",
      description: "Understanding decentralized applications, smart contracts, and the future of web technologies in the blockchain ecosystem.",
      category: "Blockchain",
      progress: 30,
      platform: "Self-directed",
      icon: "Link"
    }
  ];

  const tabs = [
    { id: 'projects', label: 'Current Projects', icon: 'FolderOpen' },
    { id: 'learning', label: 'Learning & Growth', icon: 'BookOpen' }
  ];

  return (
    <div className="glass-effect rounded-2xl p-8 mb-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-accent/10 rounded-lg">
          <Icon name="Target" size={24} className="text-accent" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">Current Focus</h2>
      </div>
      {/* Tab Navigation */}
      <div className="flex gap-2 mb-6 p-1 bg-surface/50 rounded-lg">
        {tabs?.map((tab) => (
          <button
            key={tab?.id}
            onClick={() => setActiveTab(tab?.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
              activeTab === tab?.id
                ? 'bg-primary text-primary-foreground shadow-glow'
                : 'text-text-secondary hover:text-foreground hover:bg-surface/50'
            }`}
          >
            <Icon name={tab?.icon} size={16} />
            <span>{tab?.label}</span>
          </button>
        ))}
      </div>
      {/* Tab Content */}
      <div className="min-h-[400px]">
        {activeTab === 'projects' && (
          <div className="space-y-6">
            {currentProjects?.map((project) => (
              <div key={project?.id} className="bg-surface/30 rounded-xl p-6 hover-lift transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Icon name={project?.icon} size={24} className="text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="text-lg font-bold text-foreground">{project?.title}</h3>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-md font-medium">
                          {project?.status}
                        </span>
                        <span className="text-sm text-text-secondary">{project?.timeline}</span>
                      </div>
                    </div>

                    <p className="text-text-secondary leading-relaxed mb-4">
                      {project?.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">Progress</span>
                        <span className="text-sm text-text-secondary">{project?.progress}%</span>
                      </div>
                      <div className="w-full bg-surface rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${project?.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project?.technologies?.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'learning' && (
          <div className="space-y-6">
            {learningInitiatives?.map((initiative) => (
              <div key={initiative?.id} className="bg-surface/30 rounded-xl p-6 hover-lift transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg flex-shrink-0">
                    <Icon name={initiative?.icon} size={24} className="text-secondary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="text-lg font-bold text-foreground">{initiative?.title}</h3>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md font-medium">
                          {initiative?.category}
                        </span>
                        <span className="text-sm text-text-secondary">{initiative?.platform}</span>
                      </div>
                    </div>

                    <p className="text-text-secondary leading-relaxed mb-4">
                      {initiative?.description}
                    </p>

                    {/* Progress Bar */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">Learning Progress</span>
                        <span className="text-sm text-text-secondary">{initiative?.progress}%</span>
                      </div>
                      <div className="w-full bg-surface rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-secondary to-accent h-2 rounded-full transition-all duration-500"
                          style={{ width: `${initiative?.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrentFocus;