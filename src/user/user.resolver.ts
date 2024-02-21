import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from './models/user.model';
import { CreateUserInput } from './dto/createuser.input';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}
  @Mutation(() => User)
  async createUser(@Args() args: CreateUserInput): Promise<User | null> {
    return this.userService.createUser(args);
  }
}
