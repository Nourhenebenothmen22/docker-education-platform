'use client';

import { motion } from 'framer-motion';
import IconBadge from './IconBadge';
import { IconName } from '@/data/iconMap';

interface ResourceCardProps {
  icon: IconName;
  title: { fr: string; en: string };
  description: { fr: string; en: string };
  language: 'fr' | 'en';
  index: number;
}

export default function ResourceCard({ icon, title, description, language, index }: ResourceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(36,150,237,0.12)' }}
      className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:border-docker-blue/30 transition-all duration-300"
    >
      <div className="w-11 h-11 rounded-xl bg-docker-blue/10 flex items-center justify-center mb-3">
        <IconBadge name={icon} size={22} className="text-docker-blue" />
      </div>
      <h3 className="font-bold text-docker-dark text-sm mb-1.5">{title[language]}</h3>
      <p className="text-gray-500 text-xs leading-relaxed">{description[language]}</p>
    </motion.div>
  );
}
