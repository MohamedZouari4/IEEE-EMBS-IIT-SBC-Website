import { Mail, MapPin, Instagram, Linkedin } from "lucide-react";

export default function Footer({ logoWhite }) {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-row">
          <div className="foot-brand">
            <img src={logoWhite} alt="IEEE EMBS" />
            <div className="foot-brand-text">
              <b>IEEE EMBS — IIT</b>
              <span>Student Branch Chapter</span>
            </div>
          </div>

          <nav className="foot-links">
            <a href="#about">About</a>
            <a href="#events">Events</a>
            <a href="#team">Board</a>
            <a href="#join">Join</a>
          </nav>

          <div className="foot-contact">
            <a href="mailto:embs.iit@example.edu"><Mail size={13} style={{ marginRight: 6, verticalAlign: -2 }} />embs.iit@example.edu</a>
            <span><MapPin size={13} style={{ marginRight: 6, verticalAlign: -2 }} />IIT Campus · Room TBA</span>
            <div className="socials">
              <a className="social-btn" href="#" aria-label="Instagram"><Instagram size={16} /></a>
              <a className="social-btn" href="#" aria-label="LinkedIn"><Linkedin size={16} /></a>
              <a className="social-btn" href="mailto:embs.iit@example.edu" aria-label="Email"><Mail size={16} /></a>
            </div>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} IEEE EMBS Student Branch Chapter, IIT.</span>
        </div>
      </div>
    </footer>
  );
}
