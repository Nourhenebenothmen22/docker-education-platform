'use client';

import Image from 'next/image';
import { Heart, BookOpen, Terminal, Code2 } from 'lucide-react';
import { useTranslation, assetPath } from '@/lib/i18n';

export default function Footer() {
  const { language } = useTranslation();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-white text-slate-900 mt-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
              <div className="flex items-center gap-3 mb-4">
              <Image src={assetPath('/docker-logo.png')} alt={language === 'fr' ? 'Logo Docker' : 'Docker logo'} width={40} height={40} className="object-contain" />
              <div>
                <p className="font-bold text-lg text-slate-900">Docker Master Lab</p>
                <p className="text-slate-500 text-xs">
                  {language === 'fr' ? 'Cours Docker avancé' : 'Advanced Docker course'}
                </p>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              {language === 'fr'
                ? 'Plateforme pratique pour apprendre Docker, les conteneurs, Dockerfile, Docker Compose, la migration VM vers Docker et les labs DevOps.'
                : 'A practical platform to learn Docker, containers, Dockerfile, Docker Compose, VM to Docker migration, and DevOps labs.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-semibold text-slate-950 mb-4 text-xs">
              {language === 'fr' ? 'Navigation' : 'Navigation'}
            </p>
            <ul className="space-y-2.5">
              {[
                { label: { fr: 'Introduction au cours', en: 'Course Introduction' }, id: 'introduction' },
                { label: { fr: 'Commandes Docker', en: 'Docker Commands' }, id: 'commands' },
                { label: { fr: 'Dockerfile avancé', en: 'Advanced Dockerfile' }, id: 'dockerfile' },
                { label: { fr: 'Docker Compose', en: 'Docker Compose' }, id: 'compose' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-slate-600 hover:text-[#2496ED] text-sm transition-colors duration-200 hover:underline underline-offset-2 bg-transparent border-none cursor-pointer text-left"
                  >
                    {link.label[language]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Topics */}
          <div>
            <p className="font-semibold text-slate-950 mb-4 text-xs">
              {language === 'fr' ? 'Ce que vous apprenez' : 'What You Learn'}
            </p>
            <ul className="space-y-2.5">
              {[
                { icon: BookOpen, label: { fr: 'Concepts fondamentaux Docker', en: 'Docker Core Concepts' } },
                { icon: Terminal, label: { fr: 'Toutes les commandes Docker', en: 'All Docker Commands' } },
                { icon: Code2, label: { fr: 'Dockerfile & Docker Compose', en: 'Dockerfile & Docker Compose' } },
                { icon: BookOpen, label: { fr: '15 labs corrigés', en: '15 Corrected Labs' } },
                { icon: Terminal, label: { fr: 'Défi final de pratique', en: 'Final Practice Challenge' } },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                  <item.icon size={14} className="text-docker-blue shrink-0" />
                  {item.label[language]}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm">
            {language === 'fr'
              ? '© 2026 Docker Master Lab — Tous droits réservés'
              : '© 2026 Docker Master Lab — All rights reserved'}
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            {language === 'fr' ? 'Fait avec' : 'Made with'} <Heart size={14} className="text-red-400 fill-red-400" />
            {language === 'fr' ? 'et Docker' : 'and Docker'}
          </p>
        </div>
      </div>
    </footer>
  );
}
