export interface ContentSection {
  title: { fr: string; en: string };
  description?: { fr: string; en: string };
  content?: { fr: string; en: string };
}

export const contentData = {
  hero: {
    title: {
      fr: "Maîtrisez Docker de Zéro à Héros",
      en: "Master Docker from Zero to Hero"
    },
    subtitle: {
      fr: "Apprenez Docker avec des cas réels : images, conteneurs, Dockerfile, Compose, volumes, réseaux, migration VM et labs corrigés.",
      en: "Learn Docker with real use cases: images, containers, Dockerfile, Compose, volumes, networks, VM migration, and corrected labs."
    },
    startLearningBtn: {
      fr: "Commencer le cours",
      en: "Start the Course"
    },
    viewCommandsBtn: {
      fr: "Explorer les commandes",
      en: "Explore Commands"
    },
    exercisesBtn: {
      fr: "Pratiquer les labs",
      en: "Practice Labs"
    },
    whyImportantTitle: {
      fr: "Pourquoi Docker est-il incontournable ?",
      en: "Why is Docker essential?"
    },
    whyImportantDesc: {
      fr: "Docker a révolutionné le développement logiciel en standardisant la manière dont les applications sont créées, empaquetées et déployées dans le cloud.",
      en: "Docker revolutionized software development by standardizing how applications are built, packaged, and deployed in the cloud."
    },
    cards: [
      {
        title: { fr: "Déploiement Rapide", en: "Fast Deployment" },
        desc: {
          fr: "Lancez des conteneurs en quelques millisecondes grâce à l'absence de système d'exploitation invité.",
          en: "Launch containers in milliseconds thanks to the absence of a guest operating system."
        }
      },
      {
        title: { fr: "Portabilité Totale", en: "Total Portability" },
        desc: {
          fr: "Écrivez une seule fois, exécutez n'importe où : sur votre machine, en staging ou dans le cloud sans modification.",
          en: "Write once, run anywhere: on your local machine, in staging, or in the cloud without modification."
        }
      },
      {
        title: { fr: "Isolation Parfaite", en: "Perfect Isolation" },
        desc: {
          fr: "Chaque conteneur tourne dans son propre espace sécurisé, évitant les conflits de dépendances et de versions.",
          en: "Each container runs in its own secure space, preventing dependency and version conflicts."
        }
      },
      {
        title: { fr: "Évolutivité Aisée", en: "Easy Scalability" },
        desc: {
          fr: "Multipliez ou réduisez les instances applicatives à la volée pour répondre aux variations de charge.",
          en: "Multiply or reduce application instances on the fly to meet load variations."
        }
      },
      {
        title: { fr: "Pratique DevOps", en: "DevOps Practice" },
        desc: {
          fr: "Facilite l'intégration et le déploiement continus (CI/CD) en garantissant la cohérence des environnements.",
          en: "Facilitates Continuous Integration and Deployment (CI/CD) by ensuring environment consistency."
        }
      },
      {
        title: { fr: "Optimisé Cloud", en: "Cloud Optimized" },
        desc: {
          fr: "Fondation des architectures microservices modernes et parfaitement compatible avec Kubernetes et le cloud public.",
          en: "Foundation of modern microservices architectures and fully compatible with Kubernetes and public clouds."
        }
      }
    ]
  },

  whatIsDocker: {
    title: { fr: "1. Qu'est-ce que Docker ?", en: "1. What is Docker?" },
    definition: {
      fr: "Docker est une plateforme open-source qui automatise le déploiement d'applications dans des conteneurs logiciels légers et portables. Il permet aux développeurs d'empaqueter une application avec toutes ses dépendances (bibliothèques, runtime, variables système) dans une seule unité logique appelée image.",
      en: "Docker is an open-source platform that automates the deployment of applications inside lightweight, portable software containers. It allows developers to package an application with all its dependencies (libraries, runtime, system variables) into a single logical unit called an image."
    },
    problemSolved: {
      title: { fr: "Quel problème résout Docker ?", en: "What problem does Docker solve?" },
      text: {
        fr: "Le problème principal résolu par Docker est le fameux syndrome du « Ça fonctionne sur ma machine » (It works on my machine). Avant Docker, déplacer une application d'un ordinateur de développement vers un serveur de production provoquait souvent des erreurs à cause de différences de versions d'OS, de bibliothèques ou de configurations système. Docker garantit que l'application s'exécutera exactement de la même manière partout.",
        en: "The primary problem Docker solves is the infamous 'It works on my machine' syndrome. Before Docker, moving an application from a development computer to a production server often caused errors due to differences in OS versions, libraries, or system configurations. Docker guarantees that the application runs exactly the same way everywhere."
      }
    },
    keyConcepts: {
      title: { fr: "Concepts Clés de Docker", en: "Docker Key Concepts" },
      container: {
        name: { fr: "Conteneur", en: "Container" },
        desc: {
          fr: "Une instance active et isolée d'une image Docker. C'est l'équivalent d'un processus système encapsulé qui s'exécute de façon autonome.",
          en: "An active, isolated instance of a Docker image. It is the equivalent of an encapsulated system process running autonomously."
        }
      },
      image: {
        name: { fr: "Image", en: "Image" },
        desc: {
          fr: "Un modèle en lecture seule contenant le code, le runtime, les dépendances et la configuration nécessaires pour lancer un conteneur. C'est le plan de construction.",
          en: "A read-only template containing the code, runtime, dependencies, and configuration required to launch a container. It is the blueprint."
        }
      },
      engine: {
        name: { fr: "Docker Engine", en: "Docker Engine" },
        desc: {
          fr: "Le cœur de Docker. C'est l'application client-serveur (composée du daemon dockerd et de la CLI) installée sur la machine hôte pour créer et gérer les conteneurs.",
          en: "The heart of Docker. It is the client-server application (composed of the dockerd daemon and the CLI) installed on the host machine to create and manage containers."
        }
      },
      hub: {
        name: { fr: "Docker Hub", en: "Docker Hub" },
        desc: {
          fr: "Le registre officiel hébergé sur le cloud où l'on peut partager, stocker et télécharger des images Docker préconfigurées (comme Node.js, Python, Nginx, PostgreSQL).",
          en: "The official cloud-hosted registry where developers share, store, and download preconfigured Docker images (like Node.js, Python, Nginx, PostgreSQL)."
        }
      },
      dockerfile: {
        name: { fr: "Dockerfile", en: "Dockerfile" },
        desc: {
          fr: "Un simple fichier texte contenant une liste d'instructions séquentielles exécutées par Docker pour construire automatiquement une image personnalisée.",
          en: "A simple text file containing a list of sequential instructions executed by Docker to automatically build a custom image."
        }
      },
      compose: {
        name: { fr: "Docker Compose", en: "Docker Compose" },
        desc: {
          fr: "Un outil pour définir et lancer des applications multi-conteneurs (par exemple, une API Node.js et sa base de données MongoDB) à l'aide d'un seul fichier de configuration YAML.",
          en: "A tool for defining and running multi-container applications (for example, a Node.js API and its MongoDB database) using a single YAML configuration file."
        }
      }
    },
    differences: {
      imageVsContainer: {
        title: { fr: "Différence entre Image et Conteneur", en: "Difference between Image and Container" },
        text: {
          fr: "Pour faire une analogie avec la programmation orientée objet : l'image est la Classe (le concept en lecture seule), tandis que le conteneur est l'Objet (l'instance vivante et modifiable en mémoire). On peut lancer des dizaines de conteneurs identiques à partir d'une seule et même image.",
          en: "To draw an analogy with object-oriented programming: the image is the Class (the read-only template), while the container is the Object (the live, modifiable instance in memory). You can run dozens of identical containers from a single image."
        }
      },
      dockerVsTraditional: {
        title: { fr: "Docker vs Déploiement Traditionnel", en: "Docker vs Traditional Deployment" },
        text: {
          fr: "Dans un déploiement traditionnel, vous devez installer manuellement chaque runtime (ex: Java, Python) sur le système d'exploitation du serveur de production, avec le risque que des applications différentes partagent les mêmes bibliothèques et créent des conflits. Avec Docker, chaque application embarque son propre runtime et ses dépendances de manière isolée.",
          en: "In traditional deployment, you must manually install every runtime (e.g. Java, Python) onto the production server's operating system, risking conflicts if different applications share the same libraries. With Docker, each application embeds its own runtime and dependencies in an isolated space."
        }
      }
    }
  },

  history: {
    title: { fr: "2. Histoire et Apparition de Docker", en: "2. History and Rise of Docker" },
    text: {
      fr: "Docker a été créé par Solomon Hykes et lancé en open-source en mars 2013, à l'époque où il travaillait chez dotCloud (une entreprise de plateforme en tant que service - PaaS). Le projet a immédiatement suscité un engouement massif au sein de la communauté informatique.",
      en: "Docker was created by Solomon Hykes and released as open-source in March 2013, while he was working at dotCloud (a Platform-as-a-Service - PaaS provider). The project immediately generated massive excitement within the IT community."
    },
    whyAppeared: {
      title: { fr: "Pourquoi Docker est-il apparu ?", en: "Why did Docker appear?" },
      text: {
        fr: "Avant Docker, la conteneurisation existait déjà sur Linux (notamment via LXC - LinuX Containers), mais son utilisation était complexe, nécessitait une expertise système avancée, et n'était pas standardisée. De plus, les machines virtuelles (VM) commençaient à montrer leurs limites en termes de lenteur et de surconsommation de ressources pour les déploiements à grande échelle. Docker est apparu pour démocratiser la conteneurisation en y ajoutant une interface en ligne de commande ultra-simple (CLI), un système de couches d'images réutilisables, et une plateforme centrale de partage (Docker Hub).",
        en: "Before Docker, containerization already existed on Linux (notably via LXC - LinuX Containers), but its usage was complex, required advanced system engineering skills, and was not standardized. Additionally, virtual machines (VMs) were showing their limits in terms of boot times and resource overhead for large-scale deployments. Docker appeared to democratize containerization by providing an ultra-simple command-line interface (CLI), a system of reusable image layers, and a central sharing hub (Docker Hub)."
      }
    },
    evolution: {
      title: { fr: "L'évolution des VMs vers les conteneurs", en: "The evolution from VMs to containers" },
      text: {
        fr: "Dans les années 2000, la virtualisation par VM a permis de découper un serveur physique en plusieurs serveurs virtuels. Cependant, chaque VM devait exécuter son propre système d'exploitation complet (Guest OS), ce qui consommait beaucoup de RAM et de CPU. Les conteneurs ont introduit une approche révolutionnaire : partager le noyau (kernel) du système d'exploitation hôte tout en isolant complètement les processus applicatifs. Cela a permis d'exécuter des centaines de conteneurs sur une machine là où on ne pouvait faire tourner que quelques VMs.",
        en: "In the 2000s, VM virtualization enabled splitting a physical server into several virtual servers. However, each VM had to run its own complete guest operating system (Guest OS), consuming lots of RAM and CPU. Containers introduced a revolutionary approach: sharing the host operating system's kernel while completely isolating application processes. This made it possible to run hundreds of containers on a machine where only a few VMs could fit."
      }
    },
    popularity: {
      title: { fr: "Pourquoi Docker est devenu si populaire ?", en: "Why did Docker become so popular?" },
      text: {
        fr: "Docker a standardisé l'empaquetage des applications. En fournissant une solution simple pour empaqueter, distribuer et exécuter du code de manière identique sur n'importe quel OS hôte, il est devenu le standard de fait de l'industrie. Son adoption a coïncidé avec l'essor du mouvement DevOps et de l'architecture microservices, pour lesquels la vélocité et l'isolation sont cruciales.",
        en: "Docker standardized application packaging. By providing a simple solution to package, distribute, and execute code identically across any host OS, it became the industry standard. Its adoption coincided with the rise of the DevOps movement and microservices architecture, where velocity and isolation are crucial."
      }
    }
  },

  dockerVsVm: {
    title: { fr: "3. Docker vs Machine Virtuelle", en: "3. Docker vs Virtual Machine" },
    vmDefinition: {
      title: { fr: "Qu'est-ce qu'une Machine Virtuelle ?", en: "What is a Virtual Machine?" },
      text: {
        fr: "Une machine virtuelle (VM) est une émulation logicielle d'un système informatique physique complet. Elle s'exécute par-dessus un outil appelé Hyperviseur (comme VMware, VirtualBox, Hyper-V) et embarque son propre système d'exploitation complet (l'OS invité), ses pilotes et ses applications. Cela engendre une isolation forte mais très lourde en ressources.",
        en: "A virtual machine (VM) is a software emulation of a complete physical computer system. It runs on top of a tool called a Hypervisor (like VMware, VirtualBox, Hyper-V) and embeds its own complete operating system (guest OS), drivers, and applications. This creates strong isolation but is very resource-heavy."
      }
    },
    containerDefinition: {
      title: { fr: "Qu'est-ce qu'un Conteneur Docker ?", en: "What is a Docker Container?" },
      text: {
        fr: "Un conteneur Docker est un environnement d'exécution isolé qui partage le noyau (kernel) de la machine hôte. Au lieu de virtualiser le matériel sous-jacent, Docker virtualise le système d'exploitation au niveau des processus. Par conséquent, les conteneurs sont extrêmement légers, démarrent presque instantanément et utilisent une fraction minime des ressources système par rapport à une VM.",
        en: "A Docker container is an isolated runtime environment that shares the kernel of the host machine. Instead of virtualizing the underlying hardware, Docker virtualizes the operating system at the process level. Consequently, containers are extremely lightweight, start almost instantly, and use a minimal fraction of system resources compared to a VM."
      }
    },
    comparisonMetrics: {
      title: { fr: "Comparatif des performances et ressources", en: "Performance and resource comparison" },
      points: [
        {
          name: { fr: "Temps de démarrage", en: "Startup time" },
          fr: "Quelques millisecondes à secondes pour les conteneurs, contre plusieurs minutes pour le démarrage complet d'une VM.",
          en: "Milliseconds to seconds for containers, compared to several minutes for a VM boot cycle."
        },
        {
          name: { fr: "Utilisation des ressources", en: "Resource usage" },
          fr: "Les conteneurs ne consomment que ce dont l'application a réellement besoin en CPU et RAM. Les VMs pré-allouent de larges pans de mémoire dès leur démarrage.",
          en: "Containers only consume what the application actually needs in CPU and RAM. VMs pre-allocate large blocks of memory at startup."
        },
        {
          name: { fr: "Taille des images", en: "Image size" },
          fr: "Quelques mégaoctets (Mo) pour les conteneurs Docker légers, contre plusieurs gigaoctets (Go) pour les disques virtuels de VM.",
          en: "A few megabytes (MB) for lightweight Docker containers, compared to several gigabytes (GB) for VM virtual disks."
        },
        {
          name: { fr: "Isolation", en: "Isolation" },
          fr: "Isolation au niveau du noyau (namespaces/cgroups) pour Docker (très bonne). Isolation matérielle complète pour les VMs (maximale).",
          en: "Kernel-level isolation (namespaces/cgroups) for Docker (very good). Complete hardware isolation for VMs (maximal)."
        }
      ]
    },
    table: {
      columns: {
        criteria: { fr: "Critère", en: "Criteria" },
        vm: { fr: "Machine Virtuelle", en: "Virtual Machine" },
        container: { fr: "Conteneur Docker", en: "Docker Container" }
      },
      rows: [
        {
          criteria: { fr: "Système d'Exploitation", en: "Operating system" },
          vm: { fr: "OS complet dédié (OS Invité / Guest OS)", en: "Dedicated full OS (Guest OS)" },
          container: { fr: "Partagé avec l'hôte (Pas d'OS invité)", en: "Shared with the host (No guest OS)" }
        },
        {
          criteria: { fr: "Noyau (Kernel)", en: "Kernel" },
          vm: { fr: "Noyau propre indépendant de l'hôte", en: "Own kernel independent of the host" },
          container: { fr: "Partage le noyau de la machine hôte", en: "Shares the host machine's kernel" }
        },
        {
          criteria: { fr: "Temps de Démarrage", en: "Startup time" },
          vm: { fr: "Minutes (Boot de l'OS complet)", en: "Minutes (Complete OS boot)" },
          container: { fr: "Millisecondes à quelques secondes", en: "Milliseconds to a few seconds" }
        },
        {
          criteria: { fr: "Utilisation des ressources", en: "Resource usage" },
          vm: { fr: "Élevée (Mémoire et CPU pré-alloués)", en: "High (Pre-allocated RAM and CPU)" },
          container: { fr: "Faible (Partage dynamique et à la demande)", en: "Low (Dynamic and on-demand sharing)" }
        },
        {
          criteria: { fr: "Niveau d'Isolation", en: "Isolation level" },
          vm: { fr: "Maximale (Isolation matérielle via hyperviseur)", en: "Maximal (Hardware isolation via hypervisor)" },
          container: { fr: "Élevée (Isolation logique via Namespaces/cgroups)", en: "High (Logical isolation via Namespaces/cgroups)" }
        },
        {
          criteria: { fr: "Portabilité", en: "Portability" },
          vm: { fr: "Moyenne (Dépend de l'hyperviseur et des formats)", en: "Medium (Depends on hypervisor and disk formats)" },
          container: { fr: "Totale (S'exécute partout où Docker est installé)", en: "Total (Runs anywhere Docker is installed)" }
        },
        {
          criteria: { fr: "Performances", en: "Performance" },
          vm: { fr: "Légèrement dégradées (Couche d'émulation matérielle)", en: "Slightly degraded (Hardware emulation layer)" },
          container: { fr: "Proches du natif (Pas de virtualisation matérielle)", en: "Near-native (No hardware virtualization)" }
        },
        {
          criteria: { fr: "Taille de l'Image/Disque", en: "Image/Disk size" },
          vm: { fr: "Généralement 10 Go à 50 Go", en: "Typically 10 GB to 50 GB" },
          container: { fr: "Quelques Mo à 1 Go (Images optimisées)", en: "A few MB to 1 GB (Optimized images)" }
        },
        {
          criteria: { fr: "Meilleur Cas d'Usage", en: "Best use case" },
          vm: { fr: "Faire tourner des OS différents (ex: Windows sur Linux)", en: "Running different OS types (e.g. Windows on Linux)" },
          container: { fr: "Déployer des microservices et des apps web modernes", en: "Deploying microservices and modern web apps" }
        }
      ]
    }
  },

  whyDockerIsImportant: {
    title: { fr: "4. Pourquoi Docker est-il important ?", en: "4. Why is Docker important?" },
    points: [
      {
        title: { fr: "Environnement de développement cohérent", en: "Consistent development environment" },
        text: {
          fr: "Avec Docker, l'environnement de développement local est identique à l'environnement de production. Plus de surprises désagréables dues à des configurations différentes entre serveurs.",
          en: "With Docker, the local development environment is identical to production. No more unpleasant surprises caused by configuration differences between servers."
        }
      },
      {
        title: { fr: "Résout le problème « Ça marche sur ma machine »", en: "Solves the 'It works on my machine' problem" },
        text: {
          fr: "L'application s'exécute dans un conteneur standardisé qui isole toutes les dépendances. Si le conteneur tourne chez le développeur, il tournera exactement de la même manière en production.",
          en: "The application runs in a standardized container that isolates all dependencies. If the container runs on the developer's laptop, it will run exactly the same way in production."
        }
      },
      {
        title: { fr: "Déploiement et mise à l'échelle plus rapides", en: "Faster deployment and scalability" },
        text: {
          fr: "Le démarrage instantané permet de scaler (mettre à l'échelle) horizontalement les serveurs en quelques secondes. Idéal pour encaisser des hausses de trafic soudaines.",
          en: "Instant startup allows scaling servers horizontally in seconds. Ideal for handling sudden spikes in traffic."
        }
      },
      {
        title: { fr: "Intégration et Déploiement Continus (CI/CD)", en: "Continuous Integration & Deployment (CI/CD)" },
        text: {
          fr: "Les pipelines CI/CD construisent des images Docker qui sont testées, poussées vers un registre, puis déployées directement sans aucune configuration manuelle sur les serveurs.",
          en: "CI/CD pipelines build Docker images that are tested, pushed to a registry, and then deployed directly without any manual configuration on servers."
        }
      },
      {
        title: { fr: "Adapté aux architectures microservices", en: "Tailored for microservices architectures" },
        text: {
          fr: "Chaque microservice (authentification, panier, paiement) peut être placé dans son propre conteneur avec sa propre version de runtime sans interférer avec les autres.",
          en: "Each microservice (auth, cart, payment) can be placed in its own container with its own runtime version without interfering with others."
        }
      },
      {
        title: { fr: "Déploiement cloud et portabilité multi-cloud", en: "Cloud deployment and multi-cloud portability" },
        text: {
          fr: "Toutes les grandes plateformes cloud (AWS, Azure, GCP) supportent Docker de manière native. Migrer un service d'un fournisseur cloud à un autre est un jeu d'enfant.",
          en: "All major cloud platforms (AWS, Azure, GCP) support Docker natively. Migrating a service from one cloud provider to another is extremely easy."
        }
      }
    ]
  },

  domains: {
    title: { fr: "5. Domaines et secteurs IT où Docker est utilisé", en: "5. IT Fields where Docker is used" },
    intro: {
      fr: "Aujourd'hui, Docker est omniprésent dans l'écosystème technologique. Voici un panorama des principaux domaines IT et comment Docker y est appliqué.",
      en: "Today, Docker is omnipresent across the technology ecosystem. Here is an overview of the main IT domains and how Docker is applied."
    },
    list: [
      {
        field: { fr: "Développement Web & Backend", en: "Web & Backend Development" },
        why: {
          fr: "Pour isoler les serveurs web, les bases de données et les caches sans encombrer la machine locale.",
          en: "To isolate web servers, databases, and caches without cluttering the local machine."
        },
        useCase: {
          fr: "Lancer localement une application avec une API Node.js, une base de données PostgreSQL et un cache Redis en une seule commande.",
          en: "Launch an application locally with a Node.js API, a PostgreSQL database, and a Redis cache in a single command."
        },
        scenario: {
          fr: "Un nouveau développeur rejoint l'équipe. Il installe Docker, tape `docker compose up`, et l'intégralité du projet web (base de données comprise) démarre en moins de deux minutes.",
          en: "A new developer joins the team. They install Docker, type `docker compose up`, and the entire web project (including the database) starts in less than two minutes."
        }
      },
      {
        field: { fr: "DevOps & Pipelines CI/CD", en: "DevOps & CI/CD Pipelines" },
        why: {
          fr: "Pour exécuter des tests dans des environnements vierges et standardisés à chaque commit.",
          en: "To run tests in clean and standardized environments at every commit."
        },
        useCase: {
          fr: "Utiliser une image de conteneur légère contenant Node.js ou Maven pour builder et tester l'application dans GitHub Actions.",
          en: "Use a lightweight container image containing Node.js or Maven to build and test the application inside GitHub Actions."
        },
        scenario: {
          fr: "Lorsqu'un développeur pousse du code, GitHub lance un conteneur temporaire, exécute les tests unitaires et détruit le conteneur. Aucun résidu ne pollue le serveur d'intégration.",
          en: "When a developer pushes code, GitHub spins up a temporary container, runs unit tests, and destroys the container. No residue pollutes the integration server."
        }
      },
      {
        field: { fr: "Data Science & Machine Learning", en: "Data Science & Machine Learning" },
        why: {
          fr: "Garantir la reproductibilité des calculs scientifiques en figeant les versions exactes des bibliothèques de calcul (TensorFlow, NumPy, CUDA).",
          en: "Guarantee reproducibility of scientific computations by freezing the exact versions of computational libraries (TensorFlow, NumPy, CUDA)."
        },
        useCase: {
          fr: "Fournir un conteneur Jupyter Notebook préconfiguré avec tous les packages de machine learning nécessaires.",
          en: "Provide a preconfigured Jupyter Notebook container with all the necessary machine learning packages."
        },
        scenario: {
          fr: "Un data scientist partage un modèle de Deep Learning avec un collègue. Grâce à l'image Docker commune, le collègue exécute le modèle sur sa propre machine sans erreur de pilotes GPU.",
          en: "A data scientist shares a Deep Learning model with a colleague. Thanks to the shared Docker image, the colleague executes the model on their machine without GPU driver errors."
        }
      },
      {
        field: { fr: "Cybersécurité & Labs de Test", en: "Cybersecurity & Pentesting Labs" },
        why: {
          fr: "Exécuter des outils d'analyse de vulnérabilité ou des logiciels suspects de façon isolée et sécurisée sans risquer d'infecter l'OS hôte.",
          en: "Execute vulnerability analysis tools or suspicious software in an isolated, secure way without risking infection of the host OS."
        },
        useCase: {
          fr: "Lancer un conteneur contenant la suite de piratage Kali Linux ou un serveur Web délibérément vulnérable (comme OWASP Juice Shop) pour s'entraîner.",
          en: "Launch a container hosting the Kali Linux suite or a deliberately vulnerable web server (like OWASP Juice Shop) for training."
        },
        scenario: {
          fr: "Un ingénieur en cybersécurité souhaite analyser un malware. Il l'exécute dans un conteneur Docker isolé du réseau local. Une fois l'analyse terminée, il supprime le conteneur en une seconde.",
          en: "A cybersecurity engineer wants to analyze a malware sample. They run it inside a Docker container isolated from the local network. Once the analysis is done, they destroy the container in a second."
        }
      }
    ]
  },

  installation: {
    title: { fr: "6. Guide d'Installation de Docker", en: "6. Docker Installation Guide" },
    platforms: {
      windows: {
        title: { fr: "Installation sur Windows", en: "Installation on Windows" },
        summary: { fr: "Docker Desktop avec WSL 2", en: "Docker Desktop with WSL 2" },
        steps: [
          { fr: "Téléchargez l'installateur officiel Docker Desktop depuis le site Docker.", en: "Download the official Docker Desktop installer from Docker." },
          { fr: "Activez le composant WSL 2 (Windows Subsystem for Linux) dans Windows.", en: "Enable WSL 2 (Windows Subsystem for Linux) on Windows." },
          { fr: "Lancez l'installateur et redémarrez le PC si nécessaire.", en: "Run the installer and restart the PC if required." },
          { fr: "Ouvrez Docker Desktop.", en: "Open Docker Desktop." },
          { fr: "Vérifiez l'installation avec docker --version.", en: "Verify the installation with docker --version." },
          { fr: "Lancez le test avec docker run hello-world.", en: "Run the test with docker run hello-world." },
        ],
        commands: ["docker --version", "docker run hello-world"],
        tip: {
          fr: "WSL 2 est recommandé car il permet d'exécuter les conteneurs Linux plus efficacement sur Windows.",
          en: "WSL 2 is recommended because it runs Linux containers more efficiently on Windows."
        }
      },
      macos: {
        title: { fr: "Installation sur macOS", en: "Installation on macOS" },
        summary: { fr: "Docker Desktop pour Apple Silicon ou Intel", en: "Docker Desktop for Apple Silicon or Intel" },
        steps: [
          { fr: "Téléchargez Docker Desktop pour Mac.", en: "Download Docker Desktop for Mac." },
          { fr: "Choisissez la bonne version : Apple Silicon pour M1/M2/M3 ou Intel pour les anciens Mac.", en: "Choose the correct version: Apple Silicon for M1/M2/M3 or Intel for older Macs." },
          { fr: "Ouvrez le fichier .dmg téléchargé.", en: "Open the downloaded .dmg file." },
          { fr: "Glissez Docker dans le dossier Applications.", en: "Drag Docker into the Applications folder." },
          { fr: "Lancez Docker Desktop depuis Launchpad.", en: "Start Docker Desktop from Launchpad." },
          { fr: "Autorisez les permissions demandées.", en: "Allow the requested permissions." },
          { fr: "Vérifiez l'installation avec docker --version.", en: "Verify the installation with docker --version." },
          { fr: "Testez Docker avec docker run hello-world.", en: "Test Docker with docker run hello-world." },
        ],
        commands: ["docker --version", "docker run hello-world"],
        tip: {
          fr: "Sur macOS, Docker Desktop doit être lancé avant d'utiliser les commandes Docker dans le terminal.",
          en: "On macOS, Docker Desktop must be running before using Docker commands in the terminal."
        }
      },
      linux: {
        title: { fr: "Installation sur Linux Ubuntu/Debian", en: "Installation on Linux Ubuntu/Debian" },
        summary: { fr: "Installation via terminal et dépôt Docker", en: "Terminal installation using Docker repository" },
        intro: {
          fr: "Sur Ubuntu/Debian, Docker peut être installé via le dépôt officiel Docker. Cette méthode est plus propre qu'une installation manuelle car elle permet de recevoir les mises à jour correctement.",
          en: "On Ubuntu/Debian, Docker can be installed through Docker's official repository. This method is cleaner than manual installation because it allows proper updates."
        },
        commandBlocks: [
          {
            label: { fr: "Mettez à jour les paquets et installez les dépendances :", en: "Update packages and install dependencies:" },
            code: "sudo apt-get update\nsudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common"
          },
          {
            label: { fr: "Ajoutez la clé GPG de Docker :", en: "Add the Docker GPG key:" },
            code: "curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -"
          },
          {
            label: { fr: "Ajoutez le dépôt Docker :", en: "Add the Docker repository:" },
            code: 'sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"'
          },
          {
            label: { fr: "Installez Docker :", en: "Install Docker:" },
            code: "sudo apt-get update\nsudo apt-get install -y docker-ce docker-ce-cli containerd.io"
          },
          {
            label: { fr: "Vérifiez l'installation :", en: "Verify the installation:" },
            code: "docker --version\nsudo docker run hello-world"
          },
          {
            label: { fr: "Optionnel — exécuter Docker sans sudo :", en: "Optional — run Docker without sudo:" },
            code: "sudo usermod -aG docker $USER"
          }
        ],
        tip: {
          fr: "Après avoir ajouté votre utilisateur au groupe docker, vous devez fermer puis rouvrir la session pour que le changement soit appliqué.",
          en: "After adding your user to the docker group, you must log out and log back in for the change to apply."
        },
        warning: {
          fr: "N'exécutez pas docker volume prune ou docker system prune si vous voulez conserver les données de vos conteneurs.",
          en: "Do not run docker volume prune or docker system prune if you want to keep your container data."
        }
      }
    },
    verification: {
      title: { fr: "Vérifier le bon fonctionnement", en: "Verify the installation" },
      summary: { fr: "Testez votre installation Docker", en: "Test your Docker installation" },
      text: {
        fr: "Une fois installé, ouvrez votre terminal (PowerShell sur Windows, Terminal sur macOS/Linux) et lancez les commandes suivantes pour vérifier que Docker fonctionne correctement :",
        en: "Once installed, open your terminal (PowerShell on Windows, Terminal on macOS/Linux) and run the following commands to check that Docker is running correctly:"
      },
      commands: [
        {
          cmd: "docker --version",
          desc: {
            fr: "Affiche la version installée de la CLI Docker.",
            en: "Displays the installed Docker CLI version."
          }
        },
        {
          cmd: "docker info",
          desc: {
            fr: "Affiche des informations détaillées sur l'ensemble du système Docker (nombre de conteneurs, d'images, etc.).",
            en: "Displays detailed system-wide information about Docker (number of containers, images, etc.)."
          }
        },
        {
          cmd: "docker run hello-world",
          desc: {
            fr: "Télécharge une image de test très légère depuis Docker Hub, l'exécute dans un conteneur, affiche un message de bienvenue, puis s'arrête. C'est le test d'intégration ultime.",
            en: "Downloads a very lightweight test image from Docker Hub, runs it in a container, prints a welcome message, and exits. This is the ultimate integration test."
          }
        }
      ]
    }
  },

  dockerfileTutorial: {
    title: { fr: "7. Tutoriel : Écrire un Dockerfile", en: "7. Tutorial: Writing a Dockerfile" },
    intro: {
      fr: "Un Dockerfile est la recette de cuisine de votre conteneur. Il contient une suite d'instructions pour configurer un environnement et y exécuter votre code. Nous allons étudier un exemple concret pour une application Node.js.",
      en: "A Dockerfile is the recipe for your container. It contains a sequence of instructions to set up an environment and execute your code. Let's study a concrete example for a Node.js application."
    },
    syntaxTableTitle: {
      fr: "Syntaxe et instructions courantes",
      en: "Common syntax and instructions"
    },
    syntax: [
      {
        instruction: "FROM",
        desc: {
          fr: "Définit l'image de base (souvent un OS ou un runtime préconfiguré comme Alpine Linux ou Node.js). Chaque Dockerfile doit commencer par FROM.",
          en: "Sets the base image (often an OS or preconfigured runtime like Alpine Linux or Node.js). Every Dockerfile must start with FROM."
        }
      },
      {
        instruction: "WORKDIR",
        desc: {
          fr: "Spécifie le dossier de travail à l'intérieur du conteneur. Toutes les commandes suivantes s'exécuteront dans ce dossier.",
          en: "Specifies the working directory inside the container. All subsequent commands will execute in this directory."
        }
      },
      {
        instruction: "COPY",
        desc: {
          fr: "Copie des fichiers ou dossiers de votre machine hôte vers le système de fichiers du conteneur.",
          en: "Copies files or directories from your host machine into the container's file system."
        }
      },
      {
        instruction: "RUN",
        desc: {
          fr: "Exécute des commandes système pendant l'étape de construction (build) de l'image (ex: installer des dépendances, compiler du code).",
          en: "Executes system commands during the image build step (e.g. installing dependencies, compiling code)."
        }
      },
      {
        instruction: "EXPOSE",
        desc: {
          fr: "Informe Docker que le conteneur écoutera sur un port réseau spécifique lors de son exécution (purement documentaire, n'ouvre pas le port de façon effective).",
          en: "Informs Docker that the container will listen on a specific network port at runtime (purely documentation, does not actually expose the port)."
        }
      },
      {
        instruction: "ENV",
        desc: {
          fr: "Définit des variables d'environnement au sein du conteneur, accessibles par vos scripts.",
          en: "Defines environment variables inside the container, accessible by your application scripts."
        }
      },
      {
        instruction: "CMD",
        desc: {
          fr: "Spécifie la commande par défaut exécutée lors du lancement du conteneur. Il ne peut y avoir qu'une seule instruction CMD par Dockerfile.",
          en: "Specifies the default command executed when the container starts. There can only be one CMD instruction per Dockerfile."
        }
      }
    ],
    example: `FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]`,
    explanation: [
      {
        line: "FROM node:20-alpine",
        fr: "Nous partons d'une image officielle contenant Node.js version 20 préinstallé. Le suffixe '-alpine' désigne une distribution Linux ultra-légère (environ 5 Mo) optimisée pour la sécurité et la rapidité.",
        en: "We start from an official image containing pre-installed Node.js version 20. The '-alpine' suffix denotes an ultra-lightweight Linux distribution (around 5 MB) optimized for security and speed."
      },
      {
        line: "WORKDIR /app",
        fr: "Nous créons et nous nous positionnons dans le dossier `/app` à l'intérieur du conteneur. Toutes les commandes suivantes s'y exécuteront.",
        en: "We create and navigate to the `/app` folder inside the container. All subsequent commands will execute there."
      },
      {
        line: "COPY package*.json ./",
        fr: "Nous copions uniquement les fichiers définissant les dépendances (`package.json` et `package-lock.json`) dans notre dossier de travail actuel (./). Cela permet d'optimiser le cache de Docker.",
        en: "We copy only the dependency definition files (`package.json` and `package-lock.json`) into our current working directory (./). This helps optimize Docker's build cache."
      },
      {
        line: "RUN npm install",
        fr: "Nous lançons l'installation des dépendances dans le conteneur. Comme nous n'avons copié que le `package.json` auparavant, Docker ne réexécutera cette étape de build que si ce fichier change.",
        en: "We run the dependency installation inside the container. Because we only copied the `package.json` earlier, Docker will only re-execute this build step if that file changes."
      },
      {
        line: "COPY . .",
        fr: "Nous copions tout le reste du code source de notre projet local vers le dossier de travail du conteneur.",
        en: "We copy the rest of our local project's source code into the container's working directory."
      },
      {
        line: "EXPOSE 3000",
        fr: "Nous documentons le fait que l'application écoute sur le port 3000.",
        en: "We document that the application listens on port 3000."
      },
      {
        line: 'CMD ["npm", "run", "dev"]',
        fr: "Nous spécifions la commande à exécuter pour lancer notre serveur de développement au démarrage du conteneur.",
        en: "We specify the command to execute to start our development server when the container boots."
      }
    ]
  },

  composeTutorial: {
    title: { fr: "8. Tutoriel : Docker Compose", en: "8. Tutorial: Docker Compose" },
    intro: {
      fr: "Docker Compose simplifie la vie lorsqu'une application a besoin de plusieurs services (par exemple, une API et une base de données). Il permet de tout orchestrer dans un fichier YAML et de démarrer l'infrastructure complète avec une seule commande.",
      en: "Docker Compose simplifies life when an application requires multiple services (for example, an API and a database). It allows orchestrating everything inside a single YAML file and starting the entire stack with one command."
    },
    whyUseTitle: {
      fr: "Pourquoi utiliser Docker Compose ?",
      en: "Why use Docker Compose?"
    },
    whyUseText: {
      fr: "Au lieu de taper de longues commandes dans le terminal pour démarrer chaque conteneur, configurer les ponts réseau et lier les volumes de stockage, vous écrivez un fichier `compose.yml`. Cela permet de documenter et d'automatiser l'environnement de développement complet de l'équipe.",
      en: "Instead of typing long commands in the terminal to start each container, configure network bridges, and link storage volumes, you write a `compose.yml` file. This documents and automates the team's entire development environment."
    },
    example: `services:
  app:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - mongo

  mongo:
    image: mongo
    ports:
      - "27017:27017"`,
    explanation: [
      {
        line: "services:",
        fr: "Indique le début de la liste des conteneurs qui vont composer notre application.",
        en: "Indicates the start of the list of containers that make up our application."
      },
      {
        line: "  app:",
        fr: "Déclare notre premier service nommé `app` (l'application Node.js).",
        en: "Declares our first service named `app` (the Node.js application)."
      },
      {
        line: "    build: .",
        fr: "Dit à Docker Compose de construire l'image de ce conteneur en utilisant le `Dockerfile` situé dans le dossier courant (.).",
        en: "Tells Docker Compose to build the image for this container using the `Dockerfile` located in the current directory (.)."
      },
      {
        line: '    ports: - "3000:3000"',
        fr: "Mappe le port 3000 de la machine hôte vers le port 3000 du conteneur. Cela permet d'accéder à l'application via `http://localhost:3000`.",
        en: "Maps port 3000 of the host machine to port 3000 of the container. This makes the application accessible via `http://localhost:3000`."
      },
      {
        line: "    depends_on: - mongo",
        fr: "Indique que l'application a besoin du service `mongo` pour fonctionner. Docker Compose démarrera donc d'abord le conteneur de base de données avant d'initialiser le nôtre.",
        en: "Indicates that the application requires the `mongo` service to run. Docker Compose will start the database container before initializing our application."
      },
      {
        line: "  mongo:",
        fr: "Déclare notre second service nommé `mongo` (la base de données).",
        en: "Declares our second service named `mongo` (the database)."
      },
      {
        line: "    image: mongo",
        fr: "Au lieu de construire une image personnalisée, nous téléchargeons directement l'image officielle MongoDB depuis Docker Hub.",
        en: "Instead of building a custom image, we download the official MongoDB image directly from Docker Hub."
      },
      {
        line: '    ports: - "27017:27017"',
        fr: "Mappe le port par défaut de MongoDB (27017) de la machine hôte vers le conteneur.",
        en: "Maps the default MongoDB port (27017) from the host machine to the container."
      }
    ]
  },

  practicalExamples: {
    title: { fr: "9. Exemples Pratiques", en: "9. Practical Examples" },
    examples: [
      {
        title: { fr: "Exemple 1 : Lancer un serveur Web Nginx", en: "Example 1: Run an Nginx Web Server" },
        cmd: "docker run -d -p 8080:80 nginx",
        desc: {
          fr: "Nginx est un serveur web extrêmement populaire. Cette commande permet d'héberger un serveur web instantanément.",
          en: "Nginx is an extremely popular web server. This command hosts a web server instantly."
        },
        bullets: [
          {
            fr: "**-d** : Lance le conteneur en arrière-plan (detached mode). Le terminal reste utilisable.",
            en: "**-d** : Runs the container in the background (detached mode). The terminal remains usable."
          },
          {
            fr: "**-p 8080:80** : Mappe le port 8080 de votre machine locale vers le port 80 (port HTTP standard) du conteneur.",
            en: "**-p 8080:80** : Maps port 8080 of your local machine to port 80 (standard HTTP port) of the container."
          },
          {
            fr: "**nginx** : Spécifie le nom de l'image. Si elle n'est pas présente localement, Docker la télécharge automatiquement.",
            en: "**nginx** : Specifies the image name. If not present locally, Docker downloads it automatically."
          },
          {
            fr: "**Accès** : Ouvrez votre navigateur sur `http://localhost:8080` pour voir la page d'accueil d'Nginx.",
            en: "**Access** : Open your browser at `http://localhost:8080` to view the Nginx welcome page."
          }
        ]
      },
      {
        title: { fr: "Exemple 2 : Lancer une base de données MongoDB", en: "Example 2: Run a MongoDB Database" },
        cmd: "docker run -d --name my-mongo -p 27017:27017 mongo",
        desc: {
          fr: "MongoDB est une base de données NoSQL très populaire pour les applications Node.js/Express.",
          en: "MongoDB is a popular NoSQL database for Node.js/Express applications."
        },
        bullets: [
          {
            fr: "**--name my-mongo** : Donne un nom convivial au conteneur afin de pouvoir l'arrêter ou le redémarrer plus facilement sans chercher son ID aléatoire.",
            en: "**--name my-mongo** : Gives a friendly name to the container so you can stop or restart it easily without searching for its random ID."
          },
          {
            fr: "**-p 27017:27017** : Ouvre le port par défaut de MongoDB pour permettre à vos outils locaux (comme Compass) de s'y connecter.",
            en: "**-p 27017:27017** : Opens the default MongoDB port to allow local tools (like Compass) to connect."
          }
        ]
      },
      {
        title: { fr: "Exemple 3 : Conteneuriser une application Node.js complète", en: "Example 3: Containerizing a full Node.js app" },
        desc: {
          fr: "Voyons l'ensemble des fichiers nécessaires pour faire fonctionner une application Node.js autonome sous Docker.",
          en: "Let's see the full set of files required to run an autonomous Node.js app under Docker."
        },
        files: [
          {
            name: "package.json",
            content: `{
  "name": "docker-node-app",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.19.2"
  }
}`
          },
          {
            name: "index.js",
            content: `const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Bonjour depuis Docker ! / Hello from Docker!</h1>');
});

app.listen(PORT, () => {
  console.log(\`Serveur démarré sur le port \${PORT}\`);
});`
          },
          {
            name: "Dockerfile",
            content: `FROM node:20-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]`
          }
        ],
        steps: [
          {
            title: { fr: "Étape 1 : Builder l'image", en: "Step 1: Build the image" },
            cmd: "docker build -t node-hello-app .",
            fr: "Crée l'image nommée 'node-hello-app' en utilisant le Dockerfile présent dans le dossier actuel.",
            en: "Creates the image named 'node-hello-app' using the Dockerfile inside the current directory."
          },
          {
            title: { fr: "Étape 2 : Lancer le conteneur", en: "Step 2: Run the container" },
            cmd: "docker run -d -p 3000:3000 node-hello-app",
            fr: "Démarre l'application et la rend disponible sur `http://localhost:3000`.",
            en: "Starts the application and makes it available at `http://localhost:3000`."
          }
        ]
      }
    ]
  },

  problemsBeforeDocker: {
    title: { fr: "3. Problèmes avant Docker", en: "3. Problems Before Docker" },
    intro: {
      fr: "Avant l'adoption massive de Docker, les développeurs et les équipes DevOps faisaient face à de nombreux problèmes récurrents liés au déploiement et à l'exécution des applications.",
      en: "Before Docker's mass adoption, developers and DevOps teams faced many recurring problems related to application deployment and execution."
    },
    items: [
      {
        problem: { fr: "Dépendances système conflictuelles", en: "Conflicting system dependencies" },
        explanation: {
          fr: "Deux applications sur le même serveur pouvaient nécessiter des versions différentes de la même bibliothèque (ex: Python 2 vs Python 3, Node.js 14 vs Node.js 18). Installer l'une pouvait casser l'autre.",
          en: "Two applications on the same server could require different versions of the same library (e.g., Python 2 vs Python 3, Node.js 14 vs Node.js 18). Installing one could break the other."
        }
      },
      {
        problem: { fr: "Environnement non reproductible", en: "Non-reproducible environment" },
        explanation: {
          fr: "L'environnement de développement n'était jamais identique à la production. Les différences d'OS, de versions de logiciels et de configuration causaient des bugs impossibles à reproduire localement.",
          en: "The development environment was never identical to production. Differences in OS, software versions, and configuration caused bugs that were impossible to reproduce locally."
        }
      },
      {
        problem: { fr: "Provisionnement lent", en: "Slow provisioning" },
        explanation: {
          fr: "Configurer un nouveau serveur prenait des heures, voire des jours. Chaque étape (installation d'OS, dépendances, configuration réseau) devait être faite manuellement ou avec des scripts complexes.",
          en: "Setting up a new server took hours or even days. Each step (OS installation, dependencies, network configuration) had to be done manually or with complex scripts."
        }
      },
      {
        problem: { fr: '"Ça marche sur ma machine"', en: '"It works on my machine"' },
        explanation: {
          fr: "Le problème le plus célèbre. Une application fonctionnait chez le développeur mais plantait en production à cause de différences d'environnement. Docker a été créé spécifiquement pour résoudre ce problème.",
          en: "The most famous problem. An application worked on the developer's machine but crashed in production due to environment differences. Docker was created specifically to solve this."
        }
      }
    ],
    conclusion: {
      fr: "Docker a résolu tous ces problèmes en standardisant l'environnement d'exécution. Chaque application embarque son propre OS, ses dépendances et sa configuration dans une image portable.",
      en: "Docker solved all these problems by standardizing the runtime environment. Each application embeds its own OS, dependencies, and configuration in a portable image."
    }
  },

  dockerArchitecture: {
    title: { fr: "5. Architecture Docker", en: "5. Docker Architecture" },
    intro: {
      fr: "Docker utilise une architecture client-serveur. Le client Docker (CLI) communique avec le daemon Docker (dockerd) qui construit, exécute et gère les conteneurs.",
      en: "Docker uses a client-server architecture. The Docker client (CLI) communicates with the Docker daemon (dockerd) which builds, runs, and manages containers."
    },
    client: {
      title: { fr: "Docker Client (CLI)", en: "Docker Client (CLI)" },
      text: {
        fr: "Le client Docker est l'outil en ligne de commande (docker) que vous utilisez dans votre terminal. Il envoie des commandes au daemon Docker via une API REST. Un même client peut communiquer avec plusieurs daemons distants.",
        en: "The Docker client is the command-line tool (docker) you use in your terminal. It sends commands to the Docker daemon via a REST API. A single client can communicate with multiple remote daemons."
      }
    },
    daemon: {
      title: { fr: "Docker Daemon (dockerd)", en: "Docker Daemon (dockerd)" },
      text: {
        fr: "Le daemon Docker (dockerd) est un processus serveur qui tourne en arrière-plan sur la machine hôte. Il écoute les requêtes API, gère les images, les conteneurs, les réseaux et les volumes. C'est le cœur du moteur Docker.",
        en: "The Docker daemon (dockerd) is a server process that runs in the background on the host machine. It listens for API requests, manages images, containers, networks, and volumes. It is the heart of the Docker engine."
      }
    },
    engine: {
      title: { fr: "Docker Engine", en: "Docker Engine" },
      text: {
        fr: "Le Docker Engine est l'ensemble composé du daemon, de l'API REST et de la CLI. C'est la couche logicielle qui exécute et orchestre les conteneurs. Il utilise les fonctionnalités du noyau Linux (namespaces, cgroups) pour isoler les processus.",
        en: "Docker Engine is the package consisting of the daemon, the REST API, and the CLI. It is the software layer that runs and orchestrates containers. It uses Linux kernel features (namespaces, cgroups) to isolate processes."
      }
    },
    registry: {
      title: { fr: "Docker Registry", en: "Docker Registry" },
      text: {
        fr: "Un registre Docker est un serveur qui stocke et distribue des images Docker. Docker Hub est le registre public par défaut, mais vous pouvez héberger votre propre registre privé (ex: AWS ECR, GitLab Container Registry, Harbor).",
        en: "A Docker registry is a server that stores and distributes Docker images. Docker Hub is the default public registry, but you can host your own private registry (e.g., AWS ECR, GitLab Container Registry, Harbor)."
      }
    },
    hub: {
      title: { fr: "Docker Hub", en: "Docker Hub" },
      text: {
        fr: "Docker Hub est le registre officiel hébergé par Docker Inc. Il contient des millions d'images publiques (Node.js, Python, MongoDB, Nginx, Ubuntu) et permet de partager vos propres images avec la communauté ou votre équipe.",
        en: "Docker Hub is the official registry hosted by Docker Inc. It contains millions of public images (Node.js, Python, MongoDB, Nginx, Ubuntu) and allows you to share your own images with the community or your team."
      }
    },
    communication: {
      fr: "Le flux typique : vous tapez 'docker run nginx' dans le terminal. Le client Docker envoie une requête API au daemon. Le daemon vérifie si l'image nginx est disponible localement, sinon il la télécharge depuis Docker Hub. Ensuite, il crée et démarre un conteneur à partir de cette image.",
      en: "The typical flow: you type 'docker run nginx' in the terminal. The Docker client sends an API request to the daemon. The daemon checks if the nginx image is available locally, otherwise downloads it from Docker Hub. Then it creates and starts a container from that image."
    }
  },

  containerLifecycle: {
    title: { fr: "Cycle de vie d'un conteneur", en: "Container Lifecycle" },
    intro: {
      fr: "Un conteneur Docker passe par plusieurs états tout au long de sa vie. Comprendre ce cycle est essentiel pour gérer efficacement vos conteneurs.",
      en: "A Docker container goes through several states throughout its life. Understanding this cycle is essential for managing your containers effectively."
    },
    states: [
      {
        name: { fr: "Created (Créé)", en: "Created" },
        desc: {
          fr: "Le conteneur a été créé à partir d'une image mais n'a jamais été démarré. Il existe dans le système de fichiers de Docker mais aucun processus ne tourne.",
          en: "The container has been created from an image but has never been started. It exists in Docker's filesystem but no process is running."
        }
      },
      {
        name: { fr: "Running (En cours)", en: "Running" },
        desc: {
          fr: "Le conteneur est actif et le processus principal (CMD) est en cours d'exécution. Le conteneur peut recevoir des connexions réseau et exécuter des commandes.",
          en: "The container is active and the main process (CMD) is running. The container can receive network connections and execute commands."
        }
      },
      {
        name: { fr: "Paused (En pause)", en: "Paused" },
        desc: {
          fr: "Tous les processus du conteneur sont temporairement suspendus via le mécanisme cgroups freeze. Le conteneeur conserve son état mémoire mais n'utilise pas de CPU.",
          en: "All processes in the container are temporarily suspended via the cgroups freeze mechanism. The container retains its memory state but uses no CPU."
        }
      },
      {
        name: { fr: "Exited (Arrêté)", en: "Exited" },
        desc: {
          fr: "Le processus principal du conteneur s'est terminé (volontairement ou sur erreur). Le conteneur existe toujours mais ne consomme pas de ressources CPU. Il peut être redémarré.",
          en: "The container's main process has terminated (voluntarily or on error). The container still exists but consumes no CPU resources. It can be restarted."
        }
      },
      {
        name: { fr: "Deleted (Supprimé)", en: "Deleted" },
        desc: {
          fr: "Le conteneur a été supprimé avec 'docker rm'. Toutes ses données non persistées (système de fichiers) sont perdues définitivement.",
          en: "The container has been removed with 'docker rm'. All its non-persisted data (filesystem) is permanently lost."
        }
      }
    ],
    commands: {
      fr: "Commandes associées : docker create, docker start, docker stop, docker pause, docker unpause, docker restart, docker rm.",
      en: "Associated commands: docker create, docker start, docker stop, docker pause, docker unpause, docker restart, docker rm."
    }
  },

  volumesDetailed: {
    title: { fr: "Volumes Docker et données persistantes", en: "Docker Volumes and Persistent Data" },
    intro: {
      fr: "Les conteneurs sont éphémères par nature. Quand un conteneur est supprimé, toutes les données écrites dans son système de fichiers sont perdues. Les volumes Docker permettent de persister les données indépendamment du cycle de vie des conteneurs.",
      en: "Containers are ephemeral by nature. When a container is deleted, all data written to its filesystem is lost. Docker volumes allow data to persist independently of the container lifecycle."
    },
    why: {
      fr: "Sans volume, une base de données MongoDB dans un conteneur perd toutes ses données lors de la suppression du conteneur. Avec un volume, les données survivent aux redémarrages et aux suppressions.",
      en: "Without a volume, a MongoDB database in a container loses all its data when the container is removed. With a volume, data survives restarts and deletions."
    },
    types: [
      {
        name: { fr: "Volumes nommés", en: "Named volumes" },
        desc: {
          fr: "Gérés par Docker. Créés avec 'docker volume create' ou automatiquement dans compose.yml. Stockés dans /var/lib/docker/volumes/. Recommandés pour la production.",
          en: "Managed by Docker. Created with 'docker volume create' or automatically in compose.yml. Stored in /var/lib/docker/volumes/. Recommended for production."
        }
      },
      {
        name: { fr: "Bind mounts", en: "Bind mounts" },
        desc: {
          fr: "Montent un dossier de la machine hôte directement dans le conteneur. Idéal pour le développement (rechargement à chaud). Moins portable que les volumes nommés.",
          en: "Mount a host directory directly into the container. Ideal for development (hot reloading). Less portable than named volumes."
        }
      },
      {
        name: { fr: "tmpfs mounts", en: "tmpfs mounts" },
        desc: {
          fr: "Montés en mémoire RAM. Très rapides mais non persistants. Utilisés pour des données sensibles ou temporaires.",
          en: "Mounted in RAM. Very fast but non-persistent. Used for sensitive or temporary data."
        }
      }
    ],
    example: "docker volume create mongo_data\ndocker run -d -v mongo_data:/data/db mongo:7"
  },

  networksDetailed: {
    title: { fr: "Réseaux Docker", en: "Docker Networks" },
    intro: {
      fr: "Les réseaux Docker permettent aux conteneurs de communiquer entre eux et avec le monde extérieur. Chaque conteneur peut être connecté à un ou plusieurs réseaux.",
      en: "Docker networks allow containers to communicate with each other and with the outside world. Each container can be connected to one or more networks."
    },
    drivers: [
      {
        name: { fr: "bridge (pont)", en: "bridge" },
        desc: {
          fr: "Réseau par défaut. Les conteneurs sur le même bridge peuvent communiquer via leur adresse IP. Idéal pour une application standalone.",
          en: "Default network. Containers on the same bridge can communicate via IP addresses. Ideal for standalone applications."
        }
      },
      {
        name: { fr: "host (hôte)", en: "host" },
        desc: {
          fr: "Le conteneur partage directement le réseau de l'hôte. Pas d'isolation réseau. Performances maximales mais moins sécurisé.",
          en: "The container shares the host's network directly. No network isolation. Maximum performance but less secure."
        }
      },
      {
        name: { fr: "overlay (superposition)", en: "overlay" },
        desc: {
          fr: "Permet à des conteneurs sur différentes machines (cluster Swarm) de communiquer comme s'ils étaient sur le même réseau.",
          en: "Allows containers on different machines (Swarm cluster) to communicate as if on the same network."
        }
      },
      {
        name: { fr: "macvlan", en: "macvlan" },
        desc: {
          fr: "Attribue une adresse MAC unique à chaque conteneur, le faisant apparaître comme un appareil physique sur le réseau.",
          en: "Assigns a unique MAC address to each container, making it appear as a physical device on the network."
        }
      },
      {
        name: { fr: "none (aucun)", en: "none" },
        desc: {
          fr: "Le conteneur n'a pas d'accès réseau. Utilisé pour des conteneurs de calcul isolés ou de traitement de données sensibles.",
          en: "The container has no network access. Used for isolated compute containers or sensitive data processing."
        }
      }
    ],
    dns: {
      fr: "Docker Compose crée un réseau DNS interne qui permet aux conteneurs de se joindre via leur nom de service (ex: 'mongo' au lieu d'une adresse IP). Ce mécanisme est automatique et ne nécessite aucune configuration.",
      en: "Docker Compose creates an internal DNS network that allows containers to reach each other via service names (e.g., 'mongo' instead of an IP address). This mechanism is automatic and requires no configuration."
    }
  },

  dockerSecurity: {
    title: { fr: "Sécurité Docker", en: "Docker Security" },
    intro: {
      fr: "Docker offre plusieurs mécanismes de sécurité pour isoler les conteneurs et protéger l'hôte. Bien configuré, Docker peut être plus sécurisé que des applications déployées traditionnellement.",
      en: "Docker offers several security mechanisms to isolate containers and protect the host. Properly configured, Docker can be more secure than traditionally deployed applications."
    },
    principles: [
      {
        title: { fr: "Principe du moindre privilège", en: "Principle of least privilege" },
        desc: {
          fr: "Ne donnez aux conteneurs que les permissions strictement nécessaires. Évitez de lancer les conteneurs en tant que root. Utilisez l'instruction USER dans votre Dockerfile.",
          en: "Give containers only the permissions they strictly need. Avoid running containers as root. Use the USER instruction in your Dockerfile."
        }
      },
      {
        title: { fr: "Images officielles et signatures", en: "Official images and signatures" },
        desc: {
          fr: "Utilisez toujours des images officielles ou signées depuis Docker Hub. Activez Docker Content Trust (DCT) pour vérifier la signature des images avant de les exécuter.",
          en: "Always use official or signed images from Docker Hub. Enable Docker Content Trust (DCT) to verify image signatures before running them."
        }
      },
      {
        title: { fr: "Scan de vulnérabilités", en: "Vulnerability scanning" },
        desc: {
          fr: "Utilisez 'docker scout' ou des outils tiers (Trivy, Snyk) pour analyser vos images à la recherche de vulnérabilités connues dans les dépendances système et applicatives.",
          en: "Use 'docker scout' or third-party tools (Trivy, Snyk) to scan your images for known vulnerabilities in system and application dependencies."
        }
      },
      {
        title: { fr: "Réseaux isolés", en: "Isolated networks" },
        desc: {
          fr: "Placez chaque groupe de services sur son propre réseau Docker. Un conteneur de base de données ne devrait pas être accessible depuis le réseau public.",
          en: "Place each group of services on its own Docker network. A database container should not be accessible from the public network."
        }
      },
      {
        title: { fr: "Limitation des ressources", en: "Resource limits" },
        desc: {
          fr: "Utilisez les flags --memory, --cpus, --pids-limit pour empêcher un conteneur de monopoliser les ressources de l'hôte (attaque par déni de service).",
          en: "Use --memory, --cpus, --pids-limit flags to prevent a container from monopolizing host resources (denial of service attack)."
        }
      },
      {
        title: { fr: "Système de fichiers en lecture seule", en: "Read-only filesystem" },
        desc: {
          fr: "Montez le système de fichiers du conteneur en lecture seule avec --read-only quand l'application n'a pas besoin d'écrire sur le disque.",
          en: "Mount the container's filesystem as read-only with --read-only when the application does not need to write to disk."
        }
      }
    ]
  },

  dockerOptimization: {
    title: { fr: "Optimisation Docker", en: "Docker Optimization" },
    intro: {
      fr: "Optimiser vos conteneurs Docker permet de réduire les coûts, d'améliorer les performances et de renforcer la sécurité. Voici les meilleures pratiques d'optimisation.",
      en: "Optimizing your Docker containers reduces costs, improves performance, and strengthens security. Here are the best optimization practices."
    },
    tips: [
      {
        title: { fr: "Choisir des images de base légères", en: "Choose lightweight base images" },
        desc: {
          fr: "Préférez alpine, slim ou distroless aux images standard. Une image node:20 fait 1.2 Go, node:20-slim fait 250 Mo, node:20-alpine fait 130 Mo.",
          en: "Prefer alpine, slim or distroless over standard images. node:20 is 1.2 GB, node:20-slim is 250 MB, node:20-alpine is 130 MB."
        }
      },
      {
        title: { fr: "Optimiser le cache Docker", en: "Optimize Docker cache" },
        desc: {
          fr: "Ordonnez les instructions du Dockerfile du moins changeant au plus changeant. Copiez d'abord package*.json, installez les dépendances, puis copiez le code source.",
          en: "Order Dockerfile instructions from least to most frequently changing. Copy package*.json first, install dependencies, then copy the source code."
        }
      },
      {
        title: { fr: "Utiliser le multi-stage build", en: "Use multi-stage builds" },
        desc: {
          fr: "Séparez la phase de compilation de la phase d'exécution. L'image finale ne contient que les artefacts nécessaires, pas les outils de build.",
          en: "Separate the compilation phase from the runtime phase. The final image contains only the necessary artifacts, not the build tools."
        }
      },
      {
        title: { fr: "Minimiser le nombre de couches", en: "Minimize the number of layers" },
        desc: {
          fr: "Combinez les commandes RUN avec && et \. Chaque instruction crée une couche. Trop de couches augmente la taille de l'image.",
          en: "Combine RUN commands with && and \\. Each instruction creates a layer. Too many layers increases image size."
        }
      },
      {
        title: { fr: "Utiliser .dockerignore", en: "Use .dockerignore" },
        desc: {
          fr: "Excluez les fichiers inutiles (node_modules, .git, *.log) du contexte de build. Cela accélère le build et réduit la taille de l'image.",
          en: "Exclude unnecessary files (node_modules, .git, *.log) from the build context. This speeds up the build and reduces image size."
        }
      },
      {
        title: { fr: "Éviter d'installer les dépendances de développement", en: "Avoid installing dev dependencies" },
        desc: {
          fr: "Utilisez 'npm ci --only=production' ou équivalent. Les dépendances de développement ne sont pas nécessaires dans l'image de production.",
          en: "Use 'npm ci --only=production' or equivalent. Dev dependencies are not needed in the production image."
        }
      }
    ]
  },

  dockerDevops: {
    title: { fr: "Docker dans le DevOps, CI/CD et le Cloud", en: "Docker in DevOps, CI/CD and Cloud" },
    devops: {
      title: { fr: "Docker et DevOps", en: "Docker and DevOps" },
      text: {
        fr: "Docker est un pilier du mouvement DevOps. Il permet aux développeurs et aux ops de collaborer sur le même artefact : l'image Docker. Fini les 'ça marche chez moi', l'image qui passe les tests en CI est la même qui est déployée en production.",
        en: "Docker is a pillar of the DevOps movement. It allows developers and ops to collaborate on the same artifact: the Docker image. No more 'it works on my machine', the image that passes CI tests is the same one deployed to production."
      }
    },
    cicd: {
      title: { fr: "Docker dans les pipelines CI/CD", en: "Docker in CI/CD pipelines" },
      text: {
        fr: "Dans un pipeline CI/CD typique : 1) Le développeur pousse du code sur GitHub/GitLab. 2) Le runner CI clone le code et exécute 'docker build -t app .'. 3) Les tests s'exécutent dans un conteneur temporaire. 4) L'image est taguée et pushée vers un registre. 5) L'image est déployée sur le serveur de production avec 'docker compose up'.",
        en: "In a typical CI/CD pipeline: 1) The developer pushes code to GitHub/GitLab. 2) The CI runner clones the code and runs 'docker build -t app .'. 3) Tests run in a temporary container. 4) The image is tagged and pushed to a registry. 5) The image is deployed to the production server with 'docker compose up'."
      },
      tools: {
        fr: "Outils populaires : GitHub Actions, GitLab CI/CD, Jenkins, CircleCI, AWS CodeBuild.",
        en: "Popular tools: GitHub Actions, GitLab CI/CD, Jenkins, CircleCI, AWS CodeBuild."
      }
    },
    cloud: {
      title: { fr: "Docker dans le Cloud", en: "Docker in the Cloud" },
      text: {
        fr: "Tous les grands fournisseurs cloud supportent Docker nativement. AWS ECS (Elastic Container Service), Azure Container Instances, Google Cloud Run. Pour l'orchestration à grande échelle, Kubernetes est le standard de facto.",
        en: "All major cloud providers support Docker natively. AWS ECS (Elastic Container Service), Azure Container Instances, Google Cloud Run. For large-scale orchestration, Kubernetes is the de facto standard."
      },
      services: {
        fr: "AWS ECS / EKS, Azure Container Apps / AKS, Google Cloud Run / GKE, DigitalOcean App Platform.",
        en: "AWS ECS / EKS, Azure Container Apps / AKS, Google Cloud Run / GKE, DigitalOcean App Platform."
      }
    }
  },

  cheatSheet: {
    essential: {
      title: { fr: "Commandes essentielles", en: "Essential Commands" },
      items: [
        { cmd: "docker --version", desc: { fr: "Version de Docker", en: "Docker version" } },
        { cmd: "docker info", desc: { fr: "Infos système Docker", en: "Docker system info" } },
        { cmd: "docker run hello-world", desc: { fr: "Test d'installation", en: "Installation test" } },
        { cmd: "docker help", desc: { fr: "Aide générale", en: "General help" } },
      ]
    },
    images: {
      title: { fr: "Images", en: "Images" },
      items: [
        { cmd: "docker images", desc: { fr: "Lister les images", en: "List images" } },
        { cmd: "docker pull nginx", desc: { fr: "Télécharger une image", en: "Download an image" } },
        { cmd: "docker build -t app .", desc: { fr: "Construire une image", en: "Build an image" } },
        { cmd: "docker rmi <id>", desc: { fr: "Supprimer une image", en: "Remove an image" } },
        { cmd: "docker tag app user/app:v1", desc: { fr: "Tagger une image", en: "Tag an image" } },
        { cmd: "docker push user/app:v1", desc: { fr: "Pousser une image", en: "Push an image" } },
      ]
    },
    containers: {
      title: { fr: "Conteneurs", en: "Containers" },
      items: [
        { cmd: "docker ps", desc: { fr: "Conteneurs actifs", en: "Running containers" } },
        { cmd: "docker ps -a", desc: { fr: "Tous les conteneurs", en: "All containers" } },
        { cmd: "docker run -d nginx", desc: { fr: "Lancer en arrière-plan", en: "Run in background" } },
        { cmd: "docker run -it ubuntu bash", desc: { fr: "Mode interactif", en: "Interactive mode" } },
        { cmd: "docker start <id>", desc: { fr: "Démarrer un conteneur", en: "Start a container" } },
        { cmd: "docker stop <id>", desc: { fr: "Arrêter un conteneur", en: "Stop a container" } },
        { cmd: "docker rm <id>", desc: { fr: "Supprimer un conteneur", en: "Remove a container" } },
        { cmd: "docker exec -it <id> sh", desc: { fr: "Entrer dans un conteneur", en: "Enter a container" } },
      ]
    },
    compose: {
      title: { fr: "Docker Compose", en: "Docker Compose" },
      items: [
        { cmd: "docker compose up -d", desc: { fr: "Démarrer la stack", en: "Start the stack" } },
        { cmd: "docker compose down", desc: { fr: "Arrêter la stack", en: "Stop the stack" } },
        { cmd: "docker compose ps", desc: { fr: "État des services", en: "Service status" } },
        { cmd: "docker compose logs -f", desc: { fr: "Logs en temps réel", en: "Real-time logs" } },
        { cmd: "docker compose build", desc: { fr: "Reconstruire les images", en: "Rebuild images" } },
        { cmd: "docker compose up -d --build", desc: { fr: "Build + démarrage", en: "Build + start" } },
      ]
    },
    volumes: {
      title: { fr: "Volumes", en: "Volumes" },
      items: [
        { cmd: "docker volume ls", desc: { fr: "Lister les volumes", en: "List volumes" } },
        { cmd: "docker volume create data", desc: { fr: "Créer un volume", en: "Create a volume" } },
        { cmd: "docker volume rm data", desc: { fr: "Supprimer un volume", en: "Remove a volume" } },
        { cmd: "docker run -v data:/data/db mongo", desc: { fr: "Monter un volume", en: "Mount a volume" } },
      ]
    },
    networks: {
      title: { fr: "Réseaux", en: "Networks" },
      items: [
        { cmd: "docker network ls", desc: { fr: "Lister les réseaux", en: "List networks" } },
        { cmd: "docker network create net", desc: { fr: "Créer un réseau", en: "Create a network" } },
        { cmd: "docker network rm net", desc: { fr: "Supprimer un réseau", en: "Remove a network" } },
      ]
    },
    cleanup: {
      title: { fr: "Nettoyage", en: "Cleanup" },
      items: [
        { cmd: "docker system prune", desc: { fr: "Nettoyage général", en: "General cleanup" } },
        { cmd: "docker system df", desc: { fr: "Espace disque utilisé", en: "Disk usage" } },
        { cmd: "docker container prune", desc: { fr: "Supprimer conteneurs arrêtés", en: "Remove stopped containers" } },
        { cmd: "docker image prune", desc: { fr: "Supprimer images non utilisées", en: "Remove unused images" } },
        { cmd: "docker volume prune", desc: { fr: "Supprimer volumes inutilisés", en: "Remove unused volumes" } },
      ]
    }
  },

  vmToDockerMigration: {
    title: { fr: "Migration avancée d'une VM vers Docker", en: "Advanced Migration from VM to Docker" },
    intro: {
      fr: "La migration d'applications depuis des machines virtuelles vers des conteneurs Docker est une étape clé dans la modernisation des infrastructures. Cette section explique pourquoi et comment migrer efficacement.",
      en: "Migrating applications from virtual machines to Docker containers is a key step in infrastructure modernization. This section explains why and how to migrate effectively."
    },
    whyMigrate: {
      title: { fr: "Pourquoi migrer ?", en: "Why migrate?" },
      reasons: [
        {
          title: { fr: "Portabilité", en: "Portability" },
          desc: {
            fr: "Une image Docker fonctionne à l'identique sur n'importe quelle machine (dev, staging, production, cloud).",
            en: "A Docker image runs identically on any machine (dev, staging, production, cloud)."
          }
        },
        {
          title: { fr: "Rapidité", en: "Speed" },
          desc: {
            fr: "Les conteneurs démarrent en quelques secondes, contre plusieurs minutes pour une VM complète.",
            en: "Containers start in seconds, compared to minutes for a full VM."
          }
        },
        {
          title: { fr: "Reproductibilité", en: "Reproducibility" },
          desc: {
            fr: "L'infrastructure est définie dans du code (Dockerfile, compose.yml). Plus de dérive d'environnement.",
            en: "Infrastructure is defined in code (Dockerfile, compose.yml). No more environment drift."
          }
        },
        {
          title: { fr: "Automatisation CI/CD", en: "CI/CD Automation" },
          desc: {
            fr: "Les images peuvent être buildées, testées et déployées automatiquement dans un pipeline CI/CD.",
            en: "Images can be built, tested, and deployed automatically in a CI/CD pipeline."
          }
        }
      ]
    },
    traditionalDeployment: {
      title: { fr: "Déploiement traditionnel sur VM", en: "Traditional VM Deployment" },
      workflow: {
        fr: "Flux de travail manuel typique :",
        en: "Typical manual workflow:"
      },
      steps: [
        "sudo apt update",
        "sudo apt install -y nodejs npm mongodb nginx",
        "npm install",
        "npm run build",
        "pm2 start server.js",
      ],
      problems: [
        { fr: "Configuration manuelle, longue et sujette aux erreurs", en: "Manual, lengthy, and error-prone setup" },
        { fr: "Dérive de l'environnement entre les serveurs", en: "Environment drift between servers" },
        { fr: "Provisionnement lent (heures vs secondes)", en: "Slow provisioning (hours vs seconds)" },
        { fr: "Conflits de dépendances entre applications", en: "Dependency conflicts between applications" },
        { fr: "Rollback difficile en cas d'erreur", en: "Hard rollback in case of error" },
        { fr: "Configuration spécifique au serveur", en: "Server-specific configuration" },
        { fr: "Difficulté de passage à l'échelle", en: "Difficult scaling" },
        { fr: "Environnement de production différent du développement", en: "Production environment differs from development" },
      ]
    },
    migrationSteps: [
      {
        step: 1,
        title: { fr: "Identifier le runtime", en: "Identify the runtime" },
        desc: {
          fr: "Déterminez le langage et la version nécessaires (Node.js 20, Python 3.11, etc.).",
          en: "Determine the required language and version (Node.js 20, Python 3.11, etc.)."
        }
      },
      {
        step: 2,
        title: { fr: "Identifier les dépendances", en: "Identify dependencies" },
        desc: {
          fr: "Listez toutes les dépendances système et applicatives (package.json, requirements.txt, etc.).",
          en: "List all system and application dependencies (package.json, requirements.txt, etc.)."
        }
      },
      {
        step: 3,
        title: { fr: "Créer un Dockerfile", en: "Create a Dockerfile" },
        desc: {
          fr: "Écrivez un Dockerfile qui reproduit l'environnement de la VM de façon automatisée.",
          en: "Write a Dockerfile that reproduces the VM environment in an automated way."
        }
      },
      {
        step: 4,
        title: { fr: "Construire l'image Docker", en: "Build the Docker image" },
        desc: {
          fr: "Utilisez 'docker build -t my-app .' pour créer l'image.",
          en: "Use 'docker build -t my-app .' to create the image."
        }
      },
      {
        step: 5,
        title: { fr: "Séparer les services en conteneurs", en: "Separate services into containers" },
        desc: {
          fr: "Au lieu de tout installer sur une seule VM, chaque service (app, base de données, cache) a son propre conteneur.",
          en: "Instead of installing everything on a single VM, each service (app, database, cache) has its own container."
        }
      },
      {
        step: 6,
        title: { fr: "Créer un fichier compose.yml", en: "Create a compose.yml file" },
        desc: {
          fr: "Définissez l'ensemble des services, réseaux et volumes dans un fichier compose.yml.",
          en: "Define all services, networks, and volumes in a compose.yml file."
        }
      },
      {
        step: 7,
        title: { fr: "Ajouter des volumes pour la persistance", en: "Add volumes for persistence" },
        desc: {
          fr: "Montez des volumes pour les bases de données et autres données qui doivent survivre aux redémarrages.",
          en: "Mount volumes for databases and other data that must survive restarts."
        }
      },
      {
        step: 8,
        title: { fr: "Ajouter des réseaux", en: "Add networks" },
        desc: {
          fr: "Créez un réseau dédié pour que les conteneurs communiquent via leurs noms de service.",
          en: "Create a dedicated network so containers communicate via their service names."
        }
      },
      {
        step: 9,
        title: { fr: "Ajouter des variables d'environnement", en: "Add environment variables" },
        desc: {
          fr: "Externalisez la configuration (URL de base de données, clés API) dans des variables d'environnement.",
          en: "Externalize configuration (database URL, API keys) into environment variables."
        }
      },
      {
        step: 10,
        title: { fr: "Exécuter et vérifier", en: "Run and verify" },
        desc: {
          fr: "Lancez 'docker compose up -d --build' et vérifiez que l'application fonctionne.",
          en: "Run 'docker compose up -d --build' and verify the application works."
        }
      }
    ],
    migrationLab: {
      title: { fr: "Lab pratique : Migration Node.js + MongoDB", en: "Practical Lab: Node.js + MongoDB Migration" },
      dockerfile: `FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["npm", "start"]`,
      compose: `services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - MONGO_URL=mongodb://mongo:27017/docker_course
    depends_on:
      - mongo
    networks:
      - app_network

  mongo:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db
    networks:
      - app_network

volumes:
  mongo_data:

networks:
  app_network:`,
      commands: [
        "docker compose up -d --build",
        "docker compose ps",
        "docker compose logs app",
        "docker compose logs mongo",
        "docker compose down",
      ],
      expected: {
        fr: "L'API est accessible sur http://localhost:3000, MongoDB tourne dans un conteneur séparé, les données persistent dans le volume mongo_data, et le projet est reproductible sur n'importe quelle machine.",
        en: "The API is accessible at http://localhost:3000, MongoDB runs in a separate container, data persists in the mongo_data volume, and the project is reproducible on any machine."
      }
    },
    beforeAfter: {
      before: {
        fr: "Avant Docker : VM avec configuration manuelle, app installée manuellement, MongoDB installé manuellement, variables d'environnement configurées manuellement, difficulté de reproduction.",
        en: "Before Docker: VM with manual setup, app installed manually, MongoDB installed manually, environment variables configured manually, difficult to reproduce."
      },
      after: {
        fr: "Après Docker : Conteneur app, conteneur mongo, réseau Docker, volume Docker, compose.yml, déploiement en une commande, environnement reproductible.",
        en: "After Docker: App container, mongo container, Docker network, Docker volume, compose.yml, one-command deployment, reproducible environment."
      }
    }
  }
};
