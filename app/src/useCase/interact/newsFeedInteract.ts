import {mediaTable, newsfeedTable, categoryTable} from '@kuzrwkd/skys-core/dynamodb';
import {NewsfeedSchema} from '@kuzrwkd/skys-core/entities';
import {injectable} from 'tsyringe';
import {APIResponseItem} from '@/useCase/newsFeedUseCase';

export interface INewsFeedInteract {
  handle(): Promise<APIResponseItem[]>;
}

@injectable()
export class NewsFeedInteract {
  async handle() {
    const [categoryAllItems, newsfeedAllItems, mediaAllItems] = await Promise.all([
      categoryTable.getAllItems(),
      newsfeedTable.getAllItems(),
      mediaTable.getAllItems(),
    ]).catch(error => {
      throw new Error(error.message);
    });

    return newsfeedAllItems.map((item: NewsfeedSchema) => {
      const mediaData = mediaAllItems.find(_ => item.media_id === _.media_id);
      const baseParams: APIResponseItem = {
        ...item,
        media: {id: mediaData.id, name: mediaData.name},
        category: categoryAllItems.reduce((acc, _) => {
          if (item.category_ids.includes(_.category_id)) {
            acc.push({id: _.id, name: _.name});
          }
          return acc;
        }, []),
      };

      return {
        ...baseParams,
        media: baseParams.media,
        category: baseParams.category,
      };
    });
  }
}
