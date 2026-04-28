# ============================================================
# Asemis Technologies — LMS Platform
# Makefile — Root-level developer shortcuts
#
# Chạy từ root / Run from monorepo root:
#   make setup   — Cài đặt toàn bộ lần đầu
#   make dev     — Chạy tất cả apps (all 4 apps in parallel)
#
# Chạy từng app / Run a single app (cd into it first):
#   cd apps/lms && pnpm dev
#   cd apps/admin && pnpm dev
# ============================================================

.PHONY: help setup dev build lint lint-fix typecheck format clean clean-all \
        icons tokens db-push db-studio

# Default target
help: ## Hiển thị danh sách lệnh / Show available commands
	@echo ""
	@echo "  Asemis Technologies — LMS Platform"
	@echo ""
	@awk 'BEGIN {FS = ":.*##"} /^[a-zA-Z_-]+:.*##/ { printf "  \033[36m%-16s\033[0m %s\n", $$1, $$2 }' $(MAKEFILE_LIST)
	@echo ""

# ─── Setup ──────────────────────────────────────────────────

setup: ## Setup toàn bộ tự động (lần đầu)
	pnpm project:setup

# ─── Development ────────────────────────────────────────────

dev: ## Chạy TẤT CẢ apps ở chế độ development (root only)
	pnpm turbo watch dev --filter=@acme/lms --filter=@acme/admin --filter=@acme/web --filter=@acme/landing --continue --concurrency=10

# ─── Build ──────────────────────────────────────────────────

build: ## Build tất cả apps và packages
	pnpm turbo run build

# ─── Quality ────────────────────────────────────────────────

lint: ## Lint toàn bộ codebase
	pnpm turbo run lint --continue -- --cache --cache-location .cache/.eslintcache

lint-fix: ## Lint & tự động sửa lỗi
	pnpm turbo run lint --continue -- --fix --cache --cache-location .cache/.eslintcache

typecheck: ## Kiểm tra TypeScript
	pnpm turbo run typecheck

format: ## Format code với Prettier
	pnpm turbo run format --continue -- --write --cache --cache-location .cache/.prettiercache

# ─── Clean ──────────────────────────────────────────────────

clean: ## Xoá build artifacts (git clean)
	git clean -xdf node_modules

clean-all: ## Xoá TẤT CẢ node_modules, .next, dist, .turbo
	node scripts/settup/clean.js

# ─── Assets ─────────────────────────────────────────────────

icons: ## Tạo icon từ Figma
	pnpm generate:icons

tokens: ## Build design tokens từ Figma
	pnpm tokens:build

# ─── Database ───────────────────────────────────────────────

db-push: ## Push database schema
	pnpm turbo -F @acme/db push

db-studio: ## Mở Prisma Studio
	pnpm turbo -F @acme/db studio
