# API Reference: `@acme/api-client`

Tài liệu này tra cứu nhanh các Class, Interface, Methods và Type chính được export từ package.

---

## 1. `ApiClient` (Main Class)

Lớp trung tâm để giao tiếp với mạng.

### Khởi tạo (Constructor)

```typescript
new ApiClient(config: ApiClientConfig, options?: ApiClientOptions)
```

| Tham số   | Kiểu               | Bắt buộc | Mặc định | Mô tả                                     |
| --------- | ------------------ | -------- | -------- | ----------------------------------------- |
| `config`  | `ApiClientConfig`  | Có       | `-`      | URL base, timeout, headers...             |
| `options` | `ApiClientOptions` | Không    | `{}`     | Các adapter cắm thêm (Auth, Cache, UI...) |

### Các Methods chính

Mọi request đều trả về Promise chứa `IResponseDTO<T>`. Tham số `T` là type mong đợi của payload `data`.

#### `get<TResponse>(url, config?)`

- **Mô tả:** Gửi một HTTP GET request. Request này sẽ tự động được đưa vào Cache nếu bạn đã bật CacheInterceptor.
- **Ví dụ:** `client.get<User>('/users/1', { params: { includeDocs: true } })`

#### `post<TResponse, TData>(url, data?, config?)`

- **Mô tả:** Gửi HTTP POST request để tạo mới dữ liệu.
- **Ví dụ:** `client.post<User, CreateDto>('/users', payload, { options: { skipAuth: true } })`

#### `put / patch / delete`

- Tương tự như post và get.

#### `getWithMeta<TResponse>(url, config?)`

- **Mô tả:** Giống hàm `get`, nhưng bắt buộc Parser phải trích xuất được `metaData` (phân trang). Trả về `IResponseWithMetadataDTO`.

#### `upload<TResponse>(url, file, options?, additionalData?, onProgress?)`

- **Mô tả:** Helper chuyên biệt để upload File. Tự động set `Content-Type: multipart/form-data`.
- **Tham số `onProgress`:** Hàm callback `(percent: number) => void`.

#### `withAbort(factoryFn)`

- **Mô tả:** Trả về 1 tuple gồm Promise của request và hàm trigger để Cancel request đó sớm.
- **Ví dụ:**
  ```ts
  const { promise, abort } = client.withAbort((signal) =>
    client.get("/search", {}, { signal }),
  );
  ```

---

## 2. Configuration & Options

### `ApiClientConfig`

Cấu hình cấp Framework truyền cho Axios/Fetch (`core/types/api.types.ts`).

```typescript
interface ApiClientConfig {
  baseURL: string;
  timeout?: number; // Khuyên dùng: 30000 (30s)
  headers?: Record<string, string>;
  withCredentials?: boolean;

  retryConfig?: {
    // Cấu hình RetryInterceptor
    maxRetries: number;
    retryDelay: number;
    backoffFactor?: number;
  };

  cacheConfig?: {
    // Cấu hình CacheInterceptor
    enabled: boolean;
    defaultTTL: number; // ms
  };
}
```

### `ApiClientOptions`

Các dịch vụ bên ngoài (Dependency Injections) tiêm vào Client.

```typescript
interface ApiClientOptions {
  tokenStorage?: TokenStorage; // Cung cấp Access/Refresh Token
  tokenRefreshHandler?: TokenRefreshHandler; // Hàm gọi API lấy token mới
  notificationService?: NotificationService; // Adapter hiển thị Toast UI
  errorHandler?: IErrorHandler; // Bắt lỗi tổng (Log Sentry)
  cache?: CacheStorage; // Adapter lưu cache (Memory/Redis)
  responseParser?: ResponseParser; // Adapter mào dữ liệu chuẩn
  interceptors?: Interceptor[]; // Middleware bổ sung (RateLimit/Dedup)
}
```

### `IRequestOptions` (Per-request overrides)

