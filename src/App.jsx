import { useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { CaseStudy } from './components/CaseStudy';
import { ClosingNote } from './components/ClosingNote';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { AdjacentExpertise, Expertise } from './components/Expertise';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
};

const reducedMotion = {
  initial: { opacity: 1 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0 },
};

const navItems = [
  { label: 'Case Study', href: '#case-study' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Adjacent', href: '#adjacent-expertise' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const motionProps = shouldReduceMotion ? reducedMotion : fadeIn;

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <main className="site-shell">
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand-mark" href="#top" aria-label="Divyanshu Sharma home" onClick={closeMenu}>
          DS
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
        <div
          id="primary-navigation"
          className={`nav-links${isMenuOpen ? ' is-open' : ''}`}
          data-open={isMenuOpen}
        >
          {navItems.map((item) => (
            <a href={item.href} key={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <Hero reduceMotion={shouldReduceMotion} />
      <CaseStudy motionProps={motionProps} />
      <Projects motionProps={motionProps} />
      <Education motionProps={motionProps} />
      <Expertise motionProps={motionProps} />
      <AdjacentExpertise motionProps={motionProps} />
      <ClosingNote motionProps={motionProps} />
      <Contact />
    </main>
  );
}

export default App;
