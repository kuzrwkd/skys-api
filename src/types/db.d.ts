declare namespace DB {
  type CreateAndUpdateColumn = {
    created_at: string;
    updated_at?: string;
  };

  type NewsFeedTableSchema = Omit<Entity, 'organization'> & { organization_id: number } & CreateAndUpdateColumn;
}
