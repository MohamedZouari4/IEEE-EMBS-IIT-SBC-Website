import { GOALS } from "../constants/content";
import { memo } from "react";

const About = memo(function About() {
  return (
    <section id="about">
      <div className="wrap about-grid">
        <div className="about-copy">
          <span className="eyebrow" style={{ marginBottom: 16 }}><span className="blip" />OUR GOAL</span>
          <h2>Biomedical engineering, hands-on.</h2>
          <p>
            Classes teach you the theory. This chapter is where you put it to work — turning
            circuits, code, and biology into projects that actually run, alongside people who
            geek out about the same things you do.
          </p>
          <p>
            As part of IEEE EMBS, we plug into the largest biomedical engineering society in the
            world: its journals, conferences, and student competitions are open to every member here.
          </p>
        </div>
        <div className="goal-list">
          {GOALS.map((g) => (
            <div className="goal-card" key={g.title}>
              <div className="goal-icon"><g.icon size={20} color="#fff" /></div>
              <div>
                <h3>{g.title}</h3>
                <p>{g.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default About;
