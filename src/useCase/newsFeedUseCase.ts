import { container as newsFeedUseCase } from 'tsyringe';

/**
 * Entity
 */
import { NewsFeedEntity } from '@/entity/newsFeedEntity';

/**
 * UseCase
 */
import { NewsFeedInteract } from '@/useCase/interact/newsFeedInteract';

/**
 * Repository
 */
import { NewsFeedDB } from '@/repository/db/newsFeedDB';

/**
 * Inject
 */
newsFeedUseCase.register<NewsFeedEntity>('NewsFeedEntity', { useClass: NewsFeedEntity });
newsFeedUseCase.register<NewsFeedInteract>('NewsFeedInteract', { useClass: NewsFeedInteract });
newsFeedUseCase.register<NewsFeedDB>('NewsFeedDB', { useClass: NewsFeedDB });

export default newsFeedUseCase;
