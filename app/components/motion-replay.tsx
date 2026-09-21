"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type EntryReplayOptions = {
  initiallyVisible?: boolean;
  enterThreshold?: number;
  exitThreshold?: number;
};

export function replayThresholds(exitThreshold: number, enterThreshold: number) {
  return [...new Set([0, exitThreshold, enterThreshold])].sort((a, b) => a - b);
}

export function useEntryReplay<T extends HTMLElement>({
  initiallyVisible = false,
  enterThreshold = 0.15,
  exitThreshold = 0.05,
}: EntryReplayOptions = {}) {
  const elementRef = useRef<T>(null);
  const hasEnteredRef = useRef(initiallyVisible);
  const hasMeaningfullyExitedRef = useRef(false);
  const [isActive, setIsActive] = useState(initiallyVisible);
  const [replayKey, setReplayKey] = useState(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      const fallbackId = window.setTimeout(() => setIsActive(true), 0);
      return () => window.clearTimeout(fallbackId);
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry) return;

      if (entry.intersectionRatio <= exitThreshold) {
        if (hasEnteredRef.current) {
          hasMeaningfullyExitedRef.current = true;
          setIsActive(false);
        }
        return;
      }

      if (entry.intersectionRatio < enterThreshold || (!hasMeaningfullyExitedRef.current && hasEnteredRef.current)) return;

      hasEnteredRef.current = true;
      hasMeaningfullyExitedRef.current = false;
      setReplayKey((current) => current + 1);
      setIsActive(true);
    }, { threshold: replayThresholds(exitThreshold, enterThreshold) });

    observer.observe(element);
    return () => observer.disconnect();
  }, [enterThreshold, exitThreshold]);

  return { elementRef, isActive, replayKey };
}

export function ReplayOnEntry({
  children,
  className = "",
  activeClassName = "is-active",
  initiallyVisible = false,
  enterThreshold = 0.15,
  exitThreshold = 0.05,
}: {
  children: ReactNode;
  className?: string;
  activeClassName?: string;
  initiallyVisible?: boolean;
  enterThreshold?: number;
  exitThreshold?: number;
}) {
  const { elementRef, isActive, replayKey } = useEntryReplay<HTMLDivElement>({
    initiallyVisible,
    enterThreshold,
    exitThreshold,
  });

  return <div ref={elementRef} className={`${className}${isActive ? ` ${activeClassName}` : ""}`} data-replay-key={replayKey}>{children}</div>;
}
