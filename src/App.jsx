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
  GraduationCap,
  Layers,
  Languages,
  Lock,
  Mail,
  Music,
  Network,
  Palette,
  Shield,
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
    detail: 'Before/after Lighthouse summary',
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
    label: 'Security findings closed',
    detail: 'Sanitized remediation log',
    icon: Shield,
  },
  {
    value: '87.3',
    label: 'Monash WAM',
    detail: 'Computer Science, cybersecurity and data focus',
    icon: GraduationCap,
  },
];

const caseEvidenceNotes = [
  'Metrics are reproduced from private reports as public-safe summaries.',
  'Client names, domains, URLs, webhook paths, tokens, CRM identifiers, and customer data are removed.',
  'Derivative artifacts preserve system shape using neutral placeholders such as client.example and CRM_SYSTEM.',
];

const performanceEvidence = [
  {
    label: 'Before migration',
    value: '4,090ms',
    width: '100%',
    tone: 'before',
  },
  {
    label: 'After migration',
    value: '190ms',
    width: '4.7%',
    tone: 'after',
  },
];

const vulnerabilityMatrix = [
  {
    id: 'R-01',
    severity: 'Critical',
    owasp: 'Cryptographic Failures',
    summary: 'Client-side runtime exposed private workflow credentials to public inspection.',
    remediation: 'Moved private workflow submission behind serverless validation and rotated exposed values.',
    verification: 'Bundle review + credential rotation check',
    status: 'Closed',
  },
  {
    id: 'R-02',
    severity: 'Critical',
    owasp: 'Broken Access Control',
    summary: 'Public intake path allowed unauthenticated workflow submission.',
    remediation: 'Moved submission handling behind serverless validation boundary.',
    verification: 'Manual request replay + schema validation test',
    status: 'Closed',
  },
  {
    id: 'R-03',
    severity: 'Critical',
    owasp: 'Security Misconfiguration',
    summary: 'Browser execution policy allowed broad script execution and weak source control.',
    remediation: 'Replaced permissive script rules with a Content Security Policy allowlist.',
    verification: 'Header inspection + browser console check',
    status: 'Closed',
  },
  {
    id: 'R-04',
    severity: 'High',
    owasp: 'Vulnerable Components',
    summary: 'Public bundle included stale dependencies and unnecessary runtime surface.',
    remediation: 'Removed unused packages, reduced shipped JavaScript, and rechecked lockfile exposure.',
    verification: 'Dependency audit + bundle inspection',
    status: 'Closed',
  },
  {
    id: 'R-05',
    severity: 'High',
    owasp: 'Injection',
    summary: 'Lead object fields crossed trust boundaries before server-side validation.',
    remediation: 'Validated LEAD_OBJECT payloads before downstream private workflow writes.',
    verification: 'Schema validation test + malformed payload replay',
    status: 'Closed',
  },
  {
    id: 'R-06',
    severity: 'High',
    owasp: 'Security Logging and Monitoring',
    summary: 'Public runtime made performance and failure diagnosis difficult during intake flow testing.',
    remediation: 'Reduced script chain and separated public rendering from private workflow handling.',
    verification: 'Before/after Lighthouse mobile audit',
    status: 'Closed',
  },
  {
    id: 'R-07',
    severity: 'High',
    owasp: 'Security Misconfiguration',
    summary: 'Metadata, landmarks, and crawl-facing semantics were inconsistent after builder export.',
    remediation: 'Corrected page semantics, contrast, landmarks, and crawl-facing metadata.',
    verification: 'Accessibility audit + SEO crawl summary',
    status: 'Closed',
  },
];

const projectCards = [
  {
    title: 'Indian Language Morphological Analyzer',
    subtitle: 'LLM-assisted linguistic analysis',
    visual: 'morphology',
    tech: ['Next.js', 'FastAPI', 'Gemini API', 'JSON contracts'],
    problem:
      'Agglutinative and morphologically rich languages need analysis that preserves root, suffix, and contextual information instead of flattening everything into loose tokens.',
    built:
      'Built a full-stack analyzer with a React/Next.js interface, FastAPI proxy layer, and structured Gemini prompts for word-level decomposition.',
    challenge:
      'The hard part was forcing probabilistic model output into deterministic JSON that a UI can trust without fragile regex cleanup.',
    evidence: [
      'Inspectable source repository',
      'Structured response schema validity',
      'Root/suffix sample output artifact',
    ],
    links: [{ label: 'Source', href: 'https://github.com/Div3-333/cognition-n-context' }],
  },
  {
    title: 'Wrought-Iron',
    subtitle: 'Local-first secure data wrangling',
    visual: 'wrought',
    tech: ['Rust', 'Python', 'Django', 'Desktop packaging'],
    problem:
      'Sensitive datasets are often pushed through convenience tooling that treats file handling, local processing, and release integrity as afterthoughts.',
    built:
      'Built a Rust/Python desktop data-wrangling tool with hardened file handling, local processing, input validation, and a security-first architecture.',
    challenge:
      'Maintaining safety across a hybrid stack required clear trust boundaries between the UI, local files, Python processing, and packaged releases.',
    evidence: [
      'Source repository',
      'Local-only processing pipeline',
      'No cloud upload required',
    ],
    links: [{ label: 'Source', href: 'https://github.com/Div3-333/Wrought-Iron' }],
  },
  {
    title: 'Indus Valley Script Research',
    subtitle: 'Computational epigraphy and corpus modeling',
    visual: 'indus',
    tech: ['Python', 'Statistics', 'Corpus hygiene', 'Philology'],
    problem:
      'Undeciphered script claims often jump to visual resemblance before establishing distributional baselines and positional grammar.',
    built:
      'Developed Python workflows for sign inventory normalization, corpus cleaning, frequency analysis, and positional class modeling.',
    challenge:
      'The research had to avoid phonetic assumptions while still finding structure across more than 5,600 inscriptions.',
    evidence: [
      'Research repository',
      'Corpus frequency tables',
      'Mini distribution chart',
    ],
    links: [{ label: 'Source', href: 'https://github.com/Div3-333/Indus-Valley-Script-IVS' }],
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

const adjacentExpertise = [
  {
    title: 'Languages and AI evaluation',
    icon: Languages,
    body:
      'Fluency and scholarly study in Hindi, Sanskrit, and Tamil, with additional research in Malayalam and Kannada. This supports how I think about morphology, tokenization, prompt evaluation, and failure cases in Indian-language AI systems.',
    applied: 'Applied to LLM analysis, structured prompts, and multilingual data quality.',
  },
  {
    title: 'Musicology and pattern analysis',
    icon: Music,
    body:
      'South Asian music theory, classical dance, raga analysis, and the intersection of musicology with mathematical pattern recognition.',
    applied: 'Applied to sequence, hierarchy, constraints, and signal patterns in data.',
  },
  {
    title: 'Fine arts and interface judgment',
    icon: Palette,
    body:
      'Deep interest in regional art forms like Tanjore art, Madhubani, Rajput miniatures, and traditional sculpting.',
    applied: 'Applied to visual hierarchy, spacing, scanning paths, and evidence presentation.',
  },
  {
    title: 'Classical texts and systems reading',
    icon: FileText,
    body:
      'Sanskrit literature and classical technical texts sharpen careful reading, taxonomy, and interpretation under ambiguity.',
    applied: 'Applied to threat modeling, research hygiene, and precise technical documentation.',
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
    ? [
        { label: 'Browser' },
        { label: 'Heavy builder runtime' },
        { label: 'Public automation path', badge: 'Sensitive boundary exposed', tone: 'risk' },
        { label: 'Private workflow' },
      ]
    : [
        { label: 'Browser' },
        { label: 'Edge deployment' },
        { label: 'Serverless validation', badge: 'Schema validation', tone: 'safe' },
        { label: 'Secret isolation', badge: 'Secrets removed from client', tone: 'safe' },
        { label: 'Private workflow', badge: 'CSP allowlist', tone: 'safe' },
      ];

  return (
    <div className={`architecture-map ${before ? 'is-before' : 'is-after'}`}>
      <div className="architecture-title">
        <span>{before ? 'Before' : 'After'}</span>
        <strong>{before ? 'Exposed trust boundary' : 'Controlled serverless boundary'}</strong>
      </div>
      <div className="architecture-flow" aria-label={`${variant} architecture`}>
        {nodes.map((node, index) => (
          <div className="architecture-step" key={node.label}>
            <div className="architecture-node">
              <strong>{node.label}</strong>
              {node.badge && <span className={`architecture-badge badge-${node.tone}`}>{node.badge}</span>}
            </div>
            {index < nodes.length - 1 && <ArrowRight className="architecture-arrow" size={18} />}
          </div>
        ))}
      </div>
      <p className="architecture-note">
        {before
          ? 'Sensitive workflow details were reachable from the public runtime.'
          : 'Requests now pass through validation, policy, and secret isolation before private workflows.'}
      </p>
    </div>
  );
}

function ClientSafeLighthouseArtifact() {
  return (
    <div className="lighthouse-artifact" aria-label="Redacted Lighthouse public summary artifact">
      <div className="artifact-report-header">
        <div>
          <span>Report type</span>
          <strong>Lighthouse mobile audit | redacted public summary</strong>
        </div>
        <em>Private report, public-safe summary</em>
      </div>

      <div className="artifact-metric-grid">
        <div>
          <span>Before</span>
          <strong>4,090ms</strong>
          <p>Total blocking time</p>
        </div>
        <div>
          <span>After</span>
          <strong>190ms</strong>
          <p>Total blocking time</p>
        </div>
        <div>
          <span>SEO</span>
          <strong>100</strong>
          <p>Post-migration score</p>
        </div>
        <div>
          <span>Accessibility</span>
          <strong>100</strong>
          <p>Post-migration score</p>
        </div>
      </div>

      <div className="redacted-field-grid" aria-label="Redacted Lighthouse fields">
        {['URL', 'Crawl path', 'Client domain', 'Internal page labels'].map((field) => (
          <div className="redacted-field" key={field}>
            <span>{field}</span>
            <strong>REDACTED</strong>
          </div>
        ))}
      </div>

      <p className="artifact-note">
        Values are reproduced from private client report; raw report withheld for confidentiality.
      </p>
    </div>
  );
}

function PerformanceDeltaPanel() {
  return (
    <div className="performance-panel">
      <div className="visual-heading">
        <Activity size={18} />
        <div>
          <span>Performance artifact</span>
          <h3>Mobile TBT reduction</h3>
        </div>
      </div>
      <div className="bar-comparison">
        {performanceEvidence.map((item) => (
          <div className="bar-row" key={item.label}>
            <div className="bar-row-meta">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
            <div className="bar-track">
              <div
                className={`bar-fill bar-${item.tone}`}
                style={{ '--bar-width': item.width }}
              />
            </div>
          </div>
        ))}
      </div>
      <p>
        The public figure is the aggregate delta only. The original report includes client-specific URLs and
        internal page data, so those details stay out of the site.
      </p>
    </div>
  );
}

function SecurityTracker() {
  return (
    <div className="security-tracker">
      <div className="visual-heading">
        <Shield size={18} />
        <div>
          <span>Remediation tracker</span>
          <h3>Seven findings closed</h3>
        </div>
      </div>
      <div className="tracker-grid" aria-label="Sanitized remediation status">
        {vulnerabilityMatrix.map((item) => (
          <div className="tracker-cell" key={item.id}>
            <span>{item.id}</span>
            <strong>{item.severity}</strong>
            <em>{item.status}</em>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectVisual({ type }) {
  if (type === 'morphology') {
    return (
      <div className="project-visual morphology-visual" aria-label="Sample morphology output">
        <div className="terminal-bar">
          <span />
          <span />
          <span />
          <strong>schema-valid-output.json</strong>
        </div>
        <div className="morphology-artifact">
          <div className="morphology-row">
            <span>Input token</span>
            <strong>வீட்டில்</strong>
          </div>
          <div className="morphology-row">
            <span>Detected root</span>
            <strong>வீடு</strong>
          </div>
          <div className="morphology-row">
            <span>Suffix / features</span>
            <strong>இல் | locative case</strong>
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
      <div className="project-visual pipeline-visual" aria-label="Local processing pipeline">
        {['Import file', 'Validate schema', 'Local transform', 'Preview diff', 'Export cleaned dataset'].map((step, index) => (
          <div className="pipeline-step" key={step}>
            <Database size={16} />
            <span>{step}</span>
            {index < 4 && <ArrowRight size={15} />}
          </div>
        ))}
        <div className="pipeline-note">No cloud upload required</div>
      </div>
    );
  }

  return (
    <div className="project-visual corpus-visual" aria-label="Indus Valley Script corpus coverage chart">
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
            Cybersecurity and Data Science student at Monash University. My studies gave me the frameworks;
            real infrastructure migrations, live vulnerability identification, and briefing non-technical
            stakeholders on commercial risk made them real.
          </p>
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
          {proofMetrics.map((metric) => (
            <MetricTile key={metric.label} metric={metric} />
          ))}
        </div>
      </section>

      <motion.section id="case-study" className="section" {...fadeIn}>
        <div className="section-inner">
          <SectionHeader eyebrow="01 | Commercial Case Study" title="Commercial platform hardening">
            A public version of the work, focused on the decisions and metrics that can be shared safely.
          </SectionHeader>

          <div className="evidence-note">
            {caseEvidenceNotes.map((note) => (
              <div key={note}>
                <CheckCircle2 size={15} />
                <span>{note}</span>
              </div>
            ))}
          </div>

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
                execution cost, and moved private workflow integration behind controlled server-side boundaries.
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
            <div className="case-visual-stack">
              <ClientSafeLighthouseArtifact />
              <PerformanceDeltaPanel />
            </div>
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
            <div className="comparison-panel is-checked">
              <p className="panel-label">Checked</p>
              <h3>Lighthouse checks</h3>
              <div className="delta-number">100 / 100</div>
              <p>SEO and accessibility reached perfect scores in the post-migration summaries.</p>
            </div>
          </div>

          <SecurityTracker />

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
              <p>Public aliases only. No domains, URLs, endpoint paths, payloads, tokens, vendor configuration, or customer data.</p>
            </div>
            <div className="matrix-table-wrap">
              <table className="matrix-table">
                <thead>
                  <tr>
                    <th scope="col">Public ID</th>
                    <th scope="col">Severity</th>
                    <th scope="col">OWASP category</th>
                    <th scope="col">Public-safe finding summary</th>
                    <th scope="col">Remediation</th>
                    <th scope="col">Verification method</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {vulnerabilityMatrix.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>
                        <span className={`risk-pill risk-${item.severity.toLowerCase()}`}>
                          {item.severity}
                        </span>
                      </td>
                      <td>{item.owasp}</td>
                      <td>{item.summary}</td>
                      <td>{item.remediation}</td>
                      <td>{item.verification}</td>
                      <td>{item.status}</td>
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
                <ProjectVisual type={project.visual} />
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
                  {project.links.map((link) => (
                    <a className="project-link" href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                      <Code2 size={18} />
                      {link.label}
                      <ArrowUpRight size={16} />
                    </a>
                  ))}
                </div>
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

      <motion.section className="section adjacent-section" {...fadeIn}>
        <div className="section-inner adjacent-layout">
          <div>
            <SectionHeader eyebrow="05 | Adjacent Expertise" title="The useful side interests">
              These are not the headline, but they are part of the way I approach AI, data, security, and interface work.
            </SectionHeader>
          </div>
          <div className="adjacent-grid">
            {adjacentExpertise.map((item) => {
              const Icon = item.icon;
              return (
                <article className="adjacent-panel" key={item.title}>
                  <div className="adjacent-title">
                    <Icon size={19} />
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.body}</p>
                  <span>{item.applied}</span>
                </article>
              );
            })}
          </div>
        </div>
      </motion.section>

      <motion.section className="section closing-section" {...fadeIn}>
        <div className="section-inner closing-note">
          <p className="eyebrow">Knowledge and service</p>
          <blockquote>
            I don't measure knowledge by what I've learned but by what it lets me do for others.
          </blockquote>
          <p>
            I seek experience at a scale where the stakes actually matter.
          </p>
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
        <p className="footer-note">(c) 2026 Divyanshu Sharma. Portfolio evidence is summarized for public review.</p>
      </footer>
    </main>
  );
}

export default App;
