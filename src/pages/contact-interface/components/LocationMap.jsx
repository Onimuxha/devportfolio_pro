import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const LocationMap = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const locationInfo = {
    city: 'San Francisco',
    state: 'California',
    country: 'United States',
    timezone: 'Pacific Standard Time (PST)',
    coordinates: '37.7749,-122.4194'
  };

  const handleMapLoad = () => {
    setIsMapLoaded(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-effect rounded-xl overflow-hidden"
    >
      <div className="p-6 border-b border-border">
        <h3 className="text-xl font-bold text-foreground mb-2 flex items-center">
          <Icon name="MapPin" size={24} className="text-primary mr-3" />
          Location & Availability
        </h3>
        <p className="text-text-secondary">
          Based in {locationInfo?.city}, {locationInfo?.state} - Open to remote collaboration worldwide
        </p>
      </div>
      <div className="relative">
        {/* Map Container */}
        <div className="h-64 bg-surface relative overflow-hidden">
          {!isMapLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-surface">
              <div className="text-center">
                <Icon name="MapPin" size={48} className="text-text-secondary mx-auto mb-2" />
                <p className="text-text-secondary">Loading map...</p>
              </div>
            </div>
          )}
          
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            title="San Francisco Location"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${locationInfo?.coordinates}&z=12&output=embed`}
            onLoad={handleMapLoad}
            className={`transition-opacity duration-500 ${isMapLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>

        {/* Location Details Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="glass-effect rounded-lg p-4 backdrop-blur-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} className="text-primary" />
                <span className="text-foreground font-medium">
                  {locationInfo?.city}, {locationInfo?.state}
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Icon name="Globe" size={16} className="text-secondary" />
                <span className="text-foreground font-medium">Remote Friendly</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-accent" />
                <span className="text-foreground font-medium">{locationInfo?.timezone}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Icon name="Zap" size={16} className="text-warning" />
                <span className="text-foreground font-medium">Available Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Additional Location Info */}
      <div className="p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-surface/50 rounded-lg">
            <Icon name="Users" size={24} className="text-primary mx-auto mb-2" />
            <h4 className="font-semibold text-foreground mb-1">Remote First</h4>
            <p className="text-sm text-text-secondary">Experienced in distributed teams</p>
          </div>
          
          <div className="text-center p-4 bg-surface/50 rounded-lg">
            <Icon name="Video" size={24} className="text-secondary mx-auto mb-2" />
            <h4 className="font-semibold text-foreground mb-1">Video Calls</h4>
            <p className="text-sm text-text-secondary">Available for meetings & demos</p>
          </div>
          
          <div className="text-center p-4 bg-surface/50 rounded-lg">
            <Icon name="Plane" size={24} className="text-accent mx-auto mb-2" />
            <h4 className="font-semibold text-foreground mb-1">Travel Ready</h4>
            <p className="text-sm text-text-secondary">Open to on-site collaboration</p>
          </div>
        </div>

        <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
          <div className="flex items-start space-x-3">
            <Icon name="Info" size={20} className="text-primary mt-0.5 flex-shrink-0" />
            <div>
              <h5 className="font-semibold text-foreground mb-1">Collaboration Preferences</h5>
              <p className="text-sm text-text-secondary">
                I work effectively across time zones and am comfortable with asynchronous communication. 
                For real-time collaboration, I'm most available during PST business hours but can 
                accommodate different schedules for international projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LocationMap;