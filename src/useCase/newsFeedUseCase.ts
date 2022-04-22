import { container as newsFeedUseCase } from 'tsyringe';

import { NewsFeedEntity } from '@/entity/newsFeedEntity';
import { NewsFeedDB } from '@/repository/db/newsFeedDB';
import { NewsFeedInteract } from '@/useCase/interact/newsFeedInteract';

newsFeedUseCase.register<NewsFeedEntity>('NewsFeedEntity', { useClass: NewsFeedEntity });
newsFeedUseCase.register<NewsFeedInteract>('NewsFeedInteract', { useClass: NewsFeedInteract });
newsFeedUseCase.register<NewsFeedDB>('NewsFeedDB', { useClass: NewsFeedDB });

export default newsFeedUseCase;
