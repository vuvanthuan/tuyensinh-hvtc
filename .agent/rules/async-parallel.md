---
title: Eliminating Waterfalls
impact: CRITICAL
impactDescription: Prevents sequential data fetching that delays page load.
tags: nextjs, async, performance
---

## Eliminating Waterfalls

When multiple data requests are needed, fetch them in parallel using `Promise.all()` or separate `<Suspense>` boundaries to avoid "waterfalls" where each request waits for the previous one to finish.

**Incorrect (Sequential fetching):**

```typescript
// page.tsx (Server Component)
const user = await db.user.findFirst();
const posts = await db.post.findMany({ where: { userId: user.id } }); // Sequential!
```

**Correct (Parallel fetching):**

```typescript
// Using Promise.all
const [user, posts] = await Promise.all([
  db.user.findFirst(),
  db.post.findMany({ where: { userId: currentUserId } }),
]);
```

**Correct (Component-level fetching with Suspense):**

```tsx
// Wrap individual components in Suspense to let them fetch independently
<Suspense fallback={<UserLoader />}>
  <UserComponent />
</Suspense>
<Suspense fallback={<PostsLoader />}>
  <PostsComponent />
</Suspense>
```
