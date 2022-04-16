import { Injectable } from '@nestjs/common';
import { Newsfeed } from '@/server/newsfeed/newsfeed.schema';

@Injectable()
export class NewsfeedService {
  private newsfeed: Newsfeed[] = [
    {
      id: '1',
      title: '景気先行き巡り見方対立　株・商品強気、金利は慎重',
      url: 'https://www.nikkei.com/article/DGXZQOUB2417Y0U1A720C2000000/',
      organization: {
        id: 1,
        name: '日本経済新聞',
      },
      article_created_at: '2021-07-25T03:00:00.000Z',
      article_updated_at: '',
    },
    {
      id: '1',
      title: '景気先行き巡り見方対立　株・商品強気、金利は慎重',
      url: 'https://www.nikkei.com/article/DGXZQOUB2417Y0U1A720C2000000/',
      organization: {
        id: 1,
        name: '日本経済新聞',
      },
      article_created_at: '2021-07-25T03:00:00.000Z',
      article_updated_at: '2021-07-25T09:00:00.000Z',
    },
  ];

  findAll(): Newsfeed[] {
    return this.newsfeed;
  }
}
