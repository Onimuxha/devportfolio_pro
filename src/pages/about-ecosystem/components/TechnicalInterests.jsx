import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TechnicalInterests = () => {
  const [activeCategory, setActiveCategory] = useState('emerging');

  const emergingTechnologies = [
    {
      id: 1,
      name: "WebAssembly (WASM)",
      description: "Exploring high-performance web applications with near-native speed capabilities.",
      interest: 90,
      status: "Actively Learning",
      icon: "Cpu",
      applications: ["Game Development", "Image Processing", "Scientific Computing"]
    },
    {
      id: 2,
      name: "Edge Computing",
      description: "Investigating distributed computing architectures for reduced latency and improved performance.",
      interest: 85,
      status: "Research Phase",
      icon: "Network",
      applications: ["CDN Optimization", "IoT Applications", "Real-time Analytics"]
    },
    {
      id: 3,
      name: "Quantum Computing",
      description: "Understanding quantum algorithms and their potential impact on cryptography and optimization.",
      interest: 70,
      status: "Theoretical Study",
      icon: "Atom",
      applications: ["Cryptography", "Machine Learning", "Complex Optimization"]
    },
    {
      id: 4,
      name: "Augmented Reality (AR)",
      description: "Building immersive web experiences using WebXR and AR frameworks.",
      interest: 80,
      status: "Prototyping",
      icon: "Eye",
      applications: ["E-commerce", "Education", "Training Simulations"]
    }
  ];

  const currentExploration = [
    {
      id: 1,
      name: "Advanced React Patterns",
      description: "Mastering compound components, render props, and advanced hooks patterns for scalable applications.",
      progress: 75,
      timeInvested: "3 months",
      icon: "Layers",
      resources: ["React Docs", "Kent C. Dodds Blog", "Advanced React Course"]
    },
    {
      id: 2,
      name: "Microservices Architecture",
      description: "Deep diving into distributed systems, service mesh, and container orchestration.",
      progress: 60,
      timeInvested: "4 months",
      icon: "Box",
      resources: ["Kubernetes Docs", "Docker Mastery", "Microservices Patterns Book"]
    },
    {
      id: 3,
      name: "Machine Learning Integration",
      description: "Integrating ML models into web applications using TensorFlow.js and Python backends.",
      progress: 45,
      timeInvested: "2 months",
      icon: "Brain",
      resources: ["TensorFlow.js", "Fast.ai Course", "ML Engineering Book"]
    },
    {
      id: 4,
      name: "Web Performance Optimization",
      description: "Advanced techniques for Core Web Vitals, bundle optimization, and runtime performance.",
      progress: 85,
      timeInvested: "6 months",
      icon: "Gauge",
      resources: ["Web.dev", "Performance Tooling", "Chrome DevTools"]
    }
  ];

  const categories = [
    { id: 'emerging', label: 'Emerging Technologies', icon: 'Rocket' },
    { id: 'current', label: 'Current Exploration', icon: 'Search' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Actively Learning':
        return 'text-success bg-success/10';
      case 'Research Phase':
        return 'text-accent bg-accent/10';
      case 'Theoretical Study':
        return 'text-warning bg-warning/10';
      case 'Prototyping':
        return 'text-primary bg-primary/10';
      default:
        return 'text-text-secondary bg-surface/50';
    }
  };

  return (
    <div className="glass-effect rounded-2xl p-8 mb-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-warning/10 rounded-lg">
          <Icon name="Lightbulb" size={24} className="text-warning" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">Technical Interests</h2>
      </div>
      {/* Category Navigation */}
      <div className="flex gap-2 mb-6 p-1 bg-surface/50 rounded-lg">
        {categories?.map((category) => (
          <button
            key={category?.id}
            onClick={() => setActiveCategory(category?.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
              activeCategory === category?.id
                ? 'bg-primary text-primary-foreground shadow-glow'
                : 'text-text-secondary hover:text-foreground hover:bg-surface/50'
            }`}
          >
            <Icon name={category?.icon} size={16} />
            <span>{category?.label}</span>
          </button>
        ))}
      </div>
      {/* Content */}
      <div className="min-h-[500px]">
        {activeCategory === 'emerging' && (
          <div className="space-y-6">
            {emergingTechnologies?.map((tech) => (
              <div key={tech?.id} className="bg-surface/30 rounded-xl p-6 hover-lift transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Icon name={tech?.icon} size={24} className="text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="text-lg font-bold text-foreground">{tech?.name}</h3>
                      <span className={`px-2 py-1 text-xs rounded-md font-medium ${getStatusColor(tech?.status)}`}>
                        {tech?.status}
                      </span>
                    </div>

                    <p className="text-text-secondary leading-relaxed mb-4">
                      {tech?.description}
                    </p>

                    {/* Interest Level */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">Interest Level</span>
                        <span className="text-sm text-text-secondary">{tech?.interest}%</span>
                      </div>
                      <div className="w-full bg-surface rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-warning to-primary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${tech?.interest}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Applications */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Potential Applications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {tech?.applications?.map((app, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-md font-medium"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeCategory === 'current' && (
          <div className="space-y-6">
            {currentExploration?.map((exploration) => (
              <div key={exploration?.id} className="bg-surface/30 rounded-xl p-6 hover-lift transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg flex-shrink-0">
                    <Icon name={exploration?.icon} size={24} className="text-secondary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="text-lg font-bold text-foreground">{exploration?.name}</h3>
                      <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md font-medium">
                        {exploration?.timeInvested} invested
                      </span>
                    </div>

                    <p className="text-text-secondary leading-relaxed mb-4">
                      {exploration?.description}
                    </p>

                    {/* Progress */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">Learning Progress</span>
                        <span className="text-sm text-text-secondary">{exploration?.progress}%</span>
                      </div>
                      <div className="w-full bg-surface rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-secondary to-accent h-2 rounded-full transition-all duration-500"
                          style={{ width: `${exploration?.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Resources */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Learning Resources:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exploration?.resources?.map((resource, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md font-medium"
                          >
                            {resource}
                          </span>
                        ))}
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

export default TechnicalInterests;