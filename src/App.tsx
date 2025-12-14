import config from './config';

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: config.colors.background,
        color: config.colors.textPrimary,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        {config.hero.mainMessage}
      </h1>
      <h2
        style={{
          fontSize: '2rem',
          color: config.colors.accent,
          marginBottom: '0.5rem',
        }}
      >
        {config.hero.name}
      </h2>
      <p
        style={{
          fontSize: '1.2rem',
          color: config.colors.textSecondary,
          marginBottom: '2rem',
        }}
      >
        {config.hero.birthday}
      </p>
      <p style={{ fontSize: '1.1rem', textAlign: 'center', maxWidth: '600px' }}>
        {config.hero.subMessage}
      </p>

      {/* Preview: Hiển thị một số hình ảnh mẫu */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginTop: '3rem',
          maxWidth: '1200px',
          width: '100%',
        }}
      >
        {config.images.slice(0, 6).map((img, index) => (
          <div
            key={index}
            style={{
              width: '100%',
              height: '200px',
              backgroundColor: config.colors.backgroundSecondary,
              borderRadius: '12px',
              overflow: 'hidden',
            }}
          >
            <img
              src={img}
              alt={`Memory ${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
