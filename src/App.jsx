import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Shield, 
  Database, 
  Cpu, 
  Terminal,
  Languages,
  Music,
  Palette,
  BookOpen,
  Code2,
  Binary,
  Lock,
  Zap,
  Globe,
  Download,
  FileText
} from 'lucide-react';

const Portfolio = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const experience = [
    {
      company: "ProCare Solar",
      role: "Lead Infrastructure Engineer & Security Lead",
      period: "Apr 2026 to Present",
      achievements: [
        "Led a Red Team security audit, eradicating 7 critical vulnerabilities including exposed CRM webhooks and unauthenticated backend pathways.",
        "Architected a secure cloud migration to Vercel, reducing mobile Total Blocking Time (TBT) by 95.3% (from 4,090ms to 190ms).",
        "Achieved verified 100/100 Lighthouse scores for SEO and Accessibility through CLS elimination and strict CSP implementation."
      ]
    }
  ];

  const projects = [
    {
      title: "Indian Language Morphological Analyzer",
      subtitle: "AI Engine for Agglutinative Philology",
      tech: ["Next.js", "FastAPI", "Gemini API"],
      description: "A high performance tool utilizing LLMs for granular morphological analysis. Separates roots from suffixes in complex Indian languages like Tamil and Sanskrit, bypassing traditional NLP limitations with context aware AI.",
      link: "https://github.com/Div3-333/cognition-n-context"
    },
    {
      title: "Wrought-Iron",
      subtitle: "Secure Data Wrangling Desktop App",
      tech: ["Rust", "Python", "Django"],
      description: "Security hardened application for sensitive data analysis. Implements strict SSDLC principles to eliminate backdoor vulnerabilities and ensures production ready integrity across Windows and macOS.",
      link: "https://github.com/Div3-333/Wrought-Iron"
    },
    {
      title: "Indus Valley Script (IVS) Research",
      subtitle: "Computational Epigraphy & Data Modeling",
      tech: ["Python", "Statistical Analysis"],
      description: "Formal data system modeling of an undeciphered script. Developed scripts for sign inventory compression and positional entropy analysis, establishing a structural scaffold for phonetic bootstrapping.",
      link: "https://github.com/Div3-333/Indus-Valley-Script-IVS"
    }
  ];

  const technicalSkills = [
    {
      category: "Cybersecurity",
      icon: <Lock size={18} />,
      skills: ["Vulnerability Modeling", "Pentesting", "Cryptographic Protocols", "SSDLC"]
    },
    {
      category: "Data Science & AI",
      icon: <Binary size={18} />,
      skills: ["Statistical Analysis", "LLM Integration", "Algorithm Efficiency", "Python/SQL"]
    },
    {
      category: "Infrastructure",
      icon: <Globe size={18} />,
      skills: ["OSI/TCP-IP", "Cloud Migration (Vercel)", "LAN/WAN", "Linux Architecture"]
    }
  ];

  const humanitiesCognitiveLink = [
    {
      icon: <Languages size={16} />,
      title: "Linguistics & AI",
      details: "Fluent in Hindi, Sanskrit, and Tamil. Scholarly philology expertise directly informs my work in LLM based morphological analysis."
    },
    {
      icon: <Music size={16} />,
      title: "Musicology & Pattern",
      details: "South Asian music theory and raga analysis. Leveraging mathematical pattern recognition to solve complex data structural problems."
    },
    {
      icon: <Palette size={16} />,
      title: "Fine Arts & Structure",
      details: "Tanjore and Rajput miniatures. Traditional arts drive focus on visual stability and spatial structural integrity in engineering."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent-gold/30 selection:text-accent-gold overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 backdrop-blur-md bg-background/80 border-b border-accent-gold/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-accent-gold font-serif text-xl tracking-widest"
          >
            DS
          </motion.span>
          <div className="flex gap-8 text-sm uppercase tracking-widest font-mono text-foreground/60">
            {['Experience', 'Projects', 'Academic', 'About'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-accent-gold transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center relative px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10"
        >
          <h1 className="text-6xl md:text-8xl mb-4 text-glow font-serif">
            Divyanshu Sharma
          </h1>
          <p className="font-mono text-accent-gold tracking-[0.3em] uppercase mb-8 text-sm md:text-base">
            Cybersecurity • Data Science • AI Engineering
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
            <a 
              href="/Divyanshu_Sharma_CV.pdf" 
              download 
              className="flex items-center gap-2 bg-accent-gold text-background px-8 py-3 rounded-sm font-mono text-xs uppercase tracking-widest hover:bg-accent-brass transition-all font-bold group"
            >
              <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
              Download CV (PDF)
            </a>
            <div className="flex gap-4">
              <a href="mailto:divyanshu.s.cs@gmail.com" className="p-3 border border-accent-gold/20 hover:border-accent-gold/60 transition-all rounded-full bg-navy/10">
                <Mail size={20} className="text-accent-gold" />
              </a>
              <a href="https://linkedin.com/in/divyanshu-sharma-b08517283" target="_blank" className="p-3 border border-accent-gold/20 hover:border-accent-gold/60 transition-all rounded-full bg-navy/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-gold"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://github.com/Div3-333" target="_blank" className="p-3 border border-accent-gold/20 hover:border-accent-gold/60 transition-all rounded-full bg-navy/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-gold"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
            </div>
          </div>
        </motion.div>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-gold/10 blur-[120px] rounded-full" />
        </div>
      </section>

      {/* Experience Section - MOVED UP */}
      <section id="experience" className="section-container">
        <motion.div {...fadeIn}>
          <h2 className="text-4xl mb-12 flex items-center gap-4 border-b border-accent-gold/10 pb-4">
            <span className="text-accent-gold text-lg font-mono tracking-tighter">01.</span>
            Commercial Impact
          </h2>
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={index} className="card-old-money group border-l-2 border-l-accent-gold/20 hover:border-l-accent-gold transition-all">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <h3 className="text-3xl text-accent-gold font-serif">{exp.company}</h3>
                  <span className="font-mono text-xs opacity-50 uppercase tracking-widest">{exp.period}</span>
                </div>
                <h4 className="font-mono text-sm uppercase tracking-widest mb-8 text-foreground/70">{exp.role}</h4>
                <ul className="space-y-6">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start text-foreground/80 leading-relaxed text-lg">
                      <Zap size={20} className="text-accent-gold shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section - MOVED UP */}
      <section id="projects" className="section-container bg-navy/5">
        <motion.div {...fadeIn}>
          <h2 className="text-4xl mb-12 flex items-center gap-4 border-b border-accent-gold/10 pb-4">
            <span className="text-accent-gold text-lg font-mono tracking-tighter">02.</span>
            Technical Projects
          </h2>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div key={index} className="relative group overflow-hidden border border-accent-gold/10 p-12 hover:bg-navy/10 transition-all duration-700 bg-background/50">
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-8">
                  <div className="flex-1">
                    <h3 className="text-3xl mb-2 group-hover:text-accent-gold transition-colors font-serif italic">{project.title}</h3>
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent-gold/60 mb-6">{project.subtitle}</p>
                    <p className="max-w-3xl text-foreground/70 mb-8 text-lg leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map(t => (
                        <span key={t} className="px-4 py-1 text-[10px] font-mono border border-accent-gold/20 text-accent-gold/70 bg-navy/20">{t}</span>
                      ))}
                    </div>
                  </div>
                  <a href={project.link} target="_blank" className="flex items-center gap-2 font-mono text-xs text-accent-gold hover:text-foreground transition-all uppercase tracking-widest whitespace-nowrap bg-navy/30 px-4 py-2 border border-accent-gold/10 hover:border-accent-gold/40">
                    Source <Code2 size={16} />
                  </a>
                </div>
                <Terminal className="absolute -bottom-12 -right-12 text-accent-gold/5 w-64 h-64 group-hover:text-accent-gold/10 transition-all duration-700" />
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Academic Core Section */}
      <section id="academic" className="section-container">
        <motion.div {...fadeIn}>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl mb-8 flex items-center gap-4 border-b border-accent-gold/10 pb-4">
                <span className="text-accent-gold text-lg font-mono tracking-tighter">03.</span>
                Academic Core
              </h2>
              <div className="space-y-8">
                <div className="bg-navy/20 border border-accent-gold/10 p-8 rounded-sm relative">
                  <Shield className="absolute -top-4 -right-4 text-accent-gold/30" size={32} />
                  <div className="mb-6">
                    <h3 className="text-accent-gold font-serif text-2xl italic mb-1">Monash University</h3>
                    <p className="font-mono text-xs uppercase tracking-widest opacity-50 text-foreground">Bachelor of Computer Science</p>
                    <p className="font-mono text-[10px] text-accent-gold mt-2">GPA: 3.778 | WAM: 87.3</p>
                  </div>
                  <ul className="font-mono text-xs space-y-4 text-foreground/70">
                    <li><span className="text-accent-gold/80">FIT2173:</span> Software Security / Design of memory exploit mitigation</li>
                    <li><span className="text-accent-gold/80">FIT2004:</span> Algorithms / Space-time complexity and program correctness</li>
                    <li><span className="text-accent-gold/80">FIT2165:</span> Computer Networks / LAN WAN performance analysis</li>
                    <li><span className="text-accent-gold/80">FIT2094:</span> Databases / Normalization and complex SQL architecture</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl mb-8 flex items-center gap-4 border-b border-accent-gold/10 pb-4">
                Competencies
              </h2>
              <div className="grid gap-6">
                {technicalSkills.map((cat, i) => (
                  <div key={i} className="flex items-center gap-6 p-4 border border-accent-gold/5 bg-navy/5">
                    <div className="text-accent-gold bg-navy/20 p-3 rounded-full">{cat.icon}</div>
                    <div>
                      <h4 className="font-serif italic text-lg text-accent-gold/80">{cat.category}</h4>
                      <p className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest mt-1">
                        {cat.skills.join(" • ")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* About & Cognitive Link Section - REFINED & COMPRESSED */}
      <section id="about" className="section-container bg-navy/5">
        <motion.div {...fadeIn}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-12 text-center font-serif italic text-accent-gold">"Technical knowledge is measured by what it enables."</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {humanitiesCognitiveLink.map((item, i) => (
                <div key={i} className="group p-6 border border-accent-gold/10 hover:bg-background transition-all text-center">
                  <div className="text-accent-gold mb-4 flex justify-center">{item.icon}</div>
                  <h4 className="font-bold text-[10px] text-accent-gold uppercase tracking-[0.2em] mb-3">{item.title}</h4>
                  <p className="text-[10px] text-foreground/50 italic leading-snug">{item.details}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-accent-gold/5 text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-8 mb-4">
             <a href="https://github.com/Div3-333" className="text-foreground/40 hover:text-accent-gold transition-colors font-mono text-xs uppercase tracking-widest">GitHub</a>
             <a href="https://linkedin.com/in/divyanshu-sharma-b08517283" className="text-foreground/40 hover:text-accent-gold transition-colors font-mono text-xs uppercase tracking-widest">LinkedIn</a>
             <a href="mailto:divyanshu.s.cs@gmail.com" className="text-foreground/40 hover:text-accent-gold transition-colors font-mono text-xs uppercase tracking-widest">Email</a>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/20">
            © 2026 Divyanshu Sharma • Technical Integrity • Built with Intent
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
