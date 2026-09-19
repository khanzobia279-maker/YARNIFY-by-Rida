import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 420;

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      className={`back-to-top ${isVisible ? "back-to-top-visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
      aria-hidden={isVisible ? undefined : "true"}
      tabIndex={isVisible ? 0 : -1}
    >
      <span className="back-to-top-icon" aria-hidden="true">↑</span>
      <span className="back-to-top-label">Top</span>
    </button>
  );
}
