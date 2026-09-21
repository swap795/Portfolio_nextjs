import assert from "node:assert/strict";
import test from "node:test";
import { about, experiences, featuredProject, proofPoints, site } from "../app/content.ts";

test("home content keeps the approved public boundaries", () => {
  assert.equal(site.links.github, "https://github.com/swap795");
  assert.equal(site.links.linkedin, "https://www.linkedin.com/in/swapnilthapa95");
  assert.equal("availability" in site, false);
  assert.equal("location" in site, false);
  assert.equal("email" in site, false);
});

test("the home vertical slice has proof, current progression, and one featured project", () => {
  assert.equal(proofPoints.length, 4);
  assert.equal(experiences[0].employer, "Verisk");
  assert.equal(experiences[0].progression?.[0].role, "Senior Software Development Engineer in Test");
  assert.equal(featuredProject.title, "Glove Controlled Car");
  assert.equal(about.title, "Reliability is a product feature.");
});

test("experience copy stays concise while preserving approved proof", () => {
  assert.equal(experiences.length, 3);
  assert.match(experiences[0].summary, /10 million execution logs/);
  assert.match(experiences[1].summary, /43%/);
  assert.match(experiences[1].summary, /\$10K/);
  assert.match(experiences[2].summary, /millions of users/);
  assert.equal(experiences[2].progression?.length, 2);
  assert.equal(experiences.every((experience) => !("highlights" in experience)), true);
});

test("non-experience copy stays intentionally minimal", () => {
  assert.equal(site.intro, "I build reliable software, automation, and delivery systems.");
  assert.equal(about.body, "I connect product engineering, automation, and delivery.");
  assert.equal(about.principle, "Setbacks are feedback. Learn, adjust, repeat.");
  assert.equal(featuredProject.description, "A gesture-controlled RC car that turns hand movement into motion.");
  assert.deepEqual(
    featuredProject.story.map((item) => item.value),
    [
      "Hand gestures control the car.",
      "MPU-6050 + dual HC-05 Bluetooth.",
      "A working C and Arduino system.",
    ],
  );
});
