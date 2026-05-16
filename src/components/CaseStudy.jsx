import { motion } from 'framer-motion';
import { Activity, AlertTriangle, ArrowRight, CheckCircle2, Layers, Shield } from 'lucide-react';
import {
  caseEvidenceNotes,
  performanceEvidence,
  vulnerabilityMatrix,
} from '../data/siteContent';
import { SectionHeader } from './SectionHeader';

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
        { label: 'Edge host' },
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
          <span>Redacted report excerpt</span>
          <strong>Redacted Lighthouse summary</strong>
        </div>
        <em>Private report, public-safe summary</em>
      </div>

      <div className="artifact-metric-grid">
        <div>
          <span>Audit type</span>
          <strong>Mobile</strong>
          <p>Device class</p>
        </div>
        <div>
          <span>URL</span>
          <strong>Redacted</strong>
          <p>Client URL withheld</p>
        </div>
        <div>
          <span>Before TBT</span>
          <strong>4,090ms</strong>
          <p>Total blocking time</p>
        </div>
        <div>
          <span>After TBT</span>
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
        {['Client domain', 'Crawl path', 'Internal page labels'].map((field) => (
          <div className="redacted-field" key={field}>
            <span>{field}</span>
            <strong>REDACTED</strong>
          </div>
        ))}
      </div>

      <p className="artifact-note">
        Values are reproduced from private client report. Client URL and page labels withheld.
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
              <div className={`bar-fill bar-${item.tone}`} style={{ '--bar-width': item.width }} />
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

export function CaseStudy({ motionProps }) {
  return (
    <motion.section id="case-study" className="section" {...motionProps}>
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
            <h3>Edge host</h3>
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
            <p>
              Public aliases only. No domains, URLs, endpoint paths, payloads, tokens, vendor configuration, or
              customer data.
            </p>
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
                      <span className={`risk-pill risk-${item.severity.toLowerCase()}`}>{item.severity}</span>
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
  );
}
