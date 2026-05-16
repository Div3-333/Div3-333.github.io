import { motion } from 'framer-motion';
import { education } from '../data/siteContent';
import { SectionHeader } from './SectionHeader';

export function Education({ motionProps }) {
  return (
    <motion.section id="education" className="section" {...motionProps}>
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
  );
}
