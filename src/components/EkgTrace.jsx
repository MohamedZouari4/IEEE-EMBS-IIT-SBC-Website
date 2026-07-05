import { memo } from "react";

function buildEkgPath() {
  const unit =
    "l 60,0 l 14,0 l 7,-14 l 10,26 l 8,-46 l 8,52 l 6,-18 l 8,0 l 60,0 ";
  let d = "M -40,50 ";
  for (let i = 0; i < 6; i++) d += unit;
  return d;
}

const EKG_UNIT_PATH = buildEkgPath();

const EkgTrace = memo(function EkgTrace({ height = 90, opacity = 1, speed = 14, className = "" }) {
  return (
    <div className={`ekg-wrap ${className}`} style={{ height }} aria-hidden="true">
      <svg
        className="ekg-svg"
        style={{ animationDuration: `${speed}s` }}
        viewBox="0 0 872 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="ekgGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00629B" />
            <stop offset="50%" stopColor="#2DD4C7" />
            <stop offset="100%" stopColor="#7B2982" />
          </linearGradient>
        </defs>
        <g opacity={opacity}>
          <path d={EKG_UNIT_PATH} fill="none" stroke="url(#ekgGrad)" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
          <path d={EKG_UNIT_PATH} transform="translate(872,0)" fill="none" stroke="url(#ekgGrad)" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
});

export default EkgTrace;
