'use client';

import { sidebarData } from '@/data/sidebar';
import { navigationData } from '@/data/navigation';
import SidebarAccordion from './SidebarAccordion';
import { useTranslation } from '@/lib/i18n';
import { BookOpen } from 'lucide-react';

interface CourseSidebarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export default function CourseSidebar({ activeSection, onNavigate }: CourseSidebarProps) {
  const { language } = useTranslation();

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
    <aside className="w-[280px] shrink-0 h-full overflow-y-auto bg-white border-r border-gray-200">
      <div className="sticky top-0 bg-white z-10 border-b border-gray-100">
        <div className="px-4 py-4">
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
        </div>
      </div>
      <nav className="py-2" aria-label="Course navigation">
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
            onNavigate={onNavigate}
          />
        ))}
      </nav>
    </aside>
  );
}
