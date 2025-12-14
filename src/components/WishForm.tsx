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
      className="w-full max-w-md mx-auto relative"
    >
      <div
        className="rounded-3xl shadow-2xl p-6 md:p-8 relative overflow-visible"
        style={{
          background: 'rgba(26, 11, 46, 0.6)',
          backdropFilter: 'blur(20px)',
          border: `1px solid ${config.colors.gradient1}40`,
          boxShadow: `0 8px 32px rgba(0, 0, 0, 0.5), 0 0 20px ${config.colors.accent}30`,
        }}
      >
        <h3
          className="text-2xl md:text-3xl font-bold text-center mb-6"
          style={{
            background: `linear-gradient(135deg, ${config.colors.gradient1}, ${config.colors.gradient2})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
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
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative"
              >
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
                  className="w-full px-4 py-3 rounded-2xl border-2 focus:outline-none focus:ring-2 transition-all text-white"
                  style={{
                    borderColor: `${config.colors.gradient1}60`,
                    backgroundColor: 'rgba(10, 1, 24, 0.5)',
                  }}
                  required
                />
              </motion.div>

              {/* Textarea lời chúc */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative"
              >
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
                  className="w-full px-4 py-3 rounded-2xl border-2 focus:outline-none focus:ring-2 transition-all resize-none text-white"
                  style={{
                    borderColor: `${config.colors.gradient1}60`,
                    backgroundColor: 'rgba(10, 1, 24, 0.5)',
                  }}
                  required
                />
              </motion.div>

              {/* Button gửi */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.05, y: -2 } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                className="w-full py-3 rounded-2xl font-bold text-white text-lg shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${config.colors.gradient1}, ${config.colors.gradient2})`,
                  boxShadow: `0 4px 20px ${config.colors.accent}50`,
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
  );
};

export default WishForm;
