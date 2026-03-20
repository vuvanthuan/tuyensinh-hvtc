/**
 * @module noop-notification
 * @description
 * No-op {@link NotificationService} implementation used as the default
 * when no notification adapter is provided to {@link ApiClient}.
 *
 * All methods silently discard the notification options. This is intentional:
 * the API client should function without UI dependencies when running in
 * server-side or test environments.
 *
 * @example
 * ```ts
 * // Used automatically when notificationService is omitted:
 * new ApiClient(config);
 * // Equivalent to:
 * new ApiClient(config, { notificationService: new NoopNotificationService() });
 * ```
 */

import type {
  NotificationOptions,
  NotificationService,
} from "./notification.interface";

/**
 * Silent notification service that discards all messages.
 *
 * Replace with a real adapter (Ant Design, Toastify, Sonner…) in your
 * application bootstrap.
 */
export class NoopNotificationService implements NotificationService {
  /** @inheritdoc */
  success(_options: NotificationOptions): void {
    // no-op
  }
  /** @inheritdoc */
  error(_options: NotificationOptions): void {
    // no-op
  }
  /** @inheritdoc */
  warning(_options: NotificationOptions): void {
    // no-op
  }
  /** @inheritdoc */
  info(_options: NotificationOptions): void {
    // no-op
  }
}
