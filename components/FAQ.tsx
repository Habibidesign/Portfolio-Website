import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, toggle }: any) => (
  <div className="border-b border-[#1c1c1c] last:border-0">
    <button 
      onClick={toggle}
      className="w-full py-8 flex justify-between items-center text-left hover:text-white/80 transition-colors group"
    >
      <span className="font-sans font-bold text-xl text-white pr-8">{question}</span>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center border border-[#262627] group-hover:border-white/50 transition-all flex-shrink-0 ${isOpen ? 'bg-white text-black border-white' : 'text-white'}`}>
        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
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
          <div className="pb-8 pr-8 text-gray-400 font-sans leading-relaxed max-w-2xl">
            {answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How fast can we see results?",
      answer: "My MVP audit takes 48 hours. I can have a foundational design system live for your devs within 2 weeks."
    },
    {
      question: "Is a UX Director overkill for an MVP?",
      answer: "Fixing a broken product architecture costs 10x more than building it right the first time. I provide the seniority you need without the full-time executive overhead."
    },
    {
      question: "Do you mentor external students or just internal teams?",
      answer: "I reserve 2 slots per month for high-potential juniors or design students looking to transition into B2B SaaS leadership."
    },
    {
      question: "What is included in the weekly subscription?",
      answer: "You get 3 updates per week, interactive prototypes, a global style guide, and I handle one active request at a time. You can pause or cancel anytime."
    }
  ];

  return (
    <section className="py-24 bg-morva-bg">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-16">
           <span className="font-mono text-xs text-morva-accent tracking-widest uppercase mb-2 block">Common Questions</span>
           <h2 className="font-sans font-bold text-4xl md:text-5xl text-white mb-4">Frequently Asked <span className="text-gradient-morva">Questions</span></h2>
           <p className="text-gray-500 font-mono text-sm max-w-md">Common questions about my process, timeline, and deliverables.</p>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;