import {Field, ID, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class Media {
  @Field(() => ID)
  id!: string;

  @Field(() => String, {nullable: true})
  name!: string | null;
}

@ObjectType()
export class Newsfeed {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  title!: string;

  @Field(() => String)
  url!: string;

  @Field(() => String)
  category: string;

  @Field(() => Media)
  media!: Media;

  @Field(() => String)
  article_created_at!: string;

  @Field(() => String)
  article_updated_at!: string;
}
