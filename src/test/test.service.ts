import { Injectable } from '@nestjs/common';
import { Test } from 'src/models/Test';

@Injectable()
export class TestService {
  async test(): Promise<Test> {
    return {
      test: 'Hello world',
    };
  }
}
