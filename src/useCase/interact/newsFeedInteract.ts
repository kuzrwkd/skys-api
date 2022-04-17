/**
 * Lib
 */
import { injectable, inject } from 'tsyringe';

@injectable()
export class NewsFeedInteract {
  constructor(
    @inject('NewsFeedEntity') private newsFeed: NewsFeed.INewsFeedEntity,
    @inject('NewsFeedDB') private NewsFeedDB: NewsFeed.INewsFeedDB,
  ) {}

  async handle() {
    const res = [];
    const { name: organizationName, id: organizationId } = await this.NewsFeedDB.getOrganizationById(1);
    const result = await this.NewsFeedDB.scanNewsFeed();

    result.forEach((item: DB.NewsFeedTableSchema) => {
      const baseParams: NewsFeed.Entity = {
        id: item.id,
        title: item.title,
        url: item.url,
        organization: {
          id: null,
          name: '',
        },
        article_created_at: item.article_created_at,
        article_updated_at: item.article_updated_at,
      };

      if (item.organization_id === 1) {
        res.push({ ...baseParams, organization: { id: organizationId, name: organizationName } });
      }
    });

    return res;
  }
}
