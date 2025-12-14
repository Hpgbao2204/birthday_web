# 🔥 Hướng dẫn Setup Firebase cho Birthday Web

## Bước 1: Tạo Firebase Project

1. Truy cập [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"** hoặc **"Thêm dự án"**
3. Đặt tên project (ví dụ: `birthday-web`)
4. (Tùy chọn) Tắt Google Analytics nếu không cần
5. Click **"Create project"**

## Bước 2: Tạo Realtime Database

1. Trong Firebase Console, chọn project vừa tạo
2. Ở sidebar bên trái, click **"Build"** > **"Realtime Database"**
3. Click **"Create Database"**
4. Chọn location gần nhất (ví dụ: `asia-southeast1`)
5. Chọn **"Start in test mode"** (để dễ dàng phát triển)
6. Click **"Enable"**

## Bước 3: Cấu hình Security Rules (Quan trọng!)

Sau khi tạo database, vào tab **"Rules"** và paste rules sau:

```json
{
  "rules": {
    "wishes": {
      ".read": true,
      ".write": true,
      "$wishId": {
        ".validate": "newData.hasChildren(['name', 'wish', 'timestamp'])"
      }
    }
  }
}
```

**Giải thích:**
- `.read: true` - Cho phép đọc lời chúc (cần thiết cho trang Admin)
- `.write: true` - Mọi người có thể gửi lời chúc
- `.validate` - Kiểm tra dữ liệu có đầy đủ trường bắt buộc
- Bảo mật: Trang admin được bảo vệ bằng mật khẩu ở frontend

Click **"Publish"** để lưu rules.

## Bước 4: Lấy Firebase Config

1. Trong Firebase Console, click icon ⚙️ (Settings) bên cạnh **"Project Overview"**
2. Chọn **"Project settings"**
3. Scroll xuống phần **"Your apps"**
4. Click icon **"</>"** (Web)
5. Đặt tên app (ví dụ: `Birthday Web`)
6. **KHÔNG** chọn Firebase Hosting
7. Click **"Register app"**
8. Copy toàn bộ `firebaseConfig` object

## Bước 5: Cấu hình trong Project

### Cách 1: Sử dụng Environment Variables (Khuyến nghị)

1. Copy file `.env.example` thành `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Mở `.env.local` và điền thông tin Firebase:
   ```env
   VITE_FIREBASE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   VITE_FIREBASE_DATABASE_URL=https://your-project-default-rtdb.firebaseio.com
   VITE_FIREBASE_PROJECT_ID=your-project
   VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
   VITE_FIREBASE_APP_ID=1:123456789:web:xxxxxxxxxxxxx
   ```

3. Cập nhật `src/firebase.ts` để sử dụng env variables:
   ```typescript
   const firebaseConfig = {
     apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
     authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
     databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
     projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
     storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
     messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
     appId: import.meta.env.VITE_FIREBASE_APP_ID,
   };
   ```

### Cách 2: Hard-code trực tiếp (Nhanh hơn cho test)

Mở `src/firebase.ts` và thay thế các giá trị `YOUR_XXX`:

```typescript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "your-project.firebaseapp.com",
  databaseURL: "https://your-project-default-rtdb.firebaseio.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:xxxxxxxxxxxxx"
};
```

## Bước 6: Test

1. Chạy dev server:
   ```bash
   npm run dev
   ```

2. Mở browser tại `http://localhost:5173`

3. Thử gửi một lời chúc

4. Kiểm tra Firebase Console > Realtime Database để xem dữ liệu đã được lưu

## Xem dữ liệu trong Firebase Console

1. Vào Firebase Console > Realtime Database
2. Sẽ thấy cấu trúc như sau:
   ```
   wishes
   ├── -NxxxxxxxxxxxX
   │   ├── name: "John"
   │   ├── wish: "Happy Birthday!"
   │   ├── timestamp: 1734182400000
   │   └── date: "2024-12-14T12:00:00.000Z"
   └── -NyyyyyyyyyyyY
       ├── name: "Jane"
       └── ...
   ```

## Lưu ý quan trọng

⚠️ **Security**: Rules hiện tại chỉ phù hợp cho development. Khi deploy production, nên:
- Thêm rate limiting
- Validate dữ liệu nghiêm ngặt hơn
- Có thể thêm CAPTCHA để chống spam

🔒 **Bảo mật API Key**: File `.env.local` đã được thêm vào `.gitignore`, không push lên Git!

---

Nếu gặp lỗi, check console browser (F12) để xem thông báo lỗi chi tiết.
