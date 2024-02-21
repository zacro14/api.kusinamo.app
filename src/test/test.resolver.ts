import { Query, Resolver } from '@nestjs/graphql';
import { Test } from 'src/models/Test';
import { TestService } from './test.service';

@Resolver(() => Test)
export class TestResolver {
  constructor(private testService: TestService) {}

  @Query(() => Test, { description: 'test' })
  async getTest(): Promise<Test | null> {
    return this.testService.test();
  }
}
