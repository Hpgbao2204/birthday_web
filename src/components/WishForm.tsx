import { useState } from 'react';
import { motion } from 'framer-motion';
import config from '../config';

const WishForm = () => {
  const [name, setName] = useState('');
  const [wish, setWish] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && wish) {
      console.log('Wish submitted:', { name, wish });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setName('');
        setWish('');
      }, 3000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="w-full max-w-md mx-auto"
    >
      <div
        className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border-2"
        style={{ borderColor: config.colors.accent }}
      >
        <h3
          className="text-2xl md:text-3xl font-bold text-center mb-6"
          style={{ color: config.colors.textPrimary }}
        >
          ✍️ Gửi lời chúc của bạn
        </h3>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Input tên */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <label
                className="block text-sm font-semibold mb-2"
                style={{ color: config.colors.textSecondary }}
              >
                Tên của bạn
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nhập tên của bạn..."
                className="w-full px-4 py-3 rounded-2xl border-2 focus:outline-none focus:ring-2 transition-all"
                style={{
                  borderColor: config.colors.backgroundSecondary,
                  backgroundColor: config.colors.background,
                }}
                required
              />
            </motion.div>

            {/* Textarea lời chúc */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <label
                className="block text-sm font-semibold mb-2"
                style={{ color: config.colors.textSecondary }}
              >
                Lời chúc
              </label>
              <textarea
                value={wish}
                onChange={(e) => setWish(e.target.value)}
                placeholder="Viết lời chúc của bạn..."
                rows={4}
                className="w-full px-4 py-3 rounded-2xl border-2 focus:outline-none focus:ring-2 transition-all resize-none"
                style={{
                  borderColor: config.colors.backgroundSecondary,
                  backgroundColor: config.colors.background,
                }}
                required
              />
            </motion.div>

            {/* Button gửi */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 rounded-2xl font-bold text-white text-lg shadow-lg transition-all"
              style={{
                backgroundColor: config.colors.accent,
              }}
            >
              💝 Gửi lời chúc
            </motion.button>
          </form>
        ) : (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-center py-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="text-6xl mb-4"
            >
              🎉
            </motion.div>
            <h4
              className="text-2xl font-bold mb-2"
              style={{ color: config.colors.accent }}
            >
              Cảm ơn bạn!
            </h4>
            <p style={{ color: config.colors.textSecondary }}>
              Lời chúc của bạn đã được gửi thành công! 💖
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default WishForm;
