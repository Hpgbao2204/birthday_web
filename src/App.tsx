import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SoftBackground from './components/SoftBackground';
import MainContainer from './components/MainContainer';
import WishesGallery from './pages/WishesGallery';
import AdminWishes from './pages/AdminWishes';

function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Soft Background với ảnh lướt nhẹ */}
      <SoftBackground />

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
        <Route path="/admin" element={<AdminWishes />} />
      </Routes>
    </Router>
  );
}

export default App;

