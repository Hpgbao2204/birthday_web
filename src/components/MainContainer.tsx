import { motion } from 'framer-motion';
import config from '../config';
import WishForm from './WishForm';
import { Link } from 'react-router-dom';

const MainContainer = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-8 md:px-8 md:py-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-7xl"
      >
        {/* Single Card with 2 sections */}
        <div
          className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden"
          style={{ border: `3px solid ${config.colors.accent}` }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x-2" style={{ borderColor: config.colors.accent }}>
            {/* LEFT SIDE - Welcome Message */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-6 md:p-8 flex flex-col justify-between"
            >
              {/* Header */}
              <motion.div
                className="text-center mb-4 md:mb-4"
                whileHover={{ scale: 1.05 }}
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <motion.h1
                  whileHover={{ scale: 1.1 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-3 pb-2"
                  style={{
                    background: `linear-gradient(135deg, ${config.colors.accent}, ${config.colors.accentHover})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontFamily: "'Pacifico', cursive",
                    lineHeight: '1.2',
                    paddingBottom: '0.5rem',
                  }}
                >
                  {config.hero.name} 💕
                </motion.h1>
                <motion.p
                  whileHover={{ scale: 1.05 }}
                  className="text-lg md:text-2xl font-semibold"
                  style={{ color: config.colors.textPrimary }}
                >
                  {config.hero.birthday}
                </motion.p>
              </motion.div>

              {/* Main message */}
              <motion.h2
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="text-lg md:text-xl lg:text-2xl font-bold text-center mb-2 md:mb-3"
                style={{ color: config.colors.textPrimary }}
              >
                {config.hero.mainMessage}
              </motion.h2>

              {/* Sub message - canh đều, text dư canh trái */}
              <div className="flex-1 flex items-center justify-center px-2 md:px-4">
                <motion.p
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="text-sm md:text-base leading-relaxed whitespace-pre-line text-justify max-w-lg"
                  style={{
                    color: config.colors.textSecondary,
                    textAlignLast: 'left', // Dòng cuối canh trái
                  }}
                >
                  {config.hero.subMessage}
                </motion.p>
              </div>

              {/* Bottom section */}
              <div>
                {/* Hearts */}
                <div className="flex justify-center gap-2 mb-3 md:mb-4 text-xl md:text-2xl">
                  <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    💕
                  </motion.span>
                  <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}>
                    ✨
                  </motion.span>
                  <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}>
                    🌸
                  </motion.span>
                </div>

                {/* View all button */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="text-center">
                  <Link to="/wishes">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-5 py-2.5 md:px-6 md:py-3 rounded-2xl font-bold text-white text-sm md:text-base shadow-xl"
                      style={{ background: `linear-gradient(135deg, ${config.colors.accent}, ${config.colors.accentHover})` }}
                    >
                      ✨ Xem tất cả lời chúc
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* RIGHT SIDE - Wish Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-6 md:p-8 flex items-center border-t-2 md:border-t-0 md:border-l-0"
              style={{ borderColor: config.colors.accent }}
            >
              <WishForm />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MainContainer;
