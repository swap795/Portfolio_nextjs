import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const page = fs.readFileSync(new URL("../app/page.tsx", import.meta.url), "utf8");
const styles = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
const reveal = fs.readFileSync(new URL("../app/components/reveal.tsx", import.meta.url), "utf8");
const signal = fs.readFileSync(new URL("../app/components/signal-graphic.tsx", import.meta.url), "utf8");

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
  assert.match(reveal, /IntersectionObserver/);
  assert.match(reveal, /threshold: 0\.15/);
  assert.match(reveal, /unobserve\(element\)/);
  assert.doesNotMatch(reveal, /addEventListener\(["']scroll/);
  assert.match(styles, /@keyframes hero-enter[\s\S]*opacity: 0[\s\S]*transform: translateY\(18px\)/);
  assert.doesNotMatch(styles, /portrait-pulse|infinite/);
  assert.match(styles, /\.signal-line-primary[\s\S]*stroke-dasharray: 1[\s\S]*stroke-dashoffset: 1/);
  assert.match(styles, /@keyframes signal-draw[\s\S]*stroke-dashoffset: 0/);
  assert.match(styles, /\.signal-line-primary \{ stroke-dashoffset: 0; \}/);
  assert.match(styles, /signal-line-primary[\s\S]*animation: signal-draw 2\.1s/);
  assert.match(signal, /IntersectionObserver/);
  assert.match(signal, /threshold: \[0, 0\.35\]/);
  assert.match(signal, /!entry\.isIntersecting/);
  assert.match(signal, /entry\.intersectionRatio >= 0\.35/);
  assert.match(signal, /setDrawKey/);
  assert.doesNotMatch(signal, /addEventListener\(["']scroll/);
  assert.match(signal, /prefers-reduced-motion: reduce/);
  assert.match(styles, /\.reveal[\s\S]*transition: opacity \.48s[\s\S]*transform \.48s/);
  assert.match(styles, /translateY\(-3px\)/);
  assert.match(styles, /scale\(1\.015\)/);
  assert.match(styles, /opacity \.22s ease-out, transform \.22s ease-out/);
  assert.match(styles, /prefers-reduced-motion: reduce/);
  assert.match(styles, /scroll-behavior: auto/);
});
