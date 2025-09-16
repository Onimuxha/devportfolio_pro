import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CertificationCard = ({ certification }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-success bg-success/10 border-success/20';
      case 'in-progress':
        return 'text-warning bg-warning/10 border-warning/20';
      case 'expired':
        return 'text-error bg-error/10 border-error/20';
      default:
        return 'text-text-secondary bg-surface border-glass-border';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return 'CheckCircle';
      case 'in-progress':
        return 'Clock';
      case 'expired':
        return 'AlertCircle';
      default:
        return 'Circle';
    }
  };

  return (
    <div className="glass-effect rounded-xl p-6 hover-lift group">
      <div className="flex flex-col space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            {/* Provider Logo */}
            <div className="w-12 h-12 rounded-lg overflow-hidden bg-surface border border-glass-border flex-shrink-0">
              <Image
                src={certification?.providerLogo}
                alt={`${certification?.provider} logo`}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Title and Provider */}
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth">
                {certification?.title}
              </h3>
              <p className="text-text-secondary font-medium">
                {certification?.provider}
              </p>
            </div>
          </div>

          {/* Status Badge */}
          <div className={`px-3 py-1 rounded-full text-xs font-medium border flex items-center space-x-1 ${getStatusColor(certification?.status)}`}>
            <Icon name={getStatusIcon(certification?.status)} size={12} />
            <span className="capitalize">{certification?.status?.replace('-', ' ')}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed">
          {certification?.description}
        </p>

        {/* Skills Covered */}
        {certification?.skills && certification?.skills?.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-foreground flex items-center space-x-2">
              <Icon name="Code" size={14} />
              <span>Skills Covered</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {certification?.skills?.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2 border-t border-glass-border">
          <div className="flex items-center space-x-4 text-sm text-text-secondary">
            <div className="flex items-center space-x-1">
              <Icon name="Calendar" size={14} />
              <span>Issued: {certification?.issueDate}</span>
            </div>
            {certification?.expiryDate && (
              <div className="flex items-center space-x-1">
                <Icon name="Clock" size={14} />
                <span>Expires: {certification?.expiryDate}</span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            {certification?.credentialId && (
              <Button
                variant="ghost"
                size="sm"
                iconName="Hash"
                iconPosition="left"
                className="text-xs"
              >
                ID: {certification?.credentialId}
              </Button>
            )}
            {certification?.verifyUrl && (
              <Button
                variant="outline"
                size="sm"
                iconName="ExternalLink"
                iconPosition="right"
                className="text-xs"
              >
                Verify
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;