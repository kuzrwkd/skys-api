declare namespace NewsFeed {
  type Entity = {
    id: string;
    title: string;
    url: string;
    organization: Organization;
    article_created_at: string;
    article_updated_at?: string;
  };

  type Organization = {
    id: number;
    name?: string;
  };

  interface INewsFeedEntity {
    set setNewsFeed(Entity: Entity[]);
    get getNewsFeed(): Entity[];
  }

  interface INewsFeedInteract {
    handle(): Promise<Entity[]>;
  }

  interface INewsFeedDB {
    getOrganizationById(organization_id: number): Promise<NewsFeed.Organization>;
    scanNewsFeed(): Promise<DB.NewsFeedTableSchema>;
  }
}
