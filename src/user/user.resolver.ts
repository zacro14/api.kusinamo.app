import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './dto/createuser.input';
import { User } from '../models/user.model';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Mutation(() => User)
  async createUser(@Args('user') args: CreateUserInput): Promise<User | null> {
    return this.userService.createUser(args);
  }

  @Query(() => User)
  async user(@Args('id') id: number): Promise<User | null> {
    return this.userService.user({ id });
  }

  @Query(() => User)
  async users(): Promise<User[]> {
    return this.userService.users({});
  }
}
