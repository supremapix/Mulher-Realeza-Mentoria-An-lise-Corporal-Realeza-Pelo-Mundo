import React, { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TargetAudience from './components/TargetAudience';
import Funnel from './components/Funnel';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  // Smooth scroll behavior for anchor links handled by CSS 'scroll-smooth' in index.html
  // But we add a listener to ensure clean URL without hashes if preferred, 
  // or just let native behavior work.

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden selection:bg-gold selection:text-black">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <TargetAudience />
        <Funnel />
        <Testimonials />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

export default App;