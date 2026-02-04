import React, { useRef } from 'react';

interface CaseStudyStep {
    title: string;
    description: string;
    icon?: React.ReactNode;
}

interface CaseStudyProps {
    title: string;
    subtitle: string;
    tags: string[];
    image: string;
    link?: string;
    steps: {
        context: string;
        problem: string;
        approach: string;
        output: string;
        outcome: string;
    };
}

const StepCard: React.FC<{ title: string; content: string; number: string }> = ({ title, content, number }) => (
    <div className="bg-[#111111] border border-[#262627] p-6 rounded-2xl relative overflow-hidden group hover:border-gray-600 transition-colors">
        <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-4xl font-mono">{number}</div>
        <h4 className="text-gray-400 text-xs font-mono mb-2 uppercase tracking-wider">{title}</h4>
        <p className="text-white font-sans text-sm leading-relaxed">{content}</p>
    </div>
);

const CaseStudy: React.FC<CaseStudyProps & { index: number }> = ({ title, subtitle, tags, image, index, link }) => {
    return (
        <div
            className="sticky mb-8 last:mb-0"
            style={{
                top: `calc(120px + ${index * 80}px)`,
                zIndex: index + 1
            }}
        >
            {/* Main Showcase Card */}
            <a href={link || "#"} target={link ? "_blank" : "_self"} rel={link ? "noopener noreferrer" : undefined} className="block border border-[#1c1c1c] rounded-[24px] overflow-hidden bg-[#0A0A0A] group hover:border-[#333] transition-colors shadow-2xl origin-top w-full h-[600px]">

                {/* Header Bar */}
                <div className="px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1c1c1c] bg-[#111111] h-[80px]">
                    {/* Title / URL */}
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-white/50"></div>
                        <h3 className="font-mono text-sm text-white tracking-wide">{title}</h3>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {tags.map(tag => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-[#1c1c1c] border border-[#262627] text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Image Area */}
                <div className="w-full h-[calc(100%-80px)] relative overflow-hidden bg-[#050505] p-6">
                    <div className="w-full h-full overflow-hidden rounded-2xl relative">
                        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
                    </div>
                </div>
            </a>
        </div>
    );
};

const MyWork: React.FC = () => {
    // Placeholder Data
    const caseStudies: CaseStudyProps[] = [
        /*
        {
            title: "Fintech Dashboard Redesign",
            subtitle: "Modernizing financial data visualization for enterprise clients.",
            tags: ["Fintech", "UX/UI", "Design System"],
            image: "/images/fintech-zellify.png",
            steps: {
                context: "Legacy system with cluttered UI causing high cognitive load for traders.",
                problem: "Users struggled to find critical market data quickly, leading to delayed decisions.",
                approach: "Conducted user research to identify key metrics. Created a modular widget-based layout.",
                output: "A high-fidelity dashboard system with customizable workspaces and dark mode support.",
                outcome: "Reduced task completion time by 40% and increased user satisfaction score to 4.8/5."
            }
        },
        */
        {
            title: "Lipmance",
            subtitle: "Streamlining the checkout process for a fashion retailer.",
            tags: ["Mobile App", "E-Commerce", "Prototyping"],
            image: "/images/lipmance.png",
            link: "https://drive.google.com/file/d/10keFqzwa4bk6ps7jFuUEqjVr_Nyi-2H-/view?usp=drive_link",
            steps: {
                context: "High cart abandonment rate on mobile devices during the payment phase.",
                problem: "Checkout flow was too long (7 steps) and non-responsive on smaller screens.",
                approach: "Simplifed flow to 3 steps. Integrated Apple Pay/Google Pay for one-tap checkout.",
                output: "Interactive prototype tested with 20 users. Final UI kit delivered to developers.",
                outcome: "Cart abandonment dropped by 25% within the first month of launch."
            }
        },
        {
            title: "Vi lifestyle",
            subtitle: "Improving patient engagement and accessibility for medical records.",
            tags: ["HealthTech", "Web App", "Accessibility"],
            image: "/images/vi-lifestyle.png",
            link: "https://drive.google.com/file/d/1S88jBS_kAz4Z7p5bARNdhz16b69Gyvrn/view?usp=drive_link",
            steps: {
                context: "Patients found it difficult to access test results and schedule appointments.",
                problem: "The existing portal was non-compliant with WCAG standards and had poor navigation.",
                approach: "Redesigned the information architecture and implemented high-contrast modes.",
                output: "WCAG 2.1 AA compliant portal with intuitive navigation and appointment booking.",
                outcome: "Increased patient portal usage by 60% and reduced support calls by 30%."
            }
        },
        {
            title: "Taim",
            subtitle: "Scaling data insights for marketing teams.",
            tags: ["Human Resource", "Dashboard", "Data"],
            image: "/images/taim.png",
            link: "https://drive.google.com/file/d/1L0gpfPqs85Kui_AmNnmXashtSmEKxCJX/view?usp=drive_link",
            steps: {
                context: "Marketing teams needed real-time insights but existing tools were too complex.",
                problem: "Data aggregation was slow and visualization options were limited.",
                approach: "Developed a real-time data processing engine and simplified chart creation flows.",
                output: "A powerful yet easy-to-use analytics platform with drag-and-drop report building.",
                outcome: "Onboarding time for new users decreased from 2 weeks to 2 days."
            }
        }
    ];

    return (
        <section id="work" className="py-24 bg-morva-bg border-t border-[#1c1c1c]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <h2 className="font-sans font-bold text-4xl md:text-5xl text-white mb-4">Selected <span className="text-gradient-morva">Work</span></h2>
                    <p className="text-gray-500 font-mono text-sm max-w-md">Detailed case studies highlighting my process and results.</p>
                </div>

                <div className="flex flex-col pb-24">
                    {caseStudies.map((study, index) => (
                        <CaseStudy key={index} {...study} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MyWork;
