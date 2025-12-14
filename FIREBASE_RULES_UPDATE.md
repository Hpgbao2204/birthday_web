# 🔥 Firebase Rules Cập Nhật

## Rules mới cho phép Admin đọc lời chúc

Vào Firebase Console > Realtime Database > Rules và paste code sau:

```json
{
  "rules": {
    "wishes": {
      ".read": "auth != null || request.auth != null",
      ".write": true,
      "$wishId": {
        ".validate": "newData.hasChildren(['name', 'wish', 'timestamp'])"
      }
    }
  }
}
```

**LƯU Ý:** Vì không sử dụng Firebase Auth, rules trên sẽ không hoạt động.

## ✅ Solution: Rules đơn giản cho project này

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
- `.read: true` - Cho phép đọc (cần thiết cho trang Admin)
- `.write: true` - Cho phép gửi lời chúc
- Bảo mật bằng mật khẩu ở Frontend (trang /admin)

## Hoặc: Rules bảo mật hơn với Secret Key

Nếu muốn bảo mật tốt hơn:

```json
{
  "rules": {
    "wishes": {
      ".read": "query.orderByChild == 'adminKey' && query.equalTo == 'SECRET_KEY_123'",
      ".write": true,
      "$wishId": {
        ".validate": "newData.hasChildren(['name', 'wish', 'timestamp'])"
      }
    }
  }
}
```

Nhưng cách đơn giản nhất là **sử dụng Rules thứ 2** (read: true, write: true) và bảo vệ trang admin bằng mật khẩu như hiện tại.

---

## 🚀 Bước thực hiện:

1. Vào Firebase Console: https://console.firebase.google.com/
2. Chọn project của bạn
3. Sidebar trái: Realtime Database
4. Tab: **Rules**
5. Xóa rules cũ, paste rules mới (đề xuất dùng rules thứ 2)
6. Click **"Publish"**
7. Refresh trang Admin: http://localhost:5173/admin

Xong! 🎉
