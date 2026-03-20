import type { CacheStorage } from "./cache-storage.interface";

/**
 * Cache invalidation helpers – pattern-based and tag-based deletion.
 *
 * Usage:
 *   const inv = new CacheInvalidator(myCache);
 *   inv.invalidateByPrefix("GET::/users::");
 *   inv.invalidateByTags(["users"]);
 */
export class CacheInvalidator {
  /**
   * Key → Set of tags mapping maintained externally.
   * Consumers call `tag(key, tags)` when setting a value.
   */
  private readonly tagMap = new Map<string, Set<string>>();

  constructor(
    private readonly cache: CacheStorage & {
      // MemoryCacheStorage / LRUCacheStorage both expose the internal Map via
      // the public CacheStorage interface; we iterate keys by peeking at the
      // map if available, otherwise the invalidator degrades gracefully.
      _getKeys?: () => string[];
    },
  ) {}

  /**
   * Associate `key` with one or more `tags`.
   * Must be called right after `cache.set(key, value, ttl)`.
   */
  tag(key: string, tags: string[]): void {
    const existing = this.tagMap.get(key) ?? new Set<string>();
    for (const t of tags) existing.add(t);
    this.tagMap.set(key, existing);
  }

  /**
   * Remove all keys whose cache key starts with `prefix`.
   */
  invalidateByPrefix(prefix: string): void {
    const keys = this.getTrackedKeys().filter((k) => k.startsWith(prefix));
    for (const key of keys) {
      this.cache.delete(key);
      this.tagMap.delete(key);
    }
  }

  /**
   * Remove all keys that carry at least one of the given `tags`.
   */
  invalidateByTags(tags: string[]): void {
    const tagSet = new Set(tags);
    for (const [key, keyTags] of this.tagMap.entries()) {
      if ([...keyTags].some((t) => tagSet.has(t))) {
        this.cache.delete(key);
        this.tagMap.delete(key);
      }
    }
  }

  /** Remove a single key and clean up its tag metadata. */
  invalidate(key: string): void {
    this.cache.delete(key);
    this.tagMap.delete(key);
  }

  /** Clear everything. */
  invalidateAll(): void {
    this.cache.clear();
    this.tagMap.clear();
  }

  private getTrackedKeys(): string[] {
    if (typeof this.cache._getKeys === "function") {
      return this.cache._getKeys();
    }
    return [...this.tagMap.keys()];
  }
}
