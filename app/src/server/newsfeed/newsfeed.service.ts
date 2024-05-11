import {Injectable} from '@nestjs/common';
import type {INewsFeedInteract} from '@/useCase';
import type {NewsfeedPresentation} from '@kuzrwkd/skys-core/entities';
import {container} from '@/useCase';

export interface INewsfeedService {
  findAll(): Promise<NewsfeedPresentation>;
}

@Injectable()
export class NewsfeedService implements INewsfeedService {
  private newsFeedInteract: INewsFeedInteract;

  constructor() {
    this.newsFeedInteract = container.resolve<INewsFeedInteract>('NewsFeedInteract');
  }

  findAll() {
    return this.newsFeedInteract.handle();
  }
}
