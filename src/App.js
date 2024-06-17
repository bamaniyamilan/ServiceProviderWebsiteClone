// src/App.js
import React from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import LogoCarousel from './components/LogoCarousel';
import OurObjective from './components/OurObjective';
import HowCanWeHelp from './components/HowCanWeHelp';
import ServiceNow from './components/ServiceNow';
import OurSpecialities from './components/OurSpecialities';
import InnovateSection from './components/InnovateSection';
import Testimonial from './components/Testimonial';
import OurLatestInsights from './components/OurLatestInsights';
import RequestQuoteSection from './components/RequestQuoteSection';
import ParallaxSection from './components/ParallaxSection';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';

const App = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <ImageSlider />
      <LogoCarousel />
      <OurObjective />
      <HowCanWeHelp />
      <ServiceNow />
      <OurSpecialities />
      <InnovateSection />
      <Testimonial />
      <OurLatestInsights />
      <RequestQuoteSection />
      <ParallaxSection />
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default App;
