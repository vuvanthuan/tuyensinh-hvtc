# Cẩm nang Khởi tạo Toàn diện (Full Initialization Guide)

Tài liệu này cung cấp một ví dụ **hoàn chỉnh 100%** cách khởi tạo `ApiClient` với tất cả các tham số (properties) khả dụng. Mỗi trường (field) sẽ được giải thích cặn kẽ về **khái niệm, vai trò, và ảnh hưởng của nó đến hệ thống**.

Nếu dự án của bạn cần một API Client mạnh mẽ nhất (có Cache, có Retry, có chặn Spam, có tự động Refresh Token, có Popup lỗi UI, có báo lỗi lên Sentry), hãy copy đoạn code dưới đây và đưa vào file `src/lib/api-client.ts` (hoặc tương đương) của ứng dụng.

---

## 1. Code Khởi Tạo Hoàn Chỉnh (The Ultimate Setup)

```typescript
import * as Sentry from "@sentry/react"; // Hoặc lib theo dõi lỗi tuỳ chọn
import { toast } from "react-toastify"; // Hoặc thư viện UI tuỳ chọn

import {
  ApiClient,
  AxiosInstanceFactory,
  createApiConfig,
  DeduplicationInterceptor,
  DefaultTokenRefreshHandler,
  LocalStorageTokenStorage,
  LRUCacheStorage,
  MemoryCacheStorage,
  NoopNotificationService,
  RateLimitInterceptor,
} from "@acme/api-client";

// ============================================================================
// BƯỚC 1: CẤU HÌNH CORE (ApiClientConfig)
// Nơi thiết lập các thông số mạng (Network) cơ bản nhất
// ============================================================================
const apiConfig = createApiConfig({
  // 1. baseURL (Bắt buộc)
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://api.domain.com/v1",

  // 2. timeout
  timeout: 30000,

  // 3. headers
  headers: {
    "X-Client-Version": "1.0.0",
    "X-Device-Platform": "web",
  },

  // 4. withCredentials
  withCredentials: true,

  // 5. retryConfig
  retryConfig: {
    maxRetries: 3,
    retryDelay: 1000,
    backoffFactor: 2,
  },

  // 6. cacheConfig
  cacheConfig: {
    enabled: true,
    defaultTTL: 5 * 60 * 1000, // 5 phút
  },
});

// ============================================================================
// BƯỚC 2: KHỞI TẠO CÁC ADAPTERS (Dependencies)
// Nơi 'cắm' các thư viện bên ngoài (Storage, UI) vào API Client
// ============================================================================

// A. Token Storage: Đọc/Ghi token từ LocalStorage
const tokenStorage = LocalStorageTokenStorage.getInstance();

// B. Refresh Handler: Logic tự động xin lại Token khi bị 401
const cleanAxios = AxiosInstanceFactory.create({ baseURL: apiConfig.baseURL });
const tokenRefreshHandler = new DefaultTokenRefreshHandler(
  tokenStorage,
  cleanAxios,
  "/auth/refresh",
  () => {
    // Callback khi Refresh Token cũng đã hết hạn
    tokenStorage.clearTokens();
    window.location.href = "/login?expired=true";
  },
);

// C. Notification Service: Pop-up thông báo UI
const notificationAdapter = {
  success: (opts) => toast.success(opts.message),
  error: (opts) => toast.error(opts.message),
  warning: (opts) => toast.warning(opts.message),
  info: (opts) => toast.info(opts.message),
};

// D. Error Handler: Lắng nghe toàn cục để Report lỗi
const globalErrorHandler = {
  handle: async (error) => {
    // Nếu là lỗi 5xx Server hoặc mất kết nối mạng, báo Sentry
    if (error.statusCode >= 500) {
      Sentry.captureException(error);
    }
  },
};

// E. Custom Cache Storage: Dùng LRU để giới hạn RAM
const cacheStorage = new LRUCacheStorage(200); // Tối đa 200 items

// ============================================================================
// BƯỚC 3: KHỞI TẠO API CLIENT CHÍNH THỨC (ApiClientOptions)
// ============================================================================
export const client = new ApiClient(
  apiConfig, // Tham số 1: Core Network Config
  {
    // Tham số 2: Các Adapter & Plugins (ApiClientOptions)

    // Auth
    tokenStorage: tokenStorage,
    tokenRefreshHandler: tokenRefreshHandler,

    // UI & Logging
    notificationService: notificationAdapter,
    errorHandler: globalErrorHandler,

    // Caching
    cache: cacheStorage,

    // Thêm Middlewares chặn Spam (Chạy ngầm trước khi request rời máy)
    interceptors: [
      new RateLimitInterceptor({ maxRequests: 20, windowMs: 1000 }),
      new DeduplicationInterceptor(),
    ],
  },
);
```

---

## 2. Giải thích chi tiết từng thuộc tính (Property Breakdown)

### A. Đối tượng `ApiClientConfig` (Tham số số 1)

Thiết lập phần "Cứng" của HTTP Request (Network layer).

