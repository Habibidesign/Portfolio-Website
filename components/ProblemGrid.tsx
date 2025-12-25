import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const SkillCard: React.FC<{ title: string; level: string; color: string }> = ({ title, level, color }) => (
  <div className="p-1 rounded-[24px] bg-[#1c1c1c] flex-shrink-0 w-[280px]">
    <div className={`h-[320px] bg-[#080808] border border-[#262627] rounded-[20px] p-6 flex flex-col justify-between relative overflow-hidden group hover:border-gray-500 transition-colors`}>
      <div className={`absolute top-0 right-0 w-24 h-24 bg-${color}-500/10 blur-[40px] rounded-full`} />

      <div className="mb-8">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 bg-${color}-500/10 text-${color}-400 font-bold`}>
          {title.charAt(0)}
        </div>
        <h3 className="font-sans font-bold text-xl text-white mb-1">{title}</h3>
        <p className="font-mono text-xs text-gray-500">{level}</p>
      </div>

      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full bg-${color}-500`}></div>
        <span className="text-xs text-gray-400 font-mono">Expertise</span>
      </div>
    </div>
  </div>
);

const ProblemGrid: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Calculate the total width to scroll
    // (Total width of cards + gaps) - (viewport width)
    const getScrollAmount = () => {
      let sliderWidth = slider.scrollWidth;
      return -(sliderWidth - window.innerWidth + 48); // +48 for padding/margin buffer
    };

    const tween = gsap.to(slider, {
      x: getScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "center center", // Start when section center hits viewport center
        end: () => `+=${getScrollAmount() * -1}`, // Scroll distance corresponds to horizontal width
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 bg-morva-bg border-t border-[#1c1c1c] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
        <div>
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-white mb-4">Core <span className="text-gradient-morva">Competencies</span></h2>
          <p className="text-gray-500 font-mono text-sm max-w-md">Specialized skills developed over 5+ years in the industry.</p>
        </div>
        <div className="hidden md:flex gap-2">
          <div className="w-10 h-10 rounded-full border border-[#262627] flex items-center justify-center text-white/50">←</div>
          <div className="w-10 h-10 rounded-full border border-[#262627] flex items-center justify-center text-white">→</div>
        </div>
      </div>

      <div ref={sliderRef} className="flex gap-6 px-6 w-max">
        <SkillCard title="UI Design" level="Expert" color="pink" />
        <SkillCard title="Design Systems" level="Expert" color="green" />
        <SkillCard title="Product Thinking" level="Expert" color="purple" />
        <SkillCard title="UX Design" level="Expert" color="blue" />
        <SkillCard title="Research" level="Advanced" color="orange" />
        <SkillCard title="Engineering" level="Basic" color="gray" />
        <SkillCard title="Prototyping" level="Expert" color="indigo" />
        <SkillCard title="Mentorship" level="Advanced" color="red" />
      </div>
    </section>
  );
};

export default ProblemGrid;