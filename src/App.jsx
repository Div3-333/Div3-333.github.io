import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Shield, 
  Database, 
  Cpu, 
  Terminal,
  Languages,
  Music,
  Palette,
  Code2,
  Binary,
  Lock,
  Zap,
  Globe,
  FileText,
  Activity,
  CheckCircle2,
  ChevronRight,
  AlertCircle,
  Layers,
  X
} from 'lucide-react';

const Portfolio = () => {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const commercialImpact = [
    {
      id: "procare",
      company: "ProCare Solar",
      role: "Infrastructure & Security Lead",
      period: "Apr 2026 to Present",
      summary: "Responsible for full-stack infrastructure migration, web security hardening, and performance remediation.",
      achievements: [
        "Eradicated critical OWASP Top 10 vulnerabilities including public CRM webhook exposure.",
        "Systematically neutralized ghost dependencies that previously throttled mobile performance.",
        "Deployed strict Enterprise CSP whitelisting to provide an ironclad defense against XSS vectors."
      ],
      metrics: [
        { label: "Vulnerabilities Remediated", value: "7 Critical", icon: <Shield size={14} /> },
        { label: "Mobile TBT Reduction", value: "95.3%", icon: <Activity size={14} /> },
        { label: "Lighthouse Scores", value: "100/100", icon: <CheckCircle2 size={14} /> }
      ],
      caseStudy: {
        title: "Infrastructure & Security Migration",
        context: "The legacy application was tethered to a proprietary platform (Base44), which introduced severe performance bottlenecks (4s+ TBT), accessibility failures, and critical security gaps.",
        problems: [
          "Hardcoded Zapier webhooks exposed in client-side React code.",
          "Unauthenticated backend pathways allowing direct CRM pipeline bypassing.",
          "Permissive Content Security Policy (CSP) allowing 'unsafe-eval' and wildcard sources.",
          "Outdated UI dependencies with known public CVEs."
        ],
        actions: [
          "Architected zero-trust migration to Vercel Edge Network.",
          "Engineered secure API abstractions via Vercel Serverless Functions to shield CRM endpoints.",
          "Implemented strict domain-whitelisted Enterprise CSP to neutralize XSS vectors.",
          "Surgically neutralized 'ghost' dependencies throttling initial render cycles."
        ],
        evidence: [
          "Mobile Total Blocking Time (TBT) reduced from 4,090ms to 190ms.",
          "Verified 100/100 Lighthouse scores across SEO and Accessibility.",
          "Eradicated all identified OWASP Top 10 vulnerabilities (C1, C2, C3, H1, H4)."
        ]
      }
    }
  ];

  const projects = [
    {
      title: "Indian Language Morphological Analyzer",
      subtitle: "AI Engine for Agglutinative Philology",
      tech: ["Next.js", "FastAPI", "Gemini API"],
      problem: "Agglutinative languages like Tamil and Sanskrit present complex morphological structures where traditional tokenizers fail to preserve semantic-structural context.",
      built: "A full-stack analysis engine. React/Next.js frontend handles precise text selection events; FastAPI backend serves as a secure proxy to Google's Gemini Pro.",
      challenge: "Engineering deterministic JSON response schemas to force LLMs into accurate linguistic decomposition (root/suffix) without regex-based fragility.",
      result: "Achieved granular word-by-word grammatical breakdowns, mapping situational context to morphological interpretation.",
      link: "https://github.com/Div3-333/cognition-n-context"
    },
    {
      title: "Wrought-Iron",
      subtitle: "Secure Data Wrangling Desktop Application",
      tech: ["Rust", "Python", "Django"],
      problem: "Local data analysis tools often lack standard security hardening, creating risks when processing sensitive corporate datasets.",
      built: "Built a local-first data wrangling app with Rust/Python hybrid components and a hardened file-handling pipeline.",
      challenge: "Ensuring end-to-end integrity across versioned releases by auditing packaging processes and eliminating unsafe data-processing paths.",
      result: "Shipped a security-hardened tool with validated releases for Windows and macOS, focusing on technical correctness and SSDLC principles.",
      link: "https://github.com/Div3-333/Wrought-Iron"
    },
    {
      title: "Indus Valley Script (IVS) Research",
      subtitle: "Computational Epigraphy & Data Modeling",
      tech: ["Python", "Statistical Analysis", "Philology"],
      problem: "Undeciphered scripts are often analyzed through isolated visual resemblance rather than formal distributional baselines.",
      built: "Developed a Python-based research program for corpus hygiene, sign-inventory normalization, and positional grammar analysis.",
      challenge: "Managing positional entropy across 5,600+ inscriptions to identify functional classes (initial, medial, terminal) without phonetic bias.",
      result: "Identified that 60 signs cover 75% of the corpus. Established a structural scaffold for proper-name hunting via onomastic anchor models.",
      link: "https://github.com/Div3-333/Indus-Valley-Script-IVS"
    }
  ];

  const education = [
    {
      unit: "FIT2173",
      name: "Software Security",
      outcome: "Design and realization of secure software for memory exploits and web applications."
    },
    {
      unit: "FIT2004",
      name: "Algorithms & Data Structures",
      outcome: "Space-time complexity analysis and implementation of greedy and dynamic programming strategies."
    },
    {
      unit: "FIT2165",
      name: "Computer Networks",
      outcome: "Configuration of data communication and analysis of LAN/WAN architectures and protocol performance."
    },
    {
      unit: "FIT2094",
      name: "Databases",
      outcome: "Relational model normalization and architecture of complex SQL-driven interfaces."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent-gold/30 selection:text-accent-gold overflow-x-hidden">
      <AnimatePresence>
        {activeCaseStudy && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 backdrop-blur-xl bg-background/90"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-navy/40 border border-accent-gold/20 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl relative"
            >
              <button 
                onClick={() => setActiveCaseStudy(null)}
                className="absolute top-6 right-6 text-accent-gold/60 hover:text-accent-gold transition-colors p-2"
              >
                <X size={24} />
              </button>
              
              <div className="p-8 md:p-16">
                <div className="flex items-center gap-4 mb-8">
                  <Shield className="text-accent-gold" size={32} />
                  <h3 className="text-4xl md:text-5xl font-serif italic text-accent-gold tracking-tighter">
                    {activeCaseStudy.caseStudy.title}
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-16">
                  <div className="space-y-12">
                    <section>
                      <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent-gold/40 mb-4 flex items-center gap-2">
                        <Globe size={12} /> Context
                      </h4>
                      <p className="text-lg text-foreground/80 leading-relaxed font-serif italic">
                        {activeCaseStudy.caseStudy.context}
                      </p>
                    </section>

                    <section>
                      <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent-gold/40 mb-6 flex items-center gap-2">
                        <AlertCircle size={12} /> Technical Problems Identified
                      </h4>
                      <ul className="space-y-4 font-mono text-xs text-foreground/60">
                        {activeCaseStudy.caseStudy.problems.map((p, i) => (
                          <li key={i} className="flex gap-4 items-start">
                            <span className="text-accent-gold/40 shrink-0">0{i+1}.</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>

                  <div className="space-y-12">
                    <section>
                      <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent-gold/40 mb-6 flex items-center gap-2">
                        <Layers size={12} /> Engineering Actions
                      </h4>
                      <ul className="space-y-4">
                        {activeCaseStudy.caseStudy.actions.map((a, i) => (
                          <li key={i} className="flex gap-4 items-start text-sm text-foreground/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent-gold mt-1.5 shrink-0 shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section className="bg-accent-gold/5 border border-accent-gold/10 p-8">
                      <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent-gold mb-6">Measured Outcome</h4>
                      <ul className="space-y-4">
                        {activeCaseStudy.caseStudy.evidence.map((e, i) => (
                          <li key={i} className="flex gap-4 items-center text-accent-gold font-serif italic text-lg">
                            <CheckCircle2 size={18} className="shrink-0" />
                            {e}
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="fixed top-0 w-full z-50 px-8 py-6 backdrop-blur-md bg-background/80 border-b border-accent-gold/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-accent-gold font-serif text-2xl tracking-tighter italic"
          >
            DS
          </motion.span>
          <div className="flex gap-10 text-[10px] uppercase tracking-[0.3em] font-mono text-foreground/60">
            {['About', 'Impact', 'Projects', 'Education', 'Expertise'].map((item) => (
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
          <p className="font-mono text-accent-gold tracking-[0.4em] uppercase mb-12 text-xs md:text-sm max-w-4xl mx-auto leading-relaxed italic">
            I build secure, data-driven systems across cybersecurity, AI, and infrastructure with a focus on measurable performance and technical correctness.
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <a 
              href="/Divyanshu_Sharma_CV.pdf" 
              download 
              className="flex items-center gap-3 bg-accent-gold text-background px-10 py-4 rounded-sm font-mono text-xs uppercase tracking-widest hover:bg-accent-brass transition-all font-bold group shadow-[0_0_20px_rgba(212,175,55,0.2)]"
            >
              <FileText size={18} />
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
        
        {/* Proof Strip */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-12 w-full max-w-5xl border-t border-accent-gold/5 pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 px-6"
        >
          {[
            { label: "TBT Reduction", val: "95.3%", sub: "Mobile Performance" },
            { label: "Security Remediation", val: "7 Critical", sub: "Vulnerabilities Closed" },
            { label: "Lighthouse Scores", val: "100/100", sub: "SEO & Accessibility" },
            { label: "Shipped Projects", val: "3 Production", sub: "Technical Range" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-accent-gold font-serif text-3xl md:text-4xl italic mb-1">{stat.val}</p>
              <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-foreground/40">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent-gold/10 blur-[150px] rounded-full" />
        </div>
      </section>

      {/* About Section - AUTHENTIC Narrative */}
      <section id="about" className="section-container">
        <motion.div {...fadeIn}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-12 flex items-center gap-4 border-b border-accent-gold/10 pb-6 uppercase tracking-tighter font-serif italic">
              <span className="text-accent-gold text-lg font-mono tracking-tighter">01.</span>
              Professional Summary
            </h2>
            <div className="grid md:grid-cols-[2fr_1fr] gap-16 items-center">
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
              <div className="space-y-8 py-4 border-l border-accent-gold/10 pl-8">
                {[
                  { 
                    icon: <Languages size={14} />, 
                    title: "Linguistics & AI", 
                    details: "My linguistics background informs how I approach morphology, tokenization, and language-model evaluation." 
                  },
                  { 
                    icon: <Music size={14} />, 
                    title: "Musicology & Pattern", 
                    details: "Leveraging South Asian music theory to solve complex data structural and mathematical pattern recognition problems." 
                  },
                  { 
                    icon: <Palette size={14} />, 
                    title: "Visual Rigor", 
                    details: "Traditional arts drive my focus on visual stability and spatial structural integrity in system architecture." 
                  }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <div className="flex items-center gap-3 text-accent-gold mb-2">
                      {item.icon}
                      <h4 className="font-bold text-[9px] uppercase tracking-widest">{item.title}</h4>
                    </div>
                    <p className="text-[10px] text-foreground/40 italic leading-snug">{item.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="section-container bg-navy/5">
        <motion.div {...fadeIn}>
          <h2 className="text-4xl mb-16 flex items-center gap-4 border-b border-accent-gold/10 pb-6 uppercase tracking-tighter font-serif italic">
            <span className="text-accent-gold text-lg font-mono tracking-tighter">02.</span>
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
                    <button 
                      onClick={() => setActiveCaseStudy(exp)}
                      className="mt-8 flex items-center gap-2 font-mono text-[10px] text-accent-gold hover:text-foreground transition-all uppercase tracking-[0.2em] bg-accent-gold/5 px-6 py-3 border border-accent-gold/20 hover:border-accent-gold/60 w-full justify-center group"
                    >
                      View Full Case Study <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
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
                  <div className="border-l-2 border-accent-gold/20 pl-8 space-y-8">
                    <p className="text-xl text-foreground/70 leading-relaxed font-serif italic">
                      {exp.summary}
                    </p>
                    <div className="grid gap-6">
                      {exp.achievements.map((item, i) => (
                        <div key={i} className="flex gap-4 items-start text-foreground/60 leading-relaxed group hover:text-foreground transition-colors">
                          <Zap size={18} className="text-accent-gold shrink-0 mt-1 shadow-glow" />
                          <span>{item}</span>
                        </div>
                      ))}
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
            <span className="text-accent-gold text-lg font-mono tracking-tighter">03.</span>
            Technical Projects
          </h2>
          <div className="grid gap-12">
            {projects.map((project, index) => (
              <div key={index} className="relative group overflow-hidden border border-accent-gold/10 p-12 hover:bg-navy/10 transition-all duration-700 bg-background/50">
                <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-12">
                  <div>
                    <h3 className="text-4xl mb-2 group-hover:text-accent-gold transition-colors font-serif italic tracking-tight">{project.title}</h3>
                    <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent-gold/60 mb-10">{project.subtitle}</p>
                    
                    <div className="grid md:grid-cols-2 gap-12 mb-10 text-sm leading-relaxed text-foreground/70">
                      <div>
                        <h4 className="font-mono text-[10px] uppercase text-accent-gold/40 mb-3 tracking-widest">Problem</h4>
                        <p>{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="font-mono text-[10px] uppercase text-accent-gold/40 mb-3 tracking-widest">The Build</h4>
                        <p>{project.built}</p>
                      </div>
                      <div className="md:col-span-2 grid md:grid-cols-2 gap-12 bg-navy/10 p-8 border border-accent-gold/5">
                        <div>
                          <h4 className="font-mono text-[10px] uppercase text-accent-gold/40 mb-3 tracking-widest">Technical Challenge</h4>
                          <p>{project.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-mono text-[10px] uppercase text-accent-gold/40 mb-3 tracking-widest">Result</h4>
                          <p className="text-foreground/90 italic font-serif text-lg leading-snug">{project.result}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.tech.map(t => (
                        <span key={t} className="px-4 py-1 text-[10px] font-mono border border-accent-gold/20 text-accent-gold/70 bg-navy/40 uppercase tracking-widest">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex md:flex-col gap-4">
                    <a href={project.link} target="_blank" className="flex items-center justify-center gap-3 font-mono text-[10px] text-accent-gold hover:text-foreground transition-all uppercase tracking-[0.2em] bg-navy/30 px-8 py-4 border border-accent-gold/10 hover:border-accent-gold/40 group">
                      Source Code <Code2 size={16} className="group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
                <Terminal className="absolute -bottom-24 -right-24 text-accent-gold/5 w-96 h-96 group-hover:text-accent-gold/10 transition-all duration-700 pointer-events-none" />
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education & Expertise Section */}
      <section id="education" className="section-container bg-navy/5">
        <motion.div {...fadeIn}>
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-4xl mb-12 flex items-center gap-4 border-b border-accent-gold/10 pb-6 uppercase tracking-tighter font-serif italic">
                <span className="text-accent-gold text-lg font-mono tracking-tighter">04.</span>
                Education
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
                <ul className="font-mono text-[11px] space-y-8 text-foreground/70">
                  {education.map((u, i) => (
                    <li key={i} className="border-l border-accent-gold/30 pl-4">
                      <span className="text-accent-gold font-bold block mb-1 uppercase tracking-tight">{u.unit}: {u.name}</span>
                      {u.outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-4xl mb-12 flex items-center gap-4 border-b border-accent-gold/10 pb-6 uppercase tracking-tighter font-serif italic">
                <span className="text-accent-gold text-lg font-mono tracking-tighter">05.</span>
                Expertise
              </h2>
              <div className="grid gap-12">
                {[
                  { title: "Cybersecurity", icon: <Lock size={20} />, skills: "Vulnerability Modeling, Pentesting, Cryptography, SSDLC, Access Control" },
                  { title: "Data Science & AI", icon: <Binary size={20} />, skills: "Statistical Analysis, LLM Integration, Data Viz, Algorithmic Efficiency" },
                  { title: "Infrastructure", icon: <Globe size={20} />, skills: "TCP/IP, Cloud Migration, Linux/Bash Architecture, Network Performance" }
                ].map((cat, i) => (
                  <div key={i} className="flex gap-8 p-8 border border-accent-gold/5 bg-background/40 hover:border-accent-gold/20 transition-all group">
                    <div className="text-accent-gold bg-navy/20 p-5 rounded-sm h-fit group-hover:scale-110 transition-transform">{cat.icon}</div>
                    <div>
                      <h4 className="font-serif italic text-3xl text-accent-gold mb-3">{cat.title}</h4>
                      <p className="text-[11px] font-mono text-foreground/50 uppercase tracking-[0.2em] leading-relaxed">
                        {cat.skills}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-20 text-center p-12 border border-accent-gold/10 bg-navy/20">
                 <p className="font-mono text-xs text-foreground/50 uppercase tracking-[0.3em] mb-8">Interested in secure, data-heavy systems?</p>
                 <a href="mailto:divyanshu.s.cs@gmail.com" className="text-4xl md:text-6xl font-serif italic text-accent-gold hover:text-foreground transition-colors border-b border-accent-gold/20 pb-4 inline-block">
                   Get in touch.
                 </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-accent-gold/5 text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-16 mb-8">
             <a href="https://github.com/Div3-333" className="text-foreground/40 hover:text-accent-gold transition-colors font-mono text-[11px] uppercase tracking-[0.5em]">GitHub</a>
             <a href="https://linkedin.com/in/divyanshu-sharma-b08517283" className="text-foreground/40 hover:text-accent-gold transition-colors font-mono text-[11px] uppercase tracking-[0.5em]">LinkedIn</a>
             <a href="mailto:divyanshu.s.cs@gmail.com" className="text-foreground/40 hover:text-accent-gold transition-colors font-mono text-[11px] uppercase tracking-[0.5em]">Email</a>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.6em] text-foreground/10">
            © 2026 Divyanshu Sharma • Technical Integrity • Built with Intent
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
