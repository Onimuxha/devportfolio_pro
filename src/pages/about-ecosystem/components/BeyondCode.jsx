import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const BeyondCode = () => {
  const hobbies = [
    {
      id: 1,
      title: "Photography",
      description: "Capturing moments and exploring composition through street and landscape photography. I find that the attention to detail and creative problem-solving in photography directly translates to my approach in software development.",
      icon: "Camera",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop",
      skills: ["Composition", "Lighting", "Post-processing"],
      timeSpent: "5+ years"
    },
    {
      id: 2,
      title: "Rock Climbing",
      description: "Both indoor and outdoor climbing have taught me patience, problem-solving, and the importance of calculated risk-taking. Each route is like debugging a complex system—you need strategy, persistence, and sometimes a completely different approach.",
      icon: "Mountain",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
      skills: ["Problem Solving", "Risk Assessment", "Physical Fitness"],
      timeSpent: "3+ years"
    },
    {
      id: 3,
      title: "Coffee Brewing",
      description: "The precision and methodology required for the perfect cup of coffee mirrors the attention to detail I bring to coding. From bean selection to extraction timing, it's all about optimizing variables for the best outcome.",
      icon: "Coffee",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
      skills: ["Precision", "Experimentation", "Patience"],
      timeSpent: "4+ years"
    }
  ];

  const personalProjects = [
    {
      id: 1,
      title: "Tech Blog & Tutorials",
      description: "I maintain a technical blog where I share insights, tutorials, and lessons learned from my development journey. Writing helps me solidify my understanding and contribute back to the developer community.",
      icon: "PenTool",
      stats: "50+ articles, 10k+ monthly readers",
      impact: "Helped 500+ developers learn new concepts"
    },
    {
      id: 2,
      title: "Open Source Contributions",
      description: "Regular contributor to various open source projects, from bug fixes to feature implementations. I believe in the power of collaborative development and giving back to the tools that make our work possible.",
      icon: "GitBranch",
      stats: "200+ contributions, 15+ repositories",
      impact: "Contributed to projects used by 100k+ developers"
    },
    {
      id: 3,
      title: "Mentorship Program",
      description: "I mentor junior developers through various platforms, helping them navigate their career paths and overcome technical challenges. Teaching others reinforces my own learning and keeps me connected to emerging perspectives.",
      icon: "Users",
      stats: "25+ mentees, 2+ years active",
      impact: "Helped 15+ developers land their first tech jobs"
    }
  ];

  const lifePhilosophy = [
    {
      principle: "Continuous Growth",
      description: "Every day is an opportunity to learn something new, whether it's a technical skill, a life lesson, or a different perspective."
    },
    {
      principle: "Work-Life Integration",
      description: "Rather than balance, I believe in integration—finding ways to bring passion and purpose into all aspects of life."
    },
    {
      principle: "Community Impact",
      description: "Technology is most powerful when it serves people. I strive to create solutions that make a positive difference in communities."
    },
    {
      principle: "Authentic Connections",
      description: "The best collaborations come from genuine relationships built on trust, respect, and shared values."
    }
  ];

  return (
    <div className="glass-effect rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-error/10 rounded-lg">
          <Icon name="Heart" size={24} className="text-error" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">Beyond Code</h2>
      </div>
      {/* Hobbies & Interests */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <Icon name="Smile" size={20} className="text-primary" />
          Hobbies & Interests
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {hobbies?.map((hobby) => (
            <div key={hobby?.id} className="bg-surface/30 rounded-xl overflow-hidden hover-lift transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <Image
                  src={hobby?.image}
                  alt={hobby?.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon name={hobby?.icon} size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{hobby?.title}</h4>
                    <span className="text-sm text-text-secondary">{hobby?.timeSpent}</span>
                  </div>
                </div>
                
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {hobby?.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {hobby?.skills?.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-md font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Personal Projects */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <Icon name="Rocket" size={20} className="text-secondary" />
          Personal Projects & Contributions
        </h3>
        
        <div className="space-y-6">
          {personalProjects?.map((project) => (
            <div key={project?.id} className="bg-surface/30 rounded-xl p-6 hover-lift transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg flex-shrink-0">
                  <Icon name={project?.icon} size={24} className="text-secondary" />
                </div>
                
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-foreground mb-2">{project?.title}</h4>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    {project?.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-surface/50 rounded-lg p-3">
                      <div className="text-sm font-medium text-foreground mb-1">Statistics</div>
                      <div className="text-sm text-text-secondary">{project?.stats}</div>
                    </div>
                    <div className="bg-surface/50 rounded-lg p-3">
                      <div className="text-sm font-medium text-foreground mb-1">Impact</div>
                      <div className="text-sm text-text-secondary">{project?.impact}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Life Philosophy */}
      <div>
        <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <Icon name="Compass" size={20} className="text-accent" />
          Life Philosophy
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lifePhilosophy?.map((item, index) => (
            <div key={index} className="bg-surface/30 rounded-xl p-6 hover-lift transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">{item?.principle}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">{item?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Call to Action */}
      <div className="mt-12 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 border border-primary/10 text-center">
        <Icon name="MessageCircle" size={32} className="text-primary mx-auto mb-4" />
        <h3 className="text-xl font-bold text-foreground mb-2">Let's Connect</h3>
        <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
          I believe the best collaborations come from shared interests and values. Whether you want to discuss 
          technology, share a coffee brewing technique, or explore a potential project together, I'd love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:sukuna@example.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover-lift transition-all duration-300"
          >
            <Icon name="Mail" size={18} />
            Send me an email
          </a>
          <a
            href="https://linkedin.com/in/sukuna"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-surface text-foreground rounded-lg font-medium hover-lift transition-all duration-300 hover:bg-accent hover:text-white"
          >
            <Icon name="Linkedin" size={18} />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default BeyondCode;