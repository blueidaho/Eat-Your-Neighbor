'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function StickerCard({
  children,
  rotate = 0,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  rotate?: number;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: rotate * 2 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ rotate: 0, scale: 1.03, y: -4 }}
      className={`bg-white border-[3px] border-ink rounded-3xl shadow-comic ${className}`}
      style={{ rotate: `${rotate}deg` }}
    >
      {children}
    </motion.div>
  );
}
