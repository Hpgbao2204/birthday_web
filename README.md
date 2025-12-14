# 🎂 Birthday Web - Trang Web Sinh Nhật Tái Sử Dụng

Website sinh nhật với thiết kế Web3 hiện đại, màu sắc rực rỡ, animation mượt mà và tính năng gửi lời chúc qua Firebase.

## ✨ Tính năng

- 🎨 **Thiết kế Web3**: Gradient màu sắc, neon glow, glassmorphism
- 🎭 **Animation động**: Floating particles, glowing orbs, smooth transitions
- 💌 **Gửi lời chúc**: Form gửi lời chúc với Firebase Realtime Database
- 🎉 **Confetti effect**: Bắn pháo giấy trái tim khi gửi lời chúc
- 👀 **Trang xem lời chúc**: Trang riêng để xem tất cả lời chúc đã gửi
- 🐻 **Peeking Bear**: Gấu dễ thương xuất hiện khi người dùng focus vào input
- 🔧 **Tái sử dụng cao**: Chỉ cần sửa file `src/config.ts` để có web mới

## 🚀 Cài đặt & Chạy

### 1. Cài đặt dependencies
```bash
npm install
```

### 2. Cấu hình Firebase (Tùy chọn)
Xem file [FIREBASE_SETUP.md](FIREBASE_SETUP.md) để setup Firebase.

Nếu không setup Firebase, website vẫn chạy được ở **Demo Mode** (chỉ log ra console).

### 3. Chạy development server
```bash
npm run dev
```

Website sẽ chạy tại: `http://localhost:5173`

## 🎨 Tùy chỉnh Website

Mở file `src/config.ts` và chỉnh sửa nội dung, màu sắc theo ý muốn.

## 🌐 Routes

- `/` - Trang chính (gửi lời chúc)
- `/wishes` - Trang xem tất cả lời chúc (dành cho người nhận)

## 🔒 Bảo mật

Firebase được cấu hình với Security Rules:
- ✅ Mọi người có thể **GỬI** lời chúc (write: true)
- ❌ Không ai có thể **ĐỌC** lời chúc từ Firebase trực tiếp (read: false)
- ✅ Chỉ trang `/wishes` có thể đọc và hiển thị

→ **Người gửi KHÔNG THỂ xem lời chúc của người khác!**

## 🛠️ Tech Stack

- React 18 + TypeScript
- Vite + Tailwind CSS
- Framer Motion
- React Router
- Firebase Realtime Database
- Canvas Confetti

---

Made with 💖
