#!/bin/bash
# ============================================================
# Asemis Technologies — LMS Platform — Production Deployment
# ============================================================
# Usage: ./scripts/settup/deploy-prod.sh [pull|build]
#   pull  — Pull latest images from GHCR (default)
#   build — Build images locally from source
# ============================================================

set -euo pipefail

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Configuration — resolve monorepo root (scripts/settup is 2 levels deep)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
ENV_FILE="${REPO_ROOT}/.env.production"
COMPOSE_FILE="${REPO_ROOT}/docker-compose.prod.yml"
LOG_FILE="${REPO_ROOT}/deploy-$(date +%Y%m%d-%H%M%S).log"

# GitHub Container Registry org (update to match your GHCR org)
GHCR_ORG="asemis-tech"
IMAGE_PREFIX="ghcr.io/${GHCR_ORG}/lms-platform"

# Apps in this monorepo
APPS=(
  "lms"
  "admin"
  "web"
  "landing"
)

# ─── Helper Functions ─────────────────────────────────────────

log_info() {
    echo -e "${BLUE}[INFO]${NC} $*" | tee -a "$LOG_FILE"
}

log_success() {
    echo -e "${GREEN}[✓]${NC} $*" | tee -a "$LOG_FILE"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $*" | tee -a "$LOG_FILE"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $*" | tee -a "$LOG_FILE"
}

# ─── Pre-flight Checks ────────────────────────────────────────

check_preflight() {
    log_info "=== Running pre-flight checks ==="

    # Check Docker
    if ! command -v docker &> /dev/null; then
        log_error "Docker not found. Please install Docker."
        exit 1
    fi
    log_success "Docker is installed: $(docker --version)"

    # Check Docker Compose
    if ! command -v docker compose &> /dev/null; then
        log_error "Docker Compose v2 not found. Please install Docker Compose."
        exit 1
    fi
    log_success "Docker Compose is installed: $(docker compose version)"

    # Check pnpm
    if ! command -v pnpm &> /dev/null; then
        log_error "pnpm not found. Install: npm install -g pnpm@10"
        exit 1
    fi
    log_success "pnpm $(pnpm -v)"

    # Check .env.production
    if [ ! -f "$ENV_FILE" ]; then
        log_error "File ${ENV_FILE} not found."
        log_info "Create it from the example:"
        log_info "  cp ${REPO_ROOT}/.env.production.example ${ENV_FILE}"
        log_info "  vim ${ENV_FILE}  # Fill in real secrets"
        exit 1
    fi
    log_success "Environment file found: ${ENV_FILE}"

    # Check Docker daemon
    if ! docker info &> /dev/null; then
        log_error "Docker daemon is not running. Please start Docker."
        exit 1
    fi
    log_success "Docker daemon is running"

    # Check disk space (minimum 10GB)
    AVAILABLE_SPACE=$(df "${REPO_ROOT}" | awk 'NR==2 {print $4}')
    REQUIRED_SPACE=$((10 * 1024 * 1024)) # 10GB in KB
    if [ "$AVAILABLE_SPACE" -lt "$REQUIRED_SPACE" ]; then
        log_warn "Disk space is below 10GB. Available: $(numfmt --to=iec $((AVAILABLE_SPACE * 1024)))"
    else
        log_success "Disk space OK: $(numfmt --to=iec $((AVAILABLE_SPACE * 1024)))"
    fi

    log_success "All pre-flight checks passed"
}

# ─── Pull Images ───────────────────────────────────────────────

pull_images() {
    log_info "=== Pulling images from GHCR ==="

    IMAGE_TAG=$(grep "^IMAGE_TAG=" "$ENV_FILE" | cut -d'=' -f2 | tr -d ' ')
    if [ -z "$IMAGE_TAG" ]; then
        IMAGE_TAG="latest"
        log_warn "IMAGE_TAG not set, using default: $IMAGE_TAG"
    fi
    log_info "Using IMAGE_TAG: $IMAGE_TAG"

    for app in "${APPS[@]}"; do
        IMAGE="${IMAGE_PREFIX}-${app}:${IMAGE_TAG}"
        log_info "Pulling: $IMAGE"
        if docker pull "$IMAGE"; then
            log_success "Pulled: $IMAGE"
        else
            log_error "Failed to pull: $IMAGE"
            return 1
        fi
    done

    log_success "All images pulled successfully"
}

