# 🚀 Hướng dẫn Deploy lên Vercel

## Cách 1: Deploy qua Vercel CLI (Nhanh nhất)

### 1. Cài đặt Vercel CLI
```bash
npm install -g vercel
```

### 2. Login vào Vercel
```bash
vercel login
```

### 3. Deploy
Chạy lệnh trong thư mục project:
```bash
vercel
```

Làm theo hướng dẫn:
- Set up and deploy? **Y**
- Which scope? Chọn account của bạn
- Link to existing project? **N** (lần đầu)
- What's your project's name? `birthday-web` (hoặc tên khác)
- In which directory is your code located? `./`
- Want to override the settings? **N**

### 4. Deploy Production
Sau khi test xong, deploy lên production:
```bash
vercel --prod
```

---

## Cách 2: Deploy qua Vercel Dashboard (Dễ dàng)

### 1. Push code lên GitHub

Nếu chưa có Git repo:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/birthday-web.git
git push -u origin main
```

### 2. Import vào Vercel

1. Truy cập [Vercel](https://vercel.com/)
2. Click **"Add New"** → **"Project"**
3. Import GitHub repository của bạn
4. Vercel sẽ tự động detect Vite framework
5. Click **"Deploy"**

### 3. Cấu hình Environment Variables

Trong Vercel Dashboard:
1. Vào **Settings** → **Environment Variables**
2. Thêm các biến từ file `.env`:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://your_project-default-rtdb.firebaseio.com
VITE_FIREBASE_PROJECT_ID=your_project
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:xxxxxxxxxxxxx
VITE_ADMIN_PASSWORD=your_password
```

3. Click **"Save"**
4. Redeploy project: **Deployments** → **...** → **Redeploy**

---

## Cách 3: Deploy thủ công (Upload folder dist)

### 1. Build project
```bash
npm run build
```

### 2. Test local
```bash
npm run preview
```

### 3. Deploy
1. Vào [Vercel Dashboard](https://vercel.com/new)
2. Chọn **"Deploy"** tab
3. Kéo thả folder `dist` vào
4. Đợi deploy xong

⚠️ **Lưu ý:** Với cách này, bạn phải cấu hình Environment Variables thủ công sau khi deploy.

---

## 🔧 Troubleshooting

### Lỗi: 404 khi refresh trang
✅ **Đã fix**: File `vercel.json` đã được tạo với rewrites config.

### Lỗi: Firebase không hoạt động
✅ **Kiểm tra**: 
- Environment Variables đã được thêm đúng chưa?
- Firebase Rules đã được cập nhật chưa?

### Lỗi: Build failed
✅ **Kiểm tra**:
```bash
npm run build
```
Xem lỗi gì và sửa trước khi deploy.

---

## 📱 Sau khi Deploy

### 1. Test website
- Truy cập URL Vercel cung cấp
- Test gửi lời chúc
- Vào `/admin` để kiểm tra

### 2. Custom Domain (Tùy chọn)
1. Vào **Settings** → **Domains**
2. Thêm domain của bạn
3. Cấu hình DNS theo hướng dẫn

### 3. Cập nhật Firebase Rules
Nếu chưa cập nhật Firebase Security Rules:
1. Vào [Firebase Console](https://console.firebase.google.com/)
2. Realtime Database → **Rules**
3. Update theo file `FIREBASE_SETUP.md`

---

## 🎉 Xong!

Website của bạn đã online tại: `https://your-project.vercel.app`

Mỗi lần push code lên GitHub (nếu dùng Cách 2), Vercel sẽ tự động deploy lại!
