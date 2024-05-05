import React from 'react';
import ContextProvider from '../context/Context'; // Import your context provider component
import HeroSection from '../components/HeroSection';
import ImproveSkills from '../components/ImproveSkills';
import QouteSection from '../components/QuoteSection';
import Main from '../components/Main'



export default function Home() {
  return (
    <ContextProvider> {/* Wrap your Main component with the context provider */}
      <div>
        <HeroSection />
        <ImproveSkills />
        <QouteSection />
        
    
      </div>
    </ContextProvider>
  );
}
