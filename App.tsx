
import React, { useState, useEffect, useRef } from 'react';
import { LogoSVG, EXPERIENCES, SKILLS, PROJECTS, PROCESS_STEPS, PRICING_PLANS, FAQS } from './constants';
import { ExperienceItem, Project } from './types';
import { User, Layout, Briefcase, Home, Linkedin, Dribbble, Mail, ArrowUpRight, Search, Map, Repeat, Layers, Sparkles, ChevronLeft, ChevronRight, ArrowLeft, ChevronDown, Plus, Minus, ArrowUp } from 'lucide-react';

const HeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10 bg-black noise-grain">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
        <div className="absolute w-[500px] h-[500px] bg-[#5271FF]/10 rounded-full blur-[120px]"></div>
        <div className="hero-glow-container relative w-[300px] h-[300px] flex items-center justify-center animate-breathe">
          <div className="step-layer opacity-100 scale-100 z-[4]" style={{ transform: 'rotate(-45deg) skew(15deg, 15deg) translate(0, 0)' }}></div>
          <div className="step-layer opacity-60 scale-95 z-[3]" style={{ transform: 'rotate(-45deg) skew(15deg, 15deg) translate(15px, 15px)', filter: 'blur(5px)' }}></div>
          <div className="step-layer opacity-40 scale-90 z-[2]" style={{ transform: 'rotate(-45deg) skew(15deg, 15deg) translate(30px, 30px)', filter: 'blur(15px)' }}></div>
          <div className="step-layer opacity-20 scale-85 z-[1]" style={{ transform: 'rotate(-45deg) skew(15deg, 15deg) translate(45px, 45px)', filter: 'blur(30px)' }}></div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
    </div>
  );
};

