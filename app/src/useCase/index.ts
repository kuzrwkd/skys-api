import {container} from 'tsyringe';
import type {INewsFeedInteract} from '@/useCase/interact/newsFeedInteract';
import {NewsFeedInteract} from '@/useCase/interact/newsFeedInteract';

container.register<INewsFeedInteract>('NewsFeedInteract', {useClass: NewsFeedInteract});

export {INewsFeedInteract} from '@/useCase/interact/newsFeedInteract';

export {container};
