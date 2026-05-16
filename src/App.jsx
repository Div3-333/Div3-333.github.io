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
  FileText,
  Activity,
  CheckCircle2
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
      subtitle: "AI-Engine for Agglutinative Philology",
      tech: ["Next.js", "FastAPI", "Gemini API", "Tailwind"],
      problem: "Agglutinative Indian languages (Tamil, Sanskrit) present complex morphological structures that traditional tokenizers fail to parse accurately.",
      built: "A full-stack analysis engine with a React/Next.js frontend and a FastAPI/Python backend acting as a secure proxy to Google's Gemini API.",
      challenge: "Engineering strict JSON schemas to force LLMs into deterministic linguistic decomposition (root/suffix separation) without regex-based fragility.",
      result: "Achieved granular grammatical breakdowns and translations for Tamil and Sanskrit, providing a perceptual data layer for language learning.",
      link: "https://github.com/Div3-333/cognition-n-context"
    },
    {
      title: "Indus Valley Script (IVS) Research",
      subtitle: "Computational Epigraphy & Hypothesis Control",
      tech: ["Python", "Statistical Modeling", "LaTeX"],
      problem: "The Indus sign system remains undeciphered, often plagued by speculative readings without distributional baseline controls.",
      built: "A disciplined research program utilizing Python for corpus hygiene, sign-inventory normalization, and positional grammar analysis.",
      challenge: "Managing a 712-code analyzable inventory and identifying functional clusters through neighbor-profile cosine similarity.",
      result: "Confirmed that 60 signs cover 75% of tokens. Established a structural scaffold for proper-name hunting using onomastic anchor models.",
      link: "https://github.com/Div3-333/Indus-Valley-Script-IVS"
    },
    {
      title: "Wrought-Iron",
      subtitle: "Secure Data Wrangling Desktop Application",
      tech: ["Rust", "Python", "Django", "PyInstaller"],
      problem: "Sensitive data wrangling tools often lack production-grade security, leaving backdoors between build iterations.",
      built: "A cross-platform desktop application using a hybrid Rust/Python backend with a Django web framework layer.",
      challenge: "Ensuring end-to-end integrity across versioned releases by auditing and eliminating vulnerabilities in the packaging process.",
      result: "Delivered a security-hardened tool packaged into native executables for both Windows and macOS.",
      link: "https://github.com/Div3-333/Wrought-Iron"
    }
  ];

  const commercialImpact = [
    {
      company: "ProCare Solar",
      role: "Lead Infrastructure Engineer & Security Lead",
      period: "Apr 2026 to Present",
      metrics: [
        { label: "Vulnerabilities Eradicated", value: "7 Critical", icon: <Shield size={14} /> },
        { label: "Mobile TBT Reduction", value: "95.3%", icon: <Activity size={14} /> },
        { label: "Lighthouse Score", value: "100/100", icon: <CheckCircle2 size={14} /> }
      ],
      caseStudy: {
        problem: "Legacy infrastructure (Base44) exhibited critical OWASP Top 10 vulnerabilities including public CRM webhook exposure and unauthenticated backend pathways.",
        solution: "Architected a zero-trust migration to Vercel. Engineered secure API abstractions (Serverless Functions) and enforced strict Enterprise CSP with domain whitelisting.",
        impact: "Eradicated all critical attack vectors. Reduced mobile Total Blocking Time from 4,090ms to 190ms, securing the company's digital footprint and SEO rankings."
      }
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
      skills: ["OSI/TCP-IP Architecture", "Cloud Migration", "LAN/WAN", "Linux Architecture"]
    }
  ];

  const humanitiesCognitiveLink = [
    {
      icon: <Languages size={16} />,
      title: "Linguistics & AI Modeling",
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
      <nav className="fixed top-0 w-full z-50 px-8 py-6 backdrop-blur-md bg-background/80 border-b border-accent-gold/5 text-glow">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-accent-gold font-serif text-2xl tracking-tighter italic"
          >
            DS
          </motion.span>
          <div className="flex gap-10 text-[10px] uppercase tracking-[0.3em] font-mono text-foreground/60">
            {['About', 'Impact', 'Projects', 'Academic', 'Expertise'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-accent-gold transition-all">
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
          <h1 className="text-7xl md:text-9xl mb-8 text-glow font-serif">
            Divyanshu Sharma
          </h1>
          <p className="font-mono text-accent-gold tracking-[0.4em] uppercase mb-12 text-xs md:text-sm">
            Data Science • AI Engineering • Cybersecurity
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <a 
              href="/Divyanshu_Sharma_CV.pdf" 
              download 
              className="flex items-center gap-3 bg-accent-gold text-background px-10 py-4 rounded-sm font-mono text-xs uppercase tracking-widest hover:bg-accent-brass transition-all font-bold group shadow-[0_0_20px_rgba(212,175,55,0.2)]"
            >
              <FileText size={18} className="group-hover:scale-110 transition-transform" />
              Download CV
            </a>
            <div className="flex gap-6">
              <a href="mailto:divyanshu.s.cs@gmail.com" className="p-4 border border-accent-gold/20 hover:border-accent-gold/60 transition-all rounded-full bg-navy/20">
                <Mail size={22} className="text-accent-gold" />
              </a>
              <a href="https://linkedin.com/in/divyanshu-sharma-b08517283" target="_blank" className="p-4 border border-accent-gold/20 hover:border-accent-gold/60 transition-all rounded-full bg-navy/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-gold"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://github.com/Div3-333" target="_blank" className="p-4 border border-accent-gold/20 hover:border-accent-gold/60 transition-all rounded-full bg-navy/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-gold"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
            </div>
          </div>
        </motion.div>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent-gold/10 blur-[150px] rounded-full" />
        </div>
      </section>

      {/* About Section - AUTHENTIC SUMMARY */}
      <section id="about" className="section-container">
        <motion.div {...fadeIn}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-12 flex items-center gap-4 border-b border-accent-gold/10 pb-6 uppercase tracking-tighter font-serif italic">
              <span className="text-accent-gold text-lg font-mono">01.</span>
              Professional Summary
            </h2>
            <div className="space-y-8 text-xl md:text-2xl leading-relaxed text-foreground/80 font-serif">
              <p>
                Cybersecurity and Data Science student at Monash University. My studies gave me the frameworks; real infrastructure migrations,
                live vulnerability identification, and briefing non-technical stakeholders on commercial risk made them real.
              </p>
              <p className="text-accent-gold italic">
                I don't measure knowledge by what I've learned but by what it lets me do for others. I seek
                experience at a scale where the stakes actually matter.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="section-container bg-navy/5">
        <motion.div {...fadeIn}>
          <h2 className="text-4xl mb-16 flex items-center gap-4 border-b border-accent-gold/10 pb-6 uppercase tracking-tighter font-serif italic">
            <span className="text-accent-gold text-lg font-mono">02.</span>
            Commercial Impact
          </h2>
          <div className="space-y-16">
            {commercialImpact.map((exp, index) => (
              <div key={index} className="grid md:grid-cols-[1fr_2fr] gap-12">
                <div className="space-y-8">
                  <div className="card-old-money p-8 bg-navy/30">
                    <h3 className="text-4xl text-accent-gold font-serif mb-2">{exp.company}</h3>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">{exp.period}</p>
                    <p className="mt-4 font-bold text-xs uppercase tracking-tight text-accent-gold/80">{exp.role}</p>
                  </div>
                  <div className="grid gap-4">
                    {exp.metrics.map((m, i) => (
                      <div key={i} className="flex items-center justify-between p-4 border border-accent-gold/10 bg-navy/5">
                        <div className="flex items-center gap-3 text-accent-gold/60 uppercase font-mono text-[10px] tracking-widest">
                          {m.icon} {m.label}
                        </div>
                        <div className="text-accent-gold font-serif italic text-lg">{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-8 py-4">
                  <div className="border-l-2 border-accent-gold/20 pl-8 space-y-6">
                    <div>
                      <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-gold/50 mb-3">Problem</h4>
                      <p className="text-foreground/80 leading-relaxed">{exp.caseStudy.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-gold/50 mb-3">Technical Solution</h4>
                      <p className="text-foreground/80 leading-relaxed">{exp.caseStudy.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-gold/50 mb-3">Measured Impact</h4>
                      <p className="text-foreground text-lg leading-relaxed italic">{exp.caseStudy.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-container">
        <motion.div {...fadeIn}>
          <h2 className="text-4xl mb-16 flex items-center gap-4 border-b border-accent-gold/10 pb-6 uppercase tracking-tighter font-serif italic">
            <span className="text-accent-gold text-lg font-mono">03.</span>
            Technical Projects
          </h2>
          <div className="grid gap-12">
            {projects.map((project, index) => (
              <div key={index} className="relative group overflow-hidden border border-accent-gold/10 p-12 hover:bg-navy/10 transition-all duration-700 bg-background/50">
                <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-8">
                  <div>
                    <h3 className="text-4xl mb-2 group-hover:text-accent-gold transition-colors font-serif italic tracking-tight">{project.title}</h3>
                    <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent-gold/60 mb-8">{project.subtitle}</p>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-8 text-sm leading-relaxed text-foreground/70">
                      <div>
                        <p className="font-mono text-[10px] uppercase text-accent-gold/40 mb-2">Technical Problem</p>
                        <p>{project.problem}</p>
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase text-accent-gold/40 mb-2">The Build</p>
                        <p>{project.built}</p>
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase text-accent-gold/40 mb-2">Technical Challenge</p>
                        <p>{project.challenge}</p>
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase text-accent-gold/40 mb-2">Result</p>
                        <p className="text-foreground/90 italic font-serif">{project.result}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.tech.map(t => (
                        <span key={t} className="px-4 py-1 text-[10px] font-mono border border-accent-gold/20 text-accent-gold/70 bg-navy/40">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex md:flex-col gap-4">
                    <a href={project.link} target="_blank" className="flex items-center gap-2 font-mono text-[10px] text-accent-gold hover:text-foreground transition-all uppercase tracking-[0.2em] bg-navy/30 px-6 py-3 border border-accent-gold/10 hover:border-accent-gold/40">
                      Source <Code2 size={16} />
                    </a>
                  </div>
                </div>
                <Terminal className="absolute -bottom-16 -right-16 text-accent-gold/5 w-80 h-80 group-hover:text-accent-gold/10 transition-all duration-700 pointer-events-none" />
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Academic Section */}
      <section id="academic" className="section-container bg-navy/5">
        <motion.div {...fadeIn}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-12 flex items-center gap-4 border-b border-accent-gold/10 pb-6 uppercase tracking-tighter font-serif italic">
              <span className="text-accent-gold text-lg font-mono">04.</span>
              Academic Core
            </h2>
            <div className="bg-background/40 border border-accent-gold/10 p-10 rounded-sm relative shadow-2xl">
              <Shield className="absolute top-8 right-8 text-accent-gold/20" size={40} />
              <div className="mb-10">
                <h3 className="text-accent-gold font-serif text-3xl italic mb-2 tracking-tight">Monash University</h3>
                <p className="font-mono text-xs uppercase tracking-[0.2em] opacity-60 text-foreground">Bachelor of Computer Science</p>
                <div className="flex gap-6 mt-4 font-mono text-[10px] text-accent-gold uppercase tracking-widest">
                  <span>GPA: 3.778 / 4.0</span>
                  <span>WAM: 87.3</span>
                </div>
              </div>
              <ul className="font-mono text-[11px] space-y-6 text-foreground/70">
                <li className="border-l border-accent-gold/30 pl-4"><span className="text-accent-gold font-bold block mb-1 uppercase">FIT2173: Software Security</span> Design and realization of secure software for memory exploits and web applications.</li>
                <li className="border-l border-accent-gold/30 pl-4"><span className="text-accent-gold font-bold block mb-1 uppercase">FIT2004: Algorithms & Data Structures</span> Analysis of greedy, dynamic programming, and space-time complexity.</li>
                <li className="border-l border-accent-gold/30 pl-4"><span className="text-accent-gold font-bold block mb-1 uppercase">FIT2165: Computer Networks</span> Configuration of data communication and analysis of LAN/WAN architectures.</li>
                <li className="border-l border-accent-gold/30 pl-4"><span className="text-accent-gold font-bold block mb-1 uppercase">FIT2094: Databases</span> Normalization, complex SQL queries, and theoretical basis of the relational model.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="section-container">
        <motion.div {...fadeIn}>
          <h2 className="text-4xl mb-12 flex items-center gap-4 border-b border-accent-gold/10 pb-6 uppercase tracking-tighter font-serif italic">
            <span className="text-accent-gold text-lg font-mono">05.</span>
            Core Competencies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Cybersecurity", icon: <Lock size={20} />, skills: "Vulnerability Modeling, Pentesting, Cryptography, SSDLC, Access Control" },
              { title: "Data Science & AI", icon: <Binary size={20} />, skills: "Statistical Analysis, LLM Integration, Data Viz, Algorithmic Efficiency" },
              { title: "Infrastructure", icon: <Globe size={20} />, skills: "TCP/IP, Cloud Migration, Linux/Bash Architecture, Network Performance" }
            ].map((cat, i) => (
              <div key={i} className="flex gap-8 p-6 border border-accent-gold/5 bg-navy/5 hover:border-accent-gold/20 transition-all">
                <div className="text-accent-gold bg-navy/20 p-4 rounded-sm h-fit">{cat.icon}</div>
                <div>
                  <h4 className="font-serif italic text-2xl text-accent-gold mb-2">{cat.title}</h4>
                  <p className="text-[11px] font-mono text-foreground/50 uppercase tracking-[0.2em] leading-relaxed">
                    {cat.skills}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About & Cognitive Link Section */}
      <section className="section-container bg-navy/5">
        <motion.div {...fadeIn}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl mb-16 text-center font-serif italic text-accent-gold tracking-tight leading-tight">
              "Structural integrity is common to all complex systems, whether linguistic or computational."
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { 
                  icon: <Languages size={18} />, 
                  title: "Linguistics & AI Modeling", 
                  details: "Fluent in Hindi, Sanskrit, and Tamil. Scholarly expertise in comparative philology directly informs my work in LLM based morphological analysis and ancient script data modeling." 
                },
                { 
                  icon: <Music size={18} />, 
                  title: "Musicology & Pattern Analysis", 
                  details: "Expertise in South Asian music theory, classical dance, and raga analysis. Leveraging the intersection of musicology and mathematical pattern recognition to solve complex data structural problems." 
                },
                { 
                  icon: <Palette size={18} />, 
                  title: "Fine Arts & Spatial Rigor", 
                  details: "Deep interest in Tanjore art, Madhubani, Rajput miniatures, and traditional sculpting. Arts-driven focus on visual stability and spatial structural integrity in system architecture." 
                }
              ].map((item, i) => (
                <div key={i} className="group p-8 border border-accent-gold/10 bg-background/40 hover:bg-background transition-all text-center">
                  <div className="text-accent-gold mb-6 flex justify-center group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h4 className="font-bold text-xs text-accent-gold uppercase tracking-[0.2em] mb-4 h-8 flex items-center justify-center">{item.title}</h4>
                  <p className="text-[10px] text-foreground/40 italic leading-relaxed font-sans">{item.details}</p>
                </div>
              ))}
            </div>
            <div className="mt-20 text-center">
               <p className="font-mono text-xs text-foreground/50 uppercase tracking-[0.3em] mb-6">Interested in security, AI, or data-heavy systems?</p>
               <a href="mailto:divyanshu.s.cs@gmail.com" className="text-3xl md:text-5xl font-serif italic text-accent-gold hover:text-foreground transition-colors border-b border-accent-gold/20 pb-2">
                 Get in touch.
               </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-accent-gold/5 text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-12 mb-6">
             <a href="https://github.com/Div3-333" className="text-foreground/40 hover:text-accent-gold transition-colors font-mono text-[10px] uppercase tracking-[0.4em]">GitHub</a>
             <a href="https://linkedin.com/in/divyanshu-sharma-b08517283" className="text-foreground/40 hover:text-accent-gold transition-colors font-mono text-[10px] uppercase tracking-[0.4em]">LinkedIn</a>
             <a href="mailto:divyanshu.s.cs@gmail.com" className="text-foreground/40 hover:text-accent-gold transition-colors font-mono text-[10px] uppercase tracking-[0.4em]">Email</a>
          </div>
          <p className="font-mono text-[9px] uppercase tracking-[0.5em] text-foreground/20">
            © 2026 Divyanshu Sharma • Technical Integrity • Built with Intent
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