# ─── Build Images Locally ──────────────────────────────────────

build_images() {
    log_info "=== Building images locally ==="

    cd "$REPO_ROOT"

    for app in "${APPS[@]}"; do
        IMAGE="${IMAGE_PREFIX}-${app}:latest"
        DOCKERFILE="./apps/${app}/Dockerfile"

        if [ ! -f "$DOCKERFILE" ]; then
            log_warn "Dockerfile not found: $DOCKERFILE (skipping)"
            continue
        fi

        log_info "Building: $IMAGE"
        if docker build -f "$DOCKERFILE" -t "$IMAGE" .; then
            log_success "Built: $IMAGE"
        else
            log_error "Failed to build: $IMAGE"
            return 1
        fi
    done

    log_success "All images built successfully"
}

# ─── Start Services ────────────────────────────────────────────

start_services() {
    log_info "=== Starting services ==="

    cd "$REPO_ROOT"

    log_info "Starting Docker Compose with: $COMPOSE_FILE"
    if docker compose -f "$COMPOSE_FILE" --env-file "$ENV_FILE" up -d; then
        log_success "Services started successfully"
    else
        log_error "Failed to start Docker Compose"
        return 1
    fi
}

# ─── Health Check ─────────────────────────────────────────────

health_check() {
    log_info "=== Verifying service health ==="

    FAILED_SERVICES=()
    for app in "${APPS[@]}"; do
        CONTAINER="lms-platform-${app}"
        if docker ps --filter "name=$CONTAINER" --filter "status=running" | grep -q "$CONTAINER"; then
            log_success "Running: $CONTAINER"
        else
            log_warn "Not running: $CONTAINER"
            FAILED_SERVICES+=("$CONTAINER")
        fi
    done

    if [ ${#FAILED_SERVICES[@]} -gt 0 ]; then
        log_warn "Some services are not running: ${FAILED_SERVICES[*]}"
        log_info "Check logs: docker logs <container_name>"
    else
        log_success "All services are running"
    fi

    log_success "Health check completed"
}

# ─── Show Summary ─────────────────────────────────────────────

show_summary() {
    log_info ""
    log_info "╔════════════════════════════════════════════════════════════╗"
    log_info "║    Asemis Technologies — LMS Platform Deployment Summary  ║"
    log_info "╚════════════════════════════════════════════════════════════╝"
    log_info ""
    log_info "Repository:   ${REPO_ROOT}"
    log_info "Environment:  ${ENV_FILE}"
    log_info "Compose file: ${COMPOSE_FILE}"
    log_info "Log file:     ${LOG_FILE}"
    log_info ""
    log_info "Apps deployed:"
    for app in "${APPS[@]}"; do
        log_info "  - ${app}"
    done
    log_info ""
    log_info "Useful commands:"
    log_info "  View logs:     docker compose -f ${COMPOSE_FILE} logs -f"
    log_info "  Stop services: docker compose -f ${COMPOSE_FILE} down"
    log_info "  Status:        docker compose -f ${COMPOSE_FILE} ps"
    log_info ""
    log_info "Next steps:"
    log_info "  1. Verify all health checks passed"
    log_info "  2. Monitor logs: tail -f ${LOG_FILE}"
    log_info ""
}

# ─── Main ─────────────────────────────────────────────────────

main() {
    local strategy="${1:-pull}"

    log_info ""
    log_info "╔════════════════════════════════════════════════════════════╗"
    log_info "║    Asemis Technologies — LMS Platform — Production        ║"
    log_info "╚════════════════════════════════════════════════════════════╝"
    log_info ""
    log_info "Started: $(date '+%Y-%m-%d %H:%M:%S')"
    log_info "Strategy: $strategy"
    log_info ""

    check_preflight || exit 1

    if [ "$strategy" = "pull" ]; then
        pull_images || exit 1
    elif [ "$strategy" = "build" ]; then
        build_images || exit 1
    else
        log_error "Invalid strategy: $strategy (use: pull|build)"
        exit 1
    fi

    start_services || exit 1

    log_info "Waiting for services to stabilize (30s)..."
    sleep 30

    health_check
    show_summary

    log_info "Finished: $(date '+%Y-%m-%d %H:%M:%S')"
    log_success "Deployment completed successfully!"
}

# ─── Entry Point ──────────────────────────────────────────────

main "$@"
