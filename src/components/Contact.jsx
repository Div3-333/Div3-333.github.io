import { Mail } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export function Contact() {
  return (
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
      <p className="footer-note">© 2026 Divyanshu Sharma. Portfolio evidence is summarized for public review.</p>
    </footer>
  );
}
