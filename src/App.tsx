import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimatedBackground from './components/AnimatedBackground';
import MainContainer from './components/MainContainer';
import WishesGallery from './pages/WishesGallery';
import GlowingOrbs from './components/GlowingOrbs';
import FloatingParticles from './components/FloatingParticles';
import config from './config';

function HomePage() {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${config.colors.background} 0%, ${config.colors.backgroundSecondary} 100%)`,
      }}
    >
      {/* Animated Background với ảnh */}
      <AnimatedBackground />

      {/* Glowing Orbs - Web3 style */}
      <GlowingOrbs />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Main Content */}
      <MainContainer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wishes" element={<WishesGallery />} />
      </Routes>
    </Router>
  );
}

export default App;
