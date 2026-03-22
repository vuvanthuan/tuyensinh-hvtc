---
title: UI Atomic Design
impact: HIGH
impactDescription: Ensures component scalability and clear responsibility boundaries.
tags: react, ui, atomic-design, shadcn
---

## UI Atomic Design

Components in `@acme/ui` must follow the Atomic Design pattern within the `packages/ui/src` directory. This ensures clear boundaries between basic elements, composite components, and complex organisms.

### Layer Definitions

- **Atoms**: Basic building blocks (e.g., `Button`, `Input`, `Label`). They are mostly wrappers around HTML elements or Radix primitives with custom styling.
- **Molecules**: Groups of atoms working together (e.g., `Card`, `Alert`, `Select`). They often have self-contained state or simple logic.
- **Organisms**: Complex components that may combine atoms, molecules, and other organisms (e.g., `Form`, `Dialog`, `Field`). They are often high-level features or complex layouts.

### Structure

Each component must reside in its own subdirectory:
`[layer]/[component-name]/`
- `index.tsx`: Main export point.
- `[component-name].tsx`: Implementation.
- `helper.ts` (optional): Tailwind variants (cva) or design system logic.

**Incorrect (flat or mixed structure):**

```typescript
// packages/ui/src/Button.tsx
// packages/ui/src/Form.tsx
```

**Correct (Atomic folder structure):**

```text
packages/ui/src/
  atoms/
    button/
      index.tsx
      button.tsx
      helper.ts
  organisms/
    form/
      index.tsx
      form.tsx
```

### Export Convention

All components must be re-exported from the top-level `packages/ui/src/index.ts`.

```typescript
// packages/ui/src/index.ts
export * from "./atoms/button";
export * from "./organisms/form";
```

Reference: [Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com/chapter-2/)
