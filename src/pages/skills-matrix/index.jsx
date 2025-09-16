import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';

import SkillFilter from './components/SkillFilter';
import SkillsGrid from './components/SkillsGrid';
import FeaturedSkills from './components/FeaturedSkills';
import SkillsStats from './components/SkillsStats';
import LearningSection from './components/LearningSection';

const SkillsMatrix = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProficiency, setSelectedProficiency] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock Skills Data
  const skills = [
    // Frontend Skills
    {
      id: 1,
      name: "React",
      category: "Frontend",
      level: 95,
      icon: "Code",
      isFeatured: true,
      description: "Building dynamic, component-based user interfaces with hooks, context, and modern patterns",
      detailedDescription: "Expert in React ecosystem including hooks, context API, performance optimization, and testing. Experienced with React 18 features like Suspense and concurrent rendering.",
      applications: [
        "Complex SPA development with state management",
        "Component library creation and maintenance",
        "Performance optimization and code splitting"
      ],
      recentProject: "E-commerce Platform",
      certification: "React Developer Certification"
    },
    {
      id: 2,
      name: "TypeScript",
      category: "Frontend",
      level: 90,
      icon: "FileCode",
      isFeatured: true,
      description: "Type-safe JavaScript development with advanced type system knowledge",
      detailedDescription: "Proficient in advanced TypeScript patterns, generics, utility types, and integration with React. Focus on maintainable, scalable codebases.",
      applications: [
        "Large-scale application architecture",
        "API type definitions and validation",
        "Custom utility types and decorators"
      ],
      recentProject: "Dashboard Analytics",
      certification: null
    },
    {
      id: 3,
      name: "Tailwind CSS",
      category: "Frontend",
      level: 88,
      icon: "Palette",
      isFeatured: true,
      description: "Utility-first CSS framework for rapid UI development and consistent design systems",
      detailedDescription: "Expert in creating responsive, accessible designs with Tailwind. Experienced in custom configuration, plugin development, and design system implementation.",
      applications: [
        "Responsive design system creation",
        "Custom component styling patterns",
        "Dark mode and theme implementation"
      ],
      recentProject: "Portfolio Website",
      certification: null
    },
    {
      id: 4,
      name: "JavaScript ES6+",
      category: "Frontend",
      level: 92,
      icon: "Zap",
      description: "Modern JavaScript features, async programming, and functional programming concepts",
      recentProject: "API Integration Layer",
      certification: null
    },
    {
      id: 5,
      name: "HTML5 & CSS3",
      category: "Frontend",
      level: 85,
      icon: "Layout",
      description: "Semantic markup, accessibility standards, and modern CSS features including Grid and Flexbox",
      recentProject: "Landing Page Redesign",
      certification: null
    },
    {
      id: 6,
      name: "Vue.js",
      category: "Frontend",
      level: 75,
      icon: "Layers",
      description: "Progressive framework for building user interfaces with composition API and Vuex",
      recentProject: "Admin Dashboard",
      certification: null
    },

    // Backend Skills
    {
      id: 7,
      name: "Node.js",
      category: "Backend",
      level: 87,
      icon: "Server",
      description: "Server-side JavaScript runtime for building scalable network applications",
      recentProject: "REST API Service",
      certification: null
    },
    {
      id: 8,
      name: "Express.js",
      category: "Backend",
      level: 85,
      icon: "Globe",
      description: "Fast, unopinionated web framework for Node.js with middleware and routing",
      recentProject: "Authentication Service",
      certification: null
    },
    {
      id: 9,
      name: "MongoDB",
      category: "Backend",
      level: 80,
      icon: "Database",
      description: "NoSQL database for flexible, scalable data storage with aggregation pipelines",
      recentProject: "User Management System",
      certification: null
    },
    {
      id: 10,
      name: "PostgreSQL",
      category: "Backend",
      level: 78,
      icon: "HardDrive",
      description: "Advanced relational database with complex queries, indexing, and performance optimization",
      recentProject: "Analytics Platform",
      certification: null
    },
    {
      id: 11,
      name: "Python",
      category: "Backend",
      level: 82,
      icon: "Code2",
      description: "Versatile programming language for web development, automation, and data processing",
      recentProject: "Data Processing Pipeline",
      certification: null
    },
    {
      id: 12,
      name: "Django",
      category: "Backend",
      level: 75,
      icon: "Shield",
      description: "High-level Python web framework with built-in admin, ORM, and security features",
      recentProject: "Content Management System",
      certification: null
    },

    // Tools & Workflow
    {
      id: 13,
      name: "Git & GitHub",
      category: "Tools",
      level: 90,
      icon: "GitBranch",
      description: "Version control, branching strategies, and collaborative development workflows",
      recentProject: "Team Collaboration Setup",
      certification: null
    },
    {
      id: 14,
      name: "Docker",
      category: "Tools",
      level: 75,
      icon: "Package",
      description: "Containerization for consistent development and deployment environments",
      recentProject: "Microservices Architecture",
      certification: null
    },
    {
      id: 15,
      name: "Jest & Testing",
      category: "Tools",
      level: 80,
      icon: "CheckCircle",
      description: "Unit testing, integration testing, and test-driven development practices",
      recentProject: "Component Test Suite",
      certification: null
    },
    {
      id: 16,
      name: "Webpack & Vite",
      category: "Tools",
      level: 78,
      icon: "Settings",
      description: "Module bundling, build optimization, and development server configuration",
      recentProject: "Build Pipeline Optimization",
      certification: null
    },
    {
      id: 17,
      name: "AWS Services",
      category: "Tools",
      level: 70,
      icon: "Cloud",
      description: "Cloud computing services including EC2, S3, Lambda, and deployment strategies",
      recentProject: "Serverless Application",
      certification: null
    },
    {
      id: 18,
      name: "Figma",
      category: "Tools",
      level: 72,
      icon: "Figma",
      description: "UI/UX design, prototyping, and design system creation for development handoff",
      recentProject: "Design System Documentation",
      certification: null
    },

    // Soft Skills
    {
      id: 19,
      name: "Problem Solving",
      category: "Soft Skills",
      level: 92,
      icon: "Puzzle",
      description: "Analytical thinking, debugging complex issues, and finding efficient solutions",
      recentProject: "Performance Optimization",
      certification: null
    },
    {
      id: 20,
      name: "Communication",
      category: "Soft Skills",
      level: 88,
      icon: "MessageSquare",
      description: "Technical documentation, team collaboration, and client requirement gathering",
      recentProject: "Technical Documentation",
      certification: null
    },
    {
      id: 21,
      name: "Project Management",
      category: "Soft Skills",
      level: 85,
      icon: "Calendar",
      description: "Agile methodologies, sprint planning, and cross-functional team coordination",
      recentProject: "Feature Development Sprint",
      certification: "Scrum Master Certification"
    },
    {
      id: 22,
      name: "Leadership",
      category: "Soft Skills",
      level: 80,
      icon: "Users",
      description: "Mentoring junior developers, code reviews, and technical decision making",
      recentProject: "Team Mentorship Program",
      certification: null
    },
    {
      id: 23,
      name: "Adaptability",
      category: "Soft Skills",
      level: 90,
      icon: "RefreshCw",
      description: "Learning new technologies quickly and adapting to changing project requirements",
      recentProject: "Technology Migration",
      certification: null
    },
    {
      id: 24,
      name: "Time Management",
      category: "Soft Skills",
      level: 87,
      icon: "Clock",
      description: "Prioritizing tasks, meeting deadlines, and balancing multiple project responsibilities",
      recentProject: "Multi-project Coordination",
      certification: null
    }
  ];

  // Filter Categories
  const categories = [
    { value: 'all', label: 'All Skills', icon: 'Grid3x3' },
    { value: 'Frontend', label: 'Frontend', icon: 'Monitor' },
    { value: 'Backend', label: 'Backend', icon: 'Server' },
    { value: 'Tools', label: 'Tools & Workflow', icon: 'Wrench' },
    { value: 'Soft Skills', label: 'Soft Skills', icon: 'Heart' }
  ];

  const proficiencyLevels = [
    { value: 'all', label: 'All Levels' },
    { value: 'expert', label: 'Expert (90%+)' },
    { value: 'advanced', label: 'Advanced (75%+)' },
    { value: 'intermediate', label: 'Intermediate (60%+)' }
  ];

  // Featured Skills
  const featuredSkills = skills?.filter(skill => skill?.isFeatured);

  // Filter Logic
  const filteredSkills = useMemo(() => {
    return skills?.filter(skill => {
      const matchesCategory = selectedCategory === 'all' || skill?.category === selectedCategory;
      const matchesProficiency = 
        selectedProficiency === 'all' ||
        (selectedProficiency === 'expert' && skill?.level >= 90) ||
        (selectedProficiency === 'advanced' && skill?.level >= 75) ||
        (selectedProficiency === 'intermediate' && skill?.level >= 60);
      const matchesSearch = skill?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                           skill?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase());
      
      return matchesCategory && matchesProficiency && matchesSearch;
    });
  }, [selectedCategory, selectedProficiency, searchTerm]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Icon name="Code" size={16} />
                <span>Technical Expertise Showcase</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Skills <span className="text-gradient-primary">Matrix</span>
              </h1>
              
              <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
                A comprehensive showcase of technical and soft skills that drive innovation and deliver exceptional results. 
                From frontend mastery to backend architecture, explore the technologies and methodologies I leverage to build 
                scalable, user-centric solutions.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex items-center space-x-2 text-text-secondary">
                  <Icon name="TrendingUp" size={20} className="text-primary" />
                  <span>Continuously evolving skillset</span>
                </div>
                <div className="flex items-center space-x-2 text-text-secondary">
                  <Icon name="Award" size={20} className="text-secondary" />
                  <span>Industry-recognized expertise</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Stats */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <SkillsStats skills={skills} />
          </div>
        </section>

        {/* Featured Skills */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <FeaturedSkills featuredSkills={featuredSkills} />
          </div>
        </section>

        {/* Skills Filter and Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Complete Skills Portfolio</h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Filter and explore my complete technical toolkit. Each skill represents hands-on experience 
                and continuous learning in modern development practices.
              </p>
            </div>

            <SkillFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              proficiencyLevels={proficiencyLevels}
              selectedProficiency={selectedProficiency}
              onProficiencyChange={setSelectedProficiency}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />

            <SkillsGrid 
              skills={skills}
              filteredSkills={filteredSkills}
            />
          </div>
        </section>

        {/* Learning Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <LearningSection />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-effect rounded-2xl p-12">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Rocket" size={32} className="text-primary" />
              </div>
              
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Build Something Amazing?
              </h2>
              
              <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how my skills and experience can contribute to your next project. I'm always excited to tackle new challenges and learn emerging technologies.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="/contact-interface"
                  className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-smooth"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon name="MessageCircle" size={20} />
                  <span>Start a Conversation</span>
                </motion.a>
                
                <motion.a
                  href="/experience-showcase"
                  className="inline-flex items-center space-x-2 border border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-smooth"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon name="Eye" size={20} />
                  <span>View My Work</span>
                </motion.a>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="border-t border-glass-border py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-text-secondary">
            © {new Date()?.getFullYear()} Sukuna. Crafted with passion and precision.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SkillsMatrix;