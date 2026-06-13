'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, CheckCircle, Target, BookOpen } from 'lucide-react';
import CodeBlock from './CodeBlock';
import { Exercise } from '@/data/exercises';
import { Language } from '@/lib/i18n';

interface ExerciseCardProps {
  exercise: Exercise;
  language: Language;
  index: number;
}

const difficultyConfig = {
  beginner: {
    label: { fr: 'Débutant', en: 'Beginner' },
    color: 'bg-green-100 text-green-700 border-green-200'
  },
  intermediate: {
    label: { fr: 'Intermédiaire', en: 'Intermediate' },
    color: 'bg-amber-100 text-amber-700 border-amber-200'
  },
  advanced: {
    label: { fr: 'Avancé', en: 'Advanced' },
    color: 'bg-red-100 text-red-700 border-red-200'
  }
};

export default function ExerciseCard({ exercise, language, index }: ExerciseCardProps) {
  const [solutionOpen, setSolutionOpen] = useState(false);
  const diff = difficultyConfig[exercise.difficulty];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
    >
      {/* Card header */}
      <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-blue-50/30 border-b border-gray-100">
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-docker-blue text-white flex items-center justify-center font-bold text-sm shrink-0">
              {exercise.id}
            </div>
            <h3 className="font-bold text-docker-dark text-base">{exercise.title[language]}</h3>
          </div>
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${diff.color}`}>
            {diff.label[language]}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="px-6 py-5 space-y-4">
        {/* Objective */}
        <div className="flex items-start gap-2.5">
          <Target size={16} className="text-docker-blue mt-0.5 shrink-0" />
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
              {language === 'fr' ? 'Objectif' : 'Objective'}
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">{exercise.objective[language]}</p>
          </div>
        </div>

        {/* Instructions */}
        <div className="flex items-start gap-2.5">
          <BookOpen size={16} className="text-purple-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
              {language === 'fr' ? 'Instructions' : 'Instructions'}
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">{exercise.instructions[language]}</p>
          </div>
        </div>

        {/* Solution button */}
        {exercise.hasSolution && exercise.solution && (
          <div className="pt-2">
            <motion.button
              onClick={() => setSolutionOpen(!solutionOpen)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                solutionOpen
                  ? 'bg-green-500 text-white border-green-500'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-green-400 hover:text-green-600'
              }`}
            >
              {solutionOpen ? <EyeOff size={15} /> : <Eye size={15} />}
              {solutionOpen
                ? (language === 'fr' ? 'Masquer la correction' : 'Hide solution')
                : (language === 'fr' ? 'Voir la correction' : 'View solution')}
            </motion.button>

            <AnimatePresence>
              {solutionOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-3"
                >
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle size={16} className="text-green-600" />
                      <span className="text-sm font-bold text-green-700">
                        {language === 'fr' ? 'Correction' : 'Solution'}
                      </span>
                    </div>
                    <CodeBlock code={exercise.solution} language="bash" />
                    {exercise.solutionExplanation && (
                      <div className="mt-3 p-3 bg-white rounded-lg border border-green-100">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                          {language === 'fr' ? 'Explication' : 'Explanation'}
                        </p>
                        <p className="text-gray-700 text-xs leading-relaxed">
                          {exercise.solutionExplanation[language]}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </motion.div>
  );
}
