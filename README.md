# LMS Platform

> **Asemis Technologies** — Nền tảng quản lý học tập hiện đại / Modern Learning Management Platform

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15+-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![pnpm](https://img.shields.io/badge/pnpm-10.x-F69220?logo=pnpm)](https://pnpm.io/)
[![Turborepo](https://img.shields.io/badge/Turborepo-2.x-EF4444?logo=turborepo)](https://turbo.build/)

Monorepo được xây dựng bằng **Turborepo** + **pnpm workspaces**, bao gồm các ứng dụng và thư viện dùng chung cho nền tảng LMS của Asemis Technologies.

---

## Cấu trúc dự án / Project Structure

```
lms-platform/
├── apps/
│   ├── lms/        — Main LMS Web App (Next.js) :3002
│   ├── admin/      — Admin Dashboard (Next.js)  :3001
│   ├── web/        — General Web App (Next.js)  :3003
│   └── landing/    — Landing Page (Next.js)     :3000
├── packages/
│   ├── ui/         — Shared UI Component Library (@acme/ui)
│   ├── api-client/ — Shared API Client (@acme/api-client)
│   ├── api-contract/ — API Contracts & Schemas (@acme/api-contract)
│   ├── api-mock/   — Mock API for Development (@acme/api-mock)
│   ├── config/     — Shared configurations (@acme/config)
│   ├── constants/  — Shared constants (@acme/constants)
│   ├── hooks/      — Shared React hooks (@acme/hooks)
│   ├── store/      — State management (@acme/store)
│   ├── utils/      — Shared utilities (@acme/utils)
│   └── validators/ — Data validation schemas (@acme/validators)
├── tooling/
│   ├── eslint/     — Shared ESLint presets
│   ├── prettier/   — Shared Prettier configuration
│   └── tailwind/   — Shared Tailwind theme & design tokens
├── scripts/
│   └── settup/     — Setup & deployment scripts
└── Makefile        — Root-level developer shortcuts
```

---

## Yêu cầu / Prerequisites

| Công cụ                 | Phiên bản tối thiểu | Link                                                                                                              |
| ----------------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Node.js**             | >= 22.x             | [nodejs.org](https://nodejs.org/)                                                                                 |
| **pnpm**                | >= 10.x             | `npm install -g pnpm@10`                                                                                          |
| **Git**                 | >= 2.x              | [git-scm.com](https://git-scm.com/)                                                                               |
| **make**                | built-in            | macOS/Linux: có sẵn — Windows: [winget install GnuWin32.Make](https://gnuwin32.sourceforge.net/packages/make.htm) |
| **Docker** _(tuỳ chọn)_ | >= 24.x             | [docker.com](https://www.docker.com/products/docker-desktop/)                                                     |

---

## Cài đặt / Setup

### ⚡ Cách 1: Tự động (Khuyến nghị) / Automated Setup (Recommended)

Chạy một lệnh duy nhất để cài đặt toàn bộ: dependencies, `.env`, Docker services và database.

```bash
# Clone repo
git clone https://github.com/asemis-tech/lms-platform.git
cd lms-platform

# Cài đặt toàn bộ tự động
make setup
```

Script sẽ tự động thực hiện:

1. ✅ Kiểm tra Node.js >= 22 và pnpm >= 10
2. ✅ Cài đặt tất cả dependencies (`pnpm install`)
3. ✅ Tạo file `.env` từ `.env.example`
4. ✅ Khởi động Docker services (`docker compose up -d`)
5. ✅ Generate & push database schema

Sau khi setup xong, chạy tất cả apps:

```bash
make dev
```

---

### 🔧 Cách 2: Thủ công / Manual Setup

Nếu bạn muốn kiểm soát từng bước hoặc không dùng Docker:

#### Bước 1 — Clone & cài đặt dependencies

```bash
git clone https://github.com/asemis-tech/lms-platform.git
cd lms-platform
pnpm install
```

#### Bước 2 — Thiết lập biến môi trường

```bash
cp .env.example .env
# Mở .env và điền các giá trị cần thiết (DATABASE_URL, API keys, v.v.)
```

#### Bước 3 — Khởi động Docker services _(tuỳ chọn)_

```bash
docker compose up -d
# Chờ khoảng 5 giây để services sẵn sàng
```

#### Bước 4 — Thiết lập database

```bash
pnpm db:push
```

#### Bước 5 — Khởi động development server

```bash
# Chạy TẤT CẢ apps từ root (khuyến nghị)
make dev

# Hoặc chạy từng app riêng lẻ (cd vào từng app)
cd apps/lms     && pnpm dev   # :3002
cd apps/admin   && pnpm dev   # :3001
cd apps/web     && pnpm dev   # :3003
cd apps/landing && pnpm dev   # :3000
```

---

## Lệnh thường dùng / Common Commands

### Root (chạy từ thư mục gốc)

| Lệnh             | Mô tả                                           |
| ---------------- | ----------------------------------------------- |
| `make setup`     | 🚀 Setup toàn bộ tự động (lần đầu)              |
| `make dev`       | 🖥️ Chạy **tất cả** apps song song               |
| `make build`     | 📦 Build tất cả apps và packages                |
| `make lint`      | 🔍 Lint toàn bộ codebase                        |
| `make lint-fix`  | 🔧 Lint & tự động sửa lỗi                       |
| `make typecheck` | ✅ Kiểm tra TypeScript                          |
| `make format`    | 🎨 Format code với Prettier                     |
| `make clean`     | 🗑 Xoá build artifacts (git clean)              |
| `make clean-all` | 💣 Xoá tất cả node_modules, .next, dist, .turbo |
| `make icons`     | Tạo icon từ Figma                               |
| `make tokens`    | Build design tokens từ Figma                    |
| `make db-push`   | Push database schema                            |
| `make db-studio` | Mở Prisma Studio                                |
| `make help`      | Xem tất cả lệnh                                 |

### Từng app riêng lẻ (cd vào app trước)

| Lệnh                          | App          | Port    |
| ----------------------------- | ------------ | ------- |
| `cd apps/lms && pnpm dev`     | LMS          | `:3002` |
| `cd apps/admin && pnpm dev`   | Admin        | `:3001` |
| `cd apps/web && pnpm dev`     | Web          | `:3003` |
| `cd apps/landing && pnpm dev` | Landing Page | `:3000` |

---

## Thêm UI Components / Adding UI Components

```bash
pnpm ui-add
```

---

## Kiến trúc & Tiêu chuẩn / Architecture & Standards

Tham khảo tài liệu trong `.agent/rules/` hoặc `AGENTS.md` để biết tiêu chuẩn code của dự án:

- **UI Atomic Design** — Atoms → Molecules → Organisms
- **Store Clean Architecture** — Domain → Infrastructure → Presentation
- **Performance Patterns** — Parallel data fetching, no waterfalls
- **Styling** — Tailwind CSS v4 với design tokens từ Figma

---

## License

All rights reserved by **Asemis Technologies**.
