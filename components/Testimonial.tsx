import React from 'react';

const Testimonial: React.FC = () => {
  return (
    <section className="py-24 bg-morva-bg">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative rounded-[32px] bg-gradient-to-r from-[#1c1c1c] to-[#080808] p-[1px]">
           <div className="bg-[#091614] rounded-[32px] p-12 md:p-16 border border-[#19b39b]/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#11ceac]/5 blur-[80px] rounded-full pointer-events-none"></div>
              
              <div className="relative z-10 text-center">
                 <h3 className="font-sans text-2xl md:text-4xl font-medium text-white leading-relaxed mb-8">
                   "As a freelancer and mentor, I'm passionate about crafting compelling digital experiences. Let's connect and enhance your product vision!"
                 </h3>
                 
                 <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white to-gray-500 p-[1px]">
                       <div className="w-full h-full bg-black rounded-full flex items-center justify-center text-white font-bold">R</div>
                    </div>
                    <div>
                       <div className="text-white font-bold font-sans">Rizki Fadhilah Muhammad Habibi</div>
                       <div className="text-[#11ceac] font-mono text-xs">UX Director & Product Design Specialist</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;