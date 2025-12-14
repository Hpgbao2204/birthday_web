import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { database, isFirebaseConfigured } from '../firebase';
import config from '../config';

interface Wish {
  id: string;
  name: string;
  wish: string;
  timestamp: number;
  date: string;
}

const WishesGallery = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isFirebaseConfigured && database) {
      const wishesRef = ref(database, 'wishes');
      
      const unsubscribe = onValue(wishesRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const wishesArray: Wish[] = Object.entries(data).map(([id, value]: [string, any]) => ({
            id,
            ...value,
          }));
          
          // Sắp xếp theo thời gian mới nhất
          wishesArray.sort((a, b) => b.timestamp - a.timestamp);
          setWishes(wishesArray);
        } else {
          setWishes([]);
        }
        setLoading(false);
      });

      return () => unsubscribe();
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${config.colors.background} 0%, ${config.colors.backgroundSecondary} 100%)` }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="text-6xl"
        >
          ✨
        </motion.div>
      </div>
    );
  }

  if (!isFirebaseConfigured) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${config.colors.background} 0%, ${config.colors.backgroundSecondary} 100%)` }}
      >
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold mb-4">⚠️ Firebase chưa được cấu hình</h2>
          <p className="text-lg opacity-70">Vui lòng xem file FIREBASE_SETUP.md để setup.</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen p-4 md:p-8 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${config.colors.background} 0%, ${config.colors.backgroundSecondary} 100%)`,
      }}
    >
      {/* Glowing background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: config.colors.gradient1 }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 right-0"
          style={{ background: config.colors.gradient2 }}
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            style={{
              background: `linear-gradient(135deg, ${config.colors.gradient1} 0%, ${config.colors.gradient2} 50%, ${config.colors.gradient3} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            💌 Lời chúc dành cho {config.hero.name}
          </motion.h1>
          <p className="text-xl md:text-2xl text-white opacity-70">
            {wishes.length} lời chúc ấm áp
          </p>
        </motion.div>

        {/* Wishes Grid */}
        {wishes.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🎁</div>
            <p className="text-2xl text-white opacity-70">
              Chưa có lời chúc nào. Hãy là người đầu tiên gửi lời chúc! 💝
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishes.map((wish, index) => (
              <motion.div
                key={wish.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative group"
              >
                {/* Card */}
                <div
                  className="relative p-6 rounded-3xl backdrop-blur-lg"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${config.colors.gradient1}20, ${config.colors.gradient2}20)`,
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Avatar */}
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                        style={{
                          background: `linear-gradient(135deg, ${config.colors.gradient1}, ${config.colors.gradient2})`,
                        }}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {wish.name.charAt(0).toUpperCase()}
                      </motion.div>
                      <div>
                        <h3 className="text-white font-bold text-lg">{wish.name}</h3>
                        <p className="text-sm opacity-50" style={{ color: config.colors.textSecondary }}>
                          {new Date(wish.timestamp).toLocaleDateString('vi-VN', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                          })}
                        </p>
                      </div>
                    </div>

                    {/* Wish */}
                    <p className="text-white opacity-90 text-base leading-relaxed">
                      "{wish.wish}"
                    </p>

                    {/* Decorative emoji */}
                    <div className="mt-4 flex gap-2">
                      {['💖', '✨', '🎉'][Math.floor(Math.random() * 3)]}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Back to home button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 rounded-full font-bold text-white text-lg"
            style={{
              background: `linear-gradient(135deg, ${config.colors.gradient1}, ${config.colors.gradient2})`,
              boxShadow: `0 4px 20px ${config.colors.accent}50`,
            }}
          >
            🏠 Quay về trang chính
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default WishesGallery;
