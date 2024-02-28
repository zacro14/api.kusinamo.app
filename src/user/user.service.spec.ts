import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { UserService } from './user.service';

describe('UserService', () => {
  let userService: UserService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, PrismaService],
    }).compile();

    userService = module.get<UserService>(UserService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('user service should be defined', () => {
    expect(userService).toBeDefined();
  });

  it('create user', () => {
    expect(prismaService).toBeDefined();
  });

  it('get user by email', async () => {
    const testUser = {
      email: 'test@email.com',
      name: 'test user',
      id: 3,
    };

    const userEmail = { email: 'test@email.com' };

    expect(await userService.user(userEmail)).toEqual(testUser);
  });
});