const ProjectCard: React.FC<{ project: Project; onSelect: (p: Project) => void }> = ({ project, onSelect }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div 
      onClick={() => onSelect(project)}
      className="group relative shrink-0 w-[85vw] md:w-[600px] snap-center overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900/50 hover:border-white/20 transition-all duration-500 hover:scale-[1.01] cursor-pointer"
    >
      <div className="aspect-[16/10] overflow-hidden relative bg-zinc-900">
        <img 
          src={project.image} 
          alt="" 
          onLoad={() => setImgLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${imgLoaded ? 'opacity-100' : 'opacity-0'} grayscale group-hover:grayscale-0`} 
        />
        {!imgLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-white/10 border-t-white/40 rounded-full animate-spin"></div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 pb-6 md:pb-8 flex flex-col justify-end transition-all duration-500">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-space text-[10px] uppercase tracking-widest text-[#11CEAC]">{project.category}</span>
          <div className="w-1 h-1 rounded-full bg-white/20"></div>
          <div className="flex gap-2">
            {project.tags.slice(0, 2).map((tag, i) => (
              <span key={i} className="font-space text-[9px] text-white/40 uppercase tracking-widest">{tag}</span>
            ))}
          </div>
        </div>
        
        <h3 className="font-work font-black text-2xl md:text-4xl text-white flex items-center gap-3 tracking-tighter transition-transform duration-500">
          {project.title}
          <ArrowUpRight className="w-6 h-6 text-white/40 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </h3>

        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
          <div className="overflow-hidden">
            <p className="pt-4 text-white/50 font-work text-sm md:text-base leading-relaxed max-w-sm">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CaseStudyDetail: React.FC<{ project: Project; onBack: () => void }> = ({ project, onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [project]);

  if (!project.details) return null;

  const detail = project.details;

  return (
    <div className="w-full min-h-screen bg-white text-black selection:bg-[#5271FF] font-inter">
      <nav className="w-full max-w-screen-2xl mx-auto px-6 py-8 flex justify-between items-center sticky top-0 z-[200] bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <button onClick={onBack} className="flex items-center gap-3 group text-gray-400 hover:text-black transition-colors">
          <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-gray-50 transition-all">
            <ArrowLeft size={18} />
          </div>
          <span className="font-space text-[10px] uppercase tracking-[0.2em] font-bold">Case Studies</span>
        </button>
        <div className="flex flex-col items-end">
          <h2 className="font-work font-black text-xl tracking-tighter uppercase">{project.title}</h2>
          <span className="font-space text-[8px] text-[#11CEAC] uppercase tracking-[0.3em] font-bold">{project.category}</span>
        </div>
      </nav>

      <main className="w-full">
        <section className="w-full max-w-screen-2xl mx-auto px-6 py-12 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-gray-100">
          <div className="lg:col-span-8 space-y-8">
            <h1 className="font-work font-black text-5xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter uppercase">
              {project.title}
            </h1>
            <p className="font-work text-xl md:text-2xl text-gray-500 leading-tight max-w-3xl">
              {project.description}
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end space-y-10">
            <div className="grid grid-cols-2 gap-x-12 gap-y-10 border-t border-gray-100 pt-10">
              <div>
                <span className="font-space text-[9px] text-gray-300 uppercase tracking-[0.3em] block mb-3">Service</span>
                <span className="font-work font-bold text-base">{detail.service}</span>
              </div>
              <div>
                <span className="font-space text-[9px] text-gray-300 uppercase tracking-[0.3em] block mb-3">Role</span>
                <span className="font-work font-bold text-base">{detail.role}</span>
              </div>
              <div>
                <span className="font-space text-[9px] text-gray-300 uppercase tracking-[0.3em] block mb-3">Timeline</span>
                <span className="font-work font-bold text-base">{detail.timeline}</span>
              </div>
              <div>
                <span className="font-space text-[9px] text-gray-300 uppercase tracking-[0.3em] block mb-3">Client</span>
                <span className="font-work font-bold text-base">{detail.client}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full max-w-screen-2xl mx-auto px-6 py-8">
          <div className="aspect-[21/9] rounded-[3rem] overflow-hidden border border-gray-100 bg-gray-50">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>
        </section>

        <div className="w-full max-w-screen-2xl mx-auto px-6 space-y-32 py-32">
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 border-t border-gray-100 pt-16">
            <div className="lg:col-span-4">
              <h2 className="font-work font-bold text-xl text-gray-800">Context</h2>
            </div>
            <div className="lg:col-span-8 space-y-16">
              <div className="space-y-6">
                <h3 className="font-work font-bold text-2xl">Overview</h3>
                <p className="font-work text-lg text-gray-600 leading-relaxed max-w-4xl">
                  {detail.context.overview}
                </p>
              </div>
              <div className="space-y-8">
                <h3 className="font-work font-bold text-2xl">The Goals</h3>
                <ul className="space-y-4">
                  {detail.context.goals.map((goal, i) => (
                    <li key={i} className="flex gap-4 items-start group">
                      <span className="text-gray-300 font-work pt-0.5">•</span>
                      <p className="font-work text-lg text-gray-600 leading-relaxed">{goal}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 border-t border-gray-100 pt-16">
            <div className="lg:col-span-4">
              <h2 className="font-work font-bold text-xl text-gray-800">Problem</h2>
            </div>
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-6">
                <h3 className="font-work font-bold text-2xl">{detail.problem.challengeTitle}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                {detail.problem.challenges.map((challenge, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <span className="font-work text-lg text-gray-300">( 0{i + 1} )</span>
                    <p className="font-work text-lg text-gray-600 leading-relaxed">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 border-t border-gray-100 pt-16">
            <div className="lg:col-span-4">
              <h2 className="font-work font-bold text-xl text-gray-800">Outcome</h2>
            </div>
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-6">
                <h3 className="font-work font-bold text-2xl">{detail.outcome.resultTitle}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                {detail.outcome.results.map((result, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <span className="font-work text-lg text-gray-300">( 0{i + 1} )</span>
                    <div className="space-y-2">
                       <h4 className="font-work font-bold text-xl">{result.title}</h4>
                       <p className="font-work text-lg text-gray-600 leading-relaxed">{result.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-black text-white rounded-[3.5rem] p-12 md:p-24 overflow-hidden relative group">
            <div className="absolute top-0 right-0 p-12 opacity-5 text-white/20">
              <LogoSVG />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
              {detail.impactMetrics.map((metric, i) => (
                <div key={i} className="space-y-4">
                  <span className="font-space text-[10px] uppercase tracking-[0.4em] font-black text-white/30">Impact 0{i+1}</span>
                  <div className="font-work font-black text-7xl md:text-8xl tracking-tighter leading-none text-gradient">{metric.value}</div>
                  <p className="font-work text-lg uppercase tracking-tight text-white/60">{metric.label}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="w-full border-t border-gray-100 py-16 px-6">
         <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <LogoSVG />
              <span className="font-work font-black text-lg tracking-tighter uppercase">Habibi Portfolio</span>
            </div>
            <div className="flex gap-12">
               <a href="https://www.linkedin.com/in/rizki-fadhilah-muhammad-habibi-b09a041b2/" target="_blank" className="font-space text-[10px] uppercase tracking-widest text-gray-400 hover:text-black transition-colors">LinkedIn</a>
               <a href="https://dribbble.com/Habibi11" target="_blank" className="font-space text-[10px] uppercase tracking-widest text-gray-400 hover:text-black transition-colors">Dribbble</a>
            </div>
            <span className="font-space text-[10px] text-gray-300 uppercase tracking-widest">© 2025 Rizki Habibi</span>
         </div>
      </footer>
    </div>
  );
};

const ExperienceAccordion: React.FC<{ exp: ExperienceItem }> = ({ exp }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const getTagStyle = (tag: string) => {
    const normalized = tag.toLowerCase();
    
    // Consistent color mapping based on screenshot reference
    // Purple for leadership and strategy
    if (normalized.includes('leadership') || normalized.includes('design strategy') || normalized.includes('management')) 
      return 'text-[#D4B8FF] bg-[#D4B8FF]/10 border-[#D4B8FF]/20';
    
    // Greenish for technical, systems, and education
    if (normalized.includes('design system') || normalized.includes('product thinking') || normalized.includes('education') || normalized.includes('mentorship')) 
      return 'text-[#B8FFD4] bg-[#B8FFD4]/10 border-[#B8FFD4]/20';
    
    // Muted/Brownish for marketplace, enterprise, and business
    if (normalized.includes('marketplace') || normalized.includes('b2b') || normalized.includes('enterprise') || normalized.includes('business')) 
      return 'text-[#FFE4BC] bg-[#FFE4BC]/10 border-[#FFE4BC]/20';
    
    // Pinkish/Red for creative, visual, and research
    if (normalized.includes('creative') || normalized.includes('visual design') || normalized.includes('prototyping') || normalized.includes('research') || normalized.includes('ui design')) 
      return 'text-[#FFB8DF] bg-[#FFB8DF]/10 border-[#FFB8DF]/20';
      
    return 'text-white/40 border-white/10 bg-white/5';
  };

  return (
    <div 
      className={`group flex flex-col border border-white/5 rounded-2xl md:rounded-[1.2rem] bg-black hover:bg-white/[0.02] transition-all cursor-pointer mb-2.5 overflow-hidden`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full px-6 py-4 md:px-8 md:py-5">
        <div className="flex items-center gap-4 md:gap-5">
          <div className="w-1.5 h-1.5 bg-white/80 shrink-0"></div>
          <h3 className="font-geist text-[15px] md:text-lg text-white/90 tracking-tight uppercase leading-none">{exp.company}</h3>
        </div>
        
        <div className="flex items-center gap-4 md:gap-6 mt-4 md:mt-0">
          <div className="flex flex-wrap gap-2">
            {exp.tags.map((tag, ti) => (
              <span 
                key={ti} 
                className={`font-geist text-[9px] md:text-[10px] px-3.5 py-1 rounded-full border transition-colors ${getTagStyle(tag)}`}
              >
                {tag}
              </span>
            ))}
          </div>
          <ChevronDown className={`w-3.5 h-3.5 text-white/20 transition-transform duration-500 ${isOpen ? 'rotate-180 text-white' : ''}`} />
        </div>
      </div>
      
      <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-[1000px] border-t border-white/5 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-14 md:px-20 py-8 space-y-5">
          <span className="font-geist text-[10px] text-white/30 uppercase tracking-[0.2em] block mb-2">{exp.role}</span>
          {exp.description.map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="mt-2 w-1 h-1 rounded-full bg-white/20 shrink-0"></div>
              <p className="text-white/40 font-work text-base md:text-lg leading-relaxed">
                {item}
              </p>
            </div>
          ))}
          <div className="pt-4 flex items-center justify-between border-t border-white/5">
            <span className="font-space text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold">{exp.period}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQItemComponent: React.FC<{ item: typeof FAQS[0] }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`mb-4 transition-all duration-300 ${isOpen ? 'bg-[#0D0D0D]' : 'bg-[#0D0D0D]/50'} rounded-2xl md:rounded-[1.2rem] border border-white/5`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full px-6 py-5 text-left group"
      >
        <h3 className="font-work font-medium text-lg md:text-xl text-white group-hover:text-[#CCEDFF] transition-colors pr-8">{item.question}</h3>
        <div className={`w-6 h-6 flex items-center justify-center rounded-full border border-white/10 transition-transform duration-500 ${isOpen ? 'rotate-45' : ''}`}>
           <Plus size={16} className="text-white/40" />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 pt-0 text-white/40 font-work text-base md:text-lg leading-relaxed max-w-4xl">
           {item.answer}
        </div>
      </div>
    </div>
  );
};

const NavIcon: React.FC<{ icon: React.ReactNode; label: string; sectionId?: string; href?: string }> = ({ icon, label, sectionId, href }) => {
  const handleClick = () => {
    if (href) {
      window.open(href, '_blank', 'noopener,noreferrer');
      return;
    }
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <button 
      onClick={handleClick}
      className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 hover:bg-white/10 rounded-xl transition-all group relative"
      aria-label={label}
    >
      <div className="text-white/40 group-hover:text-white transition-colors transform group-active:scale-90">
        {icon}
      </div>
      <span className="absolute -top-10 scale-0 group-hover:scale-100 bg-white text-black text-[9px] font-space font-bold px-3 py-1 rounded-full transition-all tracking-tight whitespace-nowrap pointer-events-none hidden md:block">
        {label}
      </span>
    </button>
  );
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedProject) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = ['home', 'about', 'works', 'process', 'experience', 'pricing', 'faq'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [selectedProject]);

  const handleHorizontalScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const getProcessIcon = (iconName: string) => {
    switch(iconName) {
      case 'search': return <Search className="w-5 h-5" />;
      case 'map': return <Map className="w-5 h-5" />;
      case 'repeat': return <Repeat className="w-5 h-5" />;
      case 'layers': return <Layers className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  }

  if (selectedProject) {
    return (
      <CaseStudyDetail 
        project={selectedProject} 
        onBack={() => setSelectedProject(null)} 
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-black overflow-x-hidden animate-in fade-in duration-700">
      
      <header id="home" className="w-full max-w-4xl px-4 md:px-6 py-4 md:py-6 flex justify-between items-center border-b border-x border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-[100]">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="text-white bg-white/10 border border-white/10 p-1.5 md:p-2 rounded-lg">
            <LogoSVG />
          </div>
          <span className="font-work font-black text-lg md:text-xl tracking-tighter whitespace-nowrap uppercase">Habibi</span>
        </div>
        <div className="flex items-center gap-2">
           <button 
             onClick={() => window.location.href = 'mailto:rizkifadhilahmhabibi@gmail.com'}
             className="flex items-center gap-2 bg-white/[0.05] border border-white/20 px-3 md:px-5 py-2 rounded-full text-xs md:text-sm font-medium hover:bg-white/10 transition-all group max-w-[140px] md:max-w-none"
           >
            <Mail className="w-4 h-4 opacity-40 group-hover:opacity-100 shrink-0" />
            <span className="text-white/60 truncate hidden sm:inline font-space text-[10px]">rizkifadhilahmhabibi@gmail.com</span>
            <span className="text-white/60 sm:hidden font-space text-[10px]">Email</span>
          </button>
        </div>
      </header>

      <section className="relative w-full max-w-4xl px-4 md:px-6 py-24 md:py-48 text-center border-x border-white/10 overflow-hidden">
        <HeroBackground />
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 md:mb-12 group hover:border-[#11CEAC]/30 transition-all duration-300">
            <div className="w-2 h-2 rounded-full bg-[#11CEAC] shadow-[0_0_10px_rgba(17,206,172,0.8)] animate-pulse"></div>
            <span className="font-geist text-[9px] md:text-[10px] text-white/60 uppercase tracking-[0.2em] font-bold">Currently Available for New Projects</span>
          </div>
          
          <h1 className="font-work font-black text-4xl sm:text-5xl md:text-7xl leading-[1.05] tracking-tighter mb-6 md:mb-8 max-w-[280px] sm:max-w-2xl mx-auto">
            Design more value <br className="hidden sm:block" />
            to your <span className="text-gradient">SaaS product.</span>
          </h1>
          
          <p className="text-white/40 text-base md:text-lg font-work mb-10 md:mb-12 max-w-[260px] sm:max-w-xl mx-auto leading-relaxed">
            UX Director at Kretya Studio. Designing high-end systems and digital products for industry-leading startups.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center px-4">
            <button className="bg-[#CCEDFF] text-black px-8 py-3.5 rounded-full font-work font-black hover:scale-105 transition-transform text-sm shadow-[0_0_20px_rgba(204,237,255,0.2)]" onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior:'smooth'})}>
              Start a project
            </button>
            <button className="bg-white/5 border border-white/10 px-8 py-3.5 rounded-full font-work font-bold hover:bg-white/10 transition-all text-sm" onClick={() => document.getElementById('works')?.scrollIntoView({behavior:'smooth'})}>
              View Work
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="w-full max-w-4xl border-x border-t border-white/10 relative overflow-hidden">
        <div className="px-6 md:px-10 py-16 md:py-24 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20">
            <div className="flex-[1.5] space-y-8 md:space-y-10">
              <h2 className="font-work font-black text-3xl md:text-4xl text-white tracking-tighter leading-tight">
                Logic & <span className="text-gradient">Intuition</span>
              </h2>
              <div className="max-w-xl space-y-6 md:space-y-8">
                <p className="font-work text-lg md:text-xl text-white/80 leading-relaxed font-medium">
                  As a <span className="text-[#CCEDFF] font-black">UX Director</span>, I bridge the gap between user behavior and business revenue through strategic design leadership.
                </p>
                <p className="font-work text-base md:text-lg text-white/40 leading-relaxed">
                  I believe that high-performance products are built on a foundation of measurable strategy and scalable systems. My approach combines data-driven insights with creative excellence.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 md:gap-3 pt-2">
                {['Product Thinking', 'Strategic Vision', 'Leadership', 'Design Systems'].map((pillar, i) => (
                  <div key={i} className="px-3 md:px-5 py-1.5 md:py-2 rounded-full border border-white/10 bg-white/[0.02] flex items-center gap-2 md:gap-3 hover:border-[#CCEDFF]/40 transition-colors cursor-default">
                    <div className="w-1 h-1 rounded-full bg-[#5271FF]"></div>
                    <span className="font-space text-[9px] md:text-[10px] text-white/50 uppercase tracking-widest">{pillar}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 space-y-8 md:space-y-12">
              <div className="p-6 md:p-8 border border-white/10 rounded-3xl md:rounded-[2rem] bg-gradient-to-br from-white/[0.03] to-transparent relative group">
                <div className="absolute top-0 right-0 p-4 md:p-6 opacity-10 group-hover:opacity-20 transition-opacity text-white">
                  <LogoSVG />
                </div>
                <h3 className="font-space text-[10px] text-white/30 uppercase tracking-[0.2em] mb-8 md:mb-10">Metrics of Impact</h3>
                <div className="space-y-8 md:space-y-10">
                  <div className="space-y-1">
                    <div className="font-work font-black text-4xl md:text-5xl text-[#CCEDFF] tracking-tighter">30+</div>
                    <div className="font-space text-[9px] text-white/40 uppercase tracking-widest">Global Startups Accelerated</div>
                  </div>
                  <div className="h-px w-full bg-white/5"></div>
                  <div className="space-y-1">
                    <div className="font-work font-black text-4xl md:text-5xl text-[#11CEAC] tracking-tighter">40%</div>
                    <div className="font-space text-[9px] text-white/40 uppercase tracking-widest">Efficiency Improvement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#5271FF]/5 blur-[80px] md:blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 -z-10"></div>
      </section>

      <section id="works" className="w-full max-w-4xl border-x border-t border-white/10 overflow-hidden">
        <div className="px-6 md:px-10 py-16 md:py-24">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="font-space text-[10px] text-[#11CEAC] uppercase tracking-widest mb-3 block">Selected Works</span>
              <h2 className="font-work font-black text-3xl md:text-4xl text-white tracking-tighter">Case <span className="text-gradient">Studies</span></h2>
            </div>
            <div className="flex items-center gap-4">
               <button onClick={scrollLeft} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                 <ChevronLeft className="w-5 h-5 text-white/60" />
               </button>
               <button onClick={scrollRight} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                 <ChevronRight className="w-5 h-5 text-white/60" />
               </button>
            </div>
          </div>
          <div 
            ref={scrollContainerRef}
            onScroll={handleHorizontalScroll}
            className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8 -mx-4 px-4"
          >
            {PROJECTS.map((project, i) => (
              <ProjectCard key={i} project={project} onSelect={setSelectedProject} />
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-4">
            <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#11CEAC] transition-all duration-300 ease-out"
                style={{ width: `${Math.max(10, scrollProgress)}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-[9px] font-space text-white/20 uppercase tracking-widest">
              <span>Explore Projects</span>
              <p className="hidden md:block max-w-[200px] text-right font-work">Click on a project to view strategy detail.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="w-full max-w-4xl border-x border-t border-white/10 bg-white/[0.01]">
        <div className="px-6 md:px-10 py-16 md:py-24">
           <h2 className="font-work font-black text-3xl md:text-4xl mb-12 tracking-tighter">The <span className="text-gradient">Playbook</span></h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PROCESS_STEPS.map((step, i) => (
                <div key={i} className="p-8 border border-white/10 rounded-3xl bg-black hover:border-[#5271FF]/40 transition-all group">
                   <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/40 group-hover:text-[#5271FF] transition-colors mb-6">
                      {getProcessIcon(step.icon)}
                   </div>
                   <h3 className="font-work font-black text-xl text-white mb-3 tracking-tight">{step.title}</h3>
                   <p className="text-white/40 font-work text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      <section id="experience" className="w-full max-w-4xl border-x border-t border-white/10">
        <div className="px-6 md:px-10 py-16 md:py-24">
          <h2 className="font-work font-black text-3xl md:text-4xl mb-12 tracking-tighter">Career <span className="text-gradient">Timeline</span></h2>
          <div className="flex flex-col">
            {EXPERIENCES.map((exp, i) => (
              <ExperienceAccordion key={i} exp={exp} />
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="w-full max-w-4xl border-x border-t border-white/10">
        <div className="px-6 md:px-10 py-16">
          <h2 className="font-work font-black text-3xl md:text-4xl mb-10 md:mb-12 max-w-md leading-tight tracking-tighter">
            Leadership for <br className="hidden sm:block" />
            <span className="text-gradient">transparent progress</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-6">
            {PRICING_PLANS.map((plan, i) => (
              <div key={i} className={`flex-1 p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] border ${plan.highlighted ? 'border-[#CCEDFF]/20 bg-[#CCEDFF]/[0.02]' : 'border-white/10 bg-white/[0.02]'} flex flex-col`}>
                <div className="flex items-center gap-2 mb-6">
                  <div className={`w-2 h-2 rounded-sm ${plan.highlighted ? 'bg-[#CCEDFF]' : 'bg-[#5271FF]'}`}></div>
                  <span className={`font-space text-[10px] uppercase tracking-widest ${plan.highlighted ? 'text-[#CCEDFF]' : 'text-[#5271FF]'}`}>{plan.type}</span>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-work font-black text-4xl md:text-5xl tracking-tighter">{plan.price}</span>
                  <span className="text-white/30 text-base md:text-lg font-work">{plan.period}</span>
                </div>
                <button className={`w-full py-3.5 md:py-4 rounded-full font-work font-black mb-8 md:mb-10 transition-all text-sm ${plan.highlighted ? 'bg-[#CCEDFF] text-black hover:bg-[#CCEDFF]/80' : 'bg-white text-black hover:bg-white/80'}`}>
                  {plan.cta}
                </button>
                <div className="space-y-3 md:space-y-4">
                  {plan.features.map((feat, fi) => (
                    <div key={fi} className="flex items-center gap-3">
                      <span className="text-[#11CEAC] font-bold text-xs">✓</span>
                      <span className="text-white/60 font-work text-xs md:text-sm">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="w-full max-w-4xl border-x border-t border-white/10">
        <div className="px-6 md:px-10 py-24">
           <h2 className="font-work font-black text-4xl md:text-5xl mb-14 tracking-tighter leading-none">
             Frequently <span className="text-[#CCEDFF] italic">Asked</span> Questions
           </h2>
           <div className="space-y-3">
              {FAQS.map((item, i) => (
                <FAQItemComponent key={i} item={item} />
              ))}
           </div>

           {/* Contact Banner */}
           <div className="mt-10 p-6 rounded-[1.8rem] border border-white/5 bg-[#0A0A0A] flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-5">
                 <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center border border-white/5">
                    <LogoSVG />
                 </div>
                 <div>
                    <h4 className="font-work font-bold text-lg text-white">Have any questions?</h4>
                    <p className="text-white/40 text-sm">Don't hesitate to email us</p>
                 </div>
              </div>
              <button 
                onClick={() => window.location.href = 'mailto:rizkifadhilahmhabibi@gmail.com'}
                className="px-8 py-3 rounded-full border border-white/10 bg-white/5 font-geist text-xs text-white/80 hover:bg-white/10 transition-all"
              >
                rizkifadhilahmhabibi@gmail.com
              </button>
           </div>
        </div>
      </section>

      {/* Main CTA Section */}
      <section className="w-full max-w-4xl px-4 md:px-10 py-24 md:py-32">
        <div className="relative p-12 md:p-24 rounded-[3.5rem] border border-white/10 bg-[#0A0A0A] overflow-hidden group">
           {/* Grid Pattern Background */}
           <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
           
           <div className="relative z-10 text-center space-y-12">
              <h2 className="font-work font-black text-4xl md:text-7xl leading-[1.05] tracking-tighter max-w-2xl mx-auto">
                Let's design more value to your <span className="inline-flex">w<span className="text-[#FFB8DF]">e</span>bsite.</span>
              </h2>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                   onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                   className="bg-white text-black px-10 py-4 rounded-full font-work font-black text-sm hover:scale-105 transition-transform"
                >
                  Start a project
                </button>
                <button 
                   onClick={() => window.location.href = 'mailto:rizkifadhilahmhabibi@gmail.com'}
                   className="bg-[#0D0D0D] border border-white/10 text-white px-10 py-4 rounded-full font-work font-black text-sm hover:bg-white/5 transition-colors"
                >
                  Hire Us
                </button>
              </div>
           </div>
        </div>
      </section>

      {/* Simplified Minimalist Footer */}
      <footer className="w-full max-w-4xl border-x border-t border-white/10 py-10 px-6 md:px-10">
         <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <span className="font-work text-sm text-white/30">
              © 2025 Rizki Habibi. All rights reserved
            </span>
            
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 text-white/40 hover:text-white transition-colors group"
            >
               <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
               <span className="font-work text-sm font-medium">Back to Top</span>
            </button>
         </div>
      </footer>

      <div className="fixed bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-[150] w-max max-w-[95vw]">
        <div className="pill-nav p-1.5 md:p-2 rounded-2xl md:rounded-3xl flex items-center gap-1 md:gap-2 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.8)] border border-white/10">
          <div className="flex items-center gap-0.5 md:gap-1">
            <NavIcon icon={<Home size={18} className={activeSection === 'home' ? 'text-white' : ''} />} label="Home" sectionId="home" />
            <NavIcon icon={<User size={18} className={activeSection === 'about' ? 'text-white' : ''} />} label="About" sectionId="about" />
            <NavIcon icon={<Layout size={18} className={activeSection === 'works' ? 'text-white' : ''} />} label="Works" sectionId="works" />
            <NavIcon icon={<Briefcase size={18} className={activeSection === 'experience' ? 'text-white' : ''} />} label="Exp" sectionId="experience" />
            <div className="h-5 md:h-6 w-px bg-white/10 mx-0.5 md:mx-1"></div>
            <NavIcon icon={<Linkedin size={18} />} label="LinkedIn" href="https://www.linkedin.com/in/rizki-fadhilah-muhammad-habibi-b09a041b2/" />
          </div>
          <div className="h-5 md:h-6 w-px bg-white/10 mx-0.5 md:mx-1"></div>
          <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="flex items-center px-4 md:px-8 py-2 md:py-3 bg-[#CCEDFF] text-black rounded-xl cursor-pointer shadow-[0_8px_20px_rgba(204,237,255,0.2)] hover:scale-[1.03] active:scale-95 transition-all group shrink-0">
             <span className="font-work font-black text-xs md:text-sm tracking-tight">Hire Me</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
