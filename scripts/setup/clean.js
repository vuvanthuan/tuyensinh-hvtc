#!/usr/bin/env node

/**
 * Asemis Technologies — Cross-platform clean script
 * Removes build artifacts and node_modules across the monorepo
 *
 * Usage: node scripts/settup/clean.js
 */

const fs = require("fs");
const path = require("path");

// __dirname is scripts/settup — go up two levels to reach the monorepo root
const root = path.resolve(__dirname, "../..");

const GREEN = "\x1b[32m";
const BLUE = "\x1b[34m";
const NC = "\x1b[0m";

console.log(`\n${BLUE}=== Asemis Technologies — Clean ===${NC}\n`);

const dirsToClean = ["node_modules", ".turbo"];

// Collect app-level directories
const appsDir = path.join(root, "apps");
if (fs.existsSync(appsDir)) {
  for (const app of fs.readdirSync(appsDir)) {
    const appPath = path.join(appsDir, app);
    if (fs.statSync(appPath).isDirectory()) {
      dirsToClean.push(
        path.join("apps", app, "node_modules"),
        path.join("apps", app, ".next"),
        path.join("apps", app, "dist"),
        path.join("apps", app, ".turbo"),
      );
    }
  }
}

// Collect package-level directories
const pkgsDir = path.join(root, "packages");
if (fs.existsSync(pkgsDir)) {
  for (const pkg of fs.readdirSync(pkgsDir)) {
    const pkgPath = path.join(pkgsDir, pkg);
    if (fs.statSync(pkgPath).isDirectory()) {
      dirsToClean.push(
        path.join("packages", pkg, "node_modules"),
        path.join("packages", pkg, "dist"),
        path.join("packages", pkg, ".turbo"),
      );
    }
  }
}

// Collect tooling-level directories
const toolingDir = path.join(root, "tooling");
if (fs.existsSync(toolingDir)) {
  for (const tool of fs.readdirSync(toolingDir)) {
    const toolPath = path.join(toolingDir, tool);
    if (fs.statSync(toolPath).isDirectory()) {
      dirsToClean.push(
        path.join("tooling", tool, "node_modules"),
        path.join("tooling", tool, "dist"),
      );
    }
  }
}

let cleaned = 0;
for (const dir of dirsToClean) {
  const fullPath = path.join(root, dir);
  if (fs.existsSync(fullPath)) {
    fs.rmSync(fullPath, { recursive: true, force: true });
    console.log(`  ${GREEN}removed${NC} ${dir}`);
    cleaned++;
  }
}

if (cleaned === 0) {
  console.log("  Nothing to clean.");
} else {
  console.log(`\n${GREEN}  Cleaned ${cleaned} directories.${NC}\n`);
}
