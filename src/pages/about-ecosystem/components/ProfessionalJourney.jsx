import React from 'react';
import Icon from '../../../components/AppIcon';

const ProfessionalJourney = () => {
  const journeyMilestones = [
    {
      id: 1,
      year: "2024",
      title: "Senior Full Stack Developer",
      company: "TechVision Solutions",
      location: "San Francisco, CA",
      type: "current",
      description: `Leading a team of 6 developers in building next-generation SaaS platforms. Architected microservices 
      infrastructure that improved system performance by 40% and reduced deployment time by 60%. Spearheading the adoption 
      of modern React patterns and TypeScript across all frontend projects.`,
      achievements: [
        "Reduced application load time by 45% through code splitting and optimization",
        "Implemented CI/CD pipeline that decreased deployment errors by 80%",
        "Mentored 3 junior developers who were promoted within 8 months"
      ],
      technologies: ["React 18", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL"]
    },
    {
      id: 2,
      year: "2022",
      title: "Full Stack Developer",
      company: "InnovateLab",
      location: "Remote",
      type: "past",
      description: `Developed and maintained multiple client applications using React and Node.js. Collaborated with 
      cross-functional teams to deliver high-quality software solutions. Focused on creating responsive, accessible 
      web applications with emphasis on user experience.`,
      achievements: [
        "Built 12+ production applications serving 50,000+ users",
        "Improved code coverage from 60% to 95% across all projects",
        "Established coding standards that reduced bug reports by 35%"
      ],
      technologies: ["React", "Express.js", "MongoDB", "Redux", "Material-UI", "Jest"]
    },
    {
      id: 3,
      year: "2020",
      title: "Frontend Developer",
      company: "StartupHub",
      location: "Austin, TX",
      type: "past",
      description: `Started my professional journey focusing on frontend development. Worked closely with designers 
      to implement pixel-perfect interfaces and collaborated with backend teams to integrate APIs. Gained valuable 
      experience in agile development methodologies.`,
      achievements: [
        "Converted 8 Figma designs to responsive React components",
        "Optimized bundle size by 30% using webpack optimization techniques",
        "Implemented accessibility features achieving WCAG 2.1 AA compliance"
      ],
      technologies: ["React", "JavaScript", "CSS3", "Sass", "Webpack", "Git"]
    },
    {
      id: 4,
      year: "2019",
      title: "Computer Science Graduate",
      company: "University of California",
      location: "Berkeley, CA",
      type: "education",
      description: `Graduated with honors in Computer Science. Specialized in software engineering and web technologies. 
      Completed capstone project building a full-stack social media platform that won the 'Best Technical Implementation' award.`,
      achievements: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Led development team for award-winning capstone project",
        "Published research paper on web performance optimization"
      ],
      technologies: ["Java", "Python", "JavaScript", "SQL", "Data Structures", "Algorithms"]
    }
  ];

  const getIconForType = (type) => {
    switch (type) {
      case 'current':
        return 'Briefcase';
      case 'past':
        return 'Building';
      case 'education':
        return 'GraduationCap';
      default:
        return 'Circle';
    }
  };

  const getColorForType = (type) => {
    switch (type) {
      case 'current':
        return 'text-primary';
      case 'past':
        return 'text-secondary';
      case 'education':
        return 'text-accent';
      default:
        return 'text-text-secondary';
    }
  };

  return (
    <div className="glass-effect rounded-2xl p-8 mb-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-secondary/10 rounded-lg">
          <Icon name="MapPin" size={24} className="text-secondary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">Professional Journey</h2>
      </div>
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-30"></div>

        <div className="space-y-8">
          {journeyMilestones?.map((milestone, index) => (
            <div key={milestone?.id} className="relative flex gap-6">
              {/* Timeline Node */}
              <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-surface border-4 border-background flex items-center justify-center ${getColorForType(milestone?.type)}`}>
                <Icon name={getIconForType(milestone?.type)} size={24} />
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <div className="bg-surface/50 rounded-xl p-6 hover-lift transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{milestone?.title}</h3>
                      <div className="flex items-center gap-2 text-text-secondary">
                        <span className="font-medium">{milestone?.company}</span>
                        <span>•</span>
                        <span>{milestone?.location}</span>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${getColorForType(milestone?.type)} bg-current/10`}>
                      {milestone?.year}
                    </div>
                  </div>

                  <p className="text-text-secondary leading-relaxed mb-4">
                    {milestone?.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {milestone?.achievements?.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
                          <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {milestone?.technologies?.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalJourney;