# 🎂 Birthday Web - Trang Web Sinh Nhật Tái Sử Dụng

Website sinh nhật với thiết kế pastel dễ thương, animation mượt mà và tính năng gửi lời chúc qua Firebase.

## ✨ Tính năng

- 🎨 **Thiết kế đẹp mắt**: Màu pastel mềm mại, glassmorphism
- 🎭 **Animation động**: Floating images, smooth transitions
- 💌 **Gửi lời chúc**: Form gửi lời chúc với Firebase Realtime Database
- 🎉 **Confetti effect**: Bắn pháo giấy trái tim khi gửi lời chúc
- � **Admin page**: Trang quản trị để xem tất cả lời chúc (có mật khẩu)
- 🔧 **Tái sử dụng cao**: Chỉ cần sửa file `src/config.ts` để có web mới

## 🚀 Cài đặt & Chạy

### 1. Cài đặt
```bash
npm install
```

### 2. Cấu hình Firebase
Xem file [FIREBASE_SETUP.md](FIREBASE_SETUP.md) để setup Firebase.

### 3. Chạy project
```bash
npm run dev
```

Website chạy tại: `http://localhost:5173`

## 🎨 Tùy chỉnh

Xem file [CUSTOMIZATION.md](CUSTOMIZATION.md) để biết chi tiết cách:

- Thay đổi nội dung, tên, lời cảm ơn
- Thay hình ảnh
- Đổi màu theme
- Thay mật khẩu admin

## 🌐 Routes

- `/` - Trang chính (gửi lời chúc)
- `/wishes` - Trang cảm ơn (không hiển thị lời chúc)
- `/admin` - Trang admin (xem tất cả lời chúc)

## 🔒 Bảo mật

- Mật khẩu admin được cấu hình trong `.env`
- File `.env` không được push lên Git
- Firebase rules cho phép ghi và đọc lời chúc

## 🛠️ Tech Stack

- React 18 + TypeScript
- Vite + Tailwind CSS
- Framer Motion
- React Router
- Firebase Realtime Database
- Canvas Confetti

---

Made with 💖
