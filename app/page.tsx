'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useTranslation } from '@/lib/i18n';
import { contentData } from '@/data/content';
import { commandsData } from '@/data/commands';
import { exercises, finalChallenge } from '@/data/exercises';
import { getAllNavIds, getChildToParentMap } from '@/data/navigation';
import { motion } from 'framer-motion';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import SectionWrapper from '@/components/SectionWrapper';
import CodeBlock from '@/components/CodeBlock';
import ComparisonTable from '@/components/ComparisonTable';
import CommandSection from '@/components/CommandSection';
import ExerciseCard from '@/components/ExerciseCard';
import AlertBox from '@/components/AlertBox';
import ArchitectureDiagram from '@/components/ArchitectureDiagram';
import ResourceCard from '@/components/ResourceCard';
import SectionHeading from '@/components/SectionHeading';
import CourseSidebar from '@/components/CourseSidebar';
import MobileCourseDrawer from '@/components/MobileCourseDrawer';
import InstallationAccordion from '@/components/InstallationAccordion';

import { ComponentType } from 'react';
import {
  Info, Clock, GitCompare, Star, Globe2, Download,
  Terminal, FileCode, PackageOpen, Lightbulb, Dumbbell, Trophy,
  CheckCircle2, Layers, Server,
  Monitor, Cog, Container,
  CloudUpload, Shield,
  AlertTriangle, FileJson, MonitorPlay, RefreshCw,
} from 'lucide-react';

function SectionHeader({ icon: Icon, title, subtitle }: {
  icon: ComponentType<{ size?: number; className?: string }>; title: string; subtitle?: string;
}) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-docker-blue/10 flex items-center justify-center">
          <Icon size={22} className="text-docker-blue" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-docker-dark !mb-0">{title}</h2>
      </div>
      <div className="w-16 h-1 bg-docker-blue rounded-full mb-4" />
      {subtitle && <p className="text-gray-500 text-base leading-relaxed">{subtitle}</p>}
    </div>
  );
}

