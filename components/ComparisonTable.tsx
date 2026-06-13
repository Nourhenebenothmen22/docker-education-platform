'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/i18n';
import { contentData } from '@/data/content';
import { CheckCircle } from 'lucide-react';

export default function ComparisonTable() {
  const { language } = useTranslation();
  const tableData = contentData.dockerVsVm.table;

  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-md">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gradient-to-r from-docker-dark to-docker-blue text-white">
            <th className="px-5 py-4 text-left font-semibold rounded-tl-2xl">
              {tableData.columns.criteria[language]}
            </th>
            <th className="px-5 py-4 text-left font-semibold">
              <div className="flex items-center gap-2">
                <span className="text-lg">🖥️</span>
                {tableData.columns.vm[language]}
              </div>
            </th>
            <th className="px-5 py-4 text-left font-semibold rounded-tr-2xl">
              <div className="flex items-center gap-2">
                <span className="text-lg">🐳</span>
                {tableData.columns.container[language]}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.rows.map((row, i) => (
            <motion.tr
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`border-b border-gray-100 transition-colors hover:bg-blue-50/50 ${
                i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
              }`}
            >
              <td className="px-5 py-3.5 font-semibold text-docker-dark text-sm">
                {row.criteria[language]}
              </td>
              <td className="px-5 py-3.5 text-gray-600 text-sm">
                {row.vm[language]}
              </td>
              <td className="px-5 py-3.5 text-gray-700 font-medium text-sm">
                <span className="inline-flex items-start gap-1.5">
                  <CheckCircle size={15} className="text-green-500 mt-0.5 shrink-0" />
                  {row.container[language]}
                </span>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
