# 🔥 Hướng dẫn Setup Firebase

## 1. Tạo Firebase Project

1. Truy cập [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"** → Đặt tên project → Create

## 2. Tạo Realtime Database

1. Sidebar: **Build** > **Realtime Database** → **Create Database**
2. Chọn location: `asia-southeast1`
3. Chọn **"Start in test mode"** → **Enable**

## 3. Cấu hình Security Rules

Vào tab **"Rules"** và paste:

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

Click **"Publish"**.

## 4. Lấy Firebase Config

1. Click icon ⚙️ → **Project settings**
2. Scroll xuống **"Your apps"** → Click icon **"</>"** (Web)
3. Đặt tên app → **Register app**
4. Copy `firebaseConfig` object

## 5. Cấu hình Project

Copy file `.env.example` thành `.env`:

```bash
cp .env.example .env
```

Mở `.env` và điền thông tin Firebase từ bước 4:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://your-project-default-rtdb.firebaseio.com
VITE_FIREBASE_PROJECT_ID=your-project
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:xxxxxxxxxxxxx
VITE_ADMIN_PASSWORD=your_password
```

## 6. Test

```bash
npm install
npm run dev
```

Mở `http://localhost:5173` và thử gửi lời chúc!

---

**Lưu ý:** File `.env` đã được thêm vào `.gitignore`, không bị push lên Git.
