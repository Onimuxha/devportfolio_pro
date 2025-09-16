import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const AvailabilityStatus = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeZone] = useState('PST');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date?.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'America/Los_Angeles'
    });
  };

  const getAvailabilityStatus = () => {
    const hour = currentTime?.getHours();
    
    if (hour >= 9 && hour < 18) {
      return {
        status: 'available',
        message: 'Available now',
        color: 'text-success',
        bgColor: 'bg-success/10',
        icon: 'CheckCircle'
      };
    } else if (hour >= 18 && hour < 22) {
      return {
        status: 'limited',
        message: 'Limited availability',
        color: 'text-warning',
        bgColor: 'bg-warning/10',
        icon: 'Clock'
      };
    } else {
      return {
        status: 'offline',
        message: 'Currently offline',
        color: 'text-text-secondary',
        bgColor: 'bg-surface',
        icon: 'Moon'
      };
    }
  };

  const availability = getAvailabilityStatus();

  const workingHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM PST' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM PST' },
    { day: 'Sunday', hours: 'Limited availability' }
  ];

  const responseTimeInfo = [
    {
      method: 'Email',
      time: '< 24 hours',
      icon: 'Mail',
      priority: 'high'
    },
    {
      method: 'LinkedIn',
      time: '< 48 hours',
      icon: 'Linkedin',
      priority: 'medium'
    },
    {
      method: 'Social Media',
      time: '2-3 days',
      icon: 'MessageCircle',
      priority: 'low'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Current Status */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="glass-effect rounded-xl p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-foreground">Current Status</h3>
          <div className="text-sm text-text-secondary font-mono">
            {formatTime(currentTime)} {timeZone}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className={`w-12 h-12 ${availability?.bgColor} rounded-lg flex items-center justify-center`}>
            <Icon name={availability?.icon} size={24} className={availability?.color} />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <span className={`text-lg font-semibold ${availability?.color}`}>
                {availability?.message}
              </span>
              {availability?.status === 'available' && (
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              )}
            </div>
            <p className="text-sm text-text-secondary">
              {availability?.status === 'available' ?'Ready to discuss your project ideas'
                : availability?.status === 'limited' ?'Available for urgent matters only' :'Will respond to messages tomorrow'
              }
            </p>
          </div>
        </div>
      </motion.div>
      {/* Working Hours */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass-effect rounded-xl p-6"
      >
        <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
          <Icon name="Calendar" size={20} className="mr-2" />
          Working Hours
        </h4>
        
        <div className="space-y-3">
          {workingHours?.map((schedule, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
              <span className="text-text-secondary">{schedule?.day}</span>
              <span className="text-foreground font-medium">{schedule?.hours}</span>
            </div>
          ))}
        </div>
      </motion.div>
      {/* Response Times */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="glass-effect rounded-xl p-6"
      >
        <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
          <Icon name="Timer" size={20} className="mr-2" />
          Expected Response Times
        </h4>
        
        <div className="space-y-3">
          {responseTimeInfo?.map((info, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-surface/50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Icon name={info?.icon} size={18} className="text-text-secondary" />
                <span className="text-foreground">{info?.method}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-text-secondary">{info?.time}</span>
                <div className={`w-2 h-2 rounded-full ${
                  info?.priority === 'high' ? 'bg-success' :
                  info?.priority === 'medium' ? 'bg-warning' : 'bg-text-secondary'
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
          <p className="text-sm text-foreground flex items-start">
            <Icon name="Info" size={16} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
            For urgent matters or time-sensitive projects, please mention "URGENT" in your subject line or message.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AvailabilityStatus;