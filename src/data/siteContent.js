export const heroContent = {
  kicker: 'Cybersecurity | Data Science | AI Engineering',
  title: 'Divyanshu Sharma',
  thesis:
    'I build secure, data-heavy systems where performance, trust boundaries, and technical correctness matter.',
  target:
    'Interested in cybersecurity, application security, and data-focused engineering roles where correctness, trust boundaries, and technical depth matter.',
  copy:
    'Cybersecurity and Data Science student at Monash University. My studies gave me the frameworks; real infrastructure migrations, live vulnerability identification, and briefing non-technical stakeholders on commercial risk made them real.',
};

export const proofMetrics = [
  {
    value: '4,090ms -> 190ms',
    label: 'Mobile total blocking time',
    detail: 'Before/after Lighthouse summary',
    icon: 'activity',
  },
  {
    value: '100 / 100',
    label: 'SEO + accessibility',
    detail: 'Post-migration Lighthouse checks',
    icon: 'check',
  },
  {
    value: '7',
    label: 'Security findings closed',
    detail: 'Sanitized remediation log',
    icon: 'shield',
  },
  {
    value: '87.3',
    label: 'Monash WAM',
    detail: 'Computer Science, cybersecurity and data focus',
    icon: 'graduation',
  },
];

export const caseEvidenceNotes = [
  'Metrics are reproduced from private reports as public-safe summaries.',
  'Client names, domains, URLs, webhook paths, tokens, CRM identifiers, and customer data are removed.',
  'Derivative artifacts preserve system shape using neutral placeholders such as client.example and CRM_SYSTEM.',
];

export const performanceEvidence = [
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

export const vulnerabilityMatrix = [
  {
    id: 'R-01',
    severity: 'Critical',
    owasp: 'Cryptographic Failures',
    summary: 'Client-side runtime exposed private workflow credentials to public inspection.',
    remediation: 'Moved private workflow submission behind serverless validation and rotated exposed values.',
    verification: 'Server-side boundary test',
    status: 'Closed',
  },
  {
    id: 'R-02',
    severity: 'Critical',
    owasp: 'Broken Access Control',
    summary: 'Public intake path allowed unauthenticated workflow submission.',
    remediation: 'Moved submission handling behind serverless validation boundary.',
    verification: 'Manual replay test',
    status: 'Closed',
  },
  {
    id: 'R-03',
    severity: 'Critical',
    owasp: 'Security Misconfiguration',
    summary: 'Browser execution policy allowed broad script execution and weak source control.',
    remediation: 'Replaced permissive script rules with a Content Security Policy allowlist.',
    verification: 'CSP header review',
    status: 'Closed',
  },
  {
    id: 'R-04',
    severity: 'High',
    owasp: 'Vulnerable Components',
    summary: 'Public bundle included stale dependencies and unnecessary runtime surface.',
    remediation: 'Removed unused packages, reduced shipped JavaScript, and rechecked lockfile exposure.',
    verification: 'Dependency audit',
    status: 'Closed',
  },
  {
    id: 'R-05',
    severity: 'High',
    owasp: 'Injection',
    summary: 'Lead object fields crossed trust boundaries before server-side validation.',
    remediation: 'Validated LEAD_OBJECT payloads before downstream private workflow writes.',
    verification: 'Schema validation check',
    status: 'Closed',
  },
  {
    id: 'R-06',
    severity: 'High',
    owasp: 'Security Logging and Monitoring',
    summary: 'Public runtime made performance and failure diagnosis difficult during intake flow testing.',
    remediation: 'Reduced script chain and separated public rendering from private workflow handling.',
    verification: 'Lighthouse re-run',
    status: 'Closed',
  },
  {
    id: 'R-07',
    severity: 'High',
    owasp: 'Security Misconfiguration',
    summary: 'Metadata, landmarks, and crawl-facing semantics were inconsistent after builder export.',
    remediation: 'Corrected page semantics, contrast, landmarks, and crawl-facing metadata.',
    verification: 'Accessibility scan',
    status: 'Closed',
  },
];

export const projectCards = [
  {
    title: 'Indian Language Morphological Analyzer',
    subtitle: 'LLM-assisted linguistic analysis',
    visual: 'morphology',
    artifactId: 'morphology-sample-output',
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
    links: [
      { label: 'Source', href: 'https://github.com/Div3-333/cognition-n-context', kind: 'source' },
      { label: 'Sample Output', href: '#morphology-sample-output', kind: 'artifact' },
    ],
  },
  {
    title: 'Wrought-Iron',
    subtitle: 'Local-first secure data wrangling',
    visual: 'wrought',
    artifactId: 'wrought-architecture',
    tech: ['Rust', 'Python', 'Django', 'Desktop packaging'],
    problem:
      'Sensitive datasets are often pushed through convenience tooling that treats file handling, local processing, and release integrity as afterthoughts.',
    built:
      'Built a Rust/Python desktop data-wrangling tool with hardened file handling, local processing, input validation, and a security-first architecture.',
    challenge:
      'Maintaining safety across a hybrid stack required clear trust boundaries between the UI, local files, Python processing, and packaged releases.',
    evidence: ['Source repository', 'Local-only processing pipeline', 'No cloud upload required'],
    links: [
      { label: 'Source', href: 'https://github.com/Div3-333/Wrought-Iron', kind: 'source' },
      { label: 'Releases / Architecture', href: '#wrought-architecture', kind: 'artifact' },
    ],
  },
  {
    title: 'Indus Valley Script Research',
    subtitle: 'Computational epigraphy and corpus modeling',
    visual: 'indus',
    artifactId: 'indus-frequency-notes',
    tech: ['Python', 'Statistics', 'Corpus hygiene', 'Philology'],
    problem:
      'Undeciphered script claims often jump to visual resemblance before establishing distributional baselines and positional grammar.',
    built:
      'Developed Python workflows for sign inventory normalization, corpus cleaning, frequency analysis, and positional class modeling.',
    challenge:
      'The research had to avoid phonetic assumptions while still finding structure across more than 5,600 inscriptions.',
    evidence: ['Research repository', 'Corpus frequency tables', 'Mini distribution chart'],
    links: [
      { label: 'Source', href: 'https://github.com/Div3-333/Indus-Valley-Script-IVS', kind: 'source' },
      { label: 'Frequency Notes', href: '#indus-frequency-notes', kind: 'artifact' },
    ],
  },
];

export const education = [
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

export const expertise = [
  {
    title: 'Cybersecurity',
    icon: 'lock',
    skills: ['Threat modeling', 'OWASP remediation', 'CSP hardening', 'Secure SDLC'],
  },
  {
    title: 'Data and AI',
    icon: 'binary',
    skills: ['Statistical analysis', 'LLM integration', 'Prompt contracts', 'Evaluation design'],
  },
  {
    title: 'Infrastructure',
    icon: 'network',
    skills: ['Cloud migration', 'Serverless APIs', 'Performance tuning', 'Network fundamentals'],
  },
];

export const adjacentExpertise = [
  {
    title: 'Languages and AI evaluation',
    icon: 'languages',
    body:
      'Fluency and scholarly study in Hindi, Sanskrit, and Tamil, with additional research in Malayalam and Kannada. This supports how I think about morphology, tokenization, prompt evaluation, and failure cases in Indian-language AI systems.',
    applied: 'Applied to LLM analysis, structured prompts, and multilingual data quality.',
  },
  {
    title: 'Musicology and pattern analysis',
    icon: 'music',
    body:
      'South Asian music theory, classical dance, raga analysis, and the intersection of musicology with mathematical pattern recognition.',
    applied: 'Applied to sequence, hierarchy, constraints, and signal patterns in data.',
  },
  {
    title: 'Fine arts and interface judgment',
    icon: 'palette',
    body:
      'Deep interest in regional art forms like Tanjore art, Madhubani, Rajput miniatures, and traditional sculpting.',
    applied: 'Applied to visual hierarchy, spacing, scanning paths, and evidence presentation.',
  },
  {
    title: 'Classical texts and systems reading',
    icon: 'file',
    body:
      'Sanskrit literature and classical technical texts sharpen careful reading, taxonomy, and interpretation under ambiguity.',
    applied: 'Applied to threat modeling, research hygiene, and precise technical documentation.',
  },
];
