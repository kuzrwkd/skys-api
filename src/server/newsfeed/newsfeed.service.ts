import { Injectable } from '@nestjs/common';

import newsFeedUseCase, { INewsFeedInteract, APIResponseItem } from '@/useCase/newsFeedUseCase';

export interface INewsfeedService {
  findAll(): Promise<APIResponseItem[]>;
}

@Injectable()
export class NewsfeedService implements INewsfeedService {
  private newsFeedInteract: INewsFeedInteract;

  constructor() {
    this.newsFeedInteract = newsFeedUseCase.resolve<INewsFeedInteract>('NewsFeedInteract');
  }

  findAll() {
    return this.newsFeedInteract.handle();
  }
}
