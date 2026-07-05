import EkgTrace from "./EkgTrace";
import { EVENTS } from "../constants/content";
import { memo } from "react";

const Events = memo(function Events() {
  const next = EVENTS[0];

  return (
    <section id="events">
      <div className="wrap">
        <div className="sec-head" style={{ margin: "0 auto 44px", textAlign: "center" }}>
          <span className="eyebrow"><span className="blip" />UPCOMING EVENTS</span>
          <h2 style={{ marginTop: 16 }}>{next.title}</h2>
          <p style={{ margin: "12px auto 0" }}>
            A joint session with {next.partners}. Details on time and location coming soon —
            follow the chapter so you don't miss the update.
          </p>
        </div>

        <div className="monitor">
          <div className="monitor-status monitor-status--live"><span className="rec-dot" />Confirmed</div>
          <h3>{next.date}</h3>
          <p>{next.title}</p>
          <EkgTrace height={70} speed={9} />
          <div className="event-slots">
            <div className="event-slot"><span className="mono">DATE</span><b>{next.date}</b>Save the date.</div>
            <div className="event-slot"><span className="mono">FORMAT</span><b>TBA</b>Time &amp; location to be announced.</div>
            <div className="event-slot"><span className="mono">HOSTED WITH</span><b>{next.partners}</b>A joint chapter collaboration.</div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Events;
