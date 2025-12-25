import React from 'react';

const TrustBar: React.FC = () => {
  const companies = [
    "KRETYA STUDIO", 
    "LION PARCEL", 
    "SKILVUL", 
    "TOKODISTRIBUTOR", 
    "ENVER STUDIO", 
    "TELKOM INDONESIA", 
    "TELSRADIO"
  ];

  return (
    <section className="py-12 border-y border-[#1c1c1c] bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-morva-bg to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-morva-bg to-transparent z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 mb-8 flex justify-center">
         <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#444]">Proven Experience At</span>
      </div>

      <div className="w-full overflow-hidden flex">
        <div className="flex gap-20 animate-infinite-scroll whitespace-nowrap items-center">
          {[...companies, ...companies, ...companies].map((company, i) => (
            <span 
              key={i} 
              className="font-sans font-bold text-xl text-[#333] uppercase tracking-tighter hover:text-white transition-colors duration-300 cursor-default select-none"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 60s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TrustBar;