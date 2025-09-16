import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const contactMethods = [
    {
      id: 'email',
      title: 'Email',
      description: 'Direct communication for detailed discussions',
      value: 'sukuna.dev@example.com',
      icon: 'Mail',
      action: 'mailto:sukuna.dev@example.com',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      description: 'Professional networking and career discussions',
      value: '/in/sukuna-developer',
      icon: 'Linkedin',
      action: 'https://linkedin.com/in/sukuna-developer',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      id: 'github',
      title: 'GitHub',
      description: 'Code collaboration and open source projects',
      value: '@sukuna-dev',
      icon: 'Github',
      action: 'https://github.com/sukuna-dev',
      color: 'text-foreground',
      bgColor: 'bg-surface'
    },
    {
      id: 'twitter',
      title: 'Twitter',
      description: 'Tech discussions and industry insights',
      value: '@sukuna_codes',
      icon: 'Twitter',
      action: 'https://twitter.com/sukuna_codes',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    }
  ];

  const handleContactClick = (action) => {
    if (action?.startsWith('mailto:')) {
      window.location.href = action;
    } else {
      window.open(action, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-foreground mb-2">Alternative Contact Methods</h3>
        <p className="text-text-secondary">
          Choose your preferred way to connect and start a conversation
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contactMethods?.map((method, index) => (
          <motion.div
            key={method?.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass-effect rounded-xl p-6 hover-lift cursor-pointer group"
            onClick={() => handleContactClick(method?.action)}
          >
            <div className="flex items-start space-x-4">
              <div className={`w-12 h-12 ${method?.bgColor} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-smooth`}>
                <Icon name={method?.icon} size={24} className={method?.color} />
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-smooth">
                  {method?.title}
                </h4>
                <p className="text-sm text-text-secondary mb-2 line-clamp-2">
                  {method?.description}
                </p>
                <p className={`text-sm font-mono ${method?.color} truncate`}>
                  {method?.value}
                </p>
              </div>

              <div className="flex-shrink-0">
                <Icon 
                  name="ExternalLink" 
                  size={16} 
                  className="text-text-secondary group-hover:text-primary transition-smooth" 
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="glass-effect rounded-xl p-6 text-center"
      >
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-success">Available for new projects</span>
        </div>
        
        <h4 className="text-lg font-semibold text-foreground mb-2">Let's Build Something Great</h4>
        <p className="text-text-secondary mb-6">
          I'm currently accepting new projects and collaborations. Whether you have a specific idea or just want to explore possibilities, I'd love to hear from you.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            variant="default"
            iconName="Calendar"
            iconPosition="left"
            onClick={() => window.open('https://calendly.com/sukuna-dev', '_blank')}
          >
            Schedule a Call
          </Button>
          <Button
            variant="outline"
            iconName="Download"
            iconPosition="left"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/assets/documents/sukuna-developer-cv.pdf';
              link.download = 'Sukuna_Developer_CV.pdf';
              link?.click();
            }}
          >
            Download CV
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactMethods;