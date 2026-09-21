import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const outputDirectory = path.resolve(process.argv[2] || "out");
const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
const previousBasePath = "/Portfolio_nextjs";

if (!basePath || !/^\/[^/]+(?:\/[^/]+)*$/.test(basePath)) {
  throw new Error(
    "NEXT_PUBLIC_BASE_PATH must be a non-empty project path without a trailing slash",
  );
}

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectFiles(entryPath)));
    } else {
      files.push(entryPath);
    }
  }

  return files;
}

const files = await collectFiles(outputDirectory);
const htmlFiles = files.filter((filePath) => path.extname(filePath) === ".html");
if (htmlFiles.length === 0) {
  throw new Error(`No HTML files found in ${outputDirectory}`);
}

const htmlDocuments = await Promise.all(htmlFiles.map((filePath) => readFile(filePath, "utf8")));
const references = htmlDocuments.flatMap((html) =>
  [...html.matchAll(/\b(?:src|href)=["']([^"']+)["']/g)].map((match) => match[1]),
);
const assetReferences = references.filter(
  (reference) =>
    reference.includes("/_next/") ||
    reference.includes("/assets/") ||
    reference.endsWith("/favicon.ico"),
);
const expectedPrefix = `${basePath}/`;

for (const reference of assetReferences) {
  if (!reference.startsWith(expectedPrefix)) {
    throw new Error(`Asset reference does not use ${basePath}: ${reference}`);
  }
}

for (const requiredAsset of ["/_next/", "/assets/binary-portrait.png", "/favicon.ico"]) {
  if (!assetReferences.some((reference) => reference.startsWith(`${basePath}${requiredAsset}`))) {
    throw new Error(`Expected exported asset under ${basePath}${requiredAsset}`);
  }
}

const textExtensions = new Set([".css", ".html", ".js", ".json", ".map", ".txt", ".xml"]);
const exportedText = await Promise.all(
  files
    .filter((filePath) => textExtensions.has(path.extname(filePath)))
    .map((filePath) => readFile(filePath, "utf8")),
);

if (exportedText.some((contents) => contents.includes(previousBasePath))) {
  throw new Error(`Exported files still contain the previous base path ${previousBasePath}`);
}

console.log(`Verified ${htmlFiles.length} HTML file(s) use ${basePath} for exported assets.`);
