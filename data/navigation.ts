export interface NavItem {
  id: string;
  href: string;
  title: { fr: string; en: string };
}

export interface NavSection {
  id: string;
  href: string;
  icon: string;
  title: { fr: string; en: string };
  children: NavItem[];
}

export const navigationData: NavSection[] = [
  {
    id: 'introduction',
    href: '#introduction',
    icon: 'container',
    title: { fr: 'Introduction à Docker', en: 'Introduction to Docker' },
    children: [
      { id: 'docker-definition', href: '#docker-definition', title: { fr: 'Définition de Docker', en: 'Docker definition' } },
      { id: 'why-docker-exists', href: '#why-docker-exists', title: { fr: 'Pourquoi Docker existe ?', en: 'Why Docker exists' } },
      { id: 'docker-professional', href: '#docker-professional', title: { fr: 'Docker dans le monde professionnel', en: 'Docker in the professional world' } },
      { id: 'works-on-my-machine', href: '#works-on-my-machine', title: { fr: 'Problème "ça marche sur ma machine"', en: 'The "it works on my machine" problem' } },
    ],
  },
  {
    id: 'history',
    href: '#history',
    icon: 'history',
    title: { fr: 'Histoire et évolution', en: 'History and Evolution' },
    children: [
      { id: 'before-docker', href: '#before-docker', title: { fr: 'Avant Docker', en: 'Before Docker' } },
      { id: 'docker-appearance', href: '#docker-appearance', title: { fr: 'Apparition de Docker', en: "Docker's appearance" } },
    ],
  },
  {
    id: 'architecture',
    href: '#architecture',
    icon: 'dockerEngine',
    title: { fr: 'Architecture Docker', en: 'Docker Architecture' },
    children: [
      { id: 'docker-client', href: '#docker-client', title: { fr: 'Docker Client', en: 'Docker Client' } },
      { id: 'docker-daemon', href: '#docker-daemon', title: { fr: 'Docker Daemon', en: 'Docker Daemon' } },
      { id: 'docker-engine', href: '#docker-engine', title: { fr: 'Docker Engine', en: 'Docker Engine' } },
      { id: 'docker-registry', href: '#docker-registry', title: { fr: 'Docker Registry', en: 'Docker Registry' } },
    ],
  },
  {
    id: 'installation',
    href: '#installation',
    icon: 'download',
    title: { fr: 'Installation de Docker', en: 'Docker Installation' },
    children: [
      { id: 'windows-installation', href: '#windows-installation', title: { fr: 'Windows', en: 'Windows' } },
      { id: 'macos-installation', href: '#macos-installation', title: { fr: 'macOS', en: 'macOS' } },
      { id: 'linux-installation', href: '#linux-installation', title: { fr: 'Linux Ubuntu/Debian', en: 'Linux Ubuntu/Debian' } },
      { id: 'docker-verification', href: '#docker-verification', title: { fr: 'Vérification', en: 'Verification' } },
    ],
  },
  {
    id: 'docker-vs-vm',
    href: '#docker-vs-vm',
    icon: 'vm',
    title: { fr: 'Docker vs Machine virtuelle', en: 'Docker vs Virtual Machine' },
    children: [
      { id: 'vm-architecture', href: '#vm-architecture', title: { fr: 'Architecture VM', en: 'VM architecture' } },
      { id: 'docker-arch-compare', href: '#docker-arch-compare', title: { fr: 'Architecture Docker', en: 'Docker architecture' } },
      { id: 'comparison-table', href: '#comparison-table', title: { fr: 'Tableau comparatif', en: 'Comparison table' } },

    ],
  },
  {
    id: 'migration',
    href: '#migration',
    icon: 'migration',
    title: { fr: 'Migration VM vers Docker', en: 'VM to Docker Migration' },
    children: [
      { id: 'why-migrate', href: '#why-migrate', title: { fr: 'Pourquoi migrer ?', en: 'Why migrate?' } },
      { id: 'traditional-vm-deployment', href: '#traditional-vm-deployment', title: { fr: 'Déploiement traditionnel sur VM', en: 'Traditional VM deployment' } },
      { id: 'vm-limitations', href: '#vm-limitations', title: { fr: 'Limites des VM', en: 'VM limitations' } },
    ],
  },
  {
    id: 'images-containers',
    href: '#images-containers',
    icon: 'image',
    title: { fr: 'Images et conteneurs', en: 'Images and Containers' },
    children: [
      { id: 'docker-image', href: '#docker-image', title: { fr: 'Image Docker', en: 'Docker image' } },
      { id: 'docker-container', href: '#docker-container', title: { fr: 'Conteneur Docker', en: 'Docker container' } },
      { id: 'container-lifecycle', href: '#container-lifecycle', title: { fr: 'Cycle de vie du conteneur', en: 'Container lifecycle' } },
    ],
  },
  {
    id: 'commands',
    href: '#commands',
    icon: 'terminal',
    title: { fr: 'Commandes Docker avancées', en: 'Advanced Docker Commands' },
    children: [
      { id: 'cmd-basic', href: '#cmd-basic', title: { fr: 'Commandes de base', en: 'Basic commands' } },
      { id: 'cmd-images', href: '#cmd-images', title: { fr: 'Images', en: 'Images' } },
      { id: 'cmd-containers', href: '#cmd-containers', title: { fr: 'Conteneurs', en: 'Containers' } },
      { id: 'cmd-ports', href: '#cmd-ports', title: { fr: 'Ports', en: 'Ports' } },
      { id: 'cmd-volumes', href: '#cmd-volumes', title: { fr: 'Volumes', en: 'Volumes' } },
      { id: 'cmd-networks', href: '#cmd-networks', title: { fr: 'Réseaux', en: 'Networks' } },
    ],
  },
  {
    id: 'dockerfile',
    href: '#dockerfile',
    icon: 'dockerfile',
    title: { fr: 'Dockerfile avancé', en: 'Advanced Dockerfile' },
    children: [
      { id: 'dockerfile-syntax', href: '#dockerfile-syntax', title: { fr: 'Syntaxe', en: 'Syntax' } },
      { id: 'docker-cache', href: '#docker-cache', title: { fr: 'Cache Docker', en: 'Docker cache' } },
      { id: 'multi-stage-build', href: '#multi-stage-build', title: { fr: 'Multi-stage build', en: 'Multi-stage build' } },
      { id: 'dockerignore', href: '#dockerignore', title: { fr: '.dockerignore', en: '.dockerignore' } },
    ],
  },
  {
    id: 'compose',
    href: '#compose',
    icon: 'compose',
    title: { fr: 'Docker Compose avancé', en: 'Advanced Docker Compose' },
    children: [
      { id: 'compose-services', href: '#compose-services', title: { fr: 'Services et réseaux', en: 'Services and networks' } },
      { id: 'compose-volumes', href: '#compose-volumes', title: { fr: 'Volumes', en: 'Volumes' } },

      { id: 'compose-healthcheck', href: '#compose-healthcheck', title: { fr: 'Healthcheck', en: 'Healthcheck' } },
    ],
  },
  {
    id: 'labs',
    href: '#labs',
    icon: 'lab',
    title: { fr: 'Labs corrigés', en: 'Corrected Labs' },
    children: [
      { id: 'lab-hello-world', href: '#lab-hello-world', title: { fr: 'Lab 1 : Hello World', en: 'Lab 1: Hello World' } },
      { id: 'lab-nginx', href: '#lab-nginx', title: { fr: 'Lab 2 : Nginx', en: 'Lab 2: Nginx' } },
      { id: 'lab-mongodb', href: '#lab-mongodb', title: { fr: 'Lab 3 : MongoDB', en: 'Lab 3: MongoDB' } },
      { id: 'lab-dockerfile', href: '#lab-dockerfile', title: { fr: 'Lab 4 : Dockerfile', en: 'Lab 4: Dockerfile' } },
      { id: 'lab-compose', href: '#lab-compose', title: { fr: 'Lab 5 : Docker Compose', en: 'Lab 5: Docker Compose' } },
      { id: 'lab-volumes', href: '#lab-volumes', title: { fr: 'Lab 6 : Volumes', en: 'Lab 6: Volumes' } },
      { id: 'lab-networks', href: '#lab-networks', title: { fr: 'Lab 7 : Réseaux', en: 'Lab 7: Networks' } },
      { id: 'lab-vm-migration', href: '#lab-vm-migration', title: { fr: 'Lab 8 : Migration VM vers Docker', en: 'Lab 8: VM to Docker migration' } },
    ],
  },
  {
    id: 'challenge',
    href: '#challenge',
    icon: 'trophy',
    title: { fr: 'Challenge final', en: 'Final Challenge' },
    children: [
      { id: 'challenge-requirements', href: '#challenge-requirements', title: { fr: 'Exigences', en: 'Requirements' } },
      { id: 'challenge-expected-result', href: '#challenge-expected-result', title: { fr: 'Résultat attendu', en: 'Expected result' } },
    ],
  },
  {
    id: 'cheat-sheet',
    href: '#cheat-sheet',
    icon: 'clipboard',
    title: { fr: 'Cheat Sheet Docker', en: 'Docker Cheat Sheet' },
    children: [
      { id: 'cheat-essential', href: '#cheat-essential', title: { fr: 'Commandes essentielles', en: 'Essential commands' } },
      { id: 'cheat-dockerfile', href: '#cheat-dockerfile', title: { fr: 'Dockerfile', en: 'Dockerfile' } },
      { id: 'cheat-compose', href: '#cheat-compose', title: { fr: 'Compose', en: 'Compose' } },
    ],
  },
];

export function getAllNavIds(): string[] {
  const ids: string[] = [];
  for (const section of navigationData) {
    ids.push(section.id);
    for (const child of section.children) {
      ids.push(child.id);
    }
  }
  return ids;
}

export function getChildToParentMap(): Record<string, string> {
  const map: Record<string, string> = {};
  for (const section of navigationData) {
    for (const child of section.children) {
      map[child.id] = section.id;
    }
  }
  return map;
}