function ConceptCard({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-docker-blue/30 transition-all duration-200"
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 rounded-full bg-docker-blue" />
        <h3 className="font-bold text-docker-dark text-sm">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

const allSectionIds = getAllNavIds().concat([
  'docker-vs-vm', 'installation', 'examples',
  'docker-security', 'docker-devops',
]);
const childToParent = getChildToParentMap();

const labIdMap: Record<number, string> = {
  1: 'lab-hello-world',
  2: 'lab-nginx',
  3: 'lab-mongodb',
  4: 'lab-dockerfile',
  5: 'lab-compose',
  6: 'lab-volumes',
  7: 'lab-networks',
  8: 'lab-vm-migration',
};

export default function HomePage() {
  const { language } = useTranslation();
  const d = contentData;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-112px 0px -70% 0px', threshold: 0 }
    );

    const ids = allSectionIds;
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) {
        observerRef.current.observe(el);
      }
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const scrollToSection = useCallback((id: string) => {
    let targetId = id;
    if (!document.getElementById(targetId)) {
      targetId = childToParent[id] || id;
    }
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="flex flex-col min-h-full">
      <Navbar onMenuToggle={() => setSidebarOpen(prev => !prev)} sidebarOpen={sidebarOpen} />

      <div className="flex pt-16">
        {/* Desktop sidebar */}
        <div className="hidden lg:block fixed top-16 left-0 bottom-0 z-30">
          <CourseSidebar activeSection={activeSection} onNavigate={scrollToSection} />
        </div>

        {/* Mobile drawer */}
        <MobileCourseDrawer
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activeSection={activeSection}
          onNavigate={scrollToSection}
          language={language}
        />

        {/* Main content */}
        <main className="flex-1 min-w-0 lg:ml-[280px]">
          {/* ===================== HERO ===================== */}
          <Hero />

          {/* ===================== INTRODUCTION ===================== */}
          <section id="introduction">
            <SectionWrapper id="docker-definition" alternate>
              <SectionHeader
                icon={Info}
                title={d.whatIsDocker.title[language]}
                subtitle={d.whatIsDocker.definition[language]}
              />

              <AlertBox type="info">
                <p>{d.whatIsDocker.problemSolved.title[language]} : {d.whatIsDocker.problemSolved.text[language]}</p>
              </AlertBox>

              <div className="mb-8 mt-6">
                <h3 className="text-xl font-bold text-docker-dark mb-5">{d.whatIsDocker.keyConcepts.title[language]}</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    d.whatIsDocker.keyConcepts.container,
                    d.whatIsDocker.keyConcepts.image,
                    d.whatIsDocker.keyConcepts.engine,
                    d.whatIsDocker.keyConcepts.hub,
                    d.whatIsDocker.keyConcepts.dockerfile,
                    d.whatIsDocker.keyConcepts.compose,
                  ].map((concept, i) => (
                    <ConceptCard key={i} title={concept.name[language]} desc={concept.desc[language]} />
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-docker-dark mb-3 flex items-center gap-2">
                    <GitCompare size={18} className="text-docker-blue" />
                    {d.whatIsDocker.differences.imageVsContainer.title[language]}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{d.whatIsDocker.differences.imageVsContainer.text[language]}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-docker-dark mb-3 flex items-center gap-2">
                    <GitCompare size={18} className="text-docker-blue" />
                    {d.whatIsDocker.differences.dockerVsTraditional.title[language]}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{d.whatIsDocker.differences.dockerVsTraditional.text[language]}</p>
                </div>
              </div>
            </SectionWrapper>

            {/* ===================== WHY DOCKER ===================== */}
            <SectionWrapper id="why-docker-exists">
              <SectionHeader
                icon={Star}
                title={d.whyDockerIsImportant.title[language]}
              />
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {d.whyDockerIsImportant.points.map((pt, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-docker-blue/30 transition-all duration-200"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-docker-blue mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-bold text-docker-dark text-sm mb-1.5">{pt.title[language]}</h3>
                        <p className="text-gray-500 text-xs leading-relaxed">{pt.text[language]}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </SectionWrapper>

            {/* ===================== DOMAINS ===================== */}
            <SectionWrapper id="docker-professional" alternate>
              <SectionHeader
                icon={Globe2}
                title={d.domains.title[language]}
                subtitle={d.domains.intro[language]}
              />
              <div className="grid md:grid-cols-2 gap-5">
                {d.domains.list.map((domain, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-docker-blue/20 transition-all"
                  >
                    <h3 className="font-bold text-docker-dark mb-3 flex items-center gap-2">
                      <span className="w-2 h-6 bg-docker-blue rounded-full" />
                      {domain.field[language]}
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-semibold text-docker-blue">
                          {language === 'fr' ? 'Pourquoi : ' : 'Why: '}
                        </span>
                        <span className="text-gray-600">{domain.why[language]}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-purple-600">
                          {language === 'fr' ? "Cas d'usage : " : 'Use case: '}
                        </span>
                        <span className="text-gray-600">{domain.useCase[language]}</span>
                      </div>
                      <div className="bg-gray-50 border border-gray-100 rounded-lg p-3 mt-2">
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">
                          {language === 'fr' ? 'Scénario réel' : 'Real-world scenario'}
                        </span>
                        <span className="text-gray-600 text-xs leading-relaxed italic">{domain.scenario[language]}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </SectionWrapper>

            {/* ===================== RESOURCE CARDS ===================== */}
            <SectionWrapper id="works-on-my-machine">
              <SectionHeading
                icon="boxes"
                title={language === 'fr' ? 'Les conteneurs et ressources nécessaires' : 'Required Containers and Resources'}
                subtitle={language === 'fr'
                  ? 'Les composants essentiels d\'une architecture Docker moderne'
                  : 'The essential components of a modern Docker architecture'}
              />
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <ResourceCard
                  icon="nodeApp"
                  title={{ fr: 'Conteneur application', en: 'Application container' }}
                  description={{ fr: 'Exécute l\'API Node.js ou Express dans un environnement isolé.', en: 'Runs the Node.js or Express API inside an isolated environment.' }}
                  language={language} index={0}
                />
                <ResourceCard
                  icon="database"
                  title={{ fr: 'Conteneur MongoDB', en: 'MongoDB container' }}
                  description={{ fr: 'Exécute MongoDB et conserve les données via un volume persistant.', en: 'Runs the MongoDB database and keeps data using a persistent volume.' }}
                  language={language} index={1}
                />
                <ResourceCard
                  icon="nginx"
                  title={{ fr: 'Conteneur Nginx', en: 'Nginx container' }}
                  description={{ fr: 'Peut servir de reverse proxy ou de serveur web devant l\'application.', en: 'Can act as a reverse proxy or web server in front of the application.' }}
                  language={language} index={2}
                />
                <ResourceCard
                  icon="network"
                  title={{ fr: 'Réseau Docker', en: 'Docker network' }}
                  description={{ fr: 'Permet aux conteneurs de communiquer entre eux avec leurs noms de service.', en: 'Allows containers to communicate with each other using service names.' }}
                  language={language} index={3}
                />
                <ResourceCard
                  icon="volume"
                  title={{ fr: 'Volume Docker', en: 'Docker volume' }}
                  description={{ fr: 'Conserve les données même si un conteneur est supprimé ou recréé.', en: 'Keeps data even if a container is removed or recreated.' }}
                  language={language} index={4}
                />
                <ResourceCard
                  icon="image"
                  title={{ fr: 'Image Docker', en: 'Docker image' }}
                  description={{ fr: 'Modèle immuable utilisé pour créer un ou plusieurs conteneurs.', en: 'Immutable template used to create one or more containers.' }}
                  language={language} index={5}
                />
                <ResourceCard
                  icon="registry"
                  title={{ fr: 'Registre Docker', en: 'Docker registry' }}
                  description={{ fr: 'Stocke et partage les images Docker, par exemple avec Docker Hub.', en: 'Stores and shares Docker images, for example with Docker Hub.' }}
                  language={language} index={6}
                />
              </div>
            </SectionWrapper>
          </section>

          {/* ===================== INSTALLATION ===================== */}
          <SectionWrapper id="installation" alternate>
            <SectionHeader icon={Download} title={d.installation.title[language]} />

            <AlertBox type="practice">
              <p>{language === 'fr' ? 'Avant de commencer ce lab, vérifiez que Docker est installé avec docker --version.' : 'Before starting this lab, verify that Docker is installed using docker --version.'}</p>
            </AlertBox>

            <div className="space-y-4 mb-10">
              <InstallationAccordion
                id="windows-installation"
                icon={Monitor}
                title={d.installation.platforms.windows.title[language]}
                summary={d.installation.platforms.windows.summary[language]}
              >
                <ol className="space-y-2.5 mb-4">
                  {d.installation.platforms.windows.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="w-5 h-5 rounded-full bg-docker-blue/10 text-docker-blue text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">{i + 1}</span>
                      <span>{step[language]}</span>
                    </li>
                  ))}
                </ol>
                <CodeBlock code={d.installation.platforms.windows.commands.join('\n')} language="bash" />
                <AlertBox type="tip">
                  <p>{d.installation.platforms.windows.tip[language]}</p>
                </AlertBox>
              </InstallationAccordion>

              <InstallationAccordion
                id="macos-installation"
                icon={Monitor}
                title={d.installation.platforms.macos.title[language]}
                summary={d.installation.platforms.macos.summary[language]}
              >
                <ol className="space-y-2.5 mb-4">
                  {d.installation.platforms.macos.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="w-5 h-5 rounded-full bg-docker-blue/10 text-docker-blue text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">{i + 1}</span>
                      <span>{step[language]}</span>
                    </li>
                  ))}
                </ol>
                <CodeBlock code={d.installation.platforms.macos.commands.join('\n')} language="bash" />
                <AlertBox type="tip">
                  <p>{d.installation.platforms.macos.tip[language]}</p>
                </AlertBox>
              </InstallationAccordion>

              <InstallationAccordion
                id="linux-installation"
                icon={Terminal}
                title={d.installation.platforms.linux.title[language]}
                summary={d.installation.platforms.linux.summary[language]}
                defaultOpen={true}
              >
                <p className="text-gray-600 text-sm mb-4">{d.installation.platforms.linux.intro[language]}</p>
                {d.installation.platforms.linux.commandBlocks.map((block, i) => (
                  <div key={i}>
                    <p className="text-xs font-semibold text-gray-500 mb-1.5">{block.label[language]}</p>
                    <CodeBlock code={block.code} language="bash" />
                  </div>
                ))}
                <AlertBox type="tip">
                  <p>{d.installation.platforms.linux.tip[language]}</p>
                </AlertBox>
                <AlertBox type="warning">
                  <p>{d.installation.platforms.linux.warning[language]}</p>
                </AlertBox>
              </InstallationAccordion>

              <InstallationAccordion
                id="docker-verification"
                icon={CheckCircle2}
                title={d.installation.verification.title[language]}
                summary={d.installation.verification.summary[language]}
              >
                <p className="text-gray-600 text-sm mb-4">{d.installation.verification.text[language]}</p>
                {d.installation.verification.commands.map((cmd, i) => (
                  <div key={i}>
                    <CodeBlock code={cmd.cmd} language="bash" />
                    <p className="text-xs text-gray-500 mt-1 ml-1">→ {cmd.desc[language]}</p>
                  </div>
                ))}
              </InstallationAccordion>
            </div>
          </SectionWrapper>

          {/* ===================== HISTORY ===================== */}
          <section id="history">
            <SectionWrapper id="before-docker">
              <SectionHeading icon="history" title={d.problemsBeforeDocker.title[language]} />
              <p className="text-gray-700 leading-relaxed mb-6">{d.problemsBeforeDocker.intro[language]}</p>
              <div className="grid md:grid-cols-2 gap-5 mb-6">
                {d.problemsBeforeDocker.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-white border-l-4 border-amber-400 pl-5 py-4 rounded-r-xl shadow-sm"
                  >
                    <h3 className="font-bold text-docker-dark text-sm mb-1.5">{item.problem[language]}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.explanation[language]}</p>
                  </motion.div>
                ))}
              </div>
              <AlertBox type="tip">
                <p>{d.problemsBeforeDocker.conclusion[language]}</p>
              </AlertBox>
            </SectionWrapper>

            <SectionWrapper id="docker-appearance" alternate>
              <SectionHeader icon={Clock} title={d.history.title[language]} />
              <div className="prose-docker max-w-3xl mb-6">
                <p className="text-gray-700 leading-relaxed mb-6">{d.history.text[language]}</p>
              </div>
              <div className="space-y-4 mb-6">
                {[d.history.whyAppeared, d.history.evolution, d.history.popularity].map((section, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white border-l-4 border-docker-blue pl-5 py-3 rounded-r-xl shadow-sm"
                  >
                    <h3 className="font-bold text-docker-dark mb-2">{section.title[language]}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{section.text[language]}</p>
                  </motion.div>
                ))}
              </div>
            </SectionWrapper>
          </section>

          {/* ===================== DOCKER ARCHITECTURE ===================== */}
          <section id="architecture">
            <SectionWrapper id="docker-architecture">
              <SectionHeading
                icon="dockerEngine"
                title={d.dockerArchitecture.title[language]}
                subtitle={d.dockerArchitecture.intro[language]}
              />

              <div className="grid md:grid-cols-2 gap-5 mb-6">
                <div id="docker-client" className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Terminal size={18} className="text-docker-blue" />
                    <h3 className="font-bold text-docker-dark text-sm">{d.dockerArchitecture.client.title[language]}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{d.dockerArchitecture.client.text[language]}</p>
                </div>
                <div id="docker-daemon" className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Cog size={18} className="text-docker-blue" />
                    <h3 className="font-bold text-docker-dark text-sm">{d.dockerArchitecture.daemon.title[language]}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{d.dockerArchitecture.daemon.text[language]}</p>
                </div>
                <div id="docker-engine" className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Server size={18} className="text-docker-blue" />
                    <h3 className="font-bold text-docker-dark text-sm">{d.dockerArchitecture.engine.title[language]}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{d.dockerArchitecture.engine.text[language]}</p>
                </div>
                <div id="docker-registry" className="bg-docker-light border border-docker-blue/20 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <CloudUpload size={18} className="text-docker-blue" />
                    <h3 className="font-bold text-docker-dark text-sm">{d.dockerArchitecture.registry.title[language]}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{d.dockerArchitecture.registry.text[language]}</p>
                </div>
              </div>

              <AlertBox type="info">
                <p>{d.dockerArchitecture.communication[language]}</p>
              </AlertBox>
            </SectionWrapper>
          </section>

          {/* ===================== DOCKER VS VM ===================== */}
          <SectionWrapper id="docker-vs-vm" alternate>
            <SectionHeader icon={GitCompare} title={d.dockerVsVm.title[language]} />

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div id="vm-architecture" className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Monitor size={20} className="text-docker-blue" />
                  <h3 className="font-bold text-docker-dark">{d.dockerVsVm.vmDefinition.title[language]}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{d.dockerVsVm.vmDefinition.text[language]}</p>
              </div>
              <div id="docker-arch-compare" className="bg-docker-light border border-docker-blue/20 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Container size={20} className="text-docker-blue" />
                  <h3 className="font-bold text-docker-dark">{d.dockerVsVm.containerDefinition.title[language]}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{d.dockerVsVm.containerDefinition.text[language]}</p>
              </div>
            </div>

            <ArchitectureDiagram type="vm" language={language} />

            <AlertBox type="tip">
              <p>{language === 'fr' ? 'Un conteneur n\'est pas une machine virtuelle. Il partage le kernel de l\'hôte mais isole le processus de l\'application.' : 'A container is not a virtual machine. It shares the host kernel but isolates the application process.'}</p>
            </AlertBox>

            <ArchitectureDiagram type="docker" language={language} />

            <div className="mb-6">
              <h3 className="text-xl font-bold text-docker-dark mb-5">{d.dockerVsVm.comparisonMetrics.title[language]}</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {d.dockerVsVm.comparisonMetrics.points.map((pt, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                    <p className="font-semibold text-docker-blue text-sm mb-1">{pt.name[language]}</p>
                    <p className="text-gray-600 text-sm">{language === 'fr' ? pt.fr : pt.en}</p>
                  </div>
                ))}
              </div>
            </div>

            <h3 id="comparison-table" className="text-xl font-bold text-docker-dark mb-5">
              {language === 'fr' ? 'Tableau Comparatif Complet' : 'Full Comparison Table'}
            </h3>
            <ComparisonTable />
          </SectionWrapper>

          {/* ===================== VM TO DOCKER MIGRATION ===================== */}
          <section id="migration">
            <SectionWrapper id="vm-to-docker-migration">
              <SectionHeading
                icon="migration"
                title={d.vmToDockerMigration.title[language]}
              />
              <p className="text-gray-700 leading-relaxed mb-6">{d.vmToDockerMigration.intro[language]}</p>

              <AlertBox type="migration">
                <p>{language === 'fr' ? 'La migration VM vers Docker transforme radicalement la façon dont vous déployez et gérez vos applications.' : 'VM to Docker migration radically transforms how you deploy and manage your applications.'}</p>
              </AlertBox>

              <h3 id="why-migrate" className="text-xl font-bold text-docker-dark mb-4">{d.vmToDockerMigration.whyMigrate.title[language]}</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {d.vmToDockerMigration.whyMigrate.reasons.map((r, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
                  >
                    <h4 className="font-bold text-docker-dark text-sm mb-1">{r.title[language]}</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">{r.desc[language]}</p>
                  </motion.div>
                ))}
              </div>

              <h3 id="traditional-vm-deployment" className="text-xl font-bold text-docker-dark mb-4">{d.vmToDockerMigration.traditionalDeployment.title[language]}</h3>
              <p className="text-gray-700 text-sm mb-3">{d.vmToDockerMigration.traditionalDeployment.workflow[language]}</p>
              <CodeBlock code={d.vmToDockerMigration.traditionalDeployment.steps.join('\n')} language="bash" showLineNumbers />

              <div id="vm-limitations" className="mt-4 mb-6">
                <p className="font-semibold text-docker-dark text-sm mb-2">
                  {language === 'fr' ? 'Problèmes :' : 'Problems:'}
                </p>
                <ul className="space-y-1.5">
                  {d.vmToDockerMigration.traditionalDeployment.problems.map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <AlertTriangle size={14} className="text-amber-500 mt-0.5 shrink-0" />
                      <span>{p[language]}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="text-xl font-bold text-docker-dark mb-4">
                {language === 'fr' ? 'Étapes de migration' : 'Migration steps'}
              </h3>
              <div className="space-y-3 mb-6">
                {d.vmToDockerMigration.migrationSteps.map((s) => (
                  <motion.div
                    key={s.step}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm"
                  >
                    <span className="w-8 h-8 bg-docker-blue text-white rounded-lg flex items-center justify-center text-sm font-bold shrink-0">{s.step}</span>
                    <div>
                      <h4 className="font-bold text-docker-dark text-sm">{s.title[language]}</h4>
                      <p className="text-gray-600 text-xs mt-0.5">{s.desc[language]}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <ArchitectureDiagram type="migration" language={language} />

              <h3 className="text-xl font-bold text-docker-dark mb-4">{d.vmToDockerMigration.migrationLab.title[language]}</h3>

              <AlertBox type="practice">
                <p>{language === 'fr' ? 'Lab pratique : Migrez une application Node.js + MongoDB d\'une VM vers Docker Compose.' : 'Practical lab: Migrate a Node.js + MongoDB application from a VM to Docker Compose.'}</p>
              </AlertBox>

              <p className="text-gray-700 text-sm mb-3">
                {language === 'fr' ? 'Dockerfile :' : 'Dockerfile:'}
              </p>
              <CodeBlock code={d.vmToDockerMigration.migrationLab.dockerfile} language="dockerfile" showLineNumbers />

              <p className="text-gray-700 text-sm mb-3 mt-4">
                {language === 'fr' ? 'compose.yml :' : 'compose.yml:'}
              </p>
              <CodeBlock code={d.vmToDockerMigration.migrationLab.compose} language="yaml" showLineNumbers />

              <p className="text-gray-700 text-sm mb-2 mt-4">
                {language === 'fr' ? 'Commandes :' : 'Commands:'}
              </p>
              <CodeBlock code={d.vmToDockerMigration.migrationLab.commands.join('\n')} language="bash" showLineNumbers />

              <AlertBox type="info">
                <p>{d.vmToDockerMigration.migrationLab.expected[language]}</p>
              </AlertBox>

              <div className="grid md:grid-cols-2 gap-5 mt-6">
                <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5">
                  <p className="font-bold text-orange-700 text-sm mb-2">
                    {language === 'fr' ? '❌ Avant (VM)' : '❌ Before (VM)'}
                  </p>
                  <p className="text-orange-800 text-sm leading-relaxed">{d.vmToDockerMigration.beforeAfter.before[language]}</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
                  <p className="font-bold text-green-700 text-sm mb-2">
                    {language === 'fr' ? '✅ Après (Docker)' : '✅ After (Docker)'}
                  </p>
                  <p className="text-green-800 text-sm leading-relaxed">{d.vmToDockerMigration.beforeAfter.after[language]}</p>
                </div>
              </div>
            </SectionWrapper>
          </section>

          {/* ===================== IMAGES AND CONTAINERS ===================== */}
          <SectionWrapper id="images-containers" alternate>
            <SectionHeading
              icon="image"
              title={language === 'fr' ? 'Images et conteneurs Docker' : 'Docker Images and Containers'}
            />

            <div className="grid md:grid-cols-2 gap-5 mb-6">
              <div id="docker-image" className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Layers size={18} className="text-docker-blue" />
                  <h3 className="font-bold text-docker-dark text-sm">
                    {language === 'fr' ? 'Image Docker' : 'Docker Image'}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {language === 'fr'
                    ? 'Une image Docker est un modèle immuable en lecture seule qui contient le code, le runtime, les bibliothèques et la configuration nécessaires pour exécuter une application. Elle est construite à partir d\'un Dockerfile et sert de plan pour créer des conteneurs.'
                    : 'A Docker image is an immutable read-only template that contains the code, runtime, libraries, and configuration needed to run an application. It is built from a Dockerfile and serves as a blueprint for creating containers.'}
                </p>
              </div>
              <div id="docker-container" className="bg-docker-light border border-docker-blue/20 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Container size={18} className="text-docker-blue" />
                  <h3 className="font-bold text-docker-dark text-sm">
                    {language === 'fr' ? 'Conteneur Docker' : 'Docker Container'}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {language === 'fr'
                    ? 'Un conteneur Docker est une instance exécutable d\'une image. C\'est un processus isolé qui partage le noyau de l\'hôte mais possède son propre système de fichiers, réseau et espace de processus. On peut créer plusieurs conteneurs à partir d\'une même image.'
                    : 'A Docker container is an executable instance of an image. It is an isolated process that shares the host kernel but has its own filesystem, network, and process space. Multiple containers can be created from the same image.'}
                </p>
              </div>
            </div>

            <h3 id="container-lifecycle" className="text-lg font-bold text-docker-dark mb-3">
              {d.containerLifecycle.title[language]}
            </h3>
            <p className="text-gray-700 text-sm mb-4">{d.containerLifecycle.intro[language]}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
              {d.containerLifecycle.states.map((state, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-xl p-3 shadow-sm">
                  <p className="font-bold text-docker-blue text-xs mb-1">{state.name[language]}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{state.desc[language]}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-xs italic">{d.containerLifecycle.commands[language]}</p>

            <AlertBox type="warning">
              <p>{language === 'fr' ? 'Ne confondez pas image et conteneur. L\'image est le plan (immuable), le conteneur est l\'instance (modifiable).' : 'Do not confuse image and container. The image is the blueprint (immutable), the container is the instance (mutable).'}</p>
            </AlertBox>
          </SectionWrapper>

          {/* ===================== COMMANDS ===================== */}
          <section id="commands">
            <SectionWrapper id="docker-commands">
              <SectionHeader
                icon={Terminal}
                title={language === 'fr' ? 'Commandes Docker avancées' : 'Advanced Docker Commands'}
                subtitle={language === 'fr'
                  ? 'Toutes les commandes Docker essentielles, classées par catégorie, avec des exemples et des explications détaillées.'
                  : 'All essential Docker commands, organized by category, with examples and detailed explanations.'}
              />
              <div className="space-y-3">
                {commandsData.map((category, i) => {
                  const cmdId = i === 0 ? 'cmd-basic' : i === 1 ? 'cmd-images' : i === 2 ? 'cmd-containers' : i === 4 ? 'cmd-ports' : undefined;
                  return cmdId ? (
                    <div key={i} id={cmdId}>
                      <CommandSection category={category} language={language} defaultOpen={i === 0} />
                    </div>
                  ) : (
                    <CommandSection key={i} category={category} language={language} defaultOpen={i === 0} />
                  );
                })}
              </div>
            </SectionWrapper>
          </section>

          {/* ===================== DOCKERFILE ===================== */}
          <section id="dockerfile">
            <SectionWrapper id="dockerfile-advanced" alternate>
              <SectionHeader
                icon={FileCode}
                title={d.dockerfileTutorial.title[language]}
                subtitle={d.dockerfileTutorial.intro[language]}
              />

              <div id="dockerfile-syntax" className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-8">
                <table className="w-full text-sm">
                  <thead className="bg-docker-dark text-white">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold w-32">
                        {language === 'fr' ? 'Instruction' : 'Instruction'}
                      </th>
                      <th className="px-4 py-3 text-left font-semibold">
                        {language === 'fr' ? 'Description' : 'Description'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {d.dockerfileTutorial.syntax.map((row, i) => (
                      <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                        <td className="px-4 py-3">
                          <code className="bg-docker-blue/10 text-docker-blue font-mono text-xs px-2 py-1 rounded font-bold">
                            {row.instruction}
                          </code>
                        </td>
                        <td className="px-4 py-3 text-gray-600 text-sm">{row.desc[language]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold text-docker-dark mb-4">
                {language === 'fr' ? 'Exemple : Dockerfile pour une Application Node.js' : 'Example: Dockerfile for a Node.js Application'}
              </h3>
              <CodeBlock code={d.dockerfileTutorial.example} language="dockerfile" showLineNumbers />

              <h3 className="text-xl font-bold text-docker-dark mt-6 mb-4">
                {language === 'fr' ? 'Explication ligne par ligne' : 'Line-by-line explanation'}
              </h3>
              <div className="space-y-3 mb-6">
                {d.dockerfileTutorial.explanation.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm"
                  >
                    <code className="text-xs bg-docker-dark text-docker-blue font-mono px-2 py-1 rounded h-fit shrink-0 whitespace-nowrap">
                      {exp.line.split(' ')[0]}
                    </code>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {language === 'fr' ? exp.fr : exp.en}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Advanced Dockerfile concepts */}
              <div className="grid md:grid-cols-2 gap-5 mt-8 mb-6">
                <div id="docker-cache" className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-bold text-docker-dark flex items-center gap-2 mb-3">
                    <FileJson size={16} className="text-docker-blue" />
                    {language === 'fr' ? 'Build context et cache' : 'Build context and cache'}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-2">
                    {language === 'fr'
                      ? 'Le contexte de build est le dossier envoyé au daemon Docker. Chaque instruction crée une couche mise en cache. Docker réutilise les couches tant qu\'elles n\'ont pas changé. L\'ordre des instructions est crucial pour optimiser le cache.'
                      : 'The build context is the folder sent to the Docker daemon. Each instruction creates a cached layer. Docker reuses layers as long as they haven\'t changed. Instruction order is crucial for cache optimization.'}
                  </p>
                  <AlertBox type="info">
                    <p>{language === 'fr' ? 'Chaque instruction Dockerfile crée une couche (layer).' : 'Each Dockerfile instruction creates a layer.'}</p>
                  </AlertBox>
                </div>
                <div id="multi-stage-build" className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-bold text-docker-dark flex items-center gap-2 mb-3">
                    <MonitorPlay size={16} className="text-docker-blue" />
                    {language === 'fr' ? 'Multi-stage build' : 'Multi-stage build'}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-2">
                    {language === 'fr'
                      ? 'Le multi-stage build permet d\'utiliser plusieurs instructions FROM dans le même Dockerfile. Chaque FROM commence une nouvelle étape. Seuls les artefacts nécessaires sont copiés dans l\'étape finale, réduisant considérablement la taille de l\'image.'
                      : 'Multi-stage build allows using multiple FROM instructions in the same Dockerfile. Each FROM starts a new stage. Only necessary artifacts are copied to the final stage, significantly reducing image size.'}
                  </p>
                  <CodeBlock code={`FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
RUN npm ci --only=production
EXPOSE 3000
CMD ["node", "dist/index.js"]`} language="dockerfile" showLineNumbers />
                </div>
              </div>

              <div id="dockerignore" className="flex flex-col gap-4 mb-6">
                <AlertBox type="tip">
                  <p>{language === 'fr' ? 'Utilisez .dockerignore pour réduire le contexte de build et accélérer les constructions.' : 'Use .dockerignore to reduce the build context and speed up builds.'}</p>
                </AlertBox>
                <AlertBox type="warning">
                  <p>{language === 'fr' ? 'Ne copiez pas node_modules dans l\'image. Utilisez .dockerignore pour l\'exclure.' : 'Do not copy node_modules into the image. Use .dockerignore to exclude it.'}</p>
                </AlertBox>
                <AlertBox type="info">
                  <p>{language === 'fr' ? 'Chaque instruction Dockerfile crée une couche. Combinez les RUN avec && pour réduire le nombre de couches.' : 'Each Dockerfile instruction creates a layer. Combine RUN commands with && to reduce layer count.'}</p>
                </AlertBox>
                <AlertBox type="tip">
                  <p>{language === 'fr' ? 'Préférez les petites images officielles (alpine, slim) quand c\'est possible pour des images plus légères.' : 'Prefer small official base images (alpine, slim) when possible for lighter images.'}</p>
                </AlertBox>
              </div>
            </SectionWrapper>
          </section>

          {/* ===================== DOCKER COMPOSE ===================== */}
          <section id="compose">
            <SectionWrapper id="compose-advanced">
              <SectionHeader
                icon={PackageOpen}
                title={d.composeTutorial.title[language]}
                subtitle={d.composeTutorial.intro[language]}
              />

              <div id="compose-services" className="mb-6 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                <h3 className="font-bold text-docker-dark mb-2">{d.composeTutorial.whyUseTitle[language]}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{d.composeTutorial.whyUseText[language]}</p>
              </div>

              <h3 className="text-xl font-bold text-docker-dark mb-4">
                {language === 'fr' ? 'Exemple : Application Node.js + MongoDB' : 'Example: Node.js + MongoDB Application'}
              </h3>
              <CodeBlock code={d.composeTutorial.example} language="yaml" showLineNumbers />

              <h3 className="text-xl font-bold text-docker-dark mt-6 mb-4">
                {language === 'fr' ? 'Explication ligne par ligne' : 'Line-by-line explanation'}
              </h3>
              <div className="space-y-3 mb-6">
                {d.composeTutorial.explanation.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm"
                  >
                    <code className="text-xs bg-docker-dark text-docker-blue font-mono px-2 py-1 rounded h-fit shrink-0 whitespace-nowrap">
                      {exp.line.split(':')[0].trim()}
                    </code>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {language === 'fr' ? exp.fr : exp.en}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Advanced Compose concepts */}
              <div className="grid md:grid-cols-2 gap-5 mb-6">
                <div id="compose-volumes" className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-bold text-docker-dark text-sm mb-2">
                    {language === 'fr' ? 'Services, réseaux et volumes' : 'Services, networks and volumes'}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-3">
                    {language === 'fr'
                      ? 'Compose permet de définir des réseaux personnalisés pour isoler les services, et des volumes pour persister les données. Chaque service peut avoir sa propre configuration réseau.'
                      : 'Compose allows defining custom networks to isolate services, and volumes to persist data. Each service can have its own network configuration.'}
                  </p>
                  <CodeBlock code={`services:
  app:
    networks:
      - backend
  mongo:
    networks:
      - backend

volumes:
  mongo_data:

networks:
  backend:`} language="yaml" />
                </div>
                <div id="compose-healthcheck" className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-bold text-docker-dark text-sm mb-2">
                    {language === 'fr' ? 'healthcheck et profiles' : 'healthcheck and profiles'}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-3">
                    {language === 'fr'
                      ? 'healthcheck vérifie que le service est prêt. profiles permet de démarrer sélectivement certains services. depends_on avec condition attend le service avant de démarrer.'
                      : 'healthcheck verifies the service is ready. profiles lets you selectively start services. depends_on with condition waits for the service before starting.'}
                  </p>
                  <CodeBlock code={`services:
  app:
    depends_on:
      mongo:
        condition: service_started
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000"]
      interval: 30s
      timeout: 10s
      retries: 3

  mongo:
    image: mongo:7
    profiles: ["db", "full"]`} language="yaml" />
                </div>
              </div>

              <div className="space-y-3">
                <AlertBox type="warning">
                  <p>{language === 'fr' ? 'depends_on ne garantit pas que la base de données est prête. Utilisez healthcheck pour vérifier la disponibilité.' : 'depends_on does not always mean the database is ready. Use healthcheck to verify availability.'}</p>
                </AlertBox>
                <AlertBox type="tip">
                  <p>{language === 'fr' ? 'Utilisez les noms de service pour la communication entre conteneurs. Docker Compose configure automatiquement le DNS.' : 'Use service names for container communication. Docker Compose automatically configures DNS.'}</p>
                </AlertBox>
                <AlertBox type="info">
                  <p>{language === 'fr' ? 'Compose crée un réseau par défaut si aucun réseau personnalisé n\'est défini.' : 'Compose creates a default network if no custom network is defined.'}</p>
                </AlertBox>
                <AlertBox type="danger">
                  <p>{language === 'fr' ? 'Ne supprimez pas les volumes Docker si vous voulez conserver les données MongoDB.' : 'Do not remove Docker volumes if you want to keep MongoDB data.'}</p>
                </AlertBox>
              </div>
            </SectionWrapper>
          </section>

          {/* ===================== VOLUMES AND NETWORKS ===================== */}
          <section id="volumes">
            <SectionWrapper id="cmd-volumes" alternate>
              <SectionHeading
                icon="volume"
                title={d.volumesDetailed.title[language]}
              />
              <p className="text-gray-700 text-sm mb-4">{d.volumesDetailed.intro[language]}</p>

              <AlertBox type="warning">
                <p>{d.volumesDetailed.why[language]}</p>
              </AlertBox>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {d.volumesDetailed.types.map((t, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                    <h3 className="font-bold text-docker-dark text-sm mb-1.5">{t.name[language]}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{t.desc[language]}</p>
                  </div>
                ))}
              </div>

              <CodeBlock code={d.volumesDetailed.example} language="bash" showLineNumbers />
            </SectionWrapper>
          </section>

          <section id="networks">
            <SectionWrapper id="cmd-networks">
              <SectionHeading
                icon="network"
                title={d.networksDetailed.title[language]}
              />
              <p className="text-gray-700 text-sm mb-4">{d.networksDetailed.intro[language]}</p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {d.networksDetailed.drivers.map((dr, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                    <h3 className="font-bold text-docker-blue text-sm mb-1">{dr.name[language]}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{dr.desc[language]}</p>
                  </div>
                ))}
              </div>

              <AlertBox type="info">
                <p>{d.networksDetailed.dns[language]}</p>
              </AlertBox>
            </SectionWrapper>
          </section>

          {/* ===================== SECURITY ===================== */}
          <section id="security">
            <SectionWrapper id="docker-security" alternate>
              <SectionHeading
                icon="security"
                title={d.dockerSecurity.title[language]}
              />
              <p className="text-gray-700 text-sm mb-6">{d.dockerSecurity.intro[language]}</p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {d.dockerSecurity.principles.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md"
                  >
                    <Shield size={18} className="text-docker-blue mb-2" />
                    <h3 className="font-bold text-docker-dark text-sm mb-1.5">{p.title[language]}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{p.desc[language]}</p>
                  </motion.div>
                ))}
              </div>
            </SectionWrapper>
          </section>

          {/* ===================== OPTIMIZATION ===================== */}
          <SectionWrapper id="image-optimization">
            <SectionHeading
              icon="lightbulb"
              title={d.dockerOptimization.title[language]}
            />
            <p className="text-gray-700 text-sm mb-6">{d.dockerOptimization.intro[language]}</p>

            <div className="grid sm:grid-cols-2 gap-4">
              {d.dockerOptimization.tips.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm"
                >
                  <h3 className="font-bold text-docker-dark text-sm mb-1.5">{t.title[language]}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{t.desc[language]}</p>
                </motion.div>
              ))}
            </div>

            <AlertBox type="danger">
              <p>{language === 'fr' ? 'La commande docker system prune peut supprimer des ressources inutilisées. Vérifiez avant de l\'exécuter.' : 'The docker system prune command can remove unused resources. Check before running it.'}</p>
            </AlertBox>
          </SectionWrapper>

          {/* ===================== DEVOPS CI/CD CLOUD ===================== */}
          <SectionWrapper id="docker-devops" alternate>
            <SectionHeading
              icon="cloud"
              title={d.dockerDevops.title[language]}
            />

            <div className="grid md:grid-cols-3 gap-5 mb-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <RefreshCw size={18} className="text-docker-blue" />
                  <h3 className="font-bold text-docker-dark text-sm">{d.dockerDevops.devops.title[language]}</h3>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">{d.dockerDevops.devops.text[language]}</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Terminal size={18} className="text-docker-blue" />
                  <h3 className="font-bold text-docker-dark text-sm">{d.dockerDevops.cicd.title[language]}</h3>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">{d.dockerDevops.cicd.text[language]}</p>
                <p className="text-gray-500 text-xs mt-2 italic">{d.dockerDevops.cicd.tools[language]}</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <CloudUpload size={18} className="text-docker-blue" />
                  <h3 className="font-bold text-docker-dark text-sm">{d.dockerDevops.cloud.title[language]}</h3>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">{d.dockerDevops.cloud.text[language]}</p>
                <p className="text-gray-500 text-xs mt-2 italic">{d.dockerDevops.cloud.services[language]}</p>
              </div>
            </div>
          </SectionWrapper>

          {/* ===================== EXAMPLES ===================== */}
          <SectionWrapper id="examples">
            <SectionHeader
              icon={Lightbulb}
              title={d.practicalExamples.title[language]}
            />
            <div className="space-y-10">
              {d.practicalExamples.examples.map((ex, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-docker-dark mb-3 flex items-center gap-2">
                    <span className="w-7 h-7 bg-docker-blue text-white rounded-lg flex items-center justify-center text-xs font-bold shrink-0">
                      {i + 1}
                    </span>
                    {ex.title[language]}
                  </h3>
                  {'cmd' in ex && ex.cmd && (
                    <>
                      <p className="text-gray-600 text-sm mb-3">{ex.desc[language]}</p>
                      <CodeBlock code={ex.cmd} language="bash" />
                      {'bullets' in ex && ex.bullets && (
                        <ul className="mt-4 space-y-2">
                          {ex.bullets.map((b, j) => (
                            <li key={j} className="text-sm text-gray-600 flex items-start gap-2">
                              <span className="text-docker-blue mt-0.5">→</span>
                              <span dangerouslySetInnerHTML={{ __html: b[language].replace(/\*\*(.*?)\*\*/g, '<strong class="text-docker-dark">$1</strong>') }} />
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                  {'files' in ex && ex.files && (
                    <>
                      <p className="text-gray-600 text-sm mb-4">{ex.desc[language]}</p>
                      <div className="grid md:grid-cols-3 gap-4 mb-5">
                        {ex.files.map((file: { name: string; content: string }, j: number) => (
                          <div key={j}>
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{file.name}</p>
                            <CodeBlock code={file.content} language={file.name.endsWith('.json') ? 'json' : file.name === 'Dockerfile' ? 'dockerfile' : 'javascript'} />
                          </div>
                        ))}
                      </div>
                      {'steps' in ex && ex.steps && (
                        <div className="space-y-4">
                          {ex.steps.map((step: { title: { fr: string; en: string }; cmd: string; fr: string; en: string }, j: number) => (
                            <div key={j}>
                              <p className="font-semibold text-docker-dark text-sm mb-1">{step.title[language]}</p>
                              <CodeBlock code={step.cmd} language="bash" />
                              <p className="text-xs text-gray-500 mt-1">→ {language === 'fr' ? step.fr : step.en}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </SectionWrapper>

          {/* ===================== CORRECTED LABS ===================== */}
          <section id="labs">
            <SectionWrapper id="corrected-labs" alternate>
              <SectionHeader
                icon={Dumbbell}
                title={language === 'fr' ? 'Labs corrigés' : 'Corrected Labs'}
                subtitle={language === 'fr'
                  ? 'Pratiquez vos nouvelles compétences Docker. Cliquez sur "Voir la correction" pour révéler la solution et l\'explication de chaque exercice.'
                  : 'Practice your new Docker skills. Click "View solution" to reveal the solution and explanation for each exercise.'}
              />
              <div className="grid md:grid-cols-2 gap-5">
                {exercises.map((exercise, i) => {
                  const labId = labIdMap[exercise.id] || `lab-${exercise.id}`;
                  return (
                    <div key={exercise.id} id={labId}>
                      <ExerciseCard
                        exercise={exercise}
                        language={language}
                        index={i}
                      />
                    </div>
                  );
                })}
              </div>
            </SectionWrapper>
          </section>

          {/* ===================== FINAL CHALLENGE ===================== */}
          <section id="challenge">
            <SectionWrapper id="final-challenge">
              <div className="max-w-3xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-10"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl shadow-lg mb-5">
                    <Trophy size={32} className="text-white" />
                  </div>
                  <h2 className="text-3xl font-extrabold text-docker-dark mb-3">{finalChallenge.title[language]}</h2>
                  <p className="text-xl text-docker-blue font-semibold mb-3">{finalChallenge.subtitle[language]}</p>
                  <p className="text-gray-600 leading-relaxed">{finalChallenge.objective[language]}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8"
                >
                  <AlertTriangle size={20} className="text-amber-600 shrink-0" />
                  <p className="text-amber-800 text-sm font-medium">
                    {language === 'fr'
                      ? 'Ce challenge final n\'a pas de correction. Il est conçu pour tester vos compétences en autonomie.'
                      : 'This final challenge has no correction. It is designed to test your skills independently.'}
                  </p>
                </motion.div>

                <div id="challenge-requirements" className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mb-6">
                  <h3 className="font-bold text-docker-dark mb-4 text-lg">
                    {language === 'fr' ? 'Exigences du défi' : 'Challenge requirements'}
                  </h3>
                  <ul className="space-y-3">
                    {finalChallenge.requirements.map((req, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07 }}
                        className="flex items-start gap-3 text-sm text-gray-700"
                      >
                        <span className="w-6 h-6 bg-docker-blue/10 text-docker-blue rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        {req[language]}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div id="challenge-expected-result" className="bg-green-50 border border-green-200 rounded-2xl p-6">
                  <h3 className="font-bold text-green-800 mb-2">
                    {language === 'fr' ? 'Résultat attendu' : 'Expected Result'}
                  </h3>
                  <p className="text-green-700 text-sm leading-relaxed">{finalChallenge.expectedResult[language]}</p>
                </div>
              </div>
            </SectionWrapper>
          </section>

          {/* ===================== CHEAT SHEET ===================== */}
          <SectionWrapper id="cheat-sheet" alternate>
            <SectionHeading
              icon="clipboard"
              title={language === 'fr' ? 'Cheat Sheet Docker' : 'Docker Cheat Sheet'}
              subtitle={language === 'fr'
                ? 'Référence rapide des commandes Docker essentielles'
                : 'Quick reference for essential Docker commands'}
            />

            <div className="grid md:grid-cols-2 gap-5">
              {Object.entries(d.cheatSheet).map(([key, section]) => (
                <div key={key} id={'cheat-' + key} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-bold text-docker-dark text-sm mb-3">{section.title[language]}</h3>
                  <div className="space-y-2">
                    {section.items.map((item, i: number) => (
                      <div key={i} className="flex items-start gap-2 text-xs">
                        <code className="bg-gray-100 text-docker-dark font-mono px-2 py-0.5 rounded shrink-0 text-[11px]">
                          {item.cmd}
                        </code>
                        <span className="text-gray-500 leading-tight">{item.desc[language]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SectionWrapper>

          <Footer />
        </main>
      </div>
    </div>
  );
}
