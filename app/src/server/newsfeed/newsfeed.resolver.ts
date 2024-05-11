import {Query, Resolver} from '@nestjs/graphql';
import type {NewsfeedPresentation} from '@kuzrwkd/skys-core/entities';
import {Newsfeed} from '@/server/newsfeed/newsfeed.schema';
import {NewsfeedService} from '@/server/newsfeed/newsfeed.service';

export interface INewsfeedResolver {
  newsfeed(): Promise<NewsfeedPresentation>;
}

@Resolver()
export class NewsfeedResolver implements INewsfeedResolver {
  constructor(private newsfeedService: NewsfeedService) {}

  @Query(() => [Newsfeed], {nullable: 'items'})
  newsfeed() {
    return this.newsfeedService.findAll();
  }
}
