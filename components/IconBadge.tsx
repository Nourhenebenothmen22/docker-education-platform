'use client';

import { iconMap, IconName } from '@/data/iconMap';
import Image from 'next/image';

interface IconBadgeProps {
  name: IconName;
  size?: number;
  className?: string;
  label?: string;
}

export default function IconBadge({ name, size = 22, className = '', label }: IconBadgeProps) {
  if (name === 'docker') {
    return (
      <span className={`inline-flex items-center justify-center ${className}`} aria-label={label || 'Docker'}>
        <Image src="/docker-logo.png" alt={label || 'Docker'} width={size} height={size} />
      </span>
    );
  }

  const IconComponent = iconMap[name];
  if (!IconComponent || typeof IconComponent === 'string') {
    return null;
  }

  const LucideIcon = IconComponent as React.ComponentType<{ size?: number; className?: string }>;
  return (
    <span className={`inline-flex items-center justify-center ${className}`} aria-label={label || name}>
      <LucideIcon size={size} />
    </span>
  );
}