| Thuộc tính (Property) | Kiểu      | Vai trò                            | Tác dụng trong thực tế                                                                                                                                                                                                                                                                       |
| --------------------- | --------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `baseURL`             | `string`  | Xác định gốc của mọi API           | Thay vì ping `client.get("https://api.acme.com/v1/users")`, ta chỉ cần gọi `client.get("/users")`. Tự động map theo môi trường (Dev/Prod).                                                                                                                                                   |
| `timeout`             | `number`  | Định mức thời gian chờ tối đa (ms) | `30000` = Nếu mạng nhà User quá lag, sau đúng 30 giây request sẽ tự hủy và ném ra **TimeoutException**, thay vì để vòng xoay loading quay mãi mãi (Infinite loading).                                                                                                                        |
| `headers`             | `object`  | Tiêu đề mặc định đính kèm          | Gắn các Metadata chung như `X-App-Version` hoặc `Accept-Language` vào **MỌI request** rời khỏi hệ thống. Thường dùng đồng bộ Ngôn ngữ/Thiết bị báo về cho Server.                                                                                                                            |
| `withCredentials`     | `boolean` | Gửi Cookie Session chéo            | Nếu set `true`, Axios sẽ tự động gửi kèm Cookie của trình duyệt trong các Cross-Origin requests. Rất quan trọng nếu hệ thống dùng Session ID thay vì JWT Token.                                                                                                                              |
| `retryConfig`         | `object`  | Luật tự động gọi lại API khi lỗi   | **(Phần hay nhất)**. Nếu `maxRetries: 3`, `backoffFactor: 2`, `retryDelay: 1000`: Lần 1 lỗi -> Đợi 1s gọi lại. Lần 2 lỗi -> Đợi 2s. Lần 3 lỗi -> Đợi 4s gọi lại. Chỉ đến khi lần 3 gọi vẫn hỏng thì mới báo lỗi UI cho User. Che lấp nhược điểm mạng tậm tịt (4G chập chờn, chui hầm mỏ...). |
| `cacheConfig`         | `object`  | Luật bật/tắt bộ nhớ đệm mặc định   | `enabled: true`. Mọi API `GET` sẽ bị túm lại. Ví dụ `defaultTTL: 60000`, User bấm vào ô "Tỉnh/Thành phố" 5 lần trong 1 phút, Network thực tế chỉ gọi đúng 1 lần.                                                                                                                             |

---

### B. Đối tượng `ApiClientOptions` (Tham số số 2)

Thiết lập phần "Mềm" (Plugins/Adapters/IoC). Nơi bạn "cắm" các thư viện UI (React) hoặc State (Redux) vào lõi Logic mà không phá vỡ tính nguyên bản.

| Thuộc tính (Property) | Truyền vào cái gì?                                       | Vai trò quan trọng                  | Tác dụng trong thực tế (Use Case)                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------- | -------------------------------------------------------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tokenStorage`        | Adapter có hàm `get`/`set` Access Token                  | Nơi lấy thìa khóa (Key) vào cổng    | AuthInterceptor sẽ mò vào đây lấy chữ chuỗi phân quyền gắn vào Header `Authorization: Bearer <...>` của từng request.                                                                                                                                                                                                                                                                                                       |
| `tokenRefreshHandler` | Adapter có hàm gọi Server xin ID mới                     | "Bảo vệ" giấu mặt chống phiền hà    | Đang lưu Form bài thi, Token hết hạn sảng (Báo 401). Interceptor tự tạm dừng Form, bí mật chạy luồng đi mượn Chìa khóa mới. Đổi khóa xong, tự động Submit Form thi tiếp. Trải nghiệm người dùng cực mượt (Người dùng không hề biết Token họ vừa bị hết hạn).                                                                                                                                                                |
| `notificationService` | Biến bọc thư viện Toast (AntD, React-Toast, Snackbar...) | "Phát thanh viên" thông báo kết quả | Tự động quét ra dòng text `response.message` và pop-up lên màn hình góc phải. Rớt mạng -> Hiện ô màu Đỏ. POST thành công -> Hiện ô màu Xanh.                                                                                                                                                                                                                                                                                |
| `errorHandler`        | Hàm hứng 1 Object lỗi của class `BaseException`          | Lính gác ghi Log bí mật             | Giữ app không bị sập (Crash). Hứng mọi rác HTTP thải ra và gói nó ném đi chỗ khác (ví dụ đẩy Log File lên Datadog, Sentry, Kibana) để kĩ sư hệ thống soi lỗi lúc rạng sáng.                                                                                                                                                                                                                                                 |
| `cache`               | Instance lưu trữ (Memory / LRU)                          | Khoang chứa hàng tạm thời           | Memory Cache thì nạp thoải mái. LRU Cache (giới hạn số lượng items) thì an toàn bộ nhớ. VD `LRUCache(200)`: Nếu có RAM rác thứ 201 vào, item cũ nhất tự động bị sút (Evict). Rất lý tưởng chống phình RAM ở Node.js (Memory Leak).                                                                                                                                                                                          |
| `interceptors`        | Mảng chứa các class tuân thủ `Interceptor`               | Trạm thu phí chăn ngang xa lộ       | `RateLimitInterceptor({max: 20, windowMs: 1000})`: Tránh bị chửi là DDoSer. Nếu Frontend gọi ngu gây bão API (Loop), Interceptor sẽ bóp nát từ trong trứng nước, chặn request từ trình duyệt, không cho phi tới Server. <br/> `DeduplicationInterceptor`: Tránh duplicate. Load Dashboard gọi `/me` ở Sidebar, lại gọi `/me` ở Header. Dedup thấy trùng link, nó gom chung làm 1 request. Phản hồi 1 data dùng chung 2 chỗ. |
| `responseParser`      | Class tuân thủ `ResponseParser`                          | Máy nghiền dữ liệu (Normalization)  | Cứu tinh khi làm việc với 3rd-party (Stripe, GitHub) hoặc BE Cũ nát. API trả object rối rắm `{"foo": {"bar": [...]}}`. Máy nghiền này tự đục đẽo cấu trúc Data, bóp nó vừa khớp theo chuẩn Interface của Team ta (`IResponseDTO`). Ta không cần phải IF-ELSE null check trên bề mặt UI.                                                                                                                                     |
