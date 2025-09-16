import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    { value: 'web-development', label: 'Web Development' },
    { value: 'mobile-app', label: 'Mobile Application' },
    { value: 'full-stack', label: 'Full Stack Solution' },
    { value: 'consulting', label: 'Technical Consulting' },
    { value: 'collaboration', label: 'Open Source Collaboration' },
    { value: 'other', label: 'Other' }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.name?.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData?.name?.trim()?.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData?.projectType) {
      newErrors.projectType = 'Please select a project type';
    }

    if (!formData?.message?.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData?.message?.trim()?.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear error when user starts typing
    if (errors?.[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call to Telegram Bot
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', projectType: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-effect rounded-2xl p-8 text-center"
      >
        <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="CheckCircle" size={32} className="text-white" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-4">Message Sent Successfully!</h3>
        <p className="text-text-secondary mb-6">
          Thank you for reaching out! I'll get back to you within 24 hours.
        </p>
        <Button
          variant="outline"
          onClick={() => setIsSubmitted(false)}
          iconName="RotateCcw"
          iconPosition="left"
        >
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="glass-effect rounded-2xl p-8 space-y-6"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">Let's Start a Conversation</h3>
        <p className="text-text-secondary">
          Tell me about your project and let's create something amazing together
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          type="text"
          placeholder="John Doe"
          value={formData?.name}
          onChange={(e) => handleInputChange('name', e?.target?.value)}
          error={errors?.name}
          required
        />

        <Input
          label="Email Address"
          type="email"
          placeholder="john@example.com"
          value={formData?.email}
          onChange={(e) => handleInputChange('email', e?.target?.value)}
          error={errors?.email}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Project Type <span className="text-error">*</span>
        </label>
        <select
          value={formData?.projectType}
          onChange={(e) => handleInputChange('projectType', e?.target?.value)}
          className={`w-full px-4 py-3 bg-input border rounded-lg text-foreground placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth ${
            errors?.projectType ? 'border-error' : 'border-border'
          }`}
        >
          <option value="">Select project type</option>
          {projectTypes?.map((type) => (
            <option key={type?.value} value={type?.value}>
              {type?.label}
            </option>
          ))}
        </select>
        {errors?.projectType && (
          <p className="mt-2 text-sm text-error">{errors?.projectType}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Project Details <span className="text-error">*</span>
        </label>
        <textarea
          value={formData?.message}
          onChange={(e) => handleInputChange('message', e?.target?.value)}
          placeholder="Tell me about your project requirements, timeline, and any specific technologies you'd like to use..."
          rows={6}
          className={`w-full px-4 py-3 bg-input border rounded-lg text-foreground placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth resize-vertical ${
            errors?.message ? 'border-error' : 'border-border'
          }`}
        />
        {errors?.message && (
          <p className="mt-2 text-sm text-error">{errors?.message}</p>
        )}
        <p className="mt-2 text-xs text-text-secondary">
          {formData?.message?.length}/500 characters
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Button
          type="submit"
          variant="default"
          loading={isSubmitting}
          iconName="Send"
          iconPosition="right"
          fullWidth
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending Message...' : 'Send Message'}
        </Button>
        
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            setFormData({ name: '', email: '', projectType: '', message: '' });
            setErrors({});
          }}
          iconName="RotateCcw"
          iconPosition="left"
          className="sm:w-auto"
        >
          Reset Form
        </Button>
      </div>
      <div className="text-center pt-4 border-t border-border">
        <p className="text-sm text-text-secondary">
          <Icon name="Clock" size={16} className="inline mr-2" />
          Typical response time: 24 hours
        </p>
      </div>
    </motion.form>
  );
};

export default ContactForm;