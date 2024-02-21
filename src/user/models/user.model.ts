import { Field } from '@nestjs/graphql';

export class User {
  @Field(() => String)
  email: string;
}
