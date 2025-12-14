import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { database, isFirebaseConfigured } from '../firebase';
import SoftBackground from '../components/SoftBackground';
import config from '../config';
import { Link } from 'react-router-dom';

interface Wish {
  id: string;
  name: string;
  wish: string;
  timestamp: number;
  date: string;
}

const AdminWishes = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Mật khẩu đơn giản - bạn có thể thay đổi
  const ADMIN_PASSWORD = 'kzy2003'; // Đổi thành mật khẩu của bạn

  useEffect(() => {
    if (isAuthenticated && isFirebaseConfigured && database) {
      const wishesRef = ref(database, 'wishes');

      const unsubscribe = onValue(wishesRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const wishesArray: Wish[] = Object.entries(data).map(([id, value]: [string, any]) => ({
            id,
            ...value,
          }));
          wishesArray.sort((a, b) => b.timestamp - a.timestamp);
          setWishes(wishesArray);
        } else {
          setWishes([]);
        }
        setLoading(false);
      });

      return () => unsubscribe();
    } else if (isAuthenticated) {
      setLoading(false);
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('Sai mật khẩu! 🔒');
    }
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        <SoftBackground />
        <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
          <div className="max-w-md w-full">
            <div
              className="bg-white/95 backdrop-blur-md rounded-3xl p-12 shadow-2xl"
              style={{ border: `3px solid ${config.colors.accent}` }}
            >
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🔐</div>
              </div>

              <h1
                className="text-3xl font-bold text-center mb-6"
                style={{ color: config.colors.textPrimary }}
              >
                Trang Admin
              </h1>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    style={{ color: config.colors.textPrimary }}
                  >
                    Mật khẩu
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Nhập mật khẩu..."
                    className="w-full px-4 py-3 rounded-2xl border-2 focus:outline-none focus:ring-2 transition-all"
                    style={{
                      borderColor: config.colors.backgroundSecondary,
                      backgroundColor: config.colors.background,
                    }}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-2xl font-bold text-white text-lg shadow-xl"
                  style={{
                    background: `linear-gradient(135deg, ${config.colors.accent}, ${config.colors.accentHover})`,
                  }}
                >
                  🔓 Đăng nhập
                </button>
              </form>

              <div className="text-center mt-6">
                <Link to="/">
                  <button
                    className="text-sm"
                    style={{ color: config.colors.textSecondary }}
                  >
                    ← Quay lại trang chủ
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Loading Screen
  if (loading) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        <SoftBackground />
        <div className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="text-8xl">
            ✨
          </div>
        </div>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen relative overflow-hidden">
      <SoftBackground />
      <div className="relative z-10 min-h-screen p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1
              className="text-4xl font-bold"
              style={{
                background: `linear-gradient(135deg, ${config.colors.accent}, ${config.colors.accentHover})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: "'Pacifico', cursive",
              }}
            >
              💕 Tất cả lời chúc ({wishes.length})
            </h1>
            <Link to="/">
              <button
                className="px-6 py-3 rounded-2xl font-bold text-white shadow-xl"
                style={{
                  background: `linear-gradient(135deg, ${config.colors.accent}, ${config.colors.accentHover})`,
                }}
              >
                🏠 Trang chủ
              </button>
            </Link>
          </div>

          {/* Wishes Grid */}
          {wishes.length === 0 ? (
            <div
              className="bg-white/95 backdrop-blur-md rounded-3xl p-12 text-center shadow-xl"
              style={{ border: `3px solid ${config.colors.accent}` }}
            >
              <div className="text-6xl mb-4">📭</div>
              <p className="text-xl" style={{ color: config.colors.textPrimary }}>
                Chưa có lời chúc nào
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishes.map((wish) => (
                <div
                  key={wish.id}
                  className="bg-white/95 backdrop-blur-md rounded-3xl p-6 shadow-xl"
                  style={{ border: `2px solid ${config.colors.accent}` }}
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">💌</div>
                    <div className="flex-1">
                      <h3
                        className="font-bold text-lg"
                        style={{ color: config.colors.textPrimary }}
                      >
                        {wish.name}
                      </h3>
                      <p
                        className="text-xs"
                        style={{ color: config.colors.textSecondary }}
                      >
                        {new Date(wish.timestamp).toLocaleString('vi-VN')}
                      </p>
                    </div>
                  </div>

                  {/* Message */}
                  <p
                    className="leading-relaxed whitespace-pre-line"
                    style={{ color: config.colors.textSecondary }}
                  >
                    {wish.wish}
                  </p>

                  {/* Decoration */}
                  <div className="flex justify-end gap-1 mt-4 text-xl">
                    <span>💕</span>
                    <span>✨</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminWishes;
