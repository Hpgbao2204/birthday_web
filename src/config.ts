/**
 * Configuration file cho Birthday Website
 * Chỉnh sửa file này để thay đổi nội dung và màu sắc của website
 */

export interface BirthdayConfig {
  hero: {
    name: string;
    birthday: string;
    mainMessage: string;
    subMessage: string;
  };
  images: string[];
  colors: {
    background: string;
    backgroundSecondary: string;
    textPrimary: string;
    textSecondary: string;
    accent: string;
    accentHover: string;
  };
}

const config: BirthdayConfig = {
  // Thông tin nhân vật chính
  hero: {
    name: "Bé Yêu", // Tên người được chúc mừng
    birthday: "14/12/2024", // Ngày sinh nhật
    mainMessage: "Chúc mừng sinh nhật!", // Lời chúc chính
    subMessage: "Chúc bạn một ngày thật vui vẻ và hạnh phúc! 🎉", // Lời chúc phụ
  },

  // Danh sách hình ảnh kỷ niệm (URL hoặc đường dẫn local)
  images: [
    "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800",
    "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800",
    "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800",
    "https://images.unsplash.com/photo-1481484295371-96b91bdd76f6?w=800",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800",
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800",
    "https://images.unsplash.com/photo-1531756716853-09a60d38d820?w=800",
    "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800",
    "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800",
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800",
  ],

  // Cấu hình màu sắc (Pastel Pink & Rose theme)
  colors: {
    background: "#fdf2f8", // Pastel Pink - Màu nền chính
    backgroundSecondary: "#fce7f3", // Màu nền phụ (hơi đậm hơn)
    textPrimary: "#831843", // Màu chữ chính (Rose đậm)
    textSecondary: "#9f1239", // Màu chữ phụ
    accent: "#fb7185", // Màu nhấn (Rose)
    accentHover: "#f43f5e", // Màu nhấn khi hover
  },
};

export default config;
