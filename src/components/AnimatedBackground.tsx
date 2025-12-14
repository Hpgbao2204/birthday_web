import { motion } from 'framer-motion';
import config from '../config';

/**
 * Component tạo background động với hình ảnh chạy
 * Sử dụng Masonry Grid layout với infinite scroll animation
 */
const AnimatedBackground = () => {
  // Tạo 3 cột để có hiệu ứng Masonry staggered
  const columns = [
    config.images.slice(0, 5),
    config.images.slice(5, 10),
    config.images.slice(10, 15),
  ];

  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      {/* Container cho Masonry Grid */}
      <div className="flex gap-4 h-[200%]">
        {columns.map((columnImages, columnIndex) => (
          <motion.div
            key={columnIndex}
            className="flex-1 flex flex-col gap-4"
            initial={{ y: columnIndex % 2 === 0 ? 0 : '-50%' }}
            animate={{
              y: columnIndex % 2 === 0 ? '-50%' : '0%',
            }}
            transition={{
              duration: 40 + columnIndex * 5, // Mỗi cột có tốc độ khác nhau
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {/* Duplicate images để tạo infinite loop */}
            {[...columnImages, ...columnImages].map((image, index) => (
              <div
                key={`${columnIndex}-${index}`}
                className="relative rounded-2xl overflow-hidden shadow-lg"
                style={{
                  height: `${200 + (index % 3) * 50}px`, // Chiều cao ngẫu nhiên cho Masonry effect
                }}
              >
                <img
                  src={image}
                  alt={`Memory ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Overlay màu hồng nhạt với độ mờ 75% */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(180deg, 
            ${config.colors.background}E6 0%, 
            ${config.colors.background}BF 50%, 
            ${config.colors.background}E6 100%)`,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
