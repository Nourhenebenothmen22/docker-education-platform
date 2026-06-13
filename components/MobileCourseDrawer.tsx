'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { sidebarData } from '@/data/sidebar';
import { navigationData } from '@/data/navigation';
import SidebarAccordion from './SidebarAccordion';
import { X, BookOpen } from 'lucide-react';

interface MobileCourseDrawerProps {
  open: boolean;
  onClose: () => void;
  activeSection: string;
  onNavigate: (id: string) => void;
  language: 'fr' | 'en';
}

export default function MobileCourseDrawer({ open, onClose, activeSection, onNavigate, language }: MobileCourseDrawerProps) {
  const handleNavigate = (id: string) => {
    onNavigate(id);
    onClose();
  };

  const getChapterForSection = (sectionId: string): string => {
    for (const chapter of sidebarData) {
      if (chapter.id === sectionId) return chapter.id;
      for (const sub of chapter.subsections) {
        if (sub.id === sectionId) return chapter.id;
      }
    }
    for (const section of navigationData) {
      if (section.id === sectionId) return section.id;
    }
    return '';
  };

  const activeChapter = getChapterForSection(activeSection);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 bottom-0 w-[280px] bg-white z-50 shadow-2xl overflow-y-auto"
            role="dialog"
            aria-label="Course navigation menu"
          >
            <div className="sticky top-0 bg-white z-10 border-b border-gray-100">
              <div className="flex items-center justify-between px-4 py-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-docker-blue/10 rounded-lg flex items-center justify-center shrink-0">
                    <BookOpen size={16} className="text-docker-blue" />
                  </div>
                  <div className="leading-tight">
                    <span className="block text-sm font-extrabold text-docker-dark">Docker Master Lab</span>
                    <span className="block text-[9px] font-medium tracking-widest uppercase text-gray-400">
                      {language === 'fr' ? 'Plan du cours' : 'Course outline'}
                    </span>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label={language === 'fr' ? 'Fermer le menu' : 'Close menu'}
                >
                  <X size={20} className="text-gray-500" />
                </button>
              </div>
            </div>
            <nav className="py-2" aria-label="Mobile course navigation">
              {sidebarData.map((chapter) => (
                <SidebarAccordion
                  key={chapter.id}
                  chapterId={chapter.id}
                  icon={chapter.icon}
                  title={chapter.title}
                  subsections={chapter.subsections}
                  language={language}
                  activeSection={activeSection}
                  activeChapter={activeChapter}
                  onNavigate={handleNavigate}
                />
              ))}
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
