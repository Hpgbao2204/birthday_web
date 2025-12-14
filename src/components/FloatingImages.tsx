import { motion } from 'framer-motion';
import config from '../config';

const FloatingImages = () => {
  const effects = [
    // Effect 1: Xoay 360 liên tục + zoom
    {
      scale: [1, 1.5, 1],
      rotate: [0, 360, 720],
      opacity: [0.3, 0.8, 0.3],
    },
    // Effect 2: Xoay ngược + wave
    {
      y: [0, -120, 0],
      x: [0, 80, 0],
      rotate: [0, -360, -720],
      opacity: [0.3, 0.7, 0.3],
    },
    // Effect 3: Xoay nhanh + spiral
    {
      scale: [0.5, 1.8, 0.5],
      rotate: [0, 720, 1440],
      x: [0, 120, -120, 0],
      opacity: [0.2, 0.9, 0.2],
    },
    // Effect 4: Flip + bounce
    {
      y: [0, -180, 0],
      scale: [1, 1.3, 1],
      rotate: [0, 180, 360, 540],
      opacity: [0.4, 0.9, 0.4],
    },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {config.images.map((img, index) => {
        const effectIndex = index % effects.length;
        const randomDelay = Math.random() * 5;
        const randomDuration = 8 + Math.random() * 7; // 8-15s
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${randomX}%`,
              top: `${randomY}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.4, 0],
              scale: effects[effectIndex].scale,
              rotate: effects[effectIndex].rotate,
              y: effects[effectIndex].y,
              x: effects[effectIndex].x,
            }}
            transition={{
              duration: randomDuration,
              delay: randomDelay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div
              className="w-32 h-32 md:w-48 md:h-48 rounded-3xl overflow-hidden shadow-2xl"
              style={{
                border: `2px solid ${config.colors.accent}`,
                filter: 'blur(1px)',
              }}
            >
              <img
                src={img}
                alt={`Floating ${index + 1}`}
                className="w-full h-full object-cover"
                style={{
                  filter: 'brightness(0.8) saturate(1.2)',
                }}
              />
            </div>

            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: `radial-gradient(circle, ${config.colors.accent}40, transparent)`,
                filter: 'blur(20px)',
              }}
              animate={{
                opacity: [0, 0.6, 0],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: randomDuration / 2,
                delay: randomDelay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        );
      })}

      {/* Additional sparkles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute text-2xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1.5, 0],
            rotate: [0, 180, 360],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {i % 3 === 0 ? '✨' : i % 3 === 1 ? '💫' : '⭐'}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingImages;
