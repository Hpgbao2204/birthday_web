import { motion } from 'framer-motion';
import SoftBackground from '../components/SoftBackground';
import config from '../config';
import { Link } from 'react-router-dom';

const WishesGallery = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <SoftBackground />
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl w-full"
        >
          <div
            className="bg-white/95 backdrop-blur-md rounded-3xl md:rounded-[3rem] p-8 md:p-12 shadow-2xl text-center"
            style={{ border: `3px solid ${config.colors.accent}` }}
          >
            <motion.div
              className="mb-6 md:mb-8"
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{
                rotate: { duration: 3, repeat: Infinity, ease: 'linear' },
                scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
              }}
            >
              <div className="text-6xl md:text-8xl">✨</div>
            </motion.div>
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
              style={{
                background: `linear-gradient(135deg, ${config.colors.accent}, ${config.colors.accentHover})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: "'Pacifico', cursive",
              }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              Cảm ơn bạn đã ghé thăm! 💕
            </motion.h1>
            <p className="text-base md:text-xl mb-6 md:mb-8 leading-relaxed px-2" style={{ color: config.colors.textPrimary }}>
              Lời chúc của bạn đã được ghi nhận và là món quà vô cùng ý nghĩa! 🎁
            </p>
            <div className="flex justify-center gap-2 md:gap-3 mb-6 md:mb-8">
              {['💕', '✨', '🌸', '💖', '🎀'].map((emoji, index) => (
                <motion.div
                  key={index}
                  className="text-2xl md:text-3xl"
                  animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, delay: index * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {emoji}
                </motion.div>
              ))}
            </div>
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 md:px-8 md:py-4 rounded-2xl font-bold text-white text-base md:text-lg shadow-xl"
                style={{ background: `linear-gradient(135deg, ${config.colors.accent}, ${config.colors.accentHover})` }}
              >
                🏠 Quay lại trang chủ
              </motion.button>
            </Link>
            <motion.div
              className="mt-6 md:mt-8 text-xs md:text-sm opacity-70 px-2"
              style={{ color: config.colors.textSecondary }}
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              Mọi lời chúc đều được giữ kín và chỉ {config.hero.name} mới có thể xem 🤫
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WishesGallery;
