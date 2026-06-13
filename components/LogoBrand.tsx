'use client';

import Image from 'next/image';
import { useTranslation, assetPath } from '@/lib/i18n';

interface LogoBrandProps {
  variant?: 'full' | 'compact';
  showSubtitle?: boolean;
  onClick?: () => void;
}

export default function LogoBrand({ variant = 'full', showSubtitle = true, onClick }: LogoBrandProps) {
  const { language } = useTranslation();

  const subtitle = language === 'fr' ? 'Cours Docker avancé' : 'Advanced Docker course';

  const content = (
    <div className="flex items-center gap-2.5 group">
      <div className="relative shrink-0">
        <Image
          src={assetPath('/docker-logo.png')}
          alt={language === 'fr' ? 'Logo Docker Master Lab' : 'Docker Master Lab logo'}
          width={variant === 'compact' ? 28 : 36}
          height={variant === 'compact' ? 28 : 36}
          className="drop-shadow-sm"
          priority
        />
      </div>
      <div className="leading-tight">
        <span className={`block font-extrabold text-docker-blue group-hover:text-docker-dark transition-colors ${variant === 'compact' ? 'text-sm' : 'text-lg'}`}>
          Docker Master Lab
        </span>
        {showSubtitle && (
          <span className={`block font-medium tracking-widest uppercase text-gray-400 ${variant === 'compact' ? 'text-[9px]' : 'text-[10px]'}`}>
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );

  if (onClick) {
    return (
      <button onClick={onClick} className="flex items-center" type="button" aria-label="Docker Master Lab home">
        {content}
      </button>
    );
  }

  return content;
}
