---
trigger: manual
---

## Next.js Server Actions & Forms

When using Server Actions for data mutations, always handle loading states and validation errors properly. Use `useFormStatus` or `useTransition` for optimistic updates or loading indicators.

### Validation

Always validate input on the server using `zod` before processing.

```typescript
export async function createPost(formData: FormData) {
  const result = schema.safeParse(Object.fromEntries(formData));
  if (!result.success) return { errors: result.error.flatten() };
  // ... process
}
```

### Loading State

**Correct (Using useTransition for non-form mutations):**

```tsx
const [isPending, startTransition] = useTransition();

const handleDelete = () => {
  startTransition(async () => {
    await deleteItem(id);
  });
};
```
