import { ChevronRight } from "lucide-react";
import { STEPS } from "../constants/content";
import DotMotif from "./DotMotif";

export default function Join() {
  return (
    <section id="join">
      <div className="join">
        <div className="join-inner">
          <div>
            <DotMotif className="join-dots" />
            <h2 style={{ marginTop: 14 }}>Three steps in, no experience required.</h2>
            <p className="lede">
              Whether you've never touched a biosignal or you're already halfway through a
              capstone project — there's a place for you here.
            </p>
            <a
              href="https://www.embs.org/membership/students/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Join the chapter <ChevronRight size={16} />
            </a>
          </div>
          <div className="steps">
            {STEPS.map((s) => (
              <div className="step" key={s.n}>
                <span className="n">{s.n}</span>
                <div>
                  <b>{s.title}</b>
                  <p>{s.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
