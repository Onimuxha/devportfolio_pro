import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import HeroContent from './components/HeroContent';
import BackgroundAnimation from './components/BackgroundAnimation';
import ScrollIndicator from './components/ScrollIndicator';
import TypingAnimation from './components/TypingAnimation';
import SocialLinks from './components/SocialLinks';

const HeroLanding = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Smooth scroll to top on component mount
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleViewWork = () => {
    navigate('/experience-showcase');
  };

  const handleDownloadCV = () => {
    // Create a mock CV download
    const link = document.createElement('a');
    link.href = '/assets/cv/Sukuna_FullStack_Developer_CV.pdf';
    link.download = 'Sukuna_FullStack_Developer_CV.pdf';
    document.body?.appendChild(link);
    link?.click();
    document.body?.removeChild(link);
  };

  const handleScrollDown = () => {
    navigate('/about-ecosystem');
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Header */}
      <Header />
      {/* Main Hero Section */}
      <main className="relative min-h-screen flex items-center justify-center">
        {/* Background Animation */}
        <BackgroundAnimation />

        {/* Social Links */}
        <SocialLinks />

        {/* Hero Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            {/* Main Hero Content */}
            <HeroContent 
              onViewWork={handleViewWork}
              onDownloadCV={handleDownloadCV}
            />

            {/* Typing Animation Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
              className="mt-12"
            >
              <TypingAnimation />
            </motion.div>

            {/* Additional Info Cards */}
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

        {/* Scroll Indicator */}
        <ScrollIndicator onScrollDown={handleScrollDown} />
      </main>
      {/* Quick Navigation Dots */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-20 hidden lg:flex flex-col space-y-3"
      >
        {[
          { name: 'Hero', path: '/hero-landing', active: true },
          { name: 'About', path: '/about-ecosystem', active: false },
          { name: 'Skills', path: '/skills-matrix', active: false },
          { name: 'Experience', path: '/experience-showcase', active: false },
          { name: 'Contact', path: '/contact-interface', active: false }
        ]?.map((item, index) => (
          <button
            key={item?.name}
            onClick={() => navigate(item?.path)}
            className={`w-3 h-3 rounded-full transition-smooth hover:scale-125 ${
              item?.active 
                ? 'bg-primary shadow-glow' 
                : 'bg-text-secondary/30 hover:bg-primary/50'
            }`}
            title={item?.name}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default HeroLanding;