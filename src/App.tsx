import AnimatedBackground from './components/AnimatedBackground';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Layer - Image Marquee */}
      <AnimatedBackground />

      {/* Main Content Layer */}
      <MainContainer />
    </div>
  );
}

export default App;
