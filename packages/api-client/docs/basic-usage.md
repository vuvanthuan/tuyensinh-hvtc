# API Client Library

Thư viện **HTTP Client** được xây dựng theo **Clean Architecture**, hỗ trợ đầy đủ các tính năng:

- Authentication
- Token Refresh
- Caching
- Retry Mechanism
- Error Handling
- File Upload / Download
- React & Next.js Integration

---

# 📦 Cài Đặt

```bash
npm install @your-org/api-client axios
```

hoặc

```bash
yarn add @your-org/api-client axios
```

hoặc

```bash
pnpm add @your-org/api-client axios
```

---

# 🚀 Khởi Tạo Nhanh

```javascript
import { ApiClient } from "@your-org/api-client";

const apiClient = new ApiClient({
  baseURL: "https://api.example.com",
  timeout: 30000,
});
```

---

# 📝 Các Loại Request

## GET Request

### Lấy danh sách

```javascript
const response = await apiClient.get("/users");
console.log(response.data);
```

### Với Query Params

```javascript
const users = await apiClient.get("/users", {
  page: 1,
  limit: 10,
  search: "john",
});
```

### Với Metadata (Phân trang)

```javascript
const result = await apiClient.getWithMeta("/users", {
  page: 1,
  limit: 10,
});

console.log("Data:", result.data);
console.log("Pagination:", result.metaData);
```

---

## POST Request

```javascript
const newUser = await apiClient.post("/users", {
  name: "Nguyễn Văn A",
  email: "nguyenvana@example.com",
});
```

---

## PUT / PATCH Request

### Cập nhật toàn bộ

```javascript
await apiClient.put("/users/1", {
  name: "Nguyễn Văn B",
  email: "nguyenvanb@example.com",
});
```

### Cập nhật một phần

```javascript
await apiClient.patch("/users/1", {
  name: "Nguyễn Văn C",
});
```

---

## DELETE Request

```javascript
await apiClient.delete("/users/1");
```

---

# 🔐 Authentication

## Quản lý Token

```javascript
import { LocalStorageTokenStorage } from "@your-org/api-client";

const tokenStorage = LocalStorageTokenStorage.getInstance();
```

### Lưu token sau khi login

```javascript
tokenStorage.setTokens({
  accessToken: "eyJhbGciOiJIUzI1NiIs...",
  refreshToken: "dGhpcyBpcyBhIHJlZnJlc2ggdG9rZW4...",
  expiresIn: 3600,
  tokenType: "Bearer",
});
```

### Kiểm tra đăng nhập

```javascript
const isLoggedIn = tokenStorage.isAuthenticated();
```

### Lấy token

```javascript
const accessToken = tokenStorage.getAccessToken();
```

### Đăng xuất

```javascript
tokenStorage.clearTokens();
```

---

## Tự động thêm token

```javascript
const apiClient = new ApiClient(
  {
    baseURL: "https://api.example.com",
  },
  {
    tokenStorage,
  },
);

await apiClient.get("/protected-resource");
```

Header tự động được thêm:

```
Authorization: Bearer <token>
```

---

## Custom Auth Header

### API Key

```javascript
await apiClient.get("/api/data", undefined, {
  customAuthHeader: "X-API-Key",
  token: "your-api-key-here",
  authType: "",
});
```

### Basic Auth

```javascript
await apiClient.get("/api/data", undefined, {
  authType: "Basic",
  token: btoa("username:password"),
});
```

---

# 📤 Upload File

```javascript
const file = document.getElementById("fileUpload").files[0];

const response = await apiClient.upload("/upload", file, (percentage) => {
  console.log(`Upload progress: ${percentage}%`);
});
```

### Upload với dữ liệu bổ sung

```javascript
await apiClient.upload(
  "/upload",
  file,
  (percentage) => console.log(`${percentage}%`),
  { isFormData: true },
  {
    description: "Tài liệu quan trọng",
    userId: "123",
  },
);
```

---

# 📥 Download File

### Download và tự động lưu

```javascript
await apiClient.download(
  "/files/document.pdf",
  { id: 123 },
  { fileName: "tai-lieu", fileType: "pdf" },
);
```

### Download và xử lý Blob

```javascript
const blob = await apiClient.download("/files/data.json");

const text = await blob.text();
const data = JSON.parse(text);
```

---

# 🚦 Error Handling

## Các loại Exception

```javascript
import {
  ForbiddenException,
  HttpException,
  NetworkException,
  NotFoundException,
  ServerException,
  TimeoutException,
  UnauthorizedException,
  ValidationException,
} from "@your-org/api-client";
```

---

## Xử lý lỗi chi tiết

