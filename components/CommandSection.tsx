'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import CodeBlock from './CodeBlock';
import { CommandCategory } from '@/data/commands';
import { Language } from '@/lib/i18n';

interface CommandSectionProps {
  category: CommandCategory;
  language: Language;
  defaultOpen?: boolean;
}

export default function CommandSection({ category, language, defaultOpen = false }: CommandSectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  const iconMap: Record<string, string> = {
    Terminal: '💻',
    Layers: '📦',
    Play: '▶️',
    MonitorPlay: '🖥️',
    Network: '🔌',
    HardDrive: '💾',
    Radio: '🌐',
    FileCode: '📄',
    Trash2: '🗑️',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-docker-light transition-colors duration-200"
      >
        <div className="flex items-center gap-3">
          <span className="text-xl">{iconMap[category.icon] || '📌'}</span>
          <span className="font-bold text-docker-dark text-base">{category.title[language]}</span>
          <span className="text-xs bg-docker-blue/10 text-docker-blue px-2 py-0.5 rounded-full font-medium">
            {category.items.length} {language === 'fr' ? 'commandes' : 'commands'}
          </span>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={20} className="text-gray-400" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="bg-gray-50/50 border-t border-gray-100">
              {category.items.map((item, i) => (
                <div
                  key={i}
                  className={`px-6 py-5 ${i !== category.items.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <div className="flex flex-col gap-3">
                    <div>
                      <code className="inline-block bg-docker-dark text-docker-blue font-mono text-sm px-3 py-1.5 rounded-lg font-bold">
                        {item.cmd}
                      </code>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item.explanation[language]}
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                          {language === 'fr' ? 'Exemple' : 'Example'}
                        </p>
                        <CodeBlock code={item.example} language="bash" />
                      </div>
                      <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                        <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-1.5">
                          {language === 'fr' ? 'Quand l\'utiliser ?' : 'When to use it?'}
                        </p>
                        <p className="text-amber-900 text-xs leading-relaxed">{item.whenToUse[language]}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
