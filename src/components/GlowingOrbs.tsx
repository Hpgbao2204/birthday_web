import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const GlowingOrbs = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Orb 1 - Purple */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-30"
        style={{
          background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
        }}
        animate={{
          x: [100, 200, 100],
          y: [100, 300, 100],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Orb 2 - Pink */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-30"
        style={{
          background: 'radial-gradient(circle, #ec4899 0%, transparent 70%)',
          right: 0,
        }}
        animate={{
          x: [-100, -200, -100],
          y: [200, 100, 200],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Orb 3 - Cyan */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
          bottom: 0,
          left: '50%',
        }}
        animate={{
          x: [-100, 100, -100],
          y: [-50, -150, -50],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Mouse follower orb */}
      <motion.div
        className="absolute w-64 h-64 rounded-full blur-2xl opacity-20"
        style={{
          background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)',
        }}
        animate={{
          x: mousePosition.x - 128,
          y: mousePosition.y - 128,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 200,
        }}
      />
    </div>
  );
};

export default GlowingOrbs;
