import { memo } from "react";

const DotMotif = memo(function DotMotif({ className = "" }) {
  // Echoes the helix-of-dots mark in the EMBS logo.
  const dots = [0, 1, 2, 3, 4, 5];
  return (
    <div className={`dot-motif ${className}`} aria-hidden="true">
      {dots.map((i) => (
        <span key={i} className={i % 2 === 0 ? "dot dot-teal" : "dot dot-purple"} style={{ animationDelay: `${i * 0.18}s` }} />
      ))}
    </div>
  );
});

export default DotMotif;
