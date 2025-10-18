import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import WhyDifferentSection from './WhyDifferentSection';
import TeamSection from './TeamSection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Professional Tigrinya Language Interpretation Services | TigrinyaTolk Belgium</title>
        <meta 
          name="description" 
          content="Expert Tigrinya language interpretation services in Belgium. Web-cam, on-site, telephone & document translation with certified interpreters. Cultural expertise & complete confidentiality guaranteed." 
        />
        <meta property="og:title" content="Professional Tigrinya Language Interpretation Services | TigrinyaTolk Belgium" />
        <meta property="og:description" content="Expert Tigrinya language interpretation services in Belgium. Web-cam, on-site, telephone & document translation with certified interpreters. Cultural expertise & complete confidentiality guaranteed." />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        {/* Gradient container that wraps both Header and HeroSection */}
        <div className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 relative">
          <Header />
          <HeroSection />
        </div>
        
        <main>
          <AboutSection />
          <ServicesSection />
          <WhyDifferentSection />
          <TeamSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Home;