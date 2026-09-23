# Stage 1: Базовый образ и установка всех зависимостей
FROM node:26-alpine AS base
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY prisma ./prisma/
RUN npx prisma generate

# Stage 2: Разработка (develop)
FROM base AS development
COPY . .
CMD ["npm", "run", "start:dev"]

# Sage 3: Сборка production (build)
FROM base AS builder
COPY . .
RUN npm run build

# Stage 4: Final образ для сервера
FROM node:26-alpine AS production
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --omit=dev
COPY prisma ./prisma
COPY prisma.config.ts ./prisma.config.ts
RUN npx prisma generate
COPY --from=builder /usr/src/app/dist ./dist
COPY entrypoint.sh /usr/src/app/entrypoint.sh
RUN chmod +x /usr/src/app/entrypoint.sh
EXPOSE 3000
ENTRYPOINT ["sh", "/usr/src/app/entrypoint.sh"]