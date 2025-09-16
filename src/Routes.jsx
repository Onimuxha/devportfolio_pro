import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";

// Individual pages (keep for backward compatibility if needed)
import ContactInterface from './pages/contact-interface';
import HeroLanding from './pages/hero-landing';
import AboutEcosystem from './pages/about-ecosystem';
import SkillsMatrix from './pages/skills-matrix';
import ExperienceShowcase from './pages/experience-showcase';
import EducationalFoundation from './pages/educational-foundation';

// New single-page portfolio
import SinglePagePortfolio from './pages/single-page-portfolio';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Main single-page portfolio route */}
        <Route path="/" element={<SinglePagePortfolio />} />
        
        {/* Keep individual pages for direct access if needed */}
        <Route path="/contact-interface" element={<ContactInterface />} />
        <Route path="/hero-landing" element={<HeroLanding />} />
        <Route path="/about-ecosystem" element={<AboutEcosystem />} />
        <Route path="/skills-matrix" element={<SkillsMatrix />} />
        <Route path="/experience-showcase" element={<ExperienceShowcase />} />
        <Route path="/educational-foundation" element={<EducationalFoundation />} />
        
        {/* Single page portfolio with alternative routes */}
        <Route path="/portfolio" element={<SinglePagePortfolio />} />
        <Route path="/single-page" element={<SinglePagePortfolio />} />
        
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;