import { useState, useEffect } from "react";
import { LOGO_COLOR, LOGO_WHITE } from "./constants/assets";
import Navigation from "./components/NavigationOptimized";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Team from "./components/Team";
import Join from "./components/Join";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import EkgTrace from "./components/EkgTrace";
import ErrorBoundary from "./components/ErrorBoundary";
import "./styles/globals.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroIn, setHeroIn] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      setShowTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll);
    const t = setTimeout(() => setHeroIn(true), 80);

    const loader = document.getElementById("app-loader");
    let removeLoader;
    const t2 = setTimeout(() => {
      if (!loader) return;
      loader.classList.add("app-loader-hide");
      removeLoader = setTimeout(() => loader.remove(), 400);
    }, 500);

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(t);
      clearTimeout(t2);
      clearTimeout(removeLoader);
    };
  }, []);

  return (
    <ErrorBoundary>
      <div className="page">
        <div className="bg-field" />

        <Navigation 
          scrolled={scrolled} 
          menuOpen={menuOpen} 
          setMenuOpen={setMenuOpen}
          logoWhite="https://res.cloudinary.com/p9t0mxll/image/upload/v1783210345/Nobglogo_xt2iq6.png"
        />

        <Hero heroIn={heroIn} logoColor={LOGO_COLOR} />

        <About />

        <div className="wrap"><EkgTrace height={40} speed={16} opacity={0.35} /></div>

        <Events />

        <Team />

        <Join />

        <Partners />

        <Footer logoWhite={LOGO_WHITE} />

        <BackToTop showTop={showTop} />
      </div>
    </ErrorBoundary>
  );
}
