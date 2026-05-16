import { useReducedMotion } from 'framer-motion';
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

function App() {
  const shouldReduceMotion = useReducedMotion();
  const motionProps = shouldReduceMotion ? reducedMotion : fadeIn;

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
