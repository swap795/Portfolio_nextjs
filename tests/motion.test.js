import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const page = fs.readFileSync(new URL("../app/page.tsx", import.meta.url), "utf8");
const styles = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
const reveal = fs.readFileSync(new URL("../app/components/reveal.tsx", import.meta.url), "utf8");
const signal = fs.readFileSync(new URL("../app/components/signal-graphic.tsx", import.meta.url), "utf8");
const motionReplay = fs.readFileSync(new URL("../app/components/motion-replay.tsx", import.meta.url), "utf8");

test("home hierarchy keeps one clear action and uses progressive disclosure for secondary context", () => {
  assert.match(page, /View selected work/);
  assert.doesNotMatch(page, /site\.descriptor/);
  assert.doesNotMatch(page, /Build\. Verify\. Ship\./);
  assert.match(page, /More context/);
  assert.match(page, /Build details/);
  assert.match(page, /Let&apos;s talk\./);
  assert.doesNotMatch(page, /Signal &amp; Substance/);
});

test("motion contract is bounded, observable, and reduced-motion safe", () => {
  assert.match(motionReplay, /IntersectionObserver/);
  assert.match(motionReplay, /replayThresholds\(exitThreshold, enterThreshold\)/);
  assert.match(motionReplay, /intersectionRatio <= exitThreshold/);
  assert.match(motionReplay, /intersectionRatio < enterThreshold/);
  assert.match(motionReplay, /hasMeaningfullyExitedRef/);
  assert.match(motionReplay, /setReplayKey/);
  assert.match(motionReplay, /prefers-reduced-motion: reduce/);
  assert.match(reveal, /ReplayOnEntry/);
  assert.doesNotMatch(reveal, /unobserve\(element\)/);
  assert.doesNotMatch(reveal, /addEventListener\(["']scroll/);
  assert.match(page, /ReplayOnEntry className="container hero-grid" initiallyVisible/);
  assert.match(styles, /\.hero-grid[\s\S]*opacity: 0[\s\S]*transform: translateY\(18px\)/);
  assert.match(styles, /\.hero-grid\.is-active[\s\S]*animation: hero-enter \.48s/);
  assert.match(styles, /\.hero-grid\.is-active \.hero-art[\s\S]*animation: hero-enter \.48s[\s\S]*80ms/);
  assert.match(styles, /@keyframes hero-enter[\s\S]*opacity: 0[\s\S]*transform: translateY\(18px\)/);
  assert.doesNotMatch(styles, /portrait-pulse|infinite/);
  assert.match(styles, /\.signal-line-primary[\s\S]*stroke-dasharray: 1[\s\S]*stroke-dashoffset: 1/);
  assert.match(styles, /@keyframes signal-draw[\s\S]*stroke-dashoffset: 0/);
  assert.match(styles, /\.signal-line-primary \{ stroke-dashoffset: 0; \}/);
  assert.match(styles, /signal-line-primary\.is-drawing[\s\S]*animation: signal-draw 2\.1s/);
  assert.match(signal, /useEntryReplay/);
  assert.match(signal, /enterThreshold: 0\.35/);
  assert.match(signal, /exitThreshold: 0\.05/);
  assert.match(signal, /key=\{drawKey\}/);
  assert.doesNotMatch(signal, /addEventListener\(["']scroll/);
  assert.match(styles, /\.reveal[\s\S]*transition: opacity \.48s[\s\S]*transform \.48s/);
  assert.match(styles, /translateY\(-3px\)/);
  assert.match(styles, /scale\(1\.015\)/);
  assert.match(styles, /opacity \.22s ease-out, transform \.22s ease-out/);
  assert.match(styles, /prefers-reduced-motion: reduce/);
  assert.match(styles, /scroll-behavior: auto/);
  assert.match(styles, /\.hero-grid, \.hero-grid\.is-active, \.hero-grid \.hero-art[\s\S]*animation: none !important/);
});

test("re-entry thresholds preserve a hysteresis gap", async () => {
  const { replayThresholds } = await import("../app/components/motion-replay.tsx");
  assert.deepEqual(replayThresholds(0.05, 0.15), [0, 0.05, 0.15]);
});
