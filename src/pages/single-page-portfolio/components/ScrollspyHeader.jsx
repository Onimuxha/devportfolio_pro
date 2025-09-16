import React, { useState, useEffect } from 'react';

import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ScrollspyHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navigationItems = [
    { name: 'Home', sectionId: 'hero', icon: 'Home' },
    { name: 'About', sectionId: 'about', icon: 'User' },
    { name: 'Skills', sectionId: 'skills', icon: 'Code' },
    { name: 'Experience', sectionId: 'experience', icon: 'Briefcase' },
    { name: 'Education', sectionId: 'education', icon: 'GraduationCap' },
    { name: 'Contact', sectionId: 'contact', icon: 'Mail' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scrollspy logic
      const sections = navigationItems?.map(item => item?.sectionId);
      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (let i = sections?.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections?.[i]);
        if (section && section?.offsetTop <= scrollPosition) {
          setActiveSection(sections?.[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    closeMenu();
  };

  const isActiveSection = (sectionId) => {
    return activeSection === sectionId;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-elevation' : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2 group"
          >
            <div className="relative">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center transition-smooth group-hover:shadow-glow">
                <span className="text-primary-foreground font-bold text-lg font-mono">S</span>
              </div>
            </div>
            <span className="text-xl font-bold text-foreground font-inter group-hover:text-primary transition-smooth">
              Sukuna
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <button
                key={item?.sectionId}
                onClick={() => scrollToSection(item?.sectionId)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-smooth flex items-center space-x-2 ${
                  isActiveSection(item?.sectionId)
                    ? 'bg-primary text-primary-foreground shadow-glow'
                    : 'text-text-secondary hover:text-primary hover:bg-surface/50'
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              iconName="Download"
              iconPosition="left"
              className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/assets/cv/Sukuna_FullStack_Developer_CV.pdf';
                link.download = 'Sukuna_FullStack_Developer_CV.pdf';
                document.body?.appendChild(link);
                link?.click();
                document.body?.removeChild(link);
              }}
            >
              Download CV
            </Button>
            <Button
              variant="default"
              size="sm"
              iconName="MessageCircle"
              iconPosition="left"
              onClick={() => scrollToSection('contact')}
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-surface/50 transition-smooth"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 space-y-2 glass-effect rounded-lg mt-2 border border-glass-border">
            {navigationItems?.map((item) => (
              <button
                key={item?.sectionId}
                onClick={() => scrollToSection(item?.sectionId)}
                className={`flex items-center space-x-3 px-4 py-3 mx-2 rounded-lg text-sm font-medium transition-smooth w-full text-left ${
                  isActiveSection(item?.sectionId)
                    ? 'bg-primary text-primary-foreground shadow-glow'
                    : 'text-text-secondary hover:text-primary hover:bg-surface/50'
                }`}
              >
                <Icon name={item?.icon} size={18} />
                <span>{item?.name}</span>
              </button>
            ))}
            
            {/* Mobile CTAs */}
            <div className="px-2 pt-4 space-y-2 border-t border-glass-border mt-4">
              <Button
                variant="outline"
                size="sm"
                iconName="Download"
                iconPosition="left"
                fullWidth
                className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/assets/cv/Sukuna_FullStack_Developer_CV.pdf';
                  link.download = 'Sukuna_FullStack_Developer_CV.pdf';
                  document.body?.appendChild(link);
                  link?.click();
                  document.body?.removeChild(link);
                  closeMenu();
                }}
              >
                Download CV
              </Button>
              <Button
                variant="default"
                size="sm"
                iconName="MessageCircle"
                iconPosition="left"
                fullWidth
                onClick={() => scrollToSection('contact')}
              >
                Let's Talk
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default ScrollspyHeader;