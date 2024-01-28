import {Module} from '@nestjs/common';
import {NewsfeedResolver} from './newsfeed.resolver';
import {NewsfeedService} from './newsfeed.service';

@Module({
  providers: [NewsfeedService, NewsfeedResolver],
})
export class NewsfeedModule {}
