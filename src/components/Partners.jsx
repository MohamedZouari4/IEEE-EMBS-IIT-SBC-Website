import { PARTNERS } from "../constants/content";
import { memo } from "react";

const Partners = memo(function Partners() {
  const track = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section id="partners" className="partners">
      <div className="wrap">
        <span className="eyebrow partners-eyebrow"><span className="blip" />IN PARTNERSHIP WITH</span>
      </div>
      <div className="partners-marquee">
        <div className="partners-track">
          {track.map((p, i) => (
            <div
              className="partner-logo"
              key={`${p.name}-${i}`}
              style={p.padding ? { padding: p.padding } : undefined}
            >
              <img src={p.logo} alt={p.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Partners;
