# Étape 1 : Build de l'app
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY . .

RUN npm install
RUN npm run build

# Étape 2 : Exécution de l'app avec un serveur optimisé
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "start"]
