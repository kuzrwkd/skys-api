import dynamodbUseCase, { IMediaTableUseCase, INewsfeedTableUseCase } from '@kuzrwkd/skys-core/dynamodb';
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
    this.mediaTableUseCase = dynamodbUseCase.resolve<IMediaTableUseCase>('MediaTableUseCase');
    this.newsfeedTableUseCase = dynamodbUseCase.resolve<INewsfeedTableUseCase>('NewsfeedTableUseCase');
  }

  async handle() {
    const res = [];
    const {
      id: mediaRecordId,
      name: mediaName,
      media_id: mediaId,
    } = await this.mediaTableUseCase.queryMediaByMediaId(1);
    const result = await this.newsfeedTableUseCase.scanNewsfeed();

    result.forEach((item: NewsfeedSchema) => {
      const baseParams: APIResponseItem = {
        id: item.id,
        title: item.title,
        url: item.url,
        media: {
          media_id: null,
          name: '',
        },
        category: item.category,
        article_created_at: item.article_created_at,
        article_updated_at: item.article_updated_at,
        created_at: item.created_at,
        updated_at: item.updated_at,
      };

      res.push({ ...baseParams, media: { id: mediaRecordId, media_id: mediaId, name: mediaName } });
    });

    return res;
  }
}
