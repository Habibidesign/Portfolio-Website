
import React from 'react';
import { ExperienceItem } from '../types';

interface ExperienceCardProps {
  exp: ExperienceItem;
  index: number;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp, index }) => {
  return (
    <div 
      className={`w-full glass rounded-[2.5rem] p-8 md:p-14 mb-16 experience-card-shadow transition-transform duration-500 hover:scale-[1.01] ${exp.isHighlight ? 'card-sticky' : ''}`}
      style={{ 
        top: `${120 + index * 30}px`, 
        zIndex: index + 1,
        background: `rgba(255, 255, 255, ${0.02 + index * 0.01})` 
      }}
    >
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-5">
            <span className="font-geist text-[10px] md:text-xs text-[#11CEAC] bg-[#11CEAC]/10 px-4 py-1.5 rounded-full border border-[#11CEAC]/20 uppercase tracking-widest">
              {exp.period}
            </span>
            {exp.isHighlight && (
              <span className="font-geist text-[10px] md:text-xs text-[#CCEDFF] bg-[#CCEDFF]/10 px-4 py-1.5 rounded-full border border-[#CCEDFF]/20 uppercase tracking-widest">
                Key Milestone
              </span>
            )}
          </div>
          <h3 className="font-mona-bold text-3xl md:text-5xl text-white tracking-tight mb-2 leading-tight">
            {exp.role}
          </h3>
          <p className="font-mona text-[#CCEDFF]/60 text-xl md:text-2xl">{exp.company}</p>
        </div>
        <div className="hidden md:flex flex-col items-end">
           <div className="w-16 h-16 rounded-2xl border border-white/5 flex items-center justify-center bg-white/[0.02]">
              <span className="font-geist text-white/20 text-xl">0{index + 1}</span>
           </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        {exp.description.map((item, i) => (
          <div key={i} className="flex gap-5 group">
            <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#11CEAC]/40 group-hover:bg-[#11CEAC] transition-colors shrink-0"></div>
            <p className="text-white/70 font-mona leading-relaxed text-lg md:text-xl">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
