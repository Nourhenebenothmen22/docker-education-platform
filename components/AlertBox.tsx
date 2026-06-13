'use client';

import { ReactNode, ComponentType } from 'react';
import { Info, Lightbulb, TriangleAlert, CircleX, Play, ArrowRightLeft } from 'lucide-react';

type AlertType = 'info' | 'tip' | 'warning' | 'danger' | 'practice' | 'migration';

interface AlertBoxProps {
  type: AlertType;
  children: ReactNode;
  title?: string;
}

const config: Record<AlertType, { icon: ComponentType<{ size?: number }>; containerClass: string; iconClass: string; titleClass: string; defaultTitle: { fr: string; en: string } }> = {
  info: {
    icon: Info,
    containerClass: 'bg-blue-50 border-blue-200',
    iconClass: 'text-blue-600',
    titleClass: 'text-blue-800',
    defaultTitle: { fr: 'Info', en: 'Info' },
  },
  tip: {
    icon: Lightbulb,
    containerClass: 'bg-emerald-50 border-emerald-200',
    iconClass: 'text-emerald-600',
    titleClass: 'text-emerald-800',
    defaultTitle: { fr: 'Astuce', en: 'Tip' },
  },
  warning: {
    icon: TriangleAlert,
    containerClass: 'bg-amber-50 border-amber-200',
    iconClass: 'text-amber-600',
    titleClass: 'text-amber-800',
    defaultTitle: { fr: 'Attention', en: 'Warning' },
  },
  danger: {
    icon: CircleX,
    containerClass: 'bg-red-50 border-red-200',
    iconClass: 'text-red-600',
    titleClass: 'text-red-800',
    defaultTitle: { fr: 'Danger', en: 'Danger' },
  },
  practice: {
    icon: Play,
    containerClass: 'bg-indigo-50 border-indigo-200',
    iconClass: 'text-indigo-600',
    titleClass: 'text-indigo-800',
    defaultTitle: { fr: 'Pratique', en: 'Practice' },
  },
  migration: {
    icon: ArrowRightLeft,
    containerClass: 'bg-sky-50 border-sky-300',
    iconClass: 'text-sky-700',
    titleClass: 'text-sky-800',
    defaultTitle: { fr: 'Migration', en: 'Migration' },
  },
};

export default function AlertBox({ type, children, title }: AlertBoxProps) {
  const c = config[type];
  const Icon = c.icon;

  return (
    <div className={`border rounded-xl p-4 my-4 text-sm leading-relaxed ${c.containerClass}`} role="alert">
      <div className="flex items-start gap-3">
        <div className={`shrink-0 mt-0.5 ${c.iconClass}`}>
          <Icon size={18} />
        </div>
        <div>
          {title && <p className={`font-bold mb-1 ${c.titleClass}`}>{title}</p>}
          <div className={c.iconClass}>{children}</div>
        </div>
      </div>
    </div>
  );
}
