# API Client

HTTP Client được xây dựng bằng **TypeScript** theo hướng **modular architecture**, giúp chuẩn hóa việc gọi API trong các ứng dụng frontend hoặc backend.

Thư viện hỗ trợ:

- Authentication (Access Token / Refresh Token)
- Retry mechanism
- Request caching
- Error handling chuẩn hóa
- File upload / download
- Axios interceptor system
- Logging request/response

---

# 🚀 Getting Started

## 1. Clone repository

```bash
git clone https://github.com/your-org/api-client.git
cd api-client
```

---

# 📦 Install Dependencies

Project sử dụng **pnpm**

```bash
pnpm install
```

---

# 🧪 Development

Chạy project ở chế độ development

```bash
pnpm dev
```

---

# 🏗 Build

Build library

```bash
pnpm build
```

Output sẽ được generate trong thư mục:

```
dist/
```

---

# 🧹 Lint

```bash
pnpm lint
```

---

# 🧪 Test

```bash
pnpm test
```

---

# 📁 Project Structure

```
src/api-client/
│
├── core/
│   ├── config/
│   │   └── api.config.ts
│   │
│   ├── constants/
│   │   ├── http-status.constant.ts
│   │   └── error.constant.ts
│   │
│   └── types/
│       ├── api.types.ts
│       ├── request.types.ts
│       ├── response.types.ts
│       └── error.types.ts
│
├── client/
│   ├── http-client.interface.ts
│   │
│   └── axios/
│       ├── axios-client.ts
│       └── axios-instance.factory.ts
│
├── interceptors/
│   ├── interceptor.interface.ts
│   ├── auth.interceptor.ts
│   ├── logging.interceptor.ts
│   ├── retry.interceptor.ts
│   └── cache.interceptor.ts
│
├── error/
│   ├── exceptions/
│   │   ├── base.exception.ts
│   │   ├── network.exception.ts
│   │   ├── timeout.exception.ts
│   │   ├── unauthorized.exception.ts
│   │   ├── forbidden.exception.ts
│   │   ├── not-found.exception.ts
│   │   ├── validation.exception.ts
│   │   └── server.exception.ts
│   │
│   ├── error-factory.ts
│   └── error-handler.interface.ts
│
├── parser/
│   ├── response-parser.interface.ts
│   └── response-parser.ts
│
├── auth/
│   ├── token-storage.interface.ts
│   ├── token-storage.ts
│   ├── token-refresh-handler.interface.ts
│   └── token-refresh-handler.ts
│
├── cache/
│   ├── cache-storage.interface.ts
│   └── memory-cache.storage.ts
│
├── notification/
│   ├── notification.interface.ts
│   └── noop-notification.ts
│
└── index.ts
```

---

# 🧠 Architecture Overview

API Client được chia thành các module chính:

### core

Chứa các thành phần cơ bản:

- config
- constants
- shared types

---

### client

Định nghĩa HTTP client abstraction và implementation với **Axios**.

---

### interceptors

Hệ thống interceptor để xử lý các logic cross-cutting:

- Authentication
- Logging
- Retry
- Caching

---

### error

Hệ thống xử lý lỗi chuẩn hóa:

- Custom exceptions
- Error factory
- Error handler

---

### parser

Xử lý và chuẩn hóa response từ API.

---

### auth

Quản lý authentication:

- Token storage
- Token refresh handler

---

### cache

Cơ chế caching cho request.

---

### notification

Notification handler (placeholder implementation).

---

# 🛠 Tech Stack

- TypeScript
- Axios
- Modular architecture
- Interceptor pattern

---

# 🤝 Contributing

1. Fork repository

2. Tạo branch mới

```bash
git checkout -b feature/new-feature
```

3. Commit

```bash
git commit -m "feat: add new feature"
```

4. Push branch

```bash
git push origin feature/new-feature
```

5. Tạo Pull Request

---

# 📄 License

MIT License
