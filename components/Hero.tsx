import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-24 flex flex-col justify-center items-center bg-morva-bg overflow-hidden text-center px-4 min-h-[90vh]">

      {/* Status Pill */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 mb-10"
      >
        <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-[#1c1c1c] bg-[#111111]/50 backdrop-blur-md">
          <span className="text-[#A1A1AA] font-mono text-xs font-medium tracking-tight">Available for new projects</span>
          <div className="w-[1px] h-3 bg-[#262627]"></div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-emerald-500 font-mono text-xs">Online</span>
          </div>
        </div>
      </motion.div>

      {/* Main Heading */}
      <div className="max-w-7xl mx-auto mb-10 relative z-10 px-4">
        <motion.h1
          className="font-sans font-bold text-6xl md:text-7xl lg:text-8xl leading-[1.1] md:leading-[0.95] tracking-tight text-white mb-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textWrap: 'balance' }}
        >
          Transform Complex Ideas <span className="text-gradient-morva">Into Intuitive Products.</span>
        </motion.h1>
      </div>

      {/* Subheading */}
      <motion.p
        className="font-sans text-lg text-[#A1A1AA] max-w-2xl mb-12 leading-relaxed font-medium"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        I'm <span className="text-white">Habibi</span>, a UX Director & Product Design Specialist. I help founders and companies streamline product development from day one with scalable Design Systems.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-4 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <a
          href="#experience"
          className="btn-gradient-primary min-w-[200px] text-center px-8 py-4 rounded-full font-bold text-sm hover:scale-105 transition-transform duration-200 shadow-xl shadow-blue-500/10"
        >
          View Experience
        </a>

        <a
          href="mailto:rizkifadhilahmhabibi@gmail.com"
          className="btn-gradient-dark min-w-[200px] justify-center px-8 py-4 rounded-full border border-[#262627] text-white font-bold text-sm hover:bg-white/5 transition-colors duration-200 flex items-center gap-2"
        >
          Hire Me
        </a>
      </motion.div>

      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-indigo-500/10 to-purple-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(circle_at_center,black_30%,transparent_80%)] pointer-events-none"></div>

      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>

    </section>
  );
};

export default Hero;