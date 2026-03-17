import type { CacheStorage } from "./cache-storage.interface";

interface CacheItem<T> {
  value: T;
  expiresAt: number;
}

export class MemoryCacheStorage implements CacheStorage {
  private cache = new Map<string, CacheItem<unknown>>();

  get<T>(key: string): T | null {
    const item = this.cache.get(key) as CacheItem<T> | undefined;

    if (!item) return null;

    if (item.expiresAt < Date.now()) {
      this.cache.delete(key);
      return null;
    }

    return item.value;
  }

  set<T>(key: string, value: T, ttl = 300000): void {
    this.cache.set(key, {
      value,
      expiresAt: Date.now() + ttl,
    });
  }

  delete(key: string): void {
    this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }

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