Truyền vào field `options` trong mọi hàm get/post để ghi đè luật của Interceptor cho **riêng request đó**.

```typescript
interface IRequestOptions {
  skipAuth?: boolean; // Không gắn Bearer header (VD: gọi API đăng nhập gốc)
  skipCache?: boolean; // Bỏ qua Cache tủ để ép lấy Data tươi nhất
  skipRetry?: boolean; // Không Exponential Backoff dù bị 500 hay Timeout
  displayError?: boolean; // Mặc định True. Nếu đổi thành False, UI Toast Service sẽ không popup lên dù lỗi. Cực hữu dụng nếu muốn im lặng ẩn lỗi
  token?: string; // Ép dùng string token này thay vì đọc từ TokenStorage
  cacheTTL?: number; // Ép Cache của request này tồn tại X ms, thay vì mặc định
}
```

_Cách dùng:_ `client.get('/users/me', { options: { skipCache: true, displayError: false } })`

---

## 3. Data Transfer Objects (DTO)

### `IResponseDTO<T>`

Cấu trúc Data chuẩn sau khi đi qua `ResponseParser`. Component UI của bạn LUÔN LUÔN đợi nhận type này.

```typescript
interface IResponseDTO<T = unknown> {
  success: boolean; // Status 2xx-3xx = true. Còn lỗi thì quăng Exception rồi nên ở output luôn là true
  statusCode: string; // VD: "200", "201"
  message?: string; // Text hiển thị cho User
  data: T; // Array hoặc Object thực tế
  metaData?: IMetadata; // Nếu có
}
```

### `IMetadata`

Thông tin phân trang.

```typescript
interface IMetadata {
  totalPages: number;
  totalItems: number;
  currentPage: number;
  pageSize?: number;
}
```

---

## 4. Exceptions Hierarchy

Tất cả các lỗi bắn ra từ `.catch(err)` đều extends từ class gốc `BaseException`. Có thể dùng `err instanceof {TênClass}` để phân luồng.

| Tên Class               | HTTP Status  | Context                                   | Ví dụ xử lý                                |
| ----------------------- | ------------ | ----------------------------------------- | ------------------------------------------ |
| `ValidationException`   | 400, 422     | `err.errors` (chứa Map từng field bị sai) | Fill màu đỏ vào ô Input form               |
| `UnauthorizedException` | 401          | Lỗi login hoặc Refesh thất bại            | Đá User ra màn hình Login                  |
| `ForbiddenException`    | 403          | Thiếu quyền RBAC                          | Báo "Bạn không có quyền truy cập page này" |
| `NotFoundException`     | 404          | Không tìm thấy Resource theo ID           | Redirect về trang 404 Custom               |
| `TimeoutException`      | ECONNABORTED | Quá thời gian timeout 30s                 | Báo "Kết nối mạng yếu, vui lòng tải lại"   |
| `NetworkException`      | Mất Wifi     | Không có kết nối internet                 | Hiển thị màn hình con Khủng long Offline   |
| `ServerException`       | 500 -> 599   | Sập máy chủ BE                            | Báo "Server đang nâng cấp bảo trì"         |

---

## 5. Middleware (Interceptors) Exported

| Class                      | Construct Args                        | Chức năng                                               |
| -------------------------- | ------------------------------------- | ------------------------------------------------------- |
| `RateLimitInterceptor`     | `{ maxRequests: 10, windowMs: 1000 }` | Bóp nghẽn bằng Token-bucket, tránh API nổ tung vì Loop  |
| `DeduplicationInterceptor` | N/A                                   | Gom chung các request GET giống hệt nhau gọi cùng lúc   |
| `AuthInterceptor`          | `(storage, refreshHandler)`           | Được API Client **tự động** bind nếu truyền vào Options |
| `CacheInterceptor`         | `(storage, cacheConfig)`              | Được API Client **tự động** bind nếu bật Cache          |
| `RetryInterceptor`         | `(retryConfig)`                       | Được API Client **tự động** bind nếu bật Retry          |
