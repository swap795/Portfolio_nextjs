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
  assert.equal(proofPoints.length, 3);
  assert.equal(experiences[0].employer, "Verisk");
  assert.equal(experiences[0].progression?.[0].role, "Senior Software Development Engineer in Test");
  assert.equal(featuredProject.title, "Glove Controlled Car");
  assert.equal(about.title, "Reliability is a product feature.");
});
