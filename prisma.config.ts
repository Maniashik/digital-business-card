import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    seed: 'tsx src/seed.ts',
    path: 'prisma/migrations',
  },
  datasource: {
    // url: process.env['DB_URL'],
    url: process.env['DATABASE_URL'],
  },
});
