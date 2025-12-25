import { LucideIcon } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProblemCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface PillarProps {
  title: string;
  description: string;
  visualType: 'mobile' | 'system' | 'mentorship';
  reversed?: boolean;
}