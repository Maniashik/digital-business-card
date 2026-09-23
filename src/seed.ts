import 'dotenv/config';
import { PrismaClient, Prisma } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const dbUrl = process.env['DATABASE_URL'];
const adapter = new PrismaPg({
  connectionString: dbUrl,
});

const prisma = new PrismaClient({ adapter });

const userData: Prisma.ProfileCreateInput[] = [
  {
    name: 'Андрей Антипов',
    shortDescription: 'Fullstack разработчик и DevOps инженер',
    githubUrl: 'https://github.com/Maniashik',
    linkedInUrl: 'https://www.linkedin.com/in/andrey-solodovnikov-019b54406/',
    skills: {
      create: [
        { name: 'TypeScript' },
        { name: 'JavaScript' },
        { name: 'Golang' },
        { name: 'NodeJs' },
        { name: 'NestJs' },
        { name: 'React' },
        { name: 'Vue' },
        { name: 'NextJs' },
        { name: 'NuxtJs' },
        { name: 'Git' },
        { name: 'Prisma' },
        { name: 'StoryBook' },
        { name: 'Docker' },
        { name: 'Vite' },
        { name: 'Webpack' },
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'Less' },
        { name: 'PostgreSQL' },
      ],
    },
    experiences: {
      create: [
        {
          company: 'presto.heads',
          position: 'Fullstack разработчик',
          startDate: new Date('2019-02-01'),
          endDate: new Date('2023-04-01'),
          achievements: [
            'улучшил покрытие кода тестами с 40% до 80%',
            'ускорил загрузку интерфейса на 40% благодаря кешированию статических ресурсов',
          ],
        },
        {
          company: 'Цифровая лаборатория',
          position: 'Frontend-разработчик',
          startDate: new Date('2023-04-01'),
          endDate: new Date('2025-03-01'),
          achievements: [
            'опыт управления командой',
            'снизил количество ошибок в коде на 75% благодаря обновлению устаревших систем (legacy) и быстрой анализе сбоев через Sentry (критичные баги устранялись менее чем за 12 часов)',
            'вырастил и обучил 10+ разработчиков',
            'вынес ui-компоненты в отдельную библиотеку storybook которая была интигрирована в большинство имеющихся проектов',
          ],
        },
        {
          company: 'Интернет-энциклопедия РУВИКИ',
          position: 'Главный разработчик (Fullstack)',
          startDate: new Date('2025-03-01'),
          endDate: new Date('2026-05-01'),
          achievements: [
            'полностью перезапустил и оптимизировал техническую часть платформы РУВИКИ, значительно ускорив сайт для пользователей и упростил работу внутренней команды разработчиков',
            'руководство и делегирование задач между 5 разработчиками',
            'реализация Бота на Golang "Контроль «битых» ссылок": Утилита обходит внешние ссылки из статей. Она проверяет код ответа (200 OK) и сообщает о недоступных источниках',
            'сократил "вес" сайта на 60%, благодаря чему страницы теперь загружаются мгновенно (первый экран появляется быстрее 1.2 секунд)',
            'cоздал с нуля единую базу готовых компонентов (UI-kit) для команды из 20+ разработчиков',
          ],
        },
      ],
    },
    projects: {
      create: [
        {
          name: 'Digital Business Card',
          url: 'https://github.com/Maniashik/digital-business-card',
        },
      ],
    },
  },
];

export async function main() {
  await prisma.profile.deleteMany();

  for (const u of userData) {
    await prisma.profile.create({
      data: u,
    });
  }

  console.log('Data successfully loaded!');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
