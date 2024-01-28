import {Test, TestingModule} from '@nestjs/testing';
import {NewsfeedResolver} from '@/server/newsfeed/newsfeed.resolver';

describe('NewsfeedResolver', () => {
  let resolver: NewsfeedResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewsfeedResolver],
    }).compile();

    resolver = module.get<NewsfeedResolver>(NewsfeedResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
