import { Module } from '@nestjs/common';
import { NewsfeedService } from './newsfeed.service';
import { NewsfeedResolver } from './newsfeed.resolver';

@Module({
  providers: [NewsfeedService, NewsfeedResolver],
})
export class NewsfeedModule {}
