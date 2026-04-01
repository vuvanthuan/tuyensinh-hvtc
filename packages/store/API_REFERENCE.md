# API Reference

Detailed documentation of the stores and hooks exported by `@acme/store`.

## Application Stores

The package exports separate stores and persistors for each app in the monorepo.

### Admin App

- `adminStore`: The Redux store instance for the Admin application.
- `adminPersistor`: The persistence object for the Admin application.

### Landing App

- `landingStore`: The Redux store instance for the Landing application.
- `landingPersistor`: The persistence object for the Landing application.

### LMS App

- `lmsStore`: The Redux store instance for the LMS application.
- `lmsPersistor`: The persistence object for the LMS application.

### Web App

- `webStore`: The Redux store instance for the Web application.
- `webPersistor`: The persistence object for the Web application.

---

## Custom Hooks (Presentation Layer)

Hooks are prefixed with the application name to avoid conflicts if an app ever needs to mount multiple stores (advanced usage).

### Admin Hooks

#### `useAdminSample()`

Returns the state and actions for the sample feature in the Admin app.

- **State**: `count`, `loading`, `message`.
- **Actions**: `increment()`, `decrement()`, `setMessage(string)`, `startLoading()`, `stopLoading()`, `resetState()`.

### Landing Hooks

#### `useLandingSample()`

Same as `useAdminSample` but scoped to the Landing app's state.

### LMS Hooks

#### `useLmsSample()`

Same as `useAdminSample` but scoped to the LMS app's state.

### Web Hooks

#### `useWebSample()`

Same as `useAdminSample` but scoped to the Web app's state.

---

## Core Utilities

### `createAppStore(options)`

Low-level factory used to create new stores with standardized middleware (Redux Persist, etc.).

- `reducer`: The combined root reducer.
- `persistKey`: String key for storage.
- `blacklist`: (Optional) Array of slice names that should NOT be persisted.

### `storage`

The cross-platform persistence storage engine (Web LocalStorage or Noop for SSR).
