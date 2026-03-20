/**
 * @module notification.interface
 * @description
 * Display-layer abstraction for user-facing notifications triggered by
 * the {@link ApiClient} on request success or failure.
 *
 * By depending on this interface (not a concrete library), the API client
 * is decoupled from any specific notification library. Adapters for
 * Ant Design (`antd`), React-Toastify, Sonner, etc. can be injected
 * without modifying this package.
 *
 * @example
 * ```ts
 * // Ant Design adapter
 * import { notification as antdNotification } from "antd";
 *
 * const antdAdapter: NotificationService = {
 *   success(opts) { antdNotification.success({ message: opts.message, description: opts.description }); },
 *   error(opts) { antdNotification.error({ message: opts.message, description: opts.description }); },
 *   warning(opts) { antdNotification.warning({ message: opts.message, description: opts.description }); },
 *   info(opts) { antdNotification.info({ message: opts.message, description: opts.description }); },
 * };
 *
 * new ApiClient(config, { notificationService: antdAdapter });
 * ```
 */

/**
 * Options passed to each notification call.
 */
export interface NotificationOptions {
  /** Short title displayed in bold (e.g. `"Error"`, `"Saved"`). */
  message: string;
  /** Longer description line below the title. */
  description?: string;
  /**
   * Auto-dismiss duration in **seconds**.
   * `0` or `undefined` keeps the notification open until dismissed manually.
   */
  duration?: number;
  /** Semantic type controlling the colour and icon of the notification. */
  type?: "success" | "error" | "warning" | "info";
}

/**
 * Adapter interface for in-app notification toasts.
 *
 * Implement this interface to bridge the API client to your notification
 * library of choice, then pass the implementation to
 * `ApiClientOptions.notificationService`.
 */
export interface NotificationService {
  /** Show a green success notification. */
  success(options: NotificationOptions): void;
  /** Show a red error notification. */
  error(options: NotificationOptions): void;
  /** Show an orange warning notification. */
  warning(options: NotificationOptions): void;
  /** Show a blue informational notification. */
  info(options: NotificationOptions): void;
}
