import type {
  NotificationOptions,
  NotificationService,
} from "./notification.interface";

export class NoopNotificationService implements NotificationService {
  success(_options: NotificationOptions): void {
    return;
  }
  error(_options: NotificationOptions): void {
    return;
  }
  warning(_options: NotificationOptions): void {
    return;
  }
  info(_options: NotificationOptions): void {
    return;
  }
}
