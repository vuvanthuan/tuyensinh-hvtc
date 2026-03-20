# Hướng dẫn sử dụng `@acme/api-client`

Tài liệu này hướng dẫn chi tiết cách khởi tạo, tích hợp và sử dụng từng tính năng của package `@acme/api-client` trong ứng dụng của bạn (Next.js, React, Node.js...).

---

## 1. Khởi tạo cơ bản (Quick Start)

Cách thiết lập `ApiClient` đơn giản nhất với cấu hình mặc định (chỉ có base URL và tự retry khi rớt mạng).

```typescript
import { ApiClient, createApiConfig } from "@acme/api-client";

// 1. Khởi tạo cấu hình (tự merge với default config)
const config = createApiConfig({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
  timeout: 10000,
  retryConfig: { maxRetries: 2, retryDelay: 1000 },
});

// 2. Tạo instance client
export const client = new ApiClient(config);

// 3. Sử dụng
const fetchUsers = async () => {
  const result = await client.get<User[]>("/users");
  console.log(result.data); // result luôn là IResponseDTO
};
```

---

## 2. Gửi Request & Các tính năng

### 2.1. Các phương thức HTTP (CRUD)

Client bọc sẵn các helper methods map với Type an toàn. Dữ liệu trả về luôn là object chuẩn `IResponseDTO`.

```typescript
// GET
const res = await client.get<User>("/users/1");

// POST (có truyền payload)
const newUser = await client.post<User, CreateUserDto>("/users", {
  name: "John",
});

// PUT, PATCH, DELETE tương tự
await client.delete("/users/1");
```

### 2.2. Phân trang (Pagination / Metadata)

Khi lấy danh sách từ API có kẹp Metadata (trang hiện tại, tổng số trang), hãy dùng các method có hậu tố `*WithMeta`.

```typescript
// Kết quả trả về là IResponseWithMetadataDTO (đảm bảo luôn có metaData)
const res = await client.getWithMeta<User[]>("/users", { page: 1, limit: 10 });

console.log(res.metaData.totalPages);
console.log(res.metaData.totalItems);
console.log(res.data); // data là User[]
```

### 2.3. Hủy Request (Abort / Cancel)

Rất hữu ích cho tính năng Search (hủy request cũ khi gõ chữ mới).

```typescript
// Client tự sinh cho bạn 1 thẻ Promise và hàm Abort
const { promise, abort } = client.withAbort((signal) =>
  client.get<Product[]>("/products/search", { q: keyword }, { signal }),
);

// Hủy request nếu Component unmount hoặc gõ từ khóa mới
abort("Người dùng gõ từ khóa mới");
```

### 2.4. Upload File (kèm Progress bar)

```typescript
const file = ...; // File từ <input type="file" />

await client.upload(
  "/files/upload",
  file,
  {}, // IRequestOptions
  { folder: "avatars" }, // Chèn thêm trường phụ vào FormData
  (progressPercent) => {
    console.log(`Tiến độ: ${progressPercent}%`);
  }
);
```

---

## 3. Tích hợp Authentication (Token / Refresh)

Để `api-client` tự động gắn `Authorization: Bearer <token>` vào mọi request và **tự động gọi API refresh token** khi token hết hạn (401), bạn cần cung cấp `TokenStorage` và `TokenRefreshHandler`.

```typescript
import {
  AxiosHttpClient,
  DefaultTokenRefreshHandler,
  LocalStorageTokenStorage,
} from "@acme/api-client";

// 1. Adapter lưu trữ Token (có sẵn LocalStorage)
const tokenStorage = LocalStorageTokenStorage.getInstance();

// 2. HTTP Client "sạch" (không dính auth) dùng riêng cho việc refresh token
// Tránh vòng lặp vô tận (Refresh gọi Refresh)
const cleanClient = AxiosInstanceFactory.create({ baseURL });

// 3. Khởi tạo Handler
const refreshHandler = new DefaultTokenRefreshHandler(
  tokenStorage, // Nơi đọc/ghi token
  cleanClient, // Client gửi request refresh
  "/auth/refresh-token", // Endpoint refresh
  () => {
    // Hàm callback nếu refresh THẤT BẠI
    window.location.href = "/login";
    // Ví dụ: store.dispatch(logout());
  },
);

// 4. Bơm vào ApiClient
export const authClient = new ApiClient(config, {
  tokenStorage,
  tokenRefreshHandler: refreshHandler,
});

// 📌 Cách login: Nhận token từ server → gọi method setTokens
const login = async () => {
  const res = await authClient.post("/auth/login", credentials);
  tokenStorage.setTokens({
    accessToken: res.data.access_token,
    refreshToken: res.data.refresh_token,
    expiresIn: res.data.expires_in,
    tokenType: "Bearer",
  });
};
```

---

## 4. Tích hợp Cache (LRU / Memory)

Lưu Cache giúp các hàm GET không gọi lại network nếu chưa hết hạn.

