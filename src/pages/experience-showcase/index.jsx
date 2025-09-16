import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import ProjectStats from './components/ProjectStats';
import FilterTabs from './components/FilterTabs';
import ProjectGrid from './components/ProjectGrid';
import ProjectModal from './components/ProjectModal';

const ExperienceShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock project data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A comprehensive e-commerce solution with advanced inventory management, payment processing, and real-time analytics dashboard.",
      category: "Full-Stack Solutions",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "Redis"],
      status: "Live",
      liveUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/sukuna/ecommerce-platform",
      stats: {
        duration: "4 months",
        teamSize: "3 developers",
        role: "Full-Stack Lead"
      },
      results: [
        "Increased conversion rate by 35%",
        "Reduced page load time by 60%",
        "Processed over $2M in transactions",
        "Achieved 99.9% uptime"
      ],
      details: {
        problem: "The client needed a scalable e-commerce platform that could handle high traffic volumes during peak seasons while providing a seamless user experience across all devices.",
        solution: "Developed a microservices architecture using React for the frontend and Node.js for the backend, implementing advanced caching strategies and optimized database queries.",
        lessons: "Learned the importance of performance optimization in e-commerce applications and gained expertise in handling payment processing securely."
      }
    },
    {
      id: 2,
      title: "Task Management SaaS",
      description: "A collaborative project management tool with real-time updates, team collaboration features, and advanced reporting capabilities.",
      category: "SaaS Platforms",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI", "Chart.js"],
      status: "Live",
      liveUrl: "https://taskmaster-pro.com",
      githubUrl: "https://github.com/sukuna/taskmaster-saas",
      stats: {
        duration: "6 months",
        teamSize: "2 developers",
        role: "Frontend Lead"
      },
      results: [
        "Onboarded 500+ active users",
        "Achieved 4.8/5 user satisfaction",
        "Reduced task completion time by 40%",
        "Generated $50K+ in revenue"
      ],
      details: {
        problem: "Small to medium teams struggled with project coordination and lacked visibility into project progress and team productivity.",
        solution: "Built a comprehensive SaaS platform with real-time collaboration, automated reporting, and intuitive project visualization tools.",
        lessons: "Gained deep understanding of SaaS business models and the importance of user onboarding in product adoption."
      }
    },
    {
      id: 3,
      title: "Mobile Fitness App",
      description: "A React Native fitness tracking application with workout plans, progress tracking, and social features for fitness enthusiasts.",
      category: "Mobile Apps",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      technologies: ["React Native", "Expo", "Firebase", "Redux", "AsyncStorage"],
      status: "In Development",
      githubUrl: "https://github.com/sukuna/fitness-tracker",
      stats: {
        duration: "3 months",
        teamSize: "Solo project",
        role: "Full-Stack Developer"
      },
      results: [
        "Beta testing with 100+ users",
        "4.6/5 app store rating",
        "Featured in fitness app collections",
        "95% user retention rate"
      ],
      details: {
        problem: "Existing fitness apps lacked personalization and community features that motivate users to maintain consistent workout routines.",
        solution: "Developed a mobile-first application with AI-powered workout recommendations and social challenges to increase user engagement.",
        lessons: "Learned mobile app development best practices and the importance of offline functionality in fitness applications."
      }
    },
    {
      id: 4,
      title: "Real Estate Portal",
      description: "A comprehensive real estate platform with property listings, virtual tours, mortgage calculators, and agent management system.",
      category: "Web Applications",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      technologies: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS", "Mapbox"],
      status: "Live",
      liveUrl: "https://realestate-portal.com",
      githubUrl: "https://github.com/sukuna/realestate-portal",
      stats: {
        duration: "5 months",
        teamSize: "4 developers",
        role: "Technical Lead"
      },
      results: [
        "Listed 10,000+ properties",
        "Facilitated $5M+ in sales",
        "Reduced search time by 50%",
        "Increased agent productivity by 30%"
      ],
      details: {
        problem: "Traditional real estate websites provided poor search experiences and lacked modern features like virtual tours and detailed neighborhood information.",
        solution: "Created a modern, responsive platform with advanced search filters, interactive maps, and integrated virtual tour capabilities.",
        lessons: "Gained expertise in geospatial data handling and learned the importance of performance optimization for image-heavy applications."
      }
    },
    {
      id: 5,
      title: "Restaurant POS System",
      description: "A point-of-sale system for restaurants with order management, inventory tracking, staff management, and analytics dashboard.",
      category: "Full-Stack Solutions",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
      technologies: ["React", "Express.js", "MySQL", "Socket.io", "Electron"],
      status: "Live",
      liveUrl: "https://restaurant-pos.com",
      githubUrl: "https://github.com/sukuna/restaurant-pos",
      stats: {
        duration: "4 months",
        teamSize: "3 developers",
        role: "Full-Stack Developer"
      },
      results: [
        "Deployed in 25+ restaurants",
        "Reduced order processing time by 45%",
        "Improved inventory accuracy by 90%",
        "Increased customer satisfaction by 25%"
      ],
      details: {
        problem: "Local restaurants needed an affordable, easy-to-use POS system that could handle complex orders and provide real-time business insights.",
        solution: "Developed a desktop application using Electron with real-time order processing and comprehensive reporting features.",
        lessons: "Learned about desktop application development and the unique challenges of building software for the hospitality industry."
      }
    },
    {
      id: 6,
      title: "API Gateway Service",
      description: "A scalable API gateway with rate limiting, authentication, monitoring, and load balancing for microservices architecture.",
      category: "APIs & Backend",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      technologies: ["Node.js", "Express", "Redis", "Docker", "Kubernetes", "Prometheus"],
      status: "Live",
      githubUrl: "https://github.com/sukuna/api-gateway",
      stats: {
        duration: "3 months",
        teamSize: "2 developers",
        role: "Backend Lead"
      },
      results: [
        "Handles 1M+ requests daily",
        "99.99% uptime achieved",
        "Reduced response time by 30%",
        "Supports 50+ microservices"
      ],
      details: {
        problem: "The company's microservices architecture lacked a centralized gateway for handling authentication, rate limiting, and request routing.",
        solution: "Built a high-performance API gateway with comprehensive monitoring and automatic scaling capabilities using containerization.",
        lessons: "Gained deep understanding of microservices architecture and learned advanced DevOps practices for scalable backend systems."
      }
    }
  ];

  // Mock stats data
  const statsData = {
    totalProjects: 25,
    technologiesUsed: 30,
    clientsServed: 15,
    successRate: 98
  };

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = ['All', ...new Set(projects.map(project => project.category))];
    return uniqueCategories;
  }, [projects]);

  // Filter projects based on active category
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return projects;
    }
    return projects?.filter(project => project?.category === activeCategory);
  }, [projects, activeCategory]);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <Helmet>
        <title>Experience Showcase - Sukuna | Full-Stack Developer Portfolio</title>
        <meta name="description" content="Explore Sukuna's comprehensive project portfolio featuring web applications, mobile apps, and full-stack solutions with detailed case studies and measurable results." />
        <meta name="keywords" content="portfolio, projects, web development, mobile apps, full-stack, case studies, React, Node.js" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Icon name="Briefcase" size={16} />
                  <span>Professional Portfolio</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                  Experience
                  <span className="text-gradient-primary"> Showcase</span>
                </h1>
                
                <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                  Discover my journey through innovative projects, technical challenges, and measurable results. 
                  Each project represents a unique problem-solving approach and demonstrates my commitment to 
                  delivering exceptional digital experiences.
                </p>
              </motion.div>

              {/* Project Statistics */}
              <ProjectStats stats={statsData} />

              {/* Filter Tabs */}
              <FilterTabs
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />

              {/* Projects Grid */}
              <ProjectGrid
                projects={filteredProjects}
                onProjectSelect={handleProjectSelect}
              />

              {/* Empty State */}
              {filteredProjects?.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    No projects found
                  </h3>
                  <p className="text-text-secondary">
                    Try selecting a different category to see more projects.
                  </p>
                </motion.div>
              )}
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/30">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Ready to Start Your Next Project?
                </h2>
                <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                  Let's collaborate to bring your vision to life with innovative solutions 
                  and exceptional results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="/contact-interface"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Start a Conversation
                  </motion.a>
                  <motion.a
                    href="/skills-matrix"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Icon name="Code" size={20} className="mr-2" />
                    View My Skills
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </>
  );
};

export default ExperienceShowcase;