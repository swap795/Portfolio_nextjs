"use client";

import { useEffect, useRef, useState } from "react";

export function SignalGraphic() {
  const regionRef = useRef<HTMLDivElement>(null);
  const hasExitedRef = useRef(false);
  const [drawKey, setDrawKey] = useState(0);

  useEffect(() => {
    const region = regionRef.current;
    if (!region || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) {
        hasExitedRef.current = true;
        return;
      }

      if (entry.intersectionRatio >= 0.35 && hasExitedRef.current) {
        hasExitedRef.current = false;
        setDrawKey((current) => current + 1);
      }
    }, { threshold: [0, 0.35] });

    observer.observe(region);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="signal-motion-region" ref={regionRef}>
      <svg className="signal-graphic" viewBox="0 0 620 430" role="img" aria-label="A signal path moving through build, verify, and ship">
        <defs>
          <linearGradient id="signal-fade" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2057d4" />
            <stop offset="1" stopColor="#e46a2a" />
          </linearGradient>
        </defs>
        <path className="signal-line signal-line-muted" d="M-15 335 C92 335 97 120 214 120 S319 292 407 292 S492 67 635 67" />
        <path className="signal-line signal-line-primary" pathLength="1" key={drawKey} d="M-15 318 C90 318 104 92 217 92 S310 266 412 266 S502 44 635 44" />
        <g className="signal-nodes">
          <circle cx="217" cy="92" r="13" /><circle cx="412" cy="266" r="13" /><circle cx="544" cy="76" r="13" />
        </g>
        <g className="signal-labels">
          <text x="36" y="377">INPUT</text><text x="188" y="55">BUILD</text><text x="383" y="319">VERIFY</text><text x="520" y="40">SHIP</text>
        </g>
      </svg>
    </div>
  );
}
