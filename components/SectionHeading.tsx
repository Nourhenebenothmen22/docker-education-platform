'use client';

import IconBadge from './IconBadge';
import { IconName } from '@/data/iconMap';

interface SectionHeadingProps {
  icon: IconName;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ icon, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-docker-blue/10 flex items-center justify-center">
          <IconBadge name={icon} size={22} className="text-docker-blue" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-docker-dark">{title}</h2>
      </div>
      <div className="w-16 h-1 bg-docker-blue rounded-full mb-4" />
      {subtitle && <p className="text-gray-500 text-base leading-relaxed">{subtitle}</p>}
    </div>
  );
}
