import {MediaSchema, NewsfeedSchema, CategorySchema} from '@kuzrwkd/skys-core/entities';
import {container as newsFeedUseCase} from 'tsyringe';
import {NewsFeedInteract} from '@/useCase/interact/newsFeedInteract';

newsFeedUseCase.register<NewsFeedInteract>('NewsFeedInteract', {useClass: NewsFeedInteract});

export type APIResponseItem = Omit<NewsfeedSchema, 'media_id'> & {
  media: Omit<MediaSchema, 'media_id' | 'domain'>;
  category: Omit<CategorySchema, 'category_id'>[];
};
export {INewsFeedInteract} from '@/useCase/interact/newsFeedInteract';
export default newsFeedUseCase;
