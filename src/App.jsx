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
  Search,
  Zap,
  Globe
} from 'lucide-react';

const Portfolio = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const projects = [
    {
      title: "Indian Language Morphological Analyzer",
      subtitle: "AI Engine for Agglutinative Philology",
      tech: ["Next.js", "FastAPI", "Gemini API", "Tailwind CSS"],
      description: "A full stack tool for analyzing highly complex Indian languages. Utilizes LLMs for word by word grammatical breakdowns, separating roots from suffixes in languages like Tamil and Sanskrit. Bypasses traditional NLP limitations with a context aware AI backend.",
      link: "https://github.com/Div3-333/cognition-n-context"
    },
    {
      title: "Indus Valley Script (IVS) Research",
      subtitle: "Computational Epigraphy & Positional Grammar",
      tech: ["Python", "LaTeX", "Statistical Modeling"],
      description: "Treating an undeciphered script as a formal data system. Developed scripts for sign inventory compression and positional entropy analysis. Identified that 60 signs cover 75% of the corpus, establishing a structural scaffold for phonetic bootstrapping.",
      link: "https://github.com/Div3-333/Indus-Valley-Script-IVS"
    },
    {
      title: "Wrought-Iron",
      subtitle: "Secure Data Wrangling Desktop App",
      tech: ["Rust", "Python", "Django", "PyInstaller"],
      description: "A security hardened cross platform application for sensitive data analysis. Implements strict SSDLC principles to eliminate backdoor vulnerabilities and ensure production ready integrity across Windows and macOS."
    }
  ];

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

  const technicalSkills = [
    {
      category: "Cybersecurity",
      icon: <Lock size={20} />,
      skills: ["Vulnerability Modeling", "Pentesting", "Cryptographic Protocols", "SSDLC", "Access Control"]
    },
    {
      category: "Data Science & AI",
      icon: <Binary size={20} />,
      skills: ["Statistical Analysis", "LLM Integration", "Data Visualization", "Algorithm Efficiency", "Python/SQL"]
    },
    {
      category: "Systems & Networks",
      icon: <Globe size={20} />,
      skills: ["OSI/TCP-IP Architecture", "LAN/WAN Configuration", "Cloud Migration", "Linux/Bash Architecture"]
    }
  ];

  const humanitiesCognitiveLink = [
    {
      icon: <Languages size={20} />,
      title: "Linguistics & AI",
      details: "Fluent in Hindi, Sanskrit, and Tamil. Scholarly expertise in comparative philology directly informs my work in LLM based morphological analysis and ancient script data modeling."
    },
    {
      icon: <Music size={20} />,
      title: "Musicology & Math",
      details: "Expertise in South Asian music theory and raga analysis. I leverage the intersection of musicology and mathematical pattern recognition to solve complex data structural problems."
    },
    {
      icon: <Palette size={20} />,
      title: "Fine Arts & Structure",
      details: "Deep interest in Tanjore, Madhubani, and Rajput miniatures. Sculpting and traditional arts drive my focus on visual stability and spatial structural integrity in UI/UX."
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
            {['About', 'Experience', 'Projects', 'Expertise'].map((item) => (
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
            Data Science • AI Engineering • Cybersecurity
          </p>
          <div className="flex gap-4 justify-center">
            <a href="mailto:divyanshu.s.cs@gmail.com" className="p-3 border border-accent-gold/20 hover:border-accent-gold/60 transition-all rounded-full">
              <Mail size={20} className="text-accent-gold" />
            </a>
            <a href="https://linkedin.com/in/divyanshu-sharma-b08517283" target="_blank" className="p-3 border border-accent-gold/20 hover:border-accent-gold/60 transition-all rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-gold"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://github.com/Div3-333" target="_blank" className="p-3 border border-accent-gold/20 hover:border-accent-gold/60 transition-all rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-gold"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
          </div>
        </motion.div>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-gold/10 blur-[120px] rounded-full" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-container">
        <motion.div {...fadeIn}>
          <h2 className="text-4xl mb-12 flex items-center gap-4">
            <span className="text-accent-gold text-lg font-mono">01.</span>
            The Intersection of Rigor
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground/80 font-serif italic">
                "Technical knowledge is measured by what it enables for others."
              </p>
              <p className="leading-relaxed text-foreground/70">
                I specialize in translating complex computational risk into actionable business strategy. My work spans from eradicating critical vulnerabilities in cloud infrastructure to developing AI engines for linguistic analysis.
              </p>
              <div className="grid grid-cols-1 gap-6 pt-6">
                {humanitiesCognitiveLink.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start border-l border-accent-gold/20 pl-4 py-2 hover:border-accent-gold transition-colors">
                    <div className="text-accent-gold shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-sm text-accent-gold uppercase tracking-tighter">{item.title}</h4>
                      <p className="text-xs text-foreground/50 italic leading-snug">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-navy/20 border border-accent-gold/10 p-8 rounded-sm">
               <div className="flex justify-between items-center mb-8">
                 <Shield className="text-accent-gold" size={32} />
                 <div className="text-right font-mono text-xs text-accent-gold/60">GPA: 3.778 | WAM: 87.3</div>
               </div>
               <div className="space-y-4">
                 <h3 className="font-serif text-xl italic border-b border-accent-gold/10 pb-2">Academic Core</h3>
                 <ul className="font-mono text-xs space-y-4 text-foreground/70">
                   <li><span className="text-accent-gold">FIT2173:</span> Software Security / Design of memory exploit mitigation</li>
                   <li><span className="text-accent-gold">FIT2004:</span> Algorithms / Space time complexity and program correctness</li>
                   <li><span className="text-accent-gold">FIT2165:</span> Computer Networks / LAN WAN design and performance analysis</li>
                   <li><span className="text-accent-gold">FIT2094:</span> Databases / Normalization and complex SQL architecture</li>
                 </ul>
               </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-container bg-navy/5">
        <motion.div {...fadeIn}>
          <h2 className="text-4xl mb-12 flex items-center gap-4">
            <span className="text-accent-gold text-lg font-mono">02.</span>
            Technical Leadership
          </h2>
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={index} className="card-old-money group">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <h3 className="text-2xl text-accent-gold">{exp.company}</h3>
                  <span className="font-mono text-sm opacity-50">{exp.period}</span>
                </div>
                <h4 className="font-mono text-sm uppercase tracking-wider mb-6 text-foreground/70">{exp.role}</h4>
                <ul className="space-y-4">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start text-foreground/70 leading-relaxed">
                      <Zap size={16} className="text-accent-gold shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-container">
        <motion.div {...fadeIn}>
          <h2 className="text-4xl mb-12 flex items-center gap-4">
            <span className="text-accent-gold text-lg font-mono">03.</span>
            Data & AI Research
          </h2>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div key={index} className="relative group overflow-hidden border border-accent-gold/10 p-12 hover:bg-navy/10 transition-all duration-700">
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-8">
                  <div className="flex-1">
                    <h3 className="text-3xl mb-2 group-hover:text-accent-gold transition-colors">{project.title}</h3>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-gold/60 mb-6">{project.subtitle}</p>
                    <p className="max-w-3xl text-foreground/70 mb-8 text-lg">{project.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 text-[10px] font-mono border border-accent-gold/20 text-accent-gold/70">{t}</span>
                      ))}
                    </div>
                  </div>
                  {project.link && (
                    <a href={project.link} target="_blank" className="flex items-center gap-2 font-mono text-xs text-accent-gold hover:text-foreground transition-colors uppercase tracking-widest whitespace-nowrap">
                      Source <Code2 size={16} />
                    </a>
                  )}
                </div>
                <Terminal className="absolute -bottom-8 -right-8 text-accent-gold/5 w-64 h-64 group-hover:text-accent-gold/10 transition-all duration-700" />
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="section-container bg-navy/5">
        <motion.div {...fadeIn}>
          <h2 className="text-4xl mb-12 flex items-center gap-4">
            <span className="text-accent-gold text-lg font-mono">04.</span>
            Core Competencies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {technicalSkills.map((cat, i) => (
              <div key={i} className="card-old-money p-8">
                <div className="flex items-center gap-4 text-accent-gold mb-6 border-b border-accent-gold/10 pb-4">
                  {cat.icon}
                  <h3 className="font-serif text-xl italic">{cat.category}</h3>
                </div>
                <ul className="font-mono text-xs space-y-4 text-foreground/60">
                  {cat.skills.map((s, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-accent-gold/40 rounded-full" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-accent-gold/5 text-center">
        <div className="flex flex-col items-center gap-6">
          <p className="font-serif italic text-2xl text-accent-gold text-glow">Structured insight, delivered with rigor.</p>
          <div className="flex gap-8">
             <a href="https://github.com/Div3-333" className="text-foreground/40 hover:text-accent-gold transition-colors font-mono text-xs uppercase tracking-widest">GitHub</a>
             <a href="https://linkedin.com/in/divyanshu-sharma-b08517283" className="text-foreground/40 hover:text-accent-gold transition-colors font-mono text-xs uppercase tracking-widest">LinkedIn</a>
             <a href="mailto:divyanshu.s.cs@gmail.com" className="text-foreground/40 hover:text-accent-gold transition-colors font-mono text-xs uppercase tracking-widest">Email</a>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/20 mt-8">
            © 2026 Divyanshu Sharma • Technical Integrity
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
