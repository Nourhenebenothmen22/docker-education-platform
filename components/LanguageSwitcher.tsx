'use client';

import { useTranslation } from '@/lib/i18n';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation();

  const toggle = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <motion.button
      onClick={toggle}
      className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-docker-blue/30 bg-white/80 hover:bg-docker-light hover:border-docker-blue transition-all duration-200 shadow-sm"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={language === 'fr' ? 'Switch to English' : 'Passer en français'}
    >
      <span className={`text-sm font-bold transition-colors duration-200 ${language === 'fr' ? 'text-docker-blue' : 'text-gray-400'}`}>
        FR
      </span>
      <span className="text-gray-300 text-xs">/</span>
      <span className={`text-sm font-bold transition-colors duration-200 ${language === 'en' ? 'text-docker-blue' : 'text-gray-400'}`}>
        EN
      </span>
    </motion.button>
  );
}
