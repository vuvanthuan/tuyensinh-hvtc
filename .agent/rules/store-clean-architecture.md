---
title: Store Clean Architecture
impact: CRITICAL
impactDescription: Decouples state management library (Redux/Zustand) from the UI.
tags: redux, store, architecture, clean-architecture
---

## Store Clean Architecture

The `@acme/store` package follows a Layered and Clean Architecture to make it easy to swap state management libraries (e.g., Redux to Zustand) without affecting the UI components.

### Layer Responsibilities

1. **Domain Layer**: Defines interfaces, entities, and state shapes. Independent of any library.
2. **Infrastructure Layer**: Implementation details using a library (e.g., Redux Toolkit slices, reducers).
3. **Presentation / Application Layer**: Custom hooks that act as a facade. Components ONLY consume these hooks.

### Structure

Group state by application inside `packages/store/src/apps/`.

```text
packages/store/src/apps/[app-name]/[feature]/
  domain/         // Interfaces
  infrastructure/ // Redux Slices
  presentation/   // Custom Hooks (Facade)
```

**Incorrect (Directly using dispatch/selector in components):**

```typescript
// app-component.tsx
import { useDispatch, useSelector } from "react-redux";
import { increment } from "@acme/store";

const count = useSelector((state) => state.counter.value);
```

**Correct (Using Facade Hooks):**

```typescript
// packages/store/src/apps/lms/counter/presentation/use-counter.ts
export const useCounter = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector(state => state.counter.value);
  return { value, increment: () => dispatch(increment()) };
};

// app-component.tsx
import { useCounter } from "@acme/store";
const { value, increment } = useCounter();
```

> [!IMPORTANT]
> Never export Redux-specific types or actions directly to the UI layer. Always wrap them in hooks.
