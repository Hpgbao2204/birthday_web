import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ref, push, set } from 'firebase/database';
import { database, isFirebaseConfigured } from '../firebase';
import config from '../config';
import { fireHeartConfetti, fireSideConfetti } from '../utils/confetti';
import PeekingBear from './PeekingBear';
import ThankYouMessage from './ThankYouMessage';

const WishForm = () => {
  const [name, setName] = useState('');
  const [wish, setWish] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name && wish && !isSubmitting) {
      setIsSubmitting(true);

      try {
        // Kiểm tra Firebase đã được cấu hình chưa
        if (isFirebaseConfigured && database) {
          // Lưu lời chúc vào Firebase
          const wishesRef = ref(database, 'wishes');
          const newWishRef = push(wishesRef);
          await set(newWishRef, {
            name,
            wish,
            timestamp: Date.now(),
            date: new Date().toISOString(),
          });
          console.log('✅ Lời chúc đã được lưu vào Firebase!');
        } else {
          // Demo mode - chỉ log ra console
          console.log('📝 Demo Mode - Lời chúc:', { name, wish, timestamp: Date.now() });
          console.warn('⚠️ Firebase chưa được cấu hình. Dữ liệu chỉ hiển thị ở console.');
        }

        // Bắn confetti
        fireHeartConfetti();
        setTimeout(() => {
          fireSideConfetti();
        }, 500);

        // Hiển thị thông báo cảm ơn
        setSubmitted(true);

        // Reset form sau 4 giây
        setTimeout(() => {
          setSubmitted(false);
          setName('');
          setWish('');
          setIsSubmitting(false);
        }, 4000);
      } catch (error) {
        console.error('❌ Lỗi khi gửi lời chúc:', error);
        alert('Có lỗi xảy ra! Vui lòng thử lại.');
        setIsSubmitting(false);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="w-full"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="relative"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* 3D Shadow layers */}
        <div
          className="absolute inset-0 rounded-2xl blur-xl opacity-30"
          style={{
            background: `linear-gradient(135deg, ${config.colors.accent}, ${config.colors.accentHover})`,
            transform: 'translateZ(-50px)',
          }}
        />

        <div className="relative bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl">
          <h3
            className="text-2xl md:text-3xl font-bold text-center mb-6"
            style={{ color: config.colors.textPrimary }}
          >
            ✍️ Gửi lời chúc của bạn
          </h3>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                {/* Input tên */}
                <div className="relative">
                  <label
                    className="block text-sm font-semibold mb-2"
                    style={{ color: config.colors.textPrimary }}
                  >
                    Tên của bạn
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder="Nhập tên của bạn..."
                    className="w-full px-4 py-3 rounded-2xl border-2 focus:outline-none focus:ring-2 transition-all"
                    style={{
                      borderColor: config.colors.backgroundSecondary,
                      backgroundColor: config.colors.background,
                      color: config.colors.textPrimary,
                    }}
                    required
                  />
                </div>

                {/* Textarea lời chúc */}
                <div className="relative">
                  <label
                    className="block text-sm font-semibold mb-2"
                    style={{ color: config.colors.textPrimary }}
                  >
                    Lời chúc
                  </label>
                  <textarea
                    value={wish}
                    onChange={(e) => setWish(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder="Viết lời chúc của bạn..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-2xl border-2 focus:outline-none focus:ring-2 transition-all resize-none"
                    style={{
                      borderColor: config.colors.backgroundSecondary,
                      backgroundColor: config.colors.background,
                      color: config.colors.textPrimary,
                    }}
                    required
                  />
                </div>

                {/* Button gửi */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.05, y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                  className="w-full py-3 rounded-2xl font-bold text-white text-lg shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: `linear-gradient(135deg, ${config.colors.accent}, ${config.colors.accentHover})`,
                  }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        ⏳
                      </motion.span>
                      Đang gửi...
                    </span>
                  ) : (
                    '💝 Gửi lời chúc'
                  )}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div key="thanks">
                <ThankYouMessage name={name} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Peeking Bear - Hiện khi người dùng focus vào input */}
          <PeekingBear isVisible={isFocused && !submitted} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WishForm;
