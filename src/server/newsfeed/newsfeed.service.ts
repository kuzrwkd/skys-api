import { Injectable } from '@nestjs/common';

import newsFeedUseCase from '@/useCase/newsFeedUseCase';

@Injectable()
export class NewsfeedService {
  private newsFeedInteract: NewsFeed.INewsFeedInteract;

  constructor() {
    this.newsFeedInteract = newsFeedUseCase.resolve<NewsFeed.INewsFeedInteract>('NewsFeedInteract');
  }

  findAll() {
    return this.newsFeedInteract.handle();
  }
}
