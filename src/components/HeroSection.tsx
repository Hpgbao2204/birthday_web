import { motion } from 'framer-motion';
import config from '../config';

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="text-center space-y-6"
    >
      {/* Tiêu đề chính với gradient */}
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold px-4"
        style={{
          background: `linear-gradient(135deg, ${config.colors.gradient1} 0%, ${config.colors.gradient2} 50%, ${config.colors.gradient3} 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {config.hero.mainMessage}
      </motion.h1>

      {/* Tên người được chúc */}
      <motion.h2
        className="text-6xl md:text-7xl lg:text-8xl font-bold"
        style={{
          color: config.colors.textPrimary,
          textShadow: `0 0 20px ${config.colors.accent}80, 0 0 40px ${config.colors.accent}40`,
        }}
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.3,
          type: 'spring',
          stiffness: 200,
        }}
      >
        {config.hero.name}
      </motion.h2>

      {/* Ngày sinh với neon effect */}
      <motion.p
        className="text-xl md:text-2xl font-medium"
        style={{
          color: config.colors.neon,
          textShadow: `0 0 10px ${config.colors.neon}`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        📅 {config.hero.birthday}
      </motion.p>

      {/* Lời nhắn phụ - Nhiều dòng với whitespace preserved */}
      <motion.div
        className="text-base md:text-lg max-w-3xl mx-auto px-6 leading-relaxed"
        style={{ color: config.colors.textSecondary }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        {config.hero.subMessage.split('\n').map((line, index) => (
          <p key={index} className="mb-4">
            {line}
          </p>
        ))}
      </motion.div>

      {/* Decorative elements với neon glow */}
      <motion.div
        className="flex justify-center gap-6 text-4xl md:text-5xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        {['💖', '✨', '🎂', '✨', '💖'].map((emoji, index) => (
          <motion.span
            key={index}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, -10, 0],
              filter: [
                'drop-shadow(0 0 5px rgba(168, 85, 247, 0.5))',
                'drop-shadow(0 0 20px rgba(236, 72, 153, 0.8))',
                'drop-shadow(0 0 5px rgba(168, 85, 247, 0.5))',
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: index * 0.2,
              ease: 'easeInOut',
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
