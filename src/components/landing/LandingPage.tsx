import React from 'react';
import { LandingNavbar } from './LandingNavbar';
import { LandingHero } from './LandingHero';
import { LandingInteractiveDemo } from './LandingInteractiveDemo';
import { LandingStorytelling } from './LandingStorytelling';
import { LandingBentoFeatures } from './LandingBentoFeatures';
import { LandingMediaShowcase } from './LandingMediaShowcase';
import { LandingComparison } from './LandingComparison';
import { LandingInstallSection } from './LandingInstallSection';
import { LandingFaq } from './LandingFaq';
import { LandingFooter } from './LandingFooter';
import { usePWAInstall } from '../../hooks/usePWAInstall';

interface LandingPageProps {
  onOpenApp: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onOpenApp }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollToInstall = () => {
    handleScrollToSection('descargar');
  };

  const handleScrollToDemo = () => {
    handleScrollToSection('demo-interactiva');
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white selection:bg-[#00FF87] selection:text-black">
      {/* Top Navbar adhering to 3-zone Top Bar Contract */}
      <LandingNavbar
        onOpenApp={onOpenApp}
        onScrollToInstall={handleScrollToInstall}
        onScrollToSection={handleScrollToSection}
      />

      {/* Main Content */}
      <main>
        {/* 1. Hero Section */}
        <LandingHero
          onOpenApp={onOpenApp}
          onScrollToInstall={handleScrollToInstall}
          onScrollToDemo={handleScrollToDemo}
          isInstallable={isInstallable}
          onInstallPwa={install}
        />

        {/* 2. Interactive Tactile Simulator (Try sets & audio timer right here) */}
        <LandingInteractiveDemo />

        {/* 3. Storytelling: From gym frustration to total focus */}
        <LandingStorytelling />

        {/* 4. Bento Grid of core capabilities */}
        <LandingBentoFeatures />

        {/* 5. Screenshots & Video Showcase (with ready-to-insert placeholders) */}
        <LandingMediaShowcase />

        {/* 6. Comparison Table: WorkoutLog vs Subscriptions vs Notes */}
        <LandingComparison />

        {/* 7. Installation / Download Section (PWA native, iOS & Android guides) */}
        <LandingInstallSection
          onOpenApp={onOpenApp}
          isInstallable={isInstallable}
          isInstalled={isInstalled}
          isIOS={isIOS}
          onInstallPwa={install}
        />

        {/* 8. Frequently Asked Questions */}
        <LandingFaq />
      </main>

      {/* 9. Quiet Athletic Footer */}
      <LandingFooter
        onOpenApp={onOpenApp}
        onScrollToTop={handleScrollToTop}
        onScrollToSection={handleScrollToSection}
      />
    </div>
  );
};
