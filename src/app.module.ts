import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TestResolver } from './test/test.resolver';
import { TestService } from './test/test.service';
import { AuthResolver } from './auth/auth.resolver';
import { AuthService } from './auth/auth.service';
import { PrismaService } from './prisma/prisma.service';
import { UserResolver } from './user/user.resolver';
import { UserService } from './user/user.service';
import { PostResolver } from './post/post.resolver';
import { PostService } from './post/post.service';
import { UserModule } from './user/user.module';
import { join } from 'path';
import { PrismaModule } from './prisma/prisma.module';

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
    TestResolver,
    TestService,
    AuthResolver,
    AuthService,
    PrismaService,
    UserResolver,
    UserService,
    PostResolver,
    PostService,
  ],
})
export class AppModule {}
