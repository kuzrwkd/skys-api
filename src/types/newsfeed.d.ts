declare namespace NewsFeed {
  type Entity = {
    id: string;
    title: string;
    url: string;
    media: Media;
    article_created_at: string;
    article_updated_at?: string;
  };

  type Media = {
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
    getMediaById(media_id: number): Promise<NewsFeed.Media>;
    scanNewsFeed(): Promise<DB.NewsFeedTableSchema>;
  }
}
