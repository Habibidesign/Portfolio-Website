
import React from 'react';
import { ExperienceItem, Skill, PricingPlan, FAQItem, Project, ProcessStep } from './types';

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "UX DIRECTOR",
    company: "kretya studio",
    period: "05/2022 - Present",
    tags: ["Leadership", "Design Strategy"],
    description: [
      "Delivered a cross-functional design strategy that resulted in a 10% increase in client project satisfaction.",
      "Mentored and developed junior designers, fostering a high-performing team culture.",
      "Spearheaded the creation of a scalable design framework, improving design team efficiency by 30%."
    ]
  },
  {
    role: "SENIOR PRODUCT DESIGNER",
    company: "lion parcel",
    period: "04/2022 - 04/2025",
    tags: ["Design System", "Product Thinking"],
    description: [
      "Implemented a new design system using Figma, reducing design-to-development handoff time by 40% and ensuring consistency across all digital products.",
      "Create an employee assessment platform in lion parcel such as KPI, OKR etc. Increased efficiency of 50% in conducting employee appraisals.",
      "Conducted usability testing and iterated product designs, achieving a 25% improvement in task completion rates."
    ]
  },
  {
    role: "UI/UX DESIGN MENTOR - DTS KOMINFO",
    company: "skilvul",
    period: "06/2022 - 04/2023",
    tags: ["Mentorship", "Education"],
    description: [
      "Guided over 35 students in mastering UI/UX design principles, achieving an 85% completion rate for the program.",
      "Provided real-world project feedback, resulting in a 90% student portfolio enhancement.",
      "Delivered workshops on design systems and Figma usage, increasing student proficiency by 40%."
    ]
  },
  {
    role: "UI/UX DESIGNER",
    company: "tokodistributor - b2b marketplace",
    period: "12/2021 - 04/2022",
    tags: ["Marketplace", "B2B"],
    description: [
      "Optimized the B2B checkout flow for enterprise clients.",
      "Developed high-fidelity prototypes for mobile and web platforms."
    ]
  },
  {
    role: "TEAM LEAD DRIBBBLE",
    company: "enver studio",
    period: "10/2021 - 09/2022",
    tags: ["Team Management", "Creative"],
    description: [
      "Managed a team of designers to deliver designs within the dribble platform increasing dribble followers 1000+."
    ]
  },
  {
    role: "UI DESIGNER",
    company: "enver studio",
    period: "05/2021 - 09/2022",
    tags: ["Visual Design", "Prototyping"],
    description: [
      "Developed wireframes and prototypes for key projects, reducing client feedback iterations by 15%."
    ]
  },
  {
    role: "UI/UX DESIGNER",
    company: "telkom indonesia",
    period: "12/2020 - 12/2021",
    tags: ["Enterprise", "Usability"],
    description: [
      "Conducted heuristic evaluations, identifying and resolving 30+ usability issues across platforms."
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: "UI Design", level: "Expert" },
  { name: "Product Thinking", level: "Expert" },
  { name: "UX Design", level: "Expert" },
  { name: "Design System", level: "Expert" },
  { name: "Research", level: "Advanced" },
  { name: "Engineering", level: "Basic" }
];

