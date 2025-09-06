# Étape 1 : base node
FROM node:20

# Définir le dossier de travail
WORKDIR /app

# Installer Angular CLI globalement
RUN npm install -g @angular/cli

# Copier package.json + package-lock.json pour installer les deps
COPY package*.json ./

RUN npm install

# Copier tout le reste (code source, configs, styles etc)
COPY . .

# Expose le port 4200 pour ng serve
EXPOSE 4200

# Commande pour lancer le serveur dev Angular
CMD ["ng", "serve", "--host", "0.0.0.0", "--poll", "2000"]
