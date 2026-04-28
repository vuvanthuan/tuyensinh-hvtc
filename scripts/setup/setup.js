#!/usr/bin/env node

/**
 * Asemis Technologies — Cross-platform Development Setup Script
 * Works on macOS and Linux (pnpm monorepo with Turborepo)
 *
 * Usage: node scripts/settup/setup.js
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Colors (ANSI codes)
const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const BLUE = "\x1b[34m";
const NC = "\x1b[0m";

function log(msg) {
  console.log(`${BLUE}ℹ ${msg}${NC}`);
}
function success(msg) {
  console.log(`${GREEN}✓ ${msg}${NC}`);
}
function warn(msg) {
  console.log(`${YELLOW}! ${msg}${NC}`);
}
function error(msg) {
  console.error(`${RED}✗ ${msg}${NC}`);
}

function run(cmd, options = {}) {
  try {
    execSync(cmd, { stdio: "inherit", ...options });
    return true;
  } catch {
    return false;
  }
}

function getCommandOutput(cmd) {
  try {
    return execSync(cmd, { encoding: "utf8" }).trim();
  } catch {
    return null;
  }
}

function commandExists(cmd) {
  return getCommandOutput(`command -v ${cmd}`) !== null;
}

// ─── Main ───────────────────────────────────────────────────

console.log(`\n${BLUE}=== Asemis Technologies — LMS Platform Setup ===${NC}\n`);
console.log(
  `${BLUE}Platform: ${process.platform} | Node: ${process.version}${NC}\n`,
);

// Ensure we run from the monorepo root
const rootDir = path.resolve(__dirname, "../..");
process.chdir(rootDir);

let hasWarnings = false;

// 1. Check Node.js version (>= 22)
log("Checking Node.js version...");
const nodeMajor = parseInt(process.versions.node.split(".")[0], 10);
if (nodeMajor < 22) {
  error(`Node.js >= 22.x is required (current: ${process.version})`);
  error("Download: https://nodejs.org/");
  process.exit(1);
}
success(`Node.js ${process.version}`);

// 2. Check pnpm
log("Checking pnpm...");
const pnpmVersion = getCommandOutput("pnpm -v");
if (!pnpmVersion) {
  error("pnpm is not installed.");
  error("Install it: npm install -g pnpm@10");
  process.exit(1);
}
const pnpmMajor = parseInt(pnpmVersion.split(".")[0], 10);
if (pnpmMajor < 10) {
  error(`pnpm >= 10.x is required (current: ${pnpmVersion})`);
  error("Upgrade: npm install -g pnpm@10");
  process.exit(1);
}
success(`pnpm ${pnpmVersion}`);

// 3. Check Git
log("Checking Git...");
if (commandExists("git")) {
  const gitVersion = getCommandOutput("git --version");
  success(gitVersion || "Git detected");
} else {
  warn("Git not found — version control will not work");
  hasWarnings = true;
}

// 4. Check Docker (optional)
log("Checking Docker...");
if (commandExists("docker")) {
  success("Docker detected");
} else {
  warn("Docker not found — database services will need manual setup");
  warn(
    "Download Docker Desktop: https://www.docker.com/products/docker-desktop/",
  );
  hasWarnings = true;
}

// 5. Install dependencies
log("Installing dependencies with pnpm (this may take a few minutes)...");
if (!run("pnpm install")) {
  error("Failed to install dependencies");
  error("Try running manually: pnpm install");
  process.exit(1);
}
success("Dependencies installed");

// 6. Setup .env file
log("Setting up environment configuration...");
const envPath = path.join(rootDir, ".env");
const envExamplePath = path.join(rootDir, ".env.example");

if (!fs.existsSync(envPath)) {
  if (fs.existsSync(envExamplePath)) {
    fs.copyFileSync(envExamplePath, envPath);
    success(".env created from .env.example");
    warn(
      "Please edit .env and fill in the required secrets before running the app.",
    );
  } else {
    warn(
      ".env.example not found — create .env manually before starting the app.",
    );
    hasWarnings = true;
  }
} else {
  log(".env already exists, skipping");
}

// 7. Docker services & database (if Docker is available)
if (commandExists("docker")) {
  log("Starting Docker services...");
  if (run("docker compose up -d")) {
    success("Docker services started");

    // Wait for services
    log("Waiting for services to be ready (5s)...");
    const start = Date.now();
    while (Date.now() - start < 5000) {
      /* busy wait */
    }
    success("Services ready");

    // 8. Database setup
    log("Generating database schema...");
    if (run("pnpm turbo db:generate")) {
      success("Database schema generated");
    } else {
      warn("Database schema generation failed — run later: pnpm db:generate");
      hasWarnings = true;
    }

    log("Pushing database schema...");
    if (run("pnpm turbo db:push")) {
      success("Database schema pushed");
    } else {
      warn("Database push failed — run later: pnpm db:push");
      hasWarnings = true;
    }
  } else {
    warn("Docker services failed to start — database setup skipped");
    warn("Start manually: docker compose up -d");
    hasWarnings = true;
  }
} else {
  warn("Skipping Docker/database setup (Docker not installed)");
}

// Done
console.log("");
console.log(`${GREEN}========================================${NC}`);
if (hasWarnings) {
  console.log(`${YELLOW}  Setup completed with warnings${NC}`);
} else {
  console.log(`${GREEN}  Setup completed successfully!${NC}`);
}
console.log(`${GREEN}========================================${NC}`);
console.log("");
console.log(`${YELLOW}Next steps:${NC}`);
console.log("");
console.log("  1. Start the development server (all apps):");
console.log(`     ${BLUE}pnpm dev${NC}`);
console.log("");
console.log("  2. Start a specific app (e.g. lms):");
console.log(`     ${BLUE}pnpm --filter @acme/lms dev${NC}`);
console.log("");
console.log("  3. Build all packages:");
console.log(`     ${BLUE}pnpm build${NC}`);
console.log("");
console.log("  4. Generate icons from Figma:");
console.log(`     ${BLUE}pnpm generate:icons${NC}`);
console.log("");
console.log(`${BLUE}For more information, see README.md${NC}`);
console.log("");
