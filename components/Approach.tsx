import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Layout, Code2 } from 'lucide-react';

const StepCard: React.FC<{ 
  number: string; 
  title: string; 
  description: string; 
  icon: any;
}> = ({ number, title, description, icon: Icon }) => (
  <div className="relative p-8 rounded-[32px] border border-[#1c1c1c] bg-[#111111]/50 backdrop-blur-sm flex flex-col h-full group hover:border-[#262627] transition-colors overflow-hidden">
    <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
      <span className="font-mono text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent">{number}</span>
    </div>
    
    <div className="mb-6 w-12 h-12 rounded-full bg-[#1c1c1c] flex items-center justify-center border border-[#262627] group-hover:border-morva-accent/50 group-hover:text-morva-accent transition-all">
      <Icon size={20} />
    </div>

    <h3 className="font-sans font-bold text-xl text-white mb-3">{title}</h3>
    <p className="font-mono text-sm text-gray-500 leading-relaxed">{description}</p>
  </div>
);

const Approach: React.FC = () => {
  return (
    <section className="py-24 bg-morva-bg px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-white mb-4">My <span className="text-gradient-morva">Approach</span></h2>
          <p className="text-gray-500 font-mono text-sm max-w-md">How I turn complex problems into scalable interfaces through a structured design process.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StepCard 
            number="01"
            icon={Search}
            title="Discovery"
            description="Understanding user needs and business goals through heuristic evaluation and research."
          />
          <StepCard 
            number="02"
            icon={PenTool}
            title="Strategy"
            description="Defining the product vision, information architecture, and core user flows."
          />
          <StepCard 
            number="03"
            icon={Layout}
            title="Design System"
            description="Building scalable component libraries in Figma to ensure consistency and speed."
          />
          <StepCard 
            number="04"
            icon={Code2}
            title="Handoff"
            description="Preparing pixel-perfect assets and documentation for 40% faster development."
          />
        </div>
      </div>
    </section>
  );
};

export default Approach;