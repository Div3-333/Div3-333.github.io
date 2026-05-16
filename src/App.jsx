import { motion } from 'framer-motion';
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Binary,
  CheckCircle2,
  Code2,
  Database,
  Download,
  FileText,
  Globe,
  GraduationCap,
  Layers,
  Lock,
  Mail,
  Network,
  Palette,
  Shield,
  Terminal,
} from 'lucide-react';

function GithubIcon({ size = 19 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 19 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
};

const proofMetrics = [
  {
    value: '4,090ms -> 190ms',
    label: 'Mobile total blocking time',
    detail: 'Redacted Lighthouse before/after summary',
    icon: Activity,
  },
  {
    value: '100 / 100',
    label: 'SEO + accessibility',
    detail: 'Post-migration Lighthouse checks',
    icon: CheckCircle2,
  },
  {
    value: '7',
    label: 'Critical/high findings closed',
    detail: 'Sanitized security remediation log',
    icon: Shield,
  },
  {
    value: '87.3',
    label: 'Monash WAM',
    detail: 'Computer Science, cybersecurity and data focus',
    icon: GraduationCap,
  },
];

const redactionRules = [
  'Client name, domains, URLs, webhook paths, CRM identifiers, and raw screenshots removed.',
  'Finding IDs are public aliases, not original audit IDs.',
  'Architecture diagrams are generalized from the real deployment shape.',
  'Only aggregate metrics and non-sensitive remediation categories are shown.',
];

const vulnerabilityMatrix = [
  {
    id: 'R-01',
    risk: 'Critical',
    category: 'Client-side secret exposure',
    remediation: 'Moved automation credentials behind serverless API boundaries and rotated exposed values.',
  },
  {
    id: 'R-02',
    risk: 'Critical',
    category: 'Unauthenticated intake pathway',
    remediation: 'Added controlled request handling, schema validation, and origin-aware routing before downstream writes.',
  },
  {
    id: 'R-03',
    risk: 'Critical',
    category: 'Permissive browser execution policy',
    remediation: 'Replaced broad script permissions with a strict Content Security Policy allowlist.',
  },
  {
    id: 'R-04',
    risk: 'High',
    category: 'Third-party dependency surface',
    remediation: 'Removed stale packages, reduced shipped JavaScript, and rechecked lockfile exposure.',
  },
  {
    id: 'R-05',
    risk: 'High',
    category: 'Input trust boundary gap',
    remediation: 'Shifted validation to server-side handlers before data reached private workflow systems.',
  },
  {
    id: 'R-06',
    risk: 'High',
    category: 'Render-blocking script chain',
    remediation: 'Deferred non-critical scripts and removed unused runtime baggage from the public page path.',
  },
  {
    id: 'R-07',
    risk: 'High',
    category: 'Accessibility and indexability failures',
    remediation: 'Corrected metadata, landmarks, contrast, and crawl-facing semantics during the migration.',
  },
];

const projectCards = [
  {
    title: 'Indian Language Morphological Analyzer',
    subtitle: 'LLM-assisted linguistic analysis',
    tech: ['Next.js', 'FastAPI', 'Gemini API', 'JSON contracts'],
    problem:
      'Agglutinative and morphologically rich languages need analysis that preserves root, suffix, and contextual information instead of flattening everything into loose tokens.',
    built:
      'Built a full-stack analyzer with a React/Next.js interface, FastAPI proxy layer, and structured Gemini prompts for word-level decomposition.',
    challenge:
      'The hard part was forcing probabilistic model output into deterministic JSON that a UI can trust without fragile regex cleanup.',
    evidence: [
      'Inspectable source repository',
      'Structured response schema',
      'Sample root/suffix decomposition output',
    ],
    link: 'https://github.com/Div3-333/cognition-n-context',
  },
  {
    title: 'Wrought-Iron',
    subtitle: 'Local-first secure data wrangling',
    tech: ['Rust', 'Python', 'Django', 'Desktop packaging'],
    problem:
      'Sensitive datasets are often pushed through convenience tooling that treats file handling, local processing, and release integrity as afterthoughts.',
    built:
      'Built a Rust/Python desktop data-wrangling tool with hardened file handling, local processing, input validation, and a security-first architecture.',
    challenge:
      'Maintaining safety across a hybrid stack required clear trust boundaries between the UI, local files, Python processing, and packaged releases.',
    evidence: [
      'Source repository',
      'Release hardening checklist',
      'Local processing architecture notes',
    ],
    link: 'https://github.com/Div3-333/Wrought-Iron',
  },
  {
    title: 'Indus Valley Script Research',
    subtitle: 'Computational epigraphy and corpus modeling',
    tech: ['Python', 'Statistics', 'Corpus hygiene', 'Philology'],
    problem:
      'Undeciphered script claims often jump to visual resemblance before establishing distributional baselines and positional grammar.',
    built:
      'Developed Python workflows for sign inventory normalization, corpus cleaning, frequency analysis, and positional class modeling.',
    challenge:
      'The research had to avoid phonetic assumptions while still finding structure across more than 5,600 inscriptions.',
    evidence: [
      'Research repository',
      'Frequency tables',
      'Positional grammar summaries',
    ],
    link: 'https://github.com/Div3-333/Indus-Valley-Script-IVS',
  },
];

const education = [
  {
    unit: 'FIT2173',
    name: 'Software Security',
    outcome: 'Memory corruption, exploit mitigation, web security, secure design.',
  },
  {
    unit: 'FIT2004',
    name: 'Algorithms and Data Structures',
    outcome: 'Complexity analysis, correctness reasoning, graph/search algorithms.',
  },
  {
    unit: 'FIT2165',
    name: 'Computer Networks',
    outcome: 'TCP/IP, LAN/WAN behavior, routing fundamentals, performance analysis.',
  },
  {
    unit: 'FIT2094',
    name: 'Databases',
    outcome: 'Normalization, SQL, schema design, relational data modeling.',
  },
];

const expertise = [
  {
    title: 'Cybersecurity',
    icon: Lock,
    skills: ['Threat modeling', 'OWASP remediation', 'CSP hardening', 'Secure SDLC'],
  },
  {
    title: 'Data and AI',
    icon: Binary,
    skills: ['Statistical analysis', 'LLM integration', 'Prompt contracts', 'Evaluation design'],
  },
  {
    title: 'Infrastructure',
    icon: Network,
    skills: ['Cloud migration', 'Serverless APIs', 'Performance tuning', 'Network fundamentals'],
  },
];

function MetricTile({ metric }) {
  const Icon = metric.icon;

  return (
    <div className="metric-tile">
      <div className="metric-icon" aria-hidden="true">
        <Icon size={18} />
      </div>
      <p className="metric-value">{metric.value}</p>
      <p className="metric-label">{metric.label}</p>
      <p className="metric-detail">{metric.detail}</p>
    </div>
  );
}

function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p className="section-lede">{children}</p>}
    </div>
  );
}