export const PROJECTS: Project[] = [
  {
    id: "vilifestyle",
    title: "ViLifestyle",
    category: "Wellness Platform",
    description: "A comprehensive lifestyle tracking app for high-performance individuals.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    tags: ["Mobile App", "Health", "Gamification"],
    details: {
      role: "UX Director",
      timeline: "12 Months",
      client: "ViLife Global",
      service: "Product Strategy & UX/UI Design",
      context: {
        overview: "VI Lifestyle is a wellness platform that offers a holistic approach to healthy living—from nutrition and fitness to mental well-being. The client approached us with the need to strengthen their brand identity and create a clearer, more engaging digital experience that builds trust and encourages exploration.",
        goals: [
          "Automate the recruitment process with AI to enhance efficiency.",
          "Reduce hiring time and costs through data-driven features.",
          "Improve candidate-job fit using Candidate Ranking and Matching technology.",
          "Provide Advanced Analytics and Insights to help companies make more informed hiring decisions."
        ]
      },
      problem: {
        challengeTitle: "The Challenge",
        challenges: [
          "The content structure lacked clarity and didn’t guide users effectively.",
          "Visual elements didn’t fully represent the calm and trustworthy nature of the brand.",
          "CTAs were not prominent, making it harder to convert new users.",
          "There was no clear distinction between educational content and premium services, which often caused confusion."
        ]
      },
      outcome: {
        resultTitle: "The Result",
        results: [
          { title: "Improved content structure", desc: "helped users find relevant programs and products faster." },
          { title: "Better brand perception", desc: "with a more premium and trustworthy visual presentation." },
          { title: "Solid Foundation", desc: "The final design established a solid foundation for future feature expansions, such as educational articles." },
          { title: "Click-through rates", desc: "for primary CTAs increased by an average of 30–35%." }
        ]
      },
      impactMetrics: [
        { label: "User Retention", value: "300%" },
        { label: "Daily Active Users", value: "45k+" },
        { label: "Funding Secured", value: "$5M" }
      ]
    }
  },
  {
    id: "starplan",
    title: "Starplan AI",
    category: "Recruitment SaaS",
    description: "AI-driven talent matching and recruitment automation platform.",
    image: "https://images.unsplash.com/photo-1551288049-bbda38a5f85d?q=80&w=2070&auto=format&fit=crop",
    tags: ["SaaS", "AI", "Enterprise"],
    details: {
      role: "UX Strategist",
      timeline: "6 Months",
      client: "Starplan Tech",
      service: "End-to-end Product Design",
      context: {
        overview: "Starplan is an AI-powered hiring platform designed to remove bias and accelerate the candidate screening process for high-growth tech firms.",
        goals: [
          "Establish an intuitive dashboard for HR managers.",
          "Automate initial screening through natural language processing.",
          "Provide transparent hiring data visualizations."
        ]
      },
      problem: {
        challengeTitle: "Prior to the redesign, the website faced several key issues:",
        challenges: [
          "Complex navigation that confused hiring managers.",
          "Lack of visual hierarchy in talent scorecards.",
          "Disjointed brand communication regarding AI ethics.",
          "Low conversion rates on the enterprise demo requests."
        ]
      },
      outcome: {
        resultTitle: "The New Design supported business objectives:",
        results: [
          { title: "Streamlined Workflow", desc: "Reduced time-to-hire by integrating all tools into a single view." },
          { title: "Data Transparency", desc: "Interactive charts helped managers justify hiring decisions to stakeholders." },
          { title: "Increased Conversion", desc: "Redesigned landing pages saw a 25% uptick in demo signups." },
          { title: "Unified Brand", desc: "Stronger visual identity built confidence in Starplan's AI capabilities." }
        ]
      },
      impactMetrics: [
        { label: "Time-to-Hire", value: "-20%" },
        { label: "Manager Satisfaction", value: "92%" },
        { label: "Screening Accuracy", value: "98%" }
      ]
    }
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Discovery & Audit",
    description: "In-depth analysis of user pain points and business goals to align stakeholders.",
    icon: "search"
  },
  {
    title: "Strategic Framework",
    description: "Defining the core design principles and architecture for scalable solutions.",
    icon: "map"
  },
  {
    title: "Iterative Prototyping",
    description: "Rapid high-fidelity testing and validation with real users for rapid learning.",
    icon: "repeat"
  },
  {
    title: "System Implementation",
    description: "Building robust design systems and documentation for seamless engineering handoff.",
    icon: "layers"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "weekly",
    type: "Consultation",
    price: "$1,000",
    originalPrice: "$1,599",
    period: "/ week",
    features: [
      "2 strategy sessions",
      "UX Audit report",
      "Design System review",
      "Team mentorship"
    ],
    cta: "Start Consulting"
  },
  {
    id: "monthly",
    type: "UX Director as a Service",
    price: "$3,499",
    originalPrice: "$4,000",
    period: "/ month",
    features: [
      "Full design leadership",
      "Scalable Design System",
      "Strategic roadmapping",
      "Unlimited UX requests"
    ],
    cta: "Subscribe Now",
    highlighted: true
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Why hire a UX Director on subscription instead of full-time?",
    answer: "You get executive-level design leadership without the $150k+ salary and benefits overhead. Perfect for growing startups needing high-level strategy and systems fast."
  },
  {
    question: "What industries do you specialize in?",
    answer: "I have deep expertise in Logistics, E-commerce, Fintech, and SaaS. However, my design principles are universal and applicable to any complex digital ecosystem."
  },
  {
    question: "Can you help our existing team?",
    answer: "Absolutely. I often act as a mentor and strategic guide for internal design teams, helping them establish better processes and design systems."
  }
];

export const LogoSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4L12 12L20 4V20L12 12L4 20V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
