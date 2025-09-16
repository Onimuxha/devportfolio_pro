import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ProfileHeader from './components/ProfileHeader';
import PersonalStatement from './components/PersonalStatement';
import ProfessionalJourney from './components/ProfessionalJourney';
import CurrentFocus from './components/CurrentFocus';
import ValuesApproach from './components/ValuesApproach';
import TechnicalInterests from './components/TechnicalInterests';
import BeyondCode from './components/BeyondCode';

const AboutEcosystem = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Sukuna - Full Stack Developer | DevPortfolio Pro</title>
        <meta 
          name="description" 
          content="Learn about Sukuna's professional journey, values, and approach to full-stack development. Discover the person behind the code and explore technical interests beyond programming." 
        />
        <meta name="keywords" content="about sukuna, full stack developer, professional journey, technical interests, developer values" />
        <meta property="og:title" content="About Sukuna - Full Stack Developer" />
        <meta property="og:description" content="Professional narrative of a passionate full-stack developer with 5+ years of experience in React, Node.js, and modern web technologies." />
        <meta property="og:type" content="profile" />
        <link rel="canonical" href="/about-ecosystem" />
      </Helmet>
      <Header />
      <main className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              About <span className="text-gradient-primary">Sukuna</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Discover the professional journey, values, and passion that drive my approach to 
              full-stack development and technology innovation.
            </p>
          </div>

          {/* Profile Header Section */}
          <ProfileHeader />

          {/* Personal Statement Section */}
          <PersonalStatement />

          {/* Professional Journey Section */}
          <ProfessionalJourney />

          {/* Current Focus Section */}
          <CurrentFocus />

          {/* Values & Approach Section */}
          <ValuesApproach />

          {/* Technical Interests Section */}
          <TechnicalInterests />

          {/* Beyond Code Section */}
          <BeyondCode />
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-surface/30 border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-text-secondary">
              © {new Date()?.getFullYear()} Sukuna Ryomen. Crafted with passion and precision.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutEcosystem;