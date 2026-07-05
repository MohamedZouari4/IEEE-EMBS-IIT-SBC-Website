import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "../constants/content";
import { useEffect, memo } from "react";

const Navigation = memo(function Navigation({ scrolled, menuOpen, setMenuOpen, logoWhite }) {
  const closeMenu = () => setMenuOpen(false);

  // Close menu on scroll
  useEffect(() => {
    if (menuOpen) {
      const handleScroll = () => closeMenu();
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [menuOpen]);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#top" className="brand" aria-label="IEEE EMBS Home">
          <img src={logoWhite} alt="IEEE EMBS logo" loading="lazy" />
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
        <button 
          className="burger" 
          onClick={() => setMenuOpen((v) => !v)} 
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
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
});

export default Navigation;
