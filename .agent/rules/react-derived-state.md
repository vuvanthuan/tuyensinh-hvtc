---
title: Derived State Optimization
impact: MEDIUM-HIGH
impactDescription: Prevents unnecessary effects and re-renders.
tags: react, performance, hooks
---

## Derived State Optimization

Avoid using `useEffect` to sync state. Instead, calculate derived values directly during rendering or use `useMemo` if the calculation is expensive.

**Incorrect (Using useEffect to sync state):**

```tsx
const [fullName, setFullName] = useState("");

useEffect(() => {
  setFullName(`${firstName} ${lastName}`);
}, [firstName, lastName]);
```

**Correct (Calculating during render):**

```tsx
const fullName = `${firstName} ${lastName}`;
```

**Correct (Using useMemo for expensive tasks):**

```tsx
const filteredList = useMemo(() => {
  return list.filter(item => item.isActive);
}, [list]);
```
