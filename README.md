# Front-end Platform

> [!NOTE]
> This is the official repository for the front-end platform developed by **Asemis Technologies**.

## Team

**Asemis Technologies**

## About

This project is a monorepo built to power the front-end platform. It uses [Turborepo](https://turborepo.com) and contains various apps and packages:

```text
.github
  └─ workflows
        └─ CI with pnpm cache setup
.vscode
  └─ Recommended extensions and settings for VSCode users
apps
  ├─ admin
  │   └─ Admin Web Dashboard
  ├─ landing
  │   └─ Landing Page
  ├─ lms
  │   └─ Main LMS Web App
  ├─ web
  │   └─ General Web App
packages
  ├─ api-client
  │   └─ Shared API Client
  ├─ api-contract
  │   └─ API Contracts and Schemas
  ├─ api-mock
  │   └─ Mock API for Development
  ├─ config
  │   └─ Shared configurations
  ├─ constants
  │   └─ Shared constants
  ├─ hooks
  │   └─ Shared React hooks
  ├─ store
  │   └─ State management
  ├─ ui
  │   └─ Shared UI component library
  ├─ utils
  │   └─ Shared utilities
  └─ validators
      └─ Data validation schemas
tooling
  ├─ eslint
  │   └─ Shared ESLint presets
  ├─ prettier
  │   └─ Shared Prettier configuration
  └─ tailwind
      └─ Shared Tailwind theme and design tokens
```

## Quick Start

To get the project running locally, follow these steps:

### 1. Setup dependencies

```bash
# Install dependencies
pnpm install

# Configure environment variables
cp .env.example .env
```

### 2. Run the Development Server

You can start the development server for all apps or specific ones:

```bash
# Run all apps in development mode
pnpm dev

# Or run a specific app (e.g., lms)
pnpm --filter @acme/lms dev
```

## Adding UI Components

Run the `ui-add` script to add a new UI component using the interactive CLI:

```bash
pnpm ui-add
```

## Architecture & Standards

Please refer to the documentation inside the `.agent/rules` or `AGENTS.md` for our global coding standards, including:

- UI Atomic Design
- Store Clean Architecture
- Performance Patterns & Data Fetching
- Styling & Design System tokens

## License

All rights reserved by **Asemis Technologies**.