```typescript
import { CacheInvalidator, LRUCacheStorage } from "@acme/api-client";

// Khởi tạo bộ nhớ Cache: Lưu tối đa 200 items, mỗi Item sống 5 phút
const cache = new LRUCacheStorage(200, 5 * 60 * 1000);

// Khởi tạo tool xóa cache
export const cacheInvalidator = new CacheInvalidator(cache);

// Khởi tạo API Client
const client = new ApiClient(
  createApiConfig({
    baseURL,
    cacheConfig: { enabled: true, defaultTTL: 60_000 }, // Default cache 1 phút
  }),
  { cache },
);

// Mọi request GET tự động bị cache.
// Nếu muốn bypass (xem data mới nhất) cho 1 request cụ thể:
client.get("/users", {}, { skipCache: true });

// Xóa cache (Ví dụ sau khi Create User xong, muốn lấy lại list User mới):
cacheInvalidator.invalidateByPrefix("GET::/users");
```

---

## 5. Middleware đặc biệt (Interceptors Mở Rộng)

ApiClient cho phép bạn cắm xen (plug) thêm tính năng. Khuyến nghị dùng: **Rate Limit** và **Deduplication**.

```typescript
import {
  DeduplicationInterceptor,
  RateLimitInterceptor,
} from "@acme/api-client";

const client = new ApiClient(config, {
  interceptors: [
    // Throttle: Gửi tối đa 10 request mỗi 1 giây (1000ms),
    // các request thừa sẽ bị xếp hàng (queue) chờ
    new RateLimitInterceptor({ maxRequests: 10, windowMs: 1000 }),

    // Dedup: Nếu gọi GET /products 3 lần CÙNG LÚC,
    // chỉ gửi 1 request mạng, 2 call còn lại tự đợi kết quả của call đầu.
    new DeduplicationInterceptor(),
  ],
});
```

---

## 6. Bắt và Xử Lý Lỗi (Error Handling)

Package không ném ra lỗi `AxiosError` rác rưởi. Tất cả ngoại lệ đều được bọc thánh các Class `Exception` rõ ràng.

### Khối Try/Catch thủ công (Component-level)

```typescript
import {
  NetworkException,
  ServerException,
  ValidationException,
} from "@acme/api-client";

try {
  await client.post("/users", { age: -1 });
} catch (error) {
  // Lỗi form validate từ backend cấp (HTTP 400/422)
  if (error instanceof ValidationException) {
    console.log(error.errors); // { "age": ["Age must be positive"] }
    setFormErrors(error.errors);
  }

  // Rớt mạng, mất WIFI
  else if (error instanceof NetworkException) {
    showOfflineUI();
  }

  // Lỗi server (HTTP 5xx)
  else if (error instanceof ServerException) {
    console.log("Server status:", error.httpStatus);
  }
}
```

### Xử lý lỗi tập trung (Global-level)

Thay vì file nào cũng phải try/catch show Toast, hãy truyền `NotificationService` và `ErrorHandler`.

```typescript
import { toast } from "react-toastify"; // UI Library của bạn

// 1. Adapter pop-up giao diện
const toastAdapter = {
  success: (opt) => toast.success(opt.message),
  error: (opt) => toast.error(opt.message),
  info: (opt) => toast.info(opt.message),
  warning: (opt) => toast.warning(opt.message),
};

// 2. Adapter logic tĩnh (Log Sentry/Redirect)
const globalErrorHandler = {
  handle: async (error: HttpException) => {
    // Report lên Sentry
    Sentry.captureException(error);
  },
};

const client = new ApiClient(config, {
  notificationService: toastAdapter, // Tự động pop-up nếu API lỗi (trừ khi options truyền displayError: false)
  errorHandler: globalErrorHandler, // Tự động vào hàm này để bắn log đi
});
```

---

## 7. Custom Response Parser (Option Nâng cao)

Mặc định, `api-client` chờ đợi Backend trả về dạng Envelope: `{ success, statusCode, data: ... }`.
Nếu 1 API bên thứ 3 (như Stripe/GitHub) trả cấu trúc hoàn toàn khác, bạn có thể tự implement `ResponseParser`.

```typescript
class GithubParser implements ResponseParser {
  parse<T>(data: unknown) {
    // Tự biến đổi JSON của Github thành IResponseDTO chuẩn của hệ thống mình
    return {
      success: true,
      statusCode: "200",
      data: data as T,
    };
  }
  // ... implement các hàm khác
}

// Khởi tạo 1 client riêng chuyên dùng gọi Github
const githubClient = new ApiClient(githubConfig, {
  responseParser: new GithubParser(),
});
```

---

## Tổng kết vai trò

1. **`ApiClient`**: Nơi bạn tương tác hàng ngày trong components/services.
2. **`Interceptors`**: Công nhân chạy ngầm (chèn token, retry lỗi, block spam, gộp request).
3. **`Exception Classes`**: Chẩn đoán bệnh rõ ràng (Validation, Timeout, NotFound).
4. **`Storages` (Token/Cache)**: Trí nhớ của hệ thống. Độc lập với LocalStorage để có thể dùng với Redux/Cookie/Next.js nếu cần.
