<div align="center">

# 🚀 @acme/api-client

**A Production-Ready, Agnostic, and Typed HTTP Client for Modern Web Apps**

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)]()
[![Clean Architecture](https://img.shields.io/badge/Architecture-Clean-success?style=flat-square)]()
[![Zero Dependencies UX](https://img.shields.io/badge/UX-Zero_Boilerplate-blueviolet?style=flat-square)]()

</div>

---

## 📖 Giới thiệu (Introduction)

`@acme/api-client` là một thư viện HTTP Client siêu cấp mạnh mẽ, được thiết kế chuyên biệt cho hệ sinh thái Frontend (React, Next.js, Vue) và Node.js.

Thay vì phải tự code lại các tính năng lặp đi lặp lại ở mọi dự án (chèn Token, Refresh Token khi hết hạn, Retry khi rớt mạng, Cache dữ liệu, Debounce/Dedup request...), package này bọc sẵn tất cả mọi thứ bên dưới một lớp vỏ (Interface) cực kỳ đơn giản và Strongly-Typed (100% TypeScript).

## ✨ Tính năng nổi bật (Features)

- **🔋 Khởi tạo ăn ngay (Zero Boilerplate):** Chỉ cần truyền `baseURL`, client tự lo phần còn lại.
- **🛡️ 100% Type-Safe:** Generic HTTP methods (`get<T>`, `post<T>`). Dữ liệu trả về luôn được ép chuẩn thành 1 DTO duy nhất (thoát khỏi cảnh API trả về mỗi nơi một kiểu).
- **🔒 Auto Authentication Flow:** Tự động đính kèm `Bearer Token`. Tự động gọi API `Refresh Token` ngầm khi bị lỗi `401 Unauthorized` và Retry lại request gốc mà người dùng không hề hay biết.
- **🧠 Smart Caching (LRU / Memory):** Cache lại kết quả GET request. Hỗ trợ Invalidate theo Tag hoặc Prefix.
- **🚦 Traffic Control (Interceptors):**
  - **Deduplication**: Chống spam click (3 request giống nhau gọi cùng 1 ms -> Chỉ gọi 1 network request).
  - **Rate Limiting**: Giới hạn tốc độ gọi API tránh bị server block.
  - **Auto Retry**: Tự động gọi lại với thuật toán _Exponential Backoff_ khi mất mạng hoặc Server sụp (5xx).
- **💥 Error Handling chuẩn Domain:** Không bao giờ ném ra `AxiosError` khó hiểu. Tự động dịch mọi lỗi mạng thành các Exception rõ ràng (`ValidationException`, `NetworkException`, `TimeoutException`...).
- **🔌 Framework Agnostic:** Core độc lập hoàn toàn. Hỗ trợ cả 2 engine bên dưới: `Axios` (cho Browser/Node) và `Fetch API` (cho Edge Runtimes / Cloudflare Workers).

---

## 📦 Cài đặt (Installation)

Vì đây là internal package trong Monorepo, bạn chỉ cần add dependency vào `package.json` của thư mục App:

```json
  "dependencies": {
    "@acme/api-client": "workspace:*"
  }
```

Sau đó chạy lệnh cài đặt của monorepo (e.g., `pnpm install`, `npm install`, hoặc `yarn install`).

---

## ⚡ Quick Start (Dùng thử ngay)

```typescript
import { ApiClient, createApiConfig } from "@acme/api-client";

// 1. Khởi tạo
const client = new ApiClient(
  createApiConfig({
    baseURL: "https://api.acme.com/v1",
  }),
);

// 2. Định nghĩa Type
interface User {
  id: string;
  name: string;
}

// 3. Gọi API (Auto Type-safe)
async function fetchUser() {
  try {
    const res = await client.get<User>("/users/1");
    // res luôn có cấu trúc: { success: true, statusCode: "200", data: { id: "1", name: "John" } }
    console.log(res.data.name);
  } catch (error) {
    // Xử lý lỗi sạch sẽ bằng các Custom Exceptions
    console.error("Lỗi:", error.message);
  }
}
```

---

## 📚 Tài liệu chi tiết (Documentation)

Hệ thống tài liệu được chia làm 3 phần rõ ràng, phục vụ từng mục đích tra cứu:

### 1. [USAGE.md](./USAGE.md) - Hướng dẫn sử dụng (Cho Frontend Developers)

> 📖 **Đọc file này nếu bạn muốn biết cách code.**

- Cách thiết lập Auth (Token Storage, Auto Refresh).
- Cách bật Cache, Rate Limit, Deduplication.
- Xử lý lỗi thủ công (try/catch component) vs Xử lý lỗi toàn cục (Global Handler / Toast UI).
- Cách lấy dữ liệu phân trang, upload file, và hủy (abort) request.

### 2. [API_REFERENCE.md](./API_REFERENCE.md) - Rút gọn tra cứu (Cho Frontend Developers)

> 🔍 **Đọc file này khi bạn đang code và lỡ quên tham số.**

- Danh sách tham số cấu hình (`ApiClientConfig`, `ApiClientOptions`).
- Danh sách Override Options cho từng request (`skipCache`, `skipAuth`, `displayError`).
- Bảng tra cứu các Custom Exceptions (Validation, Timeout, Server...).

### 3. [ARCHITECTURE.md](./ARCHITECTURE.md) - Kiến trúc & Luồng chạy (Cho Software Architects/Tech Leads)

> 🏗️ **Đọc file này nếu bạn muốn hiểu nguyên lý hoạt động sâu bên trong.**

- Tại sao áp dụng Clean Architecture + Dependency Inversion.
- Chuỗi sự kiện vòng đời (Lifecycle) của 1 request: Từ lúc rời App -> Đi qua Interceptors Pipeline -> Gửi tới Server -> Nhận về Adapter chuẩn hóa Parser -> Trả về App.
- Hướng dẫn viết Custom Adapter (VD: Custom Fetch, Custom Parser).

---

## 🛠️ Tech Stack & Scripts

- **Language:** TypeScript
- **Engine Core:** Axios & Native Fetch
- **Build tool:** `tsc`
- **Linting & Formatting:** ESLint & Prettier (từ `@acme/eslint-config`)

### Chạy kiểm tra tĩnh (Type-check)

```bash
cd packages/api-client
npm run typecheck
# Hoặc: npx tsc --noEmit
```
