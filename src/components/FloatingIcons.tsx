import { motion } from 'framer-motion';

const icons = ['❤️', '⭐', '🎵', '🎀', '🌸', '✨', '💝', '🎈'];

interface FloatingIcon {
  emoji: string;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

const generateFloatingIcons = (): FloatingIcon[] => {
  return icons.map((emoji, index) => ({
    emoji,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: index * 0.3,
    duration: 3 + Math.random() * 2,
  }));
};

const FloatingIcons = () => {
  const floatingIcons = generateFloatingIcons();

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {floatingIcons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl md:text-4xl"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, -10, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: icon.duration,
            repeat: Infinity,
            delay: icon.delay,
            ease: 'easeInOut',
          }}
        >
          {icon.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;
