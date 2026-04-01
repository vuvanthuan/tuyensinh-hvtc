# Usage Guide

This guide explains how to use the `@acme/store` package and how to add new state features following the **Clean Architecture** pattern.

## Architecture Layers

Each feature in this package is divided into three layers:

### 1. Domain Layer (`domain/`)

Defines the state shape and business entities. This layer is pure TypeScript and has no dependencies on Redux or React.

```typescript
// sample.entity.ts
export interface SampleState {
  count: number;
  loading: boolean;
  message: string | null;
}
```

### 2. Infrastructure Layer (`infrastructure/`)

Contains the specific implementation of the state management (Redux slices). This is where the "how" of state management lives.

```typescript
// sample.slice.ts
import { createSlice } from "@reduxjs/toolkit";
const sampleSlice = createSlice({ ... });
export const { increment } = sampleSlice.actions;
export const sampleReducer = sampleSlice.reducer;
```

### 3. Presentation / Application Layer (`presentation/`)

Exposes custom hooks that the React components use. This layer acts as a **Facade**, hiding the infrastructure implementation.

```typescript
// use-sample.ts
export const useSample = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((s) => s.sample);
  return {
    ...state,
    increment: () => dispatch(increment()),
  };
};
```

---

## Adding a New Feature

To add a new feature (e.g., `user` for the `admin` app):

1. **Create the folder structure**:
   `src/apps/admin/user/{domain,infrastructure,presentation}`

2. **Define the entity** in `domain/user.entity.ts`.

3. **Implement the slice** in `infrastructure/user.slice.ts`.

4. **Expose the hook** in `presentation/use-user.ts`.

5. **Register the reducer** in `src/apps/admin/store.ts`:

   ```typescript
   const rootReducer = combineReducers({
     sample: sampleReducer,
     user: userReducer, // Add here
   });
   ```

6. **Export the hook** in `src/apps/admin/index.ts`:
   ```typescript
   export { useUser as useAdminUser } from "./user/presentation/use-user";
   ```

## Swapping Libraries

If you need to change from Redux to **Zustand**:

1. Keep the `domain/` layer as is.
2. Rewrite the `infrastructure/` layer using Zustand.
3. Update the `presentation/` hooks to pull state from Zustand instead of Redux.
4. **Result**: Your React app components remain unchanged because they only use the hooks.
