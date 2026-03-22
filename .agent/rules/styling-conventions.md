---
title: Styling Conventions
impact: MEDIUM
impactDescription: Ensures consistency and design system adherence.
tags: tailwind, css, design-system
---

## Styling Conventions

The project uses Tailwind CSS with CSS variables defined in `@acme/ui/tooling/tailwind/theme.css`.

### Design System Colors

Always use theme variables instead of hardcoded colors:

- `primary`
- `secondary`
- `tertiary`
- `accent`
- `muted`
- `destructive`

### Utility Classes

Use the `cn` (tailwind-merge) utility for all conditional class names.

**Incorrect (Template strings or array joins):**

```tsx
<div className={`p-4 ${error ? "bg-red-500" : "bg-blue-500"}`} />
```

**Correct (Using `cn`):**

```tsx
import { cn } from "@acme/ui";

<div className={cn("bg-primary p-4", error && "bg-destructive")} />;
```

### Variants (CVA)

Use `class-variance-authority` (CVA) for components with multiple variants. Define them in a separate `helper.ts` file if they are complex.

```typescript
// helper.ts
export const buttonVariants = cva("...", {
  variants: {
    variant: {
      primary: "bg-primary text-primary-foreground",
      tertiary: "bg-tertiary text-tertiary-foreground",
    },
  },
});
```
