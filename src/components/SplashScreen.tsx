'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');
    if (!hasSeenSplash) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem('hasSeenSplash', 'true');
      }, 2500); // Wait for drawing animation and a short pause

      return () => clearTimeout(timer);
    }
  }, []);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center"
        >
          <div className="w-64 sm:w-96 relative">
            <svg 
              viewBox="0 0 400 150" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]"
            >
              {/* Subtle background track */}
              <path
                d="M 0 75 L 120 75 L 140 25 L 170 120 L 200 40 L 230 100 L 250 75 L 400 75"
                stroke="var(--border)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-20"
              />
              {/* Animated foreground heartline */}
              <motion.path
                d="M 0 75 L 120 75 L 140 25 L 170 120 L 200 40 L 230 100 L 250 75 L 400 75"
                stroke="var(--primary)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </svg>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-6 text-3xl font-extrabold tracking-widest text-primary uppercase drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]"
          >
            Resqu
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
