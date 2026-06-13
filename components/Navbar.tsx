'use client';

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import LogoBrand from './LogoBrand';
import { useTranslation } from '@/lib/i18n';

interface NavbarProps {
  onMenuToggle?: () => void;
  sidebarOpen?: boolean;
}

export default function Navbar({ onMenuToggle, sidebarOpen }: NavbarProps) {
  const { language } = useTranslation();

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 h-16 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm"
    >
      <div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Left: Logo + brand */}
        <LogoBrand onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />

        {/* Right: language switcher + mobile hamburger */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-docker-blue/5 border border-docker-blue/10">
            <span className="w-1.5 h-1.5 rounded-full bg-docker-blue" />
            <span className="text-[11px] font-semibold text-docker-blue tracking-wide">
              {language === 'fr' ? 'Cours complet' : 'Complete course'}
            </span>
          </div>
          <LanguageSwitcher />
          <button
            onClick={() => onMenuToggle?.()}
            className="lg:hidden p-2 rounded-lg text-gray-500 hover:text-docker-blue hover:bg-docker-light transition-colors"
            aria-label={language === 'fr' ? 'Ouvrir le menu du cours' : 'Open course menu'}
          >
            {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </motion.header>
  );
}
