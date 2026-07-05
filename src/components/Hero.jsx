import { ArrowRight } from "lucide-react";
import EkgTrace from "./EkgTrace";

export default function Hero({ heroIn, logoColor }) {
  return (
    <header id="top" className="hero">
      <div className="wrap">
        <div className={`hero-content ${heroIn ? "in" : ""}`}>
          <span className="eyebrow"><span className="blip" />IEEE EMBS STUDENT BRANCH CHAPTER · IIT</span>
          <h1>
            Engineering has<br />a <span className="accent">pulse.</span>
          </h1>
          <p className="lede">
            We're the IEEE Engineering in Medicine &amp; Biology Society chapter at IIT — students
            building the instruments, signals, and software behind tomorrow's health technology.
          </p>
          <div className="hero-actions">
            <a href="#join" className="btn btn-primary">Join the chapter <ArrowRight size={16} /></a>
            <a href="#events" className="btn btn-ghost">See upcoming events</a>
          </div>
        </div>
      </div>
      <div className="hero-strip">
        <div className="wrap hero-strip-inner">
          <img src={logoColor} alt="IEEE EMBS logo" className="hero-strip-logo" />
          <div className="hero-strip-ekg"><EkgTrace height={40} speed={10} opacity={0.85} /></div>
        </div>
      </div>
    </header>
  );
}
