import type { CacheStorage } from "./cache-storage.interface";

interface LRUNode<T> {
  key: string;
  value: T;
  expiresAt: number;
  prev: LRUNode<T> | null;
  next: LRUNode<T> | null;
}

/**
 * LRUCacheStorage – Least-Recently-Used eviction cache.
 *
 * Compared to MemoryCacheStorage (unbounded Map), LRU guarantees a fixed
 * memory ceiling by evicting the least-recently-used entry whenever
 * capacity is reached. Each entry also carries an optional TTL (ms).
 */
export class LRUCacheStorage implements CacheStorage {
  private readonly map = new Map<string, LRUNode<unknown>>();
  private head: LRUNode<unknown> | null = null; // most recently used
  private tail: LRUNode<unknown> | null = null; // least recently used
  private size = 0;

  constructor(
    private readonly capacity = 256,
    private readonly defaultTTL = 300_000, // 5 minutes
  ) {}

  get<T>(key: string): T | null {
    const node = this.map.get(key) as LRUNode<T> | undefined;
    if (!node) return null;

    if (node.expiresAt < Date.now()) {
      this.removeNode(node as LRUNode<unknown>);
      this.map.delete(key);
      this.size--;
      return null;
    }

    // Move to front (most recently used)
    this.moveToHead(node as LRUNode<unknown>);
    return node.value;
  }

  set<T>(key: string, value: T, ttl?: number): void {
    const existing = this.map.get(key);
    if (existing) {
      existing.value = value;
      existing.expiresAt = Date.now() + (ttl ?? this.defaultTTL);
      this.moveToHead(existing);
      return;
    }

    const node: LRUNode<T> = {
      key,
      value,
      expiresAt: Date.now() + (ttl ?? this.defaultTTL),
      prev: null,
      next: null,
    };

    this.map.set(key, node as LRUNode<unknown>);
    this.addToHead(node as LRUNode<unknown>);
    this.size++;

    if (this.size > this.capacity) {
      const evicted = this.removeTail();
      if (evicted) {
        this.map.delete(evicted.key);
        this.size--;
      }
    }
  }

  delete(key: string): void {
    const node = this.map.get(key);
    if (!node) return;
    this.removeNode(node);
    this.map.delete(key);
    this.size--;
  }

  clear(): void {
    this.map.clear();
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  has(key: string): boolean {
    const node = this.map.get(key);
    if (!node) return false;
    if (node.expiresAt < Date.now()) {
      this.delete(key);
      return false;
    }
    return true;
  }

  /** Current number of live (non-expired) entries */
  getSize(): number {
    return this.size;
  }

  // ─── Doubly-linked-list helpers ─────────────────────────────────────────────

  private addToHead(node: LRUNode<unknown>): void {
    node.prev = null;
    node.next = this.head;
    if (this.head) this.head.prev = node;
    this.head = node;
    this.tail ??= node;
  }

  private removeNode(node: LRUNode<unknown>): void {
    if (node.prev) node.prev.next = node.next;
    else this.head = node.next;

    if (node.next) node.next.prev = node.prev;
    else this.tail = node.prev;

    node.prev = null;
    node.next = null;
  }

  private moveToHead(node: LRUNode<unknown>): void {
    this.removeNode(node);
    this.addToHead(node);
  }

  private removeTail(): LRUNode<unknown> | null {
    if (!this.tail) return null;
    const tail = this.tail;
    this.removeNode(tail);
    return tail;
  }
}
