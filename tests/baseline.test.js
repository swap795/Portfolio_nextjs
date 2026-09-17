import assert from "node:assert/strict";
import { test } from "node:test";

import aboutMeStringsHandler from "../pages/api/strings/aboutMeStrings.js";
import commonStringsHandler from "../pages/api/strings/commonStrings.js";
import homeStringsHandler from "../pages/api/strings/homeStrings.js";
import stringsHandler from "../pages/api/strings/strings.js";
import timelineStringsHandler from "../pages/api/strings/timelineStrings.js";
import timelineDataHandler from "../pages/api/data/timelineData.js";
import moreAboutMeHandler from "../pages/api/data/moreAboutMe.js";
import {
  aboutMeStringBundle,
  commonStrings,
  homeStrings,
  strings,
  timelineStrings,
} from "../app/src/util/strings.js";
import {
  moreAboutMe,
  timelineData,
} from "../app/src/util/portfolioData.js";
import { extractMonthAndYear, formatDate } from "../app/src/util/utils.js";

function captureResponse(handler) {
  let statusCode;
  let body;
  const response = {
    status(code) {
      statusCode = code;
      return response;
    },
    json(value) {
      body = value;
    },
  };

  handler({}, response);

  return { statusCode, body };
}

test("API handlers return the shared object contracts", () => {
  const routes = [
    [stringsHandler, strings],
    [homeStringsHandler, homeStrings],
    [aboutMeStringsHandler, aboutMeStringBundle],
    [commonStringsHandler, commonStrings],
    [timelineStringsHandler, timelineStrings],
    [timelineDataHandler, timelineData],
    [moreAboutMeHandler, moreAboutMe],
  ];

  for (const [handler, expectedBody] of routes) {
    assert.deepEqual(captureResponse(handler), {
      statusCode: 200,
      body: expectedBody,
    });
  }
});

test("portfolio data has stable identifiers and placeholder-only project media", () => {
  const projects = moreAboutMe.projects;
  const timelineEvents = Object.values(timelineData);

  assert.deepEqual(
    projects.map((project) => project.id),
    ["1", "2", "3", "4"]
  );
  assert.equal(timelineEvents.length, 13);
  assert.deepEqual(
    projects.map((project) => project.media.type),
    ["placeholder", "placeholder", "placeholder", "placeholder"]
  );
  assert.equal(
    projects.some((project) => "videoUrl" in project),
    false
  );
  assert.equal(JSON.stringify(moreAboutMe).includes("localhost"), false);
});

test("date helpers produce a stable month-year label", () => {
  assert.deepEqual(
    extractMonthAndYear("Wed Sep 16 2026 13:06:12 GMT-0600"),
    ["Sep", "2026"]
  );
  assert.equal(formatDate("2026-09-16T00:00:00.000Z"), "Sep 2026");
  assert.equal(formatDate("not a date"), "");
});
