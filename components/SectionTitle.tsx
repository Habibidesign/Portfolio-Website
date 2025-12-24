
import React from 'react';

interface SectionTitleProps {
  label: string;
  title: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ label, title }) => {
  return (
    <div className="flex flex-col gap-2 mb-12">
      <span className="font-geist text-[#11CEAC] text-sm uppercase tracking-widest">{label}</span>
      <h2 className="font-mona-bold text-4xl md:text-5xl lg:text-6xl text-gradient leading-tight">
        {title}
      </h2>
    </div>
  );
};
