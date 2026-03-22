# AGENTS.md - Global Coding Standards & Best Practices

This document defines the official coding standards for the **lms-platform** monorepo. It is optimized for AI agents to ensure high-quality, consistent, and performant code across all packages and apps.

## Table of Contents

1. [Architecture & Structure](#architecture-&-structure)
   - [UI Atomic Design](#ui-atomic-design)
   - [Store Clean Architecture](#store-clean-architecture)
2. [Performance & Patterns](#performance-&-patterns)
   - [Eliminating Waterfalls](#eliminating-waterfalls)
   - [Next.js Server Actions & Forms](#nextjs-server-actions-&-forms)
   - [Advanced Performance & JS Patterns](#advanced-performance-&-js-patterns)
   - [Derived State Optimization](#derived-state-optimization)
   - [Barrel Import Optimization](#barrel-import-optimization)
3. [Styling & Design System](#styling-&-design-system)

---

## Architecture & Structure

### UI Atomic Design

- **Atoms**: Basic building blocks (Button, Input).
- **Molecules**: Groups of atoms (Alert, Card).
- **Organisms**: Complex features (Form, Dialog).
- **Rule**: Each component must have its own directory with `index.tsx`. Re-export all via `packages/ui/src/index.ts`.
- **Detail**: See [.agent/rules/ui-atomic-design.md](.agent/rules/ui-atomic-design.md)

### Store Clean Architecture

- **Layers**: Domain (Entities) -> Infrastructure (Slices) -> Presentation (Hooks).
- **Rule**: Components MUST NOT use Redux/Zustand directly. Use facade hooks from the Presentation layer.
- **Detail**: See [.agent/rules/store-clean-architecture.md](.agent/rules/store-clean-architecture.md)

---

## Performance & Patterns

### Eliminating Waterfalls

- **Rule**: Fetch data in parallel using `Promise.all()` or separate `<Suspense>` boundaries. Avoid sequential `await` in Server Components.
- **Detail**: See [.agent/rules/async-parallel.md](.agent/rules/async-parallel.md)

### Next.js Server Actions & Forms

- **Rule**: Always validate input with `zod` on the server. Use `useFormStatus` or `useTransition` for loading states.
- **Detail**: See [.agent/rules/nextjs-server-actions.md](.agent/rules/nextjs-server-actions.md)

### Advanced Performance & JS Patterns

- **Rule**: Use early exits, passive listeners, and resource hints for high-performance React code.
- **Detail**: See [.agent/rules/advanced-performance.md](.agent/rules/advanced-performance.md)

### Derived State Optimization

- **Rule**: Calculate derived values during render or with `useMemo`. DO NOT use `useEffect` to sync state based on props.
- **Detail**: See [.agent/rules/react-derived-state.md](.agent/rules/react-derived-state.md)

### Barrel Import Optimization

- **Rule**: Import heavy components directly (e.g., `@acme/ui/atoms/icons`) to improve bundle size and tree-shaking.
- **Detail**: See [.agent/rules/bundle-barrel-imports.md](.agent/rules/bundle-barrel-imports.md)

---

## Styling & Design System

- **Rule**: Use Tailwind CSS with theme variables (`primary`, `secondary`, `tertiary`).
- **Rule**: Use the `cn` utility for class merging.
- **Detail**: See [.agent/rules/styling-conventions.md](.agent/rules/styling-conventions.md)

---

> [!IMPORTANT]
> All new code must adhere to these standards. If an AI agent deviates from these patterns, guide them back using the specific rule files in `.agent/rules/`.
