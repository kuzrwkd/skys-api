import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { NewsfeedModule } from '@/server/newsfeed/newsfeed.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src/server/schema.gql'),
      driver: ApolloDriver,
      sortSchema: true,
    }),
    NewsfeedModule,
  ],
})
export class AppModule {}
