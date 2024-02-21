import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Test {
  @Field({ description: 'hello world' })
  test: string;
}
