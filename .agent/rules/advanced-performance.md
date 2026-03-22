---
title: Advanced Performance & JS Patterns
impact: MEDIUM
impactDescription: Small optimizations that improve overall responsiveness and bundle size.
tags: react, javascript, performance
---

## Advanced Performance & JS Patterns

### 1. Early Exits

Use early exits to reduce nesting and make code more readable and easier for the AI to reason about.

**Incorrect:**
```typescript
function process(data) {
  if (data) {
    if (data.isValid) {
      // complex logic
    }
  }
}
```

**Correct:**
```typescript
function process(data) {
  if (!data || !data.isValid) return;
  // complex logic
}
```

### 2. Resource Hints

Use Next.js `ReactDOM.preconnect` or `prefetch` for critical third-party resources or future navigation.

```tsx
import { preconnect } from 'react-dom';

function MyComponent() {
  preconnect('https://api.external.com');
  return <div>...</div>;
}
```

### 3. Passive Event Listeners

For scroll or touch events, use passive listeners to improve scrolling performance.

```tsx
useEffect(() => {
  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
}, []);
```

### 4. SVG Optimization

Use simplified SVG paths and avoid unnecessary precision in coordinates to reduce DOM size.
Prefer icons from `@radix-ui/react-icons` or a dedicated icon package over inline custom SVGs where possible.
