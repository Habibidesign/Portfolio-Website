import React, { useEffect, useState } from 'react';
import './utils/gsap-setup'; // Register GSAP plugins
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

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

function App() {
  useGSAP(() => {
    // Check if ScrollSmoother is registered/available before using
    // Note: ScrollSmoother is a Club GSAP premium plugin.
    // If text "100% FREE" implies bonus plugins are present, this will work.
    try {
      ScrollSmoother.create({
        smooth: 1.5, // Ease-out effect (higher = smoother/slower)
        effects: true,
        smoothTouch: 0.1,
      });
    } catch (e) {
      console.warn("ScrollSmoother failed to initialize. Ensure Club GSAP is installed.", e);
    }
  }, []);

  return (
    <div className="min-h-screen bg-morva-bg text-white selection:bg-morva-accent/30 selection:text-white cursor-none">
      <CustomCursor />
      <NoiseOverlay />
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
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
      </div>
    </div>
  );
}

export default App;