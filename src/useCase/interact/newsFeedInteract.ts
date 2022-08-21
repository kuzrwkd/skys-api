import dynamodbUseCase, {
  MediaTableUseCase,
  IMediaTableUseCase,
  NewsfeedTableUseCase,
  INewsfeedTableUseCase,
} from '@kuzrwkd/skys-core/dynamodb';
import { NewsfeedSchema } from '@kuzrwkd/skys-core/entities';
import { injectable } from 'tsyringe';

import { APIResponseItem } from '@/useCase/newsFeedUseCase';

export interface INewsFeedInteract {
  handle(): Promise<APIResponseItem[]>;
}

@injectable()
export class NewsFeedInteract {
  private mediaTableUseCase: IMediaTableUseCase;
  private newsfeedTableUseCase: INewsfeedTableUseCase;

  constructor() {
    this.mediaTableUseCase = dynamodbUseCase.resolve<MediaTableUseCase>('MediaTableUseCase');
    this.newsfeedTableUseCase = dynamodbUseCase.resolve<NewsfeedTableUseCase>('NewsfeedTableUseCase');
  }

  async handle() {
    const res = [];
    const { name: mediaName, id: mediaId } = await this.mediaTableUseCase.getMediaById(1);
    const result = await this.newsfeedTableUseCase.scanNewsfeed();

    result.forEach((item: NewsfeedSchema) => {
      const baseParams: APIResponseItem = {
        id: item.id,
        title: item.title,
        url: item.url,
        media: {
          id: null,
          name: '',
        },
        article_created_at: item.article_created_at,
        article_updated_at: item.article_updated_at,
        created_at: item.created_at,
        updated_at: item.updated_at,
      };

      res.push({ ...baseParams, media: { id: mediaId, name: mediaName } });
    });

    return res;
  }
}
