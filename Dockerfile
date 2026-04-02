# Étape 1 : Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copier package.json et package-lock.json / yarn.lock
COPY package*.json ./

RUN npm install

# Copier tout le projet, y compris prisma/schema.prisma
COPY . .

# Générer Prisma client
RUN npx prisma generate

# Build Next.js
RUN npm run build

# Étape 2 : Production
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

# Déployer les migrations Prisma et démarrer Next.js
CMD sh -c "npx prisma migrate deploy && npm run start"