import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import ScrollspyHeader from './components/ScrollspyHeader';

// Import all existing page components (content only, not the full pages)
import HeroContent from '../hero-landing/components/HeroContent';
import BackgroundAnimation from '../hero-landing/components/BackgroundAnimation';
import ScrollIndicator from '../hero-landing/components/ScrollIndicator';
import TypingAnimation from '../hero-landing/components/TypingAnimation';
import SocialLinks from '../hero-landing/components/SocialLinks';

import ProfileHeader from '../about-ecosystem/components/ProfileHeader';
import PersonalStatement from '../about-ecosystem/components/PersonalStatement';
import ProfessionalJourney from '../about-ecosystem/components/ProfessionalJourney';
import CurrentFocus from '../about-ecosystem/components/CurrentFocus';
import ValuesApproach from '../about-ecosystem/components/ValuesApproach';
import TechnicalInterests from '../about-ecosystem/components/TechnicalInterests';
import BeyondCode from '../about-ecosystem/components/BeyondCode';

import SkillsStats from '../skills-matrix/components/SkillsStats';
import FeaturedSkills from '../skills-matrix/components/FeaturedSkills';
import SkillsGrid from '../skills-matrix/components/SkillsGrid';
import SkillFilter from '../skills-matrix/components/SkillFilter';
import LearningSection from '../skills-matrix/components/LearningSection';

import ProjectGrid from '../experience-showcase/components/ProjectGrid';
import ProjectStats from '../experience-showcase/components/ProjectStats';
import FilterTabs from '../experience-showcase/components/FilterTabs';

import EducationCard from '../educational-foundation/components/EducationCard';
import CertificationCard from '../educational-foundation/components/CertificationCard';
import StatsCard from '../educational-foundation/components/StatsCard';

import ContactForm from '../contact-interface/components/ContactForm';
import ContactMethods from '../contact-interface/components/ContactMethods';
import LocationMap from '../contact-interface/components/LocationMap';
import AvailabilityStatus from '../contact-interface/components/AvailabilityStatus';

import Icon from '../../components/AppIcon';

import { useNavigate } from 'react-router-dom';

