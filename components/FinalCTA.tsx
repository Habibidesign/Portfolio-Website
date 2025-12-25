import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-morva-bg flex justify-center">
      <div className="w-full max-w-4xl bg-gradient-to-b from-[#1c1c1c] to-[#0d0d0d] rounded-[32px] p-12 md:p-20 text-center relative overflow-hidden border border-[#262627]">
        
        <div className="relative z-10">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-white mb-6">
            Let's design more value<br />
            to your <span className="text-gradient-morva">product.</span>
          </h2>
          <p className="text-gray-400 mb-10 max-w-lg mx-auto">
            Ready to scale your product design? I'm available for freelance projects and mentorship.
          </p>

          <a 
            href="mailto:rizkifadhilahmhabibi@gmail.com"
            className="inline-flex items-center gap-2 btn-gradient-primary px-8 py-4 rounded-full font-bold text-sm hover:scale-105 transition-transform"
          >
            Start a project
          </a>
        </div>
        
        {/* Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-white/[0.02] blur-[80px] pointer-events-none"></div>
      </div>
    </section>
  );
};

export default FinalCTA;