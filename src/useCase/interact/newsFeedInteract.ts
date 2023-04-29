import { mediaTable, newsfeedTable } from '@kuzrwkd/skys-core/dynamodb';
import { NewsfeedSchema } from '@kuzrwkd/skys-core/entities';
import { injectable } from 'tsyringe';

import { APIResponseItem } from '@/useCase/newsFeedUseCase';

export interface INewsFeedInteract {
  handle(): Promise<APIResponseItem[]>;
}

@injectable()
export class NewsFeedInteract {
  async handle() {
    const res = [];
    const { name: mediaName, media_id: mediaId } = await mediaTable.getMediaItemByMediaId(1);
    const result = await newsfeedTable.getNewsfeedAllItems();

    result.forEach((item: NewsfeedSchema) => {
      const baseParams: APIResponseItem = {
        id: item.id,
        title: item.title,
        url: item.url,
        media: {
          media_id: null,
          name: mediaName,
        },
        category: item.category,
        article_created_at: item.article_created_at,
        article_updated_at: item.article_updated_at,
        created_at: item.created_at,
        updated_at: item.updated_at,
      };

      res.push({ ...baseParams, media: { media_id: mediaId, name: mediaName } });
    });

    return res;
  }
}
