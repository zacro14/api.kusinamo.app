import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AuthResolver } from './auth/auth.resolver';
import { AuthService } from './auth/auth.service';
import { PostResolver } from './post/post.resolver';
import { PostService } from './post/post.service';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { UserResolver } from './user/user.resolver';
import { UserService } from './user/user.service';
import { AppResolver } from './app.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UserModule,
    PrismaModule,
  ],
  providers: [
    AuthResolver,
    AuthService,
    PrismaService,
    UserResolver,
    UserService,
    PostResolver,
    PostService,
    AppResolver,
  ],
})
export class AppModule {}
