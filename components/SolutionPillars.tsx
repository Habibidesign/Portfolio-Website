import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const ExperienceCard: React.FC<{
  role: string;
  company: string;
  period: string;
  points: string[];
  isPrimary?: boolean;
}> = ({ role, company, period, points, isPrimary }) => (
  <div className={`relative p-8 rounded-[32px] border flex flex-col h-full transition-all duration-300 group
    ${isPrimary
      ? 'border-[#262627] bg-gradient-to-b from-[#161618] to-[#0A0A0A]'
      : 'border-[#1c1c1c] bg-[#080808] hover:border-[#262627]'
    }`}>

    {isPrimary && (
      <div className="absolute -top-3 left-8 bg-[#CCEDFF] text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-[0_0_20px_rgba(204,237,255,0.3)]">
        Current Role
      </div>
    )}

    <div className="mb-8 relative z-10">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className={`inline-flex items-center justify-center p-2 rounded-lg mb-4 ${isPrimary ? 'bg-white/10 text-white' : 'bg-[#1c1c1c] text-gray-400'}`}>
            <Star size={16} fill={isPrimary ? "currentColor" : "none"} />
          </div>
          <h3 className="font-sans font-bold text-2xl text-white mb-1">{company}</h3>
          <p className="font-mono text-xs text-gray-500 uppercase tracking-wide">{period}</p>
        </div>
      </div>

      <div className="h-[1px] w-full bg-gradient-to-r from-[#262627] to-transparent mb-6"></div>
      <h4 className="font-sans font-medium text-lg text-[#CCEDFF] mb-4">{role}</h4>

      <ul className="space-y-4">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className={`mt-1 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${isPrimary ? 'bg-[#CCEDFF] text-black' : 'bg-[#1c1c1c] text-gray-500'}`}>
              <Check size={10} strokeWidth={4} />
            </div>
            <span className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{point}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Glow effect for primary card */}
    {isPrimary && <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent rounded-[32px] pointer-events-none" />}
  </div>
);

const SolutionPillars: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-morva-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-white mb-4">Professional <br /><span className="text-gradient-morva">Experience</span></h2>
            <p className="text-gray-500 font-mono text-sm max-w-md">My journey through product design, leadership, and mentorship over the last 5+ years.</p>
          </div>
          <div className="hidden md:block h-[1px] flex-1 bg-[#1c1c1c] mx-8 mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ExperienceCard
            role="UX Director"
            company="Kretya Studio"
            period="05/2022 - Present"
            isPrimary={true}
            points={[
              "Delivered cross-functional design strategy resulting in 10% increase in client satisfaction.",
              "Mentored and developed junior designers, fostering a high-performing team culture.",
              "Spearheaded scalable design frameworks, improving efficiency by 30%."
            ]}
          />

          <ExperienceCard
            role="Senior Product Designer"
            company="Lion Parcel"
            period="04/2022 - 04/2025"
            points={[
              "Implemented new design system using Figma, reducing handoff time by 40%.",
              "Created employee assessment platform (KPI, OKR), increasing efficiency by 50%.",
              "Conducted usability testing, achieving 25% improvement in task completion."
            ]}
          />

          <ExperienceCard
            role="UI/UX Design Mentor"
            company="Skilvul"
            period="06/2022 - 04/2023"
            points={[
              "Guided 35+ students in mastering UI/UX principles with 85% completion rate.",
              "Provided real-world feedback, enhancing student portfolios by 90%.",
              "Delivered workshops on design systems and Figma usage."
            ]}
          />

          <ExperienceCard
            role="UI/UX Designer"
            company="Tokodistributor"
            period="12/2021 - 04/2022"
            points={[
              "Designed intuitive user interfaces for B2B marketplace platforms.",
              "Collaborated closely with product managers to define and refine user requirements.",
              "Created wireframes and interactive prototypes to validate design concepts."
            ]}
          />

          <ExperienceCard
            role="UI/UX Designer"
            company="Enver Studio"
            period="05/2021 - 09/2022"
            points={[
              "Produced high-fidelity mockups for diverse client projects across various industries.",
              "Established comprehensive design guidelines to ensure visual consistency.",
              "Worked in an agile environment to deliver assets within tight deadlines."
            ]}
          />

          <ExperienceCard
            role="UI Designer"
            company="Telkom Indonesia"
            period="12/2020 - 12/2021"
            points={[
              "Designed interface layouts for internal dashboard tools.",
              "Applied industry-standard design principles and workflows.",
              "Collaborated with developers in agile design review sessions."
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionPillars;