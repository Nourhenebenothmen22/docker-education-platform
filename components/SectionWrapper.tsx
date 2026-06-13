'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  alternate?: boolean;
}

export default function SectionWrapper({ id, children, className = '', alternate = false }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 scroll-mt-28 ${alternate ? 'bg-gray-50/70' : 'bg-white'} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  );
}
