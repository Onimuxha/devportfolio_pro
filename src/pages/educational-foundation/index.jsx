import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import EducationCard from './components/EducationCard';
import CertificationCard from './components/CertificationCard';
import LearningPathCard from './components/LearningPathCard';
import SkillProgressBar from './components/SkillProgressBar';
import StatsCard from './components/StatsCard';

const EducationalFoundation = () => {
  const [activeTab, setActiveTab] = useState('education');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mock Education Data
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Technology in Computer Science",
      institution: "Indian Institute of Technology (IIT) Delhi",
      location: "New Delhi, India",
      duration: "2018 - 2022",
      gpa: "8.7/10.0",
      honors: "Magna Cum Laude",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=400&fit=crop&crop=center",
      description: `Comprehensive computer science education focusing on software engineering, algorithms, and system design. Specialized in full-stack development with emphasis on modern web technologies and scalable architecture patterns.`,
      coursework: [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Database Management Systems",
        "Computer Networks",
        "Operating Systems",
        "Web Technologies",
        "Machine Learning",
        "Distributed Systems"
      ],
      achievements: [
        "Dean\'s List for 6 consecutive semesters",
        "Led development of campus management system used by 10,000+ students",
        "Published research paper on \'Optimizing React Performance in Large-Scale Applications'",
        "Winner of Inter-IIT Tech Meet 2021 - Web Development Category"
      ]
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (Science)",
      institution: "Delhi Public School",
      location: "Mumbai, India",
      duration: "2016 - 2018",
      gpa: "95.2%",
      honors: "School Topper",
      logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=400&h=400&fit=crop&crop=center",
      description: `Strong foundation in mathematics, physics, and computer science. Early exposure to programming languages and logical thinking that shaped my analytical approach to problem-solving.`,
      coursework: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Computer Science",
        "English"
      ],
      achievements: [
        "State-level Mathematics Olympiad - Gold Medal",
        "National Science Exhibition - First Prize",
        "School Computer Club President",
        "Developed first mobile app at age 17"
      ]
    }
  ];

  // Mock Certifications Data
  const certificationsData = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect - Professional",
      provider: "Amazon Web Services",
      providerLogo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=400&h=400&fit=crop&crop=center",
      status: "completed",
      issueDate: "March 2024",
      expiryDate: "March 2027",
      credentialId: "AWS-PSA-2024-001",
      verifyUrl: "https://aws.amazon.com/verification",
      description: `Advanced certification demonstrating expertise in designing distributed applications and systems on AWS platform. Covers complex architectural patterns, security, and cost optimization.`,
      skills: ["AWS Architecture", "Cloud Security", "Cost Optimization", "Scalability", "DevOps"]
    },
    {
      id: 2,
      title: "Google Cloud Professional Developer",
      provider: "Google Cloud",
      providerLogo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400&h=400&fit=crop&crop=center",
      status: "completed",
      issueDate: "January 2024",
      expiryDate: "January 2026",
      credentialId: "GCP-PD-2024-789",
      verifyUrl: "https://cloud.google.com/certification",
      description: `Professional-level certification focusing on application development, deployment, and monitoring on Google Cloud Platform.`,
      skills: ["GCP Services", "Kubernetes", "Cloud Functions", "BigQuery", "Cloud Storage"]
    },
    {
      id: 3,
      title: "Meta React Developer Professional Certificate",
      provider: "Meta (Facebook)",
      providerLogo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=400&fit=crop&crop=center",
      status: "completed",
      issueDate: "November 2023",
      credentialId: "META-RD-2023-456",
      description: `Comprehensive program covering advanced React concepts, state management, testing, and performance optimization techniques.`,
      skills: ["React 18", "Redux Toolkit", "Testing Library", "Performance Optimization", "Hooks"]
    },
    {
      id: 4,
      title: "MongoDB Certified Developer",
      provider: "MongoDB University",
      providerLogo: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop&crop=center",
      status: "in-progress",
      issueDate: "Expected: February 2025",
      description: `Currently pursuing certification in MongoDB database design, optimization, and application development.`,
      skills: ["MongoDB", "Aggregation", "Indexing", "Schema Design", "Performance Tuning"]
    }
  ];

  // Mock Learning Paths Data
  const learningPathsData = [
    {
      id: 1,
      title: "Advanced React & Next.js Mastery",
      totalCourses: 12,
      duration: "6 months",
      level: "Advanced",
      progress: 75,
      startDate: "September 2024",
      description: `Deep dive into React 18 features, Next.js 14, server components, and advanced patterns for building production-ready applications.`,
      currentCourse: {
        title: "Server Components & App Router",
        progress: 60
      },
      skills: ["React 18", "Next.js 14", "Server Components", "App Router", "Streaming", "Suspense"]
    },
    {
      id: 2,
      title: "Cloud Architecture & DevOps",
      totalCourses: 8,
      duration: "4 months",
      level: "Intermediate",
      progress: 45,
      startDate: "October 2024",
      description: `Comprehensive learning path covering cloud architecture patterns, containerization, and CI/CD best practices.`,
      currentCourse: {
        title: "Kubernetes Fundamentals",
        progress: 30
      },
      skills: ["Docker", "Kubernetes", "CI/CD", "Infrastructure as Code", "Monitoring"]
    },
    {
      id: 3,
      title: "AI/ML for Developers",
      totalCourses: 15,
      duration: "8 months",
      level: "Beginner",
      progress: 20,
      startDate: "November 2024",
      description: `Introduction to machine learning concepts and practical implementation for web developers.`,
      currentCourse: {
        title: "Python for Machine Learning",
        progress: 80
      },
      skills: ["Python", "TensorFlow", "Scikit-learn", "Data Analysis", "Neural Networks"]
    }
  ];

  // Mock Skills Data
  const skillsData = [
    {
      name: "JavaScript/TypeScript",
      category: "Programming Languages",
      level: "Expert",
      icon: "Code",
      experience: "5+ years",
      recentLearning: "Advanced TypeScript patterns and utility types"
    },
    {
      name: "React Ecosystem",
      category: "Frontend Frameworks",
      level: "Expert",
      icon: "Component",
      experience: "4+ years",
      recentLearning: "React 18 concurrent features and server components"
    },
    {
      name: "Node.js & Express",
      category: "Backend Technologies",
      level: "Advanced",
      icon: "Server",
      experience: "3+ years",
      recentLearning: "Performance optimization and microservices architecture"
    },
    {
      name: "Cloud Platforms (AWS/GCP)",
      category: "Cloud & DevOps",
      level: "Advanced",
      icon: "Cloud",
      experience: "2+ years",
      recentLearning: "Serverless architecture and cost optimization strategies"
    },
    {
      name: "Database Design",
      category: "Data Management",
      level: "Intermediate",
      icon: "Database",
      experience: "3+ years",
      recentLearning: "NoSQL optimization and distributed database patterns"
    },
    {
      name: "Machine Learning",
      category: "Emerging Technologies",
      level: "Beginner",
      icon: "Brain",
      experience: "6 months",
      recentLearning: "Neural networks and deep learning fundamentals"
    }
  ];

  // Mock Stats Data
  const statsData = [
    {
      icon: "GraduationCap",
      value: "4.5",
      label: "Years of Education",
      trend: { direction: "up", value: "+2 degrees" }
    },
    {
      icon: "Award",
      value: "12",
      label: "Certifications",
      trend: { direction: "up", value: "+3 this year" }
    },
    {
      icon: "BookOpen",
      value: "45+",
      label: "Courses Completed",
      trend: { direction: "up", value: "+15 this year" }
    },
    {
      icon: "TrendingUp",
      value: "95%",
      label: "Learning Progress",
      trend: { direction: "up", value: "+10% this month" }
    }
  ];

  const tabs = [
    { id: 'education', label: 'Formal Education', icon: 'GraduationCap' },
    { id: 'certifications', label: 'Certifications', icon: 'Award' },
    { id: 'learning', label: 'Learning Paths', icon: 'BookOpen' },
    { id: 'skills', label: 'Skill Progress', icon: 'TrendingUp' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      <Helmet>
        <title>Educational Foundation - Sukuna | Developer Portfolio</title>
        <meta name="description" content="Explore Sukuna's educational background, certifications, and continuous learning journey in software development and technology." />
        <meta name="keywords" content="education, certifications, learning, computer science, IIT, AWS, React, developer" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={containerVariants}
                className="text-center space-y-8"
              >
                <motion.div variants={itemVariants} className="space-y-6">
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    <Icon name="BookOpen" size={16} />
                    <span>Continuous Learning Journey</span>
                  </div>
                  <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                    Educational
                    <span className="text-primary ml-2">Foundation</span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Building expertise through formal education, professional certifications, and continuous learning. 
                    Every skill acquired is a step toward creating better digital experiences.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <StatsCard stats={statsData} />
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Navigation Tabs */}
          <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-glass-border">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap justify-center gap-2">
                {tabs?.map((tab) => (
                  <button
                    key={tab?.id}
                    onClick={() => setActiveTab(tab?.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-smooth ${
                      activeTab === tab?.id
                        ? 'bg-primary text-primary-foreground shadow-glow'
                        : 'text-text-secondary hover:text-primary hover:bg-surface/50'
                    }`}
                  >
                    <Icon name={tab?.icon} size={18} />
                    <span>{tab?.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Content Sections */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Formal Education */}
                {activeTab === 'education' && (
                  <div className="space-y-8">
                    <div className="text-center space-y-4">
                      <h2 className="text-3xl font-bold text-foreground">Formal Education</h2>
                      <p className="text-text-secondary max-w-2xl mx-auto">
                        Strong academic foundation in computer science with focus on practical application 
                        and innovative problem-solving approaches.
                      </p>
                    </div>
                    
                    <div className="space-y-6">
                      {educationData?.map((education, index) => (
                        <motion.div
                          key={education?.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <EducationCard education={education} index={index} />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Certifications */}
                {activeTab === 'certifications' && (
                  <div className="space-y-8">
                    <div className="text-center space-y-4">
                      <h2 className="text-3xl font-bold text-foreground">Professional Certifications</h2>
                      <p className="text-text-secondary max-w-2xl mx-auto">
                        Industry-recognized certifications demonstrating expertise in cloud platforms, 
                        modern frameworks, and emerging technologies.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {certificationsData?.map((certification, index) => (
                        <motion.div
                          key={certification?.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <CertificationCard certification={certification} />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Learning Paths */}
                {activeTab === 'learning' && (
                  <div className="space-y-8">
                    <div className="text-center space-y-4">
                      <h2 className="text-3xl font-bold text-foreground">Active Learning Paths</h2>
                      <p className="text-text-secondary max-w-2xl mx-auto">
                        Structured learning journeys focusing on cutting-edge technologies and 
                        advanced development practices.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                      {learningPathsData?.map((path, index) => (
                        <motion.div
                          key={path?.id}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <LearningPathCard path={path} />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Skills Progress */}
                {activeTab === 'skills' && (
                  <div className="space-y-8">
                    <div className="text-center space-y-4">
                      <h2 className="text-3xl font-bold text-foreground">Skill Development Progress</h2>
                      <p className="text-text-secondary max-w-2xl mx-auto">
                        Continuous improvement across technical domains with focus on emerging 
                        technologies and industry best practices.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {skillsData?.map((skill, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="glass-effect rounded-xl p-6 hover-lift"
                        >
                          <SkillProgressBar skill={skill} />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/20">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="text-3xl font-bold text-foreground">
                  Ready to Collaborate?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Let's discuss how my educational background and continuous learning mindset 
                  can contribute to your next project.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button
                  variant="default"
                  size="lg"
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="min-w-[200px] bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Start Conversation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Download"
                  iconPosition="left"
                  className="min-w-[200px] border-primary/30 text-primary hover:bg-primary/10"
                >
                  Download Resume
                </Button>
              </motion.div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg font-mono">S</span>
                </div>
                <span className="text-foreground font-semibold">Sukuna</span>
              </div>
              
              <div className="text-muted-foreground text-sm">
                © {new Date()?.getFullYear()} Sukuna. Crafted with passion for continuous learning.
              </div>
              
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" iconName="Github" className="text-muted-foreground hover:text-primary" />
                <Button variant="ghost" size="sm" iconName="Linkedin" className="text-muted-foreground hover:text-primary" />
                <Button variant="ghost" size="sm" iconName="Twitter" className="text-muted-foreground hover:text-primary" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default EducationalFoundation;