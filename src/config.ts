/**
 * Configuration file cho Birthday Website
 * Chỉnh sửa file này để thay đổi nội dung và màu sắc của website
 */

export interface BirthdayConfig {
  hero: {
    name: string;
    birthday: string;
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
    birthday: "27/12/2003", // Ngày sinh nhật
    subMessage: "Cảm ơn cả nhà vì đã dành chút thời gian ghé thăm góc nhỏ này của em vào một ngày đặc biệt.\n\nTuổi 22 đã gõ cửa. Em tin rằng bất cứ ai xuất hiện trong cuộc đời mình – dù mang đến niềm vui hay để lại nỗi buồn, dù rời đi hay ở lại – tất cả đều là cái duyên, và mỗi cuộc gặp gỡ đều là một sự sắp đặt kỳ diệu. Cảm ơn mọi người vì đã là những mảnh ghép không thể thiếu để tạo nên Kzy của ngày hôm nay.\n\nĐứng trước ngưỡng cửa mới, em muốn nhìn lại chặng đường đã qua để hoàn thiện bản thân hơn. Nếu trong những tháng ngày cũ, em có điều gì khiến mọi người chưa hài lòng, hay đơn giản là có đôi lời muốn nhắn gửi, xin nhờ cả nhà chia sẻ ở đây nhé ạ.", // Lời chúc phụ
  },

  // Danh sách hình ảnh kỷ niệm (URL hoặc đường dẫn local)
  images: [
    "/fig_test1.png",
    "/fig_test2.png",
    "/fig_test3.png",
    "/fig_test4.png",
  ],

  // Cấu hình màu sắc (Pastel Pink & Rose theme - Nhẹ nhàng)
  colors: {
    background: "#fdf2f8", // Pastel Pink - Màu nền chính
    backgroundSecondary: "#fce7f3", // Màu nền phụ (hơi đậm hơn)
    textPrimary: "#831843", // Màu chữ chính (Rose đậm)
    textSecondary: "#9f1239", // Màu chữ phụ
    accent: "#fb7185", // Màu nhấn (Rose)
    accentHover: "#f43f5e", // Màu nhấn khi hover
    gradient1: "#fdf2f8",
    gradient2: "#fce7f3",
    gradient3: "#fb7185",
    neon: "#fb7185",
  },
};

export default config;

