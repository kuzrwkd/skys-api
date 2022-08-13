declare namespace DB {
  type CreateAndUpdateColumn = {
    created_at: string;
    updated_at?: string;
  };

  type NewsFeedTableSchema = Omit<Entity, 'media'> & { media_id: number } & CreateAndUpdateColumn;
}
