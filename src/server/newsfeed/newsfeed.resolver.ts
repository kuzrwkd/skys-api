import { Query, Resolver } from '@nestjs/graphql';
import { NewsfeedService } from '@/server/newsfeed/newsfeed.service';
import { Newsfeed } from '@/server/newsfeed/newsfeed.schema';

@Resolver()
export class NewsfeedResolver {
  constructor(private newsfeedService: NewsfeedService) {}

  @Query(() => [Newsfeed], { nullable: 'items' })
  findAll() {
    return this.newsfeedService.findAll();
  }
}
