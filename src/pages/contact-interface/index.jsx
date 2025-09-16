import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import ContactForm from './components/ContactForm';
import ContactMethods from './components/ContactMethods';
import AvailabilityStatus from './components/AvailabilityStatus';
import LocationMap from './components/LocationMap';

const ContactInterface = () => {
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
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact Interface - DevPortfolio Pro | Sukuna</title>
        <meta name="description" content="Get in touch with Sukuna for web development projects, collaborations, and technical consulting. Multiple contact methods available with quick response times." />
        <meta name="keywords" content="contact developer, hire full stack developer, web development services, technical consulting, project collaboration" />
        <meta property="og:title" content="Contact Interface - DevPortfolio Pro" />
        <meta property="og:description" content="Ready to start your next project? Let's connect and build something amazing together." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div variants={itemVariants} className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Icon name="MessageCircle" size={16} />
                <span>Let's Connect</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Ready to Build
                <span className="text-gradient-primary block">Something Amazing?</span>
              </h1>
              
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Whether you have a specific project in mind or just want to explore possibilities, 
                I'm here to help bring your ideas to life. Let's start a conversation about your next digital venture.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-lg">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Available for new projects</span>
              </div>
              
              <div className="flex items-center space-x-2 bg-surface px-4 py-2 rounded-lg">
                <Icon name="Clock" size={16} className="text-text-secondary" />
                <span className="text-sm text-text-secondary">Response within 24 hours</span>
              </div>
              
              <div className="flex items-center space-x-2 bg-surface px-4 py-2 rounded-lg">
                <Icon name="Globe" size={16} className="text-text-secondary" />
                <span className="text-sm text-text-secondary">Remote collaboration worldwide</span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Main Content */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Form - Main Column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-2"
              >
                <ContactForm />
              </motion.div>

              {/* Sidebar Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-8"
              >
                <AvailabilityStatus />
              </motion.div>
            </div>

            {/* Alternative Contact Methods */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16"
            >
              <ContactMethods />
            </motion.div>

            {/* Location & Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16"
            >
              <LocationMap />
            </motion.div>
          </div>
        </section>

        {/* Call to Action Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/30"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Let's Turn Your Vision Into Reality
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Every great project starts with a conversation. Whether you're a startup with a bold idea, 
              an established company looking to innovate, or a fellow developer interested in collaboration, 
              I'm excited to hear from you.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Lightbulb" size={32} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Share Your Ideas</h3>
                <p className="text-text-secondary">Tell me about your project vision and goals</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Collaborate</h3>
                <p className="text-text-secondary">Work together to refine and plan your solution</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Rocket" size={32} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Launch</h3>
                <p className="text-text-secondary">Build and deploy your project with excellence</p>
              </div>
            </div>

            <div className="glass-effect rounded-xl p-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Icon name="Star" size={20} className="text-primary" />
                <span className="text-lg font-semibold text-foreground">What to Expect</span>
                <Icon name="Star" size={20} className="text-primary" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-success mt-1 flex-shrink-0" />
                  <span className="text-text-secondary">Detailed project discussion and requirement analysis</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-success mt-1 flex-shrink-0" />
                  <span className="text-text-secondary">Transparent timeline and milestone planning</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-success mt-1 flex-shrink-0" />
                  <span className="text-text-secondary">Regular progress updates and communication</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-success mt-1 flex-shrink-0" />
                  <span className="text-text-secondary">Post-launch support and maintenance options</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      {/* Footer */}
      <footer className="bg-surface/50 py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-text-secondary mb-4">
            © {new Date()?.getFullYear()} Sukuna - Full Stack Developer. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:sukuna.dev@example.com" className="text-text-secondary hover:text-primary transition-smooth">
              <Icon name="Mail" size={20} />
            </a>
            <a href="https://linkedin.com/in/sukuna-developer" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-smooth">
              <Icon name="Linkedin" size={20} />
            </a>
            <a href="https://github.com/sukuna-dev" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-smooth">
              <Icon name="Github" size={20} />
            </a>
            <a href="https://twitter.com/sukuna_codes" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-smooth">
              <Icon name="Twitter" size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactInterface;