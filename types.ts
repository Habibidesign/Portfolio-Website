
export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
  tags: string[];
  isHighlight?: boolean;
}

export interface Skill {
  name: string;
  level: 'Expert' | 'Advanced' | 'Intermediate' | 'Basic';
}

export interface PricingPlan {
  id: string;
  type: string;
  price: string;
  originalPrice: string;
  period: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

// Updated ProjectDetail to correctly define nested object structures for context, problem, and outcome
export interface ProjectDetail {
  role: string;
  timeline: string;
  client: string;
  service: string;
  context: {
    overview: string;
    goals: string[];
  };
  problem: {
    challengeTitle: string;
    challenges: string[];
  };
  outcome: {
    resultTitle: string;
    results: { title: string; desc: string }[];
  };
  impactMetrics: { label: string; value: string }[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
  tags: string[];
  details?: ProjectDetail;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: string;
}
