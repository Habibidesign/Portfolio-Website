import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Approach from './components/Approach';
import ProblemGrid from './components/ProblemGrid';
import SolutionPillars from './components/SolutionPillars';
import Pricing from './components/Pricing';
import Education from './components/Education';
import FAQ from './components/FAQ';
import Testimonial from './components/Testimonial';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

const NoiseOverlay = () => (
  <div className="noise-bg pointer-events-none fixed inset-0 z-[9999] opacity-[0.04]"></div>
);

function App() {
  return (
    <div className="min-h-screen bg-morva-bg text-white selection:bg-morva-accent/30 selection:text-white cursor-none">
      <CustomCursor />
      <NoiseOverlay />
      <Header />
      
      <main>
        <Hero />
        <TrustBar />
        <Approach />
        <ProblemGrid />
        <SolutionPillars />
        <Education />
        <Pricing />
        <FAQ />
        <Testimonial />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;