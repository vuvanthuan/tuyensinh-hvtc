#!/bin/bash
# ============================================================
# Asemis Technologies — LMS Platform — GitHub Setup Script
# ============================================================
# Script này sẽ:
# 1. Xóa .git con trong các apps (gom thành 1 monorepo)
# 2. Khởi tạo git repo chính (nếu chưa có)
# 3. Tạo GitHub repo trên org asemis-tech (nếu chưa có)
# 4. Commit và push toàn bộ
#
# Usage:
#   cd <monorepo-root>
#   chmod +x scripts/settup/setup-github.sh
#   ./scripts/settup/setup-github.sh
# ============================================================

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Resolve monorepo root
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR/../.."

echo -e "${BLUE}╔══════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║  Asemis Technologies — LMS Platform GitHub Setup ║${NC}"
echo -e "${BLUE}╚══════════════════════════════════════════════════╝${NC}"
echo ""

# ─── Configuration ──────────────────────────────────────────
ORG="asemis-tech"
REPO="lms-platform"

# ─── Step 0: Check prerequisites ────────────────────────────
echo -e "${YELLOW}[0/6] Checking prerequisites...${NC}"

if ! command -v git &> /dev/null; then
    echo -e "${RED}❌ git is not installed${NC}"
    exit 1
fi

if ! command -v gh &> /dev/null; then
    echo -e "${RED}❌ GitHub CLI (gh) is not installed${NC}"
    echo "   Install: brew install gh"
    echo "   Then:    gh auth login"
    exit 1
fi

if ! gh auth status &> /dev/null; then
    echo -e "${RED}❌ Not logged in to GitHub CLI${NC}"
    echo "   Run: gh auth login"
    exit 1
fi

if ! command -v pnpm &> /dev/null; then
    echo -e "${RED}❌ pnpm is not installed${NC}"
    echo "   Install: npm install -g pnpm@10"
    exit 1
fi

echo -e "${GREEN}✅ Prerequisites OK${NC}"

# ─── Step 1: Remove nested .git directories ─────────────────
echo ""
echo -e "${YELLOW}[1/6] Removing nested .git directories (monorepo cleanup)...${NC}"

NESTED_GITS=$(find apps packages tooling -maxdepth 2 -name ".git" -type d 2>/dev/null || true)
if [ -n "$NESTED_GITS" ]; then
    for gitdir in $NESTED_GITS; do
        echo "   Removing $gitdir"
        rm -rf "$gitdir"
    done
    echo -e "${GREEN}✅ Removed nested .git directories${NC}"
else
    echo -e "${GREEN}✅ No nested .git directories found${NC}"
fi

# ─── Step 2: Initialize git repo ────────────────────────────
echo ""
echo -e "${YELLOW}[2/6] Initializing git repo...${NC}"

if [ ! -d ".git" ]; then
    git init
    git checkout -b main
    echo -e "${GREEN}✅ Git repo initialized on 'main' branch${NC}"
else
    echo -e "${GREEN}✅ Git repo already exists${NC}"
fi

# ─── Step 3: Create GitHub organization repo ────────────────
echo ""
echo -e "${YELLOW}[3/6] Setting up GitHub repo ${ORG}/${REPO}...${NC}"

if gh repo view "$ORG/$REPO" &> /dev/null; then
    echo -e "${YELLOW}   Repo $ORG/$REPO already exists${NC}"
else
    gh repo create "$ORG/$REPO" \
        --private \
        --description "Asemis Technologies — LMS Platform (monorepo)" \
        --homepage "https://github.com/${ORG}" \
        || {
            echo -e "${RED}❌ Failed to create repo. Create it manually at: https://github.com/new${NC}"
            echo "   Repo name: $REPO"
            echo "   Then re-run this script."
            exit 1
        }
    echo -e "${GREEN}✅ Repo created: https://github.com/$ORG/$REPO${NC}"
fi

# ─── Step 4: Stage all files ────────────────────────────────
echo ""
echo -e "${YELLOW}[4/6] Staging all files...${NC}"

git add -A

STAGED=$(git diff --cached --stat | tail -1)
echo -e "${GREEN}✅ Staged: $STAGED${NC}"

# ─── Step 5: Commit ─────────────────────────────────────────
echo ""
echo -e "${YELLOW}[5/6] Creating initial commit...${NC}"

git commit -m "$(cat <<'EOF'
chore: initial Asemis Technologies LMS Platform setup

Monorepo powered by Turborepo + pnpm.

## Apps
- lms     — Main LMS Web App (Next.js)
- admin   — Admin Web Dashboard (Next.js)
- web     — General Web App (Next.js)
- landing — Landing Page (Next.js)

## Packages
- @acme/ui            — Shared UI component library
- @acme/api-client    — Shared API Client
- @acme/api-contract  — API Contracts and Schemas
- @acme/constants     — Shared constants
- @acme/hooks         — Shared React hooks
- @acme/store         — State management
- @acme/utils         — Shared utilities
- @acme/validators    — Data validation schemas

## Tech Stack
Next.js, React, TypeScript, Tailwind CSS v4,
Turborepo, pnpm workspaces, Figma icon pipeline
EOF
)"

echo -e "${GREEN}✅ Committed${NC}"

# ─── Step 6: Push ───────────────────────────────────────────
echo ""
echo -e "${YELLOW}[6/6] Pushing to GitHub...${NC}"

# Add remote if not already present
if ! git remote | grep -q "^origin$"; then
    git remote add origin "https://github.com/$ORG/$REPO.git"
fi

git push -u origin main

echo ""
echo -e "${GREEN}╔══════════════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║   ✅ COMPLETE                                        ║${NC}"
echo -e "${GREEN}╠══════════════════════════════════════════════════════╣${NC}"
echo -e "${GREEN}║   Repo: https://github.com/$ORG/$REPO    ║${NC}"
echo -e "${GREEN}╚══════════════════════════════════════════════════════╝${NC}"
