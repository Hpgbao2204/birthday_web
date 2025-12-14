import { motion } from 'framer-motion';
import config from '../config';
import HeroSection from './HeroSection';
import WishForm from './WishForm';
import FloatingIcons from './FloatingIcons';
import { Link } from 'react-router-dom';

const MainContainer = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center py-12 px-4">
      {/* Floating Icons */}
      <FloatingIcons />

      {/* Main Content Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-5xl"
      >
        {/* Glowing border animation */}
        <motion.div
          className="absolute inset-0 rounded-[3rem] opacity-50 blur-2xl"
          style={{
            background: `linear-gradient(135deg, ${config.colors.gradient1}, ${config.colors.gradient2}, ${config.colors.gradient3})`,
          }}
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Main Content Card with glassmorphism */}
        <div
          className="relative rounded-[3rem] shadow-2xl p-8 md:p-12 lg:p-16"
          style={{
            background: 'rgba(26, 11, 46, 0.8)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Gradient border overlay */}
          <div
            className="absolute inset-0 rounded-[3rem] opacity-30"
            style={{
              background: `linear-gradient(135deg, ${config.colors.gradient1}40, ${config.colors.gradient2}40, ${config.colors.gradient3}40)`,
              padding: '2px',
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
              WebkitMaskComposite: 'xor',
            }}
          />

          {/* Decorative Corner Elements with glow */}
          <motion.div
            className="absolute top-4 left-4 text-5xl"
            animate={{
              rotate: [0, 10, -10, 0],
              filter: [
                'drop-shadow(0 0 5px rgba(168, 85, 247, 0.5))',
                'drop-shadow(0 0 15px rgba(168, 85, 247, 0.8))',
                'drop-shadow(0 0 5px rgba(168, 85, 247, 0.5))',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🎈
          </motion.div>
          <motion.div
            className="absolute top-4 right-4 text-5xl"
            animate={{
              rotate: [0, -10, 10, 0],
              filter: [
                'drop-shadow(0 0 5px rgba(236, 72, 153, 0.5))',
                'drop-shadow(0 0 15px rgba(236, 72, 153, 0.8))',
                'drop-shadow(0 0 5px rgba(236, 72, 153, 0.5))',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            🎈
          </motion.div>
          <motion.div
            className="absolute bottom-4 left-4 text-5xl"
            animate={{
              scale: [1, 1.2, 1],
              filter: [
                'drop-shadow(0 0 5px rgba(6, 182, 212, 0.5))',
                'drop-shadow(0 0 15px rgba(6, 182, 212, 0.8))',
                'drop-shadow(0 0 5px rgba(6, 182, 212, 0.5))',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          >
            🎁
          </motion.div>
          <motion.div
            className="absolute bottom-4 right-4 text-5xl"
            animate={{
              scale: [1, 1.2, 1],
              filter: [
                'drop-shadow(0 0 5px rgba(34, 211, 238, 0.5))',
                'drop-shadow(0 0 15px rgba(34, 211, 238, 0.8))',
                'drop-shadow(0 0 5px rgba(34, 211, 238, 0.5))',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          >
            🎁
          </motion.div>

          {/* Content */}
          <div className="space-y-12 relative z-10">
            <HeroSection />
            
            {/* Divider with animated gradient line */}
            <motion.div
              className="flex items-center justify-center gap-4 py-8"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <motion.div
                className="h-1 flex-1 rounded-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${config.colors.gradient1}, ${config.colors.gradient2}, transparent)`,
                }}
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.span
                className="text-4xl"
                animate={{
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  filter: `drop-shadow(0 0 10px ${config.colors.gradient2})`,
                }}
              >
                💖
              </motion.span>
              <motion.div
                className="h-1 flex-1 rounded-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${config.colors.gradient2}, ${config.colors.gradient3}, transparent)`,
                }}
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </motion.div>

            <WishForm />

            {/* Link to view all wishes */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="text-center mt-8"
            >
              <Link to="/wishes">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-full font-bold text-white text-lg"
                  style={{
                    background: `linear-gradient(135deg, ${config.colors.gradient1}, ${config.colors.gradient2})`,
                    boxShadow: `0 4px 20px ${config.colors.accent}50`,
                  }}
                >
                  👀 Xem tất cả lời chúc
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating particles around container with neon glow */}
        <motion.div
          className="absolute -top-10 -left-10 text-7xl"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{
            filter: `drop-shadow(0 0 15px ${config.colors.neon})`,
          }}
        >
          ✨
        </motion.div>
        <motion.div
          className="absolute -top-10 -right-10 text-7xl"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -10, 10, 0],
          }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
          style={{
            filter: `drop-shadow(0 0 15px ${config.colors.gradient1})`,
          }}
        >
          🌟
        </motion.div>
        <motion.div
          className="absolute -bottom-10 -left-10 text-6xl"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
        >
          🎀
        </motion.div>
        <motion.div
          className="absolute -bottom-10 -right-10 text-6xl"
          animate={{
            y: [0, -20, 0],
            rotate: [0, -15, 15, 0],
          }}
          transition={{ duration: 3.8, repeat: Infinity, delay: 1.5 }}
        >
          🌸
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MainContainer;