const SinglePagePortfolio = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProficiency, setSelectedProficiency] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProjectCategory, setSelectedProjectCategory] = useState('all');

  // Mock data for skills (same as in skills-matrix)
  const skills = [
    {
      id: 1,
      name: "React",
      category: "Frontend",
      level: 95,
      icon: "Code",
      isFeatured: true,
      description: "Building dynamic, component-based user interfaces with hooks, context, and modern patterns",
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
      recentProject: "Portfolio Website",
      certification: null
    },
    {
      id: 4,
      name: "Node.js",
      category: "Backend",
      level: 87,
      icon: "Server",
      description: "Server-side JavaScript runtime for building scalable network applications",
      recentProject: "REST API Service",
      certification: null
    },
    {
      id: 5,
      name: "MongoDB",
      category: "Backend",
      level: 80,
      icon: "Database",
      description: "NoSQL database for flexible, scalable data storage with aggregation pipelines",
      recentProject: "User Management System",
      certification: null
    },
    {
      id: 6,
      name: "Git & GitHub",
      category: "Tools",
      level: 90,
      icon: "GitBranch",
      description: "Version control, branching strategies, and collaborative development workflows",
      recentProject: "Team Collaboration Setup",
      certification: null
    }
  ];

  const featuredSkills = skills?.filter(skill => skill?.isFeatured);

  const handleViewWork = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/assets/cv/Sukuna_FullStack_Developer_CV.pdf';
    link.download = 'Sukuna_FullStack_Developer_CV.pdf';
    document.body?.appendChild(link);
    link?.click();
    document.body?.removeChild(link);
  };

  const handleScrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Sukuna - Full Stack Developer | Complete Portfolio</title>
        <meta 
          name="description" 
          content="Sukuna's complete portfolio showcasing skills, experience, and projects in full-stack development with React, Node.js, and modern web technologies." 
        />
      </Helmet>
      {/* Scrollspy Header */}
      <ScrollspyHeader />
      {/* Hero Section */}
      <section id="hero" className="min-h-screen bg-background text-foreground overflow-hidden relative">
        <BackgroundAnimation />
        <SocialLinks />
        
        <main className="relative min-h-screen flex items-center justify-center">
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <div className="text-center">
              <HeroContent 
                onViewWork={handleViewWork}
                onDownloadCV={handleDownloadCV}
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
                className="mt-12"
              >
                <TypingAnimation />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
              >
                <div className="glass-effect p-6 rounded-xl hover-lift">
                  <div className="text-primary text-2xl font-bold mb-2">Clean Code</div>
                  <p className="text-text-secondary text-sm">
                    Writing maintainable, scalable, and efficient code following industry best practices.
                  </p>
                </div>
                <div className="glass-effect p-6 rounded-xl hover-lift">
                  <div className="text-primary text-2xl font-bold mb-2">Modern Tech</div>
                  <p className="text-text-secondary text-sm">
                    Leveraging cutting-edge technologies and frameworks for optimal performance.
                  </p>
                </div>
                <div className="glass-effect p-6 rounded-xl hover-lift md:col-span-2 lg:col-span-1">
                  <div className="text-primary text-2xl font-bold mb-2">User Focus</div>
                  <p className="text-text-secondary text-sm">
                    Creating intuitive and engaging user experiences that drive results.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
          
          <ScrollIndicator onScrollDown={handleScrollToNext} />
        </main>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              About <span className="text-gradient-primary">Sukuna</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Discover the professional journey, values, and passion that drive my approach to 
              full-stack development and technology innovation.
            </p>
          </div>

          <ProfileHeader />
          <PersonalStatement />
          <ProfessionalJourney />
          <CurrentFocus />
          <ValuesApproach />
          <TechnicalInterests />
          <BeyondCode />
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="py-20 bg-surface/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Code" size={16} />
              <span>Technical Expertise Showcase</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Skills <span className="text-gradient-primary">Matrix</span>
            </h2>
            
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
              A comprehensive showcase of technical and soft skills that drive innovation and deliver exceptional results.
            </p>
          </div>

          <SkillsStats skills={skills} />
          <div className="mt-16">
            <FeaturedSkills featuredSkills={featuredSkills} />
          </div>
          
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">Complete Skills Portfolio</h3>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Filter and explore my complete technical toolkit with hands-on experience.
              </p>
            </div>

            <SkillFilter
              categories={[
                { value: 'all', label: 'All Skills', icon: 'Grid3x3' },
                { value: 'Frontend', label: 'Frontend', icon: 'Monitor' },
                { value: 'Backend', label: 'Backend', icon: 'Server' },
                { value: 'Tools', label: 'Tools', icon: 'Wrench' }
              ]}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              proficiencyLevels={[
                { value: 'all', label: 'All Levels' },
                { value: 'expert', label: 'Expert (90%+)' },
                { value: 'advanced', label: 'Advanced (75%+)' }
              ]}
              selectedProficiency={selectedProficiency}
              onProficiencyChange={setSelectedProficiency}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />

            <SkillsGrid 
              skills={skills}
              filteredSkills={skills?.filter(skill => {
                const matchesCategory = selectedCategory === 'all' || skill?.category === selectedCategory;
                const matchesProficiency = 
                  selectedProficiency === 'all' ||
                  (selectedProficiency === 'expert' && skill?.level >= 90) ||
                  (selectedProficiency === 'advanced' && skill?.level >= 75);
                const matchesSearch = skill?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase());
                return matchesCategory && matchesProficiency && matchesSearch;
              })}
            />
          </div>
          
          <div className="mt-16">
            <LearningSection />
          </div>
        </div>
      </section>
      {/* Experience Section */}
      <section id="experience" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Briefcase" size={16} />
              <span>Professional Portfolio</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Experience <span className="text-gradient-secondary">Showcase</span>
            </h2>
            
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Explore a curated collection of projects that demonstrate technical expertise, problem-solving skills, and innovative solutions.
            </p>
          </div>

          <ProjectStats 
            stats={{
              totalProjects: 25,
              completedProjects: 20,
              technologies: 15,
              yearsExperience: 5
            }}
          />
          
          <div className="mt-16">
            <FilterTabs
              categories={[
                { id: 'all', name: 'All Projects' },
                { id: 'frontend', name: 'Frontend' },
                { id: 'backend', name: 'Backend' },
                { id: 'fullstack', name: 'Full Stack' }
              ]}
              activeCategory={selectedProjectCategory}
              selectedCategory={selectedProjectCategory}
              onCategoryChange={setSelectedProjectCategory}
            />
            
            <ProjectGrid 
              selectedCategory={selectedProjectCategory}
              projects={[
                {
                  id: 1,
                  title: 'E-commerce Platform',
                  category: 'fullstack',
                  description: 'Full-stack e-commerce solution with React and Node.js',
                  technologies: ['React', 'Node.js', 'MongoDB'],
                  image: '/images/project1.jpg',
                  demoUrl: '#',
                  githubUrl: '#'
                }
              ]}
              onProjectSelect={() => {}}
            />
          </div>
        </div>
      </section>
      {/* Education Section */}
      <section id="education" className="py-20 bg-surface/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="GraduationCap" size={16} />
              <span>Learning Foundation</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Educational <span className="text-gradient-accent">Foundation</span>
            </h2>
            
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              A journey of continuous learning, formal education, and professional certifications that shaped my expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-16">
            <StatsCard 
              icon="BookOpen"
              value="5+"
              label="Years Experience"
              description="Professional development"
              stats={{
                value: "5+",
                label: "Years Experience",
                description: "Professional development",
                icon: "BookOpen"
              }}
            />
            <StatsCard 
              icon="Award"
              value="12+"
              label="Certifications"
              description="Industry recognized"
              stats={{
                value: "12+",
                label: "Certifications",
                description: "Industry recognized",
                icon: "Award"
              }}
            />
            <StatsCard 
              icon="Code"
              value="50+"
              label="Projects Completed"
              description="Successful deliveries"
              stats={{
                value: "50+",
                label: "Projects Completed",
                description: "Successful deliveries",
                icon: "Code"
              }}
            />
            <StatsCard 
              icon="Users"
              value="20+"
              label="Team Collaborations"
              description="Cross-functional work"
              stats={{
                value: "20+",
                label: "Team Collaborations",
                description: "Cross-functional work",
                icon: "Users"
              }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <EducationCard 
              education={{
                degree: "Bachelor of Computer Science",
                institution: "University of Technology",
                year: "2018-2022",
                gpa: "3.8/4.0",
                description: "Specialized in software engineering and web development"
              }}
              index={0}
            />
            <div className="space-y-6">
              <CertificationCard 
                title="React Developer Certification"
                issuer="Meta"
                date="2023"
                description="Advanced React patterns and performance optimization"
                certification={{
                  title: "React Developer Certification",
                  issuer: "Meta",
                  date: "2023",
                  description: "Advanced React patterns and performance optimization",
                  credentialId: "META-REACT-2023"
                }}
              />
              <CertificationCard 
                title="AWS Cloud Practitioner"
                issuer="Amazon Web Services"
                date="2023"
                description="Cloud computing fundamentals and AWS services"
                certification={{
                  title: "AWS Cloud Practitioner",
                  issuer: "Amazon Web Services",
                  date: "2023",
                  description: "Cloud computing fundamentals and AWS services",
                  credentialId: "AWS-CP-2023"
                }}
              />
              <CertificationCard 
                title="Scrum Master Certification"
                issuer="Scrum Alliance"
                date="2022"
                description="Agile methodologies and team leadership"
                certification={{
                  title: "Scrum Master Certification",
                  issuer: "Scrum Alliance",
                  date: "2022",
                  description: "Agile methodologies and team leadership",
                  credentialId: "SA-SM-2022"
                }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="MessageCircle" size={16} />
              <span>Get In Touch</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Contact <span className="text-gradient-primary">Interface</span>
            </h2>
            
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Ready to collaborate? Let's discuss your project and explore how we can create something amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <AvailabilityStatus />
            <ContactMethods />
            <LocationMap />
          </div>
          
          <ContactForm />
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-surface/30 border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-text-secondary">
              © {new Date()?.getFullYear()} Sukuna Ryomen. Crafted with passion and precision.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SinglePagePortfolio;