/**
 * @module cache-storage.interface
 * @description
 * Contract for cache storage backends used by {@link CacheInterceptor}.
 *
 * The library provides two built-in implementations:
 * - {@link MemoryCacheStorage} – simple unbounded `Map` with TTL
 * - {@link LRUCacheStorage} – bounded LRU with O(1) eviction (recommended for production)
 *
 * Implement this interface to plug in a custom backend (Redis, IndexedDB, etc.).
 */

/**
 * Generic key-value cache store with TTL support.
 *
 * All methods are **synchronous** so they can be called from Axios interceptors
 * without introducing `async` complexity. For async backends (IndexedDB, Redis),
 * wrap them in a local in-memory layer that stays in sync asynchronously.
 */
export interface CacheStorage {
  /**
   * Retrieve a cached value by key.
   *
   * @typeParam T - Expected type of the stored value.
   * @param key - Cache key.
   * @returns The stored value, or `null` when absent or expired.
   */
  get<T>(key: string): T | null;

  /**
   * Store a value with an optional TTL.
   *
   * @typeParam T - Type of the value to store.
   * @param key   - Cache key.
   * @param value - Value to cache.
   * @param ttl   - Time-to-live in **milliseconds**. Uses the implementation's
   *                default TTL when omitted.
   */
  set<T>(key: string, value: T, ttl?: number): void;

  /**
   * Remove a single entry by key.
   * No-ops silently when the key does not exist.
   *
   * @param key - Cache key to remove.
   */
  delete(key: string): void;

  /**
   * Remove all entries from the cache.
   */
  clear(): void;

  /**
   * Check whether a non-expired entry exists for `key`.
   *
   * @param key - Cache key to probe.
   * @returns `true` when a live (non-expired) entry is present.
   */
  has(key: string): boolean;
}
