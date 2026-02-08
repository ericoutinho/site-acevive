
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CompanySearch from './components/CompanySearch';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import ContactFooter from './components/ContactFooter';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <CompanySearch />
        <Benefits />
        <Testimonials />
        <FAQ />
      </main>
      <ContactFooter />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
