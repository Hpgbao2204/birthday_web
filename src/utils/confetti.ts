import confetti from 'canvas-confetti';

/**
 * Tạo confetti với hình trái tim và ngôi sao
 */
export const fireHeartConfetti = () => {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
    zIndex: 9999,
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  // Hiệu ứng 1: Bắn từ giữa
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
    shapes: ['circle'],
    colors: ['#fb7185', '#fda4af', '#f43f5e', '#ff69b4', '#ffb6c1'],
  });

  fire(0.2, {
    spread: 60,
    shapes: ['circle'],
    colors: ['#fbbf24', '#fde047', '#facc15', '#fef08a'],
  });

  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
    shapes: ['circle'],
    colors: ['#fb7185', '#fda4af', '#f43f5e'],
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
    shapes: ['circle'],
    colors: ['#fef08a', '#fde047'],
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 45,
    shapes: ['circle'],
    colors: ['#fb7185', '#ff69b4'],
  });
};

/**
 * Tạo confetti liên tục từ 2 bên
 */
export const fireSideConfetti = () => {
  const duration = 3 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 9999,
    colors: ['#fb7185', '#fda4af', '#f43f5e', '#ff69b4', '#ffb6c1', '#fbbf24', '#fde047'],
  };

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    // Bắn từ bên trái
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      shapes: ['circle'],
    });

    // Bắn từ bên phải
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      shapes: ['circle'],
    });
  }, 250);
};

/**
 * Tạo emoji rơi từ trên xuống
 */
export const fireEmojiRain = () => {
  const scalar = 2;

  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0.5,
    decay: 0.94,
    startVelocity: 30,
    scalar,
    zIndex: 9999,
  };

  function shoot() {
    confetti({
      ...defaults,
      particleCount: 30,
      shapes: ['circle'],
      colors: ['#fb7185', '#fda4af', '#f43f5e', '#ff69b4', '#fbbf24', '#fde047'],
    });

    confetti({
      ...defaults,
      particleCount: 5,
      shapes: ['circle'],
      colors: ['#fb7185', '#ff69b4'],
      scalar: scalar * 1.5,
    });
  }

  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
};
