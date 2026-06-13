'use client';

import { useState, ReactNode, ComponentType } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface InstallationAccordionProps {
  id: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  summary: string;
  defaultOpen?: boolean;
  children: ReactNode;
}

export default function InstallationAccordion({
  id, icon: Icon, title, summary, defaultOpen = false, children
}: InstallationAccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-2xl bg-white shadow-sm hover:border-docker-blue/30 transition-colors overflow-hidden">
      <button
        id={`${id}-trigger`}
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center gap-3 px-5 py-4 text-left transition-colors duration-200 ${
          open ? 'bg-docker-blue/[0.03] border-b border-gray-100' : 'hover:bg-gray-50'
        }`}
        aria-expanded={open}
        aria-controls={`${id}-content`}
      >
        <div className="w-9 h-9 bg-docker-blue/[0.08] rounded-xl flex items-center justify-center shrink-0">
          <Icon size={18} className="text-docker-blue" />
        </div>
        <div className="flex-1 min-w-0">
          <span className="block text-sm font-bold text-docker-dark truncate">{title}</span>
          <span className="block text-xs text-gray-500 truncate">{summary}</span>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown size={18} className="text-gray-400" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-content`}
            key={`${id}-content`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
            role="region"
            aria-labelledby={`${id}-trigger`}
          >
            <div className="px-5 pb-5 pt-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
