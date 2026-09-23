# Digital Business Card Backend

Это тестовое задание — backend-сервис для цифровой визитки с использованием NestJS, Prisma, GraphQL и PostgreSQL.

Запускается на: http://localhost:3000/graphql

## Описание проекта

Сервис предоставляет API для хранения и отображения информации о профиле, навыках, опыте работы и проектах.

Основные сущности:

- Profile
- Skill
- Experience
- Project

## Технологии

- Node.js
- NestJS
- Prisma
- PostgreSQL
- GraphQL
- Docker
- Docker Compose

## Требования

Перед запуском убедитесь, что у вас установлены:

- Docker
- Docker Compose

## Переменные окружения

Создайте файл `.env` в корне проекта и укажите параметры подключения к PostgreSQL.

Пример:

```env
DB_USER=digital_card_user
DB_PASSWORD=digital_card_password
DB_NAME=digital_card
DB_URL=postgresql://digital_card_user:digital_card_password@postgres:5432/digital_card?schema=public
```

Для локального запуска Prisma CLI можно использовать localhost, а внутри Docker-сети — postgres.

## Запуск в прод режиме

```
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build
```

Что происходит в прод режиме:

- запускается PostgreSQL
- запускается backend
- автоматически применяется миграция Prisma
- автоматически выполняется seeding
- запускается приложение

## Запуск в dev режиме

Для dev сборки выполните:

```
docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build
```

В dev режиме миграции и seed нужно выполнить вручную:

```
docker compose exec backend npx prisma migrate deploy
docker compose exec backend npx prisma db seed
```

Или, если вы запускаете проект локально на хосте:

```
npx prisma migrate deploy
npx prisma db seed
```

## Примечание

Проект является тестовым заданием, поэтому основной акцент сделан на корректную работу с:

- Docker
- Prisma
- GraphQL
- PostgreSQL
- автоматическим запуском миграций и seed

## Пример запроса

```
query {
  profile {
    id
    name
    shortDescription
    githubUrl
    linkedInUrl
    skills {
      id
      name
    }
    experiences {
      id
      company
      position
      startDate
      endDate
      achievements
    }
    projects {
      id
      name
      url
    }
  }
}
```
