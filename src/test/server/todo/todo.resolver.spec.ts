import { Test, TestingModule } from '@nestjs/testing';
import { TodoResolver } from '@/server/todo/todo.resolver';

describe('TodoResolver', () => {
  let resolver: TodoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoResolver],
    }).compile();

    resolver = module.get<TodoResolver>(TodoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
