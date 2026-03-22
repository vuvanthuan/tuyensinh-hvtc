---
title: Barrel Import Optimization
impact: HIGH
impactDescription: Prevents unnecessary code from being bundled.
tags: bundle, performance, tree-shaking
---

## Barrel Import Optimization

Avoid using "barrel" files (`index.ts` that export everything) for large component libraries or utility sets when importing into pages. This can sometimes lead to large bundle sizes if tree-shaking is not perfect or if the barrel file itself is heavy.

**Incorrect (Importing from a massive barrel):**

```typescript
import { HeavyIcon, LargeChart } from "@acme/ui";
```

**Correct (Direct imports for heavy components):**

```typescript
import { HeavyIcon } from "@acme/ui/atoms/icons";
import { LargeChart } from "@acme/ui/molecules/charts";
```

> [!NOTE]
> For simple components (Atoms), importing from the root of `@acme/ui` is generally fine, but for heavy third-party wrappers or complex organisms, use direct paths.