function ArchitectureMap({ variant }) {
  const before = variant === 'before';
  const nodes = before
    ? ['Browser', 'Client bundle', 'Public automation path', 'Private workflow']
    : ['Browser', 'Edge host', 'Serverless validation', 'Private workflow'];

  return (
    <div className={`architecture-map ${before ? 'is-before' : 'is-after'}`}>
      <div className="architecture-title">
        <span>{before ? 'Before' : 'After'}</span>
        <strong>{before ? 'Exposed trust boundary' : 'Controlled trust boundary'}</strong>
      </div>
      <div className="architecture-flow" aria-label={`${variant} architecture`}>
        {nodes.map((node, index) => (
          <div className="architecture-step" key={node}>
            <div className="architecture-node">{node}</div>
            {index < nodes.length - 1 && <ArrowRight className="architecture-arrow" size={18} />}
          </div>
        ))}
      </div>
      <p className="architecture-note">
        {before
          ? 'Sensitive workflow details were reachable from the public runtime.'
          : 'Requests now cross validation, policy, and secret isolation before private systems.'}
      </p>
    </div>
  );
}

function RedactedArtifactPreview() {
  return (
    <div className="artifact-preview" aria-label="Redacted evidence preview">
      <div className="artifact-toolbar">
        <span />
        <span />
        <span />
        <strong>REDACTED_CASE_STUDY.log</strong>
      </div>
      <div className="artifact-grid">
        <div className="artifact-score">
          <p>SEO</p>
          <strong>100</strong>
        </div>
        <div className="artifact-score">
          <p>A11Y</p>
          <strong>100</strong>
        </div>
        <div className="artifact-score is-hot">
          <p>TBT</p>
          <strong>190ms</strong>
        </div>
      </div>
      <div className="artifact-lines">
        <span className="line short" />
        <span className="line" />
        <span className="line redacted" />
        <span className="line" />
        <span className="line short" />
      </div>
      <div className="artifact-stamp">CLIENT-SAFE PUBLIC VIEW</div>
    </div>
  );
}

