import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Shield, 
  Database, 
  Cpu, 
  Terminal
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
      role: "Technical Advisor & Digital Infrastructure Specialist",
      period: "Apr 2026 - Present",
      description: "Led comprehensive digital infrastructure audit and penetration tests, identifying and eradicating 7 Critical and High-severity vulnerabilities. Architected secure cloud migration to Vercel, reducing mobile TBT by over 90%."
    },
    {
      company: "North Shore Coaching College",
      role: "Primary & High School Tutor",
      period: "Feb 2026 - Present",
      description: "Primary point of contact for parents and faculty. Translated complex academic subjects into accessible frameworks for diverse student cohorts."
    }
  ];

  const projects = [
    {
      title: "Wrought-Iron",
      subtitle: "Secure Data Wrangling & Analysis Desktop Application",
      tech: ["Rust", "Python", "Django", "SQLite", "PyInstaller"],
      description: "Architected and shipped a cross-platform desktop application using a Rust/Python hybrid backend. Delivered a production-ready, security-hardened tool across 3 versioned releases."
    }
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-accent-gold/30 selection:text-accent-gold">
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
            {['About', 'Experience', 'Work', 'Skills'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-accent-gold transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10"
        >
          <h1 className="text-6xl md:text-8xl mb-4 text-glow font-serif">
            Divyanshu Sharma
          </h1>
          <p className="font-mono text-accent-gold tracking-[0.3em] uppercase mb-8 text-sm md:text-base">
            Cybersecurity & Data Science
          </p>
          <div className="flex gap-4 justify-center">
            <a href="mailto:dsha0098@student.monash.edu" className="p-3 border border-accent-gold/20 hover:border-accent-gold/60 transition-all rounded-full">
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
        
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-gold/5 blur-[120px] rounded-full" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-container">
        <motion.div {...fadeIn}>
          <h2 className="text-4xl mb-12 flex items-center gap-4">
            <span className="text-accent-gold text-lg font-mono">01.</span>
            Professional Summary
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <p className="text-lg leading-relaxed text-foreground/80">
              Cybersecurity and Data Science student at Monash University. I specialize in 
              <span className="text-accent-gold font-bold"> real infrastructure migrations</span>, 
              live vulnerability identification, and translating technical risk into commercial 
              impact. I don't measure knowledge by what I've learned, but by what it lets me do for others.
            </p>
            <div className="border border-accent-gold/10 p-8 relative group">
               <Shield className="absolute -top-4 -left-4 text-accent-gold/40 group-hover:text-accent-gold transition-colors" size={32} />
               <div className="space-y-4">
                 <div className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 bg-accent-gold rounded-full" />
                   <span className="font-mono text-sm">GPA: 3.778 / 4.0</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 bg-accent-gold rounded-full" />
                   <span className="font-mono text-sm">WAM: 87.3</span>
                 </div>
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
            Professional Experience
          </h2>
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={index} className="card-old-money group">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <h3 className="text-2xl text-accent-gold">{exp.company}</h3>
                  <span className="font-mono text-sm opacity-50">{exp.period}</span>
                </div>
                <h4 className="font-mono text-sm uppercase tracking-wider mb-4 text-foreground/70">{exp.role}</h4>
                <p className="text-foreground/70 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="work" className="section-container">
        <motion.div {...fadeIn}>
          <h2 className="text-4xl mb-12 flex items-center gap-4">
            <span className="text-accent-gold text-lg font-mono">03.</span>
            Selected Work
          </h2>
          {projects.map((project, index) => (
            <div key={index} className="relative group overflow-hidden border border-accent-gold/10 p-12 hover:bg-navy/10 transition-all duration-700">
              <div className="relative z-10">
                <h3 className="text-4xl mb-2 group-hover:text-accent-gold transition-colors">{project.title}</h3>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-gold/60 mb-6">{project.subtitle}</p>
                <p className="max-w-2xl text-foreground/70 mb-8 text-lg">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 text-[10px] font-mono border border-accent-gold/20 text-accent-gold/70">{t}</span>
                  ))}
                </div>
              </div>
              <Terminal className="absolute -bottom-8 -right-8 text-accent-gold/5 w-64 h-64 group-hover:text-accent-gold/10 transition-all duration-700" />
            </div>
          ))}
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-container bg-navy/5">
        <motion.div {...fadeIn}>
          <h2 className="text-4xl mb-12 flex items-center gap-4">
            <span className="text-accent-gold text-lg font-mono">04.</span>
            Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-accent-gold">
                <Shield size={20} />
                <h3 className="font-serif text-xl italic">Security</h3>
              </div>
              <ul className="font-mono text-sm space-y-3 text-foreground/60">
                <li>Threat Modeling</li>
                <li>Vulnerability Analysis</li>
                <li>SSDLC Principles</li>
                <li>Cryptographic Protocols</li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-accent-gold">
                <Database size={20} />
                <h3 className="font-serif text-xl italic">Data & Ops</h3>
              </div>
              <ul className="font-mono text-sm space-y-3 text-foreground/60">
                <li>Python & SQL</li>
                <li>Linux / Bash</li>
                <li>Cisco Packet Tracer</li>
                <li>TCP/IP & OSI Models</li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-accent-gold">
                <Cpu size={20} />
                <h3 className="font-serif text-xl italic">Business</h3>
              </div>
              <ul className="font-mono text-sm space-y-3 text-foreground/60">
                <li>Risk Translation</li>
                <li>Stakeholder Communication</li>
                <li>Client Discovery</li>
                <li>Technical Mentorship</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-accent-gold/5 text-center">
        <div className="flex flex-col items-center gap-6">
          <p className="font-serif italic text-2xl text-accent-gold">Striving for impact at scale.</p>
          <div className="flex gap-8">
             <a href="https://github.com/Div3-333" className="text-foreground/40 hover:text-accent-gold transition-colors font-mono text-xs uppercase tracking-widest">GitHub</a>
             <a href="https://linkedin.com/in/divyanshu-sharma-b08517283" className="text-foreground/40 hover:text-accent-gold transition-colors font-mono text-xs uppercase tracking-widest">LinkedIn</a>
             <a href="mailto:dsha0098@student.monash.edu" className="text-foreground/40 hover:text-accent-gold transition-colors font-mono text-xs uppercase tracking-widest">Email</a>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/20 mt-8">
            © 2026 Divyanshu Sharma • Designed with Intent
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
