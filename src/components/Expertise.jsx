import { motion } from 'framer-motion';
import { Binary, FileText, Languages, Lock, Music, Network, Palette } from 'lucide-react';
import { adjacentExpertise, expertise } from '../data/siteContent';
import { SectionHeader } from './SectionHeader';

const expertiseIcons = {
  binary: Binary,
  file: FileText,
  languages: Languages,
  lock: Lock,
  music: Music,
  network: Network,
  palette: Palette,
};

export function Expertise({ motionProps }) {
  return (
    <motion.section className="section section-alt" {...motionProps}>
      <div className="section-inner">
        <SectionHeader eyebrow="04 | Expertise" title="Where I am useful">
          Security, data, and infrastructure work best when they are treated as one system rather than separate boxes.
        </SectionHeader>
        <div className="expertise-grid">
          {expertise.map((item) => {
            const Icon = expertiseIcons[item.icon];
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
  );
}

export function AdjacentExpertise({ motionProps }) {
  return (
    <motion.section className="section adjacent-section" {...motionProps}>
      <div className="section-inner adjacent-layout">
        <div>
          <SectionHeader eyebrow="05 | Adjacent Expertise" title="The useful side interests">
            These are not the headline, but they are part of the way I approach AI, data, security, and interface work.
          </SectionHeader>
        </div>
        <div className="adjacent-grid">
          {adjacentExpertise.map((item) => {
            const Icon = expertiseIcons[item.icon];
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
  );
}
