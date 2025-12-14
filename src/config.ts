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
    gradient1?: string;
    gradient2?: string;
    gradient3?: string;
    neon?: string;
  };
}

const config: BirthdayConfig = {
  // Thông tin nhân vật chính
  hero: {
    name: "Kzy", // Tên người được chúc mừng
    birthday: "14/12/2003", // Ngày sinh nhật
    mainMessage: "✨ Chào mừng đến với ngưỡng cửa 22 tuổi ✨", // Lời chúc chính
    subMessage: "Cảm ơn cả nhà vì đã dành chút thời gian ghé thăm góc nhỏ này của em vào một ngày đặc biệt.\n\nTuổi 22 đã gõ cửa. Em tin rằng bất cứ ai xuất hiện trong cuộc đời mình – dù mang đến niềm vui hay để lại nỗi buồn, dù rời đi hay ở lại – tất cả đều là cái duyên, và mỗi cuộc gặp gỡ đều là một sự sắp đặt kỳ diệu. Cảm ơn mọi người vì đã là những mảnh ghép không thể thiếu để tạo nên Kzy của ngày hôm nay.\n\nĐứng trước ngưỡng cửa mới, em muốn nhìn lại chặng đường đã qua để hoàn thiện bản thân hơn. Nếu trong những tháng ngày cũ, em có điều gì khiến mọi người chưa hài lòng, hay đơn giản là có đôi lời muốn nhắn gửi, xin nhờ cả nhà chia sẻ ở đây nhé ạ.", // Lời chúc phụ
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

  // Cấu hình màu sắc (Web3 Vibrant Theme - Gradient & Neon)
  colors: {
    background: "#0a0118", // Dark purple/black - Web3 style
    backgroundSecondary: "#1a0b2e", // Deep purple
    textPrimary: "#ffffff", // White text
    textSecondary: "#c7d2fe", // Light purple/blue
    accent: "#a855f7", // Purple accent
    accentHover: "#c084fc", // Lighter purple hover
    gradient1: "#8b5cf6", // Violet
    gradient2: "#ec4899", // Pink
    gradient3: "#06b6d4", // Cyan
    neon: "#22d3ee", // Neon cyan
  },
};

export default config;
