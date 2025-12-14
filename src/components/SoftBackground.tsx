import { motion } from 'framer-motion';
import FloatingImages from './FloatingImages';

const SoftBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(253, 242, 248, 0.95), rgba(252, 231, 243, 0.95))',
        }}
      />
      <FloatingImages />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(253, 242, 248, 0.6), rgba(252, 231, 243, 0.6))',
          backdropFilter: 'blur(1px)',
        }}
      />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          >
            {i % 3 === 0 ? '💕' : i % 3 === 1 ? '✨' : '🌸'}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SoftBackground;
