# Étape 1 : Build de l'app
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .  # 🔥 on copie tout AVANT Prisma

RUN npx prisma generate  # 🔥 maintenant Prisma voit le schema
RUN npm run build

# Étape 2 : Production
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "start"]