import { ArrowUp } from "lucide-react";
import { memo } from "react";

const BackToTop = memo(function BackToTop({ showTop }) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      className={`to-top ${showTop ? "show" : ""}`}
      onClick={scrollTop}
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp size={18} />
    </button>
  );
});

export default BackToTop;
