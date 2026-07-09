'use client';

import { motion } from 'framer-motion';
import { HeartPulse } from 'lucide-react';

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="flex flex-col items-center gap-4 text-primary"
      >
        <HeartPulse size={48} className="animate-pulse" />
        <p className="text-sm font-semibold tracking-wider text-foreground/50 uppercase">Loading</p>
      </motion.div>
    </div>
  );
}
