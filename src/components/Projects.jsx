import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, CheckCircle2, Code2, Database, FileText } from 'lucide-react';
import { projectCards } from '../data/siteContent';
import { SectionHeader } from './SectionHeader';

function ProjectVisual({ type, id }) {
  if (type === 'morphology') {
    return (
      <div id={id} className="project-visual morphology-visual" aria-label="Sample morphology output">
        <div className="terminal-bar">
          <span />
          <span />
          <span />
          <strong>schema-valid-output.json</strong>
        </div>
        <div className="morphology-artifact">
          <div className="morphology-row">
            <span>Input token</span>
            <strong>{'\u0BB5\u0BC0\u0B9F\u0BCD\u0B9F\u0BBF\u0BB2\u0BCD'}</strong>
          </div>
          <div className="morphology-row">
            <span>Detected root</span>
            <strong>{'\u0BB5\u0BC0\u0B9F\u0BC1'}</strong>
          </div>
          <div className="morphology-row">
            <span>Suffix / features</span>
            <strong>{'\u0B87\u0BB2\u0BCD'} | locative case</strong>
          </div>
          <div className="morphology-row">
            <span>Confidence note</span>
            <strong>Sentence context checked</strong>
          </div>
          <div className="schema-chip">JSON schema valid</div>
        </div>
      </div>
    );
  }

  if (type === 'wrought') {
    return (
      <div id={id} className="project-visual pipeline-visual" aria-label="Local processing pipeline">
        {['Import file', 'Validate schema', 'Local transform', 'Preview diff', 'Export cleaned dataset'].map(
          (step, index) => (
            <div className="pipeline-step" key={step}>
              <Database size={16} />
              <span>{step}</span>
              {index < 4 && <ArrowRight size={15} />}
            </div>
          ),
        )}
        <div className="pipeline-note">No cloud upload required</div>
      </div>
    );
  }

  return (
    <div id={id} className="project-visual corpus-visual" aria-label="Indus Valley Script corpus coverage chart">
      <div className="frequency-header">
        <span>Frequency distribution</span>
        <strong>Top 60 signs</strong>
      </div>
      <div className="coverage-stat">
        <strong>75%</strong>
        <p>corpus coverage</p>
      </div>
      <div className="frequency-bars" aria-hidden="true">
        {[88, 74, 63, 52, 42, 34, 28, 22, 18, 14, 11, 8].map((height, index) => (
          <span key={height + index} style={{ '--bar-height': `${height}%` }} />
        ))}
      </div>
      <div className="coverage-legend">
        <span>Top 60 signs</span>
        <span>Long-tail signs</span>
      </div>
    </div>
  );
}

export function Projects({ motionProps }) {
  return (
    <motion.section id="projects" className="section section-alt" {...motionProps}>
      <div className="section-inner">
        <SectionHeader eyebrow="02 | Projects" title="Inspectable technical work">
          Each project is framed around the problem, what I built, what made it difficult, and what a reviewer can inspect.
        </SectionHeader>

        <div className="project-stack">
          {projectCards.map((project) => (
            <article className="project-panel" key={project.title}>
              <ProjectVisual type={project.visual} id={project.artifactId} />
              <div className="project-main">
                <p className="project-subtitle">{project.subtitle}</p>
                <h3>{project.title}</h3>
                <div className="project-grid">
                  <div>
                    <h4>Problem</h4>
                    <p>{project.problem}</p>
                  </div>
                  <div>
                    <h4>Built</h4>
                    <p>{project.built}</p>
                  </div>
                  <div>
                    <h4>Technical challenge</h4>
                    <p>{project.challenge}</p>
                  </div>
                  <div>
                    <h4>Evidence</h4>
                    <ul className="evidence-list">
                      {project.evidence.map((item) => (
                        <li key={item}>
                          <CheckCircle2 size={15} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="tech-row">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                {project.links.map((link) => {
                  const isExternal = link.href.startsWith('http');
                  const Icon = link.kind === 'source' ? Code2 : FileText;

                  return (
                    <a
                      className="project-link"
                      href={link.href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noreferrer' : undefined}
                      key={link.href}
                    >
                      <Icon size={18} />
                      {link.label}
                      {isExternal && <ArrowUpRight size={16} />}
                    </a>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
