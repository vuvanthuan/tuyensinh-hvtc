/**
 * @module memory-cache.storage
 * @description
 * Simple unbounded in-memory cache backed by a `Map`.
 *
 * Each entry carries an absolute `expiresAt` timestamp. Expiry is checked
 * lazily on `get` and `has` rather than via a background timer, keeping
 * the implementation free of side-effects and safe for SSR.
 *
 * @remarks
 * Use {@link LRUCacheStorage} in production when memory bounds are a concern.
 * `MemoryCacheStorage` is best suited for development or short-lived processes.
 */

import type { CacheStorage } from "./cache-storage.interface";

interface CacheItem<T> {
  value: T;
  /** Absolute expiry timestamp in ms (`Date.now() + ttl`). */
  expiresAt: number;
}

/**
 * Unbounded TTL-based in-memory cache.
 *
 * @example
 * ```ts
 * const cache = new MemoryCacheStorage();
 * cache.set("users", data, 60_000); // expires in 1 minute
 * const users = cache.get<User[]>("users");
 * ```
 */
export class MemoryCacheStorage implements CacheStorage {
  private readonly cache = new Map<string, CacheItem<unknown>>();

  /** @inheritdoc */
  get<T>(key: string): T | null {
    const item = this.cache.get(key) as CacheItem<T> | undefined;

    if (!item) return null;

    if (item.expiresAt < Date.now()) {
      // Lazy eviction on access
      this.cache.delete(key);
      return null;
    }

    return item.value;
  }

  /** @inheritdoc – Default TTL: 5 minutes (300 000 ms) */
  set<T>(key: string, value: T, ttl = 300_000): void {
    this.cache.set(key, {
      value,
      expiresAt: Date.now() + ttl,
    });
  }

  /** @inheritdoc */
  delete(key: string): void {
    this.cache.delete(key);
  }

  /** @inheritdoc */
  clear(): void {
    this.cache.clear();
  }

  /** @inheritdoc */
  has(key: string): boolean {
    const item = this.cache.get(key);
    if (!item) return false;

    if (item.expiresAt < Date.now()) {
      this.cache.delete(key);
      return false;
    }

    return true;
  }
}
