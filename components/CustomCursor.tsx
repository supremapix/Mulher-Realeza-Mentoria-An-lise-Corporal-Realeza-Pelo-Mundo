import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-gold rounded-full pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovered ? 2 : 1,
          backgroundColor: isHovered ? 'rgba(212, 175, 55, 0.2)' : 'transparent',
        }}
      >
        <div className="w-1 h-1 bg-gold rounded-full" />
      </motion.div>
      
      {/* Particle Trail (Simplified for performance) */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-gold/30 rounded-full pointer-events-none z-[9998] blur-sm"
        style={{
          x: useSpring(cursorX, { damping: 50, stiffness: 100 }), // Slower spring for trail effect
          y: useSpring(cursorY, { damping: 50, stiffness: 100 }),
        }}
      />
    </>
  );
};

export default CustomCursor;