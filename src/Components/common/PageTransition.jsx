import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * Premium SVG Page Transition Component
 * Creates smooth, award-winning page transitions
 */
const PageTransition = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* SVG Curtain Transition */}
      <motion.div
        className="page-transition-overlay"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: 'var(--primary-bg)',
          transformOrigin: 'top',
          zIndex: 9999,
          pointerEvents: isTransitioning ? 'all' : 'none',
        }}
      >
        {/* SVG Logo Animation */}
        <motion.svg
          className="transition-logo"
          viewBox="0 0 200 200"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 1.2] }}
          transition={{ duration: 0.6, times: [0, 0.2, 0.8, 1] }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80px',
            height: '80px',
          }}
        >
          <motion.circle
            cx="100"
            cy="100"
            r="50"
            stroke="var(--accent)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          <motion.text
            x="100"
            y="110"
            textAnchor="middle"
            fill="var(--accent)"
            fontSize="48"
            fontFamily="var(--font-heading)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            S&S
          </motion.text>
        </motion.svg>
      </motion.div>

      {/* Page Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.4,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;
