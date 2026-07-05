import { BOARD } from "../constants/content";
import { memo } from "react";

const Team = memo(function Team() {
  return (
    <section id="team">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow"><span className="blip" />THE BOARD</span>
          <h2 style={{ marginTop: 16 }}>Run by students, for students.</h2>
          <p>Six people keeping the chapter's lights on. Say hi at any event.</p>
        </div>
        <div className="team-grid">
          {BOARD.map((m) => (
            <div className="member" key={m.name}>
              <div className="member-photo" aria-label={m.name}>
                {m.photo ? (
                  <img src={m.photo} alt={m.name} loading="lazy" />
                ) : (
                  m.initials
                )}
              </div>
              <div className="member-info">
                <b>{m.name}</b>
                <span>{m.role.toUpperCase()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Team;
