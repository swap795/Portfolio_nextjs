"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "../content";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Work" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const hasOpenedRef = useRef(false);

  useEffect(() => {
    if (!open) {
      if (hasOpenedRef.current) menuButtonRef.current?.focus();
      return;
    }

    hasOpenedRef.current = true;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="wordmark" href="#home" onClick={() => setOpen(false)}>
          <span className="wordmark-mark" aria-hidden="true">ST</span>
          <span>{site.name}</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
        </nav>

        <div className="header-actions">
          <a className="header-social" href={site.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <button
            className="menu-button"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen((current) => !current)}
            ref={menuButtonRef}
          >
            <span aria-hidden="true" /><span aria-hidden="true" />
          </button>
        </div>
      </div>

      <nav className={`mobile-nav${open ? " is-open" : ""}`} id="mobile-navigation" aria-label="Mobile navigation" aria-hidden={!open}>
        <div className="container mobile-nav-inner">
          {links.map((link) => (
            <a href={link.href} key={link.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
              <span>{link.label}</span><span aria-hidden="true">↘</span>
            </a>
          ))}
          <a href={site.links.github} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            <span>GitHub</span><span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
