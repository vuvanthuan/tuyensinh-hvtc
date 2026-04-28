#!/bin/bash
# ============================================================
# Asemis Technologies — LMS Platform Setup Script
# ============================================================
# Usage:
#   chmod +x scripts/settup/setup.sh
#   ./scripts/settup/setup.sh
# ============================================================

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Move to monorepo root (scripts/settup is 2 levels deep)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR/../.."

echo -e "${BLUE}=== Asemis Technologies — LMS Platform Setup ===${NC}\n"

# ─── Helper functions ──────────────────────────────────────

error_exit() {
  echo -e "${RED}✗ $1${NC}"
  exit 1
}

success() {
  echo -e "${GREEN}✓ $1${NC}"
}

info() {
  echo -e "${BLUE}ℹ $1${NC}"
}

warn() {
  echo -e "${YELLOW}! $1${NC}"
}

HAS_WARNINGS=false

# ─── 1. Check Node.js version (>= 22) ─────────────────────

info "Checking Node.js version..."
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 22 ]; then
  error_exit "Node.js >= 22.x is required (current: $(node -v)). Download: https://nodejs.org/"
fi
success "Node.js $(node -v) detected"

# ─── 2. Check pnpm ────────────────────────────────────────

info "Checking pnpm..."
if ! command -v pnpm &> /dev/null; then
  error_exit "pnpm is not installed. Install it: npm install -g pnpm@10"
fi
PNPM_MAJOR=$(pnpm -v | cut -d'.' -f1)
if [ "$PNPM_MAJOR" -lt 10 ]; then
  error_exit "pnpm >= 10.x is required (current: $(pnpm -v)). Upgrade: npm install -g pnpm@10"
fi
success "pnpm $(pnpm -v) detected"

# ─── 3. Check Git ─────────────────────────────────────────

info "Checking Git..."
if ! command -v git &> /dev/null; then
  warn "Git not found — version control will not work"
  HAS_WARNINGS=true
else
  success "$(git --version)"
fi

# ─── 4. Check Docker (optional) ───────────────────────────

info "Checking Docker..."
if ! command -v docker &> /dev/null; then
  warn "Docker not found — database services will need manual setup"
  warn "Download Docker Desktop: https://www.docker.com/products/docker-desktop/"
  HAS_WARNINGS=true
else
  success "Docker detected"
fi

# ─── 5. Install dependencies ──────────────────────────────

info "Installing dependencies with pnpm..."
pnpm install
success "Dependencies installed"

# ─── 6. Setup .env ────────────────────────────────────────

info "Setting up environment configuration..."
if [ ! -f .env ]; then
  if [ -f .env.example ]; then
    cp .env.example .env
    success ".env created from .env.example"
    warn "Please edit .env and fill in the required secrets before starting the app."
  else
    warn ".env.example not found — create .env manually before starting the app."
    HAS_WARNINGS=true
  fi
else
  info ".env already exists, skipping"
fi

# ─── 7. Docker services & database ────────────────────────

if command -v docker &> /dev/null; then
  info "Starting Docker services..."
  if docker compose up -d; then
    success "Docker services started"

    info "Waiting for services to be ready (5s)..."
    sleep 5
    success "Services ready"

    info "Generating database schema..."
    if pnpm turbo db:generate; then
      success "Database schema generated"
    else
      warn "Database schema generation failed — run later: pnpm db:generate"
      HAS_WARNINGS=true
    fi

    info "Pushing database schema..."
    if pnpm turbo db:push; then
      success "Database schema pushed"
    else
      warn "Database push failed — run later: pnpm db:push"
      HAS_WARNINGS=true
    fi
  else
    warn "Docker services failed to start — database setup skipped"
    warn "Start manually: docker compose up -d"
    HAS_WARNINGS=true
  fi
else
  warn "Skipping Docker/database setup (Docker not installed)"
fi

# ─── Done ─────────────────────────────────────────────────

echo ""
echo -e "${GREEN}========================================${NC}"
if [ "$HAS_WARNINGS" = true ]; then
  echo -e "${YELLOW}  Setup completed with warnings${NC}"
else
  echo -e "${GREEN}  Setup completed successfully!${NC}"
fi
echo -e "${GREEN}========================================${NC}"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo "  1. Start the development server (all apps):"
echo -e "     ${BLUE}pnpm dev${NC}"
echo ""
echo "  2. Start a specific app (e.g. lms):"
echo -e "     ${BLUE}pnpm --filter @acme/lms dev${NC}"
echo ""
echo "  3. Build all packages:"
echo -e "     ${BLUE}pnpm build${NC}"
echo ""
echo "  4. Generate icons from Figma:"
echo -e "     ${BLUE}pnpm generate:icons${NC}"
echo ""
echo -e "${BLUE}For more information, see README.md${NC}"
echo ""
