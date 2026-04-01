# @acme/store

Shared state management for the Acme monorepo using **Clean Architecture** and **Redux Toolkit**.

## Core Features

- **Layered Architecture**: Decouples business logic from state management libraries.
- **App Isolation**: Separate stores for `admin`, `landing`, `lms`, and `web`.
- **Persistence**: Built-in support for `redux-persist`.
- **Library Agnostic**: React components interact with custom hooks, making it easy to swap Redux for Zustand/MobX later.

## Quick Start

### 1. Add Dependency

Add `@acme/store` to your application's `package.json`.

```json
{
  "dependencies": {
    "@acme/store": "workspace:*"
  }
}
```

### 2. Configure Provider

Wrap your app with the Redux `Provider` and `PersistGate` using the store specific to your app.

Example for the `Admin` app:

```tsx
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { adminPersistor, adminStore } from "@acme/store";

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={adminStore}>
      <PersistGate loading={null} persistor={adminPersistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
```

### 3. Use State Hooks

Use the exported presentation hooks to access state and actions.

```tsx
import { useAdminSample } from "@acme/store";

export function Counter() {
  const { count, increment, decrement } = useAdminSample();
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
```

## Documentation

- [Usage Guide](./USAGE.md) - How to add new features and follow Clean Architecture.
- [API Reference](./API_REFERENCE.md) - Detailed list of stores and hooks.
