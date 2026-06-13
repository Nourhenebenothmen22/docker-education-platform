import { navigationData } from './navigation';

export interface SubSection {
  id: string;
  title: { fr: string; en: string };
}

export interface SidebarChapter {
  id: string;
  title: { fr: string; en: string };
  icon: string;
  subsections: SubSection[];
}

export const sidebarData: SidebarChapter[] = navigationData.map((section) => ({
  id: section.id,
  title: section.title,
  icon: section.icon,
  subsections: section.children.map((child) => ({
    id: child.id,
    title: child.title,
  })),
}));
