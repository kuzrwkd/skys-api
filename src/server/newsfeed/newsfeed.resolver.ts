import { Query, Resolver } from '@nestjs/graphql';

import { Newsfeed } from '@/server/newsfeed/newsfeed.schema';
import { NewsfeedService } from '@/server/newsfeed/newsfeed.service';
import { APIResponseItem } from '@/useCase/newsFeedUseCase';

export interface INewsfeedResolver {
  newsfeed(): Promise<APIResponseItem[]>;
}

@Resolver()
export class NewsfeedResolver implements INewsfeedResolver {
  constructor(private newsfeedService: NewsfeedService) {}

  @Query(() => [Newsfeed], { nullable: 'items' })
  newsfeed() {
    return this.newsfeedService.findAll();
  }
}
