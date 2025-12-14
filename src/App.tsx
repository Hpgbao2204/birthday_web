import config from './config';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <>
      {/* Background động với hình ảnh */}
      <AnimatedBackground />

      {/* Content chính */}
      <div className="relative min-h-screen flex flex-col items-center justify-center p-8">
        <h1
          className="text-5xl md:text-7xl font-bold mb-4 text-center"
          style={{ color: config.colors.textPrimary }}
        >
          {config.hero.mainMessage}
        </h1>
        <h2
          className="text-3xl md:text-5xl font-semibold mb-2 text-center"
          style={{ color: config.colors.accent }}
        >
          {config.hero.name}
        </h2>
        <p
          className="text-xl md:text-2xl mb-8 text-center"
          style={{ color: config.colors.textSecondary }}
        >
          {config.hero.birthday}
        </p>
        <p
          className="text-lg md:text-xl text-center max-w-2xl"
          style={{ color: config.colors.textPrimary }}
        >
          {config.hero.subMessage}
        </p>
      </div>
    </>
  );
}

export default App;
