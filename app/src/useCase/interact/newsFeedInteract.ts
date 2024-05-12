import {master} from '@kuzrwkd/skys-core/dynamodb';
import {newsfeedIndex} from '@kuzrwkd/skys-core/elasticsearch';
import {injectable} from 'tsyringe';
import type {NewsfeedPresentation} from '@kuzrwkd/skys-core/entities';

export interface INewsFeedInteract {
  handle(): Promise<NewsfeedPresentation>;
}

@injectable()
export class NewsFeedInteract implements INewsFeedInteract {
  async handle() {
    try {
      const masterData = await master.get();
      if (masterData) {
        const newsfeed = await newsfeedIndex.getDocumentByQueryMatchAll();
        const {mediaAllItems, categoryAllItems} = masterData;
        const result = newsfeed.hits.hits.map(item => {
          const mediaData = mediaAllItems.find(_ => item._source.media_id === _.media_id);
          const baseParams: NewsfeedPresentation[number] = {
            ...item._source,
            media: {id: mediaData.id, name: mediaData.name},
            category: categoryAllItems.reduce((acc, _) => {
              if (item._source.category_ids.includes(_.category_id)) {
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
        return result;
      }
    } catch (error) {
      throw error;
    }
  }
}
