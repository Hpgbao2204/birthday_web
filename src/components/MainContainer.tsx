import { motion } from 'framer-motion';
import config from '../config';
import HeroSection from './HeroSection';
import WishForm from './WishForm';
import FloatingIcons from './FloatingIcons';

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
        className="relative z-10 w-full max-w-4xl"
      >
        {/* Decorative Background Blob */}
        <motion.div
          className="absolute inset-0 rounded-[3rem] opacity-20 blur-3xl"
          style={{ backgroundColor: config.colors.accent }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Main Content Card */}
        <div
          className="relative bg-white rounded-[3rem] shadow-2xl p-8 md:p-12 lg:p-16 border-4"
          style={{
            borderColor: config.colors.accent,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
          }}
        >
          {/* Decorative Corner Elements */}
          <div className="absolute top-4 left-4 text-4xl">🎈</div>
          <div className="absolute top-4 right-4 text-4xl">🎈</div>
          <div className="absolute bottom-4 left-4 text-4xl">🎁</div>
          <div className="absolute bottom-4 right-4 text-4xl">🎁</div>

          {/* Content */}
          <div className="space-y-12">
            <HeroSection />
            
            {/* Divider with hearts */}
            <motion.div
              className="flex items-center justify-center gap-4 py-6"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <div
                className="h-0.5 flex-1 rounded-full"
                style={{ backgroundColor: config.colors.accent }}
              />
              <motion.span
                className="text-3xl"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                💖
              </motion.span>
              <div
                className="h-0.5 flex-1 rounded-full"
                style={{ backgroundColor: config.colors.accent }}
              />
            </motion.div>

            <WishForm />
          </div>
        </div>

        {/* Floating particles around container */}
        <motion.div
          className="absolute -top-10 -left-10 text-6xl"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          ✨
        </motion.div>
        <motion.div
          className="absolute -top-10 -right-10 text-6xl"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -10, 10, 0],
          }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
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