function App() {
  return (
    <main className="site-shell">
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand-mark" href="#top" aria-label="Divyanshu Sharma home">
          DS
        </a>
        <div className="nav-links">
          <a href="#case-study">Case Study</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

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
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="hero-kicker">Cybersecurity | Data Science | AI Engineering</p>
          <h1>Divyanshu Sharma</h1>
          <p className="hero-copy">
            I build secure, data-heavy systems with the kind of evidence a technical reviewer can inspect:
            remediation logs, architecture decisions, performance deltas, and source code.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="/Divyanshu_Sharma_CV.pdf" download>
              <Download size={18} />
              Download CV
            </a>
            <a className="button button-secondary" href="#case-study">
              <FileText size={18} />
              View redacted case study
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
          {proofMetrics.map((metric) => (
            <MetricTile key={metric.label} metric={metric} />
          ))}
        </div>
      </section>

      <motion.section className="section section-redaction" {...fadeIn}>
        <div className="section-inner redaction-layout">
          <div>
            <p className="eyebrow">Client-Safe Evidence Standard</p>
            <h2>Public proof without leaking private systems.</h2>
          </div>
          <ul className="redaction-list">
            {redactionRules.map((rule) => (
              <li key={rule}>
                <Shield size={16} />
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      <motion.section id="case-study" className="section" {...fadeIn}>
        <div className="section-inner">
          <SectionHeader eyebrow="01 | Commercial Case Study" title="Renewable energy platform hardening">
            A client-anonymous public case study reconstructed from redacted audit and Lighthouse evidence.
          </SectionHeader>

          <div className="case-layout">
            <div className="case-summary">
              <div className="case-meta">
                <span>Sector</span>
                <strong>Renewable energy</strong>
              </div>
              <div className="case-meta">
                <span>Role</span>
                <strong>Infrastructure/Security Engineer</strong>
              </div>
              <div className="case-meta">
                <span>Period</span>
                <strong>Apr 2026 - present</strong>
              </div>
              <p>
                Migrated a public lead-capture site away from a proprietary builder, reduced client-side
                execution cost, and moved sensitive workflow integration behind controlled server-side boundaries.
              </p>
              <div className="ownership-block">
                <h3>Personal ownership</h3>
                <ul>
                  <li>Security audit triage and remediation planning</li>
                  <li>Serverless API boundary for private workflow calls</li>
                  <li>Content Security Policy hardening</li>
                  <li>Performance cleanup and post-migration verification</li>
                </ul>
              </div>
            </div>
            <RedactedArtifactPreview />
          </div>

          <div className="comparison-grid">
            <div className="comparison-panel is-before">
              <p className="panel-label">Before</p>
              <h3>Builder runtime</h3>
              <div className="delta-number">4,090ms</div>
              <p>Mobile total blocking time with heavy public runtime and third-party script drag.</p>
            </div>
            <div className="comparison-panel is-after">
              <p className="panel-label">After</p>
              <h3>Edge deployment</h3>
              <div className="delta-number">190ms</div>
              <p>Validated after migration with trimmed scripts, isolated secrets, and cleaner page semantics.</p>
            </div>
            <div className="comparison-panel is-verified">
              <p className="panel-label">Verified</p>
              <h3>Lighthouse checks</h3>
              <div className="delta-number">100 / 100</div>
              <p>SEO and accessibility reached perfect scores in the redacted post-migration reports.</p>
            </div>
          </div>

          <div className="architecture-section">
            <div className="architecture-heading">
              <Layers size={20} />
              <h3>Architecture before and after</h3>
            </div>
            <div className="architecture-grid">
              <ArchitectureMap variant="before" />
              <ArchitectureMap variant="after" />
            </div>
          </div>

          <div className="matrix-section">
            <div className="matrix-heading">
              <AlertTriangle size={20} />
              <h3>Sanitized vulnerability matrix</h3>
              <p>Public aliases only. No endpoint names, tokens, customer data, domains, or vendor-specific CRM details.</p>
            </div>
            <div className="matrix-table-wrap">
              <table className="matrix-table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Risk</th>
                    <th scope="col">Category</th>
                    <th scope="col">Remediation</th>
                  </tr>
                </thead>
                <tbody>
                  {vulnerabilityMatrix.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>
                        <span className={`risk-pill risk-${item.risk.toLowerCase()}`}>{item.risk}</span>
                      </td>
                      <td>{item.category}</td>
                      <td>{item.remediation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section id="projects" className="section section-alt" {...fadeIn}>
        <div className="section-inner">
          <SectionHeader eyebrow="02 | Projects" title="Inspectable technical work">
            Each project is framed around the problem, what I built, what made it difficult, and what a reviewer can inspect.
          </SectionHeader>

          <div className="project-stack">
            {projectCards.map((project) => (
              <article className="project-panel" key={project.title}>
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
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                  <Code2 size={18} />
                  Source
                  <ArrowUpRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="education" className="section" {...fadeIn}>
        <div className="section-inner education-layout">
          <div>
            <SectionHeader eyebrow="03 | Academic Foundation" title="Monash Computer Science">
              Strong academic performance with security, networks, algorithms, and data systems at the center.
            </SectionHeader>
            <div className="academic-scoreboard">
              <div>
                <span>GPA</span>
                <strong>3.778 / 4.0</strong>
              </div>
              <div>
                <span>WAM</span>
                <strong>87.3</strong>
              </div>
            </div>
          </div>

          <div className="unit-list">
            {education.map((unit) => (
              <div className="unit-row" key={unit.unit}>
                <span>{unit.unit}</span>
                <div>
                  <h3>{unit.name}</h3>
                  <p>{unit.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className="section section-alt" {...fadeIn}>
        <div className="section-inner">
          <SectionHeader eyebrow="04 | Expertise" title="Where I am useful">
            Security, data, and infrastructure work best when they are treated as one system rather than separate boxes.
          </SectionHeader>
          <div className="expertise-grid">
            {expertise.map((item) => {
              const Icon = item.icon;
              return (
                <article className="expertise-panel" key={item.title}>
                  <div className="expertise-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{item.title}</h3>
                  <ul>
                    {item.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </motion.section>

      <motion.section className="section" {...fadeIn}>
        <div className="section-inner cross-domain">
          <div className="cross-domain-copy">
            <p className="eyebrow">Cross-domain edge</p>
            <h2>Language, music, and visual systems sharpen how I reason about structure.</h2>
            <p>
              Linguistics helps with tokenization and LLM evaluation. South Asian music theory strengthens
              pattern thinking. Traditional visual arts keep me attentive to proportion, hierarchy, and system clarity.
            </p>
          </div>
          <div className="discipline-grid">
            <div>
              <Globe size={20} />
              <span>Linguistics</span>
            </div>
            <div>
              <Terminal size={20} />
              <span>Computation</span>
            </div>
            <div>
              <Database size={20} />
              <span>Data modeling</span>
            </div>
            <div>
              <Palette size={20} />
              <span>Visual rigor</span>
            </div>
          </div>
        </div>
      </motion.section>

      <footer id="contact" className="footer-section">
        <div className="section-inner footer-layout">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Interested in secure, data-heavy systems?</h2>
          </div>
          <div className="footer-actions">
            <a className="button button-primary" href="mailto:divyanshu.s.cs@gmail.com">
              <Mail size={18} />
              Email me
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/Div3-333"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon size={18} />
              GitHub
            </a>
          </div>
        </div>
        <p className="footer-note">(c) 2026 Divyanshu Sharma. Public evidence is redacted by default.</p>
      </footer>
    </main>
  );
}

export default App;
