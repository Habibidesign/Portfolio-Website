import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const EducationItem: React.FC<{ title: string; subtitle: string; year: string; isOpen: boolean; toggle: () => void }> = ({ title, subtitle, year, isOpen, toggle }) => (
  <div className="mb-4">
    <button 
      onClick={toggle}
      className={`w-full p-6 rounded-2xl flex justify-between items-center text-left transition-all duration-300 ${isOpen ? 'bg-[#1c1c1c]' : 'bg-[#111111] hover:bg-[#161616]'}`}
    >
      <div className="flex flex-col">
         <span className="font-sans font-bold text-lg text-white mb-1">{title}</span>
         <span className="font-mono text-xs text-gray-500">{year}</span>
      </div>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center border border-white/10 transition-transform duration-300 ${isOpen ? 'rotate-45 bg-white text-black' : 'bg-transparent text-white'}`}>
        <Plus size={16} />
      </div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6 pt-2 text-gray-400 font-sans leading-relaxed">
            {subtitle}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const Education: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-morva-bg">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-16 text-left">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-white mb-4">Education & <span className="text-gradient-morva">Certifications</span></h2>
          <p className="text-gray-500 font-mono text-sm max-w-md">Academic background and professional certifications.</p>
        </div>

        <div>
           <EducationItem 
             title="Universitas Bina Insani"
             year="2023"
             subtitle="Bachelor of Engineering - Information Technology. Focus on Human-Computer Interaction and Software Engineering."
             isOpen={openIndex === 0}
             toggle={() => setOpenIndex(openIndex === 0 ? null : 0)}
           />
           <EducationItem 
             title="SMK Telekomunikasi Telesandi"
             year="2019"
             subtitle="Teknik Komputer dan Jaringan. Foundation in network engineering and basic programming."
             isOpen={openIndex === 1}
             toggle={() => setOpenIndex(openIndex === 1 ? null : 1)}
           />
           <EducationItem 
             title="Certifications & Workshops"
             year="Multiple"
             subtitle="UI/UX Design Competition Finalist, Uxcel Design Foundations, The Technique and Secret of Making an Awesome User Interface Design Workshop."
             isOpen={openIndex === 2}
             toggle={() => setOpenIndex(openIndex === 2 ? null : 2)}
           />
        </div>
      </div>
    </section>
  );
};

export default Education;