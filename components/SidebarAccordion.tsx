'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import IconBadge from './IconBadge';
import { IconName } from '@/data/iconMap';

interface SubItem {
  id: string;
  title: { fr: string; en: string };
}

interface SidebarAccordionProps {
  chapterId: string;
  icon: string;
  title: { fr: string; en: string };
  subsections: SubItem[];
  language: 'fr' | 'en';
  activeSection: string;
  activeChapter: string;
  onNavigate: (id: string) => void;
}

export default function SidebarAccordion({
  chapterId, icon, title, subsections, language, activeSection, activeChapter, onNavigate
}: SidebarAccordionProps) {
  const [open, setOpen] = useState(false);

  const isActive = activeChapter === chapterId;
  const hasActiveChild = subsections.some((sub) => sub.id === activeSection);

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center gap-2.5 px-4 py-3 text-left transition-colors duration-200 ${
          isActive
            ? 'bg-[#EAF6FF] text-[#2496ED] border-l-4 border-[#2496ED]'
            : 'text-slate-700 border-l-4 border-transparent hover:bg-slate-50 hover:border-gray-300'
        }`}
        aria-expanded={open || hasActiveChild}
      >
        <IconBadge name={icon as IconName} size={16} className="shrink-0" />
        <span className="text-sm font-semibold flex-1 leading-tight">{title[language]}</span>
        <motion.div
          animate={{ rotate: open || hasActiveChild ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={14} className="text-gray-400 shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {(open || hasActiveChild) && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-2">
              {subsections.map((sub) => {
                const isSubActive = activeSection === sub.id;
                return (
                  <button
                    key={sub.id}
                    onClick={() => onNavigate(sub.id)}
                    className={`w-full text-left px-4 py-2 pl-11 text-xs border-l-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2496ED]/40 ${
                      isSubActive
                        ? 'border-[#2496ED] text-[#2496ED] font-medium'
                        : 'border-transparent text-slate-600'
                    }`}
                  >
                    {sub.title[language]}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
