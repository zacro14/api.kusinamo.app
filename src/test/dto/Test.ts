import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class TestArgs {
  @Field(() => String, { nullable: true })
  name!: string;
}
