import {mediaTable, newsfeedTable} from '@kuzrwkd/skys-core/dynamodb';
import {NewsfeedSchema} from '@kuzrwkd/skys-core/entities';
import {injectable} from 'tsyringe';
import {APIResponseItem} from '@/useCase/newsFeedUseCase';

export interface INewsFeedInteract {
  handle(): Promise<APIResponseItem[]>;
}

@injectable()
export class NewsFeedInteract {
  async handle() {
    const res = [];
    const {name: mediaName, id} = await mediaTable.getMediaItemByMediaId(1);
    const result = await newsfeedTable.getNewsfeedAllItems();

    result.forEach((item: NewsfeedSchema) => {
      const baseParams: APIResponseItem = {
        ...item,
        media: {
          id,
          name: mediaName,
        },
      };

      res.push({...baseParams, media: {id, name: mediaName}});
    });

    return res;
  }
}
