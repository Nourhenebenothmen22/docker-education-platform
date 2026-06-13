'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { contentData } from '@/data/content';
import { useTranslation, assetPath } from '@/lib/i18n';
import { ArrowRight, BookOpen, Terminal, Dumbbell, Zap, Globe, Shield, TrendingUp, Cpu, Cloud } from 'lucide-react';

const featureIcons = [Zap, Globe, Shield, TrendingUp, Cpu, Cloud];

const terminalLines = [
  { text: 'docker build -t docker-master-api .', output: { fr: '✓ Image créée avec succès', en: '✓ Image built successfully' } },
  { text: 'docker network create app_network', output: { fr: '✓ Réseau app_network prêt', en: '✓ Network app_network ready' } },
  { text: 'docker volume create mongo_data', output: { fr: '✓ Volume mongo_data créé', en: '✓ Volume mongo_data created' } },
  { text: 'docker compose up -d --build', output: { fr: '✓ Conteneurs App et MongoDB actifs', en: '✓ App and MongoDB containers running' } },
];

const metadataItems = {
  fr: ['Conteneurs', 'Dockerfile', 'Compose', 'Migration VM'],
  en: ['Containers', 'Dockerfile', 'Compose', 'VM Migration'],
};

export default function Hero() {
  const { language } = useTranslation();
  const data = contentData.hero;
  const lang = language;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const headline = {
    line1: lang === 'fr' ? 'Maîtrisez Docker.' : 'Master Docker.',
    line2: lang === 'fr' ? 'Déployez vos conteneurs.' : 'Deploy your containers.',
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#F7FBFF] to-[#EAF6FF] pt-12 pb-10 lg:pt-16 lg:pb-12">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-docker-blue/[0.04] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/[0.08] rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-docker-blue/[0.03] rounded-full blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.015]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2496ED" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        {/* ─── LEFT CONTENT ─── */}
        <div className="text-center lg:text-left">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-docker-blue/[0.08] text-docker-blue px-4 py-1.5 rounded-full text-sm font-semibold mb-5 border border-docker-blue/20"
          >
            <span className="w-2 h-2 rounded-full bg-docker-blue animate-pulse" />
            {lang === 'fr' ? 'Docker Master Lab · Cours pratique' : 'Docker Master Lab · Hands-on Course'}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05] text-docker-dark mb-5"
          >
            {headline.line1}
            <br />
            <span className="text-docker-blue">{headline.line2}</span>
          </motion.h1>

          {/* Metadata line */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap items-center gap-x-4 gap-y-1.5 justify-center lg:justify-start mt-4 mb-5"
          >
            {metadataItems[lang].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {i > 0 && <span className="text-gray-300 mx-0.5">·</span>}
                {item}
              </span>
            ))}
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 mt-4 max-w-xl leading-7 mx-auto lg:mx-0"
          >
            {data.subtitle[lang]}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap justify-center lg:justify-start"
          >
            {/* Primary */}
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: '0 8px 30px rgba(36,150,237,0.4)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo('introduction')}
              className="flex items-center gap-2 bg-docker-blue text-white h-11 px-5 rounded-xl font-semibold text-sm shadow-lg hover:bg-docker-dark transition-colors"
            >
              <BookOpen size={16} />
              {data.startLearningBtn[lang]}
              <ArrowRight size={14} />
            </motion.button>

            {/* Secondary */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo('commands')}
              className="flex items-center gap-2 bg-white text-docker-dark border-2 border-docker-blue/20 h-11 px-5 rounded-xl font-semibold text-sm hover:border-docker-blue hover:text-docker-blue transition-all"
            >
              <Terminal size={16} />
              {data.viewCommandsBtn[lang]}
            </motion.button>

            {/* Text link */}
            <motion.button
              whileHover={{ x: 3 }}
              onClick={() => scrollTo('labs')}
              className="flex items-center gap-1.5 text-gray-500 hover:text-docker-blue text-sm font-semibold transition-colors px-2"
            >
              <Dumbbell size={15} />
              {data.exercisesBtn[lang]}
              <ArrowRight size={13} />
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 grid grid-cols-3 gap-5 mx-auto lg:mx-0"
          >
            {[
              { val: '12', label: { fr: 'chapitres', en: 'chapters' } },
              { val: '50+', label: { fr: 'commandes Docker', en: 'Docker commands' } },
              { val: '8', label: { fr: 'labs corrigés', en: 'corrected labs' } },
            ].map((stat, i) => (
              <div key={i} className="text-center lg:text-left">
                <p className="text-2xl font-bold text-docker-blue leading-none mb-0.5">{stat.val}</p>
                <p className="text-xs text-gray-500 font-medium">{stat.label[lang]}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ─── RIGHT — TERMINAL VISUAL ─── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 lg:mt-0 w-full max-w-xl mx-auto lg:ml-auto"
        >
          {/* Terminal card */}
          <div className="relative bg-[#0D1117] rounded-2xl overflow-hidden shadow-2xl border border-white/[0.06]">
            {/* Terminal title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#161B22] border-b border-white/[0.06]">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              <span className="text-gray-500 text-xs font-mono ml-2">docker-terminal — zsh</span>
            </div>

            {/* Terminal body */}
            <div className="p-4 space-y-0.5 font-mono text-xs sm:text-sm overflow-x-auto max-w-full">
              {terminalLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.15 }}
                >
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 shrink-0 select-none">❯</span>
                    <span className="text-gray-200 break-words">{line.text}</span>
                  </div>
                  <div className="flex items-start gap-2 pl-5 pb-1">
                    <span className="text-cyan-400 text-xs shrink-0 mt-0.5">◇</span>
                    <span className="text-gray-400 text-xs">{line.output[lang]}</span>
                  </div>
                </motion.div>
              ))}

              {/* Final status */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="flex items-start gap-2 pt-1"
              >
                <span className="text-green-400 shrink-0 select-none">❯</span>
                <span className="text-green-400 text-xs font-semibold">
                  {lang === 'fr' ? '✓ API prête sur le port 3000' : '✓ API ready on port 3000'}
                </span>
              </motion.div>

              {/* Blinking cursor */}
              <motion.div
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
                className="flex items-center gap-2 pt-0.5"
              >
                <span className="text-green-400">❯</span>
                <span className="w-2 h-4 bg-gray-300 inline-block" />
              </motion.div>
            </div>
          </div>

          {/* Docker icon watermark */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]">
            <Image src={assetPath('/docker-logo.png')} alt="" width={200} height={200} />
          </div>

          {/* Terminal caption */}
          <div className="text-center mt-4">
            <p className="text-docker-blue font-bold text-sm">
              {lang === 'fr' ? 'Aperçu Docker Runtime' : 'Docker Runtime Preview'}
            </p>
            <p className="text-gray-400 text-xs mt-1">
              {lang === 'fr' ? 'Images · Conteneurs · Réseaux · Volumes' : 'Images · Containers · Networks · Volumes'}
            </p>
          </div>
        </motion.div>
      </div>

      {/* ─── FEATURE CARDS ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-docker-dark mb-3">
            {data.whyImportantTitle[lang]}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{data.whyImportantDesc[lang]}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.cards.map((card, i) => {
            const Icon = featureIcons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 12px 40px rgba(36,150,237,0.15)' }}
                className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:border-docker-blue/30 transition-all duration-300 cursor-default"
              >
                <div className="w-10 h-10 bg-docker-blue/10 rounded-xl flex items-center justify-center mb-3">
                  <Icon size={20} className="text-docker-blue" />
                </div>
                <h3 className="font-bold text-docker-dark mb-2">{card.title[lang]}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.desc[lang]}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