```javascript
try {
  const data = await apiClient.get("/protected-data");
} catch (error) {
  if (error instanceof UnauthorizedException) {
    console.log("Phiên đăng nhập hết hạn");
    redirectToLogin();
  } else if (error instanceof ForbiddenException) {
    console.log("Bạn không có quyền truy cập");
  } else if (error instanceof NotFoundException) {
    console.log("Không tìm thấy dữ liệu");
  } else if (error instanceof ValidationException) {
    console.log("Dữ liệu không hợp lệ:", error.errors);
  } else if (error instanceof NetworkException) {
    console.log("Mất kết nối mạng");
  } else if (error instanceof TimeoutException) {
    console.log("Request timeout");
  } else if (error instanceof ServerException) {
    console.log(`Lỗi server ${error.statusCodeNumber}`);
  } else if (error instanceof HttpException) {
    console.log(`Lỗi ${error.code}: ${error.message}`);
  }
}
```

---

# 💾 Caching

```javascript
import { MemoryCacheStorage } from "@your-org/api-client";

const cache = new MemoryCacheStorage();

const apiClient = new ApiClient(
  {
    baseURL: "https://api.example.com",
    cacheConfig: {
      enabled: true,
      defaultTTL: 300000,
    },
  },
  {
    cache,
  },
);
```

### Request sẽ được cache

```javascript
await apiClient.get("/users"); // gọi API
await apiClient.get("/users"); // lấy từ cache
```

### TTL tùy chỉnh

```javascript
await apiClient.get("/realtime-data", undefined, {
  cacheTTL: 30000,
});
```

### Bỏ qua cache

```javascript
await apiClient.get("/live-data", undefined, {
  skipCache: true,
});
```

---

# 🔄 Retry Mechanism

```javascript
const apiClient = new ApiClient({
  baseURL: "https://api.example.com",
  retryConfig: {
    maxRetries: 3,
    retryDelay: 1000,
    backoffFactor: 2,
    retryCondition: (error) => {
      return !error.response || error.response.status >= 500;
    },
  },
});
```

### Bỏ retry cho request cụ thể

```javascript
await apiClient.get("/critical", undefined, {
  skipRetry: true,
});
```

---

# 🎯 Request Options

```ts
interface IRequestOptions {
  token?: string;
  withToken?: boolean;
  authType?: string;
  customAuthHeader?: string;
  skipAuth?: boolean;

  displayError?: boolean;

  isFormData?: boolean;

  skipRetry?: boolean;

  skipCache?: boolean;
  cacheTTL?: number;
}
```

### Ví dụ

```javascript
await apiClient.get(
  "/users",
  { page: 1 },
  {
    skipCache: true,
    displayError: false,
    skipRetry: true,
    cacheTTL: 60000,
  },
);
```

---

# ⚛️ Sử Dụng Với React

## Custom Hook

```javascript
import { useCallback, useState } from "react";

import { apiClient } from "./api-client";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = useCallback(async () => {
    setLoading(true);

    try {
      const response = await apiClient.get("/users");
      setUsers(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { users, loading, error, fetchUsers };
}
```

---

## React Component

```jsx
import React, { useEffect } from "react";

import { useUsers } from "./hooks/useUsers";

export function UserList() {
  const { users, loading, error, fetchUsers } = useUsers();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>Đang tải...</div>;
  if (error) return <div>Lỗi: {error}</div>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

---

# ⚡ Sử Dụng Với Next.js

## Server Component

```javascript
import { createServerApiClient } from "@/lib/server-api";

export default async function UsersPage() {
  const apiClient = createServerApiClient();
  const response = await apiClient.get("/users");

  return (
    <ul>
      {response.data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

---

## API Route

```javascript
import { createServerApiClient } from "@/lib/server-api";

export async function GET() {
  try {
    const apiClient = createServerApiClient();
    const response = await apiClient.get("/users");

    return Response.json({
      success: true,
      data: response.data,
    });
  } catch (error) {
    return Response.json(
      { success: false, message: "Lỗi server" },
      { status: 500 },
    );
  }
}
```

---

# 📋 Ví Dụ Hoàn Chỉnh

```javascript
import {
  ApiClient,
  LocalStorageTokenStorage,
  MemoryCacheStorage,
} from "@your-org/api-client";

const tokenStorage = LocalStorageTokenStorage.getInstance();
const cache = new MemoryCacheStorage();

const apiClient = new ApiClient(
  {
    baseURL: "https://api.example.com",
    timeout: 30000,
  },
  {
    tokenStorage,
    cache,
  },
);
```

---

# 🔧 Cấu Hình Nâng Cao

```javascript
const apiClient = new ApiClient(
  {
    baseURL: "https://api.example.com",
    timeout: 30000,
    withCredentials: true,
    headers: {
      "X-Custom-Header": "value",
    },
  },
  {
    tokenStorage: LocalStorageTokenStorage.getInstance(),
    cache: new MemoryCacheStorage(),
  },
);
```

---

# 🏗 Kiến Trúc

Thư viện được thiết kế theo **Clean Architecture**

- Domain Layer
- Application Layer
- Infrastructure Layer
- Interface Layer

Giúp:

- Dễ test
- Dễ mở rộng
- Dễ thay thế adapter (axios, fetch)
- Tách biệt business logic và infrastructure

---

# 📄 License

MIT License
