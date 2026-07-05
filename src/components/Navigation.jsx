import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "../constants/content";

export default function Navigation({ scrolled, menuOpen, setMenuOpen, logoWhite }) {
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#top" className="brand">
          <img src="https://res.cloudinary.com/p9t0mxll/image/upload/v1783210345/Nobglogo_xt2iq6.png" alt="IEEE EMBS logo" />
          <div className="brand-text">
            <b>IEEE EMBS</b>
            <span>IIT STUDENT BRANCH</span>
          </div>
        </a>
        <div className="nav-links">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
          <a href="#join" className="nav-cta">
            Join us <ArrowRight size={14} />
          </a>
        </div>
        <button className="burger" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={closeMenu}>{l.label}</a>
        ))}
        <a href="#join" className="nav-cta" onClick={closeMenu}>
          Join us <ArrowRight size={14} />
        </a>
      </div>
    </nav>
  );
}
