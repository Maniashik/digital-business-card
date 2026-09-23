import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module.js';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ProfileModule } from './profile/profile.module.js';

@Module({
  imports: [
    PrismaModule,
    ProfileModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
      path: '/graphql',
    }),
  ],
})
export class AppModule {}
