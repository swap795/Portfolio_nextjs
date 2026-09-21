"use client";

import { useRef, useState } from "react";
import type { Experience } from "../content";

type ExperienceTabsProps = { experiences: Experience[] };

export function ExperienceTabs({ experiences }: ExperienceTabsProps) {
  const [activeId, setActiveId] = useState(experiences[0]?.id ?? "");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeIndex = Math.max(0, experiences.findIndex((item) => item.id === activeId));
  const active = experiences[activeIndex];

  const moveTo = (index: number) => {
    const nextIndex = (index + experiences.length) % experiences.length;
    const next = experiences[nextIndex];
    setActiveId(next.id);
    tabRefs.current[nextIndex]?.focus();
  };

  if (!active) return null;

  return (
    <div className="experience-tabs">
      <div className="experience-tablist" role="tablist" aria-label="Experience by employer">
        {experiences.map((item, index) => {
          const selected = item.id === active.id;
          const tabLabel = item.id === "church" ? "Church" : item.employer;
          const tabPeriod = item.id === "verisk" ? "2024 - now" : item.id === "paytronix" ? "2022 - 2023" : "2021 - 2022";
          return (
            <button
              className={`experience-tab${selected ? " is-active" : ""}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`panel-${item.id}`}
              id={`tab-${item.id}`}
              tabIndex={selected ? 0 : -1}
              key={item.id}
              ref={(element) => { tabRefs.current[index] = element; }}
              onClick={() => setActiveId(item.id)}
              onKeyDown={(event) => {
                if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                  event.preventDefault(); moveTo(index + 1);
                }
                if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                  event.preventDefault(); moveTo(index - 1);
                }
                if (event.key === "Home") { event.preventDefault(); moveTo(0); }
                if (event.key === "End") { event.preventDefault(); moveTo(experiences.length - 1); }
              }}
            >
              <span>{tabLabel}</span>
              <small>{tabPeriod}</small>
            </button>
          );
        })}
      </div>

      <section className="experience-panel" role="tabpanel" id={`panel-${active.id}`} aria-labelledby={`tab-${active.id}`} tabIndex={0}>
        <div className="experience-panel-head">
          <div>
            <p className="eyebrow eyebrow-light">{active.period}</p>
            <h3>{active.role}</h3>
            <p className="experience-company">@ {active.employer}</p>
          </div>
          <span className="panel-index" aria-hidden="true">0{activeIndex + 1}</span>
        </div>
        <p className="experience-summary">{active.summary}</p>
        {active.progression && (
          <div className="progression" aria-label={`${active.employer} role progression`}>
            {active.progression.map((step, index) => (
              <div className="progression-step" key={`${step.period}-${step.role}`}>
                <span className="progression-marker" aria-hidden="true">{index === 0 ? "●" : "○"}</span>
                <div><strong>{step.period}</strong><span>{step.role}</span></div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
