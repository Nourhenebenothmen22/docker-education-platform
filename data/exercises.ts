export interface Exercise {
  id: number;
  title: { fr: string; en: string };
  objective: { fr: string; en: string };
  instructions: { fr: string; en: string };
  hasSolution: boolean;
  solution?: string;
  solutionExplanation?: { fr: string; en: string };
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const exercises: Exercise[] = [
  {
    id: 1,
    title: { fr: "Exercice 1 : Premier conteneur", en: "Exercise 1: First Container" },
    objective: {
      fr: "Exécuter votre tout premier conteneur Docker de test.",
      en: "Run your very first Docker test container."
    },
    instructions: {
      fr: "Lancez le conteneur 'hello-world' fourni par Docker pour vérifier que votre installation fonctionne correctement.",
      en: "Run the 'hello-world' container provided by Docker to verify that your installation works correctly."
    },
    hasSolution: true,
    solution: "docker run hello-world",
    solutionExplanation: {
      fr: "Docker télécharge automatiquement l'image 'hello-world' depuis Docker Hub si elle n'est pas présente localement, crée un conteneur éphémère, exécute le script de bienvenue, puis arrête et supprime le conteneur. Si vous voyez le message 'Hello from Docker!', votre installation est parfaite.",
      en: "Docker automatically downloads the 'hello-world' image from Docker Hub if not present locally, creates an ephemeral container, runs the welcome script, then stops and removes the container. If you see the 'Hello from Docker!' message, your installation is perfect."
    },
    difficulty: 'beginner'
  },
  {
    id: 2,
    title: { fr: "Exercice 2 : Télécharger une image", en: "Exercise 2: Download an Image" },
    objective: {
      fr: "Télécharger l'image officielle de Nginx depuis Docker Hub sans l'exécuter.",
      en: "Download the official Nginx image from Docker Hub without running it."
    },
    instructions: {
      fr: "Utilisez la commande appropriée pour télécharger (pull) l'image nginx sur votre machine locale. Vérifiez ensuite qu'elle est bien présente dans votre liste d'images.",
      en: "Use the appropriate command to download (pull) the nginx image to your local machine. Then verify it appears in your image list."
    },
    hasSolution: true,
    solution: "docker pull nginx",
    solutionExplanation: {
      fr: "La commande 'docker pull' télécharge l'image depuis Docker Hub sans créer de conteneur. Par défaut, elle télécharge la version 'latest'. Pour une version spécifique, on utilise 'docker pull nginx:1.25'. Vérifiez avec 'docker images' que l'image nginx apparaît bien dans la liste.",
      en: "The 'docker pull' command downloads the image from Docker Hub without creating a container. By default, it downloads the 'latest' version. For a specific version, use 'docker pull nginx:1.25'. Verify with 'docker images' that the nginx image appears in the list."
    },
    difficulty: 'beginner'
  },
  {
    id: 3,
    title: { fr: "Exercice 3 : Serveur Web sur le port 8080", en: "Exercise 3: Web Server on Port 8080" },
    objective: {
      fr: "Lancer un serveur web Nginx accessible depuis votre navigateur sur le port 8080.",
      en: "Run an Nginx web server accessible from your browser on port 8080."
    },
    instructions: {
      fr: "Lancez un conteneur nginx en arrière-plan et mappez le port 8080 de votre machine locale vers le port 80 du conteneur. Ouvrez ensuite http://localhost:8080 dans votre navigateur.",
      en: "Launch an nginx container in the background and map port 8080 of your local machine to port 80 of the container. Then open http://localhost:8080 in your browser."
    },
    hasSolution: true,
    solution: "docker run -d -p 8080:80 nginx",
    solutionExplanation: {
      fr: "Le flag '-d' (detached) lance le conteneur en arrière-plan. Le flag '-p 8080:80' signifie : 'le port 8080 de MON ordinateur pointe vers le port 80 DU CONTENEUR'. Nginx écoute par défaut sur le port 80. Ouvrez http://localhost:8080 pour voir la page de bienvenue d'Nginx.",
      en: "The '-d' (detached) flag runs the container in the background. The '-p 8080:80' flag means: 'port 8080 on MY machine points to port 80 INSIDE THE CONTAINER'. Nginx listens on port 80 by default. Open http://localhost:8080 to see the Nginx welcome page."
    },
    difficulty: 'beginner'
  },
  {
    id: 4,
    title: { fr: "Exercice 4 : Lister les conteneurs actifs", en: "Exercise 4: List Active Containers" },
    objective: {
      fr: "Afficher la liste des conteneurs actuellement en cours d'exécution.",
      en: "Display the list of currently running containers."
    },
    instructions: {
      fr: "Affichez uniquement les conteneurs qui sont en ce moment actifs sur votre machine. Notez leur ID, nom et le port mappé.",
      en: "Display only the containers that are currently active on your machine. Note their ID, name, and mapped port."
    },
    hasSolution: true,
    solution: "docker ps",
    solutionExplanation: {
      fr: "'docker ps' (Process Status) affiche un tableau avec les colonnes : CONTAINER ID, IMAGE, COMMAND, CREATED, STATUS, PORTS, NAMES. Contrairement à 'docker ps -a', il ne montre que les conteneurs dans l'état 'Up', c'est-à-dire activement en cours d'exécution.",
      en: "'docker ps' (Process Status) displays a table with columns: CONTAINER ID, IMAGE, COMMAND, CREATED, STATUS, PORTS, NAMES. Unlike 'docker ps -a', it only shows containers in 'Up' state, meaning actively running."
    },
    difficulty: 'beginner'
  },
  {
    id: 5,
    title: { fr: "Exercice 5 : Lister TOUS les conteneurs", en: "Exercise 5: List ALL Containers" },
    objective: {
      fr: "Afficher tous les conteneurs, y compris ceux qui sont arrêtés ou qui ont planté.",
      en: "Display all containers, including those that are stopped or crashed."
    },
    instructions: {
      fr: "Utilisez la commande qui permet de voir l'historique complet des conteneurs sur votre machine, qu'ils soient actifs, arrêtés ou en erreur.",
      en: "Use the command that shows the complete container history on your machine, whether they are active, stopped, or failed."
    },
    hasSolution: true,
    solution: "docker ps -a",
    solutionExplanation: {
      fr: "Le flag '-a' (all) de 'docker ps' inclut tous les conteneurs dans la liste, peu importe leur statut. Vous verrez des statuts comme 'Up' (actif), 'Exited (0)' (arrêté proprement), 'Exited (1)' (erreur). Les conteneurs 'Exited' consomment encore de l'espace disque et doivent être supprimés avec 'docker rm'.",
      en: "The '-a' (all) flag of 'docker ps' includes all containers in the list regardless of their status. You will see statuses like 'Up' (active), 'Exited (0)' (cleanly stopped), 'Exited (1)' (error). 'Exited' containers still consume disk space and should be removed with 'docker rm'."
    },
    difficulty: 'beginner'
  },
  {
    id: 6,
    title: { fr: "Exercice 6 : Arrêter un conteneur", en: "Exercise 6: Stop a Container" },
    objective: {
      fr: "Arrêter proprement un conteneur en cours d'exécution.",
      en: "Gracefully stop a running container."
    },
    instructions: {
      fr: "Arrêtez le conteneur nginx que vous avez lancé précédemment. Utilisez son nom ou son ID (visible avec 'docker ps').",
      en: "Stop the nginx container you launched earlier. Use its name or ID (visible with 'docker ps')."
    },
    hasSolution: true,
    solution: "docker stop <container_name_or_id>",
    solutionExplanation: {
      fr: "La commande 'docker stop' envoie d'abord un signal SIGTERM au processus principal du conteneur pour lui permettre une terminaison gracieuse (ex: fermer les connexions). Si le conteneur ne s'arrête pas dans les 10 secondes, Docker envoie un signal SIGKILL forcé. Remplacez '<container_name_or_id>' par la valeur réelle vue dans 'docker ps'.",
      en: "The 'docker stop' command first sends a SIGTERM signal to the container's main process to allow graceful termination (e.g. closing connections). If the container doesn't stop within 10 seconds, Docker sends a forced SIGKILL signal. Replace '<container_name_or_id>' with the actual value seen in 'docker ps'."
    },
    difficulty: 'beginner'
  },
  {
    id: 7,
    title: { fr: "Exercice 7 : Supprimer un conteneur", en: "Exercise 7: Remove a Container" },
    objective: {
      fr: "Supprimer un conteneur arrêté pour libérer de l'espace disque.",
      en: "Remove a stopped container to free up disk space."
    },
    instructions: {
      fr: "Supprimez le conteneur nginx arrêté. Vérifiez ensuite avec 'docker ps -a' qu'il n'apparaît plus dans la liste.",
      en: "Remove the stopped nginx container. Then verify with 'docker ps -a' that it no longer appears in the list."
    },
    hasSolution: true,
    solution: "docker rm <container_name_or_id>",
    solutionExplanation: {
      fr: "'docker rm' supprime définitivement un conteneur arrêté. Si le conteneur est encore en cours d'exécution, Docker refuse la suppression (il faut d'abord l'arrêter ou utiliser 'docker rm -f' pour forcer). Pour supprimer tous les conteneurs arrêtés en une seule commande, utilisez 'docker container prune'.",
      en: "'docker rm' permanently removes a stopped container. If the container is still running, Docker refuses removal (you must first stop it or use 'docker rm -f' to force it). To remove all stopped containers in one command, use 'docker container prune'."
    },
    difficulty: 'beginner'
  },
  {
    id: 8,
    title: { fr: "Exercice 8 : Créer un Dockerfile Node.js", en: "Exercise 8: Create a Node.js Dockerfile" },
    objective: {
      fr: "Écrire un Dockerfile complet pour containeriser une application Node.js Express simple.",
      en: "Write a complete Dockerfile to containerize a simple Node.js Express application."
    },
    instructions: {
      fr: "Créez un fichier 'index.js' contenant un serveur Express simple qui retourne 'Bonjour Docker!'. Puis créez un fichier 'package.json' et enfin un Dockerfile valide pour cette application. L'application doit écouter sur le port 3000.",
      en: "Create an 'index.js' file containing a simple Express server that returns 'Hello Docker!'. Then create a 'package.json' file and finally a valid Dockerfile for this application. The app should listen on port 3000."
    },
    hasSolution: true,
    solution: `# index.js
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Bonjour Docker! / Hello Docker!'));
app.listen(3000, () => console.log('Running on port 3000'));

# package.json
{
  "name": "docker-app",
  "version": "1.0.0",
  "dependencies": { "express": "^4.19.2" },
  "scripts": { "start": "node index.js" }
}

# Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]`,
    solutionExplanation: {
      fr: "Ce Dockerfile utilise l'image Alpine de Node.js 20 pour avoir une base légère. L'ordre des instructions est optimisé pour le cache Docker: on copie et installe d'abord les dépendances (qui changent rarement), puis on copie le code source. Ainsi, si seul le code change, Docker n'a pas besoin de réexécuter 'npm install'.",
      en: "This Dockerfile uses the Alpine Node.js 20 image for a lightweight base. The instruction order is cache-optimized: dependencies are copied and installed first (they rarely change), then the source code is copied. This way, if only the code changes, Docker doesn't need to re-run 'npm install'."
    },
    difficulty: 'intermediate'
  },
  {
    id: 9,
    title: { fr: "Exercice 9 : Construire une image Docker", en: "Exercise 9: Build a Docker Image" },
    objective: {
      fr: "Utiliser le Dockerfile créé pour construire une image Docker nommée et taguée.",
      en: "Use the Dockerfile created to build a named and tagged Docker image."
    },
    instructions: {
      fr: "Depuis le dossier contenant votre Dockerfile, construisez une image Docker nommée 'my-node-app'. Vérifiez ensuite que l'image apparaît bien dans la liste des images locales.",
      en: "From the folder containing your Dockerfile, build a Docker image named 'my-node-app'. Then verify that the image appears in the local images list."
    },
    hasSolution: true,
    solution: "docker build -t my-node-app .",
    solutionExplanation: {
      fr: "Le flag '-t' (tag) définit le nom (et optionnellement la version) de l'image. Le point '.' en fin de commande indique à Docker d'utiliser le répertoire courant comme contexte de build (il y cherche le Dockerfile). Après cette commande, vérifiez avec 'docker images' que 'my-node-app:latest' apparaît dans la liste.",
      en: "The '-t' (tag) flag defines the name (and optionally the version) of the image. The dot '.' at the end tells Docker to use the current directory as the build context (it looks for the Dockerfile there). After this command, verify with 'docker images' that 'my-node-app:latest' appears in the list."
    },
    difficulty: 'intermediate'
  },
  {
    id: 10,
    title: { fr: "Exercice 10 : Lancer l'image personnalisée", en: "Exercise 10: Run the Custom Image" },
    objective: {
      fr: "Démarrer un conteneur à partir de l'image personnalisée que vous venez de construire.",
      en: "Start a container from the custom image you just built."
    },
    instructions: {
      fr: "Lancez votre image 'my-node-app' en arrière-plan et mappez le port 3000 de l'hôte vers le port 3000 du conteneur. Visitez ensuite http://localhost:3000 pour vérifier.",
      en: "Run your 'my-node-app' image in the background and map host port 3000 to container port 3000. Then visit http://localhost:3000 to verify."
    },
    hasSolution: true,
    solution: "docker run -d -p 3000:3000 my-node-app",
    solutionExplanation: {
      fr: "Docker utilise votre image locale 'my-node-app' (pas besoin de télécharger depuis Docker Hub). Les flags '-d' et '-p 3000:3000' fonctionnent comme vu précédemment. Si le navigateur affiche 'Bonjour Docker!', félicitations : vous venez de conteneuriser et déployer votre première application Node.js !",
      en: "Docker uses your local 'my-node-app' image (no download from Docker Hub needed). The '-d' and '-p 3000:3000' flags work as seen before. If the browser shows 'Hello Docker!', congratulations: you just containerized and deployed your first Node.js application!"
    },
    difficulty: 'intermediate'
  },
  {
    id: 11,
    title: { fr: "Exercice 11 : Fichier Docker Compose complet", en: "Exercise 11: Complete Docker Compose File" },
    objective: {
      fr: "Créer un fichier compose.yml orchestrant une application Node.js et une base de données MongoDB.",
      en: "Create a compose.yml file orchestrating a Node.js application and a MongoDB database."
    },
    instructions: {
      fr: "Créez un fichier 'compose.yml' qui définit deux services : 'app' (construite depuis votre Dockerfile, port 3000) et 'mongo' (image officielle MongoDB, port 27017). Le service 'app' doit dépendre de 'mongo'.",
      en: "Create a 'compose.yml' file that defines two services: 'app' (built from your Dockerfile, port 3000) and 'mongo' (official MongoDB image, port 27017). The 'app' service must depend on 'mongo'."
    },
    hasSolution: true,
    solution: `services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - MONGO_URL=mongodb://mongo:27017/mydb
    depends_on:
      - mongo
    restart: unless-stopped

  mongo:
    image: mongo:7
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:`,
    solutionExplanation: {
      fr: "Ce fichier compose.yml orchestre 2 services. La variable 'MONGO_URL' permet à l'app de rejoindre MongoDB via son nom de service (résolution DNS automatique de Docker Compose). Le volume 'mongo-data' préserve les données MongoDB même si le conteneur est supprimé. 'restart: unless-stopped' redémarre l'app si elle plante.",
      en: "This compose.yml file orchestrates 2 services. The 'MONGO_URL' variable allows the app to reach MongoDB by its service name (Docker Compose automatic DNS resolution). The 'mongo-data' volume preserves MongoDB data even if the container is deleted. 'restart: unless-stopped' restarts the app if it crashes."
    },
    difficulty: 'intermediate'
  },
  {
    id: 12,
    title: { fr: "Exercice 12 : Démarrer avec Docker Compose", en: "Exercise 12: Start with Docker Compose" },
    objective: {
      fr: "Lancer votre stack Docker Compose complète en arrière-plan.",
      en: "Start your complete Docker Compose stack in the background."
    },
    instructions: {
      fr: "Depuis le dossier contenant votre compose.yml, démarrez l'ensemble de la stack (app + mongo) en mode détaché. Vérifiez ensuite l'état des services avec la commande Compose appropriée.",
      en: "From the folder containing your compose.yml, start the entire stack (app + mongo) in detached mode. Then check the status of the services with the appropriate Compose command."
    },
    hasSolution: true,
    solution: `docker compose up -d
docker compose ps`,
    solutionExplanation: {
      fr: "'docker compose up -d' lance tous les services définis en arrière-plan dans l'ordre des dépendances (mongo en premier, puis app). 'docker compose ps' affiche l'état de chaque service. Pour voir les logs en temps réel, utilisez 'docker compose logs -f'. Pour tout arrêter proprement, utilisez 'docker compose down'.",
      en: "'docker compose up -d' starts all defined services in the background in dependency order (mongo first, then app). 'docker compose ps' shows the state of each service. To see real-time logs, use 'docker compose logs -f'. To cleanly stop everything, use 'docker compose down'."
    },
    difficulty: 'intermediate'
  },
  {
    id: 13,
    title: { fr: "Lab 13 : Dockerfile avec .dockerignore", en: "Lab 13: Dockerfile with .dockerignore" },
    objective: {
      fr: "Optimiser un Dockerfile existant en ajoutant un fichier .dockerignore pour réduire le contexte de build.",
      en: "Optimize an existing Dockerfile by adding a .dockerignore file to reduce the build context."
    },
    instructions: {
      fr: "Créez un fichier .dockerignore qui exclut node_modules, .env, .git et les fichiers de log. Ensuite, construisez une image avec 'docker build -t optimized-app .' et vérifiez la réduction de taille avec 'docker images'.",
      en: "Create a .dockerignore file that excludes node_modules, .env, .git and log files. Then build an image with 'docker build -t optimized-app .' and verify the size reduction with 'docker images'."
    },
    hasSolution: true,
    solution: `# .dockerignore
node_modules
.env
.git
*.log
npm-debug.log*
.DS_Store

# Build the image
docker build -t optimized-app .`,
    solutionExplanation: {
      fr: "Le fichier .dockerignore empêche Docker d'envoyer les dossiers inutiles (node_modules, .git) au daemon lors du build. Cela réduit le contexte de build, accélère la construction et évite d'écraser les dépendances installées dans l'image.",
      en: "The .dockerignore file prevents Docker from sending unnecessary folders (node_modules, .git) to the daemon during build. This reduces the build context, speeds up the build, and prevents overwriting installed dependencies in the image."
    },
    difficulty: 'intermediate'
  },
  {
    id: 14,
    title: { fr: "Lab 14 : Multi-stage build", en: "Lab 14: Multi-stage Build" },
    objective: {
      fr: "Créer un Dockerfile multi-étapes qui sépare la phase de build de la phase de production.",
      en: "Create a multi-stage Dockerfile that separates the build phase from the production phase."
    },
    instructions: {
      fr: "Écrivez un Dockerfile avec deux étapes : une étape 'builder' qui installe les dépendances et compile le code, et une étape finale 'production' qui ne copie que les artefacts nécessaires. L'image finale doit être la plus légère possible.",
      en: "Write a Dockerfile with two stages: a 'builder' stage that installs dependencies and compiles code, and a final 'production' stage that copies only the necessary artifacts. The final image should be as light as possible."
    },
    hasSolution: true,
    solution: `FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["node", "dist/index.js"]`,
    solutionExplanation: {
      fr: "Le multi-stage build utilise deux instructions FROM. La première étape 'builder' contient tous les outils de compilation. La seconde étape ne copie que le résultat du build, sans les dépendances de développement. L'image finale est beaucoup plus légère et plus sécurisée.",
      en: "Multi-stage build uses two FROM instructions. The first 'builder' stage contains all compilation tools. The second stage only copies the build output, without development dependencies. The final image is much lighter and more secure."
    },
    difficulty: 'advanced'
  },
  {
    id: 15,
    title: { fr: "Lab 15 : Migration VM vers Docker", en: "Lab 15: VM to Docker Migration" },
    objective: {
      fr: "Migrer une application Node.js + MongoDB d'un déploiement VM traditionnel vers Docker Compose.",
      en: "Migrate a Node.js + MongoDB application from a traditional VM deployment to Docker Compose."
    },
    instructions: {
      fr: "Transformez une application Node.js Express avec MongoDB en services Docker. Créez un Dockerfile, un compose.yml avec services 'app' et 'mongo', un volume persistant pour MongoDB, un réseau partagé, et utilisez des variables d'environnement.",
      en: "Transform a Node.js Express application with MongoDB into Docker services. Create a Dockerfile, a compose.yml with 'app' and 'mongo' services, a persistent volume for MongoDB, a shared network, and use environment variables."
    },
    hasSolution: true,
    solution: `# Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]

# compose.yml
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - MONGO_URL=mongodb://mongo:27017/docker_course
      - NODE_ENV=production
    depends_on:
      - mongo
    networks:
      - app_network
    restart: unless-stopped

  mongo:
    image: mongo:7
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db
    networks:
      - app_network
    restart: unless-stopped

volumes:
  mongo_data:

networks:
  app_network:`,
    solutionExplanation: {
      fr: "Cette migration transforme un déploiement VM manuel en une stack Docker reproductible. L'API utilise le nom de service 'mongo' pour la connexion à la base de données. Le volume mongo_data préserve les données. Le réseau app_network isole la communication entre les conteneurs.",
      en: "This migration transforms a manual VM deployment into a reproducible Docker stack. The API uses the service name 'mongo' for database connection. The mongo_data volume preserves data. The app_network isolates communication between containers."
    },
    difficulty: 'advanced'
  }
];

export const finalChallenge = {
  title: { fr: "Challenge final avancé Docker", en: "Final Advanced Docker Challenge" },
  subtitle: {
    fr: "Créer et déployer une application Node.js + MongoDB conteneurisée complète",
    en: "Create and deploy a complete containerized Node.js + MongoDB application"
  },
  objective: {
    fr: "Construire de zéro une API Express complète connectée à MongoDB, entièrement conteneurisée avec Docker Compose, avec variables d'environnement et vérification via le navigateur ou Postman. Aucune correction n'est fournie pour ce challenge.",
    en: "Build from scratch a complete Express API connected to MongoDB, fully containerized with Docker Compose, with environment variables and verification via browser or Postman. No correction is provided for this challenge."
  },
  requirements: [
    {
      fr: "Créer une API Node.js Express avec au moins 2 routes (GET / et GET /health)",
      en: "Create a Node.js Express API with at least 2 routes (GET / and GET /health)"
    },
    {
      fr: "Connecter l'application à MongoDB en utilisant Mongoose",
      en: "Connect the application to MongoDB using Mongoose"
    },
    {
      fr: "Écrire un Dockerfile multi-étapes optimisé pour la production",
      en: "Write an optimized multi-stage Dockerfile for production"
    },
    {
      fr: "Créer un fichier compose.yml avec les services 'api' et 'database'",
      en: "Create a compose.yml file with 'api' and 'database' services"
    },
    {
      fr: "Exposer l'API sur le port 3000 et MongoDB sur le port 27017",
      en: "Expose the API on port 3000 and MongoDB on port 27017"
    },
    {
      fr: "Utiliser des variables d'environnement (NODE_ENV, PORT, MONGO_URI)",
      en: "Use environment variables (NODE_ENV, PORT, MONGO_URI)"
    },
    {
      fr: "Ajouter un volume persistant pour les données MongoDB",
      en: "Add a persistent volume for MongoDB data"
    },
    {
      fr: "Ajouter un réseau Docker partagé entre l'API et la base de données",
      en: "Add a shared Docker network between the API and the database"
    },
    {
      fr: "Builder et lancer le projet avec 'docker compose up --build'",
      en: "Build and run the project with 'docker compose up --build'"
    },
    {
      fr: "Vérifier que l'API répond correctement via http://localhost:3000",
      en: "Verify that the API responds correctly via http://localhost:3000"
    }
  ],
  expectedResult: {
    fr: "Résultat attendu : Une API fonctionnelle retournant un message JSON sur GET /, un statut 200 sur GET /health, et la preuve que les données sont persistées entre les redémarrages du conteneur. L'architecture doit inclure un réseau dédié, un volume persistant, et des variables d'environnement.",
    en: "Expected result: A functional API returning a JSON message on GET /, a 200 status on GET /health, and proof that data persists between container restarts. The architecture must include a dedicated network, a persistent volume, and environment variables."
  }
};
