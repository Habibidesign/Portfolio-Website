import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.header
        className="flex items-center gap-2 p-2 rounded-full border border-[#1c1c1c] bg-[#161618]/80 backdrop-blur-xl shadow-lg max-w-full overflow-hidden"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo Section */}
        <a href="#" className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors flex-shrink-0">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-white to-gray-400 flex items-center justify-center text-black font-bold text-[10px]">
            R
          </div>
          <span className="font-sans font-bold text-sm text-white hidden sm:block">Rizki Habibi</span>
        </a>

        <div className="w-[1px] h-6 bg-[#262627] flex-shrink-0"></div>

        {/* Links */}
        <div className="flex items-center flex-shrink-0">
          <button
            onClick={() => {
              navigator.clipboard.writeText('rizkifadhilahmhabibi@gmail.com');
              const btn = document.getElementById('email-text');
              if (btn) btn.innerText = 'Copied!';
              setTimeout(() => {
                if (btn) btn.innerText = 'rizkifadhilahmhabibi@gmail.com';
              }, 2000);
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1c1c1c] border border-[#262627] hover:border-gray-500 transition-colors cursor-pointer group"
          >
            <span id="email-text" className="font-mono text-xs font-bold text-morva-accent group-hover:text-white transition-colors">
              rizkifadhilahmhabibi@gmail.com
            </span>
          </button>
        </div>
      </motion.header>
    </div>
  );
};

export default Header;