import React from 'react';
import { motion } from 'framer-motion';

const Differentiation: React.FC = () => {
  return (
    <section id="case-studies" className="py-24 bg-midnight">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-mono text-accent text-sm mb-4 block">THE "SYSTEM" ADVANTAGE</span>
            <h2 className="font-tight font-bold text-4xl text-primary mb-6">Why focus on Design Systems?</h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              A beautiful UI without a system is just a liability. I focus on <span className="text-primary font-medium">Detailed Structure</span> so your product can scale infinitely without breaking the budget or the brand.
            </p>
            
            <ul className="space-y-4">
              {[
                "Eliminate UI inconsistencies",
                "Reduce frontend tech debt",
                "Onboard new designers in days, not weeks"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-primary">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
             {/* Comparison Visual */}
             <div className="bg-elevated border border-border rounded-xl overflow-hidden shadow-2xl">
               <div className="grid grid-cols-2 divide-x divide-border">
                  {/* Before */}
                  <div className="p-6 space-y-4 bg-red-900/5">
                    <div className="text-xs font-mono text-red-400 uppercase tracking-widest text-center mb-4">Before: Chaos</div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
                    <button className="border border-gray-400 px-3 py-1 text-sm rounded-md ml-2">Cancel</button>
                    <div className="h-8 bg-gray-200 w-full mt-4"></div>
                    <div className="text-[10px] text-gray-500">Mismatched styles & spacing</div>
                  </div>
                  
                  {/* After */}
                  <div className="p-6 space-y-4 bg-emerald-900/5">
                    <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest text-center mb-4">After: System</div>
                    <div className="flex gap-3">
                       <button className="bg-accent text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm">Save Changes</button>
                       <button className="bg-transparent text-muted hover:text-primary text-sm font-medium">Cancel</button>
                    </div>
                    <div className="h-10 border border-border rounded-lg w-full mt-4 bg-midnight/50"></div>
                  </div>
               </div>
             </div>
             
             {/* Floating Badge */}
             <motion.div 
               className="absolute -bottom-6 -right-6 bg-accent text-primary px-6 py-3 rounded-lg font-bold shadow-glow"
               animate={{ y: [0, -10, 0] }}
               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
             >
               30% Faster Dev
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiation;