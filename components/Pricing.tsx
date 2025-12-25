import React from 'react';
import { Check } from 'lucide-react';

const PricingOption = ({ 
  label, 
  price, 
  originalPrice, 
  period, 
  features, 
  buttonText, 
  isPrimary,
  color 
}: any) => {
  const dotColorClass = color === 'orange' ? 'bg-orange-500' : 'bg-emerald-500';
  const textColorClass = color === 'orange' ? 'text-orange-400' : 'text-emerald-400';

  return (
    <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 border-b border-[#1c1c1c] last:border-0 hover:bg-[#111111] transition-colors group">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className={`w-2 h-2 rounded-full ${dotColorClass}`}></div>
          <span className={`font-mono text-sm ${textColorClass}`}>{label}</span>
        </div>
        
        <div className="flex items-baseline gap-2 mb-1">
          <span className="font-sans font-bold text-5xl md:text-6xl text-white tracking-tight">{price}</span>
          <span className="font-mono text-gray-500 text-lg">/ {period}</span>
        </div>
        {originalPrice && (
          <div className="font-sans text-xl text-gray-600 line-through mb-8 decoration-gray-700 decoration-2">{originalPrice}</div>
        )}
        
        <button className={`
          px-8 py-4 rounded-full font-bold text-sm transition-all
          ${isPrimary 
            ? 'bg-[#CCEDFF] text-black hover:scale-105 hover:shadow-[0_0_20px_rgba(204,237,255,0.3)]' 
            : 'bg-[#1c1c1c] text-white border border-[#333] hover:bg-[#262627] hover:border-gray-500'}
        `}>
          {buttonText}
        </button>
      </div>

      <div className="flex flex-col justify-center">
        <ul className="space-y-4">
          {features.map((feature: string, idx: number) => (
            <li key={idx} className="flex items-start gap-3">
               <Check className="text-emerald-400 mt-1 flex-shrink-0" size={18} strokeWidth={2.5} />
               <span className="text-gray-300 font-sans font-medium">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-[#080808] border-t border-[#1c1c1c]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-white mb-4 leading-[0.95] tracking-tight">
            Design subscription<br />
            for <span className="text-gradient-morva">transparent progress</span>
          </h2>
          <p className="text-gray-500 font-mono text-sm max-w-md">Flexible plans designed to grow with your product.</p>
        </div>

        <div className="border border-[#1c1c1c] rounded-[32px] overflow-hidden bg-[#0A0A0A] shadow-2xl">
          <PricingOption 
            label="Project Based"
            price="$1,000"
            originalPrice="$1,599"
            period="week"
            color="orange"
            buttonText="Start a Project"
            isPrimary={true}
            features={[
              "3 updates per week",
              "Interactive prototype",
              "Global style guide",
              "1 active request",
              "Pause / cancel anytime"
            ]}
          />
          
          <PricingOption 
            label="Monthly"
            price="$3,499"
            originalPrice="$4,000"
            period="month"
            color="emerald"
            buttonText="Subscribe Now"
            isPrimary={false}
            features={[
              "3 updates per week",
              "Interactive prototype",
              "Global style guide",
              "1 active request",
              "Pause / cancel anytime"
            ]}
          />
          
          <div className="p-8 bg-[#111111] flex flex-col md:flex-row items-center justify-between gap-4 border-t border-[#1c1c1c]">
             <span className="text-gray-400 font-sans text-lg">Looking for project based plan?</span>
             <a href="mailto:rizkifadhilahmhabibi@gmail.com" className="px-8 py-3 rounded-full border border-[#262627] text-white hover:bg-[#1c1c1c] hover:border-gray-500 hover:text-white transition-all font-bold text-sm">
                Hire Us
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;