import { useState } from "react";

/**
 * Fast-loading image:
 * - native lazy loading + async decode (browser defers offscreen images)
 * - fixed aspect ratio box so the page never jumps as images pop in
 * - soft skeleton pulse shown until the real image has loaded
 */
export default function LazyImage({ src, alt, className = "", aspect = "aspect-square", eager = false }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-primary/10 ${aspect} ${className}`}>
      {!loaded && <div className="absolute inset-0 animate-pulse bg-primary/15" />}
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
