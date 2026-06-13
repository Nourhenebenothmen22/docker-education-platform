'use client';

import { motion } from 'framer-motion';
import { ComponentType } from 'react';
import { Server, Monitor, Layers, Container, Database, Globe, HardDrive, Network, Cog, Box, ArrowRight } from 'lucide-react';

type DiagramType = 'vm' | 'docker' | 'migration';

interface ArchitectureDiagramProps {
  type: DiagramType;
  language: 'fr' | 'en';
}

function BoxItem({ label, icon: Icon, color, sublabel }: { label: string; icon: ComponentType<{ size?: number; style?: React.CSSProperties }>; color: string; sublabel?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center p-3 rounded-xl border-2 bg-white shadow-sm"
      style={{ borderColor: color }}
    >
      <Icon size={24} style={{ color }} />
      <p className="text-xs font-bold mt-1 text-center leading-tight" style={{ color: '#1F2937' }}>{label}</p>
      {sublabel && <p className="text-[10px] text-gray-400 text-center mt-0.5">{sublabel}</p>}
    </motion.div>
  );
}

function VmDiagram() {
  return (
    <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
      <div className="flex gap-8 items-start flex-wrap justify-center">
        <div className="flex flex-col items-center gap-2">
          <BoxItem label="Infrastructure" icon={Server} color="#6B7280" />
          <div className="w-0.5 h-4 bg-gray-300" />
          <BoxItem label="Host OS" icon={Monitor} color="#9CA3AF" sublabel="Linux / Windows" />
          <div className="w-0.5 h-4 bg-gray-300" />
          <BoxItem label="Hyperviseur" icon={Cog} color="#0B4F8A" sublabel="VMware / VirtualBox" />
        </div>
        <div className="flex gap-6 items-start">
          <div className="flex flex-col items-center gap-2 p-4 border-2 border-dashed border-orange-300 rounded-xl bg-orange-50/50">
            <p className="text-xs font-bold text-orange-700">VM 1</p>
            <BoxItem label="Guest OS" icon={Monitor} color="#EA580C" sublabel="Ubuntu 22.04" />
            <div className="w-0.5 h-3 bg-orange-300" />
            <BoxItem label="App" icon={Container} color="#2496ED" sublabel="Node.js API" />
            <div className="w-0.5 h-3 bg-orange-300" />
            <BoxItem label="Dependencies" icon={Box} color="#6B7280" sublabel="npm packages" />
          </div>
          <div className="flex flex-col items-center gap-2 p-4 border-2 border-dashed border-orange-300 rounded-xl bg-orange-50/50">
            <p className="text-xs font-bold text-orange-700">VM 2</p>
            <BoxItem label="Guest OS" icon={Monitor} color="#EA580C" sublabel="Ubuntu 22.04" />
            <div className="w-0.5 h-3 bg-orange-300" />
            <BoxItem label="Database" icon={Database} color="#2496ED" sublabel="MongoDB" />
            <div className="w-0.5 h-3 bg-orange-300" />
            <BoxItem label="Dependencies" icon={Box} color="#6B7280" sublabel="system libs" />
          </div>
        </div>
      </div>
    </div>
  );
}

function DockerDiagram() {
  return (
    <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
      <div className="flex gap-8 items-start flex-wrap justify-center">
        <div className="flex flex-col items-center gap-2">
          <BoxItem label="Infrastructure" icon={Server} color="#6B7280" />
          <div className="w-0.5 h-4 bg-gray-300" />
          <BoxItem label="Host OS" icon={Monitor} color="#9CA3AF" sublabel="Linux" />
          <div className="w-0.5 h-4 bg-gray-300" />
          <BoxItem label="Docker Engine" icon={Cog} color="#2496ED" sublabel="dockerd" />
        </div>
        <div className="flex gap-4 items-start">
          <div className="flex flex-col items-center gap-2 p-4 border-2 border-dashed border-docker-blue/40 rounded-xl bg-docker-light/50">
            <p className="text-xs font-bold text-docker-blue">Containers</p>
            <BoxItem label="App" icon={Container} color="#2496ED" sublabel="Node.js API" />
            <BoxItem label="MongoDB" icon={Database} color="#0B4F8A" sublabel="Database" />
            <div className="flex items-center gap-1 text-[10px] text-gray-500">
              <Network size={12} /> Docker Network
            </div>
            <div className="flex items-center gap-1 text-[10px] text-gray-500">
              <HardDrive size={12} /> Docker Volume
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MigrationDiagram({ language }: { language: 'fr' | 'en' }) {
  const before = language === 'fr' ? 'Avant (VM)' : 'Before (VM)';
  const after = language === 'fr' ? 'Après (Docker)' : 'After (Docker)';

  const vmSteps = [
    { label: language === 'fr' ? 'VM Linux' : 'Linux VM', icon: Monitor },
    { label: 'Node.js ' + (language === 'fr' ? 'manuel' : 'manual'), icon: Container },
    { label: 'MongoDB ' + (language === 'fr' ? 'manuel' : 'manual'), icon: Database },
    { label: 'Nginx ' + (language === 'fr' ? 'manuel' : 'manual'), icon: Globe },
    { label: language === 'fr' ? 'Config manuelle' : 'Manual config', icon: Cog },
    { label: language === 'fr' ? 'Déploiement manuel' : 'Manual deploy', icon: Box },
  ];

  const dockerSteps = [
    { label: 'Docker Compose', icon: Layers },
    { label: 'App ' + (language === 'fr' ? 'conteneur' : 'container'), icon: Container },
    { label: 'MongoDB ' + (language === 'fr' ? 'conteneur' : 'container'), icon: Database },
    { label: language === 'fr' ? 'Réseau partagé' : 'Shared network', icon: Network },
    { label: language === 'fr' ? 'Volume persistant' : 'Persistent volume', icon: HardDrive },
    { label: 'docker compose up', icon: ArrowRight },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="p-5 rounded-2xl border-2 border-orange-200 bg-orange-50/30">
        <h4 className="text-sm font-bold text-orange-700 mb-3 text-center">{before}</h4>
        <div className="flex flex-col gap-2">
          {vmSteps.map((s, i) => (
            <div key={i} className="flex items-center gap-3 bg-white rounded-lg p-2.5 border border-orange-100">
              <s.icon size={16} className="text-orange-500 shrink-0" />
              <span className="text-xs text-gray-700">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="p-5 rounded-2xl border-2 border-docker-blue/30 bg-docker-light/50">
        <h4 className="text-sm font-bold text-docker-blue mb-3 text-center">{after}</h4>
        <div className="flex flex-col gap-2">
          {dockerSteps.map((s, i) => (
            <div key={i} className="flex items-center gap-3 bg-white rounded-lg p-2.5 border border-docker-blue/10">
              <s.icon size={16} className="text-docker-blue shrink-0" />
              <span className="text-xs text-gray-700">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ArchitectureDiagram({ type, language }: ArchitectureDiagramProps) {
  const titleMap = {
    vm: { fr: 'Architecture des machines virtuelles', en: 'Virtual Machine Architecture' },
    docker: { fr: 'Architecture Docker', en: 'Docker Architecture' },
    migration: { fr: 'Migration VM vers Docker', en: 'VM to Docker Migration' },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="my-8"
    >
      <h3 className="text-lg font-bold text-docker-dark mb-4">{titleMap[type][language]}</h3>
      <div className="overflow-x-auto pb-2">
        {type === 'vm' && <VmDiagram />}
        {type === 'docker' && <DockerDiagram />}
        {type === 'migration' && <MigrationDiagram language={language} />}
      </div>
    </motion.div>
  );
}
