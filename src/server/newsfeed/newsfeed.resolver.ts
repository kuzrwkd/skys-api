import { Query, Resolver } from '@nestjs/graphql';

import { Newsfeed } from '@/server/newsfeed/newsfeed.schema';
import { NewsfeedService } from '@/server/newsfeed/newsfeed.service';

@Resolver()
export class NewsfeedResolver {
  constructor(private newsfeedService: NewsfeedService) {}

  @Query(() => [Newsfeed], { nullable: 'items' })
  newsfeed() {
    return this.newsfeedService.findAll();
  }
}
