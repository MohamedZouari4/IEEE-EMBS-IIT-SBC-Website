import { useState, useEffect, useRef } from "react";

export default function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);
  const errorRef = useRef(null);

  useEffect(() => {
    const handleError = (error) => {
      console.error("Error caught by boundary:", error);
      setHasError(true);
    };

    window.addEventListener("error", handleError);
    return () => window.removeEventListener("error", handleError);
  }, []);

  if (hasError) {
    return (
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#0A0E1A",
        color: "#F2F0F5",
        fontFamily: "Inter, sans-serif",
        flexDirection: "column",
        gap: "20px",
        textAlign: "center",
        padding: "20px",
      }}>
        <h1 style={{ fontSize: "32px" }}>Something went wrong</h1>
        <p style={{ color: "#98A0B7" }}>
          An unexpected error occurred. Please refresh the page.
        </p>
        <button
          onClick={() => window.location.reload()}
          style={{
            padding: "10px 20px",
            backgroundColor: "#7B2982",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          Reload Page
        </button>
      </div>
    );
  }

  return children;
}
