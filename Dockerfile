# Étape 1 : Build de l'app
FROM node:20-alpine AS builder

WORKDIR /app

# Copier package.json et package-lock.json / yarn.lock
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Générer Prisma client
RUN npx prisma generate

# Copier le reste de l'application
COPY . .

# Build Next.js
RUN npm run build

# Étape 2 : Image de production
FROM node:20-alpine

WORKDIR /app

# Copier depuis l'image builder
COPY --from=builder /app ./

# Exposer le port Next.js
EXPOSE 3000

# Lancer Prisma migrate puis Next.js
CMD sh -c "npx prisma migrate deploy && npm run start"