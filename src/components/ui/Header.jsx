import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/hero-landing', icon: 'Home' },
    { name: 'About', path: '/about-ecosystem', icon: 'User' },
    { name: 'Skills', path: '/skills-matrix', icon: 'Code' },
    { name: 'Experience', path: '/experience-showcase', icon: 'Briefcase' },
    { name: 'Contact', path: '/contact-interface', icon: 'Mail' }
  ];

  const secondaryItems = [
    { name: 'Education', path: '/educational-foundation', icon: 'GraduationCap' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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

  const isActivePath = (path) => {
    return location?.pathname === path;
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
          <Link 
            to="/hero-landing" 
            className="flex items-center space-x-2 group"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center transition-smooth group-hover:shadow-glow">
                <span className="text-primary-foreground font-bold text-lg font-mono">S</span>
              </div>
            </div>
            <span className="text-xl font-bold text-foreground font-inter group-hover:text-primary transition-smooth">
              Sukuna
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-smooth flex items-center space-x-2 ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground shadow-glow'
                    : 'text-text-secondary hover:text-primary hover:bg-surface/50'
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </Link>
            ))}
            
            {/* More Menu */}
            <div className="relative group">
              <button className="px-4 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-primary hover:bg-surface/50 transition-smooth flex items-center space-x-2">
                <Icon name="MoreHorizontal" size={16} />
                <span>More</span>
              </button>
              
              {/* Dropdown */}
              <div className="absolute top-full right-0 mt-2 w-48 glass-effect rounded-lg shadow-elevation opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  {secondaryItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className={`flex items-center space-x-3 px-4 py-2 text-sm transition-smooth ${
                        isActivePath(item?.path)
                          ? 'text-primary bg-primary/10' :'text-text-secondary hover:text-primary hover:bg-surface/50'
                      }`}
                    >
                      <Icon name={item?.icon} size={16} />
                      <span>{item?.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              iconName="Download"
              iconPosition="left"
              className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Download CV
            </Button>
            <Button
              variant="default"
              size="sm"
              iconName="MessageCircle"
              iconPosition="left"
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
            {[...navigationItems, ...secondaryItems]?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                onClick={closeMenu}
                className={`flex items-center space-x-3 px-4 py-3 mx-2 rounded-lg text-sm font-medium transition-smooth ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground shadow-glow'
                    : 'text-text-secondary hover:text-primary hover:bg-surface/50'
                }`}
              >
                <Icon name={item?.icon} size={18} />
                <span>{item?.name}</span>
              </Link>
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
              >
                Download CV
              </Button>
              <Button
                variant="default"
                size="sm"
                iconName="MessageCircle"
                iconPosition="left"
                fullWidth
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

export default Header;