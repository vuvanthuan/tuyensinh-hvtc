export interface NotificationOptions {
  message: string;
  description?: string;
  duration?: number;
  type?: "success" | "error" | "warning" | "info";
}

export interface NotificationService {
  success(options: NotificationOptions): void;
  error(options: NotificationOptions): void;
  warning(options: NotificationOptions): void;
  info(options: NotificationOptions): void;
}
