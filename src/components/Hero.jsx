import { motion } from 'framer-motion';
import { Download, FileText, Mail } from 'lucide-react';
import { heroContent, proofMetrics } from '../data/siteContent';
import { MetricTile } from './MetricTile';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export function Hero({ reduceMotion }) {
  return (
    <section id="top" className="hero-section">
      <div className="hero-grid" aria-hidden="true">
        <div className="hero-scanline" />
        <div className="hero-card hero-card-one">
          <span>SECURITY</span>
          <strong>7 findings closed</strong>
        </div>
        <div className="hero-card hero-card-two">
          <span>LIGHTHOUSE</span>
          <strong>100 / 100</strong>
        </div>
        <div className="hero-card hero-card-three">
          <span>PERFORMANCE</span>
          <strong>4,090ms {'->'} 190ms</strong>
        </div>
      </div>

      <motion.div
        className="hero-content"
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="hero-kicker">{heroContent.kicker}</p>
        <h1>{heroContent.title}</h1>
        <p className="hero-thesis">{heroContent.thesis}</p>
        <p className="hero-target">{heroContent.target}</p>
        <p className="hero-copy">{heroContent.copy}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="/Divyanshu_Sharma_CV.pdf" download>
            <Download size={18} />
            Download CV
          </a>
          <a className="button button-secondary" href="#case-study">
            <FileText size={18} />
            Open case study
          </a>
        </div>
        <div className="social-row" aria-label="Social links">
          <a href="mailto:divyanshu.s.cs@gmail.com" aria-label="Email Divyanshu">
            <Mail size={19} />
          </a>
          <a
            href="https://github.com/Div3-333"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <GithubIcon size={19} />
          </a>
          <a
            href="https://linkedin.com/in/divyanshu-sharma-b08517283"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <LinkedinIcon size={19} />
          </a>
        </div>
      </motion.div>

      <div className="proof-strip" aria-label="Portfolio proof metrics">
        {proofMetrics.slice(0, 3).map((metric) => (
          <MetricTile key={metric.label} metric={metric} />
        ))}
      </div>
    </section>
  );
}
