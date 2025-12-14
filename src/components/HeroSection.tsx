import { motion } from 'framer-motion';
import config from '../config';

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="text-center space-y-4"
    >
      {/* Tiêu đề chính */}
      <motion.h1
        className="text-4xl md:text-6xl lg:text-7xl font-bold"
        style={{ color: config.colors.accent }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {config.hero.mainMessage}
      </motion.h1>

      {/* Tên người được chúc - Font Pacifico */}
      <motion.h2
        className="text-5xl md:text-7xl lg:text-8xl font-pacifico"
        style={{ color: config.colors.textPrimary }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.3,
          type: 'spring',
          stiffness: 200,
        }}
      >
        {config.hero.name}
      </motion.h2>

      {/* Ngày sinh */}
      <motion.p
        className="text-xl md:text-2xl lg:text-3xl font-medium"
        style={{ color: config.colors.textSecondary }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        📅 {config.hero.birthday}
      </motion.p>

      {/* Lời nhắn phụ */}
      <motion.p
        className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-4"
        style={{ color: config.colors.textSecondary }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        {config.hero.subMessage}
      </motion.p>

      {/* Decorative hearts */}
      <motion.div
        className="flex justify-center gap-4 text-3xl md:text-4xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        {['💖', '✨', '🎂', '✨', '💖'].map((emoji, index) => (
          <motion.span
            key={index}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          >
            {emoji}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
