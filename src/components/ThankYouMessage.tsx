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
      exit={{ scale: 0, opacity: 0, rotate: 180 }}
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
        className="text-6xl"
      >
        🎉
      </motion.div>

      {/* Thank you message */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h3
          className="text-3xl md:text-4xl font-bold mb-2"
          style={{ color: config.colors.accent }}
        >
          Cảm ơn {name}! 💕
        </h3>
        <p
          className="text-lg"
          style={{ color: config.colors.textSecondary }}
        >
          Lời chúc của bạn đã được gửi đi! ✨
        </p>
      </motion.div>

      {/* Floating hearts */}
      <div className="flex justify-center gap-4 text-2xl">
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

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-sm"
        style={{ color: config.colors.textSecondary }}
      >
        Đang quay lại form...
      </motion.p>
    </motion.div>
  );
};

export default ThankYouMessage;
