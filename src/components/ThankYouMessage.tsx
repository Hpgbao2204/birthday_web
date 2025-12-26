import { motion } from 'framer-motion';
import config from '../config';

interface ThankYouMessageProps {
  name: string;
}

const ThankYouMessage = ({ name }: ThankYouMessageProps) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, rotate: -180 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 15,
      }}
      className="text-center space-y-4"
    >
      {/* Emoji Animation */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="text-5xl md:text-6xl"
      >
        🎉
      </motion.div>

      {/* Thank you message */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="space-y-3 md:space-y-4 max-w-2xl mx-auto"
      >
        <h3
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4"
          style={{ color: config.colors.accent }}
        >
          Cảm ơn {name}! 💕
        </h3>

        <p
          className="text-sm md:text-base lg:text-lg leading-relaxed px-3 md:px-4"
          style={{ color: config.colors.textPrimary }}
        >
          Cảm ơn <span className="font-semibold" style={{ color: config.colors.accent }}>{name}</span> đã để lại những dòng nhắn gửi trân quý này.
          Đây chính là món quà sinh nhật tuyệt vời nhất để em bước vào tuổi 22 vững vàng hơn. 🎂✨
        </p>

        <p
          className="text-sm md:text-base lg:text-lg leading-relaxed px-3 md:px-4"
          style={{ color: config.colors.textPrimary }}
        >
          Chúc <span className="font-semibold" style={{ color: config.colors.accent }}>{name}</span> một ngày thật bình yên nhé! 🌸
        </p>

        <p
          className="text-sm md:text-base lg:text-lg leading-relaxed px-3 md:px-4 italic"
          style={{ color: config.colors.textSecondary }}
        >
          Một lần nữa, cảm ơn <span className="font-semibold" style={{ color: config.colors.accent }}>{name}</span> vì đã là một phần trong "sự sắp đặt kỳ diệu" của cuộc đời Kzy. 💫
        </p>
      </motion.div>

      {/* Floating hearts */}
      <div className="flex justify-center gap-3 md:gap-4 text-xl md:text-2xl">
        {['❤️', '💖', '💝', '💕', '💗'].map((heart, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              delay: index * 0.1,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {heart}
          </motion.div>
        ))}
      </div>

      {/* Sparkles */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="text-4xl"
      >
        ✨
      </motion.div>
    </motion.div>
  );
};

export default ThankYouMessage;
