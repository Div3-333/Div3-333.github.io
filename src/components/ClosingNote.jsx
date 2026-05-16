import { motion } from 'framer-motion';

export function ClosingNote({ motionProps }) {
  return (
    <motion.section className="section closing-section" {...motionProps}>
      <div className="section-inner closing-note">
        <p className="eyebrow">Knowledge and service</p>
        <blockquote>
          I don't measure knowledge by what I've learned but by what it lets me do for others.
        </blockquote>
        <p>I seek experience at a scale where the stakes actually matter.</p>
      </div>
    </motion.section>
  );
}
