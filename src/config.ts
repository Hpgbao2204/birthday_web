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
    "/fig_test.png",
    "/fig_test.png",
    "/fig_test.png",
    "/fig_test.png",
    "/fig_test.png",
    "/fig_test.png",
    "/fig_test.png",
    "/fig_test.png",
    "/fig_test.png",
    "/fig_test.png",
    "/fig_test.png",
    "/fig_test.png",
    "/fig_test.png",
    "/fig_test.png",
    "/fig_test.png",
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
