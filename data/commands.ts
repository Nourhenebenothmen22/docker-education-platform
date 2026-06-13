export interface CommandItem {
  cmd: string;
  explanation: { fr: string; en: string };
  example: string;
  whenToUse: { fr: string; en: string };
}

export interface CommandCategory {
  title: { fr: string; en: string };
  icon: string;
  items: CommandItem[];
}

export const commandsData: CommandCategory[] = [
  {
    title: { fr: "Commandes de Base", en: "Basic Commands" },
    icon: "Terminal",
    items: [
      {
        cmd: "docker --version",
        explanation: {
          fr: "Affiche le numéro de version de la CLI de Docker.",
          en: "Displays the version number of the Docker CLI."
        },
        example: "docker --version",
        whenToUse: {
          fr: "Pour vérifier si Docker est correctement installé sur votre système.",
          en: "To check if Docker is properly installed on your system."
        }
      },
      {
        cmd: "docker info",
        explanation: {
          fr: "Affiche des informations complètes sur le système et le daemon Docker (nombre de conteneurs, d'images, stockage utilisé, etc.).",
          en: "Displays comprehensive system-wide information about the Docker daemon (number of containers, images, storage driver, etc.)."
        },
        example: "docker info",
        whenToUse: {
          fr: "Pour diagnostiquer l'état général de votre environnement Docker ou analyser les ressources allouées.",
          en: "To diagnose the overall state of your Docker environment or inspect allocated resources."
        }
      },
      {
        cmd: "docker help",
        explanation: {
          fr: "Affiche l'aide globale de Docker ou l'aide d'une sous-commande spécifique.",
          en: "Displays global help instructions or help for a specific subcommand."
        },
        example: "docker run --help",
        whenToUse: {
          fr: "Pour retrouver la syntaxe exacte ou la liste des arguments acceptés par une commande.",
          en: "To find the exact syntax or list of arguments accepted by a command."
        }
      },
      {
        cmd: "docker run hello-world",
        explanation: {
          fr: "Télécharge et exécute un conteneur minimal de test qui affiche un message de confirmation.",
          en: "Downloads and runs a minimal test container that prints a confirmation message."
        },
        example: "docker run hello-world",
        whenToUse: {
          fr: "Pour valider que le moteur Docker communique correctement avec Docker Hub et exécute des conteneurs.",
          en: "To validate that the Docker engine successfully communicates with Docker Hub and runs containers."
        }
      }
    ]
  },
  {
    title: { fr: "Gestion des Images", en: "Image Management" },
    icon: "Layers",
    items: [
      {
        cmd: "docker images",
        explanation: {
          fr: "Liste toutes les images Docker téléchargées ou construites localement sur votre ordinateur.",
          en: "Lists all Docker images downloaded or built locally on your computer."
        },
        example: "docker images",
        whenToUse: {
          fr: "Pour voir les images disponibles sur votre hôte et connaître leur taille ou leur identifiant (ID).",
          en: "To see available images on your host and find out their size or unique identifier (ID)."
        }
      },
      {
        cmd: "docker pull <image>",
        explanation: {
          fr: "Télécharge une image depuis un registre distant (par défaut Docker Hub) sur votre machine locale, sans l'exécuter.",
          en: "Downloads an image from a remote registry (Docker Hub by default) to your local machine without running it."
        },
        example: "docker pull node:20-alpine",
        whenToUse: {
          fr: "Pour pré-télécharger une image lourde avant d'en avoir besoin afin de gagner du temps lors de l'exécution.",
          en: "To pre-download a heavy image before you need it to save time during deployment."
        }
      },
      {
        cmd: "docker rmi <image_id>",
        explanation: {
          fr: "Supprime une image locale stockée sur votre machine.",
          en: "Removes a local image stored on your machine."
        },
        example: "docker rmi f1243123ba",
        whenToUse: {
          fr: "Pour libérer de l'espace disque en effaçant des versions d'images obsolètes ou inutilisées.",
          en: "To free up disk space by deleting obsolete or unused image versions."
        }
      },
      {
        cmd: "docker build -t <nom_image> .",
        explanation: {
          fr: "Construit une image personnalisée à partir des instructions écrites dans un Dockerfile.",
          en: "Builds a custom image based on the instructions written in a Dockerfile."
        },
        example: "docker build -t mon-application:1.0 .",
        whenToUse: {
          fr: "Lorsque vous avez écrit un Dockerfile pour conteneuriser votre propre code source.",
          en: "When you have written a Dockerfile to containerize your own source code."
        }
      },
      {
        cmd: "docker tag <image_source> <nouveau_nom>",
        explanation: {
          fr: "Crée un alias (étiquette/tag) pointant vers une image existante. Permet de la versionner ou de la préparer pour un registre.",
          en: "Creates an alias (label/tag) pointing to an existing image. Helps with versioning or registry preparation."
        },
        example: "docker tag mon-application:1.0 mon-username/mon-application:latest",
        whenToUse: {
          fr: "Pour renommer une image avec le préfixe de votre compte Docker Hub avant de la publier.",
          en: "To rename an image with your Docker Hub account prefix before publishing it."
        }
      },
      {
        cmd: "docker push <image>",
        explanation: {
          fr: "Envoie une image taguée locale vers un registre distant (Docker Hub, AWS ECR, etc.) pour qu'elle y soit stockée et partagée.",
          en: "Uploads a tagged local image to a remote registry (Docker Hub, AWS ECR, etc.) to store and share it."
        },
        example: "docker push mon-username/mon-application:latest",
        whenToUse: {
          fr: "Pour partager votre image avec vos collègues ou la rendre accessible au serveur de production.",
          en: "To share your image with colleagues or make it accessible to your production server."
        }
      }
    ]
  },
  {
    title: { fr: "Gestion des Conteneurs", en: "Container Management" },
    icon: "Play",
    items: [
      {
        cmd: "docker ps",
        explanation: {
          fr: "Affiche la liste de tous les conteneurs en cours d'exécution active.",
          en: "Displays the list of all currently active running containers."
        },
        example: "docker ps",
        whenToUse: {
          fr: "Pour vérifier quels services tournent actuellement, voir leurs ports mappés et leurs noms.",
          en: "To verify which services are currently running, inspect their mapped ports and names."
        }
      },
      {
        cmd: "docker ps -a",
        explanation: {
          fr: "Affiche tous les conteneurs locaux, qu'ils soient en cours d'exécution, arrêtés ou en erreur.",
          en: "Displays all local containers, whether they are running, stopped, or failed."
        },
        example: "docker ps -a",
        whenToUse: {
          fr: "Pour retrouver un conteneur qui s'est arrêté accidentellement et analyser son code de sortie.",
          en: "To find a container that exited unexpectedly and analyze its exit code."
        }
      },
      {
        cmd: "docker run <options> <image>",
        explanation: {
          fr: "Crée et démarre un nouveau conteneur basé sur l'image spécifiée. Combine 'create' et 'start'.",
          en: "Creates and starts a new container based on the specified image. Combines 'create' and 'start'."
        },
        example: "docker run nginx",
        whenToUse: {
          fr: "C'est la commande principale pour instancier un nouveau service à partir d'une image.",
          en: "This is the primary command to instantiate a new service from an image."
        }
      },
      {
        cmd: "docker start <conteneur>",
        explanation: {
          fr: "Redémarre un conteneur existant qui a été préalablement arrêté.",
          en: "Restarts an existing container that was previously stopped."
        },
        example: "docker start mon-conteneur",
        whenToUse: {
          fr: "Pour relancer un conteneur arrêté sans avoir à en recréer un nouveau vierge.",
          en: "To wake up a stopped container without having to spin up a brand new empty one."
        }
      },
      {
        cmd: "docker stop <conteneur>",
        explanation: {
          fr: "Arrête proprement un conteneur actif en lui envoyant un signal SIGTERM puis SIGKILL.",
          en: "Gracefully stops an active container by sending a SIGTERM signal, followed by SIGKILL."
        },
        example: "docker stop mon-conteneur",
        whenToUse: {
          fr: "Lorsque vous avez terminé d'utiliser un service et souhaitez libérer des ressources CPU/RAM.",
          en: "When you are done using a service and want to free up CPU/RAM resources."
        }
      },
      {
        cmd: "docker restart <conteneur>",
        explanation: {
          fr: "Arrête puis redémarre immédiatement le conteneur spécifié.",
          en: "Stops and immediately restarts the specified container."
        },
        example: "docker restart mon-conteneur",
        whenToUse: {
          fr: "Utile après une modification de configuration ou pour réinitialiser un service instable.",
          en: "Useful after a configuration change or to reset an unstable service."
        }
      },
      {
        cmd: "docker rm <conteneur>",
        explanation: {
          fr: "Supprime définitivement un conteneur arrêté de votre système.",
          en: "Permanently deletes a stopped container from your system."
        },
        example: "docker rm mon-conteneur",
        whenToUse: {
          fr: "Pour faire le ménage et éviter d'accumuler de vieux conteneurs inactifs sur votre hôte.",
          en: "To tidy up and prevent accumulating old, inactive containers on your host."
        }
      },
      {
        cmd: "docker exec <conteneur> <commande>",
        explanation: {
          fr: "Exécute une commande système à l'intérieur d'un conteneur déjà en cours d'exécution.",
          en: "Executes a system command inside an already running container."
        },
        example: "docker exec mon-api node -v",
        whenToUse: {
          fr: "Pour lancer des tests rapides ou des vérifications système sans ouvrir de shell interactif.",
          en: "To run quick tests or system checks without opening an interactive shell."
        }
      },
      {
        cmd: "docker logs <conteneur>",
        explanation: {
          fr: "Affiche la sortie standard (logs/console) générée par l'application s'exécutant dans le conteneur.",
          en: "Displays the standard output (console logs) generated by the application running inside the container."
        },
        example: "docker logs -f mon-api",
        whenToUse: {
          fr: "Pour débugger une application, voir ses plantages ou surveiller les requêtes en temps réel avec le flag `-f`.",
          en: "To debug an application, view crash logs, or monitor requests in real time using the `-f` flag."
        }
      },
      {
        cmd: "docker inspect <conteneur_ou_image>",
        explanation: {
          fr: "Retourne des informations de bas niveau au format JSON sur le conteneur ou l'image (adresses IP, ports, volumes).",
          en: "Returns low-level JSON details about the container or image (IP addresses, ports, volumes)."
        },
        example: "docker inspect mon-conteneur",
        whenToUse: {
          fr: "Pour retrouver la configuration réseau exacte, les montages ou les variables d'environnement affectées.",
          en: "To find the exact network setup, mount configuration, or assigned environment variables."
        }
      }
    ]
  },
  {
    title: { fr: "Modes Détaché et Interactif", en: "Detached and Interactive Modes" },
    icon: "MonitorPlay",
    items: [
      {
        cmd: "docker run -d <image>",
        explanation: {
          fr: "Exécute le conteneur en arrière-plan (mode détaché / daemon) et rend la main au terminal hôte immédiatement.",
          en: "Runs the container in the background (detached / daemon mode) and returns control to your host terminal immediately."
        },
        example: "docker run -d nginx",
        whenToUse: {
          fr: "Pour démarrer des serveurs web ou des bases de données qui doivent tourner en continu en tâche de fond.",
          en: "To start web servers or databases that need to run continuously in the background."
        }
      },
      {
        cmd: "docker run -it <image> <shell>",
        explanation: {
          fr: "Démarre le conteneur en allouant un terminal virtuel (tty) et maintient l'entrée standard ouverte pour permettre l'interaction.",
          en: "Starts the container, allocating a virtual terminal (tty) and keeping standard input open to allow interaction."
        },
        example: "docker run -it ubuntu /bin/bash",
        whenToUse: {
          fr: "Pour entrer dans un conteneur vierge de test et y taper des commandes Linux directement.",
          en: "To log into a clean test container and type Linux commands directly inside it."
        }
      },
      {
        cmd: "docker exec -it <conteneur> <shell>",
        explanation: {
          fr: "Ouvre une session de terminal interactive dans un conteneur qui est DÉJÀ en cours d'exécution.",
          en: "Opens an interactive terminal session inside a container that is ALREADY running."
        },
        example: "docker exec -it mon-app-web sh",
        whenToUse: {
          fr: "Pour inspecter le système de fichiers ou tester des connexions de base de données en direct sur un conteneur actif.",
          en: "To inspect the file system or test live database connections inside an active container."
        }
      }
    ]
  },
  {
    title: { fr: "Mappage de Ports", en: "Port Mapping" },
    icon: "Network",
    items: [
      {
        cmd: "docker run -p <port_hote>:<port_conteneur>",
        explanation: {
          fr: "Lie un port réseau de votre machine hôte physique à un port exposé par le conteneur.",
          en: "Binds a network port from your physical host machine to a port exposed by the container."
        },
        example: "docker run -p 8080:80 nginx",
        whenToUse: {
          fr: "Pour pouvoir visiter votre application depuis votre navigateur hôte (ex: http://localhost:8080).",
          en: "To be able to visit your application from your host browser (e.g. http://localhost:8080)."
        }
      }
    ]
  },
  {
    title: { fr: "Gestion des Volumes", en: "Volume Management" },
    icon: "HardDrive",
    items: [
      {
        cmd: "docker volume ls",
        explanation: {
          fr: "Liste tous les volumes persistants gérés par Docker sur la machine hôte.",
          en: "Lists all persistent volumes managed by Docker on the host machine."
        },
        example: "docker volume ls",
        whenToUse: {
          fr: "Pour voir les volumes existants et s'assurer que les données de vos bases de données sont conservées.",
          en: "To view existing volumes and ensure your database storage drives are preserved."
        }
      },
      {
        cmd: "docker volume create <nom>",
        explanation: {
          fr: "Crée manuellement un nouveau volume nommé autonome pour la persistance des données.",
          en: "Manually creates a new named volume for data persistence."
        },
        example: "docker volume create db-data",
        whenToUse: {
          fr: "Avant de lancer un conteneur de base de données pour préparer l'espace de stockage persistant.",
          en: "Before starting a database container to prepare the persistent storage space."
        }
      },
      {
        cmd: "docker volume inspect <nom>",
        explanation: {
          fr: "Affiche les détails d'un volume, notamment son point de montage réel sur le disque dur de la machine hôte.",
          en: "Displays details about a volume, including its actual mount path on the host machine's disk."
        },
        example: "docker volume inspect db-data",
        whenToUse: {
          fr: "Pour localiser physiquement où Docker stocke les fichiers de ce volume sur votre disque dur.",
          en: "To locate physically where Docker stores the files of this volume on your hard drive."
        }
      },
      {
        cmd: "docker volume rm <nom>",
        explanation: {
          fr: "Supprime définitivement un volume et toutes les données qu'il contient.",
          en: "Permanently deletes a volume and all the data it contains."
        },
        example: "docker volume rm db-data",
        whenToUse: {
          fr: "Pour effacer de vieilles données de test devenues inutiles et récupérer de l'espace.",
          en: "To erase old, useless test data and free up disk space."
        }
      },
      {
        cmd: "docker run -v <nom_volume>:<chemin_conteneur>",
        explanation: {
          fr: "Monte un volume nommé ou un dossier de l'hôte (bind mount) dans un dossier interne du conteneur.",
          en: "Mounts a named volume or a host directory (bind mount) into an internal folder inside the container."
        },
        example: "docker run -d -v db-data:/data/db mongo",
        whenToUse: {
          fr: "Pour garantir que les fichiers créés par le conteneur ne soient pas effacés lors de son arrêt.",
          en: "To guarantee that files created by the container are not wiped out when the container stops."
        }
      }
    ]
  },
  {
    title: { fr: "Gestion des Réseaux", en: "Network Management" },
    icon: "Radio",
    items: [
      {
        cmd: "docker network ls",
        explanation: {
          fr: "Liste tous les réseaux virtuels créés par Docker sur votre hôte.",
          en: "Lists all virtual networks created by Docker on your host."
        },
        example: "docker network ls",
        whenToUse: {
          fr: "Pour visualiser les réseaux disponibles (bridge, host, none) et vérifier que vos applications sont isolées.",
          en: "To view available networks (bridge, host, none) and check that your apps are isolated."
        }
      },
      {
        cmd: "docker network create <nom>",
        explanation: {
          fr: "Crée un nouveau réseau virtuel (généralement de type 'bridge') permettant aux conteneurs de communiquer entre eux.",
          en: "Creates a new virtual network (typically 'bridge' type) enabling containers to communicate with each other."
        },
        example: "docker network create mon-reseau-app",
        whenToUse: {
          fr: "Pour créer un canal sécurisé où votre API et votre base de données peuvent discuter sans être visibles du web.",
          en: "To create a secure channel where your API and database can talk without being exposed to the web."
        }
      },
      {
        cmd: "docker network inspect <nom>",
        explanation: {
          fr: "Affiche les détails d'un réseau, y compris la liste des conteneurs qui y sont connectés avec leurs adresses IP.",
          en: "Displays network details, including the list of connected containers and their IP addresses."
        },
        example: "docker network inspect mon-reseau-app",
        whenToUse: {
          fr: "Pour diagnostiquer des problèmes de communication réseau entre vos conteneurs.",
          en: "To diagnose network communication issues between your containers."
        }
      },
      {
        cmd: "docker network rm <nom>",
        explanation: {
          fr: "Supprime un réseau virtuel inutilisé.",
          en: "Removes an unused virtual network."
        },
        example: "docker network rm mon-reseau-app",
        whenToUse: {
          fr: "Pour nettoyer votre configuration réseau après la suppression d'un projet.",
          en: "To clean up your network setup after removing a project."
        }
      }
    ]
  },
  {
    title: { fr: "Docker Compose", en: "Docker Compose Commands" },
    icon: "FileCode",
    items: [
      {
        cmd: "docker compose up",
        explanation: {
          fr: "Lit le fichier compose.yml, télécharge/construit les images nécessaires, configure le réseau et démarre tous les services.",
          en: "Reads the compose.yml file, downloads/builds required images, configures networks, and starts all services."
        },
        example: "docker compose up",
        whenToUse: {
          fr: "Pour lancer l'intégralité de votre architecture multi-conteneurs d'un seul coup en voyant les logs.",
          en: "To start your entire multi-container architecture in one go while viewing live logs."
        }
      },
      {
        cmd: "docker compose up -d",
        explanation: {
          fr: "Démarre tous les services définis dans le compose.yml en arrière-plan (mode détaché).",
          en: "Starts all services defined in compose.yml in the background (detached mode)."
        },
        example: "docker compose up -d",
        whenToUse: {
          fr: "Pour lancer votre environnement local et libérer immédiatement votre terminal pour d'autres tâches.",
          en: "To launch your local environment and free up your terminal for other tasks."
        }
      },
      {
        cmd: "docker compose down",
        explanation: {
          fr: "Arrête et supprime tous les conteneurs, réseaux et volumes (optionnel) créés par 'docker compose up'.",
          en: "Stops and removes all containers, networks, and volumes (optional) created by 'docker compose up'."
        },
        example: "docker compose down",
        whenToUse: {
          fr: "Pour stopper complètement votre environnement de travail local et libérer de la mémoire système.",
          en: "To completely stop your local workspace environment and clean up system memory."
        }
      },
      {
        cmd: "docker compose ps",
        explanation: {
          fr: "Liste l'état des conteneurs gérés par le fichier compose de ce dossier.",
          en: "Lists the state of the containers managed by the compose file in this folder."
        },
        example: "docker compose ps",
        whenToUse: {
          fr: "Pour vérifier rapidement quels services de votre stack locale sont actifs ou en erreur.",
          en: "To quickly verify which services of your local stack are active or in a failed state."
        }
      },
      {
        cmd: "docker compose logs",
        explanation: {
          fr: "Affiche et regroupe les flux de logs de l'ensemble des services en cours d'exécution.",
          en: "Displays and aggregates the log streams of all running services."
        },
        example: "docker compose logs -f app",
        whenToUse: {
          fr: "Pour débugger ou observer le comportement de plusieurs services connectés en même temps.",
          en: "To debug or observe the behavior of multiple connected services at the same time."
        }
      },
      {
        cmd: "docker compose build",
        explanation: {
          fr: "Re-déclenche la construction des images personnalisées définies dans le compose.yml.",
          en: "Triggers the rebuild of custom images defined in the compose.yml."
        },
        example: "docker compose build",
        whenToUse: {
          fr: "Après avoir modifié votre code source ou vos configurations Dockerfile afin de mettre à jour la stack Compose.",
          en: "After modifying your source code or Dockerfile configurations to update the Compose stack."
        }
      }
    ]
  },
  {
    title: { fr: "Nettoyage du Système", en: "System Cleanup" },
    icon: "Trash2",
    items: [
      {
        cmd: "docker system df",
        explanation: {
          fr: "Affiche l'utilisation globale du disque dur par Docker (images, conteneurs actifs, volumes).",
          en: "Displays overall disk space usage by Docker (images, active containers, volumes)."
        },
        example: "docker system df",
        whenToUse: {
          fr: "Pour analyser l'impact du stockage de Docker sur votre disque et planifier un nettoyage.",
          en: "To analyze Docker's storage impact on your drive and plan a cleanup."
        }
      },
      {
        cmd: "docker system prune",
        explanation: {
          fr: "Supprime tous les conteneurs arrêtés, réseaux inutilisés, images orphelines et volumes non associés.",
          en: "Deletes all stopped containers, unused networks, dangling images, and unassociated volumes."
        },
        example: "docker system prune -a --volumes",
        whenToUse: {
          fr: "Lorsque vous manquez de place et souhaitez purger TOUS les éléments inactifs accumulés.",
          en: "When you run low on disk space and want to purge ALL inactive elements."
        }
      },
      {
        cmd: "docker image prune",
        explanation: {
          fr: "Supprime uniquement les images locales dites 'orphelines' (dangling), qui n'ont plus de tag.",
          en: "Removes only local 'dangling' images that no longer have a tag."
        },
        example: "docker image prune",
        whenToUse: {
          fr: "Pour faire un ménage ciblé sur les résidus de builds d'images ratés ou obsolètes.",
          en: "To perform a targeted clean-up of remnants from failed or outdated image builds."
        }
      },
      {
        cmd: "docker container prune",
        explanation: {
          fr: "Supprime tous les conteneurs arrêtés sur la machine.",
          en: "Deletes all stopped containers on the machine."
        },
        example: "docker container prune",
        whenToUse: {
          fr: "Pour vider l'historique des vieux lancements de conteneurs ponctuels.",
          en: "To empty the run history of old, single-use container launches."
        }
      },
      {
        cmd: "docker volume prune",
        explanation: {
          fr: "Supprime tous les volumes de stockage inutilisés par au moins un conteneur.",
          en: "Deletes all storage volumes that are not used by at least one container."
        },
        example: "docker volume prune",
        whenToUse: {
          fr: "Pour faire le ménage des bases de données ou fichiers temporaires dont les conteneurs ont été détruits.",
          en: "To wipe out old databases or temporary files whose containers have been destroyed."
        }
      }
    ]
  }
];
